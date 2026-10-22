// Lightweight pooled sprite particles: steam, smoke, spatter, seasoning grains, butter bubbles, sparkles.
import * as THREE from 'three';

const TYPES = {
  steam:   { color: '#ffffff', size: [0.35, 1.3], life: 2.2, alpha: 0.22, rise: 0.7, drag: 0.6, blend: THREE.NormalBlending },
  smoke:   { color: '#776d68', size: [0.4, 1.9], life: 2.8, alpha: 0.42, rise: 0.85, drag: 0.5, blend: THREE.NormalBlending },
  spatter: { color: '#fff3c4', size: [0.06, 0.03], life: 0.45, alpha: 0.95, rise: 0, gravity: -9, blend: THREE.NormalBlending },
  salt:    { color: '#ffffff', size: [0.05, 0.05], life: 1.2, alpha: 1, gravity: -7, blend: THREE.NormalBlending },
  pepper:  { color: '#2e2420', size: [0.05, 0.05], life: 1.2, alpha: 1, gravity: -7, blend: THREE.NormalBlending },
  bubble:  { color: '#fff7d6', size: [0.03, 0.12], life: 0.35, alpha: 0.85, rise: 0, blend: THREE.NormalBlending },
  sparkle: { color: '#fff1a8', size: [0.25, 0.05], life: 0.9, alpha: 1, rise: 0.6, gravity: -1.5, blend: THREE.AdditiveBlending },
  shell:   { color: '#fff1df', size: [0.06, 0.06], life: 0.7, alpha: 1, gravity: -9, blend: THREE.NormalBlending },
};

export class FX {
  constructor(scene, dotTex, max = 220) {
    this.scene = scene; this.pool = []; this.live = [];
    this.max = max;
    this.mats = {};
    for (const [k, t] of Object.entries(TYPES)) {
      this.mats[k] = t;
    }
    this.dotTex = dotTex;
  }
  _get(type) {
    let s = this.pool.pop();
    if (!s) {
      if (this.live.length >= this.max) return null;
      s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.dotTex, transparent: true, depthWrite: false }));
      s.renderOrder = 5;
    }
    const t = TYPES[type];
    s.material.color.set(t.color); s.material.blending = t.blend; s.material.opacity = t.alpha;
    s.visible = true;
    this.scene.add(s);
    return s;
  }
  emit(type, pos, { vel = null, spread = 0.2, count = 1, floorY = -10, color = null, life = null } = {}) {
    for (let i = 0; i < count; i++) {
      const s = this._get(type); if (!s) return;
      const t = TYPES[type];
      s.position.set(pos.x + (Math.random() - 0.5) * spread, pos.y, pos.z + (Math.random() - 0.5) * spread);
      if (color) s.material.color.set(color);
      const v = vel ? vel.clone() : new THREE.Vector3(0, 0, 0);
      if (type === 'spatter') v.set((Math.random() - 0.5) * 3, 2 + Math.random() * 2.5, (Math.random() - 0.5) * 3);
      if (type === 'shell') v.set((Math.random() - 0.5) * 2, 1 + Math.random() * 1.5, (Math.random() - 0.5) * 2);
      if (type === 'sparkle') v.set((Math.random() - 0.5) * 2.5, 1 + Math.random() * 2, (Math.random() - 0.5) * 2.5);
      if (type === 'salt' || type === 'pepper') v.add(new THREE.Vector3((Math.random() - 0.5) * 0.5, -0.5 - Math.random(), (Math.random() - 0.5) * 0.5));
      s.userData = { type, t: 0, life: (life || t.life) * (0.75 + Math.random() * 0.5), v, floorY, spin: Math.random() };
      const sz = t.size[0]; s.scale.set(sz, sz, sz);
      this.live.push(s);
    }
  }
  update(dt) {
    for (let i = this.live.length - 1; i >= 0; i--) {
      const s = this.live[i], d = s.userData, t = TYPES[d.type];
      d.t += dt;
      const k = d.t / d.life;
      if (k >= 1 || s.position.y < d.floorY) { this._kill(i); continue; }
      if (t.gravity) d.v.y += t.gravity * dt;
      if (t.rise) d.v.y += (t.rise - d.v.y) * Math.min(1, dt * 2);
      if (t.drag) { d.v.x *= 1 - t.drag * dt; d.v.z *= 1 - t.drag * dt; d.v.x += Math.sin(d.t * 2 + d.spin * 9) * 0.25 * dt; }
      s.position.addScaledVector(d.v, dt);
      const sz = t.size[0] + (t.size[1] - t.size[0]) * k;
      s.scale.set(sz, sz, sz);
      const fade = d.type === 'steam' || d.type === 'smoke' ? Math.sin(Math.PI * Math.min(1, k * 1.1)) : 1 - k * k;
      s.material.opacity = t.alpha * fade;
    }
  }
  _kill(i) {
    const s = this.live[i]; this.live.splice(i, 1);
    s.visible = false; this.scene.remove(s); this.pool.push(s);
  }
  clear() { while (this.live.length) this._kill(this.live.length - 1); }
}
