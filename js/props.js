// Interactive props: pan, plate, egg carton, butter dish, shakers, spatula, whole eggs, shell halves.
import { mergeStatic } from './merge.js';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { PAN, PLATE, HOME } from './config.js';

const mesh = (geo, mat, cast = true, receive = false) => { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = receive; return m; };
const tag = (obj, interact, extra = {}) => { obj.traverse((c) => { c.userData.interact = interact; Object.assign(c.userData, extra); }); return obj; };
const V2 = (x, y) => new THREE.Vector2(x, y);

// ---------- Egg shape (shared) ----------
export function eggProfile(R = 0.26, segs = 24) {
  const H = R * 1.32, pts = [];
  for (let i = 0; i <= segs; i++) {
    const u = -1 + (2 * i) / segs; // bottom -> top
    const r = R * Math.sqrt(Math.max(0, 1 - u * u)) * (1 - 0.13 * u);
    pts.push(V2(Math.max(r, 0.0001), u * H));
  }
  pts[0].x = 0.0001; pts[segs].x = 0.0001;
  return pts;
}
let eggGeo;
export function eggGeometry() { return eggGeo || (eggGeo = new THREE.LatheGeometry(eggProfile(), 28)); }

export function makeWholeEgg(mats, brown = false) {
  const m = mesh(eggGeometry(), brown ? mats.eggShellBrown : mats.eggShell);
  return m;
}

// Shell halves split along the vertical plane so they can be pulled left / right.
export function makeShellHalves(mats, brown = false) {
  const pts = eggProfile(0.26, 24);
  const mk = (phiStart) => {
    const g = new THREE.Group();
    const outer = mesh(new THREE.LatheGeometry(pts, 16, phiStart, Math.PI), brown ? mats.eggShellBrown : mats.eggShell);
    const inner = mesh(new THREE.LatheGeometry(pts.map((p) => V2(p.x * 0.95, p.y * 0.97)), 16, phiStart, Math.PI), mats.eggShellInner, false);
    g.add(outer, inner);
    return g;
  };
  // Lathe phi=0 points to +z; phi in [0,PI] covers +x side.
  const right = mk(0), left = mk(Math.PI);
  // jagged crack rim: a thin zig-zag band at the seam (purely visual)
  return { left, right };
}

