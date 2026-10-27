// Side dishes and fillings: bacon, ham, sausage, cheese and rice. Each one cooks on its own in the pan,
// is lifted / flipped with the spatula, and can be plated next to the egg.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';

const C = (h) => new THREE.Color(h);
const GOLD = C('#f2c066'), BROWN = C('#a9622a'), BLACK = C('#2a1c15');
const tmp = new THREE.Color(), tmp2 = new THREE.Color(), tmp3 = new THREE.Color();
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

function brownRamp(t, out) {
  if (t < 0.4) return out.copy(GOLD);
  if (t < 0.75) return out.copy(GOLD).lerp(BROWN, (t - 0.4) / 0.35);
  return out.copy(BROWN).lerp(BLACK, Math.min(1, (t - 0.75) / 0.25));
}
const css = (c) => '#' + c.getHexString();

// rate: relative cooking speed, brown: relative browning speed, levels: doneness windows (average of both sides / melt / rice cook)
export const ING = {
  bacon:   { name: 'Bacon',   icon: '🥓', R: 0.62, rate: 1.0,  brown: 1.15, levels: { chewy: { label: 'chewy', w: [0.5, 0.78] }, crisp: { label: 'crispy', w: [0.8, 1.1] } } },
  ham:     { name: 'Ham',     icon: '🍖', R: 0.5,  rate: 0.8,  brown: 0.9,  levels: { warm: { label: 'warmed', w: [0.4, 0.65] }, seared: { label: 'seared', w: [0.7, 1.0] } } },
  sausage: { name: 'Sausage', icon: '🌭', R: 0.55, rate: 0.55, brown: 0.9,  levels: { browned: { label: 'browned', w: [0.75, 1.05] } } },
  cheese:  { name: 'Cheese',  icon: '🧀', R: 0.42, rate: 1.0,  brown: 0.4,  levels: { melted: { label: 'melted', w: [0.7, 1.1] } } },
  rice:    { name: 'Rice',    icon: '🍚', R: 0.62, rate: 0.7,  brown: 0.7,  levels: {} },
  bread:   { name: 'Toast',   icon: '🍞', R: 0.5,  rate: 1.1,  brown: 1.7,  levels: { toasted: { label: 'golden', w: [0.55, 0.95] } } },
  tomato:  { name: 'Tomato',  icon: '🍅', R: 0.48, rate: 0.85, brown: 1.0,  levels: { grilled: { label: 'grilled', w: [0.5, 0.95] } } },
};
export const isIngredient = (k) => Object.prototype.hasOwnProperty.call(ING, k);

let flakeGeo, pepperGeo, grainGeo, bitGeo, peaGeo, carrotGeo, hamGrain;

// A thin ruffled bacon strip: base vertex positions are kept so it can curl up as it cooks.
function makeStrip(len, wid, seed) {
  const g = new THREE.BoxGeometry(len, 0.036, wid, 46, 1, 8);
  g.userData.base = g.attributes.position.array.slice();
  g.userData.seed = seed; g.userData.len = len; g.userData.wid = wid;
  return g;
}
function shapeStrip(g, k) {
  const p = g.attributes.position, b = g.userData.base, ph = g.userData.seed, hl = g.userData.len / 2, hw = g.userData.wid / 2;
  for (let i = 0; i < p.count; i++) {
    const x = b[i * 3], y = b[i * 3 + 1], z = b[i * 3 + 2];
    const u = x / hl, w = z / hw;
    const ruffle = Math.sin(x * 7.4 + ph) * 0.026 * (0.55 + 0.45 * Math.abs(w)) + Math.sin(x * 14 + ph * 2.1) * 0.009;
    const curl = k * 0.085 * w * w * (0.35 + 0.65 * Math.abs(u));
    p.setXYZ(i, x * (1 - 0.14 * k), y + 0.034 + ruffle + curl, z + Math.sin(x * 9 + ph * 1.3) * 0.016 * (1 + k));
  }
  p.needsUpdate = true; g.computeVertexNormals();
}

