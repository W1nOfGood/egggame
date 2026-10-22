'use strict';
(() => {
const $ = s => document.querySelector(s);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ease = k => 1 - Math.pow(1 - k, 3);
const isTouch = matchMedia('(pointer:coarse)').matches || navigator.maxTouchPoints > 1;
const LOW = isTouch;
(function () { const sh = THREE.Color.prototype.setHex; THREE.Color.prototype.setHex = function (h) { sh.call(this, h); return this.convertSRGBToLinear(); }; })();

// ---------------------------------------------------------------- storage
const store = {
  get(k, d) { try { const v = localStorage.getItem('cs_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('cs_' + k, JSON.stringify(v)); } catch (e) {} }
};
const settings = Object.assign({ music: 0.5, sfx: 0.8, guide: true, tutorialDone: false }, store.get('settings', {}));
const saveSettings = () => store.set('settings', settings);
Snd.setVol(settings.music, settings.sfx);

// ---------------------------------------------------------------- renderer
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: $('#c'), antialias: true, powerPreference: 'high-performance' });
  if (!renderer.getContext()) throw new Error('no gl');
} catch (e) { $('#nogl').style.display = 'flex'; return; }
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, LOW ? 1.75 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = LOW ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.92;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe3cf);
const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);

// soft studio-like environment for glossy reflections (yolk, enamel, steel, porcelain)
(function () {
  const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene();
  const g = new THREE.SphereGeometry(20, 32, 16), cols = [], p = g.attributes.position;
  const top = new THREE.Color(0xf3e6d8), mid = new THREE.Color(0xd9aa90), bot = new THREE.Color(0x7d6a5c), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 20; if (y > 0) c.copy(mid).lerp(top, y); else c.copy(mid).lerp(bot, -y); cols.push(c.r, c.g, c.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  es.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
  const panel = (w, h, x, y, z, k) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.96, 0.9).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
  };
  panel(12, 7, -13, 9, 9, 4.5); panel(16, 4, 0, 17, 0, 3); panel(7, 6, 14, 6, -3, 1.5);
  scene.environment = pm.fromScene(es, 0.03).texture; pm.dispose();
})();

scene.add(new THREE.HemisphereLight(0xfff3e6, 0xe0c8d8, 0.2));
const sun = new THREE.DirectionalLight(0xfff0dd, 1.0);
sun.position.set(-5, 11, 7);
sun.castShadow = true;
sun.shadow.mapSize.set(LOW ? 1024 : 2048, LOW ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 7, bottom: -7, near: 1, far: 30 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 3;
scene.add(sun);
const warm = new THREE.PointLight(0xffc88a, 0.5, 14);
warm.position.set(0, 4.3, 0.5);
scene.add(warm);

// ---------------------------------------------------------------- helpers
const mat = (c, r = 0.75, m = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
function rboxGeo(w, h, d, r, b) {
  b = b === undefined ? Math.min(r * 0.5, h * 0.25) : b;
  const iw = w - 2 * b, id = d - 2 * b;
  r = Math.max(0.001, Math.min(r, iw / 2 - 0.001, id / 2 - 0.001));
  const s = new THREE.Shape(), x = -iw / 2, y = -id / 2;
  s.moveTo(x + r, y); s.lineTo(x + iw - r, y); s.quadraticCurveTo(x + iw, y, x + iw, y + r);
  s.lineTo(x + iw, y + id - r); s.quadraticCurveTo(x + iw, y + id, x + iw - r, y + id);
  s.lineTo(x + r, y + id); s.quadraticCurveTo(x, y + id, x, y + id - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(0.001, h - 2 * b), bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 2, curveSegments: 5 });
  g.rotateX(-Math.PI / 2); g.translate(0, b, 0);
  return g;
}
function mesh(geo, m, x = 0, y = 0, z = 0, shadow = true) {
  const o = new THREE.Mesh(geo, m);
  o.position.set(x, y, z);
  o.castShadow = shadow; o.receiveShadow = true;
  return o;
}
function rbox(w, h, d, r, m, x, y, z) { return mesh(rboxGeo(w, h, d, r), m, x, y, z); }
function lathe(pts, m, seg = 32, side) {
  const mm = m.clone ? m : m;
  if (side) mm.side = side;
  return mesh(new THREE.LatheGeometry(pts.map(p => new THREE.Vector2(p[0], p[1])), seg), mm);
}
function hitMesh(geo, item, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial());
  m.material.visible = false;
  m.position.set(x, y, z);
  m.userData.item = item;
  return m;
}
function ndcOf(e) {
  return new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
}
const ray = new THREE.Raycaster();
const _pl = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function planeHit(e, y) {
  ray.setFromCamera(ndcOf(e), cam);
  _pl.constant = -y;
  const v = new THREE.Vector3();
  return ray.ray.intersectPlane(_pl, v) ? v : null;
}
const tweens = [];
function tween(dur, fn, done) { tweens.push({ t: 0, dur, fn, done }); }
function flyTo(g, to, dur, arc, done) {
  const s = g.position.clone();
  tween(dur, k => { const e = ease(k); g.position.set(lerp(s.x, to.x, e), lerp(s.y, to.y, e) + Math.sin(k * Math.PI) * (arc || 0), lerp(s.z, to.z, e)); }, done);
}

// ---------------------------------------------------------------- layout
const BUR = { x: 0, z: -0.3 };
const DIAL = { x: -1.7, z: 1.25 };
const BOWL = { x: -3.8, z: -0.6 };
const DISH = { x: -3.8, z: 0.85 };
const PLATE_HOME = { x: 3.6, z: 0.5 };
const SALT_HOME = { x: 3.0, z: -1.6 };
const PEPPER_HOME = { x: 4.1, z: -1.6 };
const SPAT_HOME = { x: -3.3, z: 1.8 };
const LIM = { x0: -5.5, x1: 5.5, z0: -1.7, z1: 1.8 };

// ---------------------------------------------------------------- textures & materials
function canvasTex(w, h, draw, rep) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.anisotropy = 4;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
function speckle(c, w, h, n, cols, rmax, a0) {
  for (let i = 0; i < n; i++) { c.fillStyle = cols[i % cols.length]; c.globalAlpha = (a0 || 0.3) + Math.random() * 0.5; c.beginPath(); c.arc(Math.random() * w, Math.random() * h, 0.6 + Math.random() * rmax, 0, TAU); c.fill(); }
  c.globalAlpha = 1;
}
const pmat = (c, o) => new THREE.MeshPhysicalMaterial(Object.assign({ color: c, roughness: 0.45, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.3 }, o || {}));
const _shadowTex = canvasTex(64, 64, c => { const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(60,30,20,0.55)'); g.addColorStop(1, 'rgba(60,30,20,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); });
function contactShadow(r) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), new THREE.MeshBasicMaterial({ map: _shadowTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.012; m.renderOrder = 1; scene.add(m); return m;
}
const LV = pts => pts.map(p => new THREE.Vector2(p[0], p[1]));

// ---------------------------------------------------------------- kitchen
(function buildKitchen() {
  const steel = pmat(0xdde3ea, { roughness: 0.28, metalness: 0.9, clearcoat: 0 });
  const chrome = pmat(0xf2f4f6, { roughness: 0.12, metalness: 1, clearcoat: 0 });
  const cast = pmat(0x2b2d33, { roughness: 0.5, metalness: 0.5, clearcoat: 0 });
  // floor
  const ft = canvasTex(128, 128, c => { c.fillStyle = '#fbe6d4'; c.fillRect(0, 0, 128, 128); c.fillStyle = '#f2cdb6'; c.fillRect(0, 0, 64, 64); c.fillRect(64, 64, 64, 64); speckle(c, 128, 128, 80, ['#e9bfa6'], 1.2, 0.1); }, [14, 10]);
  const floor = mesh(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ map: ft, roughness: 0.7 }), 0, -2.2, 0, false);
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  // wall (soft stripes)
  const wt = canvasTex(128, 64, c => { c.fillStyle = '#cdeee3'; c.fillRect(0, 0, 128, 64); c.fillStyle = '#c0e6d9'; for (let i = 0; i < 4; i++) c.fillRect(i * 32, 0, 16, 64); }, [20, 3]);
  scene.add(mesh(new THREE.PlaneGeometry(40, 12), new THREE.MeshStandardMaterial({ map: wt, roughness: 0.9 }), 0, 3.8, -2.7, false));
  // glossy tile backsplash
  const tt = canvasTex(128, 128, c => {
    c.fillStyle = '#fff6ec'; c.fillRect(0, 0, 128, 128);
    [['#ffd3dc', 3, 3], ['#d3f0e5', 67, 3], ['#d3f0e5', 3, 67], ['#ffd3dc', 67, 67]].forEach(([col, x, y]) => {
      c.fillStyle = col; c.fillRect(x, y, 58, 58);
      c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(x + 3, y + 3, 52, 8);
    });
  }, [7, 1.6]);
  scene.add(mesh(new THREE.PlaneGeometry(14, 3.2), pmat(0xffffff, { map: tt, roughness: 0.35, clearcoat: 0.4 }), 0, 1.6, -2.65, false));
  scene.add(rbox(14, 0.16, 0.16, 0.05, pmat(0xffffff), 0, 3.2, -2.6));
  // counter top (speckled stone) + cabinet
  const st = canvasTex(256, 256, c => { c.fillStyle = '#fff6ec'; c.fillRect(0, 0, 256, 256); speckle(c, 256, 256, 500, ['#e8cdbb', '#d9c4d6', '#f3dcc8', '#c9d9d2'], 1.4, 0.25); }, [0.5, 0.5]);
  scene.add(rbox(12.8, 0.5, 4.9, 0.22, pmat(0xffffff, { map: st, roughness: 0.55, clearcoat: 0.15 }), 0, -0.5, -0.2));
  scene.add(rbox(12.3, 1.75, 4.5, 0.15, pmat(0xfff1e0, { roughness: 0.7, clearcoat: 0 }), 0, -2.2, -0.35));
  [-5.2, -3.25, 3.25, 5.2].forEach((x, i) => {
    const col = i % 2 ? 0xbfe8d9 : 0xffc9d4;
    scene.add(rbox(1.85, 1.4, 0.12, 0.12, pmat(col, { roughness: 0.5 }), x, -2.05, 1.95));
    scene.add(rbox(1.4, 1.0, 0.07, 0.08, pmat(col, { roughness: 0.5 }), x, -1.85, 2.03));
    scene.add(mesh(new THREE.SphereGeometry(0.09, 12, 8), chrome, x + (i < 2 ? 0.7 : -0.7), -1.1, 2.12));
  });
  // oven door under the stove
  scene.add(rbox(4.3, 1.45, 0.14, 0.12, pmat(0x3a3d46, { roughness: 0.3 }), 0, -2.05, 1.97));
  scene.add(rbox(3.3, 0.85, 0.05, 0.1, pmat(0x1c1e24, { roughness: 0.05, metalness: 0.2, clearcoat: 1 }), 0, -2.2, 2.06));
  const hb = mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.6, 12), chrome, 0, -1.2, 2.22); hb.rotation.z = Math.PI / 2; scene.add(hb);
  [-1.7, 1.7].forEach(x => { const p = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.25, 8), chrome, x, -1.2, 2.12); p.rotation.x = Math.PI / 2; scene.add(p); });
  const tw = pmat(0xffb3c1, { roughness: 0.9, clearcoat: 0 }), twW = pmat(0xffffff, { roughness: 0.9, clearcoat: 0 });
  scene.add(rbox(1.0, 0.95, 0.03, 0.02, tw, 1.2, -2.2, 2.27));
  scene.add(rbox(1.0, 0.1, 0.035, 0.02, twW, 1.2, -1.8, 2.285)); scene.add(rbox(1.0, 0.1, 0.035, 0.02, twW, 1.2, -2.1, 2.285));
  // stove slab (brushed steel)
  scene.add(rbox(4.5, 0.07, 3.7, 0.3, steel, 0, 0, -0.2));
  // burner: cast head, glowing ring, grate
  scene.add(mesh(new THREE.CylinderGeometry(0.7, 0.75, 0.1, 32), cast, BUR.x, 0.1, BUR.z));
  burnerGlow = new THREE.MeshStandardMaterial({ color: 0x2d2d36, emissive: 0xff3300, emissiveIntensity: 0, roughness: 0.6 });
  const glow = mesh(new THREE.TorusGeometry(0.62, 0.07, 8, 40), burnerGlow, BUR.x, 0.16, BUR.z); glow.rotation.x = Math.PI / 2; scene.add(glow);
  const gring = mesh(new THREE.TorusGeometry(0.95, 0.05, 8, 40), cast, BUR.x, 0.22, BUR.z); gring.rotation.x = Math.PI / 2; scene.add(gring);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4, arm = rbox(1.0, 0.09, 0.15, 0.05, cast, BUR.x + Math.cos(a) * 0.62, 0.17, BUR.z - Math.sin(a) * 0.62);
    arm.rotation.y = a; scene.add(arm);
    scene.add(mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.17, 10), cast, BUR.x + Math.cos(a) * 1.1, 0.1, BUR.z - Math.sin(a) * 1.1));
  }
  // flames
  flames = new THREE.Group(); flames.position.set(BUR.x, 0.12, BUR.z);
  const fm = new THREE.MeshBasicMaterial({ color: 0x5fb8ff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * TAU, cone = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.32, 6), fm);
    cone.position.set(Math.cos(a) * 0.8, 0.12, Math.sin(a) * 0.8); flames.add(cone);
  }
  scene.add(flames);
  // window with sky, sun, curtains
  const sky = canvasTex(64, 128, c => {
    const g = c.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#9fd8ff'); g.addColorStop(1, '#e8f6ff'); c.fillStyle = g; c.fillRect(0, 0, 64, 128);
    c.fillStyle = '#fff6c9'; c.beginPath(); c.arc(46, 28, 11, 0, TAU); c.fill();
    c.fillStyle = 'rgba(255,255,255,.9)'; [[18, 70, 14], [30, 74, 12], [44, 72, 10]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); });
  });
  scene.add(mesh(new THREE.PlaneGeometry(2.8, 2.2), new THREE.MeshBasicMaterial({ map: sky }), -3.8, 4, -2.66, false));
  const fr = pmat(0xffffff, { roughness: 0.5 });
  scene.add(rbox(3.1, 0.15, 0.2, 0.05, fr, -3.8, 5.05, -2.62)); scene.add(rbox(3.1, 0.15, 0.2, 0.05, fr, -3.8, 2.85, -2.62));
  scene.add(rbox(0.15, 2.3, 0.2, 0.05, fr, -5.25, 2.85, -2.62)); scene.add(rbox(0.15, 2.3, 0.2, 0.05, fr, -2.35, 2.85, -2.62));
  scene.add(rbox(0.1, 2.2, 0.15, 0.03, fr, -3.8, 2.9, -2.6)); scene.add(rbox(2.7, 0.08, 0.15, 0.03, fr, -3.8, 3.95, -2.6));
  const curt = pmat(0xffb3c1, { roughness: 0.9, clearcoat: 0 });
  [[-5.35, 1], [-2.25, -1]].forEach(([x, s]) => { for (let i = 0; i < 3; i++) { const c = rbox(0.2, 2.5, 0.2, 0.08, curt, x + s * 0.12 * i, 2.75, -2.45 + (i % 2) * 0.04); scene.add(c); } });
  const rod = mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.6, 8), chrome, -3.8, 5.3, -2.4); rod.rotation.z = Math.PI / 2; scene.add(rod);
  // framed picture
  const pic = canvasTex(128, 96, c => { c.fillStyle = '#fff3d6'; c.fillRect(0, 0, 128, 96); c.font = '64px serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('🍳', 64, 52); });
  scene.add(rbox(1.7, 1.3, 0.1, 0.05, pmat(0xe9b98a, { roughness: 0.6 }), 0.5, 3.55, -2.6));
  scene.add(mesh(new THREE.PlaneGeometry(1.4, 1.05), new THREE.MeshBasicMaterial({ map: pic }), 0.5, 4.2, -2.53, false));
  // shelf with jars
  scene.add(rbox(3.4, 0.14, 0.7, 0.05, pmat(0xe9c9a0, { roughness: 0.7 }), 3.7, 3.4, -2.3));
  [[0xffb3c1, 0.7], [0xffe08a, 0.82], [0xa8d8ea, 0.94]].forEach(([col, hh], i) => {
    const x = 2.8 + i * 0.85;
    scene.add(mesh(new THREE.CylinderGeometry(0.32, 0.32, hh, 20), pmat(col, { roughness: 0.15, transparent: true, opacity: 0.8, clearcoat: 1 }), x, 3.5 + hh / 2, -2.3));
    scene.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.1, 20), pmat(0xffffff), x, 3.5 + hh + 0.05, -2.3));
  });
  // pendant lamp
  scene.add(mesh(new THREE.LatheGeometry(LV([[0.1, 0], [0.6, 0.1], [0.85, 0.45], [0.8, 0.5], [0.55, 0.2], [0.08, 0.12]]), 28), pmat(0xffb3c1, { side: THREE.DoubleSide, roughness: 0.4 }), 0, 5.0, -0.5, false));
  scene.add(mesh(new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshBasicMaterial({ color: 0xfff2c0 }), 0, 5.0, -0.5, false));
  scene.add(mesh(new THREE.CylinderGeometry(0.025, 0.025, 4, 6), cast, 0, 7.4, -0.5, false));
  // kettle
  const kp = new THREE.Group(); kp.position.set(-5.4, 0, -1.9);
  kp.add(mesh(new THREE.LatheGeometry(LV([[0, 0], [0.55, 0], [0.62, 0.15], [0.56, 0.6], [0.32, 0.85], [0.12, 0.9]]), 28), pmat(0xa8d8ea, { roughness: 0.25, metalness: 0.4 })));
  kp.add(mesh(new THREE.SphereGeometry(0.1, 10, 8), pmat(0x333333), 0, 0.97, 0));
  const sp = mesh(new THREE.CylinderGeometry(0.06, 0.12, 0.55, 10), pmat(0xa8d8ea, { metalness: 0.4 }), 0.6, 0.55, 0); sp.rotation.z = -0.9; kp.add(sp);
  kp.add(mesh(new THREE.TorusGeometry(0.42, 0.05, 8, 20, Math.PI), pmat(0x333333), 0, 0.85, 0));
  scene.add(kp);
  // plant
  const pl = new THREE.Group(); pl.position.set(5.4, 0, -1.9);
  pl.add(mesh(new THREE.LatheGeometry(LV([[0, 0], [0.3, 0], [0.42, 0.55], [0.46, 0.6], [0.4, 0.6]]), 20), pmat(0xffc9d4, { roughness: 0.5 })));
  for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; const l = mesh(new THREE.SphereGeometry(0.3, 10, 8), pmat(0x8fd9a8, { roughness: 0.5 }), Math.cos(a) * 0.25, 0.95 + (i % 3) * 0.14, Math.sin(a) * 0.25); l.scale.set(0.9, 1.6, 0.4); l.rotation.set(Math.sin(a) * 0.5, -a, Math.cos(a) * 0.5); pl.add(l); }
  scene.add(pl);
  // utensil crock + cookbooks
  const cr = new THREE.Group(); cr.position.set(-2.7, 0, -2.1);
  cr.add(mesh(new THREE.CylinderGeometry(0.36, 0.3, 0.7, 20), pmat(0xffe08a, { roughness: 0.3 }), 0, 0.35, 0));
  [[-0.1, 0.1, 0.15, 0x6f4e37], [0.1, -0.05, -0.12, 0x8fd9c1], [0.0, 0.0, 0.0, 0xffb3c1]].forEach(([x, z, t, col], i) => {
    const u = new THREE.Group(); u.position.set(x, 0.5, z); u.rotation.z = t;
    u.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.1 + i * 0.1, 8), pmat(col, { roughness: 0.6, clearcoat: 0 }), 0, 0.55, 0));
    const h2 = mesh(new THREE.SphereGeometry(0.15, 10, 8), pmat(col, { roughness: 0.6, clearcoat: 0 }), 0, 1.2 + i * 0.1, 0); h2.scale.set(1, 1.3, 0.35); u.add(h2); cr.add(u);
  });
  scene.add(cr);
  [[0xffb3c1, 1.3, 0.2], [0xa8d8ea, 1.15, -0.1], [0xffe08a, 1.0, 0.15]].forEach(([col, w, rot], i) => {
    const b = rbox(w, 0.22, 0.85, 0.04, pmat(col, { roughness: 0.6 }), 1.9, i * 0.22, -2.0); b.rotation.y = rot; scene.add(b);
  });
})();
var burnerGlow, flames;