// ---------- Frying pan ----------
export function makePan(mats) {
  const g = new THREE.Group(); g.name = 'pan';
  const { innerR, rimR, height, floorY } = PAN;
  // Outer enamel shell (bottom, flared wall, rolled rim)
  const outer = [V2(0, 0.0), V2(innerR - 0.02, 0.0), V2(innerR + 0.06, 0.015), V2(innerR + 0.1, 0.06)];
  for (let i = 1; i <= 10; i++) { const t = i / 10; outer.push(V2(innerR + 0.1 + (rimR - innerR - 0.06) * Math.pow(t, 0.85), 0.06 + t * (height - 0.08))); }
  outer.push(V2(rimR + 0.035, height + 0.005), V2(rimR + 0.03, height + 0.03), V2(rimR - 0.01, height + 0.035));
  const shell = mesh(new THREE.LatheGeometry(outer, 72), mats.panOuter, true, false); g.add(shell);
  // Inner non-stick surface (floor curving up into wall)
  const floorDisc = mesh(new THREE.CircleGeometry(innerR - 0.079, 72), mats.panInner, false, true);
  floorDisc.rotation.x = -Math.PI / 2; floorDisc.position.y = floorY; g.add(floorDisc); tag(floorDisc, 'panFloor');
  const inner = [];
  for (let i = 0; i <= 6; i++) inner.push(V2(innerR - 0.08 + Math.sin((i / 6) * Math.PI / 2) * 0.08, floorY + (1 - Math.cos((i / 6) * Math.PI / 2)) * 0.08));
  for (let i = 1; i <= 8; i++) { const t = i / 8; inner.push(V2(innerR + (rimR - 0.05 - innerR) * Math.pow(t, 0.85), floorY + 0.08 + t * (height - floorY - 0.06))); }
  inner.push(V2(rimR - 0.01, height + 0.035));
  const innerMesh = mesh(new THREE.LatheGeometry(inner, 72), mats.panInner, false, true);
  mats.panInner.side = THREE.DoubleSide;
  g.add(innerMesh);
  // Induction-style steel base disc
  const base = mesh(new THREE.CylinderGeometry(innerR - 0.12, innerR - 0.12, 0.012, 48), mats.panBase, false); base.position.y = -0.004; g.add(base);
  // Handle: riveted steel bracket + tapered wooden grip with ferrule and hang hole
  const handle = new THREE.Group(); g.add(handle);
  const dir = new THREE.Vector3(-0.86, 0, 0.5).normalize();
  handle.position.set(dir.x * (rimR - 0.04), height * 0.62, dir.z * (rimR - 0.04));
  handle.rotation.y = Math.atan2(-dir.z, dir.x);
  const bracketCurve = new THREE.CatmullRomCurve3([V3(-0.05, -0.05, 0), V3(0.25, 0.04, 0), V3(0.55, 0.12, 0)]);
  const bracket = mesh(new THREE.TubeGeometry(bracketCurve, 12, 0.055, 10), mats.steel); handle.add(bracket);
  for (const z of [-0.07, 0.07]) { const rv = mesh(new THREE.SphereGeometry(0.035, 10, 8), mats.steel); rv.position.set(-0.02, 0.0, z); rv.scale.set(0.5, 1, 1); handle.add(rv); }
  const gripPts = [V2(0.0001, 0), V2(0.085, 0), V2(0.1, 0.05), V2(0.105, 0.4), V2(0.115, 1.05), V2(0.11, 1.12), V2(0.08, 1.16), V2(0.0001, 1.17)];
  const grip = mesh(new THREE.LatheGeometry(gripPts, 20), mats.wood);
  grip.rotation.z = -Math.PI / 2 + 0.24; grip.position.set(0.5, 0.11, 0); grip.scale.set(1, 1, 0.85); handle.add(grip);
  const ferrule = mesh(new THREE.CylinderGeometry(0.1, 0.095, 0.12, 20), mats.steel); ferrule.rotation.z = -Math.PI / 2 + 0.24; ferrule.position.set(0.52, 0.115, 0); handle.add(ferrule);
  const hang = mesh(new THREE.TorusGeometry(0.045, 0.02, 8, 16), mats.steel); hang.position.set(1.55, 0.38, 0); hang.rotation.y = Math.PI / 2; handle.add(hang);
  // Hit volumes: generous invisible targets for touch
  const handleHit = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 0.6), new THREE.MeshBasicMaterial({ visible: false }));
  handleHit.position.set(0.85, 0.2, 0); handle.add(handleHit);
  tag(handle, 'panHandle');
  tag(shell, 'panRim');
  const floorHit = new THREE.Mesh(new THREE.CylinderGeometry(rimR, innerR, 0.3, 32), new THREE.MeshBasicMaterial({ visible: false }));
  floorHit.position.y = floorY + 0.12; g.add(floorHit); tag(floorHit, 'panFloor'); tag(innerMesh, 'panFloor');
  // Food anchor: food is parented here so it moves with the pan
  const foodAnchor = new THREE.Group(); foodAnchor.position.y = floorY; g.add(foodAnchor);
  g.userData.foodAnchor = foodAnchor;
  return g;
}
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- Plate ----------
export function makePlate(mats) {
  const g = new THREE.Group(); g.name = 'plate';
  const R = PLATE.r;
  const pts = [V2(0.0001, 0.03), V2(R * 0.55, 0.03), V2(R * 0.6, 0.005), V2(R * 0.66, 0.0), V2(R * 0.7, 0.03), V2(R * 0.72, 0.06),
    V2(R * 0.9, 0.11), V2(R * 0.99, 0.13), V2(R * 1.0, 0.145), V2(R * 0.98, 0.155), V2(R * 0.88, 0.135), V2(R * 0.72, 0.09), V2(R * 0.64, 0.075), V2(0.0001, 0.075)];
  const body = mesh(new THREE.LatheGeometry(pts, 64), mats.ceramic, true, true); g.add(body);
  const band = mesh(new THREE.TorusGeometry(R * 0.9, 0.018, 8, 64), mats.ceramicPink, false); band.rotation.x = -Math.PI / 2; band.position.y = 0.122; g.add(band);
  const band2 = mesh(new THREE.TorusGeometry(R * 0.985, 0.012, 6, 64), mats.ceramicPink, false); band2.rotation.x = -Math.PI / 2; band2.position.y = 0.148; g.add(band2);
  const hit = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.1, R + 0.1, 0.4, 24), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 0.15; g.add(hit);
  tag(g, 'plate');
  const foodAnchor = new THREE.Group(); foodAnchor.position.y = PLATE.foodY; g.add(foodAnchor);
  g.userData.foodAnchor = foodAnchor;
  return g;
}

// ---------- Egg carton (open lid, 6 cups) ----------
export function makeCarton(mats) {
  const g = new THREE.Group(); g.name = 'carton';
  const base = mesh(new RoundedBoxGeometry(1.75, 0.34, 1.2, 4, 0.1), mats.carton, true, true); base.position.y = 0.17; g.add(base);
  const eggs = [];
  const brownIdx = new Set([1, 4]);
  for (let i = 0; i < 6; i++) {
    const cx = -0.56 + (i % 3) * 0.56, cz = -0.27 + Math.floor(i / 3) * 0.54;
    const cup = mesh(new THREE.CylinderGeometry(0.25, 0.18, 0.1, 18, 1, true), mats.cartonDark, false, true); cup.position.set(cx, 0.31, cz); g.add(cup);
    const egg = makeWholeEgg(mats, brownIdx.has(i));
    egg.position.set(cx, 0.52, cz); egg.rotation.set((Math.random() - 0.5) * 0.15, Math.random() * 3, (Math.random() - 0.5) * 0.15);
    egg.userData.home = egg.position.clone(); egg.userData.brown = brownIdx.has(i);
    tag(egg, 'cartonEgg', { eggIndex: i });
    g.add(egg); eggs.push(egg);
  }
  // divider cones
  for (let i = 0; i < 2; i++) { const c = mesh(new THREE.ConeGeometry(0.08, 0.35, 8), mats.carton); c.position.set(-0.28 + i * 0.56, 0.45, 0); g.add(c); }
  // hinged lid tilted back, with printed label
  const lid = new THREE.Group(); lid.position.set(0, 0.34, -0.6); lid.rotation.x = -1.95; g.add(lid);
  const lidBox = mesh(new RoundedBoxGeometry(1.75, 0.3, 1.2, 4, 0.1), mats.carton); lidBox.position.set(0, -0.12, 0.6); lid.add(lidBox);
  const label = mesh(new THREE.PlaneGeometry(1.2, 0.6), mats.label, false); label.position.set(0, -0.275, 0.6); label.rotation.x = Math.PI / 2; label.rotation.z = Math.PI; lid.add(label);
  for (const c of [base, lid]) tag(c, 'carton');
  const hit = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.4, 1.3), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 0.2; g.add(hit); tag(hit, 'carton');
  g.userData.eggs = eggs;
  return g;
}

