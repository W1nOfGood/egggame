// Core game: cooking simulation, actions (butter, crack, flip, stir, plate, season, serve), orders & modes.
// Several eggs can cook at once: this.foods holds every egg, each with its own .loc (pan / spatula / air / plate).
import { regularById, reaction } from './customers.js';
import * as THREE from 'three';
import { BURNER, GRATE_TOP, HOME, PAN, PLATE, ROOM_TEMP, heatToTarget, surfaceHeight } from './config.js';
import { Food } from './food.js';
import { makeShellHalves, makeButterPat } from './props.js';
import { Ingredient, ING, STACKS } from './ingredients.js';
import { PlateArt, makeJug, artLabel } from './art.js';
import { DrinkCup } from './drinks.js';
import { DrinkShelf } from './drinkshelf.js';
import { CUPS, EXTRAS, LIQUIDS, drinkById } from './drinklist.js';
import * as S from './scoring.js';
import { audio } from './audio.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion();
const ease = (t) => 1 - Math.pow(1 - t, 3);
const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
export const MAX_PAN_EGGS = 3, MAX_PAN_STACK = 3;

export class Game {
  constructor(world) {
    Object.assign(this, world); // scene, camera, mats, props, kitchen, fx
    this.listeners = {};
    this.anims = [];
    this.obstacles = []; // things that props bump into when set down, besides the props themselves
    this.mode = 'menu'; this.paused = false; this.time = 0;
    this.heat = 0; this.panTemp = ROOM_TEMP;
    this.butter = { amount: 0, melt: 0, browned: 0, pats: [] };
    this.foods = []; this.crack = null; this.servedLock = false;
    this.pendingSpots = []; this.flying = new Set();
    this.ings = []; this.carry = null; // side dishes (bacon, ham, sausage, cheese, rice, bread, tomato) and the one on the spatula
    this.settings = { guide: true, hints: true };
    this.order = null; this.orders = []; this.orderIdx = 0; this.roundScore = 0; this.results = []; this.orderTime = 0;
    this.servedCount = 0; this.tutStep = 0; this.camAz = 0;
    this.spat = { cooldown: 0, stirAngle: 0, lastA: null, lastScrape: 0, wasInPan: false, mode: 'free' };
    this.shk = { lastY: null, dir: 0, extreme: 0, cooldown: 0 };
    this.fxClock = { steam: 0, bubble: 0, smoke: 0, spatter: 0 };
    this._buildButterPool();
    this.art = new PlateArt(this); this.decorating = false;
    this.pour = null;
    this.drinking = false; this.drinkGoal = null; this.drink = new DrinkCup(this); this.shelf = new DrinkShelf(this);
  }
  on(e, f) { (this.listeners[e] ||= []).push(f); }
  emit(e, d) { (this.listeners[e] || []).forEach((f) => f(d)); }
  toast(text, kind = '') { this.emit('toast', { text, kind }); }

  get panAnchor() { return this.props.pan.userData.foodAnchor; }
  get plateAnchor() { return this.props.plate.userData.foodAnchor; }
  get panOnBurner() { const p = this.props.pan.position; return Math.hypot(p.x - BURNER.x, p.z - BURNER.z) < 0.05; }
  get busy() { return this.mode === 'menu' || this.paused; }

