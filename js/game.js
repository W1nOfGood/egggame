// Core game: cooking simulation, actions (butter, crack, flip, stir, plate, season, serve), orders & modes.
import * as THREE from 'three';
import { BURNER, GRATE_TOP, HOME, PAN, PLATE, ROOM_TEMP, heatToTarget, surfaceHeight } from './config.js';
import { Food } from './food.js';
import { makeWholeEgg, makeShellHalves, makeButterPat } from './props.js';
import * as S from './scoring.js';
import { audio } from './audio.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion();
const ease = (t) => 1 - Math.pow(1 - t, 3);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));

export class Game {
  constructor(world) {
    Object.assign(this, world); // scene, camera, mats, props, kitchen, fx
    this.listeners = {};
    this.anims = [];
    this.mode = 'menu'; this.paused = false; this.time = 0;
    this.heat = 0; this.panTemp = ROOM_TEMP;
    this.butter = { amount: 0, melt: 0, browned: 0, pats: [] };
    this.food = null; this.foodLoc = null; this.crack = null;
    this.settings = { guide: true, hints: true };
    this.order = null; this.orders = []; this.orderIdx = 0; this.roundScore = 0; this.results = []; this.orderTime = 0;
    this.servedCount = 0; this.tutStep = 0; this.camAz = 0;
    this.spat = { cooldown: 0, stirAngle: 0, lastA: null, lastScrape: 0, wasInPan: false, mode: 'free' };
    this.shk = { lastY: null, dir: 0, extreme: 0, cooldown: 0 };
    this.fxClock = { steam: 0, bubble: 0, smoke: 0, spatter: 0 };
    this._buildButterPool();
  }
  on(e, f) { (this.listeners[e] ||= []).push(f); }
  emit(e, d) { (this.listeners[e] || []).forEach((f) => f(d)); }
  toast(text, kind = '') { this.emit('toast', { text, kind }); }

  get panAnchor() { return this.props.pan.userData.foodAnchor; }
  get plateAnchor() { return this.props.plate.userData.foodAnchor; }
  get panOnBurner() { const p = this.props.pan.position; return Math.hypot(p.x - BURNER.x, p.z - BURNER.z) < 0.05; }
  get busy() { return this.mode === 'menu' || this.paused; }