// ---------- Butter dish ----------
export function makeButterDish(mats) {
  const g = new THREE.Group(); g.name = 'butterDish';
  const dish = mesh(new RoundedBoxGeometry(1.5, 0.1, 0.95, 4, 0.045), mats.ceramicBlue, true, true); dish.position.y = 0.05; g.add(dish);
  const lip = mesh(new RoundedBoxGeometry(1.36, 0.06, 0.82, 3, 0.03), mats.ceramicBlue); lip.position.y = 0.11; lip.scale.set(1, 1, 1); g.add(lip);
  const block = mesh(new RoundedBoxGeometry(0.95, 0.34, 0.5, 4, 0.06), mats.butter, true, true); block.position.set(-0.1, 0.27, 0); g.add(block);
  const pat = makeButterPat(mats); pat.position.set(0.5, 0.17, 0.05); pat.rotation.y = 0.2; g.add(pat);
  // butter knife
  const knife = new THREE.Group(); knife.position.set(0.1, 0.16, 0.36); knife.rotation.y = -0.15; g.add(knife);
  const blade = mesh(new RoundedBoxGeometry(0.75, 0.02, 0.14, 2, 0.008), mats.chrome); blade.position.x = 0.15; knife.add(blade);
  const kh = mesh(new THREE.CapsuleGeometry(0.05, 0.5, 4, 10), mats.ceramicPink); kh.rotation.z = Math.PI / 2; kh.position.x = -0.5; knife.add(kh);
  tag(g, 'butterDish');
  tag(block, 'butterBlock'); tag(pat, 'butterBlock');
  g.userData.block = block;
  return g;
}
export function makeButterPat(mats) {
  return mesh(new RoundedBoxGeometry(0.34, 0.16, 0.3, 3, 0.045), mats.butter);
}

// ---------- Shakers ----------
export function makeSaltShaker(mats) {
  const g = new THREE.Group(); g.name = 'salt';
  const body = [V2(0.0001, 0), V2(0.27, 0), V2(0.3, 0.04), V2(0.3, 0.12), V2(0.24, 0.45), V2(0.22, 0.62), V2(0.23, 0.7), V2(0.0001, 0.7)];
  const glass = mesh(new THREE.LatheGeometry(body, 32), mats.glass, false); glass.renderOrder = 3; g.add(glass);
  const fill = mesh(new THREE.LatheGeometry(body.slice(0, 5).map((p) => V2(p.x * 0.88, p.y * 0.95 + 0.02)).concat([V2(0.0001, 0.42)]), 24), mats.salt); g.add(fill);
  const cap = [V2(0.0001, 0.68), V2(0.235, 0.68), V2(0.245, 0.74), V2(0.23, 0.86), V2(0.15, 0.95), V2(0.0001, 0.97)];
  g.add(mesh(new THREE.LatheGeometry(cap, 32), mats.chrome));
  const holes = new THREE.InstancedMesh(new THREE.CircleGeometry(0.018, 6), new THREE.MeshBasicMaterial({ color: '#555b66' }), 7);
  const d = new THREE.Object3D();
  for (let i = 0; i < 7; i++) {
    const a = (i / 6) * Math.PI * 2, r = i === 6 ? 0 : 0.07;
    d.position.set(Math.cos(a) * r, 0.972, Math.sin(a) * r); d.rotation.set(-Math.PI / 2, 0, 0); d.updateMatrix(); holes.setMatrixAt(i, d.matrix);
  }
  g.add(holes);
  addBlobShadow(g, mats, 0.38);
  tag(g, 'salt');
  return g;
}

export function makePepperMill(mats) {
  const g = new THREE.Group(); g.name = 'pepper';
  const body = [V2(0.0001, 0), V2(0.26, 0), V2(0.28, 0.05), V2(0.24, 0.3), V2(0.19, 0.55), V2(0.22, 0.75), V2(0.25, 0.85), V2(0.25, 0.9), V2(0.0001, 0.9)];
  g.add(mesh(new THREE.LatheGeometry(body, 32), mats.walnut));
  const band = mesh(new THREE.TorusGeometry(0.255, 0.018, 8, 32), mats.chrome); band.rotation.x = Math.PI / 2; band.position.y = 0.88; g.add(band);
  const top = [V2(0.0001, 0.9), V2(0.23, 0.9), V2(0.24, 0.98), V2(0.19, 1.08), V2(0.0001, 1.12)];
  g.add(mesh(new THREE.LatheGeometry(top, 32), mats.walnut));
  const finial = mesh(new THREE.SphereGeometry(0.07, 14, 10), mats.chrome); finial.position.y = 1.15; g.add(finial);
  addBlobShadow(g, mats, 0.36);
  tag(g, 'pepper');
  return g;
}