// ---------------------------------------------------------------- items registry
const items = [];
function addItem(it) { items.push(it); return it; }

// ---------------------------------------------------------------- dial (heat knob)
let heat = 0;
const dial = { g: new THREE.Group(), lastTick: 0 };
(function () {
  const g = dial.g; g.position.set(DIAL.x, 0.07, DIAL.z);
  const enamel = pmat(0xff8fa3, { roughness: 0.28, clearcoat: 0.9, clearcoatRoughness: 0.12 });
  const chromeD = pmat(0xf2f4f6, { roughness: 0.15, metalness: 1, clearcoat: 0 });
  g.add(mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.03, 36), pmat(0xffffff, { roughness: 0.4 }), 0, 0.015, 0));
  const baseRing = mesh(new THREE.TorusGeometry(0.52, 0.045, 10, 36), chromeD, 0, 0.05, 0); baseRing.rotation.x = Math.PI / 2; g.add(baseRing);
  dial.knob = new THREE.Group();
  dial.knob.add(mesh(new THREE.LatheGeometry(LV([[0, 0.04], [0.4, 0.04], [0.46, 0.12], [0.44, 0.3], [0.37, 0.37], [0, 0.39]]), 36), enamel));
  const kr = mesh(new THREE.TorusGeometry(0.3, 0.03, 8, 28), chromeD, 0, 0.385, 0); kr.rotation.x = Math.PI / 2; dial.knob.add(kr);
  dial.knob.add(mesh(new THREE.BoxGeometry(0.09, 0.05, 0.34), pmat(0xffffff, { roughness: 0.3 }), 0, 0.4, -0.17));
  g.add(dial.knob);
  const cols = [0xa8d8ea, 0xffe08a, 0xffb36b, 0xff7a5c, 0xff4d4d];
  for (let i = 0; i < 5; i++) {
    const a = THREE.MathUtils.degToRad(-135 + 270 * i / 4);
    g.add(mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: cols[i] }), Math.sin(a) * 0.78, 0.02, -Math.cos(a) * 0.78, false));
  }
  scene.add(g);
  dial.item = addItem({
    id: 'dial', prio: 3, hits: [hitMesh(new THREE.CylinderGeometry(0.85, 0.85, 0.8, 16), null, 0, 0.3, 0)],
    enabled: () => true,
    down(e, d) {
      const p = dial.g.position.clone().project(cam);
      d.cx = (p.x * 0.5 + 0.5) * innerWidth; d.cy = (-p.y * 0.5 + 0.5) * innerHeight;
      d.a0 = Math.atan2(e.clientY - d.cy, e.clientX - d.cx); d.h0 = heat;
    },
    move(e, d) {
      if (Math.hypot(e.clientX - d.cx, e.clientY - d.cy) < 20) return;
      let da = Math.atan2(e.clientY - d.cy, e.clientX - d.cx) - d.a0;
      while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU;
      setHeat(clamp(d.h0 + da / (THREE.MathUtils.degToRad(270)), 0, 1));
    },
    up() {}
  });
  g.add(dial.item.hits[0]); dial.item.hits[0].userData.item = dial.item;
})();
function setHeat(h) {
  const q = Math.round(h * 20) / 20;
  if (Math.floor(q * 4) !== dial.lastTick) { dial.lastTick = Math.floor(q * 4); Snd.tick(); }
  heat = h;
  dial.knob.rotation.y = -THREE.MathUtils.degToRad(-135 + 270 * h);
  $('#heatKnob').style.bottom = `calc(${h * 100}% - ${h * 30}px)`;
  $('#heatLbl').textContent = h < 0.03 ? 'Off' : h < 0.38 ? 'Low' : h < 0.68 ? 'Medium' : h < 0.88 ? 'High' : 'MAX';
  if (h > 0.05) ach.heat = true;
}

// ---------------------------------------------------------------- pan
const pan = { g: new THREE.Group(), tx: BUR.x, tz: BUR.z, lift: 0, onBurner: true, temp: 25, speed: 0, dragging: false,
  butter: { amount: 0, melt: 0, brown: 0 }, food: null };
(function () {
  const g = pan.g; g.rotation.y = -0.5;
  const enamelM = pmat(0x93e0cb, { roughness: 0.28, clearcoat: 0.9, clearcoatRoughness: 0.15 });
  const ringT = canvasTex(8, 64, c => { for (let i = 0; i < 64; i += 4) { c.fillStyle = (i % 8) ? '#2b313b' : '#3a424f'; c.fillRect(0, i, 8, 4); } });
  const innerM = pmat(0x2e3440, { roughness: 0.4, metalness: 0.55, clearcoat: 0.25, map: ringT, side: THREE.DoubleSide });
  const chromeP = pmat(0xf2f4f6, { roughness: 0.12, metalness: 1, clearcoat: 0 });
  const outer = lathe([[0, 0], [0.95, 0], [1.15, 0.06], [1.4, 0.46], [1.47, 0.56], [1.44, 0.6], [1.4, 0.58]], enamelM, 56);
  const inner = lathe([[0, 0.12], [1.05, 0.12], [1.12, 0.15], [1.34, 0.5], [1.4, 0.58]], innerM, 56, THREE.DoubleSide);
  inner.castShadow = false;
  g.add(outer, inner);
  const rimT = mesh(new THREE.TorusGeometry(1.43, 0.035, 8, 56), chromeP, 0, 0.585, 0); rimT.rotation.x = Math.PI / 2; g.add(rimT);
  g.add(rbox(1.1, 0.1, 0.24, 0.05, chromeP, 1.85, 0.46, 0));
  const grip = mesh(new THREE.LatheGeometry(LV([[0, 0], [0.14, 0], [0.18, 0.15], [0.16, 1.0], [0.11, 1.2], [0, 1.24]]), 20), pmat(0xffd1dc, { roughness: 0.45, clearcoat: 0.5 }), 2.15, 0.46, 0);
  grip.rotation.z = -Math.PI / 2; grip.scale.set(1, 1, 0.85); g.add(grip);
  [-0.07, 0.07].forEach(z => g.add(mesh(new THREE.SphereGeometry(0.045, 8, 6), chromeP, 1.45, 0.52, z)));
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8), chromeP, 3.28, 0.46, 0));
  // butter visuals
  pan.pat = rbox(0.5, 0.25, 0.4, 0.06, mat(0xffe27a, 0.35), 0, 0.12, 0); pan.pat.visible = false; g.add(pan.pat);
  pan.puddleM = new THREE.MeshStandardMaterial({ color: 0xffe07a, roughness: 0.1, metalness: 0, transparent: true, opacity: 0.88 });
  pan.puddle = new THREE.Mesh(new THREE.CircleGeometry(1, 36), pan.puddleM);
  pan.puddle.rotation.x = -Math.PI / 2; pan.puddle.position.y = 0.128; pan.puddle.visible = false; g.add(pan.puddle);
  pan.bubbles = [];
  const bm = new THREE.MeshStandardMaterial({ color: 0xfff1b0, roughness: 0.1, transparent: true, opacity: 0.8 });
  for (let i = 0; i < 9; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), bm); b.visible = false; b.userData = { t: 0, life: 1, x: 0, z: 0 }; g.add(b); pan.bubbles.push(b); }
  g.position.set(BUR.x, 0.3, BUR.z);
  scene.add(g);
  pan.item = addItem({
    id: 'pan', prio: 1, hits: [], enabled: () => !S.serving,
    down(e, d) {
      const h = planeHit(e, 0.3); d.ox = pan.tx - h.x; d.oz = pan.tz - h.z;
      pan.dragging = true; pan.lift = 0.45; pan.onBurner = false; ach.moved = true;
    },
    move(e) {
      const h = planeHit(e, 0.3); if (!h) return;
      const hh = rawDrag;
      pan.tx = clamp(h.x + rawDrag.ox, LIM.x0, LIM.x1); pan.tz = clamp(h.z + rawDrag.oz, LIM.z0, LIM.z1);
    },
    up() {
      pan.dragging = false; pan.lift = 0;
      if (Math.hypot(pan.tx - BUR.x, pan.tz - BUR.z) < 1.3) { pan.tx = BUR.x; pan.tz = BUR.z; pan.onBurner = true; Snd.clink(); }
      else { pan.onBurner = false; separate(pan, 1.5); }
      pushPlateAway();
    }
  });
  const h1 = hitMesh(new THREE.CylinderGeometry(1.55, 1.55, 0.7, 20), pan.item, 0, 0.3, 0);
  const h2 = hitMesh(new THREE.BoxGeometry(2.4, 0.5, 0.7), pan.item, 2.4, 0.4, 0);
  g.add(h1, h2); pan.item.hits.push(h1, h2);
})();
let rawDrag = null; // current drag record (set by pointer code)

