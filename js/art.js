// Plate art: squeeze sauces onto a plated dish and drop toppings on it. Sauce is a chain of glossy beads placed
// where the pointer ray hits the food, so it follows the real shape of whatever is on the plate.
import * as THREE from 'three';
import { PLATE } from './config.js';

export const SAUCES = [
  { id: 'ketchup', name: 'Ketchup', icon: '🍅', color: '#a81410' },
  { id: 'sriracha', name: 'Sriracha', icon: '🌶️', color: '#e8501a' },
  { id: 'mayo', name: 'Mayo', icon: '🥛', color: '#fff0cf' },
  { id: 'syrup', name: 'Maple syrup', icon: '🍁', color: '#9a5414' },
  { id: 'choc', name: 'Chocolate', icon: '🍫', color: '#3b1c10' },
  { id: 'berry', name: 'Berry coulis', icon: '🍇', color: '#7a1c68' },
];
export const TOPPINGS = [
  { id: 'blueberry', name: 'Blueberries', icon: '🫐' },
  { id: 'strawberry', name: 'Strawberry', icon: '🍓' },
  { id: 'whip', name: 'Whipped cream', icon: '🍦' },
  { id: 'chives', name: 'Chives', icon: '🌿', scatter: 7 },
  { id: 'sprinkles', name: 'Sprinkles', icon: '🌈', scatter: 12 },
  { id: 'skull', name: 'Sugar skull', icon: '💀' },
];
const ALL = Object.fromEntries([...SAUCES, ...TOPPINGS].map((a) => [a.id, a]));
export const artLabel = (id) => `${ALL[id].icon} ${ALL[id].name}`;

// ---------- stamps: ready-made shapes for anyone who'd rather not free-hand it ----------
const arc = (cx, cz, r, a0 = 0, a1 = Math.PI * 2, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * r, cz + Math.sin(a) * r]; });
const heart = () => [Array.from({ length: 61 }, (_, i) => { const t = (i / 60) * Math.PI * 2; return [Math.pow(Math.sin(t), 3), -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 16]; })];
const star = () => [Array.from({ length: 11 }, (_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.42 : 1; return [Math.cos(a) * r, Math.sin(a) * r]; })];
const smile = () => [arc(0, 0, 1), arc(-0.35, -0.28, 0.07, 0, 6.3, 8), arc(0.35, -0.28, 0.07, 0, 6.3, 8), arc(0, 0.05, 0.55, 0.3, Math.PI - 0.3, 16)];
const skull = () => [arc(0, -0.15, 0.8, 2.3, Math.PI * 2 + 0.85, 36).concat([[0.42, 0.95], [-0.42, 0.95]], [[-0.53, 0.42]]), arc(-0.32, -0.15, 0.2, 0, 6.3, 12), arc(0.32, -0.15, 0.2, 0, 6.3, 12), [[0, 0.12], [-0.09, 0.3], [0.09, 0.3], [0, 0.12]], [[-0.14, 0.65], [-0.14, 0.92]], [[0.14, 0.65], [0.14, 0.92]]];
const bat = () => { const R = [[0, -0.15], [0.14, -0.42], [0.2, -0.2], [0.55, -0.5], [1, -0.35], [0.85, 0], [0.62, -0.05], [0.5, 0.2], [0.28, 0.08], [0, 0.42]]; return [R.concat(R.slice(0, -1).reverse().map(([x, z]) => [-x, z]))]; };
export const STAMPS = [
  { id: 'heart', icon: '💗', paths: heart },
  { id: 'star', icon: '⭐', paths: star },
  { id: 'smile', icon: '😊', paths: smile },
  { id: 'skull', icon: '☠️', paths: skull },
  { id: 'bat', icon: '🦇', paths: bat },
];