// ---------- Spatula (slotted turner) ----------
export function makeSpatula(mats) {
  const g = new THREE.Group(); g.name = 'spatula';
  // Blade: rounded-rectangle plate with 4 slots; origin at blade centre, handle runs toward +z and up
  const s = new THREE.Shape();
  const w = 0.62, l = 0.78, r = 0.1;
  s.moveTo(-w / 2 + r, -l / 2); s.lineTo(w / 2 - r, -l / 2); s.quadraticCurveTo(w / 2, -l / 2, w / 2, -l / 2 + r);
  s.lineTo(w / 2 - 0.04, l / 2 - 0.12); s.quadraticCurveTo(0.12, l / 2 + 0.02, 0.06, l / 2 + 0.05); s.lineTo(-0.06, l / 2 + 0.05);
  s.quadraticCurveTo(-0.12, l / 2 + 0.02, -w / 2 + 0.04, l / 2 - 0.12); s.lineTo(-w / 2, -l / 2 + r); s.quadraticCurveTo(-w / 2, -l / 2, -w / 2 + r, -l / 2);
  for (let i = 0; i < 4; i++) {
    const h = new THREE.Path(); const x = -0.18 + i * 0.12;
    h.moveTo(x - 0.025, -0.24); h.lineTo(x + 0.025, -0.24); h.lineTo(x + 0.025, 0.18); h.lineTo(x - 0.025, 0.18); h.closePath();
    s.holes.push(h);
  }
  const bladeGeo = new THREE.ExtrudeGeometry(s, { depth: 0.018, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.006, bevelSegments: 1, curveSegments: 6 });
  bladeGeo.rotateX(Math.PI / 2); // lie flat; shape +y -> world +z
  const blade = mesh(bladeGeo, mats.steel); blade.position.y = 0.02; g.add(blade);
  // Neck rising to the handle
  const neckCurve = new THREE.CatmullRomCurve3([V3(0, 0.03, 0.42), V3(0, 0.08, 0.58), V3(0, 0.28, 0.82), V3(0, 0.38, 0.98)]);
  g.add(mesh(new THREE.TubeGeometry(neckCurve, 16, 0.032, 8), mats.steel));
  const hPts = [V2(0.0001, 0), V2(0.07, 0), V2(0.085, 0.08), V2(0.085, 0.9), V2(0.075, 0.98), V2(0.0001, 1.0)];
  const handle = mesh(new THREE.LatheGeometry(hPts, 18), mats.spatulaHandle);
  handle.position.set(0, 0.36, 0.95); handle.rotation.x = Math.PI / 2 - 0.42; handle.scale.set(1, 1, 0.7); g.add(handle);
  const ring = mesh(new THREE.TorusGeometry(0.05, 0.016, 6, 14), mats.chrome); ring.position.set(0, 0.78, 1.82); ring.rotation.y = Math.PI / 2; g.add(ring);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 2.2), new THREE.MeshBasicMaterial({ visible: false })); hit.position.set(0, 0.3, 0.6); g.add(hit);
  tag(g, 'spatula');
  return g;
}

function addBlobShadow(g, mats, r) {
  const s = new THREE.Mesh(new THREE.PlaneGeometry(r * 3, r * 3), mats.shadowBlob);
  s.rotation.x = -Math.PI / 2; s.position.y = 0.004; s.renderOrder = -1; s.userData.blob = true; g.add(s);
}

// ---------- Open fridge stocked with the ingredients (tap or drag an item out of it) ----------
function labelTex(draw, w = 128, h = 128) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
const hash1 = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

