// The egg once it is out of the shell: simulation (white / yolk / browning per side) + procedural visuals.
import * as THREE from 'three';

const C = (h) => new THREE.Color(h);
const RAW_WHITE = C('#e4ebe4'), COOKED_WHITE = C('#fffcf4');
const GOLD = C('#f2c066'), BROWN = C('#a9622a'), BLACK = C('#2a1c15');
const YOLK_RAW = C('#ff9f12'), YOLK_JAMMY = C('#ffbf2e'), YOLK_FIRM = C('#f6d670');
const SCR_RAW = C('#f2a227'), SCR_COOKED = C('#ffd44a'), SCR_DRY = C('#f7df86');
const tmp = new THREE.Color(), tmp2 = new THREE.Color();
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };

function brownRamp(t, out) {
  if (t < 0.4) return out.copy(GOLD);
  if (t < 0.75) return out.copy(GOLD).lerp(BROWN, (t - 0.4) / 0.35);
  return out.copy(BROWN).lerp(BLACK, Math.min(1, (t - 0.75) / 0.25));
}

const RINGS = 12, SEGS = 56;
let curdGeos, flakeGeo, pepperGeo;

// Organic, folded curd shapes: icospheres pushed around by layered sine noise.
function makeCurdGeos() {
  const out = [];
  for (let k = 0; k < 5; k++) {
    const g = new THREE.IcosahedronGeometry(0.13, 3);
    const p = g.attributes.position, v = new THREE.Vector3();
    const a = Math.random() * 10, b = Math.random() * 10;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const n = Math.sin(v.x * 21 + a) * Math.sin(v.y * 17 + b) * Math.sin(v.z * 19 + a * b) * 0.35
        + Math.sin(v.x * 47 + b) * Math.sin(v.z * 43 + a) * 0.08;
      v.multiplyScalar(1 + n);
      if (v.y < 0) v.y *= 0.35; // flat underside sits on the pan
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    out.push(g);
  }
  return out;
}

export class Food {
  constructor(opts = {}) {
    this.group = new THREE.Group();
    this.group.name = 'food';
    // --- simulation state ---
    this.w = 0;              // white / egg set amount 0..1
    this.y = 0;              // yolk firmness 0..1
    this.brown = [0, 0];     // browning of side 0 / side 1
    this.down = 0;           // which side touches the pan
    this.flips = 0;
    this.yolkBroken = false;
    this.torn = false;
    this.scrambled = false;
    this.mixed = false;      // beaten into a smooth sheet (omelette base)
    this.folded = false;     // folded omelette
    this.fills = [];         // fillings folded inside (cheese, ham)
    this.liftOrigin = null;
    this.stirTotal = 0;
    this.lastStir = -99;
    this.age = 0;
    this.buttered = !!opts.buttered;
    this.stuck = false;
    this.salt = 0; this.pepper = 0;
    this.spread = 0;         // landing spread animation 0..1
    this.radius = 0.68;
    this.seed = Math.random() * 100;
    this._build();
    this.refresh(true);
  }

