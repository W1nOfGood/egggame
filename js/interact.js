// Pointer (mouse + touch) interaction: raycast picking, dragging props in 3D, tools, and orbit-camera gating.
import * as THREE from 'three';
import { HOME, PAN, PLATE, BURNER, clampToCounter, surfaceHeight } from './config.js';
import { makeWholeEgg, makeButterPat } from './props.js';
import { Ingredient, ING } from './ingredients.js';
import { audio } from './audio.js';

const RADIUS = { pan: 1.35, plate: 1.2, carton: 1.05, butterDish: 0.85, salt: 0.35, pepper: 0.35, spatula: 0.45, fridge: 1.5 };
const _v = new THREE.Vector3(), _plane = new THREE.Plane(), _ndc = new THREE.Vector2();

export class Interactor {
  constructor({ canvas, camera, game, kitchen, onOrbitBlock }) {
    this.canvas = canvas; this.camera = camera; this.game = game; this.kitchen = kitchen;
    this.ray = new THREE.Raycaster();
    this.drag = null;       // active interaction
    this.pending = null;    // tray press that has not become a drag yet
    this.orbiting = false;
    this.samples = [];
    // Must be registered before OrbitControls so we can swallow pointerdowns that hit objects.
    canvas.addEventListener('pointerdown', (e) => this.onDown(e));
    window.addEventListener('pointermove', (e) => this.onMove(e), { passive: false });
    window.addEventListener('pointerup', (e) => this.onUp(e));
    window.addEventListener('pointercancel', (e) => this.onUp(e, true));
    canvas.addEventListener('pointermove', (e) => this.onHover(e));
  }

  get props() { return this.game.props; }

  // ---------- picking helpers ----------
  setRay(e) {
    const r = this.canvas.getBoundingClientRect();
    _ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(_ndc, this.camera);
  }
  pick(e) {
    this.setRay(e);
    const p = this.props;
    const list = [p.pan, p.plate, p.carton, p.butterDish, p.salt, p.pepper, p.spatula, p.fridge, this.kitchen.knob];
    if (this.game.crack) list.unshift(this.game.crack.group);
    const hits = this.ray.intersectObjects(list, true);
    for (const h of hits) {
      if (h.object.userData.interact && h.object.visible !== false && isVisible(h.object)) return { kind: h.object.userData.interact, object: h.object, point: h.point };
    }
    return null;
  }
  planePoint(e, y) {
    this.setRay(e);
    _plane.set(new THREE.Vector3(0, 1, 0), -y);
    const out = new THREE.Vector3();
    return this.ray.ray.intersectPlane(_plane, out) ? out : null;
  }
  track(e) {
    const now = performance.now();
    this.samples.push({ x: e.clientX, y: e.clientY, t: now });
    while (this.samples.length > 2 && now - this.samples[0].t > 90) this.samples.shift();
  }
  velocity() {
    const s = this.samples; if (s.length < 2) return { x: 0, y: 0 };
    const a = s[0], b = s[s.length - 1], dt = Math.max(0.008, (b.t - a.t) / 1000);
    return { x: (b.x - a.x) / dt, y: (b.y - a.y) / dt };
  }

  // ---------- canvas pointer down ----------
  onDown(e) {
    audio.init(); audio.resume();
    if (this.game.busy) return;
    if (this.drag || this.pending) { e.stopImmediatePropagation(); return; } // ignore extra fingers while interacting
    if (this.orbiting) return; // let a second finger pinch-zoom
    const hit = this.pick(e);
    if (!hit) return; // empty space -> orbit camera
    e.stopImmediatePropagation(); e.preventDefault();
    this.samples = []; this.track(e);
    this.begin(hit, e);
  }

