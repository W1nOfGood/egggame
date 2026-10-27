// Bootstrap: renderer, camera + orbit controls, lighting, quality scaling, main loop.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/RoomEnvironment.js';
import { createMaterials } from './materials.js';
import { buildKitchen } from './kitchen.js';
import { buildProps } from './props.js';
import { FX } from './fx.js';
import { Game } from './game.js';
import { Interactor } from './interact.js';
import { UI, loadSettings, saveSettings } from './ui.js';
import { audio } from './audio.js';
import { Post } from './post.js';
import { Atmos } from './atmos.js';
import { buildDecor } from './decor.js';
import { equipAll } from './shop.js';

const $ = (id) => document.getElementById(id);
const canvas = $('scene');
const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 1;
// iPadOS reports itself as a Mac; a touch-capable "Mac" is an iPad
const isIPad = /iPad/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
const settings = loadSettings();

function webglOK() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}

if (!webglOK()) {
  $('screen-loading').classList.add('hidden'); $('screen-nogl').classList.remove('hidden');
} else {
  try { boot(); } catch (err) {
    console.error(err);
    $('screen-loading').classList.add('hidden'); $('screen-nogl').classList.remove('hidden');
  }
}

function boot() {
  // the canvas itself needs no MSAA: the post pass renders into its own multisampled target
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#ffe6d5');
  scene.fog = new THREE.Fog('#ffe6d5', 32, 70);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.55;

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight('#fff6ec', '#f1c9b4', 0.85); scene.add(hemi);
  const key = new THREE.DirectionalLight('#fff0dc', 2.3);
  key.position.set(-6, 13, 8); key.castShadow = true;
  Object.assign(key.shadow.camera, { left: -9, right: 9, top: 7, bottom: -7, near: 1, far: 40 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.025; key.shadow.radius = 4;
  scene.add(key);
  const windowFill = new THREE.DirectionalLight('#cfe8ff', 0.55); windowFill.position.set(1, 9, -8); scene.add(windowFill);
  const lampLight = new THREE.PointLight('#ffd9a8', 28, 18, 2); lampLight.position.set(-0.6, 9.5, -0.8); scene.add(lampLight);
  const rim = new THREE.DirectionalLight('#ffd0e0', 0.35); rim.position.set(8, 5, -3); scene.add(rim);

  // ---------- world ----------
  const mats = createMaterials();
  const q = { mobile: isTouch };
  const kitchen = buildKitchen(scene, mats, q);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  // Our pointer handler must be registered before OrbitControls (see Interactor.onDown)
  const props = buildProps(scene, mats);
  const fx = new FX(scene, mats.tex.dot, 700);
  const decor = buildDecor(scene, mats, fx);
  kitchen.pickables.push(...decor.pickables);
  const atmos = new Atmos({ scene, renderer, lights: { hemi, key, fill: windowFill, lamp: lampLight, rim }, mats, kitchen, decor, fx });
  const game = new Game({ scene, camera, mats, props, kitchen, fx });
  const interactor = new Interactor({ canvas, camera, game, kitchen });

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 5.5; controls.maxDistance = 28;
  controls.minPolarAngle = 0.15; controls.maxPolarAngle = 1.36;
  controls.minAzimuthAngle = -1.35; controls.maxAzimuthAngle = 1.35;
  controls.screenSpacePanning = false; controls.panSpeed = 0.8; controls.rotateSpeed = 0.7;
  controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
  controls.addEventListener('start', () => { interactor.orbiting = true; userMovedCam = true; });
  controls.addEventListener('end', () => { interactor.orbiting = false; });
  controls.addEventListener('change', () => {
    const t = controls.target; // keep the focus on the counter
    t.x = Math.max(-6, Math.min(6, t.x)); t.z = Math.max(-3, Math.min(3, t.z)); t.y = Math.max(-0.5, Math.min(2.5, t.y));
  });

  let userMovedCam = false, camAnim = null;
  function framing() {
    const aspect = window.innerWidth / window.innerHeight;
    const halfW = aspect >= 1 ? 6.4 : 5.0; // world half-width we want visible
    const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = Math.max(12.5, halfW / (tanV * aspect) * 1.02);
    const polar = aspect >= 1 ? 0.86 : 0.55;
    const target = new THREE.Vector3(0.1, 0, aspect >= 1 ? 0.55 : -0.9);
    const pos = new THREE.Vector3().setFromSphericalCoords(dist, polar, 0).add(target);
    return { pos, target };
  }
  function resetCamera(instant = false) {
    const { pos, target } = framing();
    userMovedCam = false;
    if (instant) { camera.position.copy(pos); controls.target.copy(target); controls.update(); return; }
    camAnim = { t: 0, fromP: camera.position.clone(), fromT: controls.target.clone(), pos, target };
  }

  // ---------- quality & smoothness ----------
  // Automatic tiers, best first. When frames drop we step down: resolution first, then shadow refresh, bloom,
  // reflections and the lamp light, and only on very weak hardware the shadows themselves.
  const post = new Post(renderer);
  const TIERS = [
    { pr: 2, post: true, env: true, lamp: true, shadowEvery: 1 },
    { pr: 1.5, post: true, env: true, lamp: true, shadowEvery: 1 },
    { pr: 1.25, post: true, env: true, lamp: true, shadowEvery: 2 },
    { pr: 1, post: true, env: true, lamp: true, shadowEvery: 2 },
    { pr: 1, post: false, env: true, lamp: true, shadowEvery: 3 },
    { pr: 1, post: false, env: false, lamp: false, shadowEvery: 4 },
    { pr: 0.8, post: false, env: false, lamp: false, shadowEvery: 6 },
    { pr: 0.65, post: false, env: false, lamp: false, shadowEvery: 0 },
  ];
  const dpr = () => Math.min(window.devicePixelRatio || 1, 2);
  let tier = 0, cfg = null, usePost = true, pixelRatio = 1;
  const tierFloor = () => (settings.quality === 'low' ? 5 : 0);
  const tierCeil = () => (settings.smooth === 'detail' ? 3 : TIERS.length - 1);  // "Sharpest detail" never drops effects
  const effective = (i) => { const t = TIERS[i]; return { ...t, pr: Math.min(t.pr, dpr()) }; };
  const same = (x, y) => x && y && x.pr === y.pr && x.post === y.post && x.env === y.env && x.lamp === y.lamp && !!x.shadowEvery === !!y.shadowEvery;
  function setTier(i) {
    i = Math.max(tierFloor(), Math.min(tierCeil(), i));
    const next = effective(i);
    tier = i;
    if (!cfg || cfg.env !== next.env) scene.environment = next.env ? envTex : null;
    if (!cfg || !!cfg.shadowEvery !== !!next.shadowEvery) key.castShadow = !!next.shadowEvery;
    cfg = next; usePost = next.post;
    atmos.post = usePost ? post : null; atmos.noEnv = !next.env; atmos.noLamp = !next.lamp; if (atmos.cur) atmos._apply();
    post.setSamples(next.pr >= 1.5 ? 0 : 4);
    pixelRatio = next.pr; renderer.setPixelRatio(pixelRatio); renderer.setSize(window.innerWidth, window.innerHeight, false);
    fx.setViewport(window.innerHeight, camera.fov, pixelRatio);
  }
  function applyQuality() {
    const size = settings.quality === 'low' ? 1024 : 2048;
    if (key.shadow.mapSize.x !== size) { key.shadow.mapSize.set(size, size); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } }
    renderer.shadowMap.type = settings.quality === 'low' ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
    perf.failed = {};
    setTier(settings.quality === 'low' ? 5 : 0);
  }
  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    fx.setViewport(window.innerHeight, camera.fov, pixelRatio);
    if (!userMovedCam) resetCamera(true);
  }

  // Display refresh: measured from rAF intervals at start-up (120 Hz on ProMotion iPads when Safari allows it).
  const perf = { hz: 60, budget: 1000 / 60, samples: [], acc: 0, frames: 0, slow: 0, good: 0, last: 0, frame: 0, failed: {}, settle: 0 };
  window.__perf = perf;
  atmos.set(settings.atmos, true); atmos.setWeather(settings.weather);
  renderer.shadowMap.autoUpdate = false;
  applyQuality();
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 250));
  resize();

  const fpsEl = new URLSearchParams(location.search).has('fps') ? Object.assign(document.body.appendChild(document.createElement('div')), { id: 'fps-meter' }) : null;
  function stepDown() {
    let i = tier; const cur = effective(tier);
    do { i++; } while (i <= tierCeil() && same(effective(i), cur));   // skip tiers that change nothing on this screen
    if (i > tierCeil()) return;
    perf.failed[tier] = (perf.failed[tier] || 0) + 1; setTier(i); perf.settle = 2;
  }
  function stepUp() {
    let i = tier; const cur = effective(tier);
    do { i--; } while (i >= tierFloor() && same(effective(i), cur));
    if (i < tierFloor() || (perf.failed[i] || 0) >= 2) return;    // a tier that failed twice is not retried
    setTier(i); perf.settle = 2;
  }
  function trackPerf(now) {
    const dtMs = perf.last ? now - perf.last : 0; perf.last = now; perf.frame++;
    if (!dtMs || dtMs > 400 || document.hidden) return;
    if (perf.samples.length < 30) {
      perf.samples.push(dtMs);
      if (perf.samples.length === 30) { const med = perf.samples.slice().sort((x, y) => x - y)[15]; perf.hz = med < 10.5 ? 120 : med < 14 ? 90 : 60; perf.budget = 1000 / perf.hz; }
      return;
    }
    perf.acc += dtMs; perf.frames++;
    if (perf.acc >= 500) {   // judge every half second
      const avg = perf.acc / perf.frames; perf.fps = 1000 / avg; perf.acc = 0; perf.frames = 0;
      if (perf.settle > 0 && avg < perf.budget * 2.5) perf.settle--; else if (perf.settle > 0) perf.settle = 0;   // ignore the hitch right after a change (shader recompiles)
      else {
        if (avg > perf.budget * 1.2) { perf.slow++; perf.good = 0; } else if (avg < perf.budget * 1.08) { perf.good++; perf.slow = 0; }
        if (perf.slow >= 2 || avg > perf.budget * 2.5) { perf.slow = 0; stepDown(); }   // way too slow: don't wait
        else if (perf.good >= 8) { perf.good = 0; stepUp(); }
      }
      if (fpsEl) fpsEl.textContent = `${perf.fps.toFixed(0)} fps · ${perf.hz} Hz · tier ${tier} · ${pixelRatio.toFixed(2)}x${usePost ? ' · bloom' : ''}${cfg.env ? ' · env' : ''}`;
    }
  }

  const ui = new UI({ game, interactor, settings, onResetCamera: () => resetCamera(false), onQuality: () => { applyQuality(); saveSettings(settings); },
    onAtmos: (a) => { atmos.set(a); saveSettings(settings); }, onWeather: (w) => { atmos.setWeather(w); saveSettings(settings); }, perf, decor,
    onEquip: (eq) => equipAll({ mats, props, decor }, eq), onPhoto: (info) => takePhoto(info) });
  equipAll({ mats, props, decor }, settings.equip);
  decor.radio.onTap = () => ui.setRadio(audio.station + 1);
  game.on('served', (d) => { const st = d && d.result ? d.result.stars : 3; setTimeout(() => decor.react(st), 700); });
  game.settings = settings;

  // ---------- photo mode ----------
  // Swing the camera in close over the plate for one frame, grab the canvas, and frame it like a little polaroid.
  function takePhoto({ title = 'My dish', stars = 0 } = {}) {
    const saved = { p: camera.position.clone(), q: camera.quaternion.clone() };
    const target = props.plate.position.clone(); target.y += 0.25;
    camera.position.copy(target).add(new THREE.Vector3().setFromSphericalCoords(4.4, 0.72, controls.getAzimuthalAngle() + 0.2));
    camera.lookAt(target); camera.updateMatrixWorld();
    if (usePost) post.render(scene, camera); else renderer.render(scene, camera);
    const src = renderer.domElement, side = Math.min(src.width, src.height) * 0.9;
    const out = document.createElement('canvas'), W = 1080, H = 1300; out.width = W; out.height = H;
    const x = out.getContext('2d'), plum = document.documentElement.dataset.theme !== 'cream';
    x.fillStyle = plum ? '#2a1b3d' : '#fff6ec'; x.fillRect(0, 0, W, H);
    x.fillStyle = plum ? '#fff4e6' : '#ffffff'; x.fillRect(40, 40, W - 80, H - 80);
    x.drawImage(src, (src.width - side) / 2, (src.height - side) / 2, side, side, 80, 80, W - 160, W - 160);
    x.textAlign = 'center'; x.fillStyle = '#3a2758';
    x.font = '700 64px Fredoka, ui-rounded, system-ui, sans-serif'; x.fillText(title, W / 2, W + 20);
    x.font = '48px system-ui, sans-serif'; x.fillText(stars ? '⭐'.repeat(stars) : '🍳', W / 2, W + 90);
    x.font = '600 30px Fredoka, ui-rounded, system-ui, sans-serif'; x.fillStyle = '#9d7fd0';
    x.fillText(`Crack & Sizzle · ${new Date().toLocaleDateString()} · 💜`, W / 2, H - 70);
    camera.position.copy(saved.p); camera.quaternion.copy(saved.q); camera.updateMatrixWorld();
    return out.toDataURL('image/png');
  }

  // ---------- loop ----------
  const clock = new THREE.Clock();
  let idleT = 0;
  function frame(dt) {
    if (camAnim) {
      camAnim.t = Math.min(1, camAnim.t + dt / 0.7);
      const k = 1 - Math.pow(1 - camAnim.t, 3);
      camera.position.lerpVectors(camAnim.fromP, camAnim.pos, k); controls.target.lerpVectors(camAnim.fromT, camAnim.target, k);
      if (camAnim.t >= 1) camAnim = null;
    }
    // gentle idle drift on the title screen
    if (game.mode === 'menu' && !userMovedCam) { idleT += dt; const { pos, target } = framing(); camera.position.copy(pos).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.sin(idleT * 0.25) * 0.12); controls.target.copy(target); }
    controls.update();
    game.camAz = controls.getAzimuthalAngle();
    game.update(dt);
    atmos.update(dt);
    decor.update(dt, camera);
    ui.update(dt, camera);
    // the sun shadow refreshes every frame on fast devices, less often on slow ones
    renderer.shadowMap.needsUpdate = cfg.shadowEvery > 0 && perf.frame % cfg.shadowEvery === 0;
    if (usePost) post.render(scene, camera); else renderer.render(scene, camera);
  }
  renderer.setAnimationLoop((now) => { trackPerf(now); frame(Math.min(0.05, clock.getDelta())); });
  // debug: advance the simulation manually (e.g. when the tab is in the background)
  window.__step = (seconds, dt = 1 / 30) => { for (let t = 0; t < seconds; t += dt) frame(dt); };
  window.__tier = (i) => { if (i !== undefined) setTier(i); return { tier, ...effective(tier) }; };
  window.__trackPerf = trackPerf;

  // first-gesture audio unlock (iOS)
  const unlock = () => { audio.init(); audio.resume(); };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('touchend', unlock, { once: true });

  $('screen-loading').classList.add('hidden');
  ui.show('title');
  window.__game = game; window.__controls = controls; window.__ix = interactor; window.__three = { THREE, renderer, scene, camera, post, atmos, decor, mats }; // handy for debugging
}