// ---------- toppings ----------
let G = null;
function geos() {
  if (G) return G;
  const hs = new THREE.Shape();
  hs.moveTo(0, -0.1); hs.bezierCurveTo(-0.16, 0, -0.09, 0.11, 0, 0.05); hs.bezierCurveTo(0.09, 0.11, 0.16, 0, 0, -0.1);
  const sliceGeo = new THREE.ExtrudeGeometry(hs, { depth: 0.022, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }); sliceGeo.rotateX(-Math.PI / 2);
  const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.5, ...o });
  G = {
    sphere: new THREE.SphereGeometry(1, 16, 12), slice: sliceGeo,
    chive: new THREE.CylinderGeometry(0.009, 0.009, 0.1, 6).rotateZ(Math.PI / 2),
    sprinkle: new THREE.CapsuleGeometry(0.012, 0.04, 3, 6).rotateZ(Math.PI / 2),
    jaw: new THREE.BoxGeometry(0.1, 0.05, 0.08),
    berry: M('#2f3a78', { roughness: 0.25, sheen: 1, sheenColor: new THREE.Color('#9db4ff') }), red: M('#e3263f', { clearcoat: 1 }),
    cream: M('#fff8ec', { roughness: 0.55, clearcoat: 0.1 }), green: M('#4fa84a'), bone: M('#fff4e6', { roughness: 0.4 }), dark: M('#241a2e'),
    sprinkleMats: ['#ff8fc8', '#ffd86b', '#7fd1b9', '#8ccdf5', '#b48cff'].map((c) => M(c)),
  };
  return G;
}
function topping(id) {
  const g = geos(), root = new THREE.Group();
  const sph = (mat, r, x, y, z, sy = 1) => { const m = new THREE.Mesh(g.sphere, mat); m.scale.set(r, r * sy, r); m.position.set(x, y, z); m.castShadow = true; root.add(m); return m; };
  if (id === 'blueberry') { sph(g.berry, 0.075, 0, 0.06, 0, 0.92); sph(g.dark, 0.022, 0, 0.128, 0, 0.3); }
  else if (id === 'strawberry') { const m = new THREE.Mesh(g.slice, g.red); m.position.y = 0.015; m.castShadow = true; root.add(m); root.scale.setScalar(1.25); }
  else if (id === 'whip') { sph(g.cream, 0.14, 0, 0.07, 0, 0.6); sph(g.cream, 0.1, 0.01, 0.15, 0, 0.62); sph(g.cream, 0.06, 0, 0.21, 0.01, 0.75); sph(g.cream, 0.022, 0, 0.27, 0.01, 1.4); }
  else if (id === 'chives') { const m = new THREE.Mesh(g.chive, g.green); m.position.y = 0.012; root.add(m); }
  else if (id === 'sprinkles') { const m = new THREE.Mesh(g.sprinkle, g.sprinkleMats[(Math.random() * 5) | 0]); m.position.y = 0.012; root.add(m); }
  else if (id === 'skull') {
    const b = new THREE.Group(); root.add(b);
    const add = (mesh) => { mesh.castShadow = true; b.add(mesh); };
    const head = new THREE.Mesh(g.sphere, g.bone); head.scale.setScalar(0.1); add(head);
    const jaw = new THREE.Mesh(g.jaw, g.bone); jaw.position.set(0, -0.08, 0.02); add(jaw);
    for (const s of [-1, 1]) { const e = new THREE.Mesh(g.sphere, g.dark); e.scale.setScalar(0.026); e.position.set(s * 0.04, 0, 0.085); b.add(e); }
    b.position.y = 0.09; b.rotation.x = -0.75;
  }
  root.rotation.y = id === 'skull' ? 0 : Math.random() * 6.28;
  root.userData.art = true;
  return root;
}

const MAX_BEADS = 2400, SPACING = 0.018, BEAD_R = 0.042;
const _d = new THREE.Object3D(), _col = new THREE.Color(), _o = new THREE.Vector3(), _down = new THREE.Vector3(0, -1, 0), _p = new THREE.Vector3();
const shown = (o) => { for (; o; o = o.parent) if (o.visible === false) return false; return true; };