function wobbleShape(r, n, amp, seed) {
  const sh = new THREE.Shape();
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2, rr = r * (1 + amp * Math.sin(3 * a + seed) + amp * 0.6 * Math.sin(5 * a + seed * 2.1) + amp * 0.3 * Math.sin(9 * a + seed));
    i ? sh.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : sh.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
  }
  return sh;
}

export class Ingredient {
  constructor(kind, opts = {}) {
    this.kind = kind; this.spec = ING[kind]; this.R = this.spec.R;
    this.group = new THREE.Group(); this.group.name = 'ing-' + kind;
    this.inner = new THREE.Group(); this.group.add(this.inner);
    this.c = [0, 0];        // cook amount of side 0 / 1 (rice: c[0]; cheese uses melt)
    this.brown = [0, 0];
    this.top = 0;           // which side faces up
    this.flips = 0;
    this.melt = 0;
    this.toss = 0; this.lastToss = -99;   // rice: how much it has been tossed
    this.egg = false; this.eggRaw = 0;    // rice: egg tossed in
    this.salt = 0; this.pepper = 0;
    this.buttered = !!opts.buttered;
    this.loc = 'hand';
    this.yaw = (Math.random() - 0.5) * 0.7;
    this.dirty = true; this._rt = 0; this._lastK = -1;
    this._build();
    this.refresh(true);
  }