  begin(hit, e) {
    const g = this.game, p = this.props;
    const d = { id: e.pointerId, kind: hit.kind, x0: e.clientX, y0: e.clientY, moved: false, t0: performance.now(), last: performance.now() };
    switch (hit.kind) {
      case 'fridgeItem': this.trayDown(hit.object.userData.kind, e); return; // tap = drops into the pan, drag = carry it
      case 'knob': d.heat0 = g.heat; break;
      case 'crackEgg':
        if (g.crack.stage === 'hover') g.crackTap();
        d.sep0 = g.crack.sep; d.lastSep = g.crack.sep; break;
      case 'panFloor': {
        const f = g.food;
        let mode = 'stir';
        if (f && g.foodLoc === 'pan' && f.landed) {
          f.group.getWorldPosition(_v);
          const near = Math.hypot(hit.point.x - _v.x, hit.point.z - _v.z) < (f.scrambled ? 0.55 : 0.75);
          if (near && !f.scrambled) mode = 'lift';
        }
        // pressing on bacon / ham / sausage / cheese lifts it; pressing on rice tosses it
        const lp = g.panAnchor.worldToLocal(hit.point.clone()), ni = g._ingNear(lp.x, lp.z);
        if (ni && ni.ing.kind !== 'rice') mode = 'lift';
        return this.beginSpatula(e, mode, d);
      }
      case 'spatula': return this.beginSpatula(e, 'free', d);
      case 'salt': case 'pepper': return this.beginShaker(hit.kind, e, d);
      case 'cartonEgg': return this.beginHeld('egg', e, d, hit.object);
      case 'butterBlock': return this.beginHeld('butter', e, d);
      case 'panHandle': case 'panRim': return this.beginMove(p.pan, 'pan', e, d, hit.point);
      case 'plate': return this.beginMove(p.plate, 'plate', e, d, hit.point);
      case 'carton': return this.beginMove(p.carton, 'carton', e, d, hit.point);
      case 'butterDish': return this.beginMove(p.butterDish, 'butterDish', e, d, hit.point);
      default: return;
    }
    this.drag = d;
  }

  beginSpatula(e, mode, d) {
    d.kind = 'spatula'; d.mode = mode;
    this.game.spatulaStart(mode);
    audio.pick();
    this.drag = d;
    this.moveSpatula(e, 0.016, true);
  }
  beginShaker(type, e, d) {
    d.kind = 'shaker'; d.type = type; this.drag = d; audio.pick();
    // shakers only start moving after a small drag so a tap can auto-season
  }
  beginHeld(type, e, d, cartonEgg = null) {
    d.kind = 'held'; d.type = type;
    const isIng = type.startsWith('ing:');
    if (isIng) d.ing = new Ingredient(type.slice(4), { buttered: this.game.butter.amount > 0 });
    const m = isIng ? d.ing.group : type === 'egg' ? makeWholeEgg(this.game.mats, cartonEgg ? cartonEgg.userData.brown : Math.random() < 0.3) : makeButterPat(this.game.mats);
    m.castShadow = true;
    if (isIng) { m.scale.setScalar(0.75); const p0 = this.planePoint(e, 1.1); if (p0) m.position.copy(p0); }
    d.brown = type === 'egg' && m.material === this.game.mats.eggShellBrown;
    if (cartonEgg) { cartonEgg.visible = false; d.cartonEgg = cartonEgg; cartonEgg.getWorldPosition(m.position); }
    else if (type === 'butter') this.props.butterDish.getWorldPosition(m.position).setY(0.4);
    else if (!isIng) this.props.carton.getWorldPosition(m.position).setY(0.6);
    this.game.scene.add(m);
    d.mesh = m; this.drag = d; audio.pick();
    this.moveHeld(e, 1);
  }
  beginMove(obj, name, e, d, point) {
    d.kind = 'move'; d.obj = obj; d.name = name;
    d.planeY = obj.position.y + 0.5;
    const pp = this.planePoint(e, d.planeY) || point;
    d.offset = new THREE.Vector3(obj.position.x - pp.x, 0, obj.position.z - pp.z);
    this.drag = d; audio.pick();
  }

