// The static kitchen set: room, counter, cabinets, window, gas cooktop, burner, grate, knob, decor.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { BURNER, COOKTOP, GRATE_TOP, KNOB_POS } from './config.js';
import { mergeStatic } from './merge.js';

const mesh = (geo, mat, { cast = false, receive = false } = {}) => {
  const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = receive; return m;
};

const TICK = ['#bfe3ff', '#ffc35c', '#ff8a7a'].map((c) => new THREE.MeshBasicMaterial({ color: c }));

export function buildKitchen(scene, mats, q) {
  const root = new THREE.Group(); scene.add(root);

  // ---------- Room shell ----------
  const floor = mesh(new THREE.PlaneGeometry(40, 30), mats.floor, { receive: false });
  floor.rotation.x = -Math.PI / 2; floor.position.y = -4.2; root.add(floor);
  const back = mesh(new THREE.PlaneGeometry(40, 16), mats.wall); back.position.set(0, 4, -3.75); root.add(back);
  for (const s of [-1, 1]) {
    const side = mesh(new THREE.PlaneGeometry(20, 16), mats.wall);
    side.position.set(s * 9.5, 4, 4); side.rotation.y = -s * Math.PI / 2; root.add(side);
  }
  // Backsplash tiles
  const splash = mesh(new THREE.PlaneGeometry(19, 3.6), mats.tile, { receive: true });
  splash.position.set(0, 1.8, -3.72); root.add(splash);
  const trim = mesh(new RoundedBoxGeometry(19, 0.14, 0.12, 2, 0.05), mats.counterEdge);
  trim.position.set(0, 3.62, -3.68); root.add(trim);

  // ---------- Counter + cabinets ----------
  const top = mesh(new RoundedBoxGeometry(17, 0.42, 7.5, 4, 0.12), mats.counter, { receive: true });
  top.position.set(0, -0.21, -0.05); root.add(top);
  const cab = mesh(new THREE.BoxGeometry(16.6, 3.8, 7), mats.cabinetDark);
  cab.position.set(0, -2.32, -0.3); root.add(cab);
  for (let i = 0; i < 6; i++) { // cabinet doors with brass pulls
    const door = mesh(new RoundedBoxGeometry(2.6, 3.3, 0.16, 3, 0.07), mats.cabinet);
    door.position.set(-6.9 + i * 2.76, -2.3, 3.24); root.add(door);
    const pull = mesh(new THREE.CapsuleGeometry(0.05, 0.55, 4, 8), mats.brass);
    pull.position.set(-6.9 + i * 2.76 + (i % 2 ? -1 : 1) * 0.95, -1.4, 3.37); root.add(pull);
  }
  const toe = mesh(new THREE.BoxGeometry(16.6, 0.3, 0.2), mats.counterEdge); toe.position.set(0, -4.05, 3.0); root.add(toe);

  // ---------- Window with sky, clouds & frame ----------
  const win = new THREE.Group(); win.position.set(-1.2, 5.6, -3.7); root.add(win);
  const sky = mesh(new THREE.PlaneGeometry(5.2, 3.2), new THREE.MeshBasicMaterial({ map: skyTexture() })); sky.position.z = -0.05; win.add(sky);
  const frameParts = [[5.6, 0.22, 0, 1.7], [5.6, 0.22, 0, -1.7], [0.22, 3.6, -2.7, 0], [0.22, 3.6, 2.7, 0], [0.12, 3.2, 0, 0], [5.2, 0.12, 0, 0]];
  for (const [w, h, x, y] of frameParts) { const f = mesh(new RoundedBoxGeometry(w, h, 0.2, 2, 0.05), mats.windowFrame); f.position.set(x, y, 0.05); win.add(f); }
  const sill = mesh(new RoundedBoxGeometry(6.2, 0.16, 0.6, 3, 0.06), mats.windowFrame, { cast: true }); sill.position.set(0, -1.85, 0.25); win.add(sill);
  // little pots on the sill
  for (let i = 0; i < 3; i++) win.add(pottedHerb(mats, -1.8 + i * 1.8, -1.77, 0.3, 0.42 + (i % 2) * 0.1, i));
  // hanging light over cooktop
  const lamp = new THREE.Group(); lamp.position.set(-0.6, 10.6, -0.8); root.add(lamp);
  const cord = mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.5, 6), mats.castIron); cord.position.y = 1.25; lamp.add(cord);
  const shadePts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; shadePts.push(new THREE.Vector2(0.15 + Math.pow(t, 1.6) * 1.1, -t * 0.9)); }
  const shadeMat = new THREE.MeshStandardMaterial({ color: '#ffb59a', roughness: 0.5, side: THREE.DoubleSide });
  const shade = mesh(new THREE.LatheGeometry(shadePts, 32), shadeMat); lamp.add(shade);
  const bulb = mesh(new THREE.SphereGeometry(0.22, 16, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.9, 1.4) })); bulb.position.y = -0.7; lamp.add(bulb);

  // ---------- Shelf with jars (right wall area) ----------
  const shelf = new THREE.Group(); shelf.position.set(4.6, 4.6, -3.45); root.add(shelf);
  const plank = mesh(new RoundedBoxGeometry(4.2, 0.16, 0.7, 3, 0.05), mats.wood, { cast: true, receive: true }); shelf.add(plank);
  for (const x of [-1.6, 1.6]) { const br = mesh(new THREE.BoxGeometry(0.1, 0.5, 0.5), mats.brass); br.position.set(x, -0.3, -0.05); shelf.add(br); }
  const jarFills = [mats.pasta, mats.beans, mats.salt];
  for (let i = 0; i < 3; i++) shelf.add(jar(mats, -1.3 + i * 1.25, 0.08, 0.05, 0.38 + (i === 1 ? 0.1 : 0), 0.95 - i * 0.12, jarFills[i]));

  // ---------- Cooktop ----------
  const cw = COOKTOP.x1 - COOKTOP.x0, cd = COOKTOP.z1 - COOKTOP.z0;
  const ccx = (COOKTOP.x0 + COOKTOP.x1) / 2, ccz = (COOKTOP.z0 + COOKTOP.z1) / 2;
  const plateTop = mesh(new RoundedBoxGeometry(cw, 0.12, cd, 4, 0.05), mats.cooktop, { receive: true });
  plateTop.position.set(ccx, COOKTOP.top - 0.06, ccz); root.add(plateTop);
  const bezel = mesh(new RoundedBoxGeometry(cw + 0.12, 0.08, cd + 0.12, 3, 0.04), mats.cooktopTrim);
  bezel.position.set(ccx, COOKTOP.top - 0.09, ccz); root.add(bezel);

  // Burner: base cup, crown ring with ports, cap
  const burner = new THREE.Group(); burner.position.set(BURNER.x, COOKTOP.top, BURNER.z); root.add(burner);
  const cup = mesh(new THREE.CylinderGeometry(0.72, 0.8, 0.05, 48), mats.cooktopTrim, { receive: true }); cup.position.y = 0.02; burner.add(cup);
  const crown = mesh(new THREE.CylinderGeometry(0.5, 0.52, 0.09, 40), mats.burnerRing); crown.position.y = 0.08; burner.add(crown);
  const cap = mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.05, 40), mats.burnerCap); cap.position.y = 0.145; burner.add(cap);
  const capTop = mesh(new THREE.SphereGeometry(0.42, 32, 8, 0, Math.PI * 2, 0, 0.35), mats.burnerCap); capTop.position.y = -0.2; capTop.scale.y = 0.9; burner.add(capTop);

  // Flames: two layers of instanced soft cones (blue core + warm tip), driven by heat.
  const flameCount = q.mobile ? 22 : 30;
  const flameGeo = new THREE.ConeGeometry(0.05, 0.28, 8, 1, true); flameGeo.translate(0, 0.14, 0);
  const flameMatOuter = new THREE.MeshBasicMaterial({ color: '#5aa8ff', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const flameMatInner = new THREE.MeshBasicMaterial({ color: '#c8e4ff', transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false });
  const flamesOuter = new THREE.InstancedMesh(flameGeo, flameMatOuter, flameCount);
  const flamesInner = new THREE.InstancedMesh(flameGeo, flameMatInner, flameCount);
  burner.add(flamesOuter, flamesInner);
  const glow = mesh(new THREE.RingGeometry(0.35, 0.95, 48), new THREE.MeshBasicMaterial({ color: '#4d8dff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, map: mats.tex.dot }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.13; burner.add(glow);
  const flameLight = new THREE.PointLight('#7ab0ff', 0, 3.5, 2); flameLight.position.y = 0.3; burner.add(flameLight);

  // Cast-iron grate: outer rounded square + 4 fingers + feet
  const grate = new THREE.Group(); grate.position.set(BURNER.x, 0, BURNER.z); root.add(grate);
  const gy = GRATE_TOP - 0.04;
  const ringShape = new THREE.Shape();
  roundedRectPath(ringShape, -1.25, -1.25, 2.5, 2.5, 0.35);
  const hole = new THREE.Path(); roundedRectPath(hole, -1.12, -1.12, 2.24, 2.24, 0.28); ringShape.holes.push(hole);
  const ringGeo = new THREE.ExtrudeGeometry(ringShape, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.025, bevelSegments: 2, curveSegments: 6 });
  ringGeo.rotateX(-Math.PI / 2);
  const ring = mesh(ringGeo, mats.castIron, { cast: true }); ring.position.y = gy - 0.1; grate.add(ring);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4;
    const arm = mesh(new RoundedBoxGeometry(0.8, 0.09, 0.09, 2, 0.035), mats.castIron, { cast: true });
    const r = 1.12;
    arm.position.set(Math.cos(a) * (r - 0.38), GRATE_TOP - 0.047, Math.sin(a) * (r - 0.38));
    arm.rotation.y = -a; grate.add(arm);
    const foot = mesh(new THREE.CylinderGeometry(0.06, 0.07, gy - COOKTOP.top + 0.02, 10), mats.castIron);
    foot.position.set(Math.cos(a) * 1.18, (gy + COOKTOP.top) / 2, Math.sin(a) * 1.18); grate.add(foot);
  }
  // Second (decor) burner, back-left, unlit
  const b2 = burner.clone(true); b2.position.set(BURNER.x - 1.75, COOKTOP.top, BURNER.z - 1.05); b2.scale.setScalar(0.55);
  b2.traverse((c) => { if (c.isInstancedMesh || c.isPointLight || (c.material && c.material.blending === THREE.AdditiveBlending)) c.visible = false; });
  root.add(b2);

  // Knobs (front of cooktop)
  const knob = makeKnob(mats); knob.position.set(KNOB_POS.x, COOKTOP.top, KNOB_POS.z); root.add(knob);
  const knob2 = makeKnob(mats); knob2.position.set(KNOB_POS.x, COOKTOP.top, KNOB_POS.z - 1.0); knob2.scale.setScalar(0.8); root.add(knob2);
  knob2.traverse((c) => { c.userData = {}; });
  // heat tick marks around the main knob
  const ticks = new THREE.Group(); ticks.position.copy(knob.position); ticks.position.y += 0.005; root.add(ticks);
  for (let i = 0; i <= 10; i++) {
    const a = (-135 + i * 27) * Math.PI / 180;
    const t = mesh(new THREE.CircleGeometry(i % 5 === 0 ? 0.035 : 0.022, 10), TICK[i > 6 ? 2 : i > 3 ? 1 : 0]);
    t.rotation.x = -Math.PI / 2; t.position.set(Math.sin(a) * 0.45, 0, -Math.cos(a) * 0.45); ticks.add(t);
  }

  // ---------- Decor on counter ----------
  root.add(utensilCrock(mats, -6.45, -1.15));
  root.add(bigPlant(mats, 6.4, -2.5));
  const board = mesh(new RoundedBoxGeometry(2.4, 3.0, 0.14, 4, 0.06), mats.wood, { cast: true });
  board.position.set(-3.6, 1.45, -3.45); board.rotation.x = -0.12; root.add(board);
  const boardHole = mesh(new THREE.TorusGeometry(0.16, 0.035, 8, 20), mats.counterEdge); boardHole.position.set(-3.6, 2.7, -3.36); boardHole.rotation.x = -0.12; root.add(boardHole);

  // ---------- Animation hooks ----------
  const dummy = new THREE.Object3D();
  const flameSeeds = Array.from({ length: flameCount }, () => Math.random() * 10);
  function updateFlames(heat, t) {
    const h = heat / 10;
    const on = heat > 0.05;
    flamesOuter.visible = flamesInner.visible = on;
    flameLight.intensity = on ? 0.6 + h * 2.4 : 0;
    glow.material.opacity = on ? 0.15 + h * 0.35 : 0;
    if (!on) return;
    for (let i = 0; i < flameCount; i++) {
      const a = (i / flameCount) * Math.PI * 2;
      const flick = 0.85 + Math.sin(t * 18 + flameSeeds[i] * 3) * 0.1 + Math.sin(t * 31 + flameSeeds[i]) * 0.06;
      const len = (0.6 + h * 1.0) * flick;          // flames lick out under the pan, never through it
      const tilt = 0.9 + h * 0.45;
      dummy.position.set(Math.cos(a) * 0.5, 0.1, Math.sin(a) * 0.5);
      dummy.rotation.set(0, -a, 0);
      dummy.rotateZ(-tilt);
      dummy.scale.set(1 + h * 0.3, len, 1 + h * 0.3);
      dummy.updateMatrix();
      flamesOuter.setMatrixAt(i, dummy.matrix);
      dummy.scale.set(0.55, len * 0.55, 0.55); dummy.updateMatrix();
      flamesInner.setMatrixAt(i, dummy.matrix);
    }
    flamesOuter.instanceMatrix.needsUpdate = flamesInner.instanceMatrix.needsUpdate = true;
  }

  // theme presets recolour these at runtime, so they keep their own materials; everything else can bake its colour
  const live = new Set([mats.wall, mats.floor, mats.cabinet, mats.cabinetDark, mats.counterEdge, mats.windowFrame, mats.tile, mats.counter, shadeMat, sky.material]);
  mergeStatic(root, (o) => o === knob, [], (m) => !live.has(m));
  return { root, knob, updateFlames, sky, shadeMat, pickables: [] };
}

function roundedRectPath(p, x, y, w, h, r) {
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r);
  p.lineTo(x + w, y + h - r); p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
}

function makeKnob(mats) {
  const g = new THREE.Group();
  const base = mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.05, 40), mats.cooktopTrim); base.position.y = 0.025; g.add(base);
  const pts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.3, 0), new THREE.Vector2(0.31, 0.04), new THREE.Vector2(0.29, 0.2), new THREE.Vector2(0.27, 0.23), new THREE.Vector2(0, 0.24)];
  const body = mesh(new THREE.LatheGeometry(pts, 40), mats.knob, { cast: true }); body.position.y = 0.04;
  const turn = new THREE.Group(); turn.position.y = 0.0; g.add(turn); turn.add(body);
  const grip = mesh(new RoundedBoxGeometry(0.12, 0.16, 0.5, 3, 0.05), mats.knob, { cast: true }); grip.position.set(0, 0.34, 0); turn.add(grip);
  const mark = mesh(new RoundedBoxGeometry(0.06, 0.03, 0.16, 2, 0.012), mats.knobMark); mark.position.set(0, 0.425, -0.15); turn.add(mark);
  // big invisible hit area for touch
  const hit = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.6, 16), new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = 0.3; g.add(hit);
  g.traverse((c) => { c.userData.interact = 'knob'; });
  g.userData.turn = turn;
  return g;
}

function skyTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 160;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 160); g.addColorStop(0, '#9fd6ff'); g.addColorStop(0.7, '#d9f0ff'); g.addColorStop(1, '#ffe9d6');
  x.fillStyle = g; x.fillRect(0, 0, 256, 160);
  x.fillStyle = 'rgba(255,255,255,.95)';
  for (const [cx, cy, s] of [[60, 50, 1], [180, 35, 0.8], [140, 95, 0.6]]) {
    for (const [dx, dy, r] of [[0, 0, 18], [18, -6, 14], [-16, 3, 12], [32, 4, 11]]) { x.beginPath(); x.arc(cx + dx * s, cy + dy * s, r * s, 0, 7); x.fill(); }
  }
  // distant hills
  x.fillStyle = '#b9e3b0'; x.beginPath(); x.moveTo(0, 160); for (let i = 0; i <= 256; i += 8) x.lineTo(i, 128 + Math.sin(i * 0.03) * 10); x.lineTo(256, 160); x.fill();
  x.fillStyle = '#9fd39a'; x.beginPath(); x.moveTo(0, 160); for (let i = 0; i <= 256; i += 8) x.lineTo(i, 142 + Math.sin(i * 0.05 + 2) * 7); x.lineTo(256, 160); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function pottedHerb(mats, x, y, z, s, seed) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s);
  const potPts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.42, 0), new THREE.Vector2(0.5, 0.7), new THREE.Vector2(0.56, 0.72), new THREE.Vector2(0.56, 0.85), new THREE.Vector2(0.48, 0.85), new THREE.Vector2(0.46, 0.75), new THREE.Vector2(0, 0.75)];
  g.add(mesh(new THREE.LatheGeometry(potPts, 24), seed % 2 ? mats.ceramicPink : mats.terracotta, { cast: true }));
  const leafGeo = leafGeometry();
  for (let i = 0; i < 9; i++) {
    const l = mesh(leafGeo, i % 2 ? mats.leaf : mats.leafDark, { cast: true });
    const a = i * 2.4 + seed;
    l.position.set(Math.cos(a) * 0.12, 0.75, Math.sin(a) * 0.12);
    l.rotation.set(0, -a, 0.5 + (i % 3) * 0.25); l.scale.setScalar(0.7 + (i % 4) * 0.12);
    g.add(l);
  }
  return g;
}

