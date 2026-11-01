// The cup behind the plate: pouring, extras and how it all looks. It rides along on the plate, so it follows when the plate moves.
import * as THREE from 'three';
import { EXTRAS, LIQUIDS, identify, rateDrink } from './drinklist.js';
import { audio } from './audio.js';

const POUR_RATE = 0.3; // of a full cup per second
// inner shape of each cup: bottom radius, top radius, height, floor
const SPEC = {
  glass: { rb: 0.2, rt: 0.27, h: 0.85, floor: 0.05 }, mug: { rb: 0.27, rt: 0.29, h: 0.58, floor: 0.05 }, teacup: { rb: 0.15, rt: 0.33, h: 0.3, floor: 0.09 },
  jar: { rb: 0.27, rt: 0.25, h: 0.72, floor: 0.05 }, skull: { rb: 0.24, rt: 0.25, h: 0.55, floor: 0.05 },
};
const MAX_LAYERS = 6;
const _w = new THREE.Vector3(), _c = new THREE.Color();

let G = null;
function shared() {
  if (G) return G;
  const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.5, ...o });
  G = {
    unit: new THREE.CylinderGeometry(1, 1, 1, 28).translate(0, 0.5, 0), sphere: new THREE.SphereGeometry(1, 12, 9), box: new THREE.BoxGeometry(1, 1, 1),
    disc: new THREE.CylinderGeometry(1, 1, 1, 18), ring: new THREE.TorusGeometry(1, 0.08, 6, 20),
    glass: new THREE.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, roughness: 0.05, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false }),
    mug: M('#b48cff', { roughness: 0.3, clearcoat: 1 }), china: M('#fff4e6', { roughness: 0.22, clearcoat: 1 }), bone: M('#fff4e6', { roughness: 0.5 }), dark: M('#241a2e'),
    ice: new THREE.MeshPhysicalMaterial({ color: '#eaf8ff', transparent: true, opacity: 0.62, roughness: 0.08, clearcoat: 1 }), cream: M('#fff8ec', { roughness: 0.6, clearcoat: 0.1 }), foam: M('#f7ecd8', { roughness: 0.75, clearcoat: 0 }),
    spice: M('#7a4a22'), caramel: M('#b5691c', { clearcoat: 1, roughness: 0.15 }), marsh: M('#fffaf4', { roughness: 0.7, clearcoat: 0 }), boba: M('#2a1710', { roughness: 0.15, clearcoat: 1 }),
    lemon: M('#ffe45c'), rind: M('#f2c71c'), mint: M('#4fa84a'), cherry: M('#c8102e', { clearcoat: 1, roughness: 0.15 }), stem: M('#5c7a2e'), straw: M('#ff8fc8'),
  };
  return G;
}

export class DrinkCup {
  constructor(game) {
    this.game = game; shared();
    this.group = new THREE.Group(); this.group.position.set(0.25, 0, -1.6); this.group.visible = false;
    this.group.userData.art = true; // sauce and toppings pass straight through it
    game.props.plate.add(this.group);
    this.body = new THREE.Group(); this.liquid = new THREE.Group(); this.surface = new THREE.Group(); this.fixed = new THREE.Group();
    this.group.add(this.liquid, this.surface, this.fixed, this.body);
    this.pool = Array.from({ length: MAX_LAYERS }, () => { const m = new THREE.Mesh(G.unit, new THREE.MeshPhysicalMaterial({ roughness: 0.18, clearcoat: 0.8 })); m.visible = false; this.liquid.add(m); return m; });
    this.stream = new THREE.Mesh(G.unit, new THREE.MeshPhysicalMaterial({ roughness: 0.2, clearcoat: 0.8 })); this.stream.visible = false; this.group.add(this.stream);
    this.pourer = new THREE.Group(); this.pourer.visible = false; this.group.add(this.pourer);
    this.pourerMat = new THREE.MeshPhysicalMaterial({ roughness: 0.25, clearcoat: 1 });
    const pb = new THREE.Mesh(new THREE.LatheGeometry([[0.001, 0], [0.13, 0], [0.145, 0.04], [0.145, 0.3], [0.06, 0.42], [0.05, 0.55], [0.001, 0.55]].map(([x, y]) => new THREE.Vector2(x, y)), 16), this.pourerMat); pb.castShadow = true; this.pourer.add(pb);
    this.chipAnchor = new THREE.Object3D(); this.chipAnchor.position.y = 0.75; this.group.add(this.chipAnchor);
    this.cupId = 'glass'; this.pouring = null; this._t = 0; this._steam = 0;
    this.clear(); this.setCup('glass');
  }
  get ready() { return this.fill > 0; }
  get spec() { return SPEC[this.cupId]; }
  made() { return identify(this.amounts, this.extras); }
  /** Rate what's in the cup; null if it's empty. */
  result(wantedId = null) { return this.ready ? rateDrink(this, wantedId) : null; }