  _buildButterPool() {
    const shape = new THREE.Shape();
    for (let i = 0; i <= 48; i++) { const a = (i / 48) * Math.PI * 2, r = 1 + 0.07 * Math.sin(5 * a) + 0.04 * Math.sin(11 * a + 1); i ? shape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : shape.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
    this.poolMat = new THREE.MeshPhysicalMaterial({ color: '#ffd65c', roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.02, transparent: true, opacity: 0, depthWrite: false });
    this.pool = new THREE.Mesh(new THREE.ShapeGeometry(shape, 4), this.poolMat);
    this.pool.rotation.x = -Math.PI / 2; this.pool.position.y = 0.004; this.pool.scale.setScalar(0.01); this.pool.renderOrder = 1;
    this.panAnchor.add(this.pool);
  }

  // ---------------- modes & orders ----------------
  start(mode) {
    this.mode = mode; this.paused = false;
    this.resetKitchen();
    this.results = []; this.roundScore = 0; this.servedCount = 0; this.tutStep = 0;
    if (mode === 'orders') { this.orders = S.makeRound(); this.setOrder(0); }
    else if (mode === 'tutorial') { this.orders = [S.tutorialOrder()]; this.setOrder(0); }
    else { this.orders = []; this.order = null; }
    this.emit('mode', mode); this.emit('changed');
  }
  setOrder(i) { this.orderIdx = i; this.order = this.orders[i]; this.orderTime = 0; this.emit('order', this.order); }
  resetKitchen() {
    this.clearFood(true); this.clearButter();
    this.setHeat(0, true); this.panTemp = ROOM_TEMP;
    this.fx.clear();
    for (const [k, obj] of Object.entries(this.props)) {
      const h = HOME[k === 'butterDish' ? 'butter' : k];
      if (h) this.flyTo(obj, h.x, h.z, 0.5);
    }
  }
  clearFood(instant = false) {
    const kill = (g, dispose) => {
      if (instant) { g.parent && g.parent.remove(g); dispose && dispose(); return; }
      this.anim(0.35, (t) => g.scale.setScalar(Math.max(0.001, 1 - ease(t))), () => { g.parent && g.parent.remove(g); dispose && dispose(); });
    };
    if (this.food) { const f = this.food; kill(f.group, () => f.dispose()); }
    if (this.crack) { kill(this.crack.group); }
    this.food = null; this.foodLoc = null; this.crack = null;
  }
  clearButter() {
    for (const p of this.butter.pats) p.mesh.parent && p.mesh.parent.remove(p.mesh);
    this.butter = { amount: 0, melt: 0, browned: 0, pats: [] };
    this.poolMat.opacity = 0; this.pool.scale.setScalar(0.01); this.poolMat.color.set('#ffd65c');
  }

  // ---------------- heat ----------------
  setHeat(v, silent = false) {
    v = Math.max(0, Math.min(10, Math.round(v * 10) / 10));
    if (Math.floor(v) !== Math.floor(this.heat) && !silent) audio.knob();
    this.heat = v;
    this.emit('heat', v);
  }

  // ---------------- generic animation helpers ----------------
  anim(dur, step, done) { this.anims.push({ t: 0, dur, step, done }); }
  flyTo(obj, x, z, dur = 0.45, yLift = 0.6, done) {
    const from = obj.position.clone();
    const toY = this.restY(obj, x, z);
    this.anim(dur, (t) => {
      const e = ease(t);
      obj.position.set(from.x + (x - from.x) * e, from.y + (toY - from.y) * e + Math.sin(Math.PI * t) * yLift, from.z + (z - from.z) * e);
      if (obj.userData.restRot !== undefined) obj.rotation.x *= 0.8;
    }, () => { obj.position.set(x, toY, z); done && done(); });
  }
  restY(obj, x, z) {
    if (obj === this.props.pan) return Math.hypot(x - BURNER.x, z - BURNER.z) < 0.05 ? GRATE_TOP : surfaceHeight(x, z);
    return surfaceHeight(x, z);
  }

  // ---------------- butter ----------------
  addButter(localX = 0, localZ = 0) {
    if (this.butter.amount >= 3) { this.toast('That\'s plenty of butter! 🧈'); return false; }
    const mesh = makeButterPat(this.mats);
    const r = Math.hypot(localX, localZ); if (r > 0.55) { localX *= 0.55 / r; localZ *= 0.55 / r; }
    mesh.position.set(localX, 0.08, localZ); mesh.rotation.y = Math.random() * 3;
    this.panAnchor.add(mesh);
    this.butter.pats.push({ mesh, melt: 0 });
    this.butter.amount++;
    if (this.food && this.foodLoc === 'pan') this.food.buttered = true;
    audio.butterDrop();
    this.emit('changed');
    return true;
  }
  autoButter() {
    if (this.busy) return;
    if (this.butter.amount >= 3) return this.toast('That\'s plenty of butter! 🧈');
    const pat = makeButterPat(this.mats);
    this.props.butterDish.getWorldPosition(_v); pat.position.copy(_v).setY(0.4); this.scene.add(pat);
    this.panAnchor.getWorldPosition(_v2);
    const from = pat.position.clone(), to = _v2.clone().setY(_v2.y + 0.1);
    audio.pick();
    this.anim(0.55, (t) => { pat.position.lerpVectors(from, to, ease(t)); pat.position.y += Math.sin(Math.PI * t) * 1.6; pat.rotation.z = t * 3; },
      () => { this.scene.remove(pat); this.addButter((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4); });
  }

  // ---------------- egg cracking ----------------
  canStartEgg() {
    if (this.food || this.crack) { this.toast('One egg at a time — serve or toss first!'); return false; }
    return true;
  }
  beginCrack(brown = false) {
    if (!this.canStartEgg()) return false;
    const group = new THREE.Group();
    const { left, right } = makeShellHalves(this.mats, brown);
    const pivotL = new THREE.Group(), pivotR = new THREE.Group();
    pivotL.add(left); pivotR.add(right); group.add(pivotL, pivotR);
    // contents peeking out once the halves separate
    const drip = new THREE.Group();
    const dw = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), new THREE.MeshPhysicalMaterial({ color: '#eef3ec', transparent: true, opacity: 0.6, roughness: 0.05, clearcoat: 1 }));
    dw.scale.set(1, 1.4, 1);
    const dy = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), new THREE.MeshPhysicalMaterial({ color: '#ffa21a', roughness: 0.08, clearcoat: 1 }));
    dy.position.y = -0.05; drip.add(dw, dy); drip.scale.setScalar(0.01); group.add(drip);
    group.traverse((c) => { c.userData.interact = 'crackEgg'; c.castShadow = true; });
    this.scene.add(group);
    this.crack = { group, pivotL, pivotR, drip, stage: 'hover', sep: 0, rough: false, brown, t: 0 };
    this._placeCrack(0);
    audio.pick();
    this.emit('changed');
    return true;
  }
  _placeCrack(dt) {
    const c = this.crack; if (!c) return;
    c.t += dt;
    this.panAnchor.getWorldPosition(_v);
    c.group.position.set(_v.x, _v.y + 1.05 + (c.stage === 'hover' ? Math.sin(c.t * 2.5) * 0.05 : 0), _v.z);
    c.group.rotation.set(0, this.camAz, c.stage === 'hover' ? Math.sin(c.t * 1.7) * 0.08 : 0);
  }
  crackTap() {
    const c = this.crack; if (!c || c.stage !== 'hover') return;
    c.stage = 'cracked';
    audio.crack();
    c.group.getWorldPosition(_v);
    this.fx.emit('shell', _v, { count: 5, spread: 0.2, floorY: _v.y - 1.2, color: c.brown ? '#e7b58a' : '#fff1df' });
    c.pivotL.position.x = -0.012; c.pivotR.position.x = 0.012;
    c.pivotL.rotation.z = 0.05; c.pivotR.rotation.z = -0.05;
    this.emit('changed');
  }
  pullApart(sep, speed) {
    const c = this.crack; if (!c || c.stage === 'hover' || c.stage === 'released') return;
    if (c.stage === 'cracked') audio.shellPull();
    c.stage = 'pulling';
    c.sep = Math.max(0, Math.min(1, sep));
    if (speed > 8 && c.sep > 0.15) c.rough = true;
    const s = c.sep;
    c.pivotL.position.x = -0.012 - s * 0.32; c.pivotR.position.x = 0.012 + s * 0.32;
    c.pivotL.rotation.z = 0.05 + s * 1.1; c.pivotR.rotation.z = -0.05 - s * 1.1;
    c.pivotL.position.y = c.pivotR.position.y = s * 0.12;
    const d = Math.max(0.01, (s - 0.12) * 1.6); c.drip.scale.set(Math.min(1, d), Math.min(1.3, d * 1.2), Math.min(1, d)); c.drip.position.y = -s * 0.25;
    if (c.sep > 0.6) this.releaseEgg();
  }
  releaseEgg() {
    const c = this.crack; if (!c || c.stage === 'released') return;
    c.stage = 'released';
    const food = new Food({ buttered: this.butter.amount > 0 });
    food.spread = 0;
    if (c.rough) { food.yolkBroken = true; this.toast('Too rough — the yolk broke! 💔', 'bad'); }
    const lx = (Math.random() - 0.5) * 0.25, lz = (Math.random() - 0.5) * 0.25;
    food.group.position.set(lx, 0.95, lz);
    food.refresh(true);
    this.panAnchor.add(food.group);
    this.food = food; this.foodLoc = 'pan'; this.crack = null;
    let vy = 0;
    const fall = { t: 0, dur: 9, step: null };
    fall.step = (t, dt) => {
      vy -= 14 * dt; food.group.position.y = Math.max(0, food.group.position.y + vy * dt);
      if (food.group.position.y <= 0) { fall.t = fall.dur; food.landed = true; this._landFood(); }
    };
    food.landed = false;
    this.anims.push(fall);
    // shell halves fly away and fade
    const g = c.group, l = c.pivotL, r = c.pivotR;
    g.remove(c.drip);
    this.anim(0.7, (t) => { l.position.x -= 0.04; r.position.x += 0.04; l.position.y += 0.03; r.position.y += 0.03; l.rotation.z += 0.08; r.rotation.z -= 0.08; g.scale.setScalar(1 - t * 0.6); },
      () => { this.scene.remove(g); });
    this.emit('changed');
  }
  _landFood() {
    audio.plop();
    if (this.panTemp > 120) { this.panAnchor.getWorldPosition(_v); this.fx.emit('spatter', _v.setY(_v.y + 0.1), { count: 8, spread: 0.8 }); }
    this.emit('changed');
  }

  // ---------------- spatula ----------------
  spatulaStart(mode) { this.spat.mode = mode; this.spat.lastA = null; this.spat.wasInPan = false; this.spat.stirAngle = 0; }
  /** Called every pointer move while the spatula is held. x,z world; vel = screen px/s */
  spatulaMove(x, z, vel, dt) {
    const sp = this.props.spatula, pan = this.props.pan, plate = this.props.plate;
    const lx = x - pan.position.x, lz = z - pan.position.z, r = Math.hypot(lx, lz);
    const inPan = r < PAN.innerR + 0.08;
    const overPlate = Math.hypot(x - plate.position.x, z - plate.position.z) < PLATE.r;
    let ty = inPan ? pan.position.y + PAN.floorY + 0.01 : overPlate ? plate.position.y + 0.1 : surfaceHeight(x, z) + 0.02;
    if (!inPan && r < PAN.rimR + 0.2) ty = pan.position.y + PAN.height + 0.04; // over the rim
    if (this.foodLoc === 'spatula') ty += 0.12;
    sp.position.x = x; sp.position.z = z;
    sp.position.y += (ty - sp.position.y) * Math.min(1, dt * 18);
    sp.rotation.set(this.foodLoc === 'spatula' ? -0.08 : 0, this.camAz, 0);

    const f = this.food;
    this.spat.cooldown -= dt;
    if (f && this.foodLoc === 'spatula') {
      if (vel.y < -1000 && Math.abs(vel.y) > 1.5 * Math.abs(vel.x) && this.spat.cooldown <= 0) this.flipFood(-vel.y);
      return;
    }
    if (!f || this.foodLoc !== 'pan' || !f.landed) { this._stirTrack(lx, lz, r, inPan, null, dt); return; }
    const d = Math.hypot(lx - f.group.position.x, lz - f.group.position.z);
    if (this.spat.cooldown <= 0 && inPan) {
      if (!f.scrambled && d < 0.5 && (this.spat.mode === 'lift' || this.spat.mode === 'free')) return this.liftFood();
      if (f.scrambled && this.spat.mode === 'lift' && d < 0.75) return this.liftFood();
    }
    // scoop scrambled eggs by dragging out over the rim
    if (f.scrambled && this.spat.wasInPan && r > PAN.rimR + 0.1) { if (f.w > 0.2) return this.liftFood(); this.toast('Let them set a little first!'); this.spat.wasInPan = false; }
    this._stirTrack(lx, lz, r, inPan, f, dt);
  }
  _stirTrack(lx, lz, r, inPan, f, dt) {
    const s = this.spat;
    if (!inPan) { s.lastA = null; return; }
    s.wasInPan = true;
    const a = Math.atan2(lz, lx);
    if (s.lastA !== null && r > 0.18) {
      const da = wrapAngle(a - s.lastA);
      const moved = Math.abs(da) * r;
      s.stirAngle += da;
      if (moved > 0.01 && this.time - s.lastScrape > 0.07) { audio.scrape(Math.min(1, moved * 8)); s.lastScrape = this.time; }
      if (f && !f.scrambled) {
        if (Math.abs(s.stirAngle) > Math.PI && !f.yolkBroken) { f.breakYolk(); }
        if (Math.abs(s.stirAngle) > Math.PI * 2.3) { f.scramble(); this.toast('Scrambling! 🥄', 'good'); this.emit('changed'); }
      } else if (f && f.scrambled) f.stir(moved * 1.6, this.time);
    }
    s.lastA = a;
  }
  liftFood() {
    const f = this.food;
    this.props.spatula.add(f.group);
    f.group.position.set(0, 0.045, -0.02); f.group.rotation.set(0, 0, 0);
    this.foodLoc = 'spatula';
    audio.scrape(1);
    this.emit('changed');
  }
  flipFood(speed) {
    const f = this.food, g = f.group;
    this.scene.attach(g);
    const from = g.position.clone();
    const pan = this.props.pan;
    let lx = this.props.spatula.position.x - pan.position.x, lz = this.props.spatula.position.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (r > 0.3) { lx *= 0.3 / r; lz *= 0.3 / r; }
    const axis = new THREE.Vector3(Math.cos(this.camAz), 0, -Math.sin(this.camAz)); // camera-right axis
    const baseQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0);
    let swapped = false, res = {};
    this.foodLoc = 'air';
    audio.flipWhoosh();
    this.anim(0.62, (t) => {
      this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz;
      g.position.lerpVectors(from, _v, t); g.position.y += Math.sin(Math.PI * t) * 1.15;
      if (!swapped && t >= 0.5) { swapped = true; res = f.flip(speed); }
      const ang = swapped ? Math.PI * t - Math.PI : Math.PI * t;
      g.quaternion.copy(baseQ).premultiply(_q.setFromAxisAngle(axis, ang));
    }, () => {
      if (!swapped) res = f.flip(speed);
      this.panAnchor.add(g); g.position.set(lx, 0, lz); g.rotation.set(0, 0, 0);
      this.foodLoc = 'pan'; this.spat.cooldown = 0.7; this.spat.mode = 'stir';
      audio.plop();
      if (res.torn) { audio.tear(); this.toast('Flipped too early — it tore! 😬', 'bad'); }
      else if (res.yolk) this.toast('Oops, the yolk broke!', 'bad');
      else if (!res.tossed) this.toast('Nice flip! ✨', 'good');
      this.emit('changed');
    });
  }
  spatulaRelease() {
    const sp = this.props.spatula, pan = this.props.pan, plate = this.props.plate;
    const dPlate = Math.hypot(sp.position.x - plate.position.x, sp.position.z - plate.position.z);
    const dPan = Math.hypot(sp.position.x - pan.position.x, sp.position.z - pan.position.z);
    if (this.foodLoc === 'spatula') {
      if (dPlate < PLATE.r + 0.5 || (dPlate < dPan && dPan > PAN.rimR)) this.plateFood();
      else this.dropToPan();
    }
    if (dPan < PAN.rimR + 0.4 || dPlate < PLATE.r + 0.3) this.flyTo(sp, HOME.spatula.x, HOME.spatula.z, 0.5, 0.5, () => sp.rotation.set(0, 0.5, 0));
    else { sp.position.y = surfaceHeight(sp.position.x, sp.position.z); sp.rotation.x = 0; }
  }
  plateFood() {
    const f = this.food, g = f.group;
    if (this.foodLoc === 'plate') return;
    this.scene.attach(g);
    const from = g.position.clone(), fromQ = g.quaternion.clone();
    this.foodLoc = 'air';
    this.anim(0.4, (t) => {
      this.plateAnchor.getWorldPosition(_v);
      g.position.lerpVectors(from, _v, ease(t)); g.position.y += Math.sin(Math.PI * t) * 0.5;
      g.quaternion.slerpQuaternions(fromQ, _q.identity(), t);
    }, () => {
      this.plateAnchor.add(g); g.position.set(0, 0, 0); g.rotation.set(0, Math.random() * 0.5, 0);
      this.foodLoc = 'plate';
      audio.clink();
      this.emit('changed');
    });
  }
  dropToPan() {
    const f = this.food, g = f.group, pan = this.props.pan, sp = this.props.spatula;
    let lx = sp.position.x - pan.position.x, lz = sp.position.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (r > 0.3) { lx *= 0.3 / r; lz *= 0.3 / r; }
    this.scene.attach(g);
    const from = g.position.clone();
    this.foodLoc = 'air';
    this.anim(0.3, (t) => { this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz; g.position.lerpVectors(from, _v, ease(t)); },
      () => { this.panAnchor.add(g); g.position.set(lx, 0, lz); g.rotation.set(0, 0, 0); this.foodLoc = 'pan'; audio.plop(); this.emit('changed'); });
  }

  // ---------------- seasoning ----------------
  shakerMove(type, x, z, screenY, dt) {
    const sh = this.props[type];
    sh.position.set(x, surfaceHeight(x, z) + 1.55, z);
    sh.rotation.set(0, this.camAz, 0); sh.rotateX(2.55);
    const k = this.shk;
    k.cooldown -= dt;
    if (k.lastY === null) { k.lastY = screenY; k.extreme = screenY; return; }
    const dir = Math.sign(screenY - k.lastY);
    if (dir !== 0 && dir !== k.dir) {
      if (Math.abs(k.lastY - k.extreme) > 12 && k.cooldown <= 0) { this.shakeOnce(type); k.cooldown = 0.12; }
      k.extreme = k.lastY; k.dir = dir;
    }
    k.lastY = screenY;
  }
  shakerEnd(type) {
    this.shk.lastY = null;
    const sh = this.props[type], h = HOME[type];
    const near = this._seasonTarget(sh.position.x, sh.position.z) || Math.hypot(sh.position.x - this.props.pan.position.x, sh.position.z - this.props.pan.position.z) < PAN.rimR + 0.3;
    if (near) this.flyTo(sh, h.x, h.z, 0.5, 0.3, () => sh.rotation.set(0, 0, 0));
    else { this.anim(0.2, (t) => { sh.rotation.x *= 0.6; sh.position.y += (surfaceHeight(sh.position.x, sh.position.z) - sh.position.y) * t; }, () => sh.rotation.set(0, 0, 0)); }
  }
  _seasonTarget(x, z) {
    if (!this.food || !(this.foodLoc === 'plate' || this.foodLoc === 'pan')) return null;
    const host = this.foodLoc === 'plate' ? this.props.plate : this.props.pan;
    const R = this.foodLoc === 'plate' ? PLATE.r + 0.15 : PAN.innerR;
    return Math.hypot(x - host.position.x, z - host.position.z) < R ? this.food : null;
  }
  shakeOnce(type) {
    const sh = this.props[type];
    audio.shake();
    _v.set(0, 0.95, 0); sh.localToWorld(_v);
    const target = this._seasonTarget(sh.position.x, sh.position.z);
    const floor = target ? target.group.getWorldPosition(_v2).y + 0.1 : surfaceHeight(sh.position.x, sh.position.z);
    this.fx.emit(type, _v, { count: 9, spread: 0.12, floorY: floor });
    if (target) setTimeout(() => { if (this.food === target) { target.addSeasoning(type, 5); this.emit('changed'); } }, 260);
  }
  autoSeason(type) {
    if (this.busy) return;
    if (!this.food || !(this.foodLoc === 'plate' || this.foodLoc === 'pan')) return this.toast('Nothing to season yet!');
    const sh = this.props[type], host = this.foodLoc === 'plate' ? this.props.plate : this.props.pan;
    const home = sh.position.clone();
    const tx = host.position.x + 0.1, tz = host.position.z;
    const ty = surfaceHeight(tx, tz) + 1.55;
    audio.pick();
    this.anim(0.4, (t) => { sh.position.lerpVectors(home, _v.set(tx, ty, tz), ease(t)); sh.rotation.set(0, this.camAz, 0); sh.rotateX(2.55 * ease(t)); }, () => {
      let n = 0;
      const shake = () => {
        if (n >= 3) { this.flyTo(sh, home.x, home.z, 0.45, 0.3, () => sh.rotation.set(0, 0, 0)); return; }
        n++; sh.position.y = ty + 0.15; this.shakeOnce(type);
        this.anim(0.22, (t) => { sh.position.y = ty + 0.15 * (1 - t); }, shake);
      };
      shake();
    });
  }

  // ---------------- toss / serve ----------------
  toss() {
    if (this.busy) return;
    if (!this.food && !this.crack) return this.toast('Nothing to toss.');
    audio.trash();
    this.clearFood(false);
    this.emit('changed');
  }
  serve() {
    if (this.foodLoc !== 'plate' || this.busy) return;
    const f = this.food;
    this.foodLoc = 'served'; // locks the dish so it can only be scored once
    this.servedCount++;
    audio.ding();
    this.plateAnchor.getWorldPosition(_v);
    this.fx.emit('sparkle', _v.setY(_v.y + 0.3), { count: 16, spread: 1 });
    const plate = this.props.plate, y0 = plate.position.y;
    this.anim(0.5, (t) => { plate.position.y = y0 + Math.sin(Math.PI * t) * 0.35; plate.rotation.y = Math.sin(Math.PI * t) * 0.3; }, () => { plate.position.y = y0; plate.rotation.y = 0; });
    if (this.mode === 'free') { this.emit('served', { free: true, text: S.describe(f), food: f }); return; }
    const late = this.mode === 'orders' && this.orderTime > this.order.patience;
    const result = S.evaluate(f, this.order, { late });
    this.results.push({ order: this.order, result });
    this.roundScore += result.total;
    this.emit('served', { result, order: this.order, quote: S.quoteFor(result.stars), food: f });
  }
  /** Called when the dish panel closes. */
  afterServe() {
    this.clearFood(false); this.clearButter();
    if (this.mode === 'orders') {
      if (this.orderIdx + 1 >= this.orders.length) { this.emit('roundOver', { total: this.roundScore, results: this.results }); this.mode = 'results'; }
      else this.setOrder(this.orderIdx + 1);
    } else if (this.mode === 'tutorial') { this.emit('tutorialDone'); }
    this.emit('changed');
  }

  // ---------------- guide & hints ----------------
  target() {
    if (this.order) return this.order;
    const r = this.food ? this.food.recipe : 'sunny';
    return { recipe: r, level: r === 'sunny' ? 'runny' : r === 'over' ? 'easy' : 'soft', salt: true, pepper: false };
  }
  guide() { return this.food && (this.foodLoc === 'pan' || this.foodLoc === 'spatula') ? S.guideState(this.food, this.target()) : null; }
  hint() {
    const f = this.food, o = this.target(), wantScr = o.recipe === 'scrambled';
    if (this.mode === 'tutorial') { const st = S.TUTORIAL[this.tutStep]; return st ? { text: st.text, tool: st.tool } : null; }
    if (this.foodLoc === 'served') return null;
    if (!this.panOnBurner) return { text: 'Put the pan back on the burner to heat it 🔥' };
    if (f && f.maxBrown > 0.55 && this.foodLoc === 'pan') return { text: 'It\'s burning! Lower the heat 🔥', tool: null };
    if (this.foodLoc === 'plate') {
      if (o.salt && !f.salt) return { text: 'Shake on some salt 🧂', tool: 'salt' };
      if (o.pepper && !f.pepper) return { text: 'Add a little pepper', tool: 'pepper' };
      return { text: 'Looks great — tap Serve! 🛎️', tool: 'serve' };
    }
    if (this.foodLoc === 'spatula') return { text: f.scrambled ? 'Drag onto the plate 🍽️' : 'Swipe UP to flip ↑ — or drag onto the plate 🍽️' };
    if (this.crack) return this.crack.stage === 'hover' ? { text: 'Tap the egg to crack it 🥚' } : { text: 'Drag sideways to pull the shell apart ↔' };
    if (!f) {
      if (this.butter.amount === 0) return { text: 'Drag butter 🧈 into the pan', tool: 'butter' };
      if (this.heat < 1) return { text: 'Turn up the heat with the dial →' };
      if (this.butter.melt < 0.4 && this.panTemp < 90) return { text: 'Let the butter melt…' };
      return { text: 'Drag an egg 🥚 over the pan', tool: 'egg' };
    }
    const g = this.guide();
    if (wantScr && !f.scrambled) return { text: 'Stir in circles inside the pan to scramble 🌀', tool: 'spatula' };
    if (o.recipe === 'over' && !f.flips) {
      if (f.w > 0.5) return { text: 'Touch the egg, then swipe UP to flip ↑', tool: 'spatula' };
      return { text: 'Let the bottom set before flipping…' };
    }
    if (f.scrambled && this.time - f.lastStir > 3 && f.w < 0.9) return { text: 'Keep stirring for soft curds 🌀', tool: 'spatula' };
    if (g && g.cls === 'ready') return { text: 'Ready! Move it to the plate with the spatula 🍽️', tool: 'spatula' };
    if (this.heat > 7.5 && f.w < 0.5) return { text: 'High heat cooks fast — watch the edges!' };
    return { text: 'Cooking… watch the guide' };
  }

  // ---------------- per-frame update ----------------
  update(dt) {
    if (this.paused) return;
    this.time += dt;
    for (let i = this.anims.length - 1; i >= 0; i--) {
      const a = this.anims[i]; a.t += dt;
      const k = Math.min(1, a.t / a.dur);
      a.step && a.step(k, dt);
      if (k >= 1) { this.anims.splice(i, 1); a.done && a.done(); }
    }
    this.fx.update(dt);
    this.kitchen.updateFlames(this.heat, this.time);
    const turn = this.kitchen.knob.userData.turn;
    turn.rotation.y += ((-(-135 + this.heat * 27) * Math.PI) / 180 - turn.rotation.y) * Math.min(1, dt * 14);
    this._placeCrack(dt);
    if (this.mode === 'menu') { audio.setSizzle(0, 0, dt); return; }

    // pan temperature
    const target = this.panOnBurner ? heatToTarget(this.heat) : ROOM_TEMP;
    const rate = target > this.panTemp ? 0.2 : 0.11;
    this.panTemp += (target - this.panTemp) * (1 - Math.exp(-rate * dt));

    // butter melting / foaming / browning
    const b = this.butter;
    let melted = 0;
    for (let i = b.pats.length - 1; i >= 0; i--) {
      const p = b.pats[i];
      if (this.panTemp > 32) p.melt = Math.min(1, p.melt + ((this.panTemp - 32) / 80) * 0.32 * dt);
      p.mesh.scale.set(1 + p.melt * 0.7, Math.max(0.02, 1 - p.melt), 1 + p.melt * 0.7);
      p.mesh.position.y = 0.08 * (1 - p.melt);
      p.mesh.visible = p.melt < 0.98;
      melted += p.melt;
    }
    b.melt = b.amount ? melted / b.amount : 0;
    if (b.amount) {
      const spreadR = 0.35 + 0.65 * Math.min(1, melted * 0.9);
      this.pool.scale.setScalar(spreadR * 0.98);
      this.poolMat.opacity = Math.min(0.55, melted * 0.6);
      if (this.panTemp > 165 && melted > 0.3) b.browned = Math.min(1, b.browned + ((this.panTemp - 165) / 80) * 0.05 * dt);
      const bc = this.poolMat.color.set('#ffd65c');
      if (b.browned > 0) bc.lerp(_c1.set('#c98a3a'), Math.min(1, b.browned * 1.6)); if (b.browned > 0.6) bc.lerp(_c1.set('#4a2f1e'), (b.browned - 0.6) * 2.5);
    }
    // food cooking
    const f = this.food;
    if (f && this.foodLoc === 'pan' && f.landed) {
      f.update(dt, this.panTemp, { time: this.time, buttered: b.amount > 0 });
      f.refresh();
    } else if (f && (this.foodLoc === 'plate' || this.foodLoc === 'spatula') && f.scrambled) f.refresh();
    if (f && f.landed && f.spread < 1) { f.spread = Math.min(1, f.spread + dt * 2.4); if (this.foodLoc !== 'pan') f.refresh(); }

    // ambient effects + sound
    const T = this.panTemp, hot = Math.max(0, Math.min(1, (T - 90) / 140));
    const wet = f && this.foodLoc === 'pan' && f.landed ? 1 - f.w * 0.55 : 0;
    const butterWet = b.amount && b.melt > 0.2 ? Math.max(0, 1 - b.browned) * (T > 100 && T < 210 ? 1 : 0.3) : 0;
    audio.setSizzle(hot * Math.max(wet, butterWet * 0.65), butterWet * hot, dt);
    this.panAnchor.getWorldPosition(_v);
    const fc = this.fxClock;
    if (hot > 0.05 && (wet > 0 || butterWet > 0) && (fc.steam -= dt) < 0) {
      fc.steam = 0.6 / (0.3 + hot * (wet + 0.3));
      this.fx.emit('steam', _v2.set(_v.x + (Math.random() - 0.5) * 1.2, _v.y + 0.15, _v.z + (Math.random() - 0.5) * 1.2), { spread: 0.3 });
    }
    if (butterWet > 0 && b.melt > 0.3 && T > 100 && T < 215 && (fc.bubble -= dt) < 0) {
      fc.bubble = 0.05 / Math.max(0.2, hot);
      const a = Math.random() * 6.28, rr = Math.sqrt(Math.random()) * this.pool.scale.x * 0.95;
      this.fx.emit('bubble', _v2.set(_v.x + Math.cos(a) * rr, _v.y + 0.02, _v.z + Math.sin(a) * rr), { spread: 0 });
    }
    const burning = (f && this.foodLoc === 'pan' && f.maxBrown > 0.6) || b.browned > 0.7;
    if (burning && T > 150 && (fc.smoke -= dt) < 0) { fc.smoke = 0.18; this.fx.emit('smoke', _v2.set(_v.x, _v.y + 0.2, _v.z), { spread: 0.9 }); }
    if (T > 175 && (wet > 0.2 || butterWet > 0.2) && (fc.spatter -= dt) < 0) { fc.spatter = 0.35 - hot * 0.2; this.fx.emit('spatter', _v2.set(_v.x, _v.y + 0.08, _v.z), { count: 2, spread: 1.2 }); }

    // orders & tutorial
    if (this.mode === 'orders' && this.order) this.orderTime += dt;
    if (this.mode === 'tutorial') {
      const st = S.TUTORIAL[this.tutStep];
      if (st && st.done(this)) { this.tutStep++; audio.pop(); this.emit('tutorial', this.tutStep); }
    }
  }
}
const _c1 = new THREE.Color();
