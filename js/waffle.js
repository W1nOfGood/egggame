// The waffle iron in front of the stove: tap it to pour batter and close the lid, watch the light, tap again to open it
// and the waffle hops onto the plate. It cooks on its own, so it can run while the pan is busy.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { Ingredient } from './ingredients.js';
import { artLabel } from './art.js';
import { audio } from './audio.js';

const POS = { x: -0.75, z: 2.66 }, RATE = 0.085; // golden from about 6.5 s to 11 s
const GOLD = [0.55, 0.95];
const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, clearcoat: 0.8, ...o });
const lathe = (pts, mat, seg = 40) => { const m = new THREE.Mesh(new THREE.LatheGeometry(new THREE.SplineCurve(pts.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(20), seg), mat); m.castShadow = true; m.receiveShadow = true; return m; };
const _v = new THREE.Vector3(), _w = new THREE.Vector3();

export class WaffleIron {
  constructor(game) {
    this.game = game;
    const g = this.group = new THREE.Group(); g.position.set(POS.x, 0, POS.z); g.rotation.y = 0.12; game.scene.add(g);
    const shell = M('#f7b6cf', { clearcoat: 1, roughness: 0.22 }), chrome = M('#e4e6ee', { metalness: 1, roughness: 0.15 }), iron = M('#2b2530', { roughness: 0.55, clearcoat: 0.3 }), cream = M('#fff4e6', { roughness: 0.35 });
    // base: a rounded drum with a chrome band and little feet
    g.add(lathe([[0.001, 0.03], [0.5, 0.03], [0.6, 0.07], [0.62, 0.16], [0.58, 0.22], [0.001, 0.22]], shell));
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.615, 0.022, 10, 48), chrome); band.rotation.x = Math.PI / 2; band.position.y = 0.15; g.add(band);
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4, f = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.04, 12), iron); f.position.set(Math.cos(a) * 0.42, 0.02, Math.sin(a) * 0.42); g.add(f); }
    // the lower plate with its grid of ridges
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.03, 40), iron); plate.position.y = 0.235; plate.receiveShadow = true; g.add(plate);
    for (let k = -3; k <= 3; k++) for (const rot of [0, Math.PI / 2]) { const len = 2 * Math.sqrt(Math.max(0, 0.48 * 0.48 - (k * 0.13) ** 2)); const r = new THREE.Mesh(new THREE.BoxGeometry(len, 0.03, 0.025), iron); r.position.set(rot ? k * 0.13 : 0, 0.26, rot ? 0 : k * 0.13); r.rotation.y = rot; g.add(r); }
    // the ready light and the dial on the front
    this.light = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 10), new THREE.MeshBasicMaterial({ color: '#555' })); this.light.position.set(0.18, 0.13, 0.6); g.add(this.light);
    const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 18), cream); dial.rotation.x = Math.PI / 2; dial.position.set(-0.16, 0.13, 0.61); g.add(dial);
    // the lid on a hinge at the back
    this.lid = new THREE.Group(); this.lid.position.set(0, 0.25, -0.56); g.add(this.lid);
    const top = lathe([[0.001, 0.2], [0.3, 0.19], [0.52, 0.12], [0.6, 0.03], [0.6, 0]], shell); top.position.z = 0.56; this.lid.add(top);
    const under = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.02, 40), iron); under.position.set(0, 0.0, 0.56); this.lid.add(under);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.02, 10, 48), chrome); ring.rotation.x = Math.PI / 2; ring.position.set(0, 0.02, 0.56); this.lid.add(ring);
    const handle = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.07, 0.16, 3, 0.03), cream); handle.position.set(0, 0.07, 1.2); handle.castShadow = true; this.lid.add(handle);
    const stem = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.12), chrome); stem.position.set(0, 0.05, 1.12); this.lid.add(stem);
    const heart = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), M('#ff8fc8')); heart.scale.set(1, 0.4, 1); heart.position.set(0, 0.2, 0.56); this.lid.add(heart);
    this.chipAnchor = new THREE.Object3D(); this.chipAnchor.position.y = 0.95; g.add(this.chipAnchor);
    g.traverse((o) => { o.userData.interact = 'waffleIron'; });
    const hit = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.7, 1.4), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 0.3; hit.userData.interact = 'waffleIron'; g.add(hit);
    game.kitchen.pickables.push(g); game.obstacles.push({ obj: g, r: 0.75 });
    this.ing = null; this.c = 0; this.open = true; this.angle = -1.15; this.lid.rotation.x = this.angle; this._fx = 0;
  }
  get state() { return !this.ing ? 'empty' : this.c < GOLD[0] ? 'cooking' : this.c <= GOLD[1] ? 'ready' : 'burning'; }

  tap() {
    const g = this.game;
    if (this.busy) return;
    if (!this.ing) {
      if (!g.canAddIng('waffle', 'plate')) return g.toast('The plate is full of waffles! 🧇');
      this._pour();
    } else this._takeOut();
  }
  _pour() {
    const g = this.game, ing = this.ing = new Ingredient('waffle', { buttered: true });
    ing.flips = 1; ing.c = [0, 0]; ing.loc = 'iron';
    ing.group.position.set(0, 0.25, 0); ing.group.scale.set(0.05, 1, 0.05); this.group.add(ing.group); ing.refresh(true);
    this.c = 0; this.busy = true; audio.pour();
    g.anim(0.45, (t) => { const s = 0.05 + 0.95 * t; ing.group.scale.set(s, 1, s); if (t > 0.3 && t < 0.35) audio.pour(); }, () => { this.open = false; this.busy = false; audio.thud(); g.toast('Batter in! Watch the light 🧇'); g.emit('changed'); });
  }
  _takeOut() {
    const g = this.game, ing = this.ing;
    this.open = true; this.busy = true; audio.clink();
    const burnt = this.state === 'burning';
    g.anim(0.3, () => {}, () => {
      // the waffle hops out and lands on the plate
      const from = ing.group.getWorldPosition(new THREE.Vector3()); g.scene.add(ing.group); ing.group.position.copy(from); ing.group.scale.setScalar(1);
      g.anim(0.55, (t) => { g.plateAnchor.getWorldPosition(_v); ing.group.position.lerpVectors(from, _v, t); ing.group.position.y += Math.sin(Math.PI * t) * 1.3; ing.group.rotation.set(0, t * 4, 0); },
        () => { ing.loc = 'air'; g.placeIngredient(ing, 'plate'); this.ing = null; this.busy = false; g.emit('stat', 'waffles'); g.toast(burnt ? 'A little crispy… 😬' : 'Waffle up! 🧇', burnt ? 'bad' : 'good'); });
    });
  }
  reset() {
    if (this.ing) { this.ing.dispose(); this.ing = null; }
    this.busy = false; this.open = true; this.c = 0;
  }
  update(dt) {
    // lid eases open or shut
    this.angle += ((this.open ? -1.15 : 0) - this.angle) * Math.min(1, dt * 10); this.lid.rotation.x = this.angle;
    const st = this.state;
    this.light.material.color.set(st === 'empty' ? '#5a5560' : st === 'cooking' ? '#ffb02e' : st === 'ready' ? '#3fe08a' : '#ff3b3b');
    if (!this.ing || this.open) return;
    this.c += dt * RATE;
    const ing = this.ing; ing.c = [Math.min(1.3, this.c), Math.min(1.3, this.c)];
    const b = Math.max(0, (this.c - 0.95) * 2.2); ing.brown = [Math.min(1, 0.25 + b), Math.min(1, 0.25 + b)]; ing.dirty = true; ing.refresh();
    if ((this._fx -= dt) < 0) {
      this._fx = st === 'burning' ? 0.25 : 0.6;
      this.group.getWorldPosition(_w); _w.y += 0.6;
      this.game.fx.emit(st === 'burning' ? 'smoke' : 'wisp', _w, { spread: 0.4 });
    }
  }
  /** Progress chip over the iron, like the ones over the pan. */
  chip() {
    const st = this.state; if (st === 'empty' || this.open) return null;
    const p = Math.min(1, this.c / GOLD[0]);
    return { key: 'waffle', cls: st === 'cooking' ? 'cooking' : st === 'ready' ? 'ready' : 'burning', label: st === 'cooking' ? '🧇 Cooking' : st === 'ready' ? '🧇 Ready! Tap to open' : '🧇 Burning!', p, obj: this.chipAnchor, up: 0 };
  }
  hint(o) {
    const g = this.game, st = this.state, plated = g.ings.filter((i) => i.kind === 'waffle' && i.loc === 'plate').length, want = o.stack || 1;
    if (st === 'cooking' && !this.open) return { text: 'Waffle cooking… open it when the light turns green 🟢' };
    if (st === 'ready' && !this.open) return { text: 'Golden! Tap the waffle iron to open it 🧇' };
    if (st === 'burning' && !this.open) return { text: 'It\'s burning! Tap the waffle iron to open it 🔥' };
    if (plated < want) return { text: `Tap the waffle iron in front of the stove to pour batter${want > 1 ? ` (${plated + 1} of ${want})` : ''} 🧇` };
    const need = (o.toppings || []).filter((id) => !g.art.used.has(id));
    if (need.length) return { text: `Add ${artLabel(need[0])} from the caddy in front of the plate 🎨` };
    return { text: 'Looks great — tap Serve! 🛎️', tool: 'serve' };
  }
}