  // ---------- tray (HTML) entry points ----------
  trayDown(tool, e) {
    audio.init(); audio.resume();
    if (this.game.busy || this.drag) return;
    this.pending = { tool, id: e.pointerId, x0: e.clientX, y0: e.clientY };
    this.samples = []; this.track(e);
  }
  trayPromote(e) {
    const { tool } = this.pending; this.pending = null;
    if (tool === 'flip' || tool === 'toss') return this.trayTap(tool);
    const d = { id: e.pointerId, x0: e.clientX, y0: e.clientY, moved: true, t0: performance.now(), last: performance.now(), fromTray: true };
    if (tool === 'butter') this.beginHeld('butter', e, d);
    else if (tool === 'egg') {
      const eggs = this.props.carton.userData.eggs.filter((x) => x.visible);
      this.beginHeld('egg', e, d, eggs[eggs.length - 1] || null);
    } else if (tool === 'spatula') this.beginSpatula(e, 'free', d);
    else if (ING[tool]) this.beginHeld('ing:' + tool, e, d);
    else if (tool === 'salt' || tool === 'pepper') { this.beginShaker(tool, e, d); d.moved = true; this.moveShaker(e, 0.016); }
  }
  trayTap(tool) {
    const g = this.game;
    if (tool === 'butter') g.autoButter();
    else if (tool === 'egg') this.autoEgg();
    else if (tool === 'spatula') g.toast('Drag the spatula into the pan — touch the egg to lift it');
    else if (ING[tool]) g.autoIngredient(tool);
    else if (tool === 'salt' || tool === 'pepper') g.autoSeason(tool);
    else if (tool === 'toss') g.toss();
    else if (tool === 'flip') g.autoFlip();
  }
  autoEgg() {
    const g = this.game;
    if (!g.canStartEgg()) return;
    const eggs = this.props.carton.userData.eggs.filter((x) => x.visible);
    const src = eggs[eggs.length - 1];
    const m = makeWholeEgg(g.mats, src ? src.userData.brown : false);
    (src || this.props.carton).getWorldPosition(m.position);
    if (src) { src.visible = false; this.restoreCartonEgg(src); }
    g.scene.add(m);
    const from = m.position.clone();
    g.panAnchor.getWorldPosition(_v); const to = _v.clone().setY(_v.y + 1.05);
    audio.pick();
    g.anim(0.55, (t) => { const k = 1 - Math.pow(1 - t, 3); m.position.lerpVectors(from, to, k); m.position.y += Math.sin(Math.PI * t) * 1.2; m.rotation.z = t * 6.28; },
      () => { g.scene.remove(m); g.beginCrack(src ? src.userData.brown : false); });
  }
  restoreCartonEgg(egg) {
    setTimeout(() => {
      egg.visible = true; egg.scale.setScalar(0.01);
      this.game.anim(0.35, (t) => egg.scale.setScalar(Math.max(0.01, 1 + Math.sin(t * Math.PI) * 0.2 - (1 - t) * 0.99)), () => egg.scale.setScalar(1));
    }, 1200);
  }