// circles that block the pan/plate when dropped
pan.shadow = contactShadow(1.85);
const BLOCKS = [{ x: BOWL.x, z: BOWL.z, r: 0.95 }, { x: DISH.x, z: DISH.z, r: 0.75 }];
function separate(obj, r) {
  for (let i = 0; i < 4; i++) {
    const circles = BLOCKS.slice();
    if (obj === pan) circles.push({ x: plate.tx, z: plate.tz, r: 1.3 });
    else circles.push({ x: pan.tx, z: pan.tz, r: 1.5 });
    for (const c of circles) {
      const px = obj === pan ? pan.tx : plate.tx, pz = obj === pan ? pan.tz : plate.tz;
      const dx = px - c.x, dz = pz - c.z, d = Math.hypot(dx, dz) || 0.01, need = r + c.r;
      if (d < need) {
        const nx = px + dx / d * (need - d), nz = pz + dz / d * (need - d);
        if (obj === pan) { pan.tx = clamp(nx, LIM.x0, LIM.x1); pan.tz = clamp(nz, LIM.z0, LIM.z1); }
        else { plate.tx = clamp(nx, LIM.x0, LIM.x1); plate.tz = clamp(nz, LIM.z0, LIM.z1); }
      }
    }
  }
}
function pushPlateAway() {
  if (Math.hypot(plate.tx - pan.tx, plate.tz - pan.tz) < 2.7) { separate(plate, 1.3); }
}

// ---------------------------------------------------------------- plate
const plate = { g: new THREE.Group(), tx: PLATE_HOME.x, tz: PLATE_HOME.z, lift: 0, food: null };
(function () {
  const g = plate.g;
  const porc = pmat(0xfffdf8, { roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.06 });
  g.add(lathe([[0, 0], [0.9, 0], [1.1, 0.07], [1.28, 0.2], [1.33, 0.23], [1.3, 0.2]], porc, 56, THREE.DoubleSide));
  g.add(lathe([[0, 0.05], [0.85, 0.05], [1.05, 0.11], [1.25, 0.22]], porc, 56, THREE.DoubleSide));
  const rim = mesh(new THREE.TorusGeometry(1.0, 0.03, 6, 56), pmat(0xa8d8ea, { roughness: 0.3 }), 0, 0.1, 0); rim.rotation.x = Math.PI / 2; g.add(rim);
  const rim2 = mesh(new THREE.TorusGeometry(1.22, 0.02, 6, 56), pmat(0xffb3c1, { roughness: 0.3 }), 0, 0.2, 0); rim2.rotation.x = Math.PI / 2; g.add(rim2);
  g.position.set(PLATE_HOME.x, 0.02, PLATE_HOME.z); scene.add(g);
  plate.item = addItem({
    id: 'plate', prio: 1, hits: [], enabled: () => !S.serving,
    down(e, d) { const h = planeHit(e, 0.2); d.ox = plate.tx - h.x; d.oz = plate.tz - h.z; plate.lift = 0.4; ach.moved = true; },
    move(e, d) { const h = planeHit(e, 0.2); if (!h) return; plate.tx = clamp(h.x + d.ox, LIM.x0, LIM.x1); plate.tz = clamp(h.z + d.oz, LIM.z0, LIM.z1); },
    up() {
      plate.lift = 0;
      if (Math.hypot(plate.tx - pan.tx, plate.tz - pan.tz) < 2.7) separate(plate, 1.3); else separate(plate, 1.3);
      Snd.clink();
    }
  });
  const h = hitMesh(new THREE.CylinderGeometry(1.4, 1.4, 0.5, 20), plate.item, 0, 0.15, 0);
  g.add(h); plate.item.hits.push(h);
})();

plate.shadow = contactShadow(1.6);
// ---------------------------------------------------------------- carriable props
function carriable(g, home, rate) {
  return { g, home: home.clone(), target: home.clone(), rate: rate || 20, mode: 'home', tiltT: 0, tilt: 0 };
}

// --- egg bowl + egg
const egg = carriable(new THREE.Group(), V(BOWL.x, 0.8, BOWL.z), 18);
egg.state = 'bowl'; egg.split = 0; egg.local = { x: 0, z: 0 }; egg.shake = 0;
function eggGeo(part) {
  let g;
  if (part === 'whole') g = new THREE.SphereGeometry(1, 20, 16);
  else if (part === 'top') g = new THREE.SphereGeometry(1, 20, 10, 0, TAU, 0, Math.PI / 2);
  else g = new THREE.SphereGeometry(1, 20, 10, 0, TAU, Math.PI / 2, Math.PI / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 - 0.14 * y; p.setXYZ(i, x * 0.27 * k, y * 0.36, z * 0.27 * k); }
  g.computeVertexNormals(); return g;
}
(function () {
  const bowlM = pmat(0xa8d8ea, { roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05, side: THREE.DoubleSide });
  const bowl = lathe([[0, 0], [0.5, 0], [0.8, 0.3], [0.95, 0.65], [0.9, 0.66], [0.75, 0.35], [0, 0.1]], bowlM, 40, THREE.DoubleSide);
  bowl.position.set(BOWL.x, 0, BOWL.z); scene.add(bowl);
  const mkShell = base => pmat(0xffffff, { map: canvasTex(128, 128, c => { c.fillStyle = base; c.fillRect(0, 0, 128, 128); speckle(c, 128, 128, 170, ['#b98d63', '#d9b58a'], 1.1, 0.2); }), roughness: 0.55, clearcoat: 0.3, side: THREE.DoubleSide });
  const shellM = mkShell('#f7e7d0'), shellB = mkShell('#e9c49b');
  [[-0.25, 0.2, 0.15, 0.5, shellB], [0.28, 0.22, -0.1, -0.4, shellM]].forEach(([dx, dy, dz, ry, m]) => {
    const e = mesh(eggGeo('whole'), m, BOWL.x + dx, 0.32 + dy, BOWL.z + dz); e.rotation.set(0.4, ry, 0.5); scene.add(e);
  });
  const bs = contactShadow(1.3); bs.position.set(BOWL.x, 0.012, BOWL.z);
  const ds = contactShadow(1.0); ds.position.set(DISH.x, 0.012, DISH.z);
  const whole = mesh(eggGeo('whole'), shellM, 0, 0, 0);
  const top = mesh(eggGeo('top'), shellM, 0, 0, 0), bot = mesh(eggGeo('bot'), shellM, 0, 0, 0);
  top.visible = bot.visible = false;
  const pts = []; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; pts.push(V(Math.cos(a) * 0.285, (i % 2 ? 0.035 : -0.035), Math.sin(a) * 0.285)); }
  const crack = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 48, 0.01, 4, true), new THREE.MeshBasicMaterial({ color: 0x7a5c3a }));
  crack.visible = false;
  egg.g.add(whole, top, bot, crack);
  egg.whole = whole; egg.top = top; egg.bot = bot; egg.crack = crack;
  egg.g.position.copy(egg.home); scene.add(egg.g);
  egg.item = addItem({
    id: 'egg', prio: 3, hits: [], enabled: () => egg.state !== 'gone' && egg.state !== 'splitting' && !S.serving,
    down(e, d) {
      Snd.tick();
      if (egg.state === 'cracked') { d.mode = 'split'; d.sx = e.clientX; return; }
      d.mode = 'move'; d.from = egg.state; egg.state = 'held'; egg.mode = 'held'; egg.tiltT = 0;
    },
    move(e, d) {
      if (d.mode === 'split') { egg.split = clamp(Math.abs(e.clientX - d.sx) / (Math.min(innerWidth, 900) * 0.1), 0, 1); if (egg.split >= 1) doSplit(); return; }
      const h = planeHit(e, 1.9); if (h) egg.target.set(clamp(h.x, -6, 6), 1.9, clamp(h.z, -2, 2.4));
    },
    up(e, d) {
      if (d.mode === 'split') { if (!d.moved) doSplit(); else if (egg.state === 'cracked') egg.split = 0; return; }
      if (!d.moved) {
        if (d.from === 'hover') { egg.state = 'hover'; egg.mode = 'hover'; crackEgg(); }
        else { egg.state = 'bowl'; flyEggToPan(); }
        return;
      }
      const wp = egg.g.position;
      if (Math.hypot(wp.x - pan.g.position.x, wp.z - pan.g.position.z) < 1.45) hoverEgg(wp);
      else returnEgg();
    }
  });
  const hh = hitMesh(new THREE.SphereGeometry(0.62, 10, 8), egg.item, 0, 0, 0);
  egg.g.add(hh); egg.item.hits.push(hh);
})();
function hoverEgg(wp) {
  const l = pan.g.worldToLocal(V(wp.x, 0, wp.z));
  const r = Math.hypot(l.x, l.z), m = Math.min(r, 0.75);
  egg.local.x = r > 0.001 ? l.x / r * m : 0; egg.local.z = r > 0.001 ? l.z / r * m : 0;
  egg.state = 'hover'; egg.mode = 'hover';
  hintBump();
}
function flyEggToPan() { egg.local.x = 0.1; egg.local.z = 0; egg.state = 'hover'; egg.mode = 'hover'; Snd.whoosh(); }
function returnEgg() { egg.state = 'bowl'; egg.mode = 'home'; egg.target.copy(egg.home); }
function canTakeEgg() {
  const f = pan.food;
  return !f || (f.eggs < 2 && !f.scr && f.set < 0.45 && f.top === 0 && f.flips === 0);
}
function crackEgg() {
  if (!canTakeEgg()) { egg.shake = 0.5; toast('The pan is busy — move the food to the plate first'); Snd.sad(); return; }
  if (!pan.food && pan.temp < 60) { /* allowed, just cold */ }
  egg.state = 'cracked'; egg.mode = 'hover';
  egg.whole.visible = false; egg.top.visible = egg.bot.visible = egg.crack.visible = true;
  egg.top.position.set(0, 0, 0); egg.bot.position.set(0, 0, 0);
  egg.shake = 0.4; Snd.crack(); ach.cracked = true; hintBump();
}
function doSplit() {
  if (egg.state !== 'cracked') return;
  egg.state = 'splitting'; egg.split = 1; Snd.crack();
  const wp = egg.g.position.clone();
  const tp = egg.top, bp = egg.bot;
  [tp, bp].forEach((h, i) => {
    const w = h.getWorldPosition(new THREE.Vector3());
    scene.attach(h); h.position.copy(w);
    const dir = i ? -1 : 1, s = h.position.clone(), r0 = h.rotation.clone();
    tween(0.7, k => { const e = k * k; h.position.set(s.x + dir * (0.4 + e * 0.9), s.y - e * 1.0, s.z + 0.3 * e); h.rotation.z = r0.z + dir * -0.9 * k; });
  });
  const pl = V(wp.x, 0, wp.z);
  const lp = pan.g.worldToLocal(pl.clone());
  const r = Math.hypot(lp.x, lp.z), m = Math.min(r, 0.6);
  const fx = r > 0.001 ? lp.x / r * m : 0, fz = r > 0.001 ? lp.z / r * m : 0;
  addEggToPan(fx, fz);
  egg.crack.visible = false;
  setTimeout(() => {
    [tp, bp].forEach(h => { h.visible = false; egg.g.add(h); h.position.set(0, 0, 0); h.rotation.set(0, 0, 0); });
    egg.whole.visible = true; egg.state = 'bowl'; egg.mode = 'home'; egg.split = 0;
    egg.g.position.copy(egg.home); egg.target.copy(egg.home); egg.g.scale.setScalar(0.01); egg.popIn = 0;
  }, 900);
  egg.state = 'gone';
  setTimeout(() => { if (egg.state === 'gone') { /* safety */ } }, 1);
}

// --- butter
const butter = carriable(new THREE.Group(), V(DISH.x, 0.27, DISH.z), 20);
butter.state = 'dish';
(function () {
  scene.add(mesh(new THREE.LatheGeometry(LV([[0, 0], [0.62, 0], [0.75, 0.06], [0.8, 0.14], [0.72, 0.11], [0, 0.07]]), 36), pmat(0xfff8ee, { roughness: 0.15, clearcoat: 1, side: THREE.DoubleSide }), DISH.x, 0, DISH.z));
  butter.g.add(rbox(0.55, 0.3, 0.42, 0.07, pmat(0xffe58a, { roughness: 0.25, clearcoat: 0.8, clearcoatRoughness: 0.1 }), 0, -0.15, 0));
  butter.g.add(rbox(0.26, 0.31, 0.44, 0.05, pmat(0xffb3c1, { roughness: 0.3, metalness: 0.4, clearcoat: 0.3 }), -0.15, -0.15, 0));
  butter.g.position.copy(butter.home); scene.add(butter.g);
  butter.item = addItem({
    id: 'butter', prio: 3, hits: [], enabled: () => butter.state === 'dish' && !S.serving,
    down() { butter.mode = 'held'; butter.state = 'dish'; Snd.tick(); },
    move(e) { const h = planeHit(e, 1.5); if (h) butter.target.set(clamp(h.x, -6, 6), 1.5, clamp(h.z, -2, 2.4)); },
    up(e, d) {
      const p = butter.g.position;
      if (!d.moved || Math.hypot(p.x - pan.g.position.x, p.z - pan.g.position.z) < 1.4) dropButter();
      else { butter.mode = 'home'; butter.target.copy(butter.home); }
    }
  });
  const h = hitMesh(new THREE.BoxGeometry(0.95, 0.8, 0.8), butter.item, 0, -0.1, 0);
  butter.g.add(h); butter.item.hits.push(h);
})();
function dropButter() {
  butter.state = 'dropping'; butter.mode = 'free';
  const to = pan.g.localToWorld(V(0.05, 0.4, 0.05));
  flyTo(butter.g, to, 0.35, 0.4, () => {
    Snd.plop();
    pan.butter.amount = Math.min(3, pan.butter.amount + 1); pan.butter.pat = 1; ach.butter = true;
    butter.g.scale.setScalar(0.01); butter.g.position.copy(butter.home); butter.target.copy(butter.home);
    butter.mode = 'home'; butter.state = 'dish'; butter.popIn = 0;
  });
}