let _leafGeo;
function leafGeometry() {
  if (_leafGeo) return _leafGeo;
  const s = new THREE.Shape();
  s.moveTo(0, 0); s.quadraticCurveTo(0.25, 0.35, 0, 0.9); s.quadraticCurveTo(-0.25, 0.35, 0, 0);
  _leafGeo = new THREE.ShapeGeometry(s, 6);
  const p = _leafGeo.attributes.position; // gentle curl
  for (let i = 0; i < p.count; i++) { const yy = p.getY(i); p.setZ(i, Math.sin(yy * 2.4) * 0.12 + Math.abs(p.getX(i)) * 0.3); }
  _leafGeo.computeVertexNormals();
  return _leafGeo;
}

function bigPlant(mats, x, z) {
  const g = pottedHerb(mats, x, 0, z, 1.25, 1);
  g.children[0].material = mats.ceramicMint;
  return g;
}

function jar(mats, x, y, z, r, h, fill) {
  const g = new THREE.Group(); g.position.set(x, y, z);
  const glass = mesh(new THREE.CylinderGeometry(r, r, h, 24, 1, true), mats.jar); glass.position.y = h / 2; glass.renderOrder = 2;
  const content = mesh(new THREE.CylinderGeometry(r * 0.9, r * 0.9, h * 0.68, 20), fill); content.position.y = h * 0.34 + 0.01;
  const lid = mesh(new RoundedBoxGeometry(r * 2.1, 0.14, r * 2.1, 2, 0.06), mats.lid); lid.position.y = h + 0.05;
  lid.geometry = new THREE.CylinderGeometry(r * 1.05, r * 1.05, 0.14, 24);
  g.add(content, glass, lid);
  return g;
}

function utensilCrock(mats, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const pts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.5, 0), new THREE.Vector2(0.55, 0.1), new THREE.Vector2(0.52, 1.1), new THREE.Vector2(0.56, 1.2), new THREE.Vector2(0.48, 1.2), new THREE.Vector2(0.44, 0.2), new THREE.Vector2(0, 0.2)];
  g.add(mesh(new THREE.LatheGeometry(pts, 28), mats.ceramicBlue, { cast: true, receive: true }));
  for (let i = 0; i < 3; i++) {
    const spoon = new THREE.Group();
    const handle = mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.0, 8), mats.wood, { cast: true }); handle.position.y = 1.0; spoon.add(handle);
    const bowl = mesh(new THREE.SphereGeometry(0.2, 14, 10), mats.wood, { cast: true }); bowl.scale.set(1, 1.4, 0.35); bowl.position.y = 2.1; spoon.add(bowl);
    spoon.position.set((i - 1) * 0.16, 0.1, (i % 2) * 0.1); spoon.rotation.set((i - 1) * 0.08, i, (i - 1) * 0.2);
    g.add(spoon);
  }
  return g;
}
