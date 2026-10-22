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

const $ = (id) => document.getElementById(id);
const canvas = $('scene');
const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 1;
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
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#ffe6d5');
  scene.fog = new THREE.Fog('#ffe6d5', 32, 70);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  // ---------- lights ----------
  scene.add(new THREE.HemisphereLight('#fff6ec', '#f1c9b4', 0.85));
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
  const fx = new FX(scene, mats.tex.dot, isTouch ? 140 : 240);
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

  // ---------- quality ----------
  let pixelRatio = 1, perf = { acc: 0, frames: 0, t: 0 };
  function applyQuality(mode) {
    const dpr = window.devicePixelRatio || 1;
    pixelRatio = mode === 'high' ? Math.min(dpr, 2) : mode === 'low' ? 1 : Math.min(dpr, isTouch ? 1.6 : 2);
    renderer.setPixelRatio(pixelRatio);
    const size = mode === 'low' ? 1024 : mode === 'high' ? 2048 : isTouch ? 1536 : 2048;
    if (key.shadow.mapSize.x !== size) { key.shadow.mapSize.set(size, size); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } }
    renderer.shadowMap.type = mode === 'low' ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  }
  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    if (!userMovedCam) resetCamera(true);
  }
  applyQuality(settings.quality);
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 250));
  resize();

  const ui = new UI({ game, interactor, settings, onResetCamera: () => resetCamera(false), onQuality: (m) => { applyQuality(m); saveSettings(settings); } });
  game.settings = settings;

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
    ui.update(dt, camera);
    renderer.render(scene, camera);
    // adaptive resolution when the device struggles (auto mode only)
    if (settings.quality === 'auto') {
      perf.acc += dt; perf.frames++;
      if (perf.acc > 3) {
        const fps = perf.frames / perf.acc; perf.acc = 0; perf.frames = 0;
        if (fps < 40 && pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.25); renderer.setPixelRatio(pixelRatio); renderer.setSize(window.innerWidth, window.innerHeight, false); }
      }
    }
  }
  renderer.setAnimationLoop(() => frame(Math.min(0.05, clock.getDelta())));
  // debug: advance the simulation manually (e.g. when the tab is in the background)
  window.__step = (seconds, dt = 1 / 30) => { for (let t = 0; t < seconds; t += dt) frame(dt); };

  // first-gesture audio unlock (iOS)
  const unlock = () => { audio.init(); audio.resume(); };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('touchend', unlock, { once: true });

  $('screen-loading').classList.add('hidden');
  ui.show('title');
  window.__game = game; window.__controls = controls; window.__ix = interactor; // handy for debugging
}