  // ---------- geometry ----------
  _build() {
    const s = this.seed;
    this.R = (a) => 0.68 * (1 + 0.075 * Math.sin(3 * a + s) + 0.05 * Math.sin(5 * a + s * 1.7) + 0.03 * Math.sin(9 * a + s * 2.3));
    const pos = [], rn = [], ang = [], noise = [];
    // top surface rings + an extra skirt ring at the bottom edge
    pos.push(0, 0, 0); rn.push(0); ang.push(0); noise.push(Math.random());
    for (let i = 1; i <= RINGS + 1; i++) {
      for (let j = 0; j < SEGS; j++) {
        const a = (j / SEGS) * Math.PI * 2;
        pos.push(0, 0, 0); rn.push(i > RINGS ? 1.0001 : i / RINGS); ang.push(a); noise.push(Math.random());
      }
    }
    const idx = [];
    for (let j = 0; j < SEGS; j++) idx.push(0, 1 + ((j + 1) % SEGS), 1 + j);
    for (let i = 0; i < RINGS; i++) {
      const a0 = 1 + i * SEGS, a1 = 1 + (i + 1) * SEGS;
      for (let j = 0; j < SEGS; j++) {
        const j1 = (j + 1) % SEGS;
        idx.push(a0 + j, a0 + j1, a1 + j, a0 + j1, a1 + j1, a1 + j);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 4), 4));
    geo.setIndex(idx);
    this.wRn = rn; this.wAng = ang; this.wNoise = noise;
    this.whiteMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, transparent: true, roughness: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.2, side: THREE.DoubleSide });
    this.white = new THREE.Mesh(geo, this.whiteMat);
    this.white.receiveShadow = true; this.white.castShadow = true;
    this.group.add(this.white);

    // yolk
    this.yolkOffset = new THREE.Vector3(0.07 * Math.cos(s), 0, 0.07 * Math.sin(s));
    this.yolkMat = new THREE.MeshPhysicalMaterial({ color: YOLK_RAW, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.04, sheen: 0.2 });
    this.yolk = new THREE.Mesh(new THREE.SphereGeometry(0.235, 40, 28), this.yolkMat);
    this.yolk.position.copy(this.yolkOffset).setY(0.06);
    this.yolk.scale.set(1, 0.74, 1);
    this.group.add(this.yolk);
    // broken-yolk smear
    const smearShape = new THREE.Shape();
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * Math.PI * 2, r = 0.3 * (1 + 0.25 * Math.sin(3 * a + s) + 0.15 * Math.sin(7 * a));
      i ? smearShape.lineTo(Math.cos(a) * r * 1.3, Math.sin(a) * r) : smearShape.moveTo(Math.cos(a) * r * 1.3, Math.sin(a) * r);
    }
    this.smear = new THREE.Mesh(new THREE.ShapeGeometry(smearShape, 6), this.yolkMat);
    this.smear.rotation.x = -Math.PI / 2; this.smear.position.copy(this.yolkOffset).setY(0.062); this.smear.visible = false;
    this.group.add(this.smear);
    // flipped dome: yolk hidden under a cooked-white skin
    this.domeMat = new THREE.MeshPhysicalMaterial({ color: COOKED_WHITE, roughness: 0.55, clearcoat: 0.3 });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 20), this.domeMat);
    this.dome.position.copy(this.yolkOffset).setY(0.05); this.dome.scale.set(1, 0.45, 1); this.dome.visible = false;
    this.group.add(this.dome);

    // folded omelette (half-moon)
    this.foldMat = new THREE.MeshPhysicalMaterial({ color: SCR_COOKED, roughness: 0.3, clearcoat: 0.5, sheen: 0.4, sheenColor: C('#fff3c0') });
    this.fold = new THREE.Mesh(new THREE.SphereGeometry(0.6, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), this.foldMat);
    this.fold.scale.set(1.08, 0.7, 0.6); this.fold.position.set(0, 0.012, -0.1); this.fold.visible = false; this.fold.castShadow = true; this.fold.receiveShadow = true;
    this.group.add(this.fold);

    // scrambled curds + liquid
    curdGeos = curdGeos || makeCurdGeos();
    this.curdMat = new THREE.MeshPhysicalMaterial({ color: SCR_RAW, roughness: 0.5, clearcoat: 0.4, sheen: 0.6, sheenRoughness: 0.6, sheenColor: C('#fff3c0') });
    this.curds = new THREE.Group(); this.curds.visible = false; this.group.add(this.curds);
    this.curdData = [];
    for (let i = 0; i < 44; i++) {
      const m = new THREE.Mesh(curdGeos[i % curdGeos.length], this.curdMat); m.castShadow = true; m.receiveShadow = true;
      const r = 0.08 + Math.sqrt(Math.random()) * 0.6, a = Math.random() * Math.PI * 2;
      const d = { r, a, s: 0.55 + Math.random() * 0.6, sq: 0.5 + Math.random() * 0.3, spin: Math.random() * 6, bob: Math.random() * 6 };
      this.curdData.push(d); this.curds.add(m);
    }
    this.liquidMat = new THREE.MeshPhysicalMaterial({ color: SCR_RAW, roughness: 0.1, clearcoat: 1, transparent: true, opacity: 0.95 });
    const liq = new THREE.Shape();
    for (let i = 0; i <= 48; i++) {
      const a = (i / 48) * Math.PI * 2, r = this.R(a) * 1.08;
      i ? liq.lineTo(Math.cos(a) * r, Math.sin(a) * r) : liq.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    this.liquid = new THREE.Mesh(new THREE.ShapeGeometry(liq, 8), this.liquidMat);
    this.liquid.rotation.x = -Math.PI / 2; this.liquid.position.y = 0.012; this.liquid.visible = false; this.liquid.receiveShadow = true;
    this.group.add(this.liquid);

    // seasoning flecks
    flakeGeo = flakeGeo || new THREE.BoxGeometry(0.018, 0.012, 0.018);
    pepperGeo = pepperGeo || new THREE.IcosahedronGeometry(0.014, 0);
    this.saltFlecks = new THREE.InstancedMesh(flakeGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 }), 80);
    this.pepperFlecks = new THREE.InstancedMesh(pepperGeo, new THREE.MeshStandardMaterial({ color: '#2b211c', roughness: 0.9 }), 80);
    this.saltFlecks.count = 0; this.pepperFlecks.count = 0;
    this.group.add(this.saltFlecks, this.pepperFlecks);
  }

  surfaceY(x, z) {
    if (this.scrambled) return 0.12 + Math.random() * 0.06;
    if (this.mixed) return this.folded ? 0.2 : 0.03;
    const dy = Math.hypot(x - this.yolkOffset.x, z - this.yolkOffset.z);
    if (dy < 0.24 && !this.yolkBroken) return 0.055 + Math.sqrt(Math.max(0, 0.235 * 0.235 - dy * dy)) * (this.flips % 2 ? 0.45 : 0.66) + 0.01;
    const rn = Math.hypot(x, z) / 0.68;
    return 0.06 * (1 - Math.min(1, rn) ** 2.2) + 0.015;
  }

  // ---------- simulation ----------
  update(dt, temp, env) {
    this.age += dt;
    const now = env.time;
    const stirring = now - this.lastStir < 1.5;
    const whiteRate = Math.max(0, temp - 65) / 70 * 0.05;
    const yolkRate = Math.max(0, temp - 70) / 70 * 0.017;
    if (this.scrambled || this.mixed) {
      this.w = clamp01(this.w + whiteRate * dt * (stirring ? 1.3 : 0.9));
      this.y = this.w;
    } else {
      this.w = clamp01(this.w + whiteRate * dt * (this.flips ? 1.2 : 1));
      this.y = clamp01(this.y + yolkRate * dt * (this.flips % 2 ? 2.4 : 1) * (this.yolkBroken ? 1.6 : 1));
    }
    let br = Math.max(0, temp - 118) / 130 * 0.034 + Math.max(0, temp - 185) / 55 * 0.06;
    if (!env.buttered) br *= 1.35;
    if (this.scrambled && stirring) br *= 0.3;
    this.brown[this.down] = clamp01(this.brown[this.down] + br * dt);
    if (!env.buttered && temp > 110 && this.w > 0.25) this.stuck = true;
  }

  get maxBrown() { return Math.max(this.brown[0], this.brown[1]); }
  get recipe() { return this.scrambled ? 'scrambled' : this.folded ? 'omelette' : this.mixed ? 'sheet' : this.flips > 0 ? 'over' : 'sunny'; }
  get burnt() { return this.maxBrown > 0.75; }

  flip(speed) {
    if (this.scrambled) { this.stir(1.2, 0); return { tossed: true }; }
    if (this.folded) return { tossed: true };
    if (this.mixed) { this.fold_(); return { folded: true, torn: this.torn }; }
    const res = {};
    const minSet = this.stuck ? 0.62 : 0.45;
    if (this.w < minSet) { this.torn = true; res.torn = true; if (this.y < 0.5) { this.yolkBroken = true; res.yolk = true; } }
    else if (!this.yolkBroken && this.y < 0.3 && (speed > 3200 || Math.random() < 0.08)) { this.yolkBroken = true; res.yolk = true; }
    this.flips++; this.down = 1 - this.down;
    this.refresh(true);
    return res;
  }

  /** Beaten smooth: yolk and white mixed into one sheet. */
  mix() { if (this.mixed) return; this.mixed = true; this.yolkBroken = true; this.refresh(true); }
  /** Fold the set sheet over itself; the browned side ends up on the outside. */
  fold_() {
    if (this.folded) return;
    if (this.w < 0.45) { this.torn = true; }
    this.folded = true; this.down = 1 - this.down; this.refresh(true);
  }

  breakYolk() { if (!this.yolkBroken) { this.yolkBroken = true; this.refresh(true); } }

  scramble() {
    if (this.scrambled) return;
    this.scrambled = true; this.yolkBroken = true;
    this.w = this.w * 0.8;
    this.refresh(true);
  }

  stir(amount, time) {
    this.stirTotal += amount; this.lastStir = time;
    // swirl curds
    for (const d of this.curdData) { d.a += amount * (0.6 + d.r) * 0.9; d.r = Math.max(0.05, Math.min(0.66, d.r + (Math.random() - 0.5) * 0.08 * amount)); }
  }

  addSeasoning(type, n = 6) {
    const im = type === 'salt' ? this.saltFlecks : this.pepperFlecks;
    if (type === 'salt') this.salt++; else this.pepper++;
    const d = new THREE.Object3D();
    for (let k = 0; k < n && im.count < 80; k++) {
      const r = Math.sqrt(Math.random()) * 0.55, a = Math.random() * Math.PI * 2;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      d.position.set(x, this.surfaceY(x, z) + 0.006, z);
      d.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      d.scale.setScalar(0.7 + Math.random() * 0.8);
      d.updateMatrix(); im.setMatrixAt(im.count, d.matrix); im.count++;
    }
    im.instanceMatrix.needsUpdate = true;
  }

  // ---------- visuals ----------
  refresh(full = false) {
    const sc = this.scrambled, mx = this.mixed && !sc, fd = mx && this.folded;
    this.white.visible = !sc && !mx;
    this.curds.visible = sc;
    this.liquid.visible = sc || (mx && !fd);
    this.fold.visible = fd;
    const flipped = this.flips % 2 === 1, plain = !sc && !mx;
    this.yolk.visible = plain && !flipped && !this.yolkBroken;
    this.smear.visible = plain && !flipped && this.yolkBroken;
    this.dome.visible = plain && flipped && !this.torn;
    if (sc) return this._refreshScrambled();
    if (mx) return this._refreshSheet();

    const pos = this.white.geometry.attributes.position, col = this.white.geometry.attributes.color;
    const spread = 0.45 + 0.55 * (1 - Math.pow(1 - this.spread, 3));
    const up = 1 - this.down;
    const edgeBrown = this.brown[this.down], topBrown = this.brown[up];
    const tearA = this.seed % (Math.PI * 2);
    for (let i = 0; i < pos.count; i++) {
      const rn = this.wRn[i], a = this.wAng[i], nz = this.wNoise[i];
      let R = this.R(a) * spread;
      if (this.torn) { const da = Math.abs(((a - tearA + Math.PI * 3) % (Math.PI * 2)) - Math.PI); if (da < 0.45) R *= 0.45 + da; }
      const rr = Math.min(rn, 1) * R;
      const skirt = rn > 1;
      const puff = 1 + this.w * 0.35;
      const h = skirt ? 0.002 : (0.058 * (1 - Math.pow(Math.min(rn, 1), 2.2)) + 0.012) * puff * (0.6 + 0.4 * spread) + (rn > 0.85 ? (nz - 0.5) * 0.01 * this.w : 0);
      pos.setXYZ(i, Math.cos(a) * rr * (skirt ? 1.01 : 1), h, Math.sin(a) * rr * (skirt ? 1.01 : 1));
      // cooking: the thin edge sets first, near the yolk last
      const local = smooth(0, 1, this.w * 1.35 - (1 - Math.min(rn, 1)) * 0.38 + (nz - 0.5) * 0.06);
      tmp.copy(RAW_WHITE).lerp(COOKED_WHITE, local);
      const alpha = 0.5 + 0.5 * local;
      const edge = smooth(0.7, 1.0, Math.min(rn, 1)) * Math.min(1, edgeBrown * 1.7) * (0.75 + nz * 0.5);
      const topT = topBrown * (0.7 + 0.3 * rn) * (0.7 + nz * 0.6);
      const tint = Math.max(edge, topT);
      if (tint > 0.01) { brownRamp(Math.max(edgeBrown, topBrown) * (0.8 + nz * 0.4), tmp2); tmp.lerp(tmp2, Math.min(1, tint * 1.5)); }
      col.setXYZW(i, tmp.r, tmp.g, tmp.b, skirt ? Math.max(alpha, 0.9) : alpha);
    }
    pos.needsUpdate = col.needsUpdate = true;
    if (full || this._nTick++ % 6 === 0) this.white.geometry.computeVertexNormals();
    this.whiteMat.roughness = 0.15 + this.w * 0.45;
    this.whiteMat.clearcoat = 0.7 * (1 - this.w * 0.7);

    // yolk: glossy orange -> jammy -> pale matte
    const y = this.y;
    if (y < 0.5) tmp.copy(YOLK_RAW).lerp(YOLK_JAMMY, y / 0.5); else tmp.copy(YOLK_JAMMY).lerp(YOLK_FIRM, (y - 0.5) / 0.5);
    if (this.flips % 2 === 0 && edgeBrown > 0.8) tmp.lerp(BROWN, (edgeBrown - 0.8) * 1.5);
    this.yolkMat.color.copy(tmp);
    this.yolkMat.roughness = 0.08 + y * 0.7;
    this.yolkMat.clearcoat = 1 - y * 0.9;
    const ys = 0.66 - y * 0.08;
    this.yolk.scale.set(spread * 0.95 + 0.05, ys, spread * 0.95 + 0.05);
    this.smear.scale.setScalar(spread);
    // dome when flipped: thin white over yolk, picks up top browning
    tmp.copy(C('#f6dc92')).lerp(COOKED_WHITE, 0.55 + this.w * 0.35);
    if (topBrown > 0.02) { brownRamp(topBrown, tmp2); tmp.lerp(tmp2, Math.min(1, topBrown * 1.4)); }
    this.domeMat.color.copy(tmp);
  }

  _refreshSheet() {
    const w = this.w, b = this.maxBrown;
    tmp.copy(SCR_RAW).lerp(SCR_COOKED, Math.min(1, w * 1.1));
    if (w > 0.8) tmp.lerp(SCR_DRY, (w - 0.8) * 1.5);
    if (b > 0.05) { brownRamp(b, tmp2); tmp.lerp(tmp2, Math.min(1, b * 1.3)); }
    const spread = 0.5 + 0.5 * (1 - Math.pow(1 - this.spread, 3));
    this.liquidMat.color.copy(tmp); this.liquidMat.opacity = 0.97; this.liquidMat.roughness = 0.1 + w * 0.4;
    this.liquid.scale.setScalar(0.55 + 0.45 * spread);
    this.liquid.position.y = 0.02 + Math.min(0.03, w * 0.03);
    this.foldMat.color.copy(tmp); this.foldMat.roughness = 0.25 + w * 0.4;
  }

  _refreshScrambled() {
    const w = this.w, b = this.maxBrown;
    if (w < 0.6) tmp.copy(SCR_RAW).lerp(SCR_COOKED, w / 0.6); else tmp.copy(SCR_COOKED).lerp(SCR_DRY, (w - 0.6) / 0.4);
    if (b > 0.05) { brownRamp(b, tmp2); tmp.lerp(tmp2, Math.min(1, b * 1.2)); }
    this.curdMat.color.copy(tmp);
    this.curdMat.roughness = 0.25 + w * 0.5;
    this.curdMat.clearcoat = 0.6 * (1 - w);
    const quality = Math.min(1, this.stirTotal / (3 + w * 9)); // more stirring -> fluffier, smaller curds
    const grow = smooth(0.08, 0.65, w);
    const t = this._t = (this._t || 0) + 0.016;
    this.curds.children.forEach((m, i) => {
      const d = this.curdData[i];
      const s = d.s * (0.3 + 0.7 * grow) * (1.2 - quality * 0.3);
      m.position.set(Math.cos(d.a) * d.r, 0.03 + s * 0.08 + Math.sin(t * 2 + d.bob) * 0.003 * (1 - w), Math.sin(d.a) * d.r);
      m.scale.set(s, s * d.sq * (0.7 + quality * 0.5), s * 0.9);
      m.rotation.set(d.spin, d.spin * 0.7 + d.a, 0);
    });
    // runny base becomes a set sheet; fades as curds gather
    const liquidAmt = 1 - smooth(0.25, 0.85, w) * (0.4 + quality * 0.6);
    this.liquid.visible = liquidAmt > 0.03;
    tmp.copy(SCR_RAW).lerp(SCR_COOKED, w * 0.8);
    if (b > 0.05) { brownRamp(b, tmp2); tmp.lerp(tmp2, Math.min(1, b)); }
    this.liquidMat.color.copy(tmp);
    this.liquidMat.opacity = 0.35 + 0.6 * liquidAmt;
    this.liquidMat.roughness = 0.08 + w * 0.5;
    this.liquid.scale.setScalar(0.7 + 0.3 * liquidAmt);
  }

  dispose() {
    this.group.traverse((o) => { if (o.isMesh && !curdGeos.includes(o.geometry) && o.geometry !== flakeGeo && o.geometry !== pepperGeo) o.geometry.dispose(); });
    [this.whiteMat, this.yolkMat, this.domeMat, this.curdMat, this.liquidMat, this.foldMat, this.saltFlecks.material, this.pepperFlecks.material].forEach((m) => m.dispose());
  }
}
Food.prototype._nTick = 0;