  // ---- eggs: list helpers (food / foodLoc stay as read-only "main egg" views for the UI and tutorial) ----
  foodsAt(loc) { return this.foods.filter((f) => f.loc === loc); }
  get carryFood() { return this.foods.find((f) => f.loc === 'spatula') || null; }
  get food() { const F = this.foods; return F.find((f) => f.loc === 'spatula') || F.find((f) => f.loc === 'pan') || F.find((f) => f.loc === 'plate') || F[0] || null; }
  get foodLoc() { if (this.servedLock) return 'served'; const f = this.food; return f ? f.loc : null; }
  eggCount() { return this.foods.reduce((a, f) => a + f.eggs, 0) + this.ings.reduce((a, i) => a + (i.kind === 'rice' && i.egg ? i.eggCount || 1 : 0), 0); }
  _removeFood(f, animate = false) {
    this.foods = this.foods.filter((q) => q !== f);
    const g = f.group;
    if (!animate) { g.parent && g.parent.remove(g); f.dispose(); return; }
    this.anim(0.35, (t) => g.scale.setScalar(Math.max(0.001, 1 - ease(t))), () => { g.parent && g.parent.remove(g); f.dispose(); });
  }

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
    // Cozy Mode is an order round with no clock and gentler browning
    this.cozy = mode === 'cozy'; if (this.cozy) mode = 'orders';
    this.mode = mode; this.paused = false; this.freeGoal = null; this.drinkGoal = null;
    this.resetKitchen();
    this.results = []; this.roundScore = 0; this.servedCount = 0; this.tutStep = 0;
    if (mode === 'orders') { this.orders = S.makeRound(this.settings && this.settings.hearts); this.setOrder(0); }
    else if (mode === 'tutorial') { this.orders = [S.tutorialOrder()]; this.setOrder(0); }
    else { this.orders = []; this.order = null; }
    this.emit('mode', mode); this.emit('changed');
  }
  setOrder(i) { this.orderIdx = i; this.order = this.orders[i]; this.orderTime = 0; this.emit('order', this.order); }
  resetKitchen() {
    this.endDecorate(); this.endPour(); this.art.clear();
    this.endDrink(); this.drink.clear();
    this.clearFood(true); this.clearButter(); this.clearIngs(true);
    this.setHeat(0, true); this.panTemp = ROOM_TEMP;
    this.fx.clear();
    for (const [k, obj] of Object.entries(this.props)) {
      const h = HOME[k === 'butterDish' ? 'butter' : k];
      if (h) this.flyTo(obj, h.x, h.z, 0.5);
    }
  }
  clearFood(instant = false) {
    for (const f of this.foods.slice()) this._removeFood(f, !instant);
    if (this.crack) {
      const g = this.crack.group;
      if (instant) g.parent && g.parent.remove(g);
      else this.anim(0.35, (t) => g.scale.setScalar(Math.max(0.001, 1 - ease(t))), () => g.parent && g.parent.remove(g));
    }
    this.foods = []; this.crack = null; this.servedLock = false;
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
    for (const f of this.foodsAt('pan')) f.buttered = true;
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
    if (this.crack) { this.toast('Finish cracking this egg first 🥚'); return false; }
    if (this.foodsAt('pan').length + this.foodsAt('air').length >= MAX_PAN_EGGS) { this.toast(`The pan is full — ${MAX_PAN_EGGS} eggs at most!`); return false; }
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
    const spot = this._eggSpot();
    this.crack = { group, pivotL, pivotR, drip, stage: 'hover', sep: 0, rough: false, brown, t: 0, spot };
    this._placeCrack(0);
    audio.pick();
    this.emit('changed');
    return true;
  }
  /** The free-est place in the pan for the next egg (as far as possible from eggs and sides already there). */
  _eggSpot() {
    const spots = [[0, 0], [-0.36, 0.24], [0.38, -0.2], [0.04, -0.44], [-0.24, -0.34], [0.3, 0.34], [-0.42, -0.05]];
    const occ = this.foods.filter((f) => f.loc === 'pan' || f.loc === 'air').map((f) => f.group.position)
      .concat(this.ings.filter((i) => i.loc === 'pan').map((i) => i.group.position), this.pendingSpots.map((q) => ({ x: q[0], z: q[1] })));
    if (!occ.length) return { x: 0, z: 0 };
    let best = spots[0], bd = -1;
    for (const [x, z] of spots) { const d = Math.min(...occ.map((p) => Math.hypot(p.x - x, p.z - z))); if (d > bd) { bd = d; best = [x, z]; } }
    return { x: best[0], z: best[1] };
  }
  _placeCrack(dt) {
    const c = this.crack; if (!c) return;
    c.t += dt;
    this.panAnchor.localToWorld(_v.set(c.spot.x, 0, c.spot.z));
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
    const food = new Food({ buttered: this.butter.amount > 0, heart: !!(this.settings && this.settings.equip && this.settings.equip.ring === 'ring-heart') });
    food.spread = 0; food.loc = 'pan';
    if (c.rough) { food.yolkBroken = true; this.toast('Too rough — the yolk broke! 💔', 'bad'); }
    const lx = c.spot.x + (Math.random() - 0.5) * 0.08, lz = c.spot.z + (Math.random() - 0.5) * 0.08;
    food.group.position.set(lx, 0.95, lz);
    food.refresh(true);
    this.panAnchor.add(food.group);
    this.foods.push(food); this.crack = null;
    let vy = 0;
    const fall = { t: 0, dur: 9, step: null };
    fall.step = (t, dt) => {
      if (food.loc !== 'pan') { fall.t = fall.dur; return; }
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
  spatulaStart(mode) { const s = this.spat; s.mode = mode; s.lastA = null; s.px = s.pz = s.sx = s.sz = null; s.wasInPan = false; s.stirAngle = 0; s.beatLock = false; s.askedScramble = false; s.warned = false; }
  /** Nearest landed egg in the pan to a pan-local point: {f, d} */
  _foodNear(lx, lz, maxD = 1.15) {
    let best = null;
    for (const f of this.foods) {
      if (f.loc !== 'pan' || !f.landed) continue;
      const d = Math.hypot(lx - f.group.position.x, lz - f.group.position.z);
      if (d < maxD && (!best || d < best.d)) best = { f, d };
    }
    return best;
  }
  /** Called every pointer move while the spatula is held. x,z world; vel = screen px/s */
  spatulaMove(x, z, vel, dt) {
    const sp = this.props.spatula, pan = this.props.pan, plate = this.props.plate;
    const lx = x - pan.position.x, lz = z - pan.position.z, r = Math.hypot(lx, lz);
    const inPan = r < PAN.innerR + 0.08;
    const overPlate = Math.hypot(x - plate.position.x, z - plate.position.z) < PLATE.r;
    const cf = this.carryFood, carrying = !!cf || !!this.carry;
    let ty = inPan ? pan.position.y + PAN.floorY + 0.01 : overPlate ? plate.position.y + 0.1 : surfaceHeight(x, z) + 0.02;
    if (!inPan && r < PAN.rimR + 0.2) ty = pan.position.y + PAN.height + 0.04; // over the rim
    if (carrying) ty += 0.12;
    sp.position.x = x; sp.position.z = z;
    sp.position.y += (ty - sp.position.y) * Math.min(1, dt * 18);
    sp.rotation.set(carrying ? -0.08 : 0, this.camAz, 0);

    this.spat.cooldown -= dt;
    const flick = vel.y < -650 && Math.abs(vel.y) > 1.2 * Math.abs(vel.x) && this.spat.cooldown <= 0;
    if (this.carry) {
      const g = this.carry.ing.group;
      if (this.carry.ing.kind in STACKS) { // soft things sway on the blade as it moves
        g.rotation.z += (Math.max(-0.35, Math.min(0.35, -vel.x / 2600)) - g.rotation.z) * Math.min(1, dt * 12);
        g.rotation.x += (Math.max(-0.3, Math.min(0.3, vel.y / 2600)) - g.rotation.x) * Math.min(1, dt * 12);
      }
      if (flick) this.flipIng(-vel.y);
      return;
    }
    if (cf) { if (flick) this.flipFood(cf, -vel.y); return; }
    const nf = this._foodNear(lx, lz), f = nf ? nf.f : null, dF = nf ? nf.d : 99;
    const lifting = this.spat.mode === 'lift' || this.spat.mode === 'free';
    // a quick upward flick over an item flips it right in the pan (no need to lift it first)
    if (flick && inPan) {
      const near = this._ingNear(lx, lz, 0.25);
      if (near && near.ing.kind !== 'rice' && near.ing.kind !== 'cheese' && near.d < dF && !this._tooRunny(near.ing)) { this._flipLand = { x: near.ing.group.position.x, z: near.ing.group.position.z }; this.liftIng(near.ing); return this.flipIng(-vel.y); }
      if (f && dF < 0.65 && !f.scrambled && !f.folded) { this._flipLand = { x: f.group.position.x, z: f.group.position.z }; this.liftFood(f); return this.flipFood(f, -vel.y); }
    }
    // touch a side dish with the spatula to lift it
    if (inPan && this.spat.cooldown <= 0 && lifting) {
      const near = this._ingNear(lx, lz);
      if (near && near.ing.kind !== 'rice' && near.d < dF) {
        if (!this._tooRunny(near.ing)) return this.liftIng(near.ing);
        if (!this.spat.warned) { this.spat.warned = true; this.toast('Still runny! Wait for it to set a little 🥞'); }
      }
    }
    // scoop scrambled eggs / rice out over the rim
    if (this.spat.wasInPan && r > PAN.rimR + 0.1) {
      const scr = this.foods.find((q) => q.loc === 'pan' && q.landed && q.scrambled);
      const rice = this.ings.find((i) => i.kind === 'rice' && i.loc === 'pan');
      if (scr) { if (scr.w > 0.2) return this.liftFood(scr); this.toast('Let them set a little first!'); this.spat.wasInPan = false; }
      else if (rice) { if (rice.c[0] > 0.2) return this.liftIng(rice); this.toast('Let the rice warm up first!'); this.spat.wasInPan = false; }
    }
    if (inPan) this._pushItems(lx, lz);
    if (f && this.spat.cooldown <= 0 && inPan) {
      if (!f.scrambled && dF < 0.5 && lifting) return this.liftFood(f);
      if (f.scrambled && this.spat.mode === 'lift' && dF < 0.75) return this.liftFood(f);
    }
    this._stirTrack(lx, lz, r, inPan, f, dt);
  }
  /** Dragging the spatula through bacon, ham, sausage, cheese, toast or tomato nudges it along. */
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
  /**
   * Stirring is measured around whatever you are stirring (the egg, the rice, or the pan centre), so circling a pile off to the side still counts.
   * Beating and scrambling are two separate stirs: once an egg is beaten the same stroke stops counting, so an omelette
   * can't be scrambled by accident. Let go and stir again to scramble (a scrambled-egg goal flows straight through).
   */
  _stirTrack(lx, lz, r, inPan, f, dt) {
    const s = this.spat;
    if (!inPan) { s.lastA = null; s.px = s.pz = s.sx = s.sz = null; return; }
    s.wasInPan = true;
    if (s.px != null) { const mv = Math.hypot(lx - s.px, lz - s.pz); if (mv > 0.01 && this.time - s.lastScrape > 0.07) { audio.scrape(Math.min(1, mv * 8)); s.lastScrape = this.time; } }
    s.px = lx; s.pz = lz;
    // smooth jittery touch input before measuring the angle
    if (s.sx == null) { s.sx = lx; s.sz = lz; return; }
    const px = s.sx, pz = s.sz;
    s.sx += (lx - s.sx) * 0.5; s.sz += (lz - s.sz) * 0.5;
    const cx0 = s.sx, cz0 = s.sz;
    const mv = Math.hypot(cx0 - px, cz0 - pz);
    if (mv < 0.002) return;
    const swirl = (cx, cz) => {
      const ax = px - cx, az = pz - cz, bx = cx0 - cx, bz = cz0 - cz;
      if (Math.hypot(ax, az) < 0.08 || Math.hypot(bx, bz) < 0.08) return 0;
      const da = wrapAngle(Math.atan2(bz, bx) - Math.atan2(az, ax));
      return Math.abs(da) > 1.6 ? 0 : da;
    };
    let da = swirl(0, 0);
    if (f) { const fx = f.group.position.x, fz = f.group.position.z; const d2 = swirl(fx, fz); if (Math.abs(d2) > Math.abs(da)) da = d2; }
    if (f && !f.scrambled && !f.folded) {
      const goal = this.order || this.freeGoal ? this.target().recipe : null;
      const BEAT = Math.PI * 0.8, SCR = goal === 'scrambled' ? Math.PI * 1.6 : goal ? Math.PI * 2.5 : Math.PI * 2;
      if (!s.beatLock) s.stirAngle += da;
      const turn = Math.abs(s.stirAngle);
      if (!f.mixed) {
        this.stirInfo = { obj: f.group, p: 0.5 * Math.min(1, turn / BEAT), t: this.time, lock: false };
        if (turn > BEAT) {
          f.mix(); this._mergeEggs(f); audio.pop();
          if (goal !== 'scrambled') {
            s.beatLock = true;
            this.toast(f.eggs > 1 ? `${f.eggs} eggs beaten together! Let go for an omelette 🥚` : 'Beaten smooth! Let go for an omelette 🥚', 'good');
          }
          this.stirInfo.pulse = this.time;
          this.emit('changed');
        }
      } else if (s.beatLock) {
        this.stirInfo = { obj: f.group, p: 0.5, t: this.time, lock: true, pulse: this.stirInfo && this.stirInfo.pulse };
      } else {
        this.stirInfo = { obj: f.group, p: 0.5 + 0.5 * Math.min(1, turn / SCR), t: this.time, lock: false, pulse: this.stirInfo && this.stirInfo.pulse };
        if (goal && goal !== 'scrambled' && turn > SCR * 0.35 && !s.askedScramble) { s.askedScramble = true; this.toast('Stir on to scramble it instead? 🥣'); }
        if (turn > SCR) { f.scramble(); this._mergeEggs(f); audio.pop(); this.stirInfo.pulse = this.time; this.toast('Scrambling! 🥄', 'good'); this.emit('changed'); }
      }
    } else if (f && f.scrambled) {
      s.stirAngle += da;
      f.stir(mv * 1.6, this.time);
      if (da) this._mergeEggs(f);
      // cheese / ham stirred into scrambled eggs melts in
      for (let k = this.ings.length - 1; k >= 0; k--) {
        const i = this.ings[k];
        if (i.loc !== 'pan' || (i.kind !== 'cheese' && i.kind !== 'ham')) continue;
        if (Math.hypot(i.group.position.x - f.group.position.x, i.group.position.z - f.group.position.z) < 0.95 && da) {
          if (!f.fills.includes(i.kind)) f.fills.push(i.kind);
          i.dispose(); this.ings.splice(k, 1);
          this.toast(`${ING[i.kind].icon} ${ING[i.kind].name} stirred in!`, 'good'); this.emit('changed');
        }
      }
    }
    lx = cx0; lz = cz0;
    for (const i of this.ings) {
      if (i.kind !== 'rice' || i.loc !== 'pan') continue;
      const ix = i.group.position.x, iz = i.group.position.z;
      if (Math.hypot(lx - ix, lz - iz) < i.R + 0.5) {
        const dr = Math.max(Math.abs(swirl(ix, iz)), Math.abs(da));
        if (dr > 0) { i.toss += dr; i.lastToss = this.time; i.dirty = true; }
      }
    }
  }
  /** Raw or beaten eggs in the pan join a beaten/scrambled one when you stir (two eggs -> one omelette / scramble). */
  _mergeEggs(f) {
    for (const o of this.foods.slice()) {
      if (o === f || o.loc !== 'pan' || !o.landed || o.folded || (o.flips > 0 && !o.mixed)) continue;
      const d = Math.hypot(o.group.position.x - f.group.position.x, o.group.position.z - f.group.position.z);
      if (d > 1.35) continue;
      f.absorb(o);
      if (f.scrambled) f.refresh(true);
      this._removeFood(o, false);
      audio.plop();
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
    const spots = [[0.42, 0.5], [-0.42, 0.5], [0.42, -0.5], [-0.42, -0.5], [0, 0.64], [0, -0.64], [0.62, 0.05], [-0.62, 0.05]];
    const occ = this.ings.filter((i) => i.loc === 'pan').map((i) => i.group.position)
      .concat(this.foodsAt('pan').map((f) => f.group.position), this.pendingSpots.map((q) => ({ x: q[0], z: q[1] })));
    if (!occ.length) return spots[0];
    let best = spots[0], bd = -1;
    for (const [x, z] of spots) { const d = Math.min(...occ.map((p) => Math.hypot(p.x - x, p.z - z))); if (d > bd) { bd = d; best = [x, z]; } }
    return best;
  }
  canAddIng(kind, loc) {
    const n = this.ings.filter((i) => i.kind === kind && i.loc === loc).length;
    return STACKS[kind] ? n < (loc === 'pan' ? MAX_PAN_STACK : 6) : !n;
  }
  placeIngredient(ing, loc, lx = 0, lz = 0) {
    ing.loc = loc;
    if (loc === 'pan') {
      const r = Math.hypot(lx, lz); if (r > 0.62) { lx *= 0.62 / r; lz *= 0.62 / r; }
      ing.buttered = this.butter.amount > 0;
      this.panAnchor.add(ing.group); ing.group.position.set(lx, 0.01, lz); audio.plop();
    } else {
      const sl = PLATE_SLOT[ing.kind] || [0, 0], stack = STACKS[ing.kind] || 0;
      const under = stack ? this.ings.filter((i) => i !== ing && i.kind === ing.kind && i.loc === 'plate').length : 0;
      this.plateAnchor.add(ing.group); ing.group.position.set(sl[0], under * stack, sl[1]); audio.clink();
      ing.group.rotation.set(0, ing.yaw, 0); ing.group.scale.setScalar(stack ? 1.2 : 0.8); ing.dirty = true; ing.refresh(true);
      if (!this.ings.includes(ing)) this.ings.push(ing);
      this.emit('changed'); return;
    }
    ing.group.rotation.set(0, ing.yaw, 0); ing.group.scale.setScalar(1);
    if (!this.ings.includes(ing)) this.ings.push(ing);
    ing.dirty = true; ing.refresh(true);
    this.emit('changed');
  }
  /** Tap on the shelf / fridge: the ingredient arcs into the pan by itself. */
  autoIngredient(kind) {
    if (this.busy) return;
    if (!this.canAddIng(kind, 'pan')) return this.toast(STACKS[kind] ? 'The pan is full!' : `${ING[kind].name} is already in the pan`);
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
  /** A pancake with an uncooked underside can't be picked up yet. */
  _tooRunny(ing) { return ing.kind === 'pancake' && !ing.flips && ing.c[1 - ing.top] < 0.16; }
  liftIng(ing) {
    this.carry = { ing }; ing.loc = 'spatula';
    const g = ing.group, S0 = STACKS[ing.kind] ? 0.86 : 0.62;
    // slide onto the blade from where it was instead of snapping there
    this.props.spatula.attach(g); g.rotation.set(0, 0, 0);
    const from = g.position.clone(), s0 = g.scale.x;
    this.anim(0.12, (t) => { if (!this.carry || this.carry.ing !== ing) return; g.position.lerpVectors(from, _v.set(0, 0.05, -0.02), t); g.scale.setScalar(s0 + (S0 - s0) * t); });
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
    // a harder flick throws pancakes and toast higher, and a really hard one spins them an extra time round
    const soft = ing.kind in STACKS, power = soft ? Math.max(0, Math.min(1, (speed - 700) / 1500)) : 0, turns = power > 0.75 ? 3 : 1;
    const rise = 1 + power * 1.1, dur = 0.58 + power * 0.32;
    this.anim(dur, (t) => {
      this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz;
      g.position.lerpVectors(from, _v, t); g.position.y += Math.sin(Math.PI * t) * rise;
      if (!swapped && t * turns >= 0.5) { swapped = true; ing.flip(); }
      const a = Math.PI * t * turns;
      g.quaternion.setFromAxisAngle(axis, swapped ? a - Math.PI : a);
    }, () => {
      if (!swapped) ing.flip();
      if (!this.ings.includes(ing)) return; // tossed mid-air
      this.panAnchor.add(g); g.position.set(lx, 0.01, lz); g.rotation.set(0, ing.yaw, 0); ing.loc = 'pan';
      this.spat.cooldown = 0.7; this.spat.mode = 'stir';
      audio.plop();
      if (soft) { // a soft landing: it squashes and wobbles back
        this.anim(0.32, (t) => { if (ing.loc !== 'pan') return; const w = Math.sin(t * Math.PI * 2.5) * (1 - t) * 0.22; g.scale.set(1 + w, 1 - w * 1.4, 1 + w); }, () => { if (ing.loc === 'pan') g.scale.setScalar(1); });
        if (turns > 1) this.toast(`Triple flip! ${ING[ing.kind].icon}✨`, 'good');
      }
      if (ing.messy && ing.flips === 1) { audio.tear(); this.toast('Flipped too early — it smeared! 😬', 'bad'); }
      else if (ing.flips === 1 && turns === 1) this.toast(`Nice flip! ${ING[ing.kind].icon}`, 'good');
      this.emit('changed');
    });
  }
  plateIng() {
    const ing = this.carry && this.carry.ing; if (!ing) return;
    this.carry = null; ing.loc = 'air';
    const g = ing.group; this.scene.attach(g); g.scale.setScalar(1);
    const from = g.position.clone(), sl = PLATE_SLOT[ing.kind] || [0, 0];
    const landY = (STACKS[ing.kind] || 0) * this.ings.filter((i) => i !== ing && i.kind === ing.kind && i.loc === 'plate').length; // onto the top of the stack
    this.anim(0.4, (t) => {
      this.plateAnchor.localToWorld(_v.set(sl[0], 0.05 + landY, sl[1]));
      g.position.lerpVectors(from, _v, ease(t)); g.position.y += Math.sin(Math.PI * t) * 0.5;
    }, () => { if (this.ings.includes(ing)) this.placeIngredient(ing, 'plate'); });
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
      () => { if (this.ings.includes(ing)) this.placeIngredient(ing, 'pan', lx, lz); });
  }
  /** Egg + rice: once the rice has been tossed enough, any egg near it mixes in. */
  _mergeRice() {
    const rice = this.ings.find((i) => i.kind === 'rice' && i.loc === 'pan');
    if (!rice || rice.toss < Math.PI * 1.4) return;
    for (const f of this.foodsAt('pan')) {
      if (!f.landed) continue;
      if (Math.hypot(rice.group.position.x - f.group.position.x, rice.group.position.z - f.group.position.z) > (rice.R + 0.68) * 0.95) continue;
      const raw = (f.w + f.y) / 2;
      if (rice.egg) { rice.eggRaw = Math.min(rice.eggRaw, raw); rice.eggCount = (rice.eggCount || 1) + f.eggs; } else { rice.mergeEgg(raw); rice.eggCount = f.eggs; }
      this._removeFood(f, false);
      audio.plop(); this.toast('Egg tossed into the rice! 🍚', 'good'); this.emit('changed');
    }
  }
  _absorbFillings(f) {
    const o = f.liftOrigin || new THREE.Vector3();
    for (let i = this.ings.length - 1; i >= 0; i--) {
      const ing = this.ings[i];
      if (ing.loc !== 'pan' || (ing.kind !== 'cheese' && ing.kind !== 'ham')) continue;
      if (Math.hypot(ing.group.position.x - o.x, ing.group.position.z - o.z) < 0.85 + 0.15 * (f.eggs - 1)) { if (!f.fills.includes(ing.kind)) f.fills.push(ing.kind); ing.dispose(); this.ings.splice(i, 1); }
    }
  }

  // ---------------- pancake batter ----------------
  /** The spot under the jug if nothing is in the way, else the nearest free pancake spot. */
  _pourSpot(lx, lz) {
    const others = this.ings.filter((i) => i.loc === 'pan').map((i) => i.group.position);
    const clear = (x, z) => others.every((p) => Math.hypot(p.x - x, p.z - z) > 0.44);
    const r = Math.hypot(lx, lz); if (r > 0.52) { lx *= 0.52 / r; lz *= 0.52 / r; }
    if (clear(lx, lz)) return [lx, lz];
    const slots = [[-0.42, 0.2], [0.42, 0.2], [0, -0.46]], free = slots.filter(([x, z]) => clear(x, z));
    return (free.length ? free : slots).sort((a, b) => Math.hypot(a[0] - lx, a[1] - lz) - Math.hypot(b[0] - lx, b[1] - lz))[0];
  }
  beginPour() {
    if (this.busy || this.pour) return false;
    const jug = makeJug(), stream = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1, 8), new THREE.MeshPhysicalMaterial({ color: '#f7e4b0', roughness: 0.3, clearcoat: 0.6 }));
    stream.visible = false; this.scene.add(jug, stream);
    this.pour = { jug, stream, ing: null, warned: false, done: false };
    audio.pick();
    return true;
  }
  /** Move the jug (world x, z). It pours whenever it's over the pan. */
  pourMove(x, z) {
    const P = this.pour; if (!P) return;
    const pan = this.props.pan, lx = x - pan.position.x, lz = z - pan.position.z;
    P.jug.position.set(x + 0.25, pan.position.y + 1.35, z);
    if (Math.hypot(lx, lz) > PAN.innerR + 0.1) { P.ing = null; P.done = false; P.stream.visible = false; return; }
    if (P.ing || P.done) return;
    if (!this.canAddIng('pancake', 'pan')) { if (!P.warned) { P.warned = true; this.toast(`The pan is full — ${MAX_PAN_STACK} pancakes at most!`); } return; }
    const [sx, sz] = this._pourSpot(lx, lz), ing = new Ingredient('pancake', { size: 0.05, buttered: this.butter.amount > 0 });
    this.placeIngredient(ing, 'pan', sx, sz);
    P.ing = ing;
  }
  endPour() {
    const P = this.pour; if (!P) return;
    this.pour = null;
    this.scene.remove(P.jug, P.stream);
    P.stream.geometry.dispose(); P.stream.material.dispose();
    this.emit('changed');
  }
  /** Tapping Batter pours one good-sized pancake by itself. */
  autoPour() {
    if (!this.beginPour()) return;
    const pan = this.props.pan, [x, z] = this._pourSpot(-0.42, 0.2);
    this.pourMove(pan.position.x + x, pan.position.z + z);
    this.anim(1.6, () => {}, () => this.endPour());
  }
  /** Pancakes and toast don't sit inside each other: they ease apart in the pan. */
  _settleStacks(dt) {
    const list = this.ings.filter((i) => i.loc === 'pan' && i.kind in STACKS && !(this.pour && this.pour.ing === i));
    for (let a = 0; a < list.length; a++) for (let b = a + 1; b < list.length; b++) {
      const p = list[a].group.position, q = list[b].group.position, min = (list[a].R + list[b].R) * 0.88;
      let dx = q.x - p.x, dz = q.z - p.z, d = Math.hypot(dx, dz);
      if (d >= min) continue;
      if (d < 0.001) { dx = 1; dz = 0; d = 1; }
      const push = Math.min(min - d, dt * 0.9) / 2 / d;
      p.x -= dx * push; p.z -= dz * push; q.x += dx * push; q.z += dz * push;
      for (const o of [p, q]) { const r = Math.hypot(o.x, o.z); if (r > 0.56) { o.x *= 0.56 / r; o.z *= 0.56 / r; } }
    }
  }
  _updatePour(dt) {
    const P = this.pour; if (!P) return;
    const ing = P.ing;
    if (!ing || !this.ings.includes(ing)) { P.stream.visible = false; return; }
    ing.size = Math.min(1, ing.size + dt * 0.5); ing.dirty = true;
    if (ing.size >= 1) { P.ing = null; P.done = true; P.stream.visible = false; this.toast('That\'s a nice big pancake! Let go 🥞', 'good'); return; }
    ing.group.getWorldPosition(_v); const y0 = _v.y + 0.05, y1 = P.jug.position.y - 0.1;
    P.stream.visible = true; P.stream.position.set(_v.x, (y0 + y1) / 2, _v.z); P.stream.scale.y = y1 - y0;
  }

  // ---------------- plate art ----------------
  beginDecorate() {
    if (this.busy || this.decorating || this.servedLock) return;
    if (!this.foodsAt('plate').length && !this.platedIngs().length) return this.toast('Put something on the plate first 🍽️');
    this.decorating = true; this.art.prepare();
    this.emit('decorate', true); this.emit('changed');
  }
  endDecorate() {
    if (!this.decorating) return;
    this.decorating = false; this.art.rest();
    this.emit('decorate', false); this.emit('changed');
  }

  // ---------------- drinks ----------------
  /** A progress chip over the cup and over everything the recipe still needs, like the ones over food in the pan. */
  _drinkChips() {
    const c = this.drink, want = drinkById((this.order && this.order.drink) || this.drinkGoal), out = [], pct = Math.round(c.fill * 100);
    if (c.fill || !want) out.push({ key: 'cup', cls: c.fill >= 0.75 ? 'ready' : 'cooking', label: c.fill >= 0.75 ? `🥤 Full! ${pct}%` : `🥤 Fill ${pct}%`, p: Math.min(1, c.fill / 0.9), obj: c.chipAnchor, up: 0 });
    if (!want) return out;
    for (const [k, share] of Object.entries(want.mix)) {
      const goal = share * 0.9, have = c.amounts[k] || 0, l = LIQUIDS[k], close = Math.abs(have - goal) <= 0.07;
      const pouring = c.pouring === k;
      out.push({ key: k, cls: have > goal + 0.09 ? 'burning' : close ? 'ready' : 'cooking', label: have > goal + 0.09 ? `${l.icon} Too much!` : close ? `${l.icon} Stop! ✓` : pouring ? `${l.icon} Keep pouring…` : `${l.icon} Pour ${Math.round(goal * 100)}%`, p: Math.min(1, have / goal), obj: this.shelf.objs['liquid:' + k], up: 0.3 });
    }
    for (const k of want.extras) {
      const on = c.extras.includes(k), x = EXTRAS[k];
      out.push({ key: k, cls: on ? 'ready' : 'flip', label: on ? `${x.icon} Added ✓` : `${x.icon} Tap to add`, p: on ? 1 : 0, obj: this.shelf.objs['extra:' + k], up: 0.22 });
    }
    return out;
  }
  beginDrink() {
    if (this.busy || this.drinking || this.decorating || this.servedLock) return;
    this.drinking = true; this.drink.group.visible = true;
    const want = drinkById((this.order && this.order.drink) || this.drinkGoal);
    if (want && !this.drink.ready) this.drink.setCup(want.cup);
    this.emit('drink', true); this.emit('changed');
  }
  endDrink() {
    if (!this.drinking) return;
    this.drink.stopPour(); this.shelf.clearMarks();
    this.drinking = false; this.drink.group.visible = this.drink.ready;
    this.emit('drink', false); this.emit('changed');
  }
  /** Aim for a recipe from the Drink Menu: starts a fresh cup. */
  setDrinkGoal(id) {
    if (!drinkById(id)) return;
    this.drinkGoal = id; this.drink.clear();
    if (CUPS[drinkById(id).cup]) this.drink.setCup(drinkById(id).cup);
  }

  // ---------------- flip button & per-item progress ----------------
  _flipCandidates() {
    const out = [], R = this.target().recipe;
    for (const f of this.foodsAt('pan')) {
      if (!f.landed || f.scrambled || f.folded) continue;
      out.push({ type: 'food', obj: f, x: f.group.position.x, z: f.group.position.z, need: f.mixed ? (f.w > 0.5 ? 1 : 0) : R === 'over' && !f.flips ? f.w : 0 });
    }
    for (const i of this.ings) if (i.loc === 'pan' && i.kind !== 'rice' && i.kind !== 'cheese') out.push({ type: 'ing', obj: i, x: i.group.position.x, z: i.group.position.z, need: i.c[1 - i.top] - i.c[i.top] });
    return out;
  }
  canFlip() {
    if (this.busy || this.crack || this.servedLock) return false;
    return !!this.carry || !!this.carryFood || this._flipCandidates().length > 0;
  }
  /** The Flip button: flips what you are carrying, else the item most ready to turn. */
  autoFlip() {
    if (this.busy) return;
    if (this.carry) return this.flipIng(700);
    const cf = this.carryFood; if (cf) return this.flipFood(cf, 700);
    const list = this._flipCandidates(); if (!list.length) return;
    const ready = list.filter((c) => c.need > 0.3);     // things whose underside is done and that haven't been turned
    const t = (ready.length ? ready : list).sort((a, b) => b.need - a.need)[0]; this._flipLand = { x: t.x, z: t.z };
    if (t.type === 'ing') { this.carry = { ing: t.obj }; t.obj.loc = 'spatula'; this.flipIng(700); }
    else { t.obj.liftOrigin = t.obj.group.position.clone(); t.obj.loc = 'spatula'; this.flipFood(t.obj, 700); }
  }
  /** One entry per thing cooking: [{key, cls, label, p, obj}] for the progress chips. */
  guideList() {
    if (this.drinking) return this._drinkChips();
    const o = this.target(), out = [], panEggs = this.foods.filter((f) => f.loc === 'pan' || f.loc === 'spatula');
    panEggs.forEach((f, n) => {
      const st = S.guideState(f, o); let { cls, label } = st;
      if (cls !== 'burning') {
        if (o.recipe === 'over' && !f.flips && f.w > 0.5 && !f.scrambled && !f.mixed) { cls = 'flip'; label = 'Flip it!'; }
        else if (o.recipe === 'omelette' && f.mixed && !f.folded && !f.scrambled && f.w > 0.5) { cls = 'flip'; label = 'Fold it!'; }
      }
      const icon = f.scrambled ? '🥣' : f.folded ? '🌙' : f.mixed ? '🥚' : '🍳';
      const tag = panEggs.length > 1 && !f.mixed && !f.scrambled ? `#${n + 1} ` : f.eggs > 1 ? `×${f.eggs} ` : '';
      out.push({ key: 'egg' + n, cls, label: `${icon} ${tag}${label}`, p: st.p, obj: f.group });
    });
    const hasPanEgg = this.foodsAt('pan').length > 0;
    for (const i of this.ings) {
      if (i.loc !== 'pan' && i.loc !== 'spatula') continue;
      const ex = (o.extras || []).find((e) => e.kind === i.kind), st = S.ingGuide(i, ex && ex.level);
      let { cls, label, p } = st;
      if (cls !== 'burning' && i.kind !== 'rice' && i.kind !== 'cheese' && i.flips === 0 && i.c[1 - i.top] > 0.5) { cls = 'flip'; label = `${ING[i.kind].icon} Flip it!`; }
      if (i.kind === 'rice' && hasPanEgg && cls !== 'burning') { cls = 'cooking'; label = '🍚 Toss in the egg'; p = Math.min(1, i.toss / (Math.PI * 1.4)); }
      out.push({ key: i.kind, cls, label, p, obj: i.group });
    }
    return out;
  }
  platedIngs() { return this.ings.filter((i) => i.loc === 'plate'); }
  plateHas(k) { return this.platedIngs().some((i) => i.kind === k) || this.foodsAt('plate').some((f) => f.fills.includes(k)); }
  canServe() {
    if (this.busy || this.crack || this.carry || this.carryFood || this.servedLock || this.decorating || this.drinking) return false;
    return this.foodsAt('plate').length > 0 || this.platedIngs().length > 0 || (this.mode === 'free' && !this.freeGoal && this.drink.ready);
  }

  liftFood(f) {
    f.liftOrigin = f.group.position.clone();
    this.props.spatula.add(f.group);
    f.group.position.set(0, 0.045, -0.02); f.group.rotation.set(0, 0, 0);
    f.loc = 'spatula';
    audio.scrape(1);
    this.emit('changed');
  }
  flipFood(f, speed) {
    const g = f.group;
    this.scene.attach(g);
    const from = g.position.clone();
    const pan = this.props.pan;
    const L = this._flipLand; this._flipLand = null;
    let lx = L ? L.x : this.props.spatula.position.x - pan.position.x, lz = L ? L.z : this.props.spatula.position.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (!L && r > 0.45) { lx *= 0.45 / r; lz *= 0.45 / r; }
    const axis = new THREE.Vector3(Math.cos(this.camAz), 0, -Math.sin(this.camAz)); // camera-right axis
    let swapped = false, res = {};
    f.loc = 'air';
    audio.flipWhoosh();
    this.anim(0.62, (t) => {
      this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz;
      g.position.lerpVectors(from, _v, t); g.position.y += Math.sin(Math.PI * t) * 1.15;
      if (!swapped && t >= 0.5) { swapped = true; res = f.flip(speed); }
      g.quaternion.setFromAxisAngle(axis, swapped ? Math.PI * t - Math.PI : Math.PI * t);
    }, () => {
      if (!swapped) res = f.flip(speed);
      if (!this.foods.includes(f)) return; // tossed mid-air
      this.panAnchor.add(g); g.position.set(lx, 0, lz); g.rotation.set(0, 0, 0);
      f.loc = 'pan'; this.spat.cooldown = 0.7; this.spat.mode = 'stir';
      audio.plop();
      if (res.folded) { this._absorbFillings(f); audio.plop(); if (res.torn) { audio.tear(); this.toast('Too runny — it spilled while folding! 😬', 'bad'); } else this.toast(f.fills.length ? `Folded with ${f.fills.map((k) => ING[k].icon).join('')} inside! 🌙` : 'Folded! 🌙', 'good'); }
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
    const toPlate = dPlate < PLATE.r + 0.5 || (dPlate < dPan && dPan > PAN.rimR);
    if (this.carry) { if (toPlate) this.plateIng(); else this.dropIngToPan(); }
    const cf = this.carryFood;
    if (cf) { if (toPlate) this.plateFood(cf); else this.dropToPan(cf); }
    if (dPan < PAN.rimR + 0.4 || dPlate < PLATE.r + 0.3) this.flyTo(sp, HOME.spatula.x, HOME.spatula.z, 0.5, 0.5, () => sp.rotation.set(0, 0.5, 0));
    else { sp.position.y = surfaceHeight(sp.position.x, sp.position.z); sp.rotation.x = 0; }
  }
  /** Eggs on the plate sit side by side. */
  _layoutPlate() {
    const list = this.foodsAt('plate');
    const slots = { 1: [[0, 0]], 2: [[-0.3, 0.05], [0.3, -0.05]], 3: [[-0.36, 0.14], [0.36, 0.12], [0, -0.34]] }[Math.min(3, list.length)] || [[0, 0]];
    list.forEach((f, i) => { const [x, z] = slots[Math.min(i, slots.length - 1)]; f.group.position.set(x, i * 0.008, z); const s = (1 + 0.2 * (f.eggs - 1)) * (list.length > 1 ? 0.78 : 1); f.group.scale.set(s, 1, s); });
  }
  plateFood(f) {
    const g = f.group;
    this.scene.attach(g);
    const from = g.position.clone(), fromQ = g.quaternion.clone();
    f.loc = 'air';
    this.anim(0.4, (t) => {
      this.plateAnchor.getWorldPosition(_v);
      g.position.lerpVectors(from, _v, ease(t)); g.position.y += Math.sin(Math.PI * t) * 0.5;
      g.quaternion.slerpQuaternions(fromQ, _q.identity(), t);
    }, () => {
      if (!this.foods.includes(f)) return;
      this.plateAnchor.add(g); g.rotation.set(0, Math.random() * 0.5, 0);
      f.loc = 'plate'; this._layoutPlate();
      audio.clink();
      this.emit('changed');
    });
  }
  dropToPan(f) {
    const g = f.group, pan = this.props.pan, sp = this.props.spatula;
    let lx = sp.position.x - pan.position.x, lz = sp.position.z - pan.position.z;
    const r = Math.hypot(lx, lz); if (r > 0.45) { lx *= 0.45 / r; lz *= 0.45 / r; }
    this.scene.attach(g);
    const from = g.position.clone();
    f.loc = 'air';
    this.anim(0.3, (t) => { this.panAnchor.getWorldPosition(_v); _v.x += lx; _v.z += lz; g.position.lerpVectors(from, _v, ease(t)); },
      () => { if (!this.foods.includes(f)) return; this.panAnchor.add(g); g.position.set(lx, 0, lz); g.rotation.set(0, 0, 0); f.loc = 'pan'; audio.plop(); this.emit('changed'); });
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
  /** What a shake lands on: every egg (and rice) on the plate, else in the pan. */
  _seasonSubject() {
    for (const loc of ['plate', 'pan']) {
      const list = this.foodsAt(loc).concat(this.ings.filter((i) => i.kind === 'rice' && i.loc === loc));
      if (list.length) return { list, loc };
    }
    return null;
  }
  _seasonTarget(x, z) {
    const sj = this._seasonSubject(); if (!sj) return null;
    const host = sj.loc === 'plate' ? this.props.plate : this.props.pan;
    const R = sj.loc === 'plate' ? PLATE.r + 0.15 : PAN.innerR;
    return Math.hypot(x - host.position.x, z - host.position.z) < R ? sj.list : null;
  }
  shakeOnce(type) {
    const sh = this.props[type];
    audio.shake();
    _v.set(0, 0.95, 0); sh.localToWorld(_v);
    const targets = this._seasonTarget(sh.position.x, sh.position.z);
    const floor = targets ? targets[0].group.getWorldPosition(_v2).y + 0.1 : surfaceHeight(sh.position.x, sh.position.z);
    this.fx.emit(type, _v, { count: 9, spread: 0.12, floorY: floor });
    if (targets) setTimeout(() => {
      let hit = false;
      for (const t of targets) if (this.foods.includes(t) || this.ings.includes(t)) { t.addSeasoning(type, 5); hit = true; }
      if (hit) this.emit('changed');
    }, 260);
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
    const stuff = !!(this.foods.length || this.crack || this.ings.length || this.flying.size);
    if (!stuff && this.butter.amount === 0) return this.toast('Nothing to toss.');
    audio.trash();
    this.endPour(); this.art.clear();
    this.clearFood(false); this.clearIngs(false); this.clearButter();
    this.toast(stuff ? 'Tossed — pan wiped clean ✨' : 'Pan wiped clean ✨', 'good');
    this.emit('changed');
  }
  serve() {
    if (!this.canServe()) return;
    const foods = this.foodsAt('plate'), ings = this.platedIngs(), art = this.art.used, drink = this.drink.result((this.order && this.order.drink) || this.drinkGoal);
    this.servedLock = true; // locks the dish so it can only be scored once
    this.servedCount++;
    audio.ding();
    this.plateAnchor.getWorldPosition(_v);
    this.fx.emit('sparkle', _v.setY(_v.y + 0.3), { count: 16, spread: 1 });
    const plate = this.props.plate, y0 = plate.position.y;
    this.anim(0.5, (t) => { plate.position.y = y0 + Math.sin(Math.PI * t) * 0.35; plate.rotation.y = Math.sin(Math.PI * t) * 0.3; }, () => { plate.position.y = y0; plate.rotation.y = 0; });
    if (this.mode === 'free' && !this.freeGoal) { this.emit('served', { free: true, text: foods.length || ings.length ? S.describe(foods, ings) : '', food: foods[0], drink }); return; }
    if (this.mode === 'free') { const result = S.evaluate(foods, this.freeGoal, { ings, art }); this.emit('served', { result, order: this.freeGoal, quote: S.describe(foods, ings), food: foods[0], drink }); return; }
    const late = this.mode === 'orders' && !this.cozy && this.orderTime > this.order.patience;
    const result = S.evaluate(foods, this.order, { late, ings, art });
    this.results.push({ order: this.order, result });
    this.roundScore += result.total;
    this.emit('served', { result, order: this.order, quote: this.order.custId ? reaction(regularById(this.order.custId), result.stars) : S.quoteFor(result.stars), food: foods[0], drink });
  }
  /** Called when the dish panel closes. */
  afterServe() {
    this.art.clear(); this.drink.clear();
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
    if (this.freeGoal) return this.freeGoal;
    const rice = this.ings.find((i) => i.kind === 'rice');
    if (!this.foods.length && rice) return { recipe: 'friedrice', level: 'fluffy', eggs: 1, salt: true, pepper: false, extras: [], fill: [] };
    const sweet = !this.foods.length && this.ings.find((i) => i.kind in STACKS);
    if (sweet) return { recipe: sweet.kind, level: 'golden', eggs: 0, stack: 1, toppings: [], salt: false, pepper: false, extras: [], fill: [] };
    let r = this.food ? this.food.recipe : 'sunny';
    if (r === 'sheet') r = 'omelette';
    return { recipe: r, level: r === 'sunny' ? 'runny' : r === 'over' ? 'easy' : 'soft', eggs: 1, salt: true, pepper: false, extras: [], fill: [] };
  }
  guide() {
    const o = this.target(), f = this.carryFood || this.foodsAt('pan')[0];
    if (f) return S.guideState(f, o);
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
    const h = this._hint(), o = this.order, cup = this.drink;
    if (this.drinking) return { text: 'Hold a bottle to pour · tap jars for extras · tap a cup to swap it 🍹' };
    if (h && h.tool === 'serve' && o && o.drink && !cup.ready) return { text: `Don't forget: ${drinkById(o.drink).icon} ${drinkById(o.drink).name}! Make it from the drink shelf on the wall 🍹` };
    if (this.mode === 'free' && !this.foods.length && !this.ings.length && cup.ready && !this.servedLock) return { text: 'Tap Serve to enjoy it! 🛎️', tool: 'serve' };
    return h;
  }
  _hint() {
    const o = this.target(), R = o.recipe, want = o.eggs || 1;
    if (this.mode === 'tutorial') { const st = S.TUTORIAL[this.tutStep]; return st ? { text: st.text, tool: st.tool } : null; }
    if (this.servedLock) return null;
    if (this.decorating) { const t = this.art.tool; return { text: !t ? 'Pick up a sauce or a bowl, tap a shape, or use the cloth to wipe 🎨' : t.kind === 'sauce' ? `${artLabel(t.id)}: draw on the plate` : `${artLabel(t.id)}: tap the plate` }; }
    if (!this.panOnBurner) return { text: 'Put the pan back on the burner to heat it 🔥' };
    const pans = this.ings.filter((i) => i.loc === 'pan'), rice = pans.find((i) => i.kind === 'rice');
    const panFoods = this.foodsAt('pan').filter((f) => f.landed), plateFoods = this.foodsAt('plate'), cf = this.carryFood;
    const burntEgg = panFoods.find((f) => f.maxBrown > 0.55);
    if (burntEgg) return { text: 'An egg is burning! Lower the heat or get it out 🔥', tool: 'spatula' };
    const burnIng = pans.find((i) => i.maxBrown > 0.55);
    if (this.butter.browned > 0.75 && !panFoods.length && !pans.length) return { text: 'The butter burnt — tap Toss 🗑️ to wipe the pan', tool: 'toss' };
    if (burnIng) return { text: `The ${ING[burnIng.kind].name.toLowerCase()} is burning! Lift it out or lower the heat 🔥`, tool: 'spatula' };
    if (this.carry) return { text: 'Drag onto the plate 🍽️ — or swipe UP to flip ↑' };
    if (cf) return { text: cf.scrambled || cf.folded ? 'Drag onto the plate 🍽️' : cf.mixed ? 'Swipe UP to fold it ↑ — or drag onto the plate 🍽️' : 'Swipe UP to flip ↑ — or drag onto the plate 🍽️' };
    if (this.crack) return this.crack.stage === 'hover' ? { text: 'Tap the egg to crack it 🥚' } : { text: 'Drag sideways to pull the shell apart ↔' };
    if (S.isSweet(R)) return this._sweetHint(o);
    const eggs = this.eggCount(), moreEggs = R !== 'friedrice' && eggs < want;
    const countTxt = want > 1 ? ` (${Math.min(eggs + 1, want)} of ${want})` : '';
    const miss = this._missing(o);
    // ---- plate stage: nothing left cooking in the pan
    if (!panFoods.length && (plateFoods.length || (this.platedIngs().length && !pans.length))) {
      if (moreEggs) return { text: `This order needs ${want} eggs — crack another 🥚 (${eggs}/${want})`, tool: 'egg' };
      const main = plateFoods[0] || this.platedIngs().find((i) => i.kind === 'rice');
      if (main) {
        if (o.salt && !main.salt) return { text: 'Shake on some salt 🧂', tool: 'salt' };
        if (o.pepper && !main.pepper) return { text: 'Add a little pepper', tool: 'pepper' };
      }
      if (miss.length) { const m = miss[0]; return m.inPan ? { text: `Wait for the ${m.name}, then lift it onto the plate 🍽️`, tool: 'spatula' } : { text: `Still needs ${m.name} — add it from the fridge`, tool: m.kind }; }
      return { text: 'Looks great — tap Serve! 🛎️', tool: 'serve' };
    }
    // ---- nothing egg-like in the pan yet
    if (!panFoods.length) {
      if (rice) return rice.egg ? { text: 'Keep tossing; scoop the rice out over the rim onto the plate 🍚', tool: 'spatula' } : { text: 'Now crack an egg 🥚 into the pan', tool: 'egg' };
      const flipMe = pans.find((i) => i.kind !== 'cheese' && i.flips === 0 && i.c[1 - i.top] > 0.55);
      if (flipMe) return { text: `Flip the ${ING[flipMe.kind].name.toLowerCase()}: lift it with the spatula and swipe UP (or tap ↻ Flip)`, tool: 'flip' };
      if (this.butter.amount === 0 && R !== 'friedrice') return { text: 'Drag butter 🧈 into the pan', tool: 'butter' };
      if (this.heat < 1) return { text: 'Turn up the heat with the dial →' };
      if (R !== 'friedrice' && this.butter.melt < 0.4 && this.panTemp < 90) return { text: 'Let the butter melt…' };
      if (R === 'friedrice') return { text: 'Add rice 🍚 from the fridge (tap or drag it in)', tool: 'rice' };
      const side = miss.find((m) => !m.inPan && (o.extras || []).some((e) => e.kind === m.kind));
      if (pans.length && !moreEggs) { const g = this.guide(); if (g && g.cls === 'ready') return { text: 'Ready! Lift it onto the plate with the spatula 🍽️', tool: 'spatula' }; }
      return side ? { text: `Crack an egg 🥚${countTxt} — and add ${side.name} from the fridge too`, tool: 'egg' } : { text: `Drag an egg 🥚 over the pan${countTxt}`, tool: 'egg' };
    }
    // ---- eggs cooking
    const mixedRecipe = R === 'scrambled' || R === 'omelette';
    if (moreEggs && panFoods.length < MAX_PAN_EGGS && !(mixedRecipe && panFoods.some((f) => f.mixed || f.scrambled))) return { text: `Crack the next egg 🥚${countTxt}`, tool: 'egg' };
    if (R === 'friedrice') return rice ? { text: 'Stir in circles to toss the egg into the rice 🌀', tool: 'spatula' } : { text: 'Add rice 🍚 from the fridge', tool: 'rice' };
    const f = panFoods.find((q) => R === 'over' && !q.flips) || panFoods[0];
    if (R === 'omelette') {
      if (!f.mixed) return { text: panFoods.length > 1 ? 'Stir one slow circle, then let go — the eggs beat into one sheet 🌀' : 'Stir one slow circle in the pan, then let go 🌀', tool: 'spatula' };
      if (!f.folded) {
        const fill = (o.fill || []).find((k) => !this.ings.some((i) => i.kind === k && i.loc === 'pan'));
        if (f.w < 0.5) return fill ? { text: `Let it set… then add ${ING[fill].name.toLowerCase()} on top`, tool: fill } : { text: 'Let the omelette set a little…' };
        if (fill) return { text: `Add ${ING[fill].name.toLowerCase()} on top, then fold it`, tool: fill };
        return { text: 'Set! Tap ↻ Flip (or lift and swipe UP) to fold it 🌙', tool: 'flip' };
      }
    }
    if (R === 'scrambled' && !f.scrambled) return { text: panFoods.length > 1 ? 'Stir in circles — the eggs scramble together 🌀' : 'Stir in circles inside the pan to scramble 🌀', tool: 'spatula' };
    if (R === 'scrambled' && f.scrambled) {
      const fill = (o.fill || []).find((k) => !f.fills.includes(k) && !this.ings.some((i) => i.kind === k && i.loc === 'pan'));
      if (fill) return { text: `Add ${ING[fill].name.toLowerCase()} and stir it in`, tool: fill };
    }
    if (R === 'over' && !f.flips) {
      if (f.w > 0.5) return { text: 'Flip it: tap ↻ Flip, or touch the egg and swipe UP', tool: 'flip' };
      return { text: 'Let the bottom set before flipping…' };
    }
    if (f.scrambled && this.time - f.lastStir > 5 && f.w < 0.9) return { text: 'Keep stirring for soft curds 🌀', tool: 'spatula' };
    const flipSide = pans.find((i) => i.kind !== 'cheese' && i.kind !== 'rice' && i.flips === 0 && i.c[1 - i.top] > 0.55);
    if (flipSide) return { text: `Flip the ${ING[flipSide.kind].name.toLowerCase()}: tap ↻ Flip, or lift it and swipe UP`, tool: 'flip' };
    const ready = panFoods.find((q) => S.guideState(q, o).cls === 'ready');
    if (ready) return { text: panFoods.length > 1 ? 'An egg is ready! Move it to the plate with the spatula 🍽️' : 'Ready! Move it to the plate with the spatula 🍽️', tool: 'spatula' };
    if (this.heat > 7.5 && f.w < 0.5) return { text: 'High heat cooks fast — watch the edges!' };
    return { text: 'Cooking… watch the guide' };
  }

  _sweetHint(o) {
    const kind = o.recipe, pancake = kind === 'pancake', name = ING[kind].name.toLowerCase();
    const pans = this.ings.filter((i) => i.kind === kind && i.loc === 'pan'), plated = this.ings.filter((i) => i.kind === kind && i.loc === 'plate').length, want = o.stack || 1;
    if (this.pour && this.pour.ing) return { text: 'Keep pouring for a bigger pancake, let go when you like it 🥞' };
    if (!pans.length && !plated) {
      if (this.butter.amount === 0) return { text: 'Drag butter 🧈 into the pan', tool: 'butter' };
      if (this.heat < 1) return { text: 'Turn up the heat with the dial →' };
      if (this.butter.melt < 0.4 && this.panTemp < 90) return { text: 'Let the butter melt…' };
    }
    const flip = pans.find((i) => !i.flips && i.c[1 - i.top] > 0.5);
    if (flip) return { text: pancake ? 'Bubbles on top! Time to flip: tap ↻ Flip, or flick UP' : `Flip the ${name}: tap ↻ Flip, or flick UP`, tool: 'flip' };
    if (pans.some((i) => S.ingGuide(i).cls === 'ready')) return { text: 'Ready! Lift it onto the plate with the spatula 🍽️', tool: 'spatula' };
    if (plated + pans.length < want) {
      const n = plated + pans.length + 1, tag = want > 1 ? ` (${n} of ${want})` : '';
      return pancake ? { text: `Press Batter 🥞 and drag it over the pan to pour${tag}`, tool: 'batter' } : { text: `Add a slice of French toast 🥪${tag}`, tool: 'frenchtoast' };
    }
    if (pans.length) return { text: pancake ? 'Watch for bubbles on top…' : 'Cooking… watch the chip' };
    const need = S.artNeeds(o, this.art.used);
    if (need.length) return { text: `Add ${artLabel(need[0])} from the caddy in front of the plate 🎨` };
    return { text: 'Looks great — tap Serve! 🛎️', tool: 'serve' };
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
    this._updatePour(dt); this._settleStacks(dt); this.drink.update(dt);
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
      if (ing.loc === 'pan') ing.update(dt, this.panTemp, { time: this.time, buttered: b.amount > 0, burn: this.cozy ? 0.55 : 1 });
      ing.refresh();
    }
    this._mergeRice();
    // eggs
    let wetEgg = 0, burntEgg = false;
    for (const f of this.foods) {
      if (f.loc === 'pan' && f.landed) {
        f.update(dt, this.panTemp, { time: this.time, buttered: b.amount > 0, burn: this.cozy ? 0.55 : 1 });
        f.refresh();
        wetEgg = Math.max(wetEgg, 1 - f.w * 0.55);
        if (f.maxBrown > 0.6) burntEgg = true;
      } else if ((f.loc === 'plate' || f.loc === 'spatula') && f.scrambled) f.refresh();
      if (f.landed && f.spread < 1) { f.spread = Math.min(1, f.spread + dt * 2.4); if (f.loc !== 'pan') f.refresh(); }
    }

    // ambient effects + sound
    const T = this.panTemp, hot = Math.max(0, Math.min(1, (T - 90) / 140));
    const ingWet = this.ings.some((i) => i.loc === 'pan' && i.kind !== 'cheese') ? 0.75 : 0;
    const wet = Math.max(wetEgg, ingWet);
    const butterWet = b.amount && b.melt > 0.2 ? Math.max(0, 1 - b.browned) * (T > 100 && T < 210 ? 1 : 0.3) : 0;
    audio.setSizzle(hot * Math.max(wet, butterWet * 0.65), butterWet * hot, dt);
    this.panAnchor.getWorldPosition(_v);
    const fc = this.fxClock;
    if (hot > 0.05 && (wet > 0 || butterWet > 0) && (fc.steam -= dt) < 0) {
      fc.steam = 0.6 / (0.3 + hot * (wet + 0.3));
      this.fx.emit('steam', _v2.set(_v.x + (Math.random() - 0.5) * 1.2, _v.y + 0.15, _v.z + (Math.random() - 0.5) * 1.2), { spread: 0.3 });
      // thin curling wisps on top of the soft steam clouds
      this.fx.emit('wisp', _v2.set(_v.x + (Math.random() - 0.5) * 1.0, _v.y + 0.25, _v.z + (Math.random() - 0.5) * 1.0), { spread: 0.2, count: hot > 0.5 ? 2 : 1 });
    }
    if (butterWet > 0 && b.melt > 0.3 && T > 100 && T < 215 && (fc.bubble -= dt) < 0) {
      fc.bubble = 0.05 / Math.max(0.2, hot);
      const a = Math.random() * 6.28, rr = Math.sqrt(Math.random()) * this.pool.scale.x * 0.95;
      this.fx.emit('bubble', _v2.set(_v.x + Math.cos(a) * rr, _v.y + 0.02, _v.z + Math.sin(a) * rr), { spread: 0 });
    }
    const burning = burntEgg || b.browned > 0.7 || this.ings.some((i) => i.loc === 'pan' && i.maxBrown > 0.6);
    if (burning && T > 150 && (fc.smoke -= dt) < 0) { fc.smoke = 0.18; this.fx.emit('smoke', _v2.set(_v.x, _v.y + 0.2, _v.z), { spread: 0.9 }); }
    if (T > 175 && (wet > 0.2 || butterWet > 0.2) && (fc.spatter -= dt) < 0) { fc.spatter = 0.35 - hot * 0.2; this.fx.emit('spatter', _v2.set(_v.x, _v.y + 0.08, _v.z), { count: 2, spread: 1.2 }); }

    // orders & tutorial
    if (this.mode === 'orders' && this.order && !this.decorating && !this.drinking) this.orderTime += dt; // art and drinks are never rushed
    if (this.mode === 'tutorial') {
      const st = S.TUTORIAL[this.tutStep];
      if (st && st.done(this)) { this.tutStep++; audio.pop(); this.emit('tutorial', this.tutStep); }
    }
  }
}
const _c1 = new THREE.Color();
// where each side dish sits on the plate (plate-local x, z)
const PLATE_SLOT = { bacon: [0.5, 0.44], ham: [-0.52, -0.42], sausage: [0.46, -0.48], cheese: [-0.1, 0.6], rice: [0, 0], bread: [-0.55, 0.36], tomato: [0.66, -0.02], pancake: [0, 0], frenchtoast: [0, 0] };