  // ---------- moves ----------
  onMove(e) {
    if (this.pending && e.pointerId === this.pending.id) {
      this.track(e);
      if (Math.hypot(e.clientX - this.pending.x0, e.clientY - this.pending.y0) > 14) this.trayPromote(e);
      return;
    }
    const d = this.drag; if (!d || e.pointerId !== d.id) return;
    e.preventDefault();
    this.track(e);
    const now = performance.now(), dt = Math.min(0.05, (now - (d.last || now)) / 1000) || 0.016; d.last = now;
    if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) > 8) d.moved = true;
    const g = this.game;
    switch (d.kind) {
      case 'knob': g.setHeat(d.heat0 + ((e.clientX - d.x0) - (e.clientY - d.y0)) / 22); break;
      case 'crackEgg': {
        if (!g.crack) { this.drag = null; return; }
        if (g.crack.stage === 'hover') g.crackTap();
        const sep = d.sep0 + Math.abs(e.clientX - d.x0) / 170 + Math.max(0, -(e.clientY - d.y0)) / 400;
        const speed = Math.abs(sep - d.lastSep) / dt; d.lastSep = sep;
        g.pullApart(sep, speed);
        if (!g.crack) this.drag = null;
        break;
      }
      case 'spatula': this.moveSpatula(e, dt); break;
      case 'shaker': if (d.moved) this.moveShaker(e, dt); break;
      case 'held': this.moveHeld(e, dt); break;
      case 'move': this.moveProp(e, dt); break;
    }
  }
  moveSpatula(e, dt, first = false) {
    const g = this.game, pan = this.props.pan;
    const y = pan.position.y + PAN.floorY;
    const pt = this.planePoint(e, y); if (!pt) return;
    clampToCounter(pt);
    if (first) { this.props.spatula.position.x = pt.x; this.props.spatula.position.z = pt.z; }
    g.spatulaMove(pt.x, pt.z, this.velocity(), dt);
  }
  moveShaker(e, dt) {
    const pt = this.planePoint(e, 1.55); if (!pt) return;
    clampToCounter(pt);
    this.game.shakerMove(this.drag.type, pt.x, pt.z, e.clientY, dt);
  }
  moveHeld(e, dt) {
    const d = this.drag, pt = this.planePoint(e, 1.1); if (!pt) return;
    clampToCounter(pt);
    d.target = pt.clone();
    const m = d.mesh, k = Math.min(1, dt * 20);
    m.position.x += (pt.x - m.position.x) * k; m.position.z += (pt.z - m.position.z) * k; m.position.y += (pt.y - m.position.y) * k;
    const v = this.velocity();
    m.rotation.z = Math.max(-0.6, Math.min(0.6, -v.x / 2500)); m.rotation.x = Math.max(-0.6, Math.min(0.6, v.y / 2500));
    // snap hint: hover above pan centre when close
    const pan = this.props.pan;
    if (Math.hypot(m.position.x - pan.position.x, m.position.z - pan.position.z) < PAN.rimR * 0.6) {
      m.position.x += (pan.position.x - m.position.x) * 0.15; m.position.z += (pan.position.z - m.position.z) * 0.15;
    }
  }
  moveProp(e, dt) {
    const d = this.drag, pt = this.planePoint(e, d.planeY); if (!pt) return;
    const o = d.obj;
    const tx = pt.x + d.offset.x, tz = pt.z + d.offset.z;
    _v.set(tx, 0, tz); clampToCounter(_v);
    d.target = _v.clone();
    const k = Math.min(1, dt * 22);
    o.position.x += (_v.x - o.position.x) * k; o.position.z += (_v.z - o.position.z) * k;
    o.position.y += (this.game.restY(o, o.position.x, o.position.z) + 0.45 - o.position.y) * k;
    const v = this.velocity();
    o.rotation.z = Math.max(-0.15, Math.min(0.15, -v.x / 9000)); o.rotation.x = Math.max(-0.15, Math.min(0.15, v.y / 9000));
  }

  // ---------- release ----------
  onUp(e, cancel = false) {
    if (this.pending && e.pointerId === this.pending.id) {
      const tool = this.pending.tool; this.pending = null;
      if (!cancel) this.trayTap(tool);
      return;
    }
    const d = this.drag; if (!d || e.pointerId !== d.id) return;
    this.drag = null;
    const g = this.game, pan = this.props.pan;
    switch (d.kind) {
      case 'spatula': {
        const v = this.velocity();
        const flick = v.y < -650 && Math.abs(v.y) > 1.2 * Math.abs(v.x);
        if (g.foodLoc === 'spatula' && flick) g.flipFood(-v.y); // flick-release flip
        else if (g.carry && flick) g.flipIng(-v.y);
        g.spatulaRelease(); break;
      }
      case 'shaker':
        if (!d.moved) g.autoSeason(d.type); else g.shakerEnd(d.type);
        break;
      case 'held': {
        const m = d.mesh;
        if (d.target) { m.position.x = d.target.x; m.position.z = d.target.z; }
        const dPan = Math.hypot(m.position.x - pan.position.x, m.position.z - pan.position.z);
        if (d.cartonEgg) this.restoreCartonEgg(d.cartonEgg);
        if (!d.moved && !d.fromTray) { // a tap on the carton / butter block
          g.scene.remove(m);
          if (d.type === 'egg') { if (d.cartonEgg) d.cartonEgg.visible = false; this.autoEgg(); } else g.autoButter();
          break;
        }
        if (d.ing) {
          const plate = this.props.plate, dPlate = Math.hypot(m.position.x - plate.position.x, m.position.z - plate.position.z), kind = d.ing.kind;
          const toLoc = dPan < PAN.rimR + 0.35 && dPan <= dPlate ? 'pan' : dPlate < PLATE.r + 0.35 ? 'plate' : null;
          if (toLoc && g.canAddIng(kind, toLoc)) { g.scene.remove(m); g.placeIngredient(d.ing, toLoc, m.position.x - pan.position.x, m.position.z - pan.position.z); }
          else {
            if (toLoc) g.toast(`${ING[kind].name} is already there`);
            const ing = d.ing; g.anim(0.35, (t) => m.scale.setScalar(Math.max(0.01, 0.75 * (1 - t))), () => { g.scene.remove(m); ing.dispose(); });
          }
          break;
        }
        if (d.type === 'egg' && dPan < PAN.rimR + 0.8 && g.canStartEgg()) { g.scene.remove(m); g.beginCrack(d.brown); }
        else if (d.type === 'butter' && dPan < PAN.rimR + 0.5) { g.scene.remove(m); g.addButter(m.position.x - pan.position.x, m.position.z - pan.position.z); }
        else { // fly back home and vanish
          const home = d.type === 'egg' ? this.props.carton.position : this.props.butterDish.position;
          const from = m.position.clone();
          g.anim(0.4, (t) => { m.position.lerpVectors(from, _v.set(home.x, 0.5, home.z), t); m.scale.setScalar(1 - t * 0.9); }, () => g.scene.remove(m));
        }
        break;
      }
      case 'move':
        if (d.target) { d.obj.position.x = d.target.x; d.obj.position.z = d.target.z; }
        this.dropProp(d.obj, d.name); break;
    }
  }

  dropProp(obj, name) {
    const g = this.game, p = this.props;
    const pos = new THREE.Vector3(obj.position.x, 0, obj.position.z);
    if (name === 'pan' && Math.hypot(pos.x - BURNER.x, pos.z - BURNER.z) < PAN.snap) pos.set(BURNER.x, 0, BURNER.z);
    else {
      // lightweight circle collision against other props
      for (let it = 0; it < 8; it++) {
        for (const [k, other] of Object.entries(p)) {
          if (other === obj || !RADIUS[k]) continue;
          const dx = pos.x - other.position.x, dz = pos.z - other.position.z, dist = Math.hypot(dx, dz) || 0.001;
          const min = (RADIUS[name] + RADIUS[k]) * 0.85;
          if (dist < min) { pos.x += (dx / dist) * (min - dist); pos.z += (dz / dist) * (min - dist); }
        }
        clampToCounter(pos);
      }
    }
    g.flyTo(obj, pos.x, pos.z, 0.25, 0.05, () => { obj.rotation.x = 0; obj.rotation.z = 0; audio.thud(); });
  }

  onHover(e) {
    if (e.pointerType !== 'mouse' || this.drag || this.game.busy) return;
    const now = performance.now(); if (now - (this._hoverT || 0) < 60) return; this._hoverT = now;
    const hit = this.pick(e);
    this.canvas.style.cursor = hit ? (hit.kind === 'crackEgg' || hit.kind === 'salt' || hit.kind === 'pepper' ? 'pointer' : 'grab') : 'default';
  }
}

function isVisible(o) { while (o) { if (o.visible === false) return false; o = o.parent; } return true; }