export function makeFridge(mats) {
  const g = new THREE.Group(); g.name = 'fridge';
  const W = 2.05, H = 2.55, D = 1.2, T = 0.1;
  const shell = new THREE.MeshPhysicalMaterial({ color: '#b3e4d2', roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.1 });
  const liner = new THREE.MeshPhysicalMaterial({ color: '#f8fdfb', roughness: 0.5, clearcoat: 0.2 });
  const rubber = new THREE.MeshStandardMaterial({ color: '#2b2f36', roughness: 0.7 });
  const glass = new THREE.MeshPhysicalMaterial({ color: '#d6f1ee', roughness: 0.06, transparent: true, opacity: 0.5, clearcoat: 1, depthWrite: false });
  const chrome = mats.chrome;
  const rb = (w, h, d, r, m, x, y, z, parent = g, cast = true) => { const o = mesh(new RoundedBoxGeometry(w, h, d, 3, r), m, cast, true); o.position.set(x, y, z); parent.add(o); return o; };

  // cabinet
  rb(W, H, T, 0.03, liner, 0, H / 2, -D / 2 + T / 2);
  rb(T, H, D, 0.045, shell, -W / 2 + T / 2, H / 2, 0); rb(T, H, D, 0.045, shell, W / 2 - T / 2, H / 2, 0);
  rb(W, T, D, 0.06, shell, 0, H - T / 2, 0); rb(W, 0.16, D, 0.05, shell, 0, 0.08, 0);
  // inner liner on the side walls (so the inside is white, not mint)
  rb(0.02, H - 0.3, D - 0.12, 0.01, liner, -W / 2 + T + 0.01, H / 2, 0.02, g, false); rb(0.02, H - 0.3, D - 0.12, 0.01, liner, W / 2 - T - 0.01, H / 2, 0.02, g, false);
  // vertical ribs on the back wall
  for (let i = -3; i <= 3; i++) rb(0.025, H - 0.35, 0.03, 0.01, new THREE.MeshStandardMaterial({ color: '#e6f3ef', roughness: 0.6 }), i * 0.26, H / 2, -D / 2 + T + 0.015, g, false);
  // chrome trim + rubber gasket round the opening
  const trimY = (y) => rb(W, 0.045, 0.05, 0.015, chrome, 0, y, D / 2 - 0.01, g, false);
  trimY(0.17); trimY(H - 0.02);
  for (const x of [-W / 2 + 0.02, W / 2 - 0.02]) rb(0.045, H - 0.2, 0.05, 0.015, chrome, x, H / 2 + 0.03, D / 2 - 0.01, g, false);
  rb(W - 0.2, 0.025, 0.03, 0.01, rubber, 0, 0.2, D / 2 - 0.05, g, false); rb(W - 0.2, 0.025, 0.03, 0.01, rubber, 0, H - 0.1, D / 2 - 0.05, g, false);
  // glowing light bar + a warm light so the shelves are lit
  const bar = new THREE.Mesh(new RoundedBoxGeometry(W - 0.5, 0.04, 0.09, 2, 0.015), new THREE.MeshBasicMaterial({ color: '#fffbe6' }));
  bar.position.set(0, H - T - 0.03, 0.3); g.add(bar);
  const lamp = new THREE.PointLight('#fff4dc', 7, 4, 2); lamp.position.set(0, H - 0.35, 0.35); g.add(lamp);
  // thermostat dial
  const dial = mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 20), chrome, false); dial.rotation.z = Math.PI / 2; dial.position.set(W / 2 - T - 0.03, H - 0.4, -0.2); g.add(dial);
  const dialMark = mesh(new THREE.BoxGeometry(0.03, 0.012, 0.03), new THREE.MeshBasicMaterial({ color: '#ff6b6b' }), false); dialMark.position.set(W / 2 - T - 0.055, H - 0.4, -0.2); g.add(dialMark);
  // glass shelves with chrome front rails
  const shelfY = [0.62, 1.32, 2.02];
  for (const y of shelfY) {
    rb(W - 2 * T - 0.04, 0.03, D - 0.14, 0.012, glass, 0, y, 0.02, g, false);
    const rail = mesh(new THREE.CylinderGeometry(0.016, 0.016, W - 2 * T - 0.04, 10), chrome, false); rail.rotation.z = Math.PI / 2; rail.position.set(0, y + 0.02, D / 2 - 0.1); g.add(rail);
  }
  // rubber feet
  for (const x of [-0.8, 0.8]) { const f = mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.07, 12), rubber, false); f.position.set(x, -0.03, -0.3); g.add(f); }

  // door (swung wide open to the left): outer shell, inner liner, bins with bottles
  const pivot = new THREE.Group(); pivot.position.set(-W / 2, 0, D / 2); pivot.rotation.y = -2.85; g.add(pivot);
  rb(W, H, 0.11, 0.05, shell, W / 2, H / 2, 0.055, pivot);
  rb(W - 0.14, H - 0.14, 0.04, 0.03, liner, W / 2, H / 2, -0.03, pivot, false);
  rb(W - 0.06, 0.04, 0.06, 0.015, rubber, W / 2, H - 0.06, -0.03, pivot, false); rb(W - 0.06, 0.04, 0.06, 0.015, rubber, W / 2, 0.07, -0.03, pivot, false);
  const hbar = mesh(new THREE.CylinderGeometry(0.036, 0.036, 1.0, 14), chrome); hbar.position.set(W - 0.16, H * 0.6, 0.2); pivot.add(hbar);
  for (const dy of [-0.4, 0.4]) { const p = mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.14, 8), chrome); p.rotation.x = Math.PI / 2; p.position.set(W - 0.16, H * 0.6 + dy, 0.13); pivot.add(p); }
  const badgeTex = labelTex((c, w, h) => { c.fillStyle = '#dfe6ea'; c.fillRect(0, 0, w, h); c.fillStyle = '#c0392b'; c.font = 'italic bold 52px serif'; c.textAlign = 'center'; c.fillText('Eggy', w / 2, 82); });
  const badge = mesh(new RoundedBoxGeometry(0.42, 0.14, 0.02, 2, 0.01), new THREE.MeshStandardMaterial({ map: badgeTex, metalness: 0.6, roughness: 0.3 }), false); badge.position.set(W / 2, H - 0.34, 0.12); pivot.add(badge);
  // door bins (inner face is local -z) with a milk bottle, jam jar, sauce bottle and a pickle jar
  const binY = [0.72, 1.32, 1.92];
  for (const y of binY) {
    rb(W - 0.28, 0.035, 0.2, 0.012, glass, W / 2, y, -0.16, pivot, false);
    rb(W - 0.28, 0.12, 0.02, 0.01, glass, W / 2, y + 0.075, -0.26, pivot, false);
  }
  const milkTex = labelTex((c, w, h) => { c.fillStyle = '#ffffff'; c.fillRect(0, 0, w, h); c.fillStyle = '#7ec8e3'; c.fillRect(0, 36, w, 52); c.fillStyle = '#fff'; c.font = 'bold 30px sans-serif'; c.textAlign = 'center'; c.fillText('MILK', w / 2, 72); });
  const bottle = (x, y, r, h, color, capColor, tex) => {
    const b = new THREE.Group();
    b.add(mesh(new THREE.CylinderGeometry(r, r * 1.03, h, 20), tex ? new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.3, clearcoat: 0.6 }) : new THREE.MeshPhysicalMaterial({ color, roughness: 0.12, clearcoat: 1, transparent: true, opacity: 0.82 }), true, false));
    const neck = mesh(new THREE.CylinderGeometry(r * 0.45, r * 0.8, h * 0.2, 16), tex ? new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.3 }) : new THREE.MeshPhysicalMaterial({ color, roughness: 0.12, clearcoat: 1, transparent: true, opacity: 0.82 }), true, false); neck.position.y = h * 0.6; b.add(neck);
    const cap = mesh(new THREE.CylinderGeometry(r * 0.48, r * 0.48, h * 0.08, 16), new THREE.MeshStandardMaterial({ color: capColor, roughness: 0.4 }), true, false); cap.position.y = h * 0.74; b.add(cap);
    b.position.set(x, y + h / 2 + 0.02, -0.16); pivot.add(b);
  };
  bottle(0.4, binY[2], 0.1, 0.42, '#fff', '#4aa3d9', milkTex);
  bottle(0.75, binY[2], 0.085, 0.3, '#d8434a', '#ffd23a');
  bottle(1.1, binY[2], 0.1, 0.34, '#f4c24a', '#5b4636');
  bottle(1.45, binY[2], 0.09, 0.4, '#7bc96f', '#ffffff');
  bottle(0.5, binY[1], 0.12, 0.24, '#c9507a', '#ffffff'); bottle(0.95, binY[1], 0.12, 0.24, '#e8a03c', '#8e5a2b'); bottle(1.4, binY[1], 0.12, 0.24, '#b0e06e', '#ffffff');

  // ---- ingredients (each is tagged so a press on it starts that ingredient) ----
  const items = [];
  const add = (kind, obj, x, y, z, hitW = 0.9) => {
    obj.position.set(x, y, z);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(hitW, 0.75, 0.8), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 0.3; obj.add(hit);
    tag(obj, 'fridgeItem', { kind }); g.add(obj); items.push(obj);
  };

  // top shelf left: cheese wedge with a wax rind and holes
  const cheese = new THREE.Group();
  const sector = new THREE.Shape(); sector.moveTo(0, 0); sector.absarc(0, 0, 0.44, -0.55, 0.55, false); sector.lineTo(0, 0);
  const cg = new THREE.ExtrudeGeometry(sector, { depth: 0.26, bevelEnabled: true, bevelSize: 0.014, bevelThickness: 0.014, bevelSegments: 2, curveSegments: 18 });
  cg.rotateX(-Math.PI / 2); cg.translate(-0.2, 0.014, 0.1);
  const wedge = mesh(cg, [new THREE.MeshPhysicalMaterial({ color: '#ffcb3f', roughness: 0.3, clearcoat: 0.6 }), new THREE.MeshPhysicalMaterial({ color: '#f5b72e', roughness: 0.35, clearcoat: 0.5 })]);
  cheese.add(wedge);
  const rind = mesh(new THREE.CylinderGeometry(0.458, 0.458, 0.2, 24, 1, true, -0.55, 1.1), new THREE.MeshStandardMaterial({ color: '#e0572f', roughness: 0.6, side: THREE.DoubleSide })); rind.position.set(-0.2, 0.135, 0.1); rind.rotation.y = Math.PI; cheese.add(rind);
  const hole = new THREE.MeshStandardMaterial({ color: '#d99a1a', roughness: 0.7 });
  [[0.1, 0.05, 0.05], [0.2, -0.06, 0.04], [0.06, -0.08, 0.035], [0.15, 0.12, 0.03]].forEach(([x, z, r]) => { const h = mesh(new THREE.SphereGeometry(r, 10, 8), hole, false); h.position.set(x - 0.2 + 0.1, 0.268, z + 0.1); h.scale.y = 0.35; cheese.add(h); });
  add('cheese', cheese, -0.5, shelfY[2] + 0.025, -0.05, 0.9);

  // top shelf right: burlap rice sack tied at the top with a tag
  const sack = new THREE.Group();
  const burlap = labelTex((c, w, h) => { c.fillStyle = '#c9a56b'; c.fillRect(0, 0, w, h); for (let i = 0; i < w; i += 4) { c.fillStyle = `rgba(110,70,30,${0.12 + hash1(i) * 0.12})`; c.fillRect(i, 0, 2, h); c.fillRect(0, i, w, 2); } c.fillStyle = '#c0392b'; c.fillRect(0, 46, w, 30); c.fillStyle = '#fff'; c.font = 'bold 26px sans-serif'; c.textAlign = 'center'; c.fillText('RICE', w / 2, 69); });
  burlap.wrapS = burlap.wrapT = THREE.RepeatWrapping;
  const sackGeo = new THREE.LatheGeometry([[0.001, 0], [0.24, 0], [0.3, 0.06], [0.32, 0.22], [0.27, 0.42], [0.15, 0.55], [0.085, 0.62], [0.1, 0.68], [0.15, 0.78], [0.07, 0.83]].map((p) => new THREE.Vector2(p[0], p[1])), 28);
  sack.add(mesh(sackGeo, new THREE.MeshStandardMaterial({ map: burlap, roughness: 0.95, side: THREE.DoubleSide })));
  const tie = mesh(new THREE.TorusGeometry(0.095, 0.02, 8, 18), new THREE.MeshStandardMaterial({ color: '#7a4a24', roughness: 0.8 }), false); tie.rotation.x = Math.PI / 2; tie.position.y = 0.63; sack.add(tie);
  const tag_ = mesh(new RoundedBoxGeometry(0.16, 0.2, 0.012, 2, 0.006), new THREE.MeshStandardMaterial({ color: '#fff7e0', roughness: 0.6 }), false); tag_.position.set(0.13, 0.58, 0.1); tag_.rotation.z = -0.3; sack.add(tag_);
  sack.scale.setScalar(0.74);
  add('rice', sack, -0.58, shelfY[0] + 0.025, 0, 0.7);

  // middle shelf left: vacuum-packed bacon with a printed sleeve
  const bacon = new THREE.Group();
  const trayM = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4 });
  bacon.add(rb(0.8, 0.05, 0.5, 0.02, trayM, 0, 0.03, 0, bacon));
  const baconTex = labelTex((c, w, h) => { c.fillStyle = '#d95b5b'; c.fillRect(0, 0, w, h); for (let i = 0; i < 6; i++) { c.fillStyle = i % 2 ? '#fde9e4' : '#c94646'; c.fillRect(0, 6 + i * 20, w, 14); } });
  const bMat = new THREE.MeshPhysicalMaterial({ map: baconTex, roughness: 0.35, clearcoat: 0.7 });
  [[-0.17, 0], [0.04, 0.03], [0.22, -0.02]].forEach(([z, rot], i) => {
    const sg = new THREE.BoxGeometry(0.7, 0.026, 0.15, 24, 1, 2), p = sg.attributes.position;
    for (let k = 0; k < p.count; k++) p.setY(k, p.getY(k) + Math.sin(p.getX(k) * 9 + i * 2) * 0.014);
    sg.computeVertexNormals();
    const s = mesh(sg, bMat, true, false); s.position.set(0, 0.075, z); s.rotation.y = rot; bacon.add(s);
  });
  const film = new THREE.Mesh(new RoundedBoxGeometry(0.82, 0.12, 0.52, 3, 0.05), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.05, transparent: true, opacity: 0.18, clearcoat: 1, depthWrite: false })); film.position.y = 0.09; bacon.add(film);
  const sleeveTex = labelTex((c, w, h) => { c.fillStyle = '#c0392b'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff3d6'; c.font = 'bold 42px sans-serif'; c.textAlign = 'center'; c.fillText('BACON', w / 2, 70); c.font = '30px serif'; c.fillText('🥓', w / 2, 108); });
  const sleeve = mesh(new RoundedBoxGeometry(0.28, 0.15, 0.54, 3, 0.03), [0, 1, 2, 3, 4, 5].map((i) => new THREE.MeshStandardMaterial({ map: i === 2 ? sleeveTex : null, color: i === 2 ? '#ffffff' : '#c0392b', roughness: 0.5 })), false); sleeve.position.set(-0.08, 0.1, 0); bacon.add(sleeve);
  add('bacon', bacon, -0.5, shelfY[1] + 0.025, 0.02, 0.9);

  // middle shelf right: net-wrapped ham roast with butcher's string
  const ham = new THREE.Group();
  const netTex = labelTex((c, w, h) => { c.fillStyle = '#f2a0a6'; c.fillRect(0, 0, w, h); const cl = c.createRadialGradient(w * 0.4, h * 0.35, 4, w / 2, h / 2, w * 0.7); cl.addColorStop(0, 'rgba(255,255,255,0.28)'); cl.addColorStop(1, 'rgba(120,30,40,0.25)'); c.fillStyle = cl; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(255,248,235,0.85)'; c.lineWidth = 3; for (let i = -h; i < w + h; i += 22) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i + h, h); c.stroke(); c.beginPath(); c.moveTo(i + h, 0); c.lineTo(i, h); c.stroke(); } });
  netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping; netTex.repeat.set(2, 1);
  const roast = mesh(new THREE.SphereGeometry(0.3, 40, 28), new THREE.MeshPhysicalMaterial({ map: netTex, roughness: 0.4, clearcoat: 0.5 })); roast.scale.set(1.25, 0.82, 0.9); roast.position.y = 0.25; ham.add(roast);
  for (const x of [-0.14, 0.14]) { const s = mesh(new THREE.TorusGeometry(0.255, 0.012, 8, 30), new THREE.MeshStandardMaterial({ color: '#e9d9b6', roughness: 0.8 }), false); s.rotation.y = Math.PI / 2; s.position.set(x * 1.4, 0.25, 0); s.scale.set(1, 0.85, 0.92); ham.add(s); }
  const cut = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.025, 28), new THREE.MeshStandardMaterial({ color: '#f7b9bd', roughness: 0.45 }), false); cut.rotation.z = Math.PI / 2; cut.position.set(0.37, 0.24, 0); cut.scale.set(1, 1, 0.8); ham.add(cut);
  ham.scale.setScalar(0.78);
  add('ham', ham, 0.5, shelfY[2] + 0.025, 0.02, 0.9);

  // bottom shelf: styrofoam tray of linked sausages under cling film
  const saus = new THREE.Group();
  saus.add(rb(1.0, 0.07, 0.56, 0.03, trayM, 0, 0.04, 0, saus));
  const sMat = new THREE.MeshPhysicalMaterial({ color: '#e58f7b', roughness: 0.3, clearcoat: 0.8 });
  const sg = new THREE.CapsuleGeometry(0.075, 0.2, 8, 16).rotateZ(Math.PI / 2);
  [-0.3, -0.1, 0.1, 0.3].forEach((x, i) => { const s = mesh(sg, sMat); s.position.set(x, 0.15, Math.sin(i * 1.3) * 0.04); s.rotation.y = Math.sin(i) * 0.12; saus.add(s); });
  [-0.2, 0, 0.2].forEach((x) => { const r = mesh(new THREE.TorusGeometry(0.05, 0.011, 6, 12), new THREE.MeshStandardMaterial({ color: '#b86a52', roughness: 0.6 }), false); r.rotation.y = Math.PI / 2; r.position.set(x, 0.15, 0); saus.add(r); });
  const wrap = new THREE.Mesh(new RoundedBoxGeometry(1.02, 0.18, 0.58, 3, 0.07), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.05, transparent: true, opacity: 0.14, clearcoat: 1, depthWrite: false })); wrap.position.y = 0.14; saus.add(wrap);
  saus.scale.setScalar(0.85);
  add('sausage', saus, 0.5, shelfY[1] + 0.025, 0.03, 1.0);

  // bottom shelf: a crusty loaf (toast) and vine tomatoes
  const loaf = new THREE.Group();
  const crust = new THREE.MeshPhysicalMaterial({ color: '#c98a45', roughness: 0.6, clearcoat: 0.3 });
  const body = mesh(new RoundedBoxGeometry(0.5, 0.22, 0.34, 4, 0.08), crust); body.position.y = 0.11; loaf.add(body);
  const dome = mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.5, 24, 1, false, 0, Math.PI), crust); dome.rotation.z = Math.PI / 2; dome.rotation.y = Math.PI / 2; dome.position.y = 0.2; dome.scale.set(1, 1, 0.9); loaf.add(dome);
  for (const x of [-0.12, 0, 0.12]) { const cut = mesh(new THREE.BoxGeometry(0.03, 0.02, 0.3), new THREE.MeshStandardMaterial({ color: '#e7b87a', roughness: 0.7 }), false); cut.position.set(x, 0.36, 0); cut.rotation.z = 0.5; loaf.add(cut); }
  const crumbFace = mesh(new RoundedBoxGeometry(0.06, 0.34, 0.3, 2, 0.03), new THREE.MeshStandardMaterial({ color: '#fbeccd', roughness: 0.85 }), false); crumbFace.position.set(0.25, 0.18, 0); loaf.add(crumbFace);
  add('bread', loaf, 0.06, shelfY[0] + 0.025, 0, 0.7);
  const vine = new THREE.Group();
  const tomM = new THREE.MeshPhysicalMaterial({ color: '#e63b2e', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
  const green = new THREE.MeshStandardMaterial({ color: '#3f8f3a', roughness: 0.6 });
  [[-0.13, 0.03, 0.15], [0.12, -0.04, 0.14], [0.0, 0.1, 0.12]].forEach(([x, z, r]) => {
    const t = mesh(new THREE.SphereGeometry(r, 24, 18), tomM); t.scale.y = 0.85; t.position.set(x, r * 0.85, z); vine.add(t);
    const cal = mesh(new THREE.ConeGeometry(r * 0.45, 0.03, 5), green, false); cal.position.set(x, r * 1.7, z); vine.add(cal);
  });
  const stem = mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 20, Math.PI), green, false); stem.position.set(0, 0.3, 0.04); vine.add(stem);
  add('tomato', vine, 0.62, shelfY[0] + 0.025, 0, 0.6);

  g.userData.items = items;
  return g;
}