  // ---------- geometry ----------
  _tex(w, h) {
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    this.ctx = cv.getContext('2d');
    this.tex = new THREE.CanvasTexture(cv); this.tex.colorSpace = THREE.SRGBColorSpace; this.tex.anisotropy = 4;
  }
  _build() {
    const k = this.kind;
    if (k === 'bacon') this._buildBacon();
    else if (k === 'ham') this._buildHam();
    else if (k === 'sausage') this._buildSausage();
    else if (k === 'cheese') this._buildCheese();
    else if (k === 'bread') this._buildBread();
    else if (k === 'tomato') this._buildTomato();
    else this._buildRice();
    flakeGeo = flakeGeo || new THREE.BoxGeometry(0.018, 0.012, 0.018);
    pepperGeo = pepperGeo || new THREE.IcosahedronGeometry(0.014, 0);
    this.saltFlecks = new THREE.InstancedMesh(flakeGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 }), 60);
    this.pepperFlecks = new THREE.InstancedMesh(pepperGeo, new THREE.MeshStandardMaterial({ color: '#2b211c', roughness: 0.9 }), 60);
    this.saltFlecks.count = 0; this.pepperFlecks.count = 0;
    this.group.add(this.saltFlecks, this.pepperFlecks);
  }

  _buildBacon() {
    this._tex(128, 64);
    // marbled bands of lean and fat, with wobbly edges (generated once)
    this.bands = []; let y = 0, fat = false;
    while (y < 64) { const h = fat ? 4 + hash(y) * 7 : 8 + hash(y + 3) * 9; this.bands.push({ y, h, fat, ph: hash(y * 7) * 6 }); y += h; fat = !fat; }
    this.mat = new THREE.MeshPhysicalMaterial({ map: this.tex, roughness: 0.34, clearcoat: 0.65, clearcoatRoughness: 0.25 });
    this.strips = [];
    [[-0.22, 0.07, 0.2, 0.27], [0.03, -0.06, 1.9, 0.29], [0.28, 0.09, 3.4, 0.26]].forEach(([z, rot, seed, wid]) => {
      const geo = makeStrip(1.08 - Math.abs(z) * 0.2, wid, seed);
      const m = new THREE.Mesh(geo, this.mat); m.position.set(hash(seed) * 0.06 - 0.03, 0, z); m.rotation.y = rot; m.castShadow = true; m.receiveShadow = true;
      this.inner.add(m); this.strips.push(m);
    });
  }
  _buildHam() {
    this._tex(128, 128);
    // faint meat grain, drawn once and re-used every refresh
    const gc = document.createElement('canvas'); gc.width = gc.height = 128; const g = gc.getContext('2d');
    for (let i = 0; i < 260; i++) { g.strokeStyle = hash(i) > 0.5 ? 'rgba(255,230,230,0.35)' : 'rgba(150,60,70,0.22)'; g.lineWidth = 1 + hash(i + 9) * 1.4; g.beginPath(); const x = hash(i + 2) * 128, yy = hash(i + 5) * 128, a = 0.5 + hash(i + 7) * 0.3; g.moveTo(x, yy); g.lineTo(x + Math.cos(a) * (8 + hash(i + 1) * 14), yy + Math.sin(a) * (8 + hash(i + 1) * 14)); g.stroke(); }
    this.grainCanvas = gc;
    this.mat = new THREE.MeshPhysicalMaterial({ map: this.tex, roughness: 0.42, clearcoat: 0.45, clearcoatRoughness: 0.3 });
    const side = new THREE.MeshPhysicalMaterial({ color: '#f0b3b3', roughness: 0.5 });
    const slice = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.43, 0.07, 48), [side, this.mat, side]);
    slice.position.y = 0.045; slice.castShadow = true; slice.receiveShadow = true; this.inner.add(slice);
    this.rimMat = new THREE.MeshPhysicalMaterial({ color: '#fbe4e0', roughness: 0.35, clearcoat: 0.6 });
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.04, 10, 56), this.rimMat); rim.rotation.x = Math.PI / 2; rim.position.y = 0.045; rim.castShadow = true; this.inner.add(rim);
  }
  _buildSausage() {
    this.mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.36, clearcoat: 0.85, clearcoatRoughness: 0.18 });
    this.links = [];
    [[-0.2, 0.05, 1], [0.2, -0.07, -1]].forEach(([z, rot, bend]) => {
      const g = new THREE.CapsuleGeometry(0.11, 0.66, 10, 22).rotateZ(Math.PI / 2);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setY(i, p.getY(i) + bend * 0.05 * (1 - Math.pow(x / 0.44, 2))); }
      g.computeVertexNormals();
      g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(p.count * 3), 3));
      const m = new THREE.Mesh(g, this.mat); m.position.set(0, 0.115, z); m.rotation.y = rot; m.castShadow = true; m.receiveShadow = true;
      this.inner.add(m); this.links.push(m);
    });
  }
  _buildCheese() {
    this.mat = new THREE.MeshPhysicalMaterial({ color: '#ffc83d', roughness: 0.28, clearcoat: 0.7 });
    this.slice = new THREE.Mesh(new RoundedBoxGeometry(0.74, 0.05, 0.74, 3, 0.022), this.mat);
    this.slice.position.y = 0.03; this.slice.rotation.y = 0.3; this.slice.castShadow = true; this.slice.receiveShadow = true; this.inner.add(this.slice);
    this.poolMat = new THREE.MeshPhysicalMaterial({ color: '#ffd24a', roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true, opacity: 0 });
    const g = new THREE.ShapeGeometry(wobbleShape(0.5, 40, 0.06, 1.3), 6); g.rotateX(-Math.PI / 2);
    this.pool = new THREE.Mesh(g, this.poolMat); this.pool.position.y = 0.012; this.pool.scale.setScalar(0.4); this.pool.receiveShadow = true; this.inner.add(this.pool);
  }
  _buildBread() {
    this._tex(128, 128);
    // crumb pores, drawn once and laid over the toast colour each refresh
    const pc = document.createElement('canvas'); pc.width = pc.height = 128; const p = pc.getContext('2d');
    for (let i = 0; i < 420; i++) { p.fillStyle = `rgba(150,110,60,${0.12 + hash(i) * 0.22})`; p.beginPath(); p.ellipse(hash(i + 1) * 128, hash(i + 2) * 128, 1 + hash(i + 3) * 2.6, 0.8 + hash(i + 4) * 1.8, hash(i + 5) * 3, 0, 6.3); p.fill(); }
    this.poreCanvas = pc;
    // classic loaf-slice outline: square bottom, domed top
    const sh = new THREE.Shape();
    sh.moveTo(-0.32, -0.3); sh.lineTo(0.32, -0.3); sh.lineTo(0.32, 0.12);
    sh.bezierCurveTo(0.34, 0.3, 0.2, 0.34, 0.1, 0.3); sh.bezierCurveTo(0.03, 0.36, -0.03, 0.36, -0.1, 0.3);
    sh.bezierCurveTo(-0.2, 0.34, -0.34, 0.3, -0.32, 0.12); sh.lineTo(-0.32, -0.3);
    const g = new THREE.ExtrudeGeometry(sh, { depth: 0.07, bevelEnabled: true, bevelSize: 0.018, bevelThickness: 0.018, bevelSegments: 3, curveSegments: 14 });
    const pos = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) uv.setXY(i, (pos.getX(i) + 0.36) / 0.72, (pos.getY(i) + 0.34) / 0.72);
    g.rotateX(-Math.PI / 2); g.translate(0, 0.02, 0);
    this.mat = new THREE.MeshPhysicalMaterial({ map: this.tex, roughness: 0.75, sheen: 0.4, sheenColor: C('#fff1d0') });
    this.crustMat = new THREE.MeshPhysicalMaterial({ color: '#c88a46', roughness: 0.7 });
    const m = new THREE.Mesh(g, [this.mat, this.crustMat]); m.castShadow = true; m.receiveShadow = true; this.inner.add(m);
  }
  _buildTomato() {
    this._tex(128, 128);
    this.skinMat = new THREE.MeshPhysicalMaterial({ color: '#e63b2e', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.12 });
    this.mat = new THREE.MeshPhysicalMaterial({ map: this.tex, roughness: 0.35, clearcoat: 0.6 });
    this.halves = [];
    const dome = new THREE.SphereGeometry(0.2, 28, 14, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2); // lower half: skin
    const face = new THREE.CircleGeometry(0.2, 28); face.rotateX(-Math.PI / 2);
    [[-0.2, 0.06], [0.21, -0.07]].forEach(([x, z]) => {
      const h = new THREE.Group(); h.position.set(x, 0, z);
      const d = new THREE.Mesh(dome, this.skinMat); d.scale.set(1, 0.8, 1); d.position.y = 0.17; d.castShadow = true; h.add(d);
      const f = new THREE.Mesh(face, this.mat); f.position.y = 0.171; f.receiveShadow = true; h.add(f);
      this.inner.add(h); this.halves.push(h);
    });
    this.top = 1; // starts cut-side down so the face caramelises first
  }
  _buildRice() {
    grainGeo = grainGeo || new THREE.CapsuleGeometry(0.022, 0.085, 3, 6).rotateZ(Math.PI / 2);
    bitGeo = bitGeo || new THREE.IcosahedronGeometry(0.06, 0);
    peaGeo = peaGeo || new THREE.SphereGeometry(0.04, 8, 6);
    carrotGeo = carrotGeo || new THREE.BoxGeometry(0.06, 0.04, 0.06);
    this.riceMat = new THREE.MeshPhysicalMaterial({ color: '#fffdf6', roughness: 0.42, clearcoat: 0.35, clearcoatRoughness: 0.3 });
    this.bitMat = new THREE.MeshPhysicalMaterial({ color: '#ffd23a', roughness: 0.35, clearcoat: 0.3 });
    this.peaMat = new THREE.MeshPhysicalMaterial({ color: '#79c56a', roughness: 0.4, clearcoat: 0.4 });
    this.carMat = new THREE.MeshPhysicalMaterial({ color: '#f08a3c', roughness: 0.45 });
    this.riceN = 380; this.bitN = 34; this.peaN = 16; this.carN = 12;
    const mk = (geo, mat, n, cast = true) => { const m = new THREE.InstancedMesh(geo, mat, n); m.castShadow = cast; m.frustumCulled = false; return m; };
    this.grains = mk(grainGeo, this.riceMat, this.riceN);
    this.bits = mk(bitGeo, this.bitMat, this.bitN); this.peas = mk(peaGeo, this.peaMat, this.peaN); this.carrots = mk(carrotGeo, this.carMat, this.carN);
    this.bits.visible = this.peas.visible = this.carrots.visible = false;
    const col = new THREE.Color();
    this.rseed = Array.from({ length: this.riceN }, (_, n) => { const o = { a: Math.random() * 6.283, r: 0.62 * Math.sqrt(Math.random()), rot: Math.random() * 6.28, tilt: (Math.random() - 0.5) * 0.9, y: Math.random() }; col.setScalar(0.9 + Math.random() * 0.1); this.grains.setColorAt(n, col); return o; });
    const seeds = (n, rr) => Array.from({ length: n }, () => ({ a: Math.random() * 6.283, r: rr * Math.sqrt(Math.random()), rot: Math.random() * 6.28, y: Math.random() }));
    this.bseed = seeds(this.bitN, 0.55); this.pseed = seeds(this.peaN, 0.5); this.cseed = seeds(this.carN, 0.5);
    this.inner.add(this.grains, this.bits, this.peas, this.carrots);
    this.specks = null;
  }

  get done() { return this.kind === 'cheese' ? this.melt : this.kind === 'rice' ? this.c[0] : (this.c[0] + this.c[1]) / 2; }
  get maxBrown() { return Math.max(this.brown[0], this.brown[1]); }

  // ---------- simulation ----------
  update(dt, temp, env) {
    const r = Math.max(0, temp - 65) / 70 * 0.05 * this.spec.rate;
    let br = (Math.max(0, temp - 118) / 130 * 0.034 + Math.max(0, temp - 185) / 55 * 0.06) * this.spec.brown;
    if (env.buttered || this.kind === 'bacon' || this.kind === 'sausage') br *= 0.7; // fat keeps it from catching
    br *= env.burn ?? 1;
    if (this.kind === 'cheese') {
      this.melt = Math.min(1.3, this.melt + Math.max(0, temp - 55) / 70 * 0.06 * dt);
      this.brown[0] = clamp01(this.brown[0] + br * 0.4 * dt);
    } else if (this.kind === 'rice') {
      const tossing = env.time - this.lastToss < 1.5;
      this.c[0] = Math.min(1.4, this.c[0] + r * dt);
      this.brown[0] = clamp01(this.brown[0] + br * (tossing ? 0.3 : 1.1) * dt);
      if (this.egg) this.eggRaw = Math.min(1, this.eggRaw + r * 1.5 * dt);
    } else {
      const bot = 1 - this.top;
      this.c[bot] = Math.min(1.4, this.c[bot] + r * dt);
      this.c[this.top] = Math.min(1.4, this.c[this.top] + r * 0.28 * dt);
      this.brown[bot] = clamp01(this.brown[bot] + br * dt);
      this.brown[this.top] = clamp01(this.brown[this.top] + br * 0.04 * dt);
    }
    this.dirty = true;
  }
  flip() { this.top = 1 - this.top; this.flips++; this.dirty = true; this._lastK = -1; this.refresh(true); }
  mergeEgg(raw) { this.egg = true; this.eggRaw = clamp01(raw); this.dirty = true; this.refresh(true); }

  addSeasoning(type, n = 5) {
    const im = type === 'salt' ? this.saltFlecks : this.pepperFlecks;
    if (type === 'salt') this.salt++; else this.pepper++;
    const d = new THREE.Object3D(), rad = Math.min(0.5, this.R * 0.85);
    for (let i = 0; i < n && im.count < 60; i++) {
      const rr = Math.sqrt(Math.random()) * rad, a = Math.random() * Math.PI * 2;
      d.position.set(Math.cos(a) * rr, this.kind === 'rice' ? 0.2 : 0.09, Math.sin(a) * rr);
      d.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); d.scale.setScalar(0.7 + Math.random() * 0.8);
      d.updateMatrix(); im.setMatrixAt(im.count, d.matrix); im.count++;
    }
    im.instanceMatrix.needsUpdate = true;
  }

  // ---------- visuals ----------
  refresh(force = false) {
    if (!force) { if (!this.dirty) return; const now = performance.now(); if (now - this._rt < 110) return; this._rt = now; }
    this.dirty = false;
    const t = this.top, ck = clamp01(this.c[t]), br = this.brown[t], k = this.kind;
    if (k === 'bacon') this._refreshBacon(ck, br);
    else if (k === 'ham') this._refreshHam(ck, br);
    else if (k === 'sausage') this._refreshSausage();
    else if (k === 'cheese') this._refreshCheese();
    else if (k === 'bread') this._refreshBread(ck, br);
    else if (k === 'tomato') this._refreshTomato();
    else this._refreshRice();
  }
  _refreshBacon(ck, br) {
    const c = this.ctx;
    const lean = C('#d24f52').lerp(C('#a2452a'), ck).lerp(C('#4a2818'), clamp01((br - 0.35) / 0.8));
    const fat = C('#fbe9e2').lerp(C('#efb866'), ck).lerp(C('#6a3f1f'), clamp01((br - 0.25) / 0.8));
    c.fillStyle = css(lean); c.fillRect(0, 0, 128, 64);
    for (const b of this.bands) {
      if (!b.fat) continue;
      c.fillStyle = css(fat); c.beginPath(); c.moveTo(0, b.y);
      for (let x = 0; x <= 128; x += 8) c.lineTo(x, b.y + Math.sin(x * 0.11 + b.ph) * 1.8);
      for (let x = 128; x >= 0; x -= 8) c.lineTo(x, b.y + b.h + Math.sin(x * 0.09 + b.ph * 1.7) * 1.8);
      c.closePath(); c.fill();
    }
    // crisp blisters when well done
    if (ck > 0.6) { c.fillStyle = `rgba(255,210,120,${(ck - 0.6) * 0.5})`; for (let i = 0; i < 40; i++) c.fillRect(hash(i) * 128, hash(i + 40) * 64, 2, 1.5); }
    this.tex.needsUpdate = true;
    if (Math.abs(ck - this._lastK) > 0.02) { this._lastK = ck; this.strips.forEach((m) => shapeStrip(m.geometry, ck)); }
    this.mat.roughness = 0.34 + ck * 0.2;
  }
  _refreshHam(ck, br) {
    const c = this.ctx;
    c.fillStyle = css(C('#f4a3a8').lerp(C('#d6787d'), ck)); c.fillRect(0, 0, 128, 128);
    c.globalAlpha = 0.9; c.drawImage(this.grainCanvas, 0, 0); c.globalAlpha = 1;
    // grill marks appear as it sears
    if (br > 0.05) {
      c.save(); c.translate(64, 64); c.rotate(0.7);
      c.strokeStyle = `rgba(70,30,20,${clamp01(br * 1.6) * 0.75})`; c.lineWidth = 7;
      for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(-70, i * 20); c.lineTo(70, i * 20); c.stroke(); }
      c.restore();
    }
    const g = c.createRadialGradient(64, 64, 20, 64, 64, 66);
    const stop = (v) => { brownRamp(v, tmp); return `rgba(${(tmp.r * 255) | 0},${(tmp.g * 255) | 0},${(tmp.b * 255) | 0},${clamp01(v / 0.45) * 0.85})`; };
    g.addColorStop(0, stop(br * 0.2)); g.addColorStop(0.75, stop(br * 0.7)); g.addColorStop(1, stop(br * 1.3));
    c.fillStyle = g; c.fillRect(0, 0, 128, 128);
    this.tex.needsUpdate = true;
    this.rimMat.color.set('#fbe4e0').lerp(tmp2.set('#efc183'), ck).lerp(BROWN, clamp01(br * 0.9));
  }
  _refreshSausage() {
    const bot = 1 - this.top;
    this.links.forEach((m, li) => {
      const g = m.geometry, p = g.attributes.position, n = g.attributes.normal, col = g.attributes.color;
      for (let i = 0; i < p.count; i++) {
        const ny = n.getY(i), wb = smooth(0.35, -0.55, ny);              // 1 = faces the pan
        const ck = clamp01(this.c[this.top] * (1 - wb) + this.c[bot] * wb);
        const b = this.brown[this.top] * (1 - wb) + this.brown[bot] * wb;
        const noise = 0.75 + hash(i * 0.37 + li * 91) * 0.5;
        tmp.set('#ee9d89').lerp(tmp2.set('#c4704a'), ck);
        if (b > 0.02) { brownRamp(Math.min(1.2, b * noise * 1.15), tmp3); tmp.lerp(tmp3, clamp01(b * 1.8)); }
        if (Math.sin(p.getX(i) * 26) > 0.94 && ny > 0.3) tmp.multiplyScalar(0.84);   // shallow score marks
        col.setXYZ(i, tmp.r, tmp.g, tmp.b);
      }
      col.needsUpdate = true;
    });
  }
  _refreshCheese() {
    const m = clamp01(this.melt);
    this.slice.scale.set(1 + m * 0.5, 1 - m * 0.7, 1 + m * 0.5);
    this.slice.position.y = 0.03 - m * 0.012;
    this.mat.color.set('#ffc83d').lerp(tmp.set('#ffd864'), m).lerp(BROWN, clamp01(this.brown[0] * 0.8));
    this.poolMat.opacity = smooth(0.05, 0.5, m) * 0.95;
    this.pool.scale.setScalar(0.45 + 0.75 * m);
    this.poolMat.color.copy(this.mat.color);
  }
  _refreshRice() {
    const v = clamp01(this.c[0] * 0.5 + this.brown[0] * 0.9);
    this.riceMat.color.set('#fffdf6').lerp(tmp.set('#eac07a'), v).lerp(BLACK, clamp01((this.brown[0] - 0.7) / 0.5));
    this.riceMat.roughness = 0.42 + this.c[0] * 0.15;
    const show = this.egg;
    this.bits.visible = this.peas.visible = this.carrots.visible = show;
    this.bitMat.color.set('#ffb21e').lerp(tmp.set('#ffdc4a'), clamp01(this.eggRaw)).lerp(BROWN, clamp01(this.brown[0] * 0.6));
    this._layoutRice();
  }
  _layoutRice() {
    const d = this._d || (this._d = new THREE.Object3D());
    const R = 0.62;
    this.rseed.forEach((s, n) => {
      const a = s.a + this.toss * 0.25, f = 1 - (s.r * s.r) / (R * R);
      d.position.set(Math.cos(a) * s.r, 0.045 + f * 0.13 + s.y * 0.04, Math.sin(a) * s.r); d.rotation.set(s.tilt, s.rot, s.tilt * 0.6); d.scale.setScalar(1); d.updateMatrix();
      this.grains.setMatrixAt(n, d.matrix);
    });
    const place = (mesh, seeds, y, sc) => {
      seeds.forEach((s, n) => {
        const a = s.a + this.toss * 0.25, f = 1 - (s.r * s.r) / (R * R);
        d.position.set(Math.cos(a) * s.r, y + f * 0.12, Math.sin(a) * s.r); d.rotation.set(s.rot, s.rot * 2, s.rot * 0.5); d.scale.set(sc, sc * (0.7 + s.y * 0.5), sc * (0.8 + s.y * 0.4)); d.updateMatrix();
        mesh.setMatrixAt(n, d.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    };
    place(this.bits, this.bseed, 0.2, 1.3); place(this.peas, this.pseed, 0.19, 1); place(this.carrots, this.cseed, 0.19, 1);
    this.grains.instanceMatrix.needsUpdate = true;
    if (this.grains.instanceColor) this.grains.instanceColor.needsUpdate = true;
  }

  _refreshBread(ck, br) {
    const c = this.ctx;
    c.fillStyle = css(C('#fbefd2').lerp(C('#efcf8e'), ck)); c.fillRect(0, 0, 128, 128);
    c.globalAlpha = 0.9; c.drawImage(this.poreCanvas, 0, 0); c.globalAlpha = 1;
    if (br > 0.02) {   // toast colour spreads in from the middle, a little uneven
      const g = c.createRadialGradient(64, 60, 6, 64, 64, 80);
      const stop = (v) => { brownRamp(v, tmp); return `rgba(${(tmp.r * 255) | 0},${(tmp.g * 255) | 0},${(tmp.b * 255) | 0},${clamp01(v / 0.4) * 0.92})`; };
      g.addColorStop(0, stop(br * 1.05)); g.addColorStop(0.7, stop(br * 0.95)); g.addColorStop(1, stop(br * 0.8));
      c.fillStyle = g; c.fillRect(0, 0, 128, 128);
    }
    this.tex.needsUpdate = true;
    this.crustMat.color.set('#c88a46').lerp(BROWN, clamp01(this.maxBrown * 0.8)).lerp(BLACK, clamp01((this.maxBrown - 0.75) * 2));
  }
  _refreshTomato() {
    const c = this.ctx, faceB = this.brown[0], skinB = this.brown[1], ck = clamp01(this.c[0]);
    c.fillStyle = css(C('#ef4a3a').lerp(C('#c9372a'), ck)); c.fillRect(0, 0, 128, 128);
    // pale core + seed chambers
    c.fillStyle = 'rgba(255,190,170,0.55)'; c.beginPath(); c.arc(64, 64, 16, 0, 6.3); c.fill();
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2 + 0.4, x = 64 + Math.cos(a) * 34, y = 64 + Math.sin(a) * 34;
      c.fillStyle = 'rgba(255,120,90,0.7)'; c.beginPath(); c.ellipse(x, y, 17, 11, a, 0, 6.3); c.fill();
      c.fillStyle = 'rgba(255,236,170,0.9)';
      for (let k = 0; k < 5; k++) { c.beginPath(); c.ellipse(x + Math.cos(a + k) * 7, y + Math.sin(a + k) * 5, 2.4, 1.5, a, 0, 6.3); c.fill(); }
    }
    if (faceB > 0.02) {   // caramelised cut face
      const g = c.createRadialGradient(64, 64, 10, 64, 64, 66);
      g.addColorStop(0, `rgba(120,50,20,${clamp01(faceB * 1.1) * 0.6})`); g.addColorStop(1, `rgba(60,25,10,${clamp01(faceB * 1.4) * 0.9})`);
      c.fillStyle = g; c.fillRect(0, 0, 128, 128);
    }
    this.tex.needsUpdate = true;
    this.skinMat.color.set('#e63b2e').lerp(tmp.set('#b5281c'), clamp01(skinB * 1.3)).lerp(BLACK, clamp01((skinB - 0.6) * 1.5));
    this.skinMat.roughness = 0.22 + skinB * 0.4;
    // the halves really turn over: side 0 = cut face up
    const up = this.top === 0;
    this.halves.forEach((h) => { h.rotation.x = up ? 0 : Math.PI; h.position.y = up ? 0 : 0.34; });
  }
  dispose() {
    if (this.group.parent) this.group.parent.remove(this.group);
    const shared = [flakeGeo, pepperGeo, grainGeo, bitGeo, peaGeo, carrotGeo];
    this.group.traverse((o) => { if (o.isMesh && o.geometry && !shared.includes(o.geometry)) o.geometry.dispose(); });
    [this.mat, this.crustMat, this.skinMat, this.riceMat, this.bitMat, this.peaMat, this.carMat, this.rimMat, this.poolMat, this.saltFlecks.material, this.pepperFlecks.material].forEach((m) => m && m.dispose());
    this.tex && this.tex.dispose();
  }
}
