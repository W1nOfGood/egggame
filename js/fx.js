// Pooled soft particles: steam, smoke, spatter, seasoning grains, butter bubbles, sparkles, hearts.
// Everything lives in two THREE.Points clouds (normal + additive blending), so all particles cost two draw calls.
import * as THREE from 'three';

const TYPES = {
  steam:   { color: '#ffffff', size: [0.35, 1.5], life: 2.4, alpha: 0.2, rise: 0.75, drag: 0.6, curl: 0.55 },
  wisp:    { color: '#ffffff', size: [0.18, 0.7], life: 2.6, alpha: 0.16, rise: 0.45, drag: 0.8, curl: 0.35 },
  smoke:   { color: '#776d68', size: [0.4, 1.9], life: 2.8, alpha: 0.42, rise: 0.85, drag: 0.5, curl: 0.4 },
  spatter: { color: '#fff3c4', size: [0.06, 0.03], life: 0.45, alpha: 0.95, rise: 0, gravity: -9 },
  salt:    { color: '#ffffff', size: [0.05, 0.05], life: 1.2, alpha: 1, gravity: -7 },
  pepper:  { color: '#2e2420', size: [0.05, 0.05], life: 1.2, alpha: 1, gravity: -7 },
  bubble:  { color: '#fff7d6', size: [0.03, 0.12], life: 0.35, alpha: 0.85, rise: 0 },
  sparkle: { color: '#fff1a8', size: [0.25, 0.05], life: 0.9, alpha: 1, rise: 0.6, gravity: -1.5, add: true },
  glint:   { color: '#ffd6f2', size: [0.05, 0.18], life: 0.5, alpha: 0.9, rise: 0.4, add: true },
  heart:   { color: '#ff8fc8', size: [0.22, 0.34], life: 1.4, alpha: 1, rise: 0.8, drag: 1, curl: 0.4, add: true },
  shell:   { color: '#fff1df', size: [0.06, 0.06], life: 0.7, alpha: 1, gravity: -9 },
  rain:    { color: '#cfd8ff', size: [0.05, 0.05], life: 1.1, alpha: 0.55, gravity: -14 },
  snow:    { color: '#ffffff', size: [0.08, 0.08], life: 4, alpha: 0.9, rise: -0.5, drag: 1, curl: 0.5 },
};

const VERT = /* glsl */`
  attribute float size; attribute vec4 tint;
  varying vec4 vTint;
  uniform float scale;
  void main() {
    vTint = tint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * scale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = /* glsl */`
  uniform sampler2D map;
  varying vec4 vTint;
  void main() {
    vec4 t = texture2D(map, gl_PointCoord);
    gl_FragColor = vec4(vTint.rgb, vTint.a * t.a);
    if (gl_FragColor.a < 0.004) discard;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

class Cloud {
  constructor(scene, tex, max, additive) {
    this.max = max; this.n = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.size = new Float32Array(max); this.tint = new Float32Array(max * 4);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('tint', new THREE.BufferAttribute(this.tint, 4).setUsage(THREE.DynamicDrawUsage));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 400 } }, vertexShader: VERT, fragmentShader: FRAG,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5;
    scene.add(this.points); this.geo = g;
  }
  flush() {
    this.geo.setDrawRange(0, this.n);
    for (const k of ['position', 'size', 'tint']) { const a = this.geo.attributes[k]; a.needsUpdate = true; a.clearUpdateRanges(); a.addUpdateRange(0, this.n * a.itemSize); }
  }
}

const _c = new THREE.Color();