// --- shakers
function makeShaker(kind, home, col) {
  const s = carriable(new THREE.Group(), V(home.x, 0.5, home.z), 20);
  s.kind = kind; s.held = false; s.auto = 0;
  const glassM = pmat(col, { roughness: 0.08, transparent: true, opacity: 0.55, clearcoat: 1, side: THREE.DoubleSide });
  const chromeS = pmat(0xe9eef2, { metalness: 1, roughness: 0.15, clearcoat: 0 });
  const body = mesh(new THREE.LatheGeometry(LV([[0, -0.35], [0.24, -0.35], [0.31, -0.25], [0.32, 0.05], [0.27, 0.28], [0.2, 0.34]]), 24), glassM);
  const cap = mesh(new THREE.LatheGeometry(LV([[0, 0.6], [0.12, 0.59], [0.2, 0.52], [0.24, 0.34], [0.2, 0.32], [0, 0.32]]), 24), chromeS);
  const fill = mesh(new THREE.LatheGeometry(LV([[0, -0.33], [0.22, -0.33], [0.29, -0.24], [0.3, 0.0], [0, 0.0]]), 20), mat(kind === 'salt' ? 0xffffff : 0x33302f, 0.9));
  const band = mesh(new THREE.TorusGeometry(0.32, 0.03, 8, 24), mat(kind === 'salt' ? 0x7fc4e6 : 0xb5651d, 0.4), 0, -0.12, 0); band.rotation.x = Math.PI / 2; s.g.add(band);
  for (let i = 0; i < 5; i++) { const a = i / 5 * TAU, h = mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.02, 6), mat(0x222222), Math.cos(a) * 0.07, 0.6, Math.sin(a) * 0.07, false); s.g.add(h); }
  s.g.add(body, cap, fill);
  s.g.position.copy(s.home); scene.add(s.g);
  s.item = addItem({
    id: kind, prio: 3, hits: [], enabled: () => !S.serving && s.auto <= 0,
    down() { s.mode = 'held'; s.held = true; Snd.tick(); },
    move(e) { const h = planeHit(e, 1.7); if (h) s.target.set(clamp(h.x, -6, 6), 1.7, clamp(h.z, -2, 2.4)); },
    up(e, d) {
      s.held = false;
      if (!d.moved) autoSeason(s); else { s.mode = 'home'; s.target.copy(s.home); }
    }
  });
  const h = hitMesh(new THREE.CylinderGeometry(0.55, 0.55, 1.1, 10), s.item, 0, 0.1, 0);
  s.g.add(h); s.item.hits.push(h);
  return s;
}
const salt = makeShaker('salt', SALT_HOME, 0xdff3ff);
const pepper = makeShaker('pepper', PEPPER_HOME, 0xd8c3a5);
const shakers = [salt, pepper];
function seasonTarget() {
  if (plate.food) return plate.food.g.getWorldPosition(new THREE.Vector3());
  if (pan.food) return pan.food.g.getWorldPosition(new THREE.Vector3());
  return null;
}
function autoSeason(s) {
  const t = seasonTarget();
  if (!t) { toast('Nothing to season yet'); s.mode = 'home'; s.target.copy(s.home); return; }
  s.mode = 'auto'; s.auto = 1.5; s.target.set(t.x, 1.55, t.z);
}

// --- spatula
const spat = carriable(new THREE.Group(), V(SPAT_HOME.x, 0.1, SPAT_HOME.z), 28);
spat.inPan = false; spat.vel = 0; spat.samples = []; spat.lastAng = null; spat.lastPos = null;
(function () {
  const g = spat.g, m = pmat(0x8fd9c1, { roughness: 0.3, clearcoat: 0.7 }), hm = pmat(0xffb3c1, { roughness: 0.4, clearcoat: 0.6 });
  const head = rbox(0.95, 0.06, 0.75, 0.15, m, 0, 0, 0);
  const neck = rbox(0.6, 0.05, 0.14, 0.04, pmat(0xdde3ea, { roughness: 0.2, metalness: 1, clearcoat: 0 }), 0.75, 0.05, 0);
  const hold = new THREE.Group(); hold.position.set(1.0, 0.07, 0); hold.rotation.z = 0.28;
  hold.add(mesh(new THREE.CylinderGeometry(0.075, 0.09, 2.0, 10).rotateZ(Math.PI / 2), hm, 1.0, 0, 0));
  g.add(head, neck, hold);
  [-0.2, 0, 0.2].forEach(z => g.add(rbox(0.5, 0.03, 0.07, 0.02, mat(0x4f9c85, 0.5), -0.12, 0.045, z)));
  hold.add(mesh(new THREE.SphereGeometry(0.09, 10, 8), hm, 2.0, 0, 0));
  g.position.copy(spat.home); g.rotation.y = 0.0; scene.add(g);
  spat.item = addItem({
    id: 'spatula', prio: 4, hits: [], enabled: () => !S.serving,
    down(e, d) { spat.mode = 'held'; spat.samples = []; spat.lastAng = null; Snd.tick(); spat.downAt = performance.now(); },
    move(e, d) { spatMove(e, d); },
    up(e, d) {
      spat.mode = 'home'; spat.target.copy(spat.home); spat.samples = [];
      if (!d.moved) { const f = pan.food; if (f && spat.inPan) tryFlip(f, true); }
    }
  });
  const h1 = hitMesh(new THREE.BoxGeometry(1.5, 0.7, 1.1), spat.item, 0.1, 0.1, 0);
  const h2 = hitMesh(new THREE.BoxGeometry(1.8, 0.5, 0.5), spat.item, 1.8, 0.3, 0);
  g.add(h1, h2); spat.item.hits.push(h1, h2);
})();
function spatMove(e, d) {
  let h = planeHit(e, 0.95); if (!h) return;
  const pc = pan.g.position;
  const inPan = Math.hypot(h.x - pc.x, h.z - pc.z) < 1.25 && !pan.dragging;
  let y = 0.95;
  if (inPan) { const h2 = planeHit(e, pc.y + 0.25); if (h2) { h = h2; y = pc.y + 0.25; } }
  spat.inPan = inPan;
  spat.target.set(clamp(h.x, -6, 6), y, clamp(h.z, -2, 2.4));
  spat.samples.push({ t: performance.now(), x: e.clientX, y: e.clientY });
  while (spat.samples.length > 2 && spat.samples[0].t < performance.now() - 320) spat.samples.shift();
  const f = pan.food;
  if (inPan && f && f.where === 'pan' && f.flipT < 0 && !f.scr && f.anim >= 1 && !f.dragging) {
    const w = f.g.getWorldPosition(new THREE.Vector3());
    if (Math.hypot(h.x - w.x, h.z - w.z) < f.R + 0.35 && spat.samples.length > 3) {
      const a = spat.samples[0], b = spat.samples[spat.samples.length - 1];
      const dy = b.y - a.y, dx = b.x - a.x, dt = (b.t - a.t) / 1000, net = Math.hypot(dx, dy);
      let path = 0; for (let i = 1; i < spat.samples.length; i++) path += Math.hypot(spat.samples[i].x - spat.samples[i - 1].x, spat.samples[i].y - spat.samples[i - 1].y);
      const sc = innerHeight / 800;
      if (dy < -90 * sc && Math.abs(dx) < Math.abs(dy) * 0.9 && path < net * 1.5 && net / dt > 330 * sc) { spat.samples = []; tryFlip(f, false); }
    }
  }
}

