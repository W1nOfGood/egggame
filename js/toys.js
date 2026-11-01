// Everything else in the kitchen that answers a touch: tap for a reaction, and things standing on the counter can be dragged too.
// Also builds the extra decorations. Each toy is merged on its own, so it stays cheap to draw but can still move.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { audio } from './audio.js';
import { mergeStatic } from './merge.js';

const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.6, ...o });
const curve = (pts, n = 24) => new THREE.SplineCurve(pts.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(n);
const turned = (pts, mat, seg = 32, smooth = true) => { const m = new THREE.Mesh(new THREE.LatheGeometry(smooth ? curve(pts) : pts.map(([x, y]) => new THREE.Vector2(x, y)), seg), mat); m.castShadow = true; m.receiveShadow = true; return m; };
const put = (parent, geo, mat, x, y, z, sx = 1, sy = sx, sz = sx) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; };
const SPHERE = new THREE.SphereGeometry(1, 24, 18);

export function buildToys({ game, kitchen, decor, scene, ctx }) {
  const toys = [], g = game, any = () => true, hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const v = new THREE.Vector3();
  /** Make an object respond to touch. drag: it can be picked up and moved along the counter. */
  const register = (obj, { tap, drag = false, r = 0.5, keep = () => false, merge = true }) => {
    if (merge) mergeStatic(obj, keep, [], any);
    obj.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    const hit = new THREE.Mesh(new THREE.BoxGeometry(Math.max(size.x, 0.3) + 0.08, Math.max(size.y, 0.3) + 0.08, Math.max(size.z, 0.3) + 0.08), hitMat);
    hit.position.copy(c); scene.add(hit); obj.attach(hit);
    const toy = { obj, tap, drag, r };
    obj.traverse((o) => { o.userData.interact = 'toy'; o.userData.toy = toy; });
    kitchen.pickables.push(obj); toys.push(toy);
    if (drag) g.obstacles.push({ obj, r });
    return toy;
  };
  // ---- little reactions (each cancels the last on the same object)
  const moveAnim = (o, dur, step) => {
    const base = { y: o.position.y, rx: o.rotation.x, ry: o.rotation.y, rz: o.rotation.z, sy: o.scale.y };
    if (o.userData.toyBase) Object.assign(base, o.userData.toyBase); else o.userData.toyBase = base;
    const token = (o.userData.toyToken = (o.userData.toyToken || 0) + 1);
    g.anim(dur, (t) => { if (o.userData.toyToken === token) step(t, base); }, () => { if (o.userData.toyToken !== token) return; o.position.y = base.y; o.rotation.set(base.rx, base.ry, base.rz); o.scale.y = base.sy; o.userData.toyBase = null; });
  };
  const hop = (o, h = 0.3, dur = 0.45) => moveAnim(o, dur, (t, b) => { o.position.y = b.y + Math.sin(Math.PI * t) * h; o.rotation.z = b.rz + Math.sin(t * Math.PI * 4) * (1 - t) * 0.12; });
  const wiggle = (o, a = 0.12, dur = 0.6, axis = 'z') => moveAnim(o, dur, (t, b) => { o.rotation[axis] = b['r' + axis] + Math.sin(t * Math.PI * 5) * (1 - t) * a; });
  const squash = (o, dur = 0.4) => moveAnim(o, dur, (t, b) => { o.scale.y = b.sy * (1 + Math.sin(t * Math.PI * 3) * (1 - t) * 0.2); });
  const burst = (o, type, count = 8, up = 0.5, spread = 0.3) => { o.getWorldPosition(v); v.y += up; g.fx.emit(type, v, { count, spread }); };

  // ---------- what was already in the kitchen ----------
  const K = kitchen.toyParts, D = decor.toyParts;
  register(D.mug, { drag: true, r: 0.42, merge: false, tap: () => { moveAnim(D.mug, 0.7, (t, b) => { const k = Math.sin(Math.PI * t); D.mug.position.y = b.y + k * 0.3; D.mug.rotation.z = b.rz + k * 0.5; }); audio.pop(); burst(D.mug, 'wisp', 3, 0.7); g.toast('Mmm, still warm ☕'); } });
  register(D.pot, { drag: true, r: 0.7, merge: false, tap: () => { wiggle(D.pot, 0.08, 0.9); audio.whistle(); burst(D.pot, 'steam', 6, 0.9, 0.2); } });
  register(D.jar, { drag: true, r: 0.55, merge: false, tap: () => { hop(D.jar, 0.25); audio.clink(); burst(D.jar, 'sparkle', 8, 1.2); decor.react(3); g.toast('Noxie stole a cookie! 🍪'); } });
  register(D.candle, { drag: true, r: 0.3, merge: false, tap: () => { const on = decor.toggleCandle(); audio.pop(); if (!on) burst(D.candle, 'wisp', 3, 0.7, 0.05); g.toast(on ? 'Candle lit 🕯️' : 'Blown out 💨'); } });
  register(D.clock, { merge: false, tap: () => { decor.spinClock(); audio.chime(); } });
  register(K.crock, { drag: true, r: 0.55, merge: false, tap: () => { wiggle(K.crock, 0.12); audio.scrape(1); } });
  register(K.plant, { drag: true, r: 0.9, merge: false, tap: () => { wiggle(K.plant, 0.07, 0.9); audio.pick(); burst(K.plant, 'sparkle', 5, 1.5, 0.5); } });
  register(K.board, { merge: false, tap: () => { wiggle(K.board, 0.05, 0.8); audio.thud(); } });
  register(K.lamp, { merge: false, tap: () => { wiggle(K.lamp, 0.12, 1.4, 'x'); audio.clink(); } });
  register(K.knob2, { merge: false, tap: () => { wiggle(K.knob2, 0.9, 0.6, 'y'); audio.knob(); g.toast('This burner is just for show 😉'); } });
  K.jars.forEach((j) => register(j, { merge: false, tap: () => { hop(j, 0.2); audio.clink(); } }));
  K.herbs.forEach((h) => register(h, { merge: false, tap: () => { squash(h); audio.pick(); burst(h, 'sparkle', 4, 0.5, 0.2); } }));
  K.doors.forEach((d) => { let open = false; const side = d.userData.side; register(d, { merge: false, tap: () => { open = !open; audio.thud(); const from = d.rotation.y, to = open ? side * 1.2 : 0; d.userData.toyToken = (d.userData.toyToken || 0) + 1; d.userData.toyBase = null; g.anim(0.35, (t) => { d.rotation.y = from + (to - from) * t * t * (3 - 2 * t); }); } }); });
  register(kitchen.sky, { merge: false, tap: () => { ctx.nextWeather(); audio.chime(); } });
  const door = g.props.fridge.userData.door;
  register(door, { merge: false, tap: () => { const a = door.rotation.y; door.userData.toyToken = (door.userData.toyToken || 0) + 1; door.userData.toyBase = null; audio.clink(); g.anim(0.8, (t) => { door.rotation.y = a + Math.sin(Math.PI * t) * 0.5; }, () => { door.rotation.y = a; audio.thud(); }); } });
  const lights = new THREE.Group(); scene.add(lights); put(lights, new THREE.BoxGeometry(16, 0.55, 0.3), hitMat, 0, 3.25, -3.55);
  register(lights, { merge: false, tap: () => { decor.fairyParty(); audio.chime(); } });

  // ---------- new decorations ----------
  const spot = (x, z, ry = 0) => { const o = new THREE.Group(); o.position.set(x, 0, z); o.rotation.y = ry; scene.add(o); return o; };

  // a stack of cookbooks: opens the Recipe Book
  const books = spot(-2.4, 2.62, 0.18);
  [[0, 0.075, 0.02, '#7a52b3', 1.02], [0.05, 0.215, -0.14, '#ff8fc8', 0.92], [-0.02, 0.345, 0.1, '#7fd1b9', 0.82]].forEach(([x, y, r, col, w]) => {
    const b = new THREE.Group(); b.position.set(x, y, 0); b.rotation.y = r; books.add(b);
    put(b, new RoundedBoxGeometry(w, 0.13, w * 0.72, 3, 0.022), M(col, { roughness: 0.55, clearcoat: 0.2 }), 0, 0, 0);
    put(b, new THREE.BoxGeometry(w * 0.93, 0.095, w * 0.74), M('#fff8ea', { roughness: 0.85, clearcoat: 0 }), 0.03, 0, 0);
    put(b, new THREE.BoxGeometry(0.03, 0.135, w * 0.73), M('#ffd86b', { metalness: 0.6, roughness: 0.3 }), -w * 0.34, 0, 0);
  });
  put(books, new THREE.BoxGeometry(0.05, 0.01, 0.42), M('#c8102e'), 0.16, 0.424, 0.27).rotation.x = 0.5;
  register(books, { drag: true, r: 0.62, tap: () => { audio.pick(); wiggle(books, 0.05, 0.4); ctx.openBook(); } });

  // a fruit bowl: the fruit jumps
  const fruit = spot(-0.72, 2.72);
  fruit.add(turned([[0.001, 0.03], [0.16, 0.03], [0.34, 0.14], [0.56, 0.3], [0.6, 0.34], [0.53, 0.31], [0.3, 0.17], [0.001, 0.1]], M('#c9b6e4', { clearcoat: 1, roughness: 0.15 }), 40));
  const fm = { apple: M('#d62839', { clearcoat: 1, roughness: 0.2 }), green: M('#9acb4d', { clearcoat: 1, roughness: 0.25 }), plum: M('#5b2a86', { clearcoat: 1, roughness: 0.18 }), stem: M('#5c3d22') };
  [[-0.18, 0.31, 0.08, 0.18, fm.apple], [0.2, 0.3, 0.05, 0.17, fm.green], [0, 0.32, -0.18, 0.16, fm.plum], [0.02, 0.44, 0.08, 0.14, fm.apple]].forEach(([x, y, z, r, mat]) => {
    put(fruit, SPHERE, mat, x, y, z, r, r * 0.92, r);
    put(fruit, new THREE.CylinderGeometry(0.008, 0.012, 0.09, 6), fm.stem, x + 0.01, y + r * 0.95, z).rotation.z = -0.25;
  });
  register(fruit, { drag: true, r: 0.65, tap: () => { hop(fruit, 0.22, 0.5); audio.plop(); } });

  // a little ghost: floats up and says boo
  const ghost = spot(0.92, 2.72, -0.15), boo = new THREE.Group(); ghost.add(boo);
  const cloth = M('#fbf7ff', { roughness: 0.6, clearcoat: 0.3, sheen: 1, sheenColor: new THREE.Color('#d9c2ff'), side: THREE.DoubleSide });
  const sheet = turned([[0.001, 0.72], [0.14, 0.7], [0.24, 0.58], [0.28, 0.36], [0.31, 0.14], [0.37, 0.01]], cloth, 40);
  const sp = sheet.geometry.attributes.position; for (let i = 0; i < sp.count; i++) { const y = sp.getY(i), x = sp.getX(i), z = sp.getZ(i), k = Math.max(0, 1 - y / 0.3); const w = Math.sin(Math.atan2(z, x) * 8) * 0.045 * k; sp.setX(i, x * (1 + w * 3)); sp.setZ(i, z * (1 + w * 3)); sp.setY(i, y + Math.abs(Math.sin(Math.atan2(z, x) * 8)) * 0.035 * k); } sheet.geometry.computeVertexNormals();
  boo.add(sheet);
  const inky = M('#241a2e', { clearcoat: 1, roughness: 0.15 });
  for (const s of [-1, 1]) { put(boo, SPHERE, inky, s * 0.085, 0.47, 0.235, 0.038, 0.056, 0.02); put(boo, SPHERE, M('#ffb0d4', { roughness: 0.7, clearcoat: 0 }), s * 0.15, 0.39, 0.215, 0.04, 0.022, 0.012); }
  put(boo, SPHERE, inky, 0, 0.37, 0.25, 0.026, 0.032, 0.012);
  for (const s of [-1, 1]) put(boo, SPHERE, cloth, s * 0.3, 0.3, 0.05, 0.07, 0.09, 0.07);
  register(ghost, { drag: true, r: 0.42, tap: () => { hop(ghost, 0.55, 0.9); audio.boo(); g.toast('Boo! 👻'); } });

  // a toaster: toast pops up
  const toaster = spot(6.72, -2.85, -0.1), chrome = M('#d8dbe4', { metalness: 1, roughness: 0.16, clearcoat: 1 }), blackP = M('#231c2e', { roughness: 0.55, clearcoat: 0.2 });
  put(toaster, new RoundedBoxGeometry(0.9, 0.56, 0.52, 6, 0.13), chrome, 0, 0.33, 0);
  for (const x of [-0.36, 0.36]) put(toaster, new RoundedBoxGeometry(0.06, 0.08, 0.5, 2, 0.02), blackP, x, 0.04, 0);
  for (const z of [-0.1, 0.1]) put(toaster, new RoundedBoxGeometry(0.66, 0.012, 0.075, 1, 0.005), blackP, 0, 0.61, z);
  put(toaster, new THREE.BoxGeometry(0.04, 0.26, 0.012), blackP, 0.46, 0.36, 0);
  put(toaster, new RoundedBoxGeometry(0.1, 0.05, 0.08, 2, 0.015), M('#ff8fc8', { clearcoat: 1 }), 0.48, 0.44, 0);
  put(toaster, SPHERE, M('#ff8fc8', { clearcoat: 1, roughness: 0.2 }), 0, 0.2, 0.265, 0.045, 0.045, 0.02);
  const slices = new THREE.Group(); slices.name = 'slices'; slices.position.y = -0.2; toaster.add(slices);
  const crust = M('#c88a46', { roughness: 0.75, clearcoat: 0 }), crumb = M('#f2c677', { roughness: 0.9, clearcoat: 0 });
  for (const z of [-0.1, 0.1]) { put(slices, new RoundedBoxGeometry(0.56, 0.44, 0.05, 3, 0.05), crust, 0, 0.58, z); put(slices, new RoundedBoxGeometry(0.5, 0.38, 0.055, 2, 0.04), crumb, 0, 0.58, z); }
  mergeStatic(slices, () => false, [], any);
  register(toaster, { drag: true, r: 0.6, keep: (o) => o === slices, tap: () => { audio.knob(); burst(toaster, 'wisp', 3, 0.7, 0.2); const t0 = slices.userData.tok = (slices.userData.tok || 0) + 1; g.anim(1, (t) => { if (slices.userData.tok !== t0) return; slices.position.y = -0.2 + Math.sin(Math.min(1, t * 1.15) * Math.PI) * 0.42; }, () => { if (slices.userData.tok === t0) { slices.position.y = -0.2; audio.ding(); } }); } });

  // a pumpkin lantern: tap to light it
  const pumpkin = spot(6.45, 1.55, -0.4), pm = M('#ef7d22', { roughness: 0.42, clearcoat: 0.5 });
  for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; put(pumpkin, SPHERE, pm, Math.cos(a) * 0.2, 0.28, Math.sin(a) * 0.2, 0.2, 0.28, 0.2); }
  put(pumpkin, new THREE.CylinderGeometry(0.035, 0.075, 0.18, 10), M('#5d7a2c'), 0.015, 0.59, 0).rotation.z = -0.25;
  const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.1, 0.05, 0.02) }), face = new THREE.Group(); face.position.set(0, 0.29, 0.385); pumpkin.add(face);
  const tri = (x, y, s, flip = false) => { const sh = new THREE.Shape(); sh.moveTo(-s, flip ? s : -s * 0.7); sh.lineTo(s, flip ? s : -s * 0.7); sh.lineTo(0, flip ? -s * 0.7 : s); const m = new THREE.Mesh(new THREE.ShapeGeometry(sh), glow); m.position.set(x, y, 0.002); face.add(m); };
  tri(-0.11, 0.08, 0.055); tri(0.11, 0.08, 0.055); tri(0, 0, 0.03);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.022, 6, 16, Math.PI), glow); smile.rotation.z = Math.PI; smile.position.set(0, -0.03, 0); smile.scale.y = 0.7; face.add(smile);
  let lit = false;
  register(pumpkin, { drag: true, r: 0.45, tap: () => { lit = !lit; glow.color.setRGB(lit ? 3.4 : 0.1, lit ? 1.7 : 0.05, lit ? 0.35 : 0.02); audio.pop(); squash(pumpkin, 0.35); g.toast(lit ? 'Spooky! 🎃' : 'Lantern out'); } });

  // three potions: they fizz
  const potions = spot(6.72, 2.62, 0.3), corkM = M('#b98a5a', { roughness: 0.85, clearcoat: 0 });
  [[-0.17, 0.02, 0.86, '#ff5fb0'], [0.15, 0.08, 1.05, '#7fd1b9'], [0, -0.14, 0.75, '#b48cff']].forEach(([x, z, s, col]) => {
    const p = new THREE.Group(); p.position.set(x, 0, z); p.scale.setScalar(s); potions.add(p);
    p.add(turned([[0.001, 0], [0.09, 0.005], [0.145, 0.07], [0.15, 0.14], [0.09, 0.24], [0.045, 0.3], [0.045, 0.4], [0.055, 0.42]], M('#eafaff', { transparent: true, opacity: 0.3, roughness: 0.04, clearcoat: 1, depthWrite: false }), 24));
    p.add(turned([[0.001, 0.015], [0.08, 0.02], [0.125, 0.07], [0.13, 0.14], [0.085, 0.2], [0.001, 0.205]], M(col, { roughness: 0.12, clearcoat: 1 }), 24));
    put(p, new THREE.CylinderGeometry(0.04, 0.034, 0.08, 10), corkM, 0, 0.44, 0);
  });
  register(potions, { drag: true, r: 0.4, tap: () => { wiggle(potions, 0.1, 0.5); audio.plop(); burst(potions, 'bubble', 10, 0.45, 0.25); burst(potions, 'sparkle', 6, 0.5, 0.2); } });

  // a framed photo on the tiles: opens the Scrapbook
  const frame = new THREE.Group(); frame.position.set(-6.65, 2.25, -3.66); frame.rotation.z = -0.03; scene.add(frame);
  put(frame, new RoundedBoxGeometry(1.0, 1.2, 0.07, 3, 0.025), M('#7a52b3', { clearcoat: 1, roughness: 0.25 }), 0, 0, 0);
  put(frame, new THREE.BoxGeometry(0.84, 1.04, 0.01), M('#fff8ec', { roughness: 0.8, clearcoat: 0 }), 0, 0, 0.037);
  const cv = document.createElement('canvas'); cv.width = 192; cv.height = 240; const c = cv.getContext('2d');
  const grad = c.createLinearGradient(0, 0, 0, 240); grad.addColorStop(0, '#3a2758'); grad.addColorStop(1, '#ff8fc8'); c.fillStyle = grad; c.fillRect(0, 0, 192, 240);
  c.fillStyle = '#fff4e6'; c.beginPath(); c.arc(136, 56, 26, 0, 6.3); c.fill(); c.fillStyle = '#3a2758'; c.beginPath(); c.arc(148, 50, 22, 0, 6.3); c.fill();
  c.font = '84px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('🍳', 96, 150);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  put(frame, new THREE.PlaneGeometry(0.68, 0.85), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.25 }), 0, 0, 0.044).castShadow = false;
  register(frame, { tap: () => { audio.pick(); wiggle(frame, 0.05, 0.4); ctx.openScrapbook(); } });

  return toys;
}