export class FX {
  constructor(scene, dotTex, max = 600) {
    this.max = max;
    this.parts = [];            // live particle records (plain objects, pooled)
    this.free = [];
    this.normal = new Cloud(scene, dotTex, max, false);
    this.add = new Cloud(scene, dotTex, max, true);
    this.heartTex = heartTexture();
    this.hearts = new Cloud(scene, this.heartTex, 64, true);
  }
  /** Keep point sizes in world units: call when the viewport or camera fov changes. */
  setViewport(heightPx, fovDeg, pixelRatio) {
    const s = (heightPx * pixelRatio) / (2 * Math.tan(THREE.MathUtils.degToRad(fovDeg) / 2));
    this.normal.mat.uniforms.scale.value = this.add.mat.uniforms.scale.value = this.hearts.mat.uniforms.scale.value = s;
  }
  emit(type, pos, { vel = null, spread = 0.2, count = 1, floorY = -10, color = null, life = null } = {}) {
    const t = TYPES[type];
    for (let i = 0; i < count; i++) {
      if (this.parts.length >= this.max) return;
      const p = this.free.pop() || { x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, r: 1, g: 1, b: 1 };
      p.type = type; p.t = 0; p.life = (life || t.life) * (0.75 + Math.random() * 0.5); p.floorY = floorY; p.spin = Math.random();
      p.x = pos.x + (Math.random() - 0.5) * spread; p.y = pos.y; p.z = pos.z + (Math.random() - 0.5) * spread;
      if (vel) { p.vx = vel.x; p.vy = vel.y; p.vz = vel.z; } else { p.vx = p.vy = p.vz = 0; }
      if (type === 'spatter') { p.vx = (Math.random() - 0.5) * 3; p.vy = 2 + Math.random() * 2.5; p.vz = (Math.random() - 0.5) * 3; }
      else if (type === 'shell') { p.vx = (Math.random() - 0.5) * 2; p.vy = 1 + Math.random() * 1.5; p.vz = (Math.random() - 0.5) * 2; }
      else if (type === 'sparkle') { p.vx = (Math.random() - 0.5) * 2.5; p.vy = 1 + Math.random() * 2; p.vz = (Math.random() - 0.5) * 2.5; }
      else if (type === 'heart') { p.vx = (Math.random() - 0.5) * 0.8; p.vy = 0.6; p.vz = (Math.random() - 0.5) * 0.4; }
      else if (type === 'salt' || type === 'pepper') { p.vx += (Math.random() - 0.5) * 0.5; p.vy += -0.5 - Math.random(); p.vz += (Math.random() - 0.5) * 0.5; }
      _c.set(color || t.color); p.r = _c.r; p.g = _c.g; p.b = _c.b;
      this.parts.push(p);
    }
  }
  update(dt) {
    const N = this.normal, A = this.add, H = this.hearts; N.n = A.n = H.n = 0;
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i], t = TYPES[p.type];
      p.t += dt;
      const k = p.t / p.life;
      if (k >= 1 || p.y < p.floorY) { this.parts[i] = this.parts[this.parts.length - 1]; this.parts.pop(); this.free.push(p); continue; }
      if (t.gravity) p.vy += t.gravity * dt;
      if (t.rise !== undefined && t.rise !== 0) p.vy += (t.rise - p.vy) * Math.min(1, dt * 2);
      if (t.drag) {
        p.vx *= 1 - t.drag * dt; p.vz *= 1 - t.drag * dt;
        if (t.curl) { const a = p.t * 1.7 + p.spin * 20; p.vx += Math.sin(a) * t.curl * dt; p.vz += Math.cos(a * 0.8) * t.curl * 0.6 * dt; }
      }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      const fade = p.type === 'steam' || p.type === 'smoke' || p.type === 'wisp' ? Math.sin(Math.PI * Math.min(1, k * 1.1)) : 1 - k * k;
      const C = p.type === 'heart' ? H : t.add ? A : N;
      if (C.n >= C.max) continue;
      const j = C.n++;
      C.pos[j * 3] = p.x; C.pos[j * 3 + 1] = p.y; C.pos[j * 3 + 2] = p.z;
      C.size[j] = t.size[0] + (t.size[1] - t.size[0]) * k;
      C.tint[j * 4] = p.r; C.tint[j * 4 + 1] = p.g; C.tint[j * 4 + 2] = p.b; C.tint[j * 4 + 3] = t.alpha * fade;
    }
    N.flush(); A.flush(); H.flush();
  }
  get count() { return this.parts.length; }
  clear() { while (this.parts.length) this.free.push(this.parts.pop()); }
}

function heartTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  x.fillStyle = '#fff'; x.shadowColor = '#fff'; x.shadowBlur = 6;
  x.beginPath(); x.moveTo(32, 54);
  x.bezierCurveTo(4, 36, 8, 10, 24, 12); x.bezierCurveTo(30, 13, 32, 18, 32, 22);
  x.bezierCurveTo(32, 18, 34, 13, 40, 12); x.bezierCurveTo(56, 10, 60, 36, 32, 54); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