export function buildProps(scene, mats) {
  const pan = makePan(mats); pan.position.set(HOME.pan.x, 0, HOME.pan.z); scene.add(pan);
  const plate = makePlate(mats); plate.position.set(HOME.plate.x, 0, HOME.plate.z); scene.add(plate);
  const carton = makeCarton(mats); carton.position.set(HOME.carton.x, 0, HOME.carton.z); carton.rotation.y = 0.25; scene.add(carton);
  const butterDish = makeButterDish(mats); butterDish.position.set(HOME.butter.x, 0, HOME.butter.z); butterDish.rotation.y = -0.2; scene.add(butterDish);
  const salt = makeSaltShaker(mats); salt.position.set(HOME.salt.x, 0, HOME.salt.z); scene.add(salt);
  const pepper = makePepperMill(mats); pepper.position.set(HOME.pepper.x, 0, HOME.pepper.z); scene.add(pepper);
  const spatula = makeSpatula(mats); spatula.position.set(HOME.spatula.x, 0.0, HOME.spatula.z); spatula.rotation.y = 0.5; scene.add(spatula);
  const fridge = makeFridge(mats); fridge.position.set(1.0, 0, -2.6); fridge.scale.setScalar(1.3); scene.add(fridge);
  const any = () => true;
  mergeStatic(fridge, (o) => o.userData.interact === 'fridgeItem', ['fridge'], any);
  // each fridge item becomes one mesh per material, still tagged so it can be tapped
  const fridgeItems = [];
  fridge.traverse((o) => { if (o.userData.interact === 'fridgeItem' && o.parent && o.parent.userData.interact !== 'fridgeItem' && (!o.isMesh || o.children.length)) fridgeItems.push(o); });
  for (const o of fridgeItems) {
    let host = o;
    if (o.isMesh) { host = new THREE.Group(); host.userData = { ...o.userData }; o.parent.add(host); host.position.copy(o.position); host.quaternion.copy(o.quaternion); host.scale.copy(o.scale); host.attach(o); }
    mergeStatic(host, () => false, ['fridgeItem'], any);
  }
  // the shakers, carton and butter dish move as whole groups, so their own parts can be baked together
  for (const [o, tags] of [[carton, ['carton']], [butterDish, ['butterDish']], [salt, ['salt']], [pepper, ['pepper']]]) {
    mergeStatic(o, (c) => c.userData.interact === 'cartonEgg' || c.userData.interact === 'butterBlock', tags, any);
  }
  return { pan, plate, carton, butterDish, salt, pepper, spatula, fridge };
}
