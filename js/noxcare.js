// Looking after Noxie: a treat bowl and a ball of yarn next to it, a mood that slowly drifts down between visits,
// and tricks Noxie learns from being petted, fed and played with. A happy Noxie cheers you on (+2 tips per dish).
import * as THREE from 'three';
import { audio } from './audio.js';
import { mergeStatic } from './merge.js';

export const TRICKS = [
  { id: 'spin', name: '🌀 Spin', learn: (n) => n.pets >= 5, tip: 'Pet Noxie 5 times' },
  { id: 'wave', name: '👋 Wing wave', learn: (n) => n.fed >= 3, tip: 'Give 3 treats' },
  { id: 'pounce', name: '🐾 Pounce', learn: (n) => n.plays >= 3, tip: 'Play with the yarn 3 times' },
  { id: 'backflip', name: '🤸 Backflip', learn: (n) => n.pets >= 20, tip: 'Pet Noxie 20 times' },
  { id: 'sing', name: '🎵 Sing', learn: (n) => n.fed >= 10 && n.plays >= 6, tip: 'Give 10 treats and play 6 times' },
];
const FULL_FOR = 90 * 1000, DRIFT = 10 * 60 * 1000; // treats every 90 s at most; mood drops 1 point every 10 minutes away
const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.7, ...o });

export class NoxCare {
  constructor({ game, decor, scene, settings, save }) {
    Object.assign(this, { game, decor, scene, s: settings, save });
    const n = this.n = (settings.nox ||= { happy: 70, last: Date.now(), pets: 0, fed: 0, plays: 0, tricks: [], fedAt: 0 });
    n.happy = Math.max(0, n.happy - Math.floor((Date.now() - (n.last || Date.now())) / DRIFT)); n.last = Date.now();
    this._build();
    decor.onPet = () => this.pet();
  }
  get happy() { return this.n.happy; }
  get cheering() { return this.n.happy >= 70; }
  mood() {
    const h = this.n.happy;
    return h >= 85 ? ['😻', 'over the moon'] : h >= 65 ? ['😺', 'happy'] : h >= 40 ? ['🐱', 'okay'] : ['😿', 'lonely'];
  }
  _change(by) { const n = this.n; n.happy = Math.max(0, Math.min(100, n.happy + by)); n.last = Date.now(); this.save(); }

