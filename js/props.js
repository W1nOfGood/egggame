// Interactive props: pan, plate, egg carton, butter dish, shakers, spatula, whole eggs, shell halves.
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

export function buildProps(scene, mats) {
  const pan = makePan(mats); pan.position.set(HOME.pan.x, 0, HOME.pan.z); scene.add(pan);
  const plate = makePlate(mats); plate.position.set(HOME.plate.x, 0, HOME.plate.z); scene.add(plate);
  const carton = makeCarton(mats); carton.position.set(HOME.carton.x, 0, HOME.carton.z); carton.rotation.y = 0.25; scene.add(carton);
  const butterDish = makeButterDish(mats); butterDish.position.set(HOME.butter.x, 0, HOME.butter.z); butterDish.rotation.y = -0.2; scene.add(butterDish);
  const salt = makeSaltShaker(mats); salt.position.set(HOME.salt.x, 0, HOME.salt.z); scene.add(salt);
  const pepper = makePepperMill(mats); pepper.position.set(HOME.pepper.x, 0, HOME.pepper.z); scene.add(pepper);
  const spatula = makeSpatula(mats); spatula.position.set(HOME.spatula.x, 0.0, HOME.spatula.z); spatula.rotation.y = 0.5; scene.add(spatula);
  return { pan, plate, carton, butterDish, salt, pepper, spatula };
}