// ---------------------------------------------------------------- food
const WHITE_RAW = [214, 226, 235], WHITE_SET = [255, 252, 243], YEL_RAW = [255, 205, 60], YEL_SET = [255, 236, 150];
const GOLD = [236, 176, 70], BROWN = [150, 88, 34], BLACK = [34, 24, 18];
const lerpC = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const rgb = c => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
function bcol(b) {
  b = Math.max(0, b);
  const c = b < 0.55 ? GOLD : b < 1 ? lerpC(GOLD, BROWN, (b - 0.55) / 0.45) : lerpC(BROWN, BLACK, clamp((b - 1) / 0.5, 0, 1));
  return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp(b / 0.45, 0, 1) * 0.95})`;
}
const curdGeo = new THREE.DodecahedronGeometry(0.14, 0);
const yolkGeo = new THREE.SphereGeometry(0.2, 32, 22);
const moundGeo = new THREE.SphereGeometry(1, 28, 10, 0, TAU, 0, Math.PI / 2);
const domeGeo = new THREE.SphereGeometry(0.24, 16, 10, 0, TAU, 0, Math.PI / 2);
let seedC = 7;
function rnd() { seedC = (seedC * 16807) % 2147483647; return seedC / 2147483647; }

function blobGeo(R, thick) {
  const N = 28, ph = [rnd() * TAU, rnd() * TAU, rnd() * TAU], pts = [];
  for (let i = 0; i < N; i++) {
    const a = i / N * TAU, r = R * (1 + 0.1 * Math.sin(a * 2 + ph[0]) + 0.07 * Math.sin(a * 3 + ph[1]) + 0.04 * Math.sin(a * 5 + ph[2]));
    pts.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
  }
  const g = new THREE.ExtrudeGeometry(new THREE.Shape(pts), { depth: thick, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.03, bevelSegments: 2, curveSegments: 1 });
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / (2 * R * 1.3) + 0.5, -pos.getZ(i) / (2 * R * 1.3) + 0.5);
  return g;
}

function makeFood(lx, lz) {
  const f = { eggs: 1, set: 0, yolk: 0, brown: [0, 0], top: 0, flips: 0, torn: false, yolkBroken: false, scr: false, scrMix: 0,
    stir: 0, recentStir: 0, rough: 0, salt: 0, pepper: 0, where: 'pan', anim: 0, flipT: -1, dragging: false, dirty: true, texT: 0, R: 0.62 };
  f.g = new THREE.Group(); f.g.position.set(lx, 0.13, lz);
  f.inner = new THREE.Group(); f.g.add(f.inner);
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; f.ctx = cv.getContext('2d');
  f.tex = new THREE.CanvasTexture(cv); f.tex.encoding = THREE.sRGBEncoding;
  f.mat = new THREE.MeshPhysicalMaterial({ map: f.tex, transparent: true, opacity: 0.6, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  f.yolkMat = new THREE.MeshPhysicalMaterial({ color: 0xffb81c, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.03 });
  f.moundMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.2, depthWrite: false });
  f.mound = new THREE.Mesh(moundGeo, f.moundMat); f.mound.renderOrder = 2; f.inner.add(f.mound);
  f.yolks = [new THREE.Mesh(yolkGeo, f.yolkMat), new THREE.Mesh(yolkGeo, f.yolkMat)];
  f.yolks.forEach(y => { y.castShadow = true; f.inner.add(y); });
  f.yolks[1].visible = false;
  f.domeMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.35, clearcoat: 0.6 });
  f.dome = new THREE.Mesh(domeGeo, f.domeMat); f.dome.visible = false; f.inner.add(f.dome);
  f.curdMat = new THREE.MeshPhysicalMaterial({ color: 0xffd84a, roughness: 0.35, clearcoat: 0.4, clearcoatRoughness: 0.3 });
  f.curds = [];
  for (let i = 0; i < 16; i++) {
    const c = new THREE.Mesh(curdGeo, f.curdMat);
    const a = i * 2.399, r = 0.1 + 0.62 * Math.sqrt((i + 0.5) / 16);
    c.userData = { a, r, s: 0.7 + rnd() * 0.7 };
    c.scale.set(c.userData.s, c.userData.s * 0.6, c.userData.s); c.visible = false; c.castShadow = true;
    f.inner.add(c); f.curds.push(c);
  }
  f.specks = { salt: speckPoints(0xffffff), pepper: speckPoints(0x2b2322) };
  f.g.add(f.specks.salt.pts, f.specks.pepper.pts);
  buildBlob(f);
  f.item = addItem({
    id: 'food', prio: 2, food: f, hits: [], enabled: () => f.anim >= 1 && f.flipT < 0 && !S.serving,
    down(e, d) { foodPick(f); d.sx0 = e.clientX; },
    move(e) { const h = planeHit(e, 1.0); if (h) f.pos.set(h.x, 1.0, h.z); },
    up() { foodDrop(f); }
  });
  const hm = hitMesh(new THREE.CylinderGeometry(1, 1, 0.5, 14), f.item, 0, 0.2, 0);
  f.g.add(hm); f.item.hits.push(hm); f.hitM = hm; hm.scale.set(f.R * 1.1, 1, f.R * 1.1);
  f.pos = new THREE.Vector3();
  drawFood(f);
  return f;
}
function speckPoints(col) {
  const n = 140, geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setDrawRange(0, 0);
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: col, size: 0.055, sizeAttenuation: true }));
  pts.frustumCulled = false;
  return { pts, n, c: 0 };
}
function buildBlob(f) {
  f.R = 0.62 * (f.eggs > 1 ? 1.3 : 1);
  if (f.blob) { f.inner.remove(f.blob); f.blob.geometry.dispose(); }
  f.blob = new THREE.Mesh(blobGeo(f.R, 0.06), f.mat); f.blob.castShadow = true; f.blob.receiveShadow = true;
  f.inner.add(f.blob);
  f.hitM && f.hitM.scale.set(f.R * 1.1, 1, f.R * 1.1);
  if (f.eggs > 1) { f.yolks[0].position.set(-0.24, 0, 0.08); f.yolks[1].position.set(0.26, 0, -0.1); f.yolks[1].visible = true; }
  else { f.yolks[0].position.set(-0.05, 0, 0.03); }
  f.dome.position.copy(f.yolks[0].position);
  f.mound.scale.set(f.R * 0.7, 0.085, f.R * 0.7); f.mound.position.y = 0.07;
  f.dirty = true;
}
function drawFood(f) {
  const c = f.ctx, S = 128;
  let base = lerpC(WHITE_RAW, WHITE_SET, clamp(f.set, 0, 1));
  if (f.scrMix > 0) base = lerpC(base, lerpC(YEL_RAW, YEL_SET, clamp((f.set + f.yolk) / 2, 0, 1)), f.scrMix);
  c.fillStyle = rgb(base); c.fillRect(0, 0, S, S);
  if (f.yolkBroken && f.scrMix < 1) {
    const g = c.createRadialGradient(64, 64, 3, 64, 64, 34);
    g.addColorStop(0, `rgba(255,185,40,${0.85 * (1 - f.scrMix)})`); g.addColorStop(1, 'rgba(255,185,40,0)');
    c.fillStyle = g; c.fillRect(0, 0, S, S);
  }
  const fb = f.brown[f.top], rb = Math.max(f.brown[0], f.brown[1]);
  const g = c.createRadialGradient(64, 64, 0, 64, 64, 52);
  g.addColorStop(0, bcol(fb * 0.6)); g.addColorStop(0.5, bcol(fb * 0.75));
  g.addColorStop(0.8, bcol(Math.max(fb, rb * 0.9))); g.addColorStop(1, bcol(Math.max(fb, rb * 1.4)));
  c.fillStyle = g; c.fillRect(0, 0, S, S);
  f.tex.needsUpdate = true;
  f.mat.opacity = f.scrMix > 0 ? 1 : lerp(0.58, 1, clamp(f.set * 1.2, 0, 1));
  // yolks
  const y = clamp(f.yolk, 0, 1);
  const yc = lerpC([255, 172, 22], [247, 211, 108], y);
  f.yolkMat.color.setRGB(yc[0] / 255, yc[1] / 255, yc[2] / 255); f.yolkMat.color.convertSRGBToLinear();
  f.yolkMat.roughness = lerp(0.1, 0.7, y);
  const sy = (0.66 - 0.24 * y) * (f.yolkBroken ? 0.45 : 1), sxz = f.yolkBroken ? 1.55 : 1;
  const show = f.top === 0 && f.scrMix < 1;
  f.yolks.forEach((m, i) => {
    m.visible = show && (i === 0 || f.eggs > 1);
    const k = 1 - f.scrMix;
    m.scale.set(sxz * k, sy * k, sxz * k); m.position.y = 0.06 + 0.2 * sy * 0.45;
  });
  f.dome.visible = f.top === 1 && f.scrMix < 1;
  f.mound.visible = f.scrMix < 1;
  { const mc = lerpC(base, GOLD, clamp(fb, 0, 1) * 0.6); f.moundMat.color.setRGB(mc[0] / 255, mc[1] / 255, mc[2] / 255); f.moundMat.color.convertSRGBToLinear(); f.moundMat.opacity = f.mat.opacity * 0.55; }
  const dc = lerpC(base, GOLD, clamp(fb, 0, 1) * 0.75);
  f.domeMat.color.setRGB(dc[0] / 255, dc[1] / 255, dc[2] / 255); f.domeMat.color.convertSRGBToLinear();
  f.dome.scale.set(1, 0.5 * sy / 0.66, 1);
  // curds
  const cc = lerpC(YEL_RAW, [250, 232, 150], clamp((f.set + f.yolk) / 2, 0, 1));
  const cb = lerpC(cc, BROWN, clamp(f.brown[0] * 0.8, 0, 1));
  const cb2 = lerpC(cb, BLACK, clamp((f.brown[0] - 1) / 0.6, 0, 1));
  f.curdMat.color.setRGB(cb2[0] / 255, cb2[1] / 255, cb2[2] / 255); f.curdMat.color.convertSRGBToLinear();
  f.curdMat.roughness = lerp(0.3, 0.8, clamp(f.yolk, 0, 1));
  const n = f.scr ? Math.round(16 * clamp(0.25 + f.stir / (TAU * 5), 0, 1)) : 0;
  f.curds.forEach((m, i) => {
    m.visible = i < n;
    const u = m.userData, a = u.a + f.stir * 0.15, r = u.r * (f.R / 0.62) * 0.9;
    m.position.set(Math.cos(a) * r, 0.1 + (i % 3) * 0.03, Math.sin(a) * r);
  });
  f.blob.visible = true;
  f.dirty = false;
}
function addEggToPan(lx, lz) {
  Snd.splat();
  if (pan.food && canTakeEgg()) {
    const f = pan.food; f.eggs = 2; buildBlob(f); f.anim = Math.min(f.anim, 0.4);
    f.yolk = f.yolk * 0.5; f.set *= 0.5; f.dropFrom = 0.9; return;
  }
  const f = makeFood(lx, lz); f.dropFrom = 1.0; f.anim = 0;
  pan.food = f; pan.g.add(f.g); f.where = 'pan'; f.base = 0.13;
  f.g.position.y = 1.1; f.g.scale.set(0.4, 1, 0.4);
}
function foodPick(f) {
  f.dragging = true; ach.moved = true;
  if (f.where === 'pan') pan.food = null; else plate.food = null;
  const w = f.g.getWorldPosition(new THREE.Vector3());
  scene.attach(f.g);
  f.pos.copy(w); f.pos.y = 1.0; f.from = f.where; f.where = 'hand';
  Snd.scrape();
}
function foodDrop(f) {
  f.dragging = false;
  const w = f.g.position;
  const dPlate = Math.hypot(w.x - plate.g.position.x, w.z - plate.g.position.z);
  const dPan = Math.hypot(w.x - pan.g.position.x, w.z - pan.g.position.z);
  let tgt;
  if (dPlate < 1.7 && dPlate <= dPan) tgt = 'plate';
  else if (dPan < 1.9) tgt = 'pan';
  else tgt = f.from;
  if ((tgt === 'plate' && plate.food) || (tgt === 'pan' && pan.food)) tgt = f.from;
  const parent = tgt === 'plate' ? plate.g : pan.g;
  const lp = parent.worldToLocal(w.clone());
  const maxR = tgt === 'plate' ? 0.55 : 0.55;
  const r = Math.hypot(lp.x, lp.z), m = Math.min(r, maxR);
  const lx = r > 0.001 ? lp.x / r * m : 0, lz = r > 0.001 ? lp.z / r * m : 0;
  // keep rotation/scale clean when parented
  f.g.rotation.set(0, 0, 0);
  parent.add(f.g); f.g.rotation.y = -parent.rotation.y;
  f.g.position.copy(parent.worldToLocal(w.clone()));
  f.settle = { s: f.g.position.clone(), to: V(lx, tgt === 'plate' ? 0.07 : 0.13, lz), t: 0 };
  f.where = tgt;
  if (tgt === 'plate') { plate.food = f; Snd.clink(); ach.plated = true; } else { pan.food = f; Snd.splat(); }
}
function destroyFood(f) {
  if (!f) return;
  const i = items.indexOf(f.item); if (i >= 0) items.splice(i, 1);
  if (f.g.parent) f.g.parent.remove(f.g);
  f.blob.geometry.dispose(); f.tex.dispose();
}

// flipping
function tryFlip(f, byTap) {
  if (f.flipT >= 0 || f.scr || f.where !== 'pan' || f.anim < 1) return;
  const stick = pan.butter.melt > 0.3 ? 0.55 : 0.8;
  if (f.set < stick) { f.torn = true; if (!f.yolkBroken) { f.yolkBroken = true; } Snd.sad(); toast(pan.butter.melt > 0.3 ? 'Too early — the egg tore!' : 'It stuck to the pan and tore!'); }
  f.flipT = 0; Snd.whoosh(); ach.flipped = true; f.dirty = true;
}
function updateFlip(f, dt) {
  const D = 0.62;
  f.flipT += dt;
  const k = clamp(f.flipT / D, 0, 1);
  f.inner.rotation.x = -k * Math.PI;
  f.g.position.y = f.base + Math.sin(k * Math.PI) * 1.0;
  if (k >= 0.5 && !f.swapped) { f.swapped = true; f.top = 1 - f.top; f.dirty = true; f.inner.scale.y = -1; }
  if (k >= 1) {
    f.flipT = -1; f.swapped = false; f.flips++; f.inner.rotation.x = 0; f.inner.scale.y = 1;
    f.g.position.y = f.base; Snd.splat(); f.dirty = true;
  }
}

// ---------------------------------------------------------------- cooking
function cookFood(f, dt, T) {
  if (f.where !== 'pan' || f.dragging || f.flipT >= 0 || f.anim < 1) return;
  const r = Math.max(0, T - 70) / 1800;
  const lub = pan.butter.melt > 0.3 ? 0.6 : 1;
  const bb = Math.max(0, T - 125) / 3500 * lub;
  f.recentStir = Math.max(0, f.recentStir - dt);
  if (f.scr) {
    f.set = Math.min(1.3, f.set + r * dt * 1.2);
    f.yolk = Math.min(1.3, f.yolk + r * 0.95 * dt);
    f.brown[0] += bb * (f.recentStir > 0 ? 0.25 : 1.4) * dt;
    f.scrMix = Math.min(1, f.scrMix + dt * 1.5);
  } else {
    f.set = Math.min(1, f.set + r * dt);
    f.yolk = Math.min(1.3, f.yolk + r * (f.set > 0.9 ? 0.9 : 0.2) * (f.top === 1 ? 1.8 : 1) * dt);
    f.brown[1 - f.top] += bb * dt;
    f.brown[f.top] += bb * 0.05 * dt;
  }
  f.dirty = true;
}
function foodStatus(f) {
  const b = Math.max(f.brown[0], f.brown[1]);
  if (b > 0.9) return ['Burning!', 's-burn'];
  if (f.scr) { const d = (f.set + f.yolk) / 2; return d < 0.15 ? ['Raw', 's-raw'] : d < 0.55 ? ['Cooking', 's-cook'] : d < 1.0 ? ['Ready', 's-ready'] : ['Dry!', 's-cook']; }
  if (f.set < 0.15) return ['Raw', 's-raw'];
  if (f.set < 0.9) return ['Cooking', 's-cook'];
  return f.yolk < 0.9 ? ['Ready', 's-ready'] : ['Overdone', 's-cook'];
}

// ---------------------------------------------------------------- seasoning grains
const grains = [];
const grainPts = {};
['salt', 'pepper'].forEach(k => {
  const n = LOW ? 120 : 220, geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3).fill(-50), 3));
  const p = new THREE.Points(geo, new THREE.PointsMaterial({ color: k === 'salt' ? 0xffffff : 0x2b2322, size: 0.07, sizeAttenuation: true }));
  p.frustumCulled = false; scene.add(p); grainPts[k] = { p, n };
});
function emitGrain(kind, pos) {
  grains.push({ k: kind, x: pos.x + (Math.random() - 0.5) * 0.12, y: pos.y, z: pos.z + (Math.random() - 0.5) * 0.12, vx: (Math.random() - 0.5) * 0.4, vy: -0.4, vz: (Math.random() - 0.5) * 0.4 });
}
function updateGrains(dt) {
  const foods = [pan.food, plate.food].filter(f => f && f.where !== 'hand');
  const fpos = foods.map(f => f.g.getWorldPosition(new THREE.Vector3()));
  for (let i = grains.length - 1; i >= 0; i--) {
    const g = grains[i];
    g.vy -= 9 * dt; g.x += g.vx * dt; g.y += g.vy * dt; g.z += g.vz * dt;
    let dead = false;
    for (let j = 0; j < foods.length; j++) {
      const f = foods[j], w = fpos[j];
      if (g.y < w.y + 0.2 && Math.hypot(g.x - w.x, g.z - w.z) < f.R) {
        f[g.k]++; if (g.k === 'salt') ach.seasoned = true; else ach.seasoned = true;
        const sp = f.specks[g.k];
        if (sp.c < sp.n) {
          const l = f.g.worldToLocal(V(g.x, 0, g.z));
          const near = Math.hypot(l.x - f.yolks[0].position.x, l.z - f.yolks[0].position.z) < 0.18 && f.top === 0 && f.scrMix < 1;
          const a = sp.pts.geometry.attributes.position;
          a.setXYZ(sp.c, l.x, near ? 0.19 : 0.1 + Math.random() * 0.02, l.z); sp.c++;
          a.needsUpdate = true; sp.pts.geometry.setDrawRange(0, sp.c);
        }
        dead = true; break;
      }
    }
    if (g.y < 0.15) dead = true;
    if (dead) grains.splice(i, 1);
  }
  ['salt', 'pepper'].forEach(k => {
    const gp = grainPts[k], a = gp.p.geometry.attributes.position; let c = 0;
    for (const g of grains) if (g.k === k && c < gp.n) { a.setXYZ(c++, g.x, g.y, g.z); }
    for (let i = c; i < gp.n; i++) a.setXYZ(i, 0, -50, 0);
    a.needsUpdate = true;
  });
}

// ---------------------------------------------------------------- particles (steam / smoke)
const sprites = [];
(function () {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const c = cv.getContext('2d'), g = c.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(cv);
  for (let i = 0; i < (LOW ? 14 : 30); i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false }));
    s.visible = false; s.userData = { life: 0, max: 1, vy: 1, base: 0.5, op: 0.4 }; scene.add(s); sprites.push(s);
  }
})();
function puff(x, y, z, smoke) {
  const s = sprites.find(p => !p.visible); if (!s) return;
  s.visible = true; s.position.set(x, y, z);
  s.material.color.setHex(smoke ? 0x555555 : 0xffffff);
  Object.assign(s.userData, { life: 0, max: smoke ? 2.2 : 1.6, vy: smoke ? 1.0 : 0.8, base: smoke ? 0.5 : 0.4, op: smoke ? 0.5 : 0.35 });
  s.scale.setScalar(s.userData.base);
}
function updateSprites(dt) {
  for (const s of sprites) {
    if (!s.visible) continue;
    const u = s.userData; u.life += dt;
    const k = u.life / u.max;
    if (k >= 1) { s.visible = false; continue; }
    s.position.y += u.vy * dt; s.position.x += Math.sin(u.life * 3 + s.id) * 0.1 * dt;
    s.scale.setScalar(u.base + k * 0.9); s.material.opacity = u.op * Math.sin(k * Math.PI);
  }
}

// ---------------------------------------------------------------- camera / input
const orbit = { az: 0, pol: 0.8, rad: 13.5, tx: 0, tz: 0.4, taz: 0, tpol: 0.8, trad: 13.5, ttx: 0, ttz: 0.4, moved: 0 };
function viewDefaults() {
  const asp = innerWidth / innerHeight, portrait = asp < 1;
  const t = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
  const need = (portrait ? 11.8 : 11.4) / (2 * t * Math.max(asp, 0.3));
  return { rad: clamp(Math.max(portrait ? 12 : 11.5, need), 7, 25), pol: portrait ? 0.62 : 0.8, tz: portrait ? 0.6 : 0.5 };
}
function resetView() {
  const v = viewDefaults();
  orbit.taz = 0; orbit.tpol = v.pol; orbit.trad = v.rad; orbit.ttx = 0; orbit.ttz = v.tz;
}
function updateCam(dt) {
  const k = 1 - Math.exp(-12 * dt);
  orbit.az = lerp(orbit.az, orbit.taz, k); orbit.pol = lerp(orbit.pol, orbit.tpol, k); orbit.rad = lerp(orbit.rad, orbit.trad, k);
  orbit.tx = lerp(orbit.tx, orbit.ttx, k); orbit.tz = lerp(orbit.tz, orbit.ttz, k);
  const sp = Math.sin(orbit.pol);
  cam.position.set(orbit.tx + orbit.rad * sp * Math.sin(orbit.az), 0.2 + orbit.rad * Math.cos(orbit.pol), orbit.tz + orbit.rad * sp * Math.cos(orbit.az));
  cam.lookAt(orbit.tx, 0.2, orbit.tz);
}
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
  if (!S.userZoomed) { const v = viewDefaults(); orbit.trad = v.rad; orbit.ttz = v.tz; if (!S.userTilted) orbit.tpol = v.pol; }
}
addEventListener('resize', resize); addEventListener('orientationchange', () => setTimeout(resize, 200));

const ptrs = new Map();
let drag = null, pinch = null;
const cv = $('#c');
cv.addEventListener('contextmenu', e => e.preventDefault());
function pick(e) {
  ray.setFromCamera(ndcOf(e), cam);
  const objs = [];
  items.forEach(it => { if (it.enabled()) it.hits.forEach(h => objs.push(h)); });
  const hits = ray.intersectObjects(objs, false);
  let best = null, bp = -1;
  for (const h of hits) { const it = h.object.userData.item; if (it && it.prio > bp) { bp = it.prio; best = it; } }
  return best;
}
cv.addEventListener('pointerdown', e => {
  e.preventDefault();
  Snd.init(); Snd.resume();
  try { cv.setPointerCapture(e.pointerId); } catch (_) {}
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, button: e.button });
  if (!S.playing || S.paused) return;
  if (ptrs.size === 1) {
    const it = e.button === 2 ? null : pick(e);
    if (it) {
      drag = { item: it, pid: e.pointerId, sx: e.clientX, sy: e.clientY, moved: false };
      rawDrag = drag; it.down(e, drag);
    }
  } else if (ptrs.size === 2 && !drag) {
    const [a, b] = [...ptrs.values()];
    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), rad: orbit.trad, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  }
});
cv.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  if (!S.playing || S.paused) return;
  if (drag && e.pointerId === drag.pid) {
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 9) drag.moved = true;
    rawDrag = drag; drag.item.move(e, drag);
  } else if (!drag) {
    if (ptrs.size === 1) {
      if (p.button === 2 || e.shiftKey) panCam(dx, dy);
      else { orbit.taz -= dx * 0.006; orbit.tpol = clamp(orbit.tpol - dy * 0.005, 0.12, 1.3); orbit.moved += Math.abs(dx) + Math.abs(dy); S.userTilted = true; if (orbit.moved > 60) ach.view = true; }
    } else if (ptrs.size === 2 && pinch) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      orbit.trad = clamp(pinch.rad * pinch.d / Math.max(d, 10), 6, 26); S.userZoomed = true;
      panCam(mx - pinch.mx, my - pinch.my); pinch.mx = mx; pinch.my = my; ach.view = true;
    }
  }
});
function panCam(dx, dy) {
  const s = orbit.rad * 0.0016;
  const rx = Math.cos(orbit.az), rz = -Math.sin(orbit.az), fx = Math.sin(orbit.az), fz = Math.cos(orbit.az);
  orbit.ttx = clamp(orbit.ttx - (rx * dx + fx * dy) * s, -4, 4); orbit.ttz = clamp(orbit.ttz - (rz * dx + fz * dy) * s, -3, 4);
}
function endPtr(e) {
  ptrs.delete(e.pointerId);
  if (drag && e.pointerId === drag.pid) { const d = drag; drag = null; rawDrag = d; if (S.playing) d.item.up(e, d); }
  if (ptrs.size < 2) pinch = null;
  Snd.resume();
}
cv.addEventListener('pointerup', endPtr);
cv.addEventListener('pointercancel', endPtr);
cv.addEventListener('wheel', e => { e.preventDefault(); orbit.trad = clamp(orbit.trad * (1 + e.deltaY * 0.001), 6, 26); S.userZoomed = true; ach.view = true; }, { passive: false });
['gesturestart', 'gesturechange'].forEach(n => document.addEventListener(n, e => e.preventDefault()));
document.addEventListener('touchmove', e => { if (!e.target.closest('.ov')) e.preventDefault(); }, { passive: false });

// ---------------------------------------------------------------- game state & UI
const S = { mode: 'menu', playing: false, paused: false, serving: false, orders: [], idx: 0, results: [], total: 0, userZoomed: false, userTilted: false };
const ach = {};
const RECIPES = {
  sunny: { name: 'Sunny-side up', icon: '🍳' },
  overeasy: { name: 'Over-easy', icon: '🔄' },
  scrambled: { name: 'Scrambled', icon: '🥣' }
};
const DONE = {
  runny: { name: 'Runny yolk', t: 0.18 }, medium: { name: 'Medium yolk', t: 0.5 }, firm: { name: 'Firm yolk', t: 0.85 },
  soft: { name: 'Soft & creamy', t: 0.55 }, mediumS: { name: 'Medium', t: 0.78 }, dry: { name: 'Well done', t: 1.0 }
};
const CUSTOMERS = [['🐱', 'Mochi'], ['🐶', 'Biscuit'], ['🐰', 'Clover'], ['🐻', 'Honey'], ['🦊', 'Maple'], ['🐼', 'Bao'], ['🐸', 'Pip']];
function makeOrders() {
  const extra = [
    { recipe: 'overeasy', done: 'medium', season: ['salt', 'pepper'] },
    { recipe: 'scrambled', done: 'dry', season: ['pepper'] },
    { recipe: 'sunny', done: 'firm', season: ['pepper'] }
  ];
  const list = [
    { recipe: 'sunny', done: 'runny', season: ['salt'] },
    { recipe: 'sunny', done: 'medium', season: ['salt', 'pepper'] },
    { recipe: 'overeasy', done: 'runny', season: ['salt'] },
    { recipe: 'scrambled', done: 'soft', season: ['salt'] },
    extra[Math.floor(Math.random() * extra.length)]
  ];
  const cs = CUSTOMERS.slice().sort(() => Math.random() - 0.5);
  return list.map((o, i) => Object.assign(o, { who: cs[i] }));
}
let toastT = 0;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
let hintDirty = true; function hintBump() { hintDirty = true; }
const show = (id, v) => $(id).classList[v ? 'add' : 'remove']('show');

function renderOrder() {
  const c = $('#orderCard');
  if (S.mode === 'free') {
    c.innerHTML = `<div class="row"><div class="av">👩‍🍳</div><div><div class="cnt">Free Cook</div><div class="nm">Experiment!</div></div></div><div class="dn">No timer, no penalties. Press Serve to see how you did.</div>`;
    return;
  }
  const o = S.orders[S.idx];
  c.innerHTML = `<div class="row"><div class="av">${o.who[0]}</div><div><div class="cnt">Order ${S.idx + 1} / ${S.orders.length} · ${o.who[1]}</div><div class="nm">${RECIPES[o.recipe].icon} ${RECIPES[o.recipe].name}</div></div></div>
  <div class="dn">${DONE[o.done].name}</div>
  <div class="chips">${o.season.map(s => `<span class="chip" data-s="${s}">${s === 'salt' ? '🧂 Salt' : '🌶️ Pepper'}</span>`).join('')}</div>`;
}
function renderTut() {
  const t = $('#tut');
  if (settings.tutorialDone || !S.playing) { t.style.display = 'none'; return; }
  const steps = [['view', 'Drag empty space to look around'], ['moved', 'Move the pan, plate or an item'], ['butter', 'Drop butter into the pan'], ['heat', 'Turn up the heat'],
    ['cracked', 'Egg over pan → tap → drag sideways'], ['flipped', 'Flip (swipe up) or stir in circles'], ['plated', 'Move food to the plate'], ['seasoned', 'Add salt or pepper'], ['served', 'Press Serve']];
  const done = steps.filter(s => ach[s[0]]).length;
  t.style.display = '';
  const nxt = steps.find(s => !ach[s[0]]);
  t.innerHTML = `<h4>Tutorial ${done}/${steps.length} <b id="tutX">✕</b></h4><div class="nx">👉 ${nxt ? nxt[1] : 'All done!'}</div>`;
  $('#tutX').onclick = () => { settings.tutorialDone = true; saveSettings(); renderTut(); };
  if (done === steps.length) { settings.tutorialDone = true; saveSettings(); toast('Tutorial complete! 🎉'); setTimeout(renderTut, 1200); }
}
let tutSig = '';

function hintText() {
  if (S.serving) return '';
  const f = pan.food, o = S.mode === 'orders' ? S.orders[S.idx] : null;
  if (!pan.onBurner && !pan.dragging && !f) return 'Drag the pan back onto the burner.';
  if (f && f.where === 'pan') {
    const b = Math.max(f.brown[0], f.brown[1]);
    if (b > 0.9) return 'Burning! Lower the heat or take it off the pan.';
    if (f.torn) return 'The egg tore — you can still plate it, or Clear and retry.';
    if (f.scr) { const d = (f.set + f.yolk) / 2; return d < 0.5 ? 'Keep stirring to make soft curds.' : 'Looks good! Drag it onto the plate when it\'s how you like it.'; }
    if (f.stir > 0.5) return 'Keep stirring in circles to scramble.';
    if (!o || o.recipe !== 'scrambled') {
      if (f.set < 0.9) {
        if (o && o.recipe === 'overeasy' && f.flips === 0 && f.set >= 0.6) return 'Drag the spatula under the egg and swipe up to flip!';
        if (heat < 0.05) return 'The pan is cold — turn up the heat.';
        return 'Wait for the whites to turn opaque…';
      }
      if (o && o.recipe === 'overeasy' && f.flips === 0) return 'Whites are set — swipe the spatula up to flip!';
      return 'Cook the yolk to taste, then drag the egg onto the plate.';
    }
    return 'Drag the spatula in circles to scramble the egg.';
  }
  if (f && f.where === 'hand') return 'Drop it on the plate!';
  if (plate.food) {
    const need = o ? o.season.filter(s => plate.food[s] < 12) : [];
    if (need.length) return `Sprinkle ${need.join(' & ')} on the egg, then press Serve.`;
    return 'Looks tasty! Press Serve.';
  }
  if (egg.state === 'cracked') return 'Drag the egg sideways (or tap again) to open it.';
  if (egg.state === 'hover') return 'Tap the egg to crack it.';
  if (pan.butter.amount === 0) return 'Add butter: drag it into the pan.';
  if (heat < 0.05) return 'Turn the stove dial (or HEAT slider) up.';
  if (pan.temp < 90) return 'Letting the pan warm up…';
  return 'Drag an egg over the pan, then tap it to crack.';
}

function refreshUI(dt) {
  // hint
  const h = $('#hint'), txt = settings.guide ? hintText() : '';
  if (h.textContent !== txt) h.textContent = txt;
  h.classList[txt ? 'remove' : 'add']('hide');
  $('#tempRead').textContent = Math.round(pan.temp) + '°';
  const sig = JSON.stringify(ach) + S.playing;
  if (sig !== tutSig) { tutSig = sig; renderTut(); }
  // seasoning chips
  if (S.mode === 'orders') {
    document.querySelectorAll('#orderCard .chip').forEach(ch => { const s = ch.dataset.s; ch.classList[plate.food && plate.food[s] >= 12 ? 'add' : 'remove']('ok'); });
  }
  $('#btnServe').disabled = !(plate.food && !S.serving);
  // glow tray
  const gl = (a, v) => { const b = document.querySelector(`.tb[data-act="${a}"]`); b && b.classList[v ? 'add' : 'remove']('glow'); };
  const nh = txt;
  gl('butter', settings.guide && /butter/i.test(nh)); gl('egg', settings.guide && /egg over|drag an egg/i.test(nh));
  gl('spatula', settings.guide && /spatula/i.test(nh)); gl('salt', settings.guide && /salt/i.test(nh)); gl('pepper', settings.guide && /pepper/i.test(nh));
  // chip over food
  const chip = $('#chip');
  const f = pan.food && pan.food.where === 'pan' ? pan.food : (plate.food && plate.food.where === 'plate' ? null : null);
  if (settings.guide && f && S.playing && !S.paused) {
    const w = f.g.getWorldPosition(new THREE.Vector3()); w.y += 1.1;
    const p = w.project(cam);
    chip.style.display = 'block';
    chip.style.left = ((p.x * 0.5 + 0.5) * innerWidth) + 'px'; chip.style.top = ((-p.y * 0.5 + 0.5) * innerHeight) + 'px';
    const st = foodStatus(f), b = Math.max(f.brown[0], f.brown[1]);
    const pct = v => Math.round(clamp(v, 0, 1) * 100);
    chip.innerHTML = `<div class="st ${st[1]}">${st[0]}</div><div class="bars">` +
      (f.scr ? `<span>Cook</span><div class="bar"><i style="width:${pct((f.set + f.yolk) / 2)}%;background:#f2c14e"></i></div>` :
        `<span>White</span><div class="bar"><i style="width:${pct(f.set)}%;background:#9ad0ea"></i></div><span>Yolk</span><div class="bar"><i style="width:${pct(f.yolk)}%;background:#f5a623"></i></div>`) +
      `<span>Burn</span><div class="bar"><i style="width:${pct(b / 1.4)}%;background:#d6322c"></i></div></div>`;
  } else chip.style.display = 'none';
  $('#scorePill').textContent = S.mode === 'free' ? '🍳 Free' : '★ ' + S.total;
}

// ---- scoring
const FRIED_DESC = y => y < 0.3 ? 'runny' : y < 0.65 ? 'medium' : 'firm';
function scoreFood(order, f) {
  const notes = { recipe: '', done: '', cond: '', pres: '' };
  const actual = f.scr ? 'scrambled' : (f.top === 1 ? 'overeasy' : 'sunny');
  const R = order.recipe;
  let rec;
  if (actual === R) {
    if (!f.scr && f.yolkBroken) { rec = 12; notes.recipe = `${RECIPES[R].name}, but the yolk broke`; } else { rec = 30; notes.recipe = `Perfect ${RECIPES[R].name}!`; }
  } else if (actual !== 'scrambled' && R !== 'scrambled') { rec = 10; notes.recipe = `Made ${RECIPES[actual].name} instead`; }
  else { rec = 4; notes.recipe = `Made ${RECIPES[actual].name} instead`; }
  const dt = DONE[order.done].t;
  let don;
  if (f.scr) {
    const d = (f.set + f.yolk) / 2, diff = Math.abs(d - dt);
    don = Math.round(40 * (1 - clamp((diff - 0.1) / 0.35, 0, 1)));
    notes.done = diff < 0.12 ? 'Spot on' : d < dt ? 'Undercooked' : 'Overcooked';
    if (R !== 'scrambled') don = Math.round(don * 0.5);
  } else {
    const diff = Math.abs(f.yolk - dt);
    const ys = 25 * (1 - clamp((diff - 0.12) / 0.33, 0, 1));
    const ws = f.set >= 0.92 ? 15 : 15 * Math.pow(f.set / 0.92, 2);
    don = Math.round(ys + ws);
    notes.done = `Yolk ${FRIED_DESC(f.yolk)}${diff < 0.14 ? ' ✓' : ''}` + (f.set < 0.92 ? ', whites runny' : '');
    if (R === 'scrambled') don = Math.round(don * 0.5);
  }
  let cond = 20; const b = Math.max(f.brown[0], f.brown[1]); const cn = [];
  if (b > 0.45) { const p = b < 0.9 ? (b - 0.45) / 0.45 * 6 : b < 1.4 ? 6 + (b - 0.9) / 0.5 * 8 : 20; cond -= p; cn.push(b > 1.2 ? 'burnt' : b > 0.8 ? 'quite brown' : 'a bit crispy'); }
  if (!f.scr && f.yolkBroken && !f.torn) { cond -= 8; cn.push('broken yolk'); }
  if (f.torn) { cond -= 5; cn.push('torn'); }
  if (!f.usedButter) { cond -= 4; cn.push('no butter'); }
  cond = Math.max(0, Math.round(cond));
  notes.cond = cn.length ? cn.join(', ') : 'Beautiful';
  let pres = 0; const pn = [];
  const req = order.season || [];
  if (req.length) {
    req.forEach(s => { const n = f[s]; if (n >= 12) { pres += 6 / req.length * (n > 130 ? 0.5 : 1); pn.push(s + ' ✓' + (n > 130 ? ' (too much)' : '')); } else pn.push('needs ' + s); });
  } else { pres += 6; }
  const dist = Math.hypot(f.g.position.x, f.g.position.z);
  pres += dist < 0.4 ? 4 : dist < 0.75 ? 2 : 1;
  pres = Math.round(pres); notes.pres = pn.join(', ') || 'Nicely plated';
  const total = clamp(rec + don + cond + pres, 0, 100);
  const stars = total >= 85 ? 3 : total >= 60 ? 2 : total >= 30 ? 1 : 0;
  return { rec, don, cond, pres, total, stars, notes };
}
const starHtml = (n, anim) => `<div class="stars">${[0, 1, 2].map(i => `<span class="${i < n ? 'on' : 'off'}${anim && i < n ? ' pop' : ''}" style="animation-delay:${0.25 + i * 0.28}s">★</span>`).join('')}</div>`;

function serve() {
  const f = plate.food; if (!f || S.serving) return;
  S.serving = true; ach.served = true;
  const order = S.mode === 'orders' ? S.orders[S.idx] : null;
  Snd.clink();
  const to = V(plate.g.position.x + 9, 1.2, plate.g.position.z);
  const from = plate.g.position.clone();
  setTimeout(() => {
    Snd.whoosh();
    tween(0.7, k => { plate.g.position.x = lerp(from.x, from.x + 9, k * k); plate.g.position.y = from.y + k * 0.8; }, () => {
      const res = scoreFood(order || { recipe: f.scr ? 'scrambled' : f.top ? 'overeasy' : 'sunny', done: 'runny', season: [] }, f);
      finishServe(order, f, res);
    });
  }, 350);
}
function finishServe(order, f, res) {
  if (S.mode === 'orders') {
    S.results.push(res); S.total += res.total;
    Snd.ding(res.stars); if (!res.stars) Snd.sad();
    const last = S.idx >= S.orders.length - 1;
    $('#resultBody').innerHTML = `<h2>${order.who[0]} ${order.who[1]} says…</h2>
      ${starHtml(res.stars, true)}
      <table class="bd">
      <tr><td>Recipe<small>${res.notes.recipe}</small></td><td>${res.rec}/30</td></tr>
      <tr><td>Doneness<small>${res.notes.done}</small></td><td>${res.don}/40</td></tr>
      <tr><td>Condition<small>${res.notes.cond}</small></td><td>${res.cond}/20</td></tr>
      <tr><td>Seasoning &amp; plating<small>${res.notes.pres}</small></td><td>${res.pres}/10</td></tr></table>
      <div class="tot">${res.total} points</div>
      <div class="btns"><button class="btn" id="rNext">${last ? 'See results 🏆' : 'Next order ▶'}</button></div>`;
    show('#result', true);
    $('#rNext').onclick = () => { show('#result', false); Snd.tick(); if (last) showFinal(); else { S.idx++; nextKitchen(); renderOrder(); } };
  } else {
    const yd = f.scr ? 'scrambled' : `${FRIED_DESC(f.yolk)} yolk`;
    toast(`Yum! ${f.scr ? 'Scrambled' : f.top ? 'Over-easy' : 'Sunny-side up'} · ${yd} · practice score ${res.total}`);
    Snd.ding(res.stars);
    nextKitchen();
  }
}
function nextKitchen() {
  destroyFood(plate.food); plate.food = null;
  destroyFood(pan.food); pan.food = null;
  pan.butter.amount = 0; pan.butter.melt = 0; pan.butter.brown = 0; pan.butter.pat = 0;
  plate.g.position.set(PLATE_HOME.x + 9, 0.02, PLATE_HOME.z);
  plate.tx = PLATE_HOME.x; plate.tz = PLATE_HOME.z;
  const to = V(PLATE_HOME.x, 0.02, PLATE_HOME.z);
  tween(0.6, k => { plate.g.position.x = lerp(PLATE_HOME.x + 9, to.x, ease(k)); }, () => { S.serving = false; });
  resetProps();
}
function resetProps() {
  [egg, butter, salt, pepper, spat].forEach(p => { p.mode = 'home'; p.target.copy(p.home); });
  egg.state = 'bowl'; egg.whole.visible = true; egg.top.visible = egg.bot.visible = egg.crack.visible = false;
  butter.state = 'dish';
  grains.length = 0; hintBump();
}
function clearAll() {
  if (S.serving) return;
  destroyFood(pan.food); pan.food = null; destroyFood(plate.food); plate.food = null;
  pan.butter.amount = 0; pan.butter.melt = 0; pan.butter.brown = 0;
  Snd.splat(); resetProps(); toast('Pan cleared');
}
function showFinal() {
  const avg = S.total / S.orders.length;
  const stars = avg >= 85 ? 3 : avg >= 60 ? 2 : avg >= 30 ? 1 : 0;
  const best = store.get('best', 0); const isBest = S.total > best;
  if (isBest) store.set('best', S.total);
  Snd.ding(stars);
  $('#finalBody').innerHTML = `<div class="big-egg">${stars >= 2 ? '🏆' : '🍳'}</div><h2>Round complete!</h2>
    ${starHtml(stars, true)}
    <div class="tot">${S.total} / ${S.orders.length * 100}</div>
    <p>${S.results.map(r => '★'.repeat(r.stars) + '☆'.repeat(3 - r.stars)).join('  ·  ')}</p>
    <p>${isBest ? '🎉 New best score!' : 'Best: ' + Math.max(best, S.total)}</p>
    <div class="row2"><button class="btn" id="fAgain">Play Again</button><button class="btn butter" id="fFree">Free Cook</button></div>
    <div class="btns"><button class="btn mint" id="fMenu">Main menu</button></div>`;
  show('#final', true);
  $('#fAgain').onclick = () => { show('#final', false); startGame('orders'); };
  $('#fFree').onclick = () => { show('#final', false); startGame('free'); };
  $('#fMenu').onclick = () => { show('#final', false); toMenu(); };
}

function startGame(mode, tutorial) {
  Snd.init();
  S.mode = mode; S.playing = true; S.paused = false; S.serving = false; S.idx = 0; S.results = []; S.total = 0;
  S.orders = mode === 'orders' ? makeOrders() : [];
  Object.keys(ach).forEach(k => delete ach[k]);
  if (tutorial) { settings.tutorialDone = false; saveSettings(); }
  else if (!tutorial && mode === 'free' && store.get('seenTut', false) === false) { /* keep stored state */ }
  destroyFood(pan.food); pan.food = null; destroyFood(plate.food); plate.food = null;
  pan.butter.amount = 0; pan.butter.melt = 0; pan.butter.brown = 0; pan.temp = 25; pan.tx = BUR.x; pan.tz = BUR.z; pan.onBurner = true;
  plate.g.position.set(PLATE_HOME.x, 0.02, PLATE_HOME.z); plate.tx = PLATE_HOME.x; plate.tz = PLATE_HOME.z;
  resetProps(); setHeat(0); ach.heat = false;
  ['#menu', '#how', '#pauseMenu', '#settings', '#result', '#final'].forEach(i => show(i, false));
  $('#hud').hidden = false;
  renderOrder(); resetView(); S.userZoomed = false; S.userTilted = false; tutSig = '';
  hintBump();
}
function toMenu() {
  S.playing = false; S.mode = 'menu'; $('#hud').hidden = true;
  show('#menu', true); show('#pauseMenu', false);
  const b = store.get('best', 0); $('#bestLine').textContent = b ? `🏆 Best round: ${b} / 500` : '';
  Snd.beds(0, 0, 25);
}
function setPaused(p) {
  if (!S.playing && p) return;
  S.paused = p; Snd.setPaused(p);
  show('#pauseMenu', p && S.playing);
  if (p) { drag = null; ptrs.clear(); }
}

// ---- UI wiring
$('#mOrders').onclick = () => startGame('orders');
$('#mFree').onclick = () => startGame('free');
$('#mHow').onclick = () => { Snd.init(); show('#how', true); };
$('#hBack').onclick = () => show('#how', false);
$('#hGo').onclick = () => startGame('free', true);
$('#btnPause').onclick = () => setPaused(true);
$('#pResume').onclick = () => setPaused(false);
$('#pRestart').onclick = () => { setPaused(false); startGame(S.mode); };
$('#pMenu').onclick = () => { setPaused(false); toMenu(); };
$('#btnView').onclick = () => { S.userZoomed = false; S.userTilted = false; resetView(); };
$('#btnSet').onclick = () => { $('#sMusic').value = settings.music; $('#sSfx').value = settings.sfx; $('#sGuide').checked = settings.guide; show('#settings', true); if (S.playing) { S.paused = true; } };
$('#sClose').onclick = () => { show('#settings', false); if (S.playing && !$('#pauseMenu').classList.contains('show')) S.paused = false; };
$('#sMusic').oninput = e => { settings.music = +e.target.value; Snd.setVol(settings.music, settings.sfx); saveSettings(); };
$('#sSfx').oninput = e => { settings.sfx = +e.target.value; Snd.setVol(settings.music, settings.sfx); saveSettings(); Snd.tick(); };
$('#sGuide').onchange = e => { settings.guide = e.target.checked; saveSettings(); };
$('#btnServe').onclick = serve;
$('#btnClear').onclick = clearAll;
document.querySelectorAll('.tb[data-act]').forEach(b => b.addEventListener('click', () => {
  if (!S.playing || S.paused || S.serving) return;
  Snd.init();
  const a = b.dataset.act;
  if (a === 'egg') { if (egg.state === 'bowl') flyEggToPan(); else if (egg.state === 'hover') crackEgg(); }
  else if (a === 'butter') { if (butter.state === 'dish') dropButter(); }
  else if (a === 'salt') autoSeason(salt);
  else if (a === 'pepper') autoSeason(pepper);
  else if (a === 'spatula') { spat.mode = 'held'; spat.target.set(pan.g.position.x - 0.3, 1.2, pan.g.position.z + 1.4); spat.inPan = false; setTimeout(() => { if (!drag || drag.item !== spat.item) { spat.mode = 'home'; spat.target.copy(spat.home); } }, 2500); toast('Drag the spatula into the pan'); }
}));
// heat slider
(function () {
  const tr = $('#heatTrack'); let on = false;
  const setFrom = e => { const r = tr.getBoundingClientRect(); setHeat(clamp(1 - (e.clientY - r.top) / r.height, 0, 1)); };
  tr.addEventListener('pointerdown', e => { e.preventDefault(); Snd.init(); on = true; tr.setPointerCapture(e.pointerId); setFrom(e); });
  tr.addEventListener('pointermove', e => { if (on) setFrom(e); });
  const end = () => { on = false; }; tr.addEventListener('pointerup', end); tr.addEventListener('pointercancel', end);
})();
document.addEventListener('visibilitychange', () => { if (document.hidden && S.playing) setPaused(true); });
addEventListener('blur', () => { if (S.playing && !S.paused && !isTouch) setPaused(true); });
addEventListener('keydown', e => { if (e.key === 'Escape' && S.playing) setPaused(!S.paused); });

// ---------------------------------------------------------------- main update
let sparkT = 0, crackleT = 0, uiT = 0, steamT = 0;
const _v = new THREE.Vector3();
function update(dt) {
  // tweens
  for (let i = tweens.length - 1; i >= 0; i--) {
    const t = tweens[i]; t.t += dt; const k = Math.min(1, t.t / t.dur);
    t.fn(k); if (k >= 1) { tweens.splice(i, 1); t.done && t.done(); }
  }
  // pan movement
  const pk = 1 - Math.exp(-22 * dt);
  const ox = pan.g.position.x, oz = pan.g.position.z;
  pan.g.position.x = lerp(pan.g.position.x, pan.tx, pk);
  pan.g.position.z = lerp(pan.g.position.z, pan.tz, pk);
  pan.g.position.y = lerp(pan.g.position.y, (pan.onBurner ? 0.3 : 0.04) + pan.lift, pk);
  pan.speed = lerp(pan.speed, Math.hypot(pan.g.position.x - ox, pan.g.position.z - oz) / Math.max(dt, 0.001), 0.3);
  const plk = 1 - Math.exp(-22 * dt);
  plate.g.position.x = S.serving ? plate.g.position.x : lerp(plate.g.position.x, plate.tx, plk);
  if (!S.serving) { plate.g.position.z = lerp(plate.g.position.z, plate.tz, plk); plate.g.position.y = lerp(plate.g.position.y, 0.02 + plate.lift, plk); }

  { const onStove = Math.abs(pan.g.position.x) < 2.2 && pan.g.position.z > -2 && pan.g.position.z < 1.5;
    pan.shadow.position.set(pan.g.position.x, onStove ? 0.075 : 0.012, pan.g.position.z); pan.shadow.material.opacity = clamp(1 - (pan.g.position.y - (onStove ? 0.3 : 0.04)) * 1.2, 0.25, 1);
    plate.shadow.position.set(plate.g.position.x, 0.012, plate.g.position.z); plate.shadow.material.opacity = clamp(1 - (plate.g.position.y - 0.02) * 1.5, 0.25, 1); }
  // heat model
  const eff = heat < 0.03 ? 0 : 0.17 + 0.83 * heat;
  const kc = pan.onBurner ? 0.16 : 0.07;
  pan.temp += ((pan.onBurner ? 40.8 * eff : 0) - kc * (pan.temp - 25)) * dt;
  pan.temp = clamp(pan.temp, 20, 320);
  burnerGlow.emissiveIntensity = lerp(burnerGlow.emissiveIntensity, eff * 1.2, 0.1);
  flames.visible = eff > 0;
  flames.children.forEach((c, i) => { const s = (0.4 + eff * 1.3) * (0.8 + 0.25 * Math.sin(sparkT * 14 + i * 1.7)); c.scale.set(1, s, 1); c.position.y = 0.1 + 0.17 * s; });
  sparkT += dt;

  // butter
  const B = pan.butter;
  if (B.amount > 0) {
    B.melt = Math.min(1, B.melt + Math.max(0, pan.temp - 50) / 100 * 0.6 * dt);
    B.brown = Math.min(1.5, B.brown + Math.max(0, pan.temp - 165) / 2500 * dt);
    pan.pat.visible = B.melt < 0.97 && B.amount > 0;
    const ps = (0.5 + 0.2 * B.amount) * (1 - B.melt); pan.pat.scale.set(ps + 0.1, ps + 0.1, ps + 0.1);
    pan.puddle.visible = B.melt > 0.05;
    const pr = (0.25 + 0.8 * Math.min(1, 0.6 + 0.2 * B.amount) * B.melt);
    pan.puddle.scale.set(pr, pr, pr);
    const col = lerpC([255, 226, 120], [110, 60, 18], clamp(B.brown, 0, 1));
    pan.puddleM.color.setRGB(col[0] / 255, col[1] / 255, col[2] / 255); pan.puddleM.color.convertSRGBToLinear();
  } else { pan.pat.visible = false; pan.puddle.visible = false; B.melt = 0; B.brown = 0; }
  const bubbling = B.amount > 0 && B.melt > 0.4 && pan.temp > 95;
  pan.bubbles.forEach(b => {
    const u = b.userData;
    if (u.life < 1) { u.life += dt * 1.6; b.visible = true; const s = Math.sin(clamp(u.life, 0, 1) * Math.PI); b.scale.setScalar(0.3 + s); b.position.set(u.x, 0.15 + 0.03 * s, u.z); if (u.life >= 1) { b.visible = false; if (Math.random() < 0.3) Snd.pop(); } }
    else if (bubbling && Math.random() < (pan.temp - 90) / 120 * dt * 3) { const a = Math.random() * TAU, r = Math.sqrt(Math.random()) * 0.8; u.x = Math.cos(a) * r; u.z = Math.sin(a) * r; u.life = 0; }
  });

  // food
  const f = pan.food;
  if (f) {
    if (f.anim < 1) {
      f.anim = Math.min(1, f.anim + dt * 2.2);
      const k = ease(f.anim), s = lerp(0.4, 1, k);
      f.g.scale.set(s, 1, s); f.g.position.y = lerp(f.dropFrom || 1.0, f.base, f.anim * f.anim);
      if (f.anim >= 1) { f.g.position.y = f.base; f.g.scale.set(1, 1, 1); }
    }
    if (B.amount > 0) f.usedButter = true;
    cookFood(f, dt, pan.temp);
    if (f.flipT >= 0) updateFlip(f, dt);
    // spatula interactions
    if (spat.mode === 'held' && spat.inPan && f.anim >= 1 && f.flipT < 0) {
      const w = f.g.getWorldPosition(_v), sp = spat.g.position;
      const spd = spat.lastPos ? Math.hypot(sp.x - spat.lastPos.x, sp.z - spat.lastPos.z) / Math.max(dt, 0.001) : 0;
      const touching = Math.hypot(sp.x - w.x, sp.z - w.z) < f.R + 0.35;
      const pc = pan.g.position, ang = Math.atan2(sp.z - pc.z, sp.x - pc.x), rr = Math.hypot(sp.x - pc.x, sp.z - pc.z);
      if (spd > 0.5) { Snd.scrape(); }
      if (spat.lastAng !== null && rr > 0.3 && spd > 0.9 && (touching || f.scr)) {
        let da = ang - spat.lastAng; while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU;
        if (Math.abs(da) < 1.2) {
          f.stir += Math.abs(da); f.recentStir = 1.2; f.dirty = true;
          if (f.stir > TAU * 0.5 && !f.yolkBroken && !f.scr) { f.yolkBroken = true; Snd.splat(); }
          if (f.stir > TAU * 1.5 && !f.scr) { f.scr = true; ach.flipped = true; hintBump(); toast('Scrambling! Keep it moving 🥣'); }
        }
      } else if (touching && spd > 7.5 && !f.scr && !f.yolkBroken && f.top === 0 && f.set < 1) {
        f.rough += dt; if (f.rough > 0.25) { f.yolkBroken = true; f.dirty = true; Snd.splat(); toast('Careful — the yolk broke!'); }
      }
      spat.lastAng = ang;
    } else spat.lastAng = null;
    // sloshing the pan
    if (pan.dragging && pan.speed > 6.5 && !f.yolkBroken && f.set < 0.5 && f.top === 0 && !f.scr) { f.rough += dt; if (f.rough > 0.4) { f.yolkBroken = true; f.dirty = true; toast('Too bumpy — the yolk broke!'); Snd.splat(); } }
    if (f.settle) {
      f.settle.t += dt * 6; const k = Math.min(1, f.settle.t);
      f.g.position.lerpVectors(f.settle.s, f.settle.to, ease(k)); if (k >= 1) { f.base = f.settle.to.y; f.settle = null; }
    }
  }
  spat.lastPos = spat.g.position.clone();
  if (plate.food && plate.food.settle) {
    const pf = plate.food; pf.settle.t += dt * 6; const k = Math.min(1, pf.settle.t);
    pf.g.position.lerpVectors(pf.settle.s, pf.settle.to, ease(k)); if (k >= 1) { pf.base = pf.settle.to.y; pf.settle = null; }
  }
  // re-draw textures (throttled)
  [pan.food, plate.food].forEach(ff => { if (ff && ff.dirty) { ff.texT -= dt; if (ff.texT <= 0) { drawFood(ff); ff.texT = 0.12; } } });

  // carriables
  [egg, butter, salt, pepper, spat].forEach(p => {
    if (p === egg && (egg.state === 'hover' || egg.state === 'cracked')) {
      const l = V(egg.local.x, 1.15 + Math.sin(sparkT * 3) * 0.04, egg.local.z);
      egg.target.copy(pan.g.localToWorld(l));
    }
    if (p.mode === 'auto') { p.auto -= dt; if (p.auto <= 0) { p.mode = 'home'; p.target.copy(p.home); p.auto = 0; } }
    if (p.mode !== 'free') p.g.position.lerp(p.target, 1 - Math.exp(-p.rate * dt));
    if (p.popIn !== undefined) { p.popIn = Math.min(1, p.popIn + dt * 3); p.g.scale.setScalar(Math.max(0.01, ease(p.popIn))); if (p.popIn >= 1) p.popIn = undefined; }
  });
  // egg wobble/shake
  egg.shake = Math.max(0, egg.shake - dt);
  const hov = egg.state === 'hover' || egg.state === 'cracked';
  egg.g.rotation.z = lerp(egg.g.rotation.z, (egg.shake > 0 ? Math.sin(sparkT * 60) * 0.25 : hov ? Math.sin(sparkT * 2) * 0.08 : egg.state === 'held' ? 0.3 : 0), 0.3);
  if (egg.state === 'cracked' && egg.split > 0) {
    egg.top.position.set(egg.split * 0.35, egg.split * 0.1, 0); egg.top.rotation.z = -0.8 * egg.split;
    egg.bot.position.set(-egg.split * 0.35, 0, 0); egg.bot.rotation.z = 0.8 * egg.split;
  } else if (egg.state === 'cracked') { egg.top.position.set(0, 0, 0); egg.top.rotation.z = 0; egg.bot.position.set(0, 0, 0); egg.bot.rotation.z = 0; }
  // shakers tilt + pour
  shakers.forEach(s => {
    const pouring = (s.held || s.mode === 'auto') && s.g.position.y > 1.2 && overFoodOrPlate(s.g.position);
    s.tilt = lerp(s.tilt, pouring ? 2.5 : 0, 1 - Math.exp(-12 * dt));
    s.g.rotation.z = s.tilt * (s.kind === 'salt' ? 1 : 1);
    if (pouring && s.tilt > 1.9) {
      s.emitAcc = (s.emitAcc || 0) + dt * 26;
      const capPos = s.g.localToWorld(V(0, 0.55, 0));
      while (s.emitAcc >= 1) { s.emitAcc--; emitGrain(s.kind, capPos); }
      if (Math.random() < dt * 10) Snd.shake();
    }
  });
  updateGrains(dt);
  heldFoodFollow(dt);

  // sound beds
  const fp = pan.food && pan.food.where === 'pan' ? pan.food : null;
  let siz = 0;
  if (fp && !fp.dragging) siz = clamp((pan.temp - 85) / 150, 0, 1) * (fp.set < 0.95 ? 1 : 0.75);
  else if (B.amount > 0 && B.melt > 0.2) siz = clamp((pan.temp - 90) / 220, 0, 0.35);
  const bub = bubbling && !fp ? clamp((pan.temp - 90) / 100, 0, 1) : 0;
  Snd.beds(siz, bub, pan.temp);
  crackleT -= dt;
  if (siz > 0.08 && crackleT <= 0) { Snd.crackle(0.12 + siz * 0.25); crackleT = (0.04 + Math.random() * 0.2) / (0.3 + siz); }

  // steam / smoke
  steamT -= dt;
  if (steamT <= 0) {
    steamT = LOW ? 0.18 : 0.1;
    const pc = pan.g.position;
    const burn = fp ? Math.max(fp.brown[0], fp.brown[1]) : 0;
    if (burn > 0.9 || B.brown > 0.8) puff(pc.x + (Math.random() - 0.5) * 1.2, pc.y + 0.5, pc.z + (Math.random() - 0.5) * 1.2, true);
    else if (pan.temp > 100 && (fp || B.melt > 0.3)) puff(pc.x + (Math.random() - 0.5) * 1.4, pc.y + 0.5, pc.z + (Math.random() - 0.5) * 1.4, false);
  }
  updateSprites(dt);

  uiT -= dt; if (uiT <= 0) { uiT = 0.1; refreshUI(dt); }
}
function overFoodOrPlate(p) {
  return Math.hypot(p.x - pan.g.position.x, p.z - pan.g.position.z) < 1.7 || Math.hypot(p.x - plate.g.position.x, p.z - plate.g.position.z) < 1.5;
}
function heldFoodFollow(dt) {
  if (drag && drag.item.id === 'food') {
    // find food object by its item
    const f = findFood(drag.item);
    if (f) { f.g.position.lerp(f.pos, 1 - Math.exp(-26 * dt)); f.g.rotation.z = lerp(f.g.rotation.z, clamp((f.pos.x - f.g.position.x) * 0.6, -0.4, 0.4), 0.2); }
  }
}
function findFood(item) { return [pan.food, plate.food].find(f => f && f.item === item) || handFood(item); }
function handFood(item) { return item.food || null; }

// ---------------------------------------------------------------- loop
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (S.playing && !S.paused) update(dt);
  else if (!S.playing) { // menu idle: slow orbit
    orbit.taz = Math.sin(now / 5000) * 0.25;
    for (let i = tweens.length - 1; i >= 0; i--) { const t = tweens[i]; t.t += dt; const k = Math.min(1, t.t / t.dur); t.fn(k); if (k >= 1) { tweens.splice(i, 1); t.done && t.done(); } }
  }
  updateCam(dt);
  renderer.render(scene, cam);
}
resize(); resetView();
orbit.az = orbit.taz; orbit.pol = orbit.tpol; orbit.rad = orbit.trad; orbit.tx = orbit.ttx; orbit.tz = orbit.ttz;
const b0 = store.get('best', 0); $('#bestLine').textContent = b0 ? `🏆 Best round: ${b0} / 500` : '';
setHeat(0);
requestAnimationFrame(frame);
window.__cs = { spat, salt, pepper, foodDrop, step(n, dt) { for (let i = 0; i < n; i++) update(dt); }, serve, scoreFood, S, pan, plate, egg, ach, orbit, scene, cam, setHeat, startGame, items };
})();