  _build() {
    const g = this.game;
    // treat bowl: a pink bowl full of little fish biscuits
    const bowl = this.bowl = new THREE.Group(); bowl.position.set(5.85, 0, -0.25); this.scene.add(bowl);
    const pts = [[0.001, 0.005], [0.16, 0.005], [0.24, 0.06], [0.27, 0.14], [0.26, 0.16], [0.21, 0.08], [0.001, 0.05]].map(([x, y]) => new THREE.Vector2(x, y));
    const b = new THREE.Mesh(new THREE.LatheGeometry(pts, 32), M('#ff8fc8', { side: THREE.DoubleSide })); b.castShadow = true; bowl.add(b);
    const biscuit = M('#e9a35a', { roughness: 0.7, clearcoat: 0.1 });
    for (let i = 0; i < 7; i++) {
      const a = i * 2.4, r = 0.04 + (i % 3) * 0.05, f = new THREE.Group(); f.position.set(Math.cos(a) * r, 0.08 + (i % 2) * 0.02, Math.sin(a) * r); f.rotation.set(0.2, a, 0.1); bowl.add(f);
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), biscuit); body.scale.set(1.3, 0.55, 0.8); f.add(body);
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.05, 6), biscuit); tail.rotation.z = Math.PI / 2; tail.position.x = -0.07; f.add(tail);
    }
    mergeStatic(bowl, () => false, [], () => true);
    // a ball of lavender yarn with a loose end
    const yarn = this.yarn = new THREE.Group(); yarn.position.set(4.55, 0, -2.05); this.scene.add(yarn);
    const ball = new THREE.Group(); ball.position.y = 0.17; yarn.add(ball); this.ball = ball;
    const wool = M('#b48cff', { roughness: 0.9, clearcoat: 0, sheen: 1, sheenColor: new THREE.Color('#ffd6f2') });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 18), wool); core.castShadow = true; ball.add(core);
    for (let i = 0; i < 6; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.163, 0.011, 6, 40), wool); t.rotation.set(i * 0.55, i * 1.1, i * 0.3); ball.add(t); }
    const end = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0.12, -0.1, 0.08), new THREE.Vector3(0.3, -0.16, 0.18), new THREE.Vector3(0.45, -0.165, 0.1)]), 16, 0.012, 6), wool); ball.add(end);
    mergeStatic(ball, () => false, [], () => true);
    const reg = (obj, tap) => { obj.traverse((o) => { o.userData.interact = 'toy'; o.userData.toy = { obj, tap, drag: false }; }); g.kitchen.pickables.push(obj); g.obstacles.push({ obj, r: 0.35 }); };
    const hit = (obj, w, h) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), new THREE.MeshBasicMaterial({ visible: false })); m.position.y = h / 2; obj.add(m); };
    hit(bowl, 0.7, 0.4); hit(yarn, 0.55, 0.45);
    reg(bowl, () => this.feed()); reg(yarn, () => this.play());
  }

  pet() {
    const n = this.n; n.pets++; this._change(4);
    const [face, word] = this.mood();
    if (n.tricks.length && n.happy >= 50 && Math.random() < 0.4) { const t = n.tricks[(Math.random() * n.tricks.length) | 0]; this.decor.trick(t); this.game.toast(`${TRICKS.find((x) => x.id === t).name}! ${face}`, 'good'); }
    else this.game.toast(`${face} Noxie is ${word} · ${n.happy}%${this.cheering ? ' · cheering you on (+🪙2 a dish)' : ''}`);
    this._learn();
  }
  feed() {
    const n = this.n, g = this.game;
    if (Date.now() - n.fedAt < FULL_FOR) { audio.pop(); return g.toast('Noxie is full for now 😸 Try again in a bit'); }
    n.fedAt = Date.now(); n.fed++;
    // a biscuit flies from the bowl into Noxie's mouth
    const fish = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), M('#e9a35a')); fish.scale.set(1.3, 0.6, 0.8); this.scene.add(fish);
    const from = this.bowl.position.clone().setY(0.2), to = this.decor.headPosition();
    audio.pick();
    g.anim(0.55, (t) => { fish.position.lerpVectors(from, to, t); fish.position.y += Math.sin(Math.PI * t) * 0.8; fish.rotation.y = t * 8; },
      () => { this.scene.remove(fish); fish.geometry.dispose(); this.decor.eat(); audio.purr && audio.purr(); this._change(20); g.toast('Nom nom! 🐟 Noxie loved that', 'good'); this._learn(); });
  }
  play() {
    const n = this.n, g = this.game, y = this.yarn, home = y.position.clone();
    n.plays++; this._change(8);
    // the yarn rolls toward Noxie, Noxie pounces, and it rolls back
    const nox = this.decor.headPosition(); const dir = new THREE.Vector3(nox.x - home.x, 0, nox.z - home.z).normalize();
    audio.pop();
    g.anim(1.2, (t) => { const k = Math.sin(Math.PI * t) * 0.45; y.position.set(home.x + dir.x * k, 0, home.z + dir.z * k); this.ball.rotation.z = -t * 9; this.ball.rotation.x = t * 5; }, () => { y.position.copy(home); });
    setTimeout(() => this.decor.trick('pounce'), 350);
    this._learn();
  }
  _learn() {
    const n = this.n;
    for (const t of TRICKS) {
      if (n.tricks.includes(t.id) || !t.learn(n)) continue;
      n.tricks.push(t.id); this.save();
      setTimeout(() => { this.decor.trick(t.id); this.game.toast(`Noxie learned a new trick: ${t.name}! 🎉`, 'good'); audio.chime(); }, 900);
      this.game.emit('stat', 'check');
      break;
    }
  }
}
