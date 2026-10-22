// Core game: cooking simulation, actions (butter, crack, flip, stir, plate, season, serve), orders & modes.
import * as THREE from 'three';
import { BURNER, GRATE_TOP, HOME, PAN, PLATE, ROOM_TEMP, heatToTarget, surfaceHeight } from './config.js';
import { Food } from './food.js';
import { makeWholeEgg, makeShellHalves, makeButterPat } from './props.js';
import { Ingredient, ING } from './ingredients.js';
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
    this.pendingSpots = []; this.flying = new Set();
    this.ings = []; this.carry = null; // side dishes (bacon, ham, sausage, cheese, rice) and the one on the spatula
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
    this.clearFood(true); this.clearButter(); this.clearIngs(true);
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
  clearIngs(instant = false) {
    const list = this.ings; this.ings = []; this.carry = null; this.pendingSpots = [];
    for (const ing of this.flying) ing.dispose(); this.flying.clear();
    for (const ing of list) {
      if (instant) { ing.dispose(); continue; }
      const g = ing.group; this.scene.attach(g);
      this.anim(0.35, (t) => g.scale.setScalar(Math.max(0.001, 1 - ease(t))), () => ing.dispose());
    }
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
    for (const i of this.ings) if (i.loc === 'pan') i.buttered = true;
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
  spatulaStart(mode) { this.spat.mode = mode; this.spat.lastA = null; this.spat.px = null; this.spat.pz = null; this.spat.wasInPan = false; this.spat.stirAngle = 0; }
  /** Called every pointer move while the spatula is held. x,z world; vel = screen px/s */
  spatulaMove(x, z, vel, dt) {
    const sp = this.props.spatula, pan = this.props.pan, plate = this.props.plate;
    const lx = x - pan.position.x, lz = z - pan.position.z, r = Math.hypot(lx, lz);
    const inPan = r < PAN.innerR + 0.08;
    const overPlate = Math.hypot(x - plate.position.x, z - plate.position.z) < PLATE.r;
    const carrying = this.foodLoc === 'spatula' || !!this.carry;
    let ty = inPan ? pan.position.y + PAN.floorY + 0.01 : overPlate ? plate.position.y + 0.1 : surfaceHeight(x, z) + 0.02;
    if (!inPan && r < PAN.rimR + 0.2) ty = pan.position.y + PAN.height + 0.04; // over the rim
    if (carrying) ty += 0.12;
    sp.position.x = x; sp.position.z = z;
    sp.position.y += (ty - sp.position.y) * Math.min(1, dt * 18);
    sp.rotation.set(carrying ? -0.08 : 0, this.camAz, 0);

    const f = this.food;
    this.spat.cooldown -= dt;
    const flick = vel.y < -650 && Math.abs(vel.y) > 1.2 * Math.abs(vel.x) && this.spat.cooldown <= 0;
    if (this.carry) { if (flick) this.flipIng(-vel.y); return; }
    if (f && this.foodLoc === 'spatula') { if (flick) this.flipFood(-vel.y); return; }
    const fOk = f && this.foodLoc === 'pan' && f.landed;
    const dF = fOk ? Math.hypot(lx - f.group.position.x, lz - f.group.position.z) : 99;
    // a quick upward flick over an item flips it right in the pan (no need to lift it first)
    if (flick && inPan) {
      const near = this._ingNear(lx, lz, 0.25);
      if (near && near.ing.kind !== 'rice' && near.ing.kind !== 'cheese' && near.d < dF) { this._flipLand = { x: near.ing.group.position.x, z: near.ing.group.position.z }; this.liftIng(near.ing); return this.flipIng(-vel.y); }
      if (fOk && dF < 0.65 && !f.scrambled && !f.folded) { this._flipLand = { x: f.group.position.x, z: f.group.position.z }; this.liftFood(); return this.flipFood(-vel.y); }
    }
    // touch a side dish with the spatula to lift it
    if (inPan && this.spat.cooldown <= 0 && (this.spat.mode === 'lift' || this.spat.mode === 'free')) {
      const near = this._ingNear(lx, lz);
      if (near && near.ing.kind !== 'rice' && near.d < dF) return this.liftIng(near.ing);
    }
    // scoop rice out over the rim
    if (this.spat.wasInPan && r > PAN.rimR + 0.1 && !(fOk && f.scrambled)) {
      const rice = this.ings.find((i) => i.kind === 'rice' && i.loc === 'pan');
      if (rice) { if (rice.c[0] > 0.2) return this.liftIng(rice); this.toast('Let the rice warm up first!'); this.spat.wasInPan = false; }
    }
    if (inPan) this._pushItems(lx, lz);
    if (!fOk) { this._stirTrack(lx, lz, r, inPan, null, dt); return; }
    const d = dF;
    if (this.spat.cooldown <= 0 && inPan) {
      if (!f.scrambled && d < 0.5 && (this.spat.mode === 'lift' || this.spat.mode === 'free')) return this.liftFood();
      if (f.scrambled && this.spat.mode === 'lift' && d < 0.75) return this.liftFood();
    }
    // scoop scrambled eggs by dragging out over the rim
    if (f.scrambled && this.spat.wasInPan && r > PAN.rimR + 0.1) { if (f.w > 0.2) return this.liftFood(); this.toast('Let them set a little first!'); this.spat.wasInPan = false; }
    this._stirTrack(lx, lz, r, inPan, f, dt);
  }
  /** Dragging the spatula through bacon, ham, sausage or cheese nudges it along. */
  _pushItems(lx, lz) {
    const s = this.spat; if (s.px == null) return;
    const dx = lx - s.px, dz = lz - s.pz;
    if (Math.hypot(dx, dz) < 0.004) return;
    for (const i of this.ings) {
      if (i.loc !== 'pan' || i.kind === 'rice') continue;
      const p = i.group.position;
      if (Math.hypot(lx - p.x, lz - p.z) < i.R * 0.75 + 0.1) {
        p.x += dx * 0.85; p.z += dz * 0.85;
        const rr = Math.hypot(p.x, p.z); if (rr > 0.62) { p.x *= 0.62 / rr; p.z *= 0.62 / rr; }
      }
    }
  }
  /** Stirring is measured around whatever you are stirring (the egg, the rice, or the pan centre), so circling a pile off to the side still counts. */
  _stirTrack(lx, lz, r, inPan, f, dt) {
    const s = this.spat;
    if (!inPan) { s.lastA = null; s.px = s.pz = null; return; }
    s.wasInPan = true;
    const px = s.px, pz = s.pz;
    s.px = lx; s.pz = lz;
    if (px == null) return;
    const mv = Math.hypot(lx - px, lz - pz);
    if (mv < 0.002) return;
    const swirl = (cx, cz) => {
      const ax = px - cx, az = pz - cz, bx = lx - cx, bz = lz - cz;
      if (Math.hypot(ax, az) < 0.12 || Math.hypot(bx, bz) < 0.12) return 0;
      const da = wrapAngle(Math.atan2(bz, bx) - Math.atan2(az, ax));
      return Math.abs(da) > 1.2 ? 0 : da;
    };
    if (mv > 0.01 && this.time - s.lastScrape > 0.07) { audio.scrape(Math.min(1, mv * 8)); s.lastScrape = this.time; }
    let da = swirl(0, 0);
    if (f) { const fx = f.group.position.x, fz = f.group.position.z; if (Math.hypot(lx - fx, lz - fz) < 1.15) { const d2 = swirl(fx, fz); if (Math.abs(d2) > Math.abs(da)) da = d2; } }
    s.stirAngle += da;
    if (f && !f.scrambled) {
      // a slow half-turn beats the egg into a smooth sheet (omelette base); keep going and it scrambles
      if (Math.abs(s.stirAngle) > Math.PI * 0.8 && !f.mixed) { f.mix(); this.toast('Beaten smooth! Stop for an omelette — keep stirring to scramble 🥄', 'good'); this.emit('changed'); }
      if (Math.abs(s.stirAngle) > Math.PI * 3) { f.scramble(); this.toast('Scrambling! 🥄', 'good'); this.emit('changed'); }
    } else if (f && f.scrambled) f.stir(mv * 1.6, this.time);
    for (const i of this.ings) {
      if (i.kind !== 'rice' || i.loc !== 'pan') continue;
      const ix = i.group.position.x, iz = i.group.position.z;
      if (Math.hypot(lx - ix, lz - iz) < i.R + 0.5) {
        const dr = Math.max(Math.abs(swirl(ix, iz)), Math.abs(da));
        if (dr > 0) { i.toss += dr; i.lastToss = this.time; i.dirty = true; }
      }
    }
  }

  // ---------------- side dishes & fillings ----------------
  _ingNear(lx, lz, extra = 0) {
    let best = null;
    for (const i of this.ings) {
      if (i.loc !== 'pan') continue;
      const d = Math.hypot(lx - i.group.position.x, lz - i.group.position.z);
      if (d < i.R * 0.85 + 0.1 + extra && (!best || d < best.d)) best = { ing: i, d };
    }
    return best;
  }
  _freeSpot() {
    const spots = [[0.42, 0.5], [-0.42, 0.5], [0.42, -0.5], [-0.42, -0.5], [0, 0.64], [0, -0.64]];
    const occ = this.ings.filter((i) => i.loc === 'pan').map((i) => i.group.position).concat(this.food && this.foodLoc === 'pan' ? [this.food.group.position] : [], this.pendingSpots.map((q) => ({ x: q[0], z: q[1] })));
    return spots.find(([x, z]) => occ.every((p) => Math.hypot(p.x - x, p.z - z) > 0.75)) || spots[0];
  }
  canAddIng(kind, loc) { return !this.ings.some((i) => i.kind === kind && i.loc === loc); }
  placeIngredient(ing, loc, lx = 0, lz = 0) {
    ing.loc = loc;
    if (loc === 'pan') {
      const r = Math.hypot(lx, lz); if (r > 0.62) { lx *= 0.62 / r; lz *= 0.62 / r; }
      ing.buttered = this.butter.amount > 0;
      this.panAnchor.add(ing.group); ing.group.position.set(lx, 0.01, lz); audio.plop();
    } else {
      const sl = PLATE_SLOT[ing.kind] || [0, 0];
      this.plateAnchor.add(ing.group); ing.group.position.set(sl[0], 0, sl[1]); audio.clink();
    }
    ing.group.rotation.set(0, ing.yaw, 0); ing.group.scale.setScalar(1);
    if (!this.ings.includes(ing)) this.ings.push(ing);
    ing.dirty = true; ing.refresh(true);
    this.emit('changed');
  }
  /** Tap on the shelf: the ingredient arcs into the pan by itself. */
  autoIngredient(kind) {
    if (this.busy) return;
    if (!this.canAddIng(kind, 'pan')) return this.toast(`${ING[kind].name} is already in the pan`);
    const ing = new Ingredient(kind, { buttered: this.butter.amount > 0 });
    ing.loc = 'air'; this.scene.add(ing.group);
    const spot = this._freeSpot(); this.pendingSpots.push(spot); this.flying.add(ing);
    this.panAnchor.getWorldPosition(_v2);
    const from = _v2.clone().add(new THREE.Vector3(0.6, 1.4, 3.2));
    const to = this.panAnchor.localToWorld(new THREE.Vector3(spot[0], 0.08, spot[1]));
    audio.pick();
    this.anim(0.55, (t) => { ing.group.position.lerpVectors(from, to, ease(t)); ing.group.position.y += Math.sin(Math.PI * t) * 1.1; ing.group.rotation.set(0, t * 3, 0); },
      () => { this.pendingSpots = this.pendingSpots.filter((q) => q !== spot); if (!this.flying.delete(ing)) return; this.scene.remove(ing.group); this.placeIngredient(ing, 'pan', spot[0], spot[1]); });
  }
  liftIng(ing) {
    this.carry = { ing }; ing.loc = 'spatula';
    this.props.spatula.add(ing.group);
    ing.group.position.set(0, 0.05, -0.02); ing.group.rotation.set(0, 0, 0); ing.group.scale.setScalar(0.62);
    audio.scrape(1);
    this.emit('changed');
  }
  flipIng(speed) {
    const ing = this.carry && this.carry.ing; if (!ing) return;
    const g = ing.group, pan = this.props.pan, spp = this.props.spatula.position;
    this.carry = null; ing.loc = 'air';
    this.scene.attach(g); g.scale.setScalar(1);
    const from = g.position.clone();
    const L = this._flipLand; this._flipLand = null;
    let lx = L ? L.x : spp.x - pan.position.x, lz = L ? L.z : spp.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (r > 0.55) { lx *= 0.55 / r; lz *= 0.55 / r; }
    const axis = new THREE.Vector3(Math.cos(this.camAz), 0, -Math.sin(this.camAz));
    let swapped = false;
    audio.flipWhoosh();
    this.anim(0.58, (t) => {
      this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz;
      g.position.lerpVectors(from, _v, t); g.position.y += Math.sin(Math.PI * t) * 1.0;
      if (!swapped && t >= 0.5) { swapped = true; ing.flip(); }
      g.quaternion.setFromAxisAngle(axis, swapped ? Math.PI * t - Math.PI : Math.PI * t);
    }, () => {
      if (!swapped) ing.flip();
      this.panAnchor.add(g); g.position.set(lx, 0.01, lz); g.rotation.set(0, ing.yaw, 0); ing.loc = 'pan';
      this.spat.cooldown = 0.7; this.spat.mode = 'stir';
      audio.plop(); if (ing.flips === 1) this.toast(`Nice flip! ${ING[ing.kind].icon}`, 'good');
      this.emit('changed');
    });
  }
  plateIng() {
    const ing = this.carry && this.carry.ing; if (!ing) return;
    this.carry = null; ing.loc = 'air';
    const g = ing.group; this.scene.attach(g); g.scale.setScalar(1);
    const from = g.position.clone(), sl = PLATE_SLOT[ing.kind] || [0, 0];
    this.anim(0.4, (t) => {
      this.plateAnchor.localToWorld(_v.set(sl[0], 0.05, sl[1]));
      g.position.lerpVectors(from, _v, ease(t)); g.position.y += Math.sin(Math.PI * t) * 0.5;
    }, () => this.placeIngredient(ing, 'plate'));
  }
  dropIngToPan() {
    const ing = this.carry && this.carry.ing; if (!ing) return;
    const pan = this.props.pan, spp = this.props.spatula.position;
    let lx = spp.x - pan.position.x, lz = spp.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (r > 0.55) { lx *= 0.55 / r; lz *= 0.55 / r; }
    this.carry = null; ing.loc = 'air';
    const g = ing.group; this.scene.attach(g); g.scale.setScalar(1);
    const from = g.position.clone();
    this.anim(0.3, (t) => { this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz; g.position.lerpVectors(from, _v, ease(t)); },
      () => this.placeIngredient(ing, 'pan', lx, lz));
  }
  /** Egg + rice: once the rice has been tossed enough, the egg mixes into it. */
  _mergeRice() {
    const rice = this.ings.find((i) => i.kind === 'rice' && i.loc === 'pan'), f = this.food;
    if (!rice || !f || rice.egg || this.foodLoc !== 'pan' || !f.landed) return;
    if (rice.toss < Math.PI * 1.4) return;
    if (Math.hypot(rice.group.position.x - f.group.position.x, rice.group.position.z - f.group.position.z) > (rice.R + 0.68) * 0.95) return;
    rice.mergeEgg((f.w + f.y) / 2);
    f.group.parent && f.group.parent.remove(f.group); f.dispose(); this.food = null; this.foodLoc = null;
    audio.plop(); this.toast('Egg tossed into the rice! 🍚', 'good'); this.emit('changed');
  }
  _absorbFillings(f) {
    const o = f.liftOrigin || new THREE.Vector3();
    for (let i = this.ings.length - 1; i >= 0; i--) {
      const ing = this.ings[i];
      if (ing.loc !== 'pan' || (ing.kind !== 'cheese' && ing.kind !== 'ham')) continue;
      if (Math.hypot(ing.group.position.x - o.x, ing.group.position.z - o.z) < 0.85) { f.fills.push(ing.kind); ing.dispose(); this.ings.splice(i, 1); }
    }
  }
  // ---------------- flip button & per-item progress ----------------
  _flipCandidates() {
    const out = [], f = this.food;
    if (f && this.foodLoc === 'pan' && f.landed && !f.scrambled && !f.folded) out.push({ type: 'food', obj: f, x: f.group.position.x, z: f.group.position.z, need: f.mixed ? (f.w > 0.5 ? 1 : 0) : this.target().recipe === 'over' && !f.flips ? f.w : 0 });
    for (const i of this.ings) if (i.loc === 'pan' && i.kind !== 'rice' && i.kind !== 'cheese') out.push({ type: 'ing', obj: i, x: i.group.position.x, z: i.group.position.z, need: i.c[1 - i.top] - i.c[i.top] });
    return out;
  }
  canFlip() {
    if (this.busy || this.crack || this.foodLoc === 'served') return false;
    return !!this.carry || this.foodLoc === 'spatula' || this._flipCandidates().length > 0;
  }
  /** The Flip button: flips what you are carrying, else the item under the spatula, else the one most ready to turn. */
  autoFlip() {
    if (this.busy) return;
    if (this.carry) return this.flipIng(700);
    if (this.foodLoc === 'spatula') return this.flipFood(700);
    const list = this._flipCandidates(); if (!list.length) return;
    const ready = list.filter((c) => c.need > 0.3);     // things whose underside is done and that haven't been turned
    const t = (ready.length ? ready : list).sort((a, b) => b.need - a.need)[0]; this._flipLand = { x: t.x, z: t.z };
    if (t.type === 'ing') { this.carry = { ing: t.obj }; t.obj.loc = 'spatula'; this.flipIng(700); }
    else { t.obj.liftOrigin = t.obj.group.position.clone(); this.foodLoc = 'spatula'; this.flipFood(700); }
  }
  /** One entry per thing cooking: [{key, cls, label, p, obj}] for the progress chips. */
  guideList() {
    const o = this.target(), out = [], f = this.food;
    if (f && (this.foodLoc === 'pan' || this.foodLoc === 'spatula')) {
      const st = S.guideState(f, o); let { cls, label } = st;
      if (cls !== 'burning') {
        if (o.recipe === 'over' && !f.flips && f.w > 0.5 && !f.scrambled) { cls = 'flip'; label = 'Flip it!'; }
        else if (o.recipe === 'omelette' && f.mixed && !f.folded && !f.scrambled && f.w > 0.5) { cls = 'flip'; label = 'Fold it!'; }
      }
      const icon = f.scrambled ? '🥣' : f.folded ? '🌙' : f.mixed ? '🥚' : '🍳';
      out.push({ key: 'egg', cls, label: `${icon} ${label}`, p: st.p, obj: f.group });
    }
    for (const i of this.ings) {
      if (i.loc !== 'pan' && i.loc !== 'spatula') continue;
      const ex = (o.extras || []).find((e) => e.kind === i.kind), st = S.ingGuide(i, ex && ex.level);
      let { cls, label, p } = st;
      if (cls !== 'burning' && i.kind !== 'rice' && i.kind !== 'cheese' && i.flips === 0 && i.c[1 - i.top] > 0.5) { cls = 'flip'; label = `${ING[i.kind].icon} Flip it!`; }
      if (i.kind === 'rice' && !i.egg && f && this.foodLoc === 'pan' && cls !== 'burning') { cls = 'cooking'; label = '🍚 Toss in the egg'; p = Math.min(1, i.toss / (Math.PI * 1.4)); }
      out.push({ key: i.kind, cls, label, p, obj: i.group });
    }
    return out;
  }
  platedIngs() { return this.ings.filter((i) => i.loc === 'plate'); }
  plateHas(k) { return this.platedIngs().some((i) => i.kind === k) || !!(this.food && this.foodLoc === 'plate' && this.food.fills.includes(k)); }
  canServe() {
    if (this.busy || this.crack || this.carry) return false;
    if (this.foodLoc === 'plate') return true;
    return !this.food && this.platedIngs().length > 0;
  }

  liftFood() {
    const f = this.food;
    f.liftOrigin = f.group.position.clone();
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
    const L = this._flipLand; this._flipLand = null;
    let lx = L ? L.x : this.props.spatula.position.x - pan.position.x, lz = L ? L.z : this.props.spatula.position.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (!L && r > 0.3) { lx *= 0.3 / r; lz *= 0.3 / r; }
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
      if (res.folded) { this._absorbFillings(f); audio.plop(); if (res.torn) { audio.tear(); this.toast('Too runny — it spilled while folding! 😬', 'bad'); } else this.toast('Folded! 🌙', 'good'); }
      else if (res.torn) { audio.tear(); this.toast('Flipped too early — it tore! 😬', 'bad'); }
      else if (res.yolk) this.toast('Oops, the yolk broke!', 'bad');
      else if (!res.tossed) this.toast('Nice flip! ✨', 'good');
      this.emit('changed');
    });
  }
  spatulaRelease() {
    const sp = this.props.spatula, pan = this.props.pan, plate = this.props.plate;
    const dPlate = Math.hypot(sp.position.x - plate.position.x, sp.position.z - plate.position.z);
    const dPan = Math.hypot(sp.position.x - pan.position.x, sp.position.z - pan.position.z);
    if (this.carry) { if (dPlate < PLATE.r + 0.5 || (dPlate < dPan && dPan > PAN.rimR)) this.plateIng(); else this.dropIngToPan(); }
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
  _seasonSubject() {
    if (this.food && (this.foodLoc === 'plate' || this.foodLoc === 'pan')) return { subj: this.food, loc: this.foodLoc };
    const rice = this.ings.find((i) => i.kind === 'rice' && (i.loc === 'plate' || i.loc === 'pan'));
    return rice ? { subj: rice, loc: rice.loc } : null;
  }
  _seasonTarget(x, z) {
    const sj = this._seasonSubject(); if (!sj) return null;
    const host = sj.loc === 'plate' ? this.props.plate : this.props.pan;
    const R = sj.loc === 'plate' ? PLATE.r + 0.15 : PAN.innerR;
    return Math.hypot(x - host.position.x, z - host.position.z) < R ? sj.subj : null;
  }
  shakeOnce(type) {
    const sh = this.props[type];
    audio.shake();
    _v.set(0, 0.95, 0); sh.localToWorld(_v);
    const target = this._seasonTarget(sh.position.x, sh.position.z);
    const floor = target ? target.group.getWorldPosition(_v2).y + 0.1 : surfaceHeight(sh.position.x, sh.position.z);
    this.fx.emit(type, _v, { count: 9, spread: 0.12, floorY: floor });
    if (target) setTimeout(() => { if (this.food === target || this.ings.includes(target)) { target.addSeasoning(type, 5); this.emit('changed'); } }, 260);
  }
  autoSeason(type) {
    if (this.busy) return;
    const subj = this._seasonSubject(); if (!subj) return this.toast('Nothing to season yet!');
    const sh = this.props[type], host = subj.loc === 'plate' ? this.props.plate : this.props.pan;
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
    const stuff = !!(this.food || this.crack || this.ings.length || this.flying.size);
    if (!stuff && this.butter.amount === 0) return this.toast('Nothing to toss.');
    audio.trash();
    this.clearFood(false); this.clearIngs(false); this.clearButter();
    this.toast(stuff ? 'Tossed — pan wiped clean ✨' : 'Pan wiped clean ✨', 'good');
    this.emit('changed');
  }
  serve() {
    if (!this.canServe()) return;
    const f = this.foodLoc === 'plate' ? this.food : null, ings = this.platedIngs();
    this.foodLoc = 'served'; // locks the dish so it can only be scored once
    this.servedCount++;
    audio.ding();
    this.plateAnchor.getWorldPosition(_v);
    this.fx.emit('sparkle', _v.setY(_v.y + 0.3), { count: 16, spread: 1 });
    const plate = this.props.plate, y0 = plate.position.y;
    this.anim(0.5, (t) => { plate.position.y = y0 + Math.sin(Math.PI * t) * 0.35; plate.rotation.y = Math.sin(Math.PI * t) * 0.3; }, () => { plate.position.y = y0; plate.rotation.y = 0; });
    if (this.mode === 'free') { this.emit('served', { free: true, text: S.describe(f, ings), food: f }); return; }
    const late = this.mode === 'orders' && this.orderTime > this.order.patience;
    const result = S.evaluate(f, this.order, { late, ings });
    this.results.push({ order: this.order, result });
    this.roundScore += result.total;
    this.emit('served', { result, order: this.order, quote: S.quoteFor(result.stars), food: f });
  }
  /** Called when the dish panel closes. */
  afterServe() {
    this.clearFood(false); this.clearButter(); this.clearIngs(false);
    if (this.mode === 'orders') {
      if (this.orderIdx + 1 >= this.orders.length) { this.emit('roundOver', { total: this.roundScore, results: this.results }); this.mode = 'results'; }
      else this.setOrder(this.orderIdx + 1);
    } else if (this.mode === 'tutorial') { this.emit('tutorialDone'); }
    this.emit('changed');
  }

  // ---------------- guide & hints ----------------
  target() {
    if (this.order) return this.order;
    const rice = this.ings.find((i) => i.kind === 'rice');
    if (!this.food && rice) return { recipe: 'friedrice', level: 'fluffy', salt: true, pepper: false, extras: [], fill: [] };
    let r = this.food ? this.food.recipe : 'sunny';
    if (r === 'sheet') r = 'omelette';
    return { recipe: r, level: r === 'sunny' ? 'runny' : r === 'over' ? 'easy' : 'soft', salt: true, pepper: false, extras: [], fill: [] };
  }
  guide() {
    const o = this.target();
    if (this.food && (this.foodLoc === 'pan' || this.foodLoc === 'spatula')) return S.guideState(this.food, o);
    const ing = this.ings.find((i) => i.loc === 'pan' && i.kind !== 'cheese') || this.ings.find((i) => i.loc === 'pan');
    if (ing) { const ex = (o.extras || []).find((e) => e.kind === ing.kind); return S.ingGuide(ing, ex && ex.level); }
    return null;
  }
  /** Sides / fillings the order still needs on the plate: [{kind, name, inPan}] */
  _missing(o) {
    const want = (o.extras || []).map((e) => e.kind).concat(o.fill || []);
    return want.filter((k) => !this.plateHas(k)).map((k) => ({ kind: k, name: ING[k].name.toLowerCase(), inPan: this.ings.some((i) => i.kind === k && i.loc === 'pan') }));
  }
  hint() {
    const f = this.food, o = this.target(), R = o.recipe, wantScr = R === 'scrambled';
    if (this.mode === 'tutorial') { const st = S.TUTORIAL[this.tutStep]; return st ? { text: st.text, tool: st.tool } : null; }
    if (this.foodLoc === 'served') return null;
    if (!this.panOnBurner) return { text: 'Put the pan back on the burner to heat it 🔥' };
    const pans = this.ings.filter((i) => i.loc === 'pan'), rice = pans.find((i) => i.kind === 'rice');
    if (f && f.maxBrown > 0.55 && this.foodLoc === 'pan') return { text: 'It\'s burning! Lower the heat 🔥', tool: null };
    const burnIng = pans.find((i) => i.maxBrown > 0.55);
    if (this.butter.browned > 0.75 && !f && !pans.length) return { text: 'The butter burnt — tap Toss 🗑️ to wipe the pan', tool: 'toss' };
    if (burnIng) return { text: `The ${ING[burnIng.kind].name.toLowerCase()} is burning! Lift it out or lower the heat 🔥`, tool: 'spatula' };
    if (this.carry) return { text: 'Drag onto the plate 🍽️ — or swipe UP to flip ↑' };
    const miss = this._missing(o);
    if (this.foodLoc === 'plate' || (!f && !this.crack && !pans.length && this.platedIngs().length)) {
      const main = this.foodLoc === 'plate' ? f : this.platedIngs().find((i) => i.kind === 'rice');
      if (main) {
        if (o.salt && !main.salt) return { text: 'Shake on some salt 🧂', tool: 'salt' };
        if (o.pepper && !main.pepper) return { text: 'Add a little pepper', tool: 'pepper' };
      }
      if (miss.length) { const m = miss[0]; return m.inPan ? { text: `Wait for the ${m.name}, then lift it onto the plate 🍽️`, tool: 'spatula' } : { text: `Still needs ${m.name} — add it from the shelf`, tool: m.kind }; }
      return { text: 'Looks great — tap Serve! 🛎️', tool: 'serve' };
    }
    if (this.foodLoc === 'spatula') return { text: f.scrambled || f.folded ? 'Drag onto the plate 🍽️' : f.mixed ? 'Swipe UP to fold it ↑ — or drag onto the plate 🍽️' : 'Swipe UP to flip ↑ — or drag onto the plate 🍽️' };
    if (this.crack) return this.crack.stage === 'hover' ? { text: 'Tap the egg to crack it 🥚' } : { text: 'Drag sideways to pull the shell apart ↔' };
    if (!f) {
      if (rice) return rice.egg ? { text: 'Keep tossing; scoop the rice out over the rim onto the plate 🍚', tool: 'spatula' } : { text: 'Now crack an egg 🥚 into the pan', tool: 'egg' };
      if (pans.length) {
        const flipMe = pans.find((i) => i.kind !== 'cheese' && i.flips === 0 && i.c[1 - i.top] > 0.55);
        if (flipMe) return { text: `Lift the ${ING[flipMe.kind].name.toLowerCase()} with the spatula and swipe UP to flip ↑ (or tap Flip)`, tool: 'spatula' };
        const g = this.guide();
        if (g && g.cls === 'ready') return { text: 'Ready! Lift it onto the plate with the spatula 🍽️', tool: 'spatula' };
        return { text: 'Cooking… watch the guide' };
      }
      if (this.butter.amount === 0 && R !== 'friedrice') return { text: 'Drag butter 🧈 into the pan', tool: 'butter' };
      if (this.heat < 1) return { text: 'Turn up the heat with the dial →' };
      if (R !== 'friedrice' && this.butter.melt < 0.4 && this.panTemp < 90) return { text: 'Let the butter melt…' };
      if (R === 'friedrice') return { text: 'Add rice 🍚 from the shelf (tap or drag it in)', tool: 'rice' };
      const side = miss.find((m) => !m.inPan && (o.extras || []).some((e) => e.kind === m.kind));
      return side ? { text: `Drag an egg 🥚 over the pan — and add ${side.name} from the shelf too`, tool: 'egg' } : { text: 'Drag an egg 🥚 over the pan', tool: 'egg' };
    }
    const g = this.guide();
    if (R === 'friedrice') return rice ? { text: 'Stir in circles to toss the egg into the rice 🌀', tool: 'spatula' } : { text: 'Add rice 🍚 from the shelf', tool: 'rice' };
    if (R === 'omelette') {
      if (!f.mixed) return { text: 'Stir ONE slow circle in the pan to beat the egg 🌀', tool: 'spatula' };
      if (!f.folded) {
        const fill = (o.fill || []).find((k) => !this.ings.some((i) => i.kind === k && i.loc === 'pan'));
        if (f.w < 0.5) return fill ? { text: `Let it set… then add ${ING[fill].name.toLowerCase()} on top`, tool: fill } : { text: 'Let the omelette set a little…' };
        if (fill) return { text: `Add ${ING[fill].name.toLowerCase()} on top, then fold it`, tool: fill };
        return { text: 'Set! Touch it with the spatula, then swipe UP to fold ↑', tool: 'spatula' };
      }
    }
    if (wantScr && !f.scrambled) return { text: 'Stir in circles inside the pan to scramble 🌀', tool: 'spatula' };
    if (R === 'over' && !f.flips) {
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
    // side dishes
    for (const ing of this.ings) {
      if (ing.loc === 'pan') ing.update(dt, this.panTemp, { time: this.time, buttered: b.amount > 0 });
      ing.refresh();
    }
    this._mergeRice();
    // food cooking
    const f = this.food;
    if (f && this.foodLoc === 'pan' && f.landed) {
      f.update(dt, this.panTemp, { time: this.time, buttered: b.amount > 0 });
      f.refresh();
    } else if (f && (this.foodLoc === 'plate' || this.foodLoc === 'spatula') && f.scrambled) f.refresh();
    if (f && f.landed && f.spread < 1) { f.spread = Math.min(1, f.spread + dt * 2.4); if (this.foodLoc !== 'pan') f.refresh(); }

    // ambient effects + sound
    const T = this.panTemp, hot = Math.max(0, Math.min(1, (T - 90) / 140));
    const ingWet = this.ings.some((i) => i.loc === 'pan' && i.kind !== 'cheese') ? 0.75 : 0;
    const wet = Math.max(f && this.foodLoc === 'pan' && f.landed ? 1 - f.w * 0.55 : 0, ingWet);
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
    const burning = (f && this.foodLoc === 'pan' && f.maxBrown > 0.6) || b.browned > 0.7 || this.ings.some((i) => i.loc === 'pan' && i.maxBrown > 0.6);
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
// where each side dish sits on the plate (plate-local x, z)
const PLATE_SLOT = { bacon: [0.5, 0.42], ham: [-0.52, -0.4], sausage: [0.45, -0.46], cheese: [-0.5, 0.42], rice: [0, 0] };