export class PlateArt {
  constructor(game) {
    this.game = game; this.plate = game.props.plate; this.anchor = game.plateAnchor;
    this.ray = new THREE.Raycaster();
    this.root = new THREE.Group(); this.root.userData.art = true; this.anchor.add(this.root);
    this.beads = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 7), new THREE.MeshPhysicalMaterial({ roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.08 }), MAX_BEADS);
    this.beads.setColorAt(0, _col.set('#ffffff')); this.beads.count = 0; this.beads.frustumCulled = false; this.beads.userData.art = true; this.root.add(this.beads);
    this.history = []; this.tool = { kind: 'sauce', id: 'ketchup' };
    this.last = null; this.lastTop = null; this.full = false;
  }
  get used() { return new Set(this.history.map((h) => h.id)); }
  get empty() { return !this.history.length; }

  /** Food meshes change shape as they cook, so refresh their bounds or rays would miss them. */
  prepare() {
    this.plate.traverse((o) => {
      if (!o.isMesh || o.userData.art) return;
      if (o.geometry) o.geometry.computeBoundingSphere();
      if (o.isInstancedMesh) o.computeBoundingSphere();
    });
  }
  /** The first thing on the plate along a ray, in plate-food coordinates. */
  _hit(ray) {
    for (const h of ray.intersectObject(this.plate, true)) {
      const o = h.object;
      if (!o.isMesh || !shown(o)) continue;
      let art = false; for (let q = o; q && q !== this.plate; q = q.parent) if (q.userData.art) art = true;
      const mat = Array.isArray(o.material) ? o.material[0] : o.material;
      if (art || !mat.visible || (mat.transparent && mat.opacity < 0.05)) continue; // skips the plate's invisible grab box
      const p = this.anchor.worldToLocal(_p.copy(h.point)).clone();
      return Math.hypot(p.x, p.z) <= PLATE.r ? p : null;
    }
    return null;
  }
  _hitAbove(x, z) {
    this.anchor.localToWorld(_o.set(x, 6, z));
    this.ray.set(_o, _down);
    return this._hit(this.ray);
  }

  // ---------- pointer ----------
  begin(ray) {
    const t = this.tool; this.last = null; this.lastTop = null;
    if (t.kind === 'sauce') { this.history.push({ type: 'stroke', id: t.id, from: this.beads.count }); this.move(ray); }
    else this._drop(ray);
  }
  move(ray) {
    if (this.tool.kind !== 'sauce') return this._drop(ray);
    const p = this._hit(ray);
    if (p) this._strokeTo(p, this.tool.id); else this.last = null;
  }
  end() {
    const h = this.history[this.history.length - 1];
    if (h && h.type === 'stroke' && this.beads.count === h.from) this.history.pop();
    this.last = null; this.lastTop = null;
    this.game.emit('changed');
  }

  _bead(p, id) {
    const n = this.beads.count;
    if (n >= MAX_BEADS) { if (!this.full) { this.full = true; this.game.toast('The bottle is empty! Undo or clear to squeeze more 🧴'); } return; }
    const r = BEAD_R * (0.97 + Math.random() * 0.06);
    _d.position.set(p.x, p.y + 0.012, p.z); _d.rotation.set(0, 0, 0); _d.scale.set(r, r * 0.6, r); _d.updateMatrix();
    this.beads.setMatrixAt(n, _d.matrix); this.beads.setColorAt(n, _col.set(ALL[id].color));
    this.beads.count = n + 1;
    this.beads.instanceMatrix.needsUpdate = true; this.beads.instanceColor.needsUpdate = true;
  }
  _strokeTo(p, id) {
    if (!this.last) { this._bead(p, id); this.last = p; return; }
    const dist = this.last.distanceTo(p), n = Math.floor(dist / SPACING);
    for (let i = 1; i <= n; i++) this._bead(_o.lerpVectors(this.last, p, i / n), id);
    if (n) this.last = p;
  }
  _drop(ray) {
    const t = this.tool, p = this._hit(ray); if (!p) return;
    if (this.lastTop && this.lastTop.distanceTo(p) < 0.28) return;
    this.lastTop = p;
    const spec = ALL[t.id], parts = [];
    const put = (q) => { const m = topping(t.id); m.position.copy(q); this.root.add(m); parts.push(m); };
    if (spec.scatter) {
      for (let i = 0; i < spec.scatter; i++) {
        const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * 0.24, q = this._hitAbove(p.x + Math.cos(a) * r, p.z + Math.sin(a) * r);
        if (q) put(q);
      }
    } else put(p);
    if (parts.length) this.history.push({ type: 'top', id: t.id, parts });
  }

  /** Squeeze a ready-made shape across the plate, upright for the current camera. */
  stamp(stampId) {
    const st = STAMPS.find((s) => s.id === stampId); if (!st) return;
    const id = this.tool.kind === 'sauce' ? this.tool.id : 'ketchup';
    const az = this.game.camAz, c = Math.cos(az), s = Math.sin(az), scale = 0.58;
    const pts = [];
    for (const path of st.paths()) {
      pts.push(null);
      for (let i = 0; i < path.length; i++) {
        const [ax, az_] = path[i], [bx, bz] = path[Math.min(i + 1, path.length - 1)];
        const n = Math.max(1, Math.round(Math.hypot(bx - ax, bz - az_) * scale / 0.03));
        for (let k = 0; k < n; k++) { const x = (ax + (bx - ax) * k / n) * scale, z = (az_ + (bz - az_) * k / n) * scale; pts.push([x * c + z * s, -x * s + z * c]); }
      }
    }
    this.history.push({ type: 'stroke', id, from: this.beads.count });
    this.prepare();
    let i = 0; this.last = null;
    this.game.anim(0.75, (t) => {
      for (const end = Math.ceil(t * pts.length); i < end; i++) {
        if (!pts[i]) { this.last = null; continue; }
        const q = this._hitAbove(pts[i][0], pts[i][1]);
        if (q) this._strokeTo(q, id); else this.last = null;
      }
    }, () => { this.last = null; this.game.emit('changed'); });
  }

  undo() {
    const h = this.history.pop(); if (!h) return;
    if (h.type === 'stroke') { this.beads.count = h.from; this.full = false; }
    else h.parts.forEach((m) => this.root.remove(m));
    this.game.emit('changed');
  }
  clear() {
    for (const c of this.root.children.slice()) if (c !== this.beads) this.root.remove(c);
    this.beads.count = 0; this.history = []; this.last = null; this.full = false;
  }
}

/** A little squeeze bottle-style jug of pancake batter. */
export function makeJug() {
  const g = new THREE.Group();
  const pts = [[0.001, 0], [0.26, 0], [0.3, 0.06], [0.27, 0.32], [0.2, 0.46], [0.22, 0.56]].map(([x, y]) => new THREE.Vector2(x, y));
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), new THREE.MeshPhysicalMaterial({ color: '#fff4e6', roughness: 0.25, clearcoat: 1, side: THREE.DoubleSide })); body.castShadow = true;
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.285, 0.018, 8, 28), new THREE.MeshStandardMaterial({ color: '#ff8fc8' })); band.rotation.x = Math.PI / 2; band.position.y = 0.2;
  const batter = new THREE.Mesh(new THREE.CircleGeometry(0.2, 20), new THREE.MeshStandardMaterial({ color: '#f7e4b0' })); batter.rotation.x = -Math.PI / 2; batter.position.y = 0.5;
  const tilt = new THREE.Group(); tilt.add(body, band, batter); tilt.rotation.z = -0.9; tilt.position.x = -0.25; g.add(tilt);
  return g;
}