  clear() {
    this.amounts = {}; this.layers = []; this.extras = []; this.fill = 0; this.spilled = false; this.stirred = false; this.pouring = null;
    if (this.pourer) this.pourer.visible = false; this.stream.visible = false;
    this.group.visible = !!this.game.drinking;
    this._layout(); this._buildExtras();
  }
  setCup(id) {
    if (!SPEC[id]) return;
    this.cupId = id;
    this.body.clear();
    const s = this.spec, top = s.floor + s.h, wall = id === 'glass' || id === 'jar' ? 0.018 : 0.035;
    const lift = id === 'teacup' ? 0.03 : 0;
    const profile = [[0.001, 0], [s.rb + wall, 0]];
    if (id === 'skull') profile.push([0.36, 0.28]);
    profile.push([s.rt + wall, top - 0.012], [s.rt + wall * 0.75, top - 0.002], [s.rt + wall * 0.25, top - 0.002], [s.rt, top - 0.012], [s.rb + 0.01, s.floor + 0.015], [s.rb - 0.02, s.floor], [0.001, s.floor]);
    const see = id === 'glass' || id === 'jar', mat = see ? G.glass : id === 'mug' ? G.mug : id === 'skull' ? G.bone : G.china;
    const cup = new THREE.Mesh(new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(x, y)), 48), mat);
    cup.position.y = lift; cup.castShadow = !see; cup.renderOrder = see ? 3 : 0; this.body.add(cup);
    const add = (geo, m, x, y, z, sx, sy = sx, sz = sx) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); this.body.add(o); return o; };
    if (id === 'mug' || id === 'teacup') { // a rounded handle joined to the wall
      const r = id === 'mug' ? 0.15 : 0.085, h = new THREE.Mesh(new THREE.TorusGeometry(r, id === 'mug' ? 0.03 : 0.02, 10, 22, Math.PI), mat);
      h.rotation.z = -Math.PI / 2; h.position.set(s.rt + wall - 0.01, top * (id === 'mug' ? 0.52 : 0.6) + lift, 0); h.scale.set(1, 1, 1); h.castShadow = true; this.body.add(h);
    }
    if (id === 'teacup') add(G.disc, G.china, 0, 0.015, 0, 0.5, 0.03, 0.5);
    if (id === 'jar') add(G.ring, G.bone, 0, top - 0.02, 0, s.rt + 0.02, s.rt + 0.02, 0.5).rotation.x = Math.PI / 2;
    if (id === 'glass' || id === 'jar') add(G.ring, G.glass, 0, top - 0.004, 0, s.rt + wall * 0.5, s.rt + wall * 0.5, 0.25).rotation.x = Math.PI / 2;
    if (id === 'skull') {
      for (const x of [-0.12, 0.12]) add(G.sphere, G.dark, x, 0.34, 0.3, 0.07, 0.085, 0.04);
      add(G.sphere, G.dark, 0, 0.23, 0.335, 0.025, 0.04, 0.02);
      for (const x of [-0.08, 0, 0.08]) add(G.box, G.dark, x, 0.12, 0.3, 0.012, 0.07, 0.02);
    }
    this._layout(); this._buildExtras();
    this.game.emit('changed');
  }

  // ---------- pouring ----------
  pour(id) {
    if (!LIQUIDS[id]) return;
    this.pouring = id; this._t = 0; this.stirred = false;
    const last = this.layers[this.layers.length - 1];
    if (!last || last.id !== id) { if (this.layers.length >= MAX_LAYERS) this.stirred = true; this.layers.push({ id, amt: 0 }); }
    this.stream.material.color.set(LIQUIDS[id].color); this.pourerMat.color.set(LIQUIDS[id].color);
    this._layout();
  }
  stopPour() { if (!this.pouring) return; this.pouring = null; this.stream.visible = false; this.pourer.visible = false; this.game.emit('changed'); }
  update(dt) {
    if (!this.group.visible) return;
    if (this.pouring) {
      const id = this.pouring, add = dt * POUR_RATE;
      if (this.fill + add >= 1) {
        const left = Math.max(0, 1 - this.fill);
        this._add(id, left);
        if (!this.spilled) { this.spilled = true; audio.tear(); this.game.toast('Oops, it\'s overflowing! 💦', 'bad'); }
        this.stopPour();
      } else this._add(id, add);
      if ((this._t -= dt) < 0) { this._t = 0.11; audio.pour(); }
      this._layout();
    }
    // hot drinks steam a little, unless there's ice in them
    const hot = this.fill > 0.1 && !this.extras.includes('ice') && Object.keys(this.amounts).some((k) => LIQUIDS[k].hot);
    if (hot && (this._steam -= dt) < 0) {
      this._steam = 0.7;
      this.group.getWorldPosition(_w); _w.y += this.spec.floor + this.fill * this.spec.h + 0.1;
      this.game.fx.emit('wisp', _w, { spread: 0.1 });
    }
  }
  _add(id, v) {
    this.amounts[id] = (this.amounts[id] || 0) + v; this.fill += v;
    this.layers[this.layers.length - 1].amt += v;
  }
  stir() { if (!this.ready) return; this.stirred = true; audio.scrape(1); this._layout(); }
  toggleExtra(id) {
    if (!EXTRAS[id]) return;
    if (this.extras.includes(id)) this.extras = this.extras.filter((k) => k !== id); else this.extras = this.extras.concat(id);
    this._buildExtras(); this._layout();
    this.game.emit('changed');
  }
  _radius(t) { const s = this.spec; return (s.rb + (s.rt - s.rb) * Math.max(0, Math.min(1, t))) * 0.94; }
  _setLayer(m, y0, dy, colorHex, clear) {
    const s = this.spec, r = this._radius(y0 + dy / 2);
    m.visible = true; m.position.y = s.floor + y0 * s.h; m.scale.set(r, Math.max(0.001, dy * s.h), r);
    m.material.color.copy(colorHex); m.material.transparent = clear; m.material.opacity = clear ? 0.55 : 1; m.material.needsUpdate = m.material.userData.clear !== clear; m.material.userData.clear = clear;
  }
  _layout() {
    const s = this.spec;
    this.pool.forEach((m) => { m.visible = false; });
    if (this.fill > 0) {
      if (this.stirred) {
        const blend = new THREE.Color(0, 0, 0);
        for (const [k, v] of Object.entries(this.amounts)) blend.add(_c.set(LIQUIDS[k].color).multiplyScalar(v / this.fill));
        this._setLayer(this.pool[0], 0, this.fill, blend, false);
      } else {
        let y = 0;
        this.layers.slice(0, MAX_LAYERS).forEach((l, i) => { if (l.amt > 0) { this._setLayer(this.pool[i], y, l.amt, _c.set(LIQUIDS[l.id].color), !!LIQUIDS[l.id].clear); y += l.amt; } });
      }
    }
    const lvl = s.floor + this.fill * s.h, r = this._radius(this.fill);
    this.surface.position.y = lvl; this.surface.scale.setScalar(r / 0.25);
    if (this.pouring) {
      const top = s.floor + s.h + 0.75;
      this.stream.visible = true; this.stream.position.set(0, lvl, 0); this.stream.scale.set(0.035, top - lvl, 0.035);
      // bottle tipped so its mouth is right above the stream
      this.pourer.visible = true; this.pourer.rotation.z = 2.25; this.pourer.position.set(0.43, top + 0.35, 0);
    }
  }

  // ---------- extras ----------
  _buildExtras() {
    this.surface.clear(); this.fixed.clear();
    const s = this.spec, has = (k) => this.extras.includes(k);
    const put = (parent, geo, mat, x, y, z, sx, sy = sx, sz = sx) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; parent.add(m); return m; };
    const S = this.surface;
    let top = 0.01; // what's stacked on the surface so far, so a cherry sits on the cream
    if (has('foam')) { put(S, G.disc, G.foam, 0, 0.02, 0, 0.235, 0.05, 0.235); top = 0.05; }
    if (has('ice')) for (const [x, z, a] of [[-0.09, 0.05, 0.4], [0.1, 0.07, 1.1], [0.01, -0.1, 2]]) put(S, G.box, G.ice, x, -0.005, z, 0.1).rotation.set(a, a * 1.7, a * 0.5);
    if (has('whip')) { put(S, G.sphere, G.cream, 0, 0.05, 0, 0.2, 0.09, 0.2); put(S, G.sphere, G.cream, 0.01, 0.13, 0, 0.13, 0.07, 0.13); put(S, G.sphere, G.cream, 0, 0.19, 0.01, 0.07, 0.06, 0.07); top = 0.23; }
    if (has('marshmallow')) for (const [x, z, a] of [[-0.08, -0.05, 0.5], [0.09, -0.03, 1.2], [0, 0.09, 2.1]]) put(S, G.disc, G.marsh, x, top + 0.03, z, 0.07, 0.07, 0.07).rotation.set(0.4, a, 0.3);
    if (has('cinnamon')) for (let i = 0; i < 16; i++) { const a = i * 2.4, r = 0.03 + (i / 16) * 0.17; put(S, G.sphere, G.spice, Math.cos(a) * r, top + 0.004, Math.sin(a) * r, 0.009, 0.005, 0.009).castShadow = false; }
    if (has('caramel')) for (const [r, h] of [[0.15, 0.012], [0.08, 0.016]]) { const m = put(S, G.ring, G.caramel, 0, top + h, 0, r, r, 0.08); m.rotation.x = Math.PI / 2; m.castShadow = false; }
    if (has('mint')) for (const a of [0.5, 2.3]) { const m = put(S, G.sphere, G.mint, Math.cos(a) * 0.05, top + 0.035, Math.sin(a) * 0.05, 0.075, 0.015, 0.035); m.rotation.set(0.2, a, 0.35); }
    if (has('cherry')) { put(S, G.sphere, G.cherry, 0, top + 0.05, 0, 0.055); const st = put(S, G.unit, G.stem, 0, top + 0.09, 0, 0.006, 0.12, 0.006); st.rotation.z = -0.35; }
    const rim = s.floor + s.h;
    if (has('lemon')) { put(this.fixed, G.disc, G.rind, s.rt, rim, 0, 0.13, 0.016, 0.13).rotation.z = 1.1; put(this.fixed, G.disc, G.lemon, s.rt + 0.002, rim, 0, 0.115, 0.02, 0.115).rotation.z = 1.1; }
    if (has('boba')) for (let i = 0; i < 16; i++) { const a = i * 2.4, r = Math.sqrt(i / 16) * (s.rb * 0.8); put(this.fixed, G.sphere, G.boba, Math.cos(a) * r, s.floor + 0.03 + (i % 3) * 0.035, Math.sin(a) * r, 0.032).castShadow = false; }
    if ((has('ice') || has('boba')) && (this.cupId === 'glass' || this.cupId === 'jar')) { const m = put(this.fixed, G.unit, G.straw, -0.05, s.floor + 0.02, 0.02, 0.022, s.h + 0.42, 0.022); m.rotation.z = -0.16; }
  }
}
