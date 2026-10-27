// Cozy set dressing: Noxie the kitchen imp, fairy lights, a steaming mug, the radio, a star clock,
// a skull-and-bow cookie jar, a purple teapot and a candle. Everything is static geometry except a few
// cheap per-frame animations; glowing bits use bright unlit colours so the bloom pass picks them up.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { audio } from './audio.js';
import { mergeStatic } from './merge.js';

const mesh = (geo, mat, cast = true) => { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = true; return m; };
const P = (o) => new THREE.MeshPhysicalMaterial(o);
const S = (o) => new THREE.MeshStandardMaterial(o);
const tag = (g, onTap) => { g.traverse((c) => { c.userData.interact = 'pet'; }); g.userData.onTap = onTap; };

export function buildDecor(scene, mats, fx) {
  const root = new THREE.Group(); scene.add(root);
  const M = {
    fur: P({ color: '#1d1426', roughness: 0.55, sheen: 1, sheenColor: new THREE.Color('#8a5fd1'), sheenRoughness: 0.4, clearcoat: 0.25 }),
    wing: P({ color: '#6b4c9a', roughness: 0.45, sheen: 0.6, sheenColor: new THREE.Color('#ff8fc8'), side: THREE.DoubleSide }),
    pink: P({ color: '#ff8fc8', roughness: 0.35, clearcoat: 0.8 }),
    eyeW: P({ color: '#fff7fb', roughness: 0.15, clearcoat: 1 }),
    eyeP: P({ color: '#3a1d5c', roughness: 0.1, clearcoat: 1 }),
    shine: new THREE.MeshBasicMaterial({ color: '#ffffff' }),
    lavender: P({ color: '#c9b6e4', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
    plum: P({ color: '#7a52b3', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
    bone: P({ color: '#fff4e6', roughness: 0.4, clearcoat: 0.5 }),
    dark: S({ color: '#241a2e', roughness: 0.6 }),
    wire: S({ color: '#2b2233', roughness: 0.7 }),
    wax: P({ color: '#fff0de', roughness: 0.5, transmission: 0, sheen: 0.4 }),
    flame: new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2.2, 0.8), transparent: true, opacity: 0.95, depthWrite: false }),
    coffee: P({ color: '#5b3a28', roughness: 0.15, clearcoat: 1 }),
  };
  const pickables = [];

  // ---------------- Noxie: an original little black kitten-imp with bat wings and a pink bow ----------------
  const nox = new THREE.Group(); nox.position.set(4.85, 0, -1.3); nox.rotation.y = -0.35; nox.scale.setScalar(1.2); root.add(nox);
  const body = new THREE.Group(); nox.add(body);
  const torso = mesh(new THREE.SphereGeometry(0.42, 32, 24), M.fur); torso.scale.set(1, 0.88, 0.92); torso.position.y = 0.37; body.add(torso);
  const belly = mesh(new THREE.SphereGeometry(0.25, 24, 16), M.lavender, false); belly.scale.set(1, 0.9, 0.5); belly.position.set(0, 0.33, 0.29); body.add(belly);
  for (const s of [-1, 1]) { const paw = mesh(new THREE.SphereGeometry(0.11, 16, 12), M.fur); paw.scale.set(1, 0.7, 1.2); paw.position.set(s * 0.18, 0.07, 0.3); body.add(paw); }
  const head = new THREE.Group(); head.position.y = 0.92; body.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.38, 32, 24), M.fur); skull.scale.set(1.08, 0.94, 0.95); head.add(skull);
  const ears = [];
  for (const s of [-1, 1]) {
    const ear = new THREE.Group(); ear.position.set(s * 0.22, 0.25, -0.02); ear.rotation.z = -s * 0.38; head.add(ear);
    const outer = mesh(new THREE.ConeGeometry(0.14, 0.32, 16), M.fur); outer.position.y = 0.12; ear.add(outer);
    const inner = mesh(new THREE.ConeGeometry(0.08, 0.2, 12), M.pink, false); inner.position.set(0, 0.1, 0.06); ear.add(inner);
    ears.push(ear);
  }
  // pink bow on the right ear
  const bow = new THREE.Group(); bow.position.set(0.3, 0.3, 0.08); bow.rotation.z = -0.4; head.add(bow);
  for (const s of [-1, 1]) { const loop = mesh(new THREE.ConeGeometry(0.09, 0.16, 12), M.pink); loop.rotation.z = s * Math.PI / 2; loop.position.x = s * 0.08; bow.add(loop); }
  bow.add(mesh(new THREE.SphereGeometry(0.045, 12, 8), M.pink));
  // big glossy eyes
  const eyes = new THREE.Group(); head.add(eyes);
  for (const s of [-1, 1]) {
    const e = new THREE.Group(); e.position.set(s * 0.15, 0.02, 0.31); eyes.add(e);
    const w = mesh(new THREE.SphereGeometry(0.1, 20, 16), M.eyeW, false); w.scale.set(1, 1.15, 0.5); e.add(w);
    const p = mesh(new THREE.SphereGeometry(0.072, 20, 16), M.eyeP, false); p.scale.set(1, 1.15, 0.5); p.position.z = 0.025; e.add(p);
    const h = mesh(new THREE.SphereGeometry(0.022, 8, 6), M.shine, false); h.position.set(-0.025, 0.04, 0.06); e.add(h);
    const h2 = mesh(new THREE.SphereGeometry(0.011, 6, 4), M.shine, false); h2.position.set(0.025, -0.025, 0.06); e.add(h2);
  }
  for (const s of [-1, 1]) { const ch = mesh(new THREE.CircleGeometry(0.05, 16), new THREE.MeshBasicMaterial({ color: '#ff8fc8', transparent: true, opacity: 0.55 }), false); ch.position.set(s * 0.25, -0.1, 0.33); ch.rotation.y = s * 0.5; head.add(ch); }
  const grin = mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 16, Math.PI), M.pink, false); grin.rotation.z = Math.PI; grin.position.set(0, -0.08, 0.355); head.add(grin);
  const fang = mesh(new THREE.ConeGeometry(0.012, 0.03, 6), M.bone, false); fang.rotation.z = Math.PI; fang.position.set(0.03, -0.135, 0.35); head.add(fang);
  // bat wings
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0); wingShape.quadraticCurveTo(0.25, 0.32, 0.55, 0.36); wingShape.quadraticCurveTo(0.5, 0.22, 0.56, 0.1);
  wingShape.quadraticCurveTo(0.42, 0.08, 0.4, -0.04); wingShape.quadraticCurveTo(0.28, 0.0, 0.22, -0.1); wingShape.quadraticCurveTo(0.12, -0.02, 0, 0);
  const wingGeo = new THREE.ShapeGeometry(wingShape, 10);
  const wings = [];
  for (const s of [-1, 1]) {
    const piv = new THREE.Group(); piv.position.set(s * 0.22, 0.55, -0.26); body.add(piv);
    const w = mesh(wingGeo, M.wing); w.scale.set(s, 1, 1); piv.add(w); wings.push(piv);
  }
  // curly tail with a little heart tip
  const tailCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.15, -0.36), new THREE.Vector3(0.12, 0.2, -0.6), new THREE.Vector3(0.28, 0.45, -0.62), new THREE.Vector3(0.24, 0.66, -0.48)]);
  const tail = mesh(new THREE.TubeGeometry(tailCurve, 20, 0.04, 8), M.fur); body.add(tail);
  const tip = mesh(new THREE.SphereGeometry(0.07, 12, 8), M.pink); tip.position.set(0.24, 0.7, -0.46); tip.scale.set(1, 0.8, 0.6); body.add(tip);
  // outfits (bought in the shop) and a nap cushion
  const hats = {};
  {
    const chef = new THREE.Group(); chef.position.set(-0.04, 0.3, -0.02); chef.rotation.z = 0.12;
    const band = mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.14, 24), M.bone); band.position.y = 0.05; chef.add(band);
    for (const [x, y, z, r] of [[0, 0.2, 0, 0.17], [-0.12, 0.17, 0.04, 0.12], [0.12, 0.17, 0.03, 0.12], [0.02, 0.18, -0.11, 0.12]]) { const p = mesh(new THREE.SphereGeometry(r, 16, 12), M.bone); p.position.set(x, y, z); chef.add(p); }
    hats['hat-chef'] = chef;
    const witch = new THREE.Group(); witch.position.set(-0.03, 0.3, -0.02); witch.rotation.z = 0.15;
    const brim = mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.025, 32), M.plum); witch.add(brim);
    const cone = mesh(new THREE.ConeGeometry(0.2, 0.52, 24), M.plum); cone.position.y = 0.27; cone.rotation.z = 0.12; witch.add(cone);
    const wb = mesh(new THREE.TorusGeometry(0.19, 0.025, 8, 24), M.pink); wb.rotation.x = Math.PI / 2; wb.position.y = 0.06; witch.add(wb);
    const st = mesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.6, 0.6) }), false); st.position.set(0.03, 0.33, 0.17); witch.add(st);
    hats['hat-witch'] = witch;
    const crown = new THREE.Group(); crown.position.set(-0.02, 0.33, 0);
    const gold = new THREE.MeshStandardMaterial({ color: '#f2c45a', metalness: 1, roughness: 0.25 });
    crown.add(mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.09, 24, 1, true), gold));
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, sp = mesh(new THREE.ConeGeometry(0.035, 0.09, 8), gold); sp.position.set(Math.cos(a) * 0.15, 0.08, Math.sin(a) * 0.15); crown.add(sp); const gem = mesh(new THREE.SphereGeometry(0.018, 8, 6), M.pink, false); gem.position.set(Math.cos(a) * 0.155, 0.0, Math.sin(a) * 0.155); crown.add(gem); }
    hats['hat-crown'] = crown;
    for (const h of Object.values(hats)) { h.visible = false; head.add(h); }
  }
  const cushion = mesh(new THREE.SphereGeometry(0.62, 28, 14), M.pink); cushion.scale.set(1, 0.22, 1); cushion.position.y = 0.08; cushion.visible = false; nox.add(cushion);
  const noxHit = new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 8), new THREE.MeshBasicMaterial({ visible: false })); noxHit.position.y = 0.7; nox.add(noxHit);
  const noxState = { hop: 0, flop: 0, blink: 2, twitch: 3, hearts: 0, mood: 0 };
  const pet = () => { noxState.hop = 1; noxState.hearts = 0.9; audio.purr && audio.purr(); };
  tag(nox, pet); pickables.push(nox);

  // ---------------- Fairy lights draped along the top of the backsplash ----------------
  const bulbs = [], hooks = [-8, -5.2, -2.6, 0, 2.6, 5.2, 8];
  const wirePts = [];
  for (let h = 0; h < hooks.length - 1; h++) {
    const a = hooks[h], b = hooks[h + 1];
    for (let i = 0; i < 12; i++) { const t = i / 12, x = a + (b - a) * t; wirePts.push(new THREE.Vector3(x, 3.5 - Math.sin(Math.PI * t) * 0.45, -3.6)); }
  }
  wirePts.push(new THREE.Vector3(8, 3.5, -3.6));
  const wireCurve = new THREE.CatmullRomCurve3(wirePts);
  root.add(mesh(new THREE.TubeGeometry(wireCurve, 160, 0.012, 4), M.wire, false));
  const NB = 34, bulbGeo = new THREE.SphereGeometry(0.075, 10, 8); bulbGeo.scale(1, 1.3, 1);
  const bulbMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const fairy = new THREE.InstancedMesh(bulbGeo, bulbMat, NB); fairy.castShadow = false;
  const fairyCols = ['#ff8fc8', '#b48cff', '#ffd27a', '#8fd0ff'].map((c) => new THREE.Color(c));
  const dmy = new THREE.Object3D();
  for (let i = 0; i < NB; i++) {
    wireCurve.getPointAt((i + 0.5) / NB, dmy.position); dmy.position.y -= 0.08; dmy.updateMatrix(); fairy.setMatrixAt(i, dmy.matrix);
    bulbs.push({ c: fairyCols[i % 4], seed: Math.random() * 10 });
    fairy.setColorAt(i, fairyCols[i % 4]);
  }
  root.add(fairy);
  let fairyLevel = 1;

  // ---------------- Steaming mug ----------------
  const mug = new THREE.Group(); mug.position.set(-6.2, 0, 0.55); mug.rotation.y = 0.6; root.add(mug);
  const mugPts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.3, 0), new THREE.Vector2(0.33, 0.04), new THREE.Vector2(0.34, 0.62), new THREE.Vector2(0.3, 0.62), new THREE.Vector2(0.29, 0.06), new THREE.Vector2(0, 0.06)];
  mug.add(mesh(new THREE.LatheGeometry(mugPts, 28), M.lavender));
  const mh = mesh(new THREE.TorusGeometry(0.15, 0.04, 8, 18, Math.PI * 1.3), M.lavender); mh.position.set(0.36, 0.33, 0); mh.rotation.z = -Math.PI * 0.65; mug.add(mh);
  const cof = mesh(new THREE.CircleGeometry(0.29, 24), M.coffee, false); cof.rotation.x = -Math.PI / 2; cof.position.y = 0.52; mug.add(cof);
  // a tiny pink heart on the side
  const mugHeart = mesh(new THREE.CircleGeometry(0.07, 3), M.pink, false); mugHeart.position.set(0, 0.34, 0.345); mugHeart.rotation.z = -Math.PI / 2; mug.add(mugHeart);

  // ---------------- Radio (tap to change the station) ----------------
  const radio = new THREE.Group(); radio.position.set(-5.75, 0, -2.6); radio.rotation.y = 0.35; root.add(radio);
  const radioBody = mesh(new RoundedBoxGeometry(1.25, 0.72, 0.5, 4, 0.12), M.plum); radioBody.position.y = 0.38; radio.add(radioBody);
  const grille = mesh(new THREE.CircleGeometry(0.24, 28), M.dark, false); grille.position.set(-0.27, 0.38, 0.252); radio.add(grille);
  for (let i = 0; i < 4; i++) { const r = mesh(new THREE.RingGeometry(0.05 + i * 0.05, 0.065 + i * 0.05, 28), M.lavender, false); r.position.set(-0.27, 0.38, 0.254); radio.add(r); }
  const dialFace = mesh(new THREE.PlaneGeometry(0.42, 0.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.2, 0.8) }), false); dialFace.position.set(0.28, 0.48, 0.252); radio.add(dialFace);
  const needle = mesh(new THREE.BoxGeometry(0.012, 0.16, 0.005), new THREE.MeshBasicMaterial({ color: '#ff4f9a' }), false); needle.position.set(0.2, 0.48, 0.256); radio.add(needle);
  for (const x of [0.16, 0.4]) { const k = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.06, 16), M.bone); k.rotation.x = Math.PI / 2; k.position.set(x, 0.24, 0.27); radio.add(k); }
  const ant = mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.8, 6), mats.chrome); ant.position.set(0.45, 0.95, -0.1); ant.rotation.z = -0.5; radio.add(ant);
  const antTip = mesh(new THREE.SphereGeometry(0.035, 8, 6), M.pink); antTip.position.set(0.65, 1.3, -0.1); radio.add(antTip);
  const radioHit = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 0.8), new THREE.MeshBasicMaterial({ visible: false })); radioHit.position.y = 0.45; radio.add(radioHit);
  const radioState = { bump: 0, onTap: null };
  tag(radio, () => { radioState.bump = 1; radioState.onTap && radioState.onTap(); }); pickables.push(radio);

  // ---------------- Star-shaped wall clock with real time ----------------
  const clock = new THREE.Group(); clock.position.set(3.95, 2.55, -3.62); root.add(clock);
  const star = new THREE.Shape();
  for (let i = 0; i <= 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 0.34 : 0.68; const x = Math.cos(a) * r, y = Math.sin(a) * r; i ? star.lineTo(x, y) : star.moveTo(x, y); }
  const starGeo = new THREE.ExtrudeGeometry(star, { depth: 0.08, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 3 });
  clock.add(mesh(starGeo, M.lavender, false));
  const face = mesh(new THREE.CircleGeometry(0.3, 32), M.bone, false); face.position.z = 0.13; clock.add(face);
  for (let i = 0; i < 12; i++) { const d = mesh(new THREE.CircleGeometry(i % 3 ? 0.012 : 0.022, 8), M.dark, false); const a = i * Math.PI / 6; d.position.set(Math.sin(a) * 0.24, Math.cos(a) * 0.24, 0.135); clock.add(d); }
  const hand = (len, w, mat) => { const g = new THREE.Group(); g.position.z = 0.14; const b = mesh(new THREE.BoxGeometry(w, len, 0.01), mat, false); b.position.y = len / 2 - 0.03; g.add(b); clock.add(g); return g; };
  const hHand = hand(0.15, 0.035, M.dark), mHand = hand(0.22, 0.022, M.dark), sHand = hand(0.24, 0.008, M.pink);
  const pin = mesh(new THREE.CircleGeometry(0.025, 12), M.pink, false); pin.position.z = 0.16; clock.add(pin);

  // ---------------- Skull-and-bow cookie jar ----------------
  const jar = new THREE.Group(); jar.position.set(5.05, 0, -2.6); root.add(jar);
  const jarPts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.4, 0), new THREE.Vector2(0.48, 0.15), new THREE.Vector2(0.5, 0.65), new THREE.Vector2(0.42, 0.8), new THREE.Vector2(0.3, 0.84)];
  jar.add(mesh(new THREE.LatheGeometry(jarPts, 32), M.lavender));
  const lid = mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.1, 32), M.plum); lid.position.y = 0.88; jar.add(lid);
  const sk = new THREE.Group(); sk.position.y = 1.08; sk.scale.setScalar(0.85); jar.add(sk);
  const cranium = mesh(new THREE.SphereGeometry(0.16, 20, 16), M.bone); cranium.scale.set(1, 0.95, 0.95); sk.add(cranium);
  const jaw = mesh(new RoundedBoxGeometry(0.18, 0.08, 0.14, 2, 0.03), M.bone); jaw.position.set(0, -0.12, 0.03); sk.add(jaw);
  for (const s of [-1, 1]) { const so = mesh(new THREE.SphereGeometry(0.042, 10, 8), M.dark, false); so.scale.set(1, 1.1, 0.5); so.position.set(s * 0.06, -0.01, 0.135); sk.add(so); }
  const skBow = bow.clone(); skBow.position.set(-0.11, 0.11, 0.04); skBow.rotation.z = 0.5; skBow.scale.setScalar(0.9); sk.add(skBow);

  // ---------------- Purple teapot ----------------
  const pot = new THREE.Group(); pot.position.set(-6.3, 0, 2.35); pot.rotation.y = 0.9; root.add(pot);
  const potPts = [new THREE.Vector2(0, 0), new THREE.Vector2(0.3, 0), new THREE.Vector2(0.5, 0.2), new THREE.Vector2(0.52, 0.45), new THREE.Vector2(0.4, 0.68), new THREE.Vector2(0.22, 0.75)];
  pot.add(mesh(new THREE.LatheGeometry(potPts, 32), M.plum));
  const potLid = mesh(new THREE.SphereGeometry(0.24, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.plum); potLid.position.y = 0.72; potLid.scale.y = 0.6; pot.add(potLid);
  const knob = mesh(new THREE.SphereGeometry(0.06, 10, 8), M.pink); knob.position.y = 0.88; pot.add(knob);
  const spout = mesh(new THREE.CylinderGeometry(0.04, 0.08, 0.5, 12), M.plum); spout.position.set(0.58, 0.45, 0); spout.rotation.z = -0.9; pot.add(spout);
  const ph = mesh(new THREE.TorusGeometry(0.2, 0.04, 8, 18, Math.PI * 1.2), M.plum); ph.position.set(-0.5, 0.4, 0); ph.rotation.z = Math.PI * 0.4; pot.add(ph);

  // ---------------- Candle ----------------
  const candle = new THREE.Group(); candle.position.set(5.0, 0, 0.95); root.add(candle);
  const holder = mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.06, 24), mats.brass); holder.position.y = 0.03; candle.add(holder);
  const wax = mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 20), M.wax); wax.position.y = 0.31; candle.add(wax);
  const flameGeo = new THREE.SphereGeometry(0.045, 12, 8); flameGeo.scale(1, 2.1, 1);
  const flame = mesh(flameGeo, M.flame, false); flame.position.y = 0.66; candle.add(flame);
  const halo = mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshBasicMaterial({ map: mats.tex.dot, color: new THREE.Color(1.2, 0.7, 0.3), transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }), false);
  halo.position.y = 0.66; candle.add(halo);
  let candleOn = 1;

  // bake the static decor into a handful of meshes (animated parts are left alone)
  const any = () => true;
  mergeStatic(root, (o) => o === nox || o === fairy || o === radio || o === flame || o === halo || o === hHand || o === mHand || o === sHand, [], any);
  mergeStatic(radio, (o) => o === needle, ['pet'], any);
  // Noxie: merge within each animated part so breathing, blinking and flapping still work
  const hatList = Object.values(hats);
  const PET = ['pet'];
  mergeStatic(eyes, undefined, PET, any);
  mergeStatic(head, (o) => ears.includes(o) || o === eyes || hatList.includes(o) || o === bow, PET, any);
  mergeStatic(body, (o) => o === torso || o === head || wings.includes(o), PET, any);
  hatList.forEach((h) => mergeStatic(h, undefined, PET, any));
  ears.forEach((e) => mergeStatic(e, undefined, PET, any));

  // ---------------- animation ----------------
  let t = 0, steamT = 0, frame = 0;
  const _w = new THREE.Vector3(), _tc = new THREE.Color();
  function update(dt, camera) {
    t += dt; frame++;
    const s = noxState;
    // breathing + wing flutter; hop when petted, flop on a bad dish
    const breathe = 1 + Math.sin(t * 2.2) * 0.025;
    torso.scale.y = 0.88 * breathe;
    s.hop = Math.max(0, s.hop - dt * 1.6); s.flop = Math.max(0, s.flop - dt * 0.5);
    body.position.y = (nox.userData.lift || 0) + Math.sin(Math.min(1, 1 - s.hop) * Math.PI) * 0.18 * (s.hop > 0 ? 1 : 0);
    body.rotation.z = s.flop > 0 ? Math.sin(Math.min(1, s.flop * 3) * Math.PI / 2) * 0.5 : Math.sin(t * 6) * 0.06 * s.hop;
    head.rotation.z = Math.sin(t * 0.7) * 0.06 + (s.hop > 0 ? Math.sin(t * 14) * 0.12 * s.hop : 0);
    const flap = s.hop > 0 ? Math.sin(t * 22) * 0.6 * s.hop : Math.sin(t * 1.8) * 0.12;
    wings[0].rotation.y = 0.5 + flap; wings[1].rotation.y = -0.5 - flap;
    s.twitch -= dt; if (s.twitch < 0) { s.twitch = 2.5 + Math.random() * 5; s.tw = 0.25; }
    if (s.tw > 0) { s.tw -= dt; ears[1].rotation.x = Math.sin((0.25 - s.tw) * 40) * 0.3; } else ears[1].rotation.x = 0;
    s.blink -= dt; if (s.blink < 0) { s.blink = 2 + Math.random() * 4; s.bl = 0.14; }
    if (s.bl > 0) { s.bl -= dt; eyes.scale.y = 0.15; } else eyes.scale.y = s.mood < 0 ? 0.5 : 1;
    if (s.hearts > 0) {
      s.hearts -= dt;
      if (Math.random() < dt * 9) { head.getWorldPosition(_w); fx.emit('heart', _w.setY(_w.y + 0.45), { spread: 0.4 }); }
    }
    // gentle sway of the mug steam
    steamT -= dt; if (steamT < 0) { steamT = 0.32; mug.getWorldPosition(_w); fx.emit('wisp', _w.setY(0.6), { spread: 0.18 }); }
    // fairy-light twinkle (cheap: 34 instance colours at 30 Hz)
    if (frame % 2 === 0 || dt > 1 / 70) {
      for (let i = 0; i < NB; i++) {
        const b = bulbs[i], tw = 0.75 + 0.25 * Math.sin(t * 2.3 + b.seed * 7) + 0.1 * Math.sin(t * 7.1 + b.seed);
        const k = fairyLevel * tw * 2.6 + 0.25;
        _tc.copy(b.c).multiplyScalar(k); fairy.setColorAt(i, _tc);
      }
      fairy.instanceColor.needsUpdate = true;
    }
    // candle flicker
    flame.visible = halo.visible = candleOn > 0.02;
    if (flame.visible) { const f = 1 + Math.sin(t * 13) * 0.06 + Math.sin(t * 29) * 0.04; flame.scale.set(1, f, 1); halo.material.opacity = 0.3 * candleOn * f; flame.material.opacity = 0.95 * candleOn; if (camera) halo.quaternion.copy(camera.quaternion); }
    // radio wiggle
    radioState.bump = Math.max(0, radioState.bump - dt * 3); radio.scale.setScalar(1 + Math.sin(radioState.bump * Math.PI) * 0.08);
    needle.position.x = 0.2 + ((radioState.station || 0) % 4) * 0.055;
    // clock shows real time
    if (frame % 15 === 0) {
      const d = new Date(), h = d.getHours() % 12, m = d.getMinutes(), sec = d.getSeconds() + d.getMilliseconds() / 1000;
      hHand.rotation.z = -((h + m / 60) / 12) * Math.PI * 2; mHand.rotation.z = -((m + sec / 60) / 60) * Math.PI * 2; sHand.rotation.z = -(sec / 60) * Math.PI * 2;
    }
  }

  return {
    root, pickables, update,
    setFairy(v) { fairyLevel = v; fairy.visible = v > 0.01; },
    setCandle(v) { candleOn = v; },
    setHat(id) {
      for (const [k, h] of Object.entries(hats)) h.visible = k === id;
      bow.visible = id !== 'hat-witch' && id !== 'hat-chef';
    },
    setCushion(on) { cushion.visible = on; body.position.y = 0; nox.userData.lift = on ? 0.12 : 0; },
    radio: radioState,
    /** Noxie reacts to a served dish: 3 stars = happy hop + hearts, 1 star = dramatic flop. */
    react(stars) {
      if (stars >= 3) { noxState.hop = 1; noxState.hearts = 1.4; noxState.mood = 1; }
      else if (stars >= 2) { noxState.hop = 0.6; noxState.mood = 0; }
      else { noxState.flop = 1; noxState.mood = -1; setTimeout(() => { noxState.mood = 0; }, 2500); }
    },
  };
}
