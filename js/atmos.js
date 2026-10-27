// Time-of-day / theme presets: lights, sky, fog, wall & cabinet colours, fairy lights, bloom.
// Switching blends colours and intensities over ~2 s; textures swap half-way through the blend.
import * as THREE from 'three';
import { makeTileTex, makeTerrazzoTex } from './materials.js';

export const ATMOS_LIST = [['plum', '🌙 Midnight Plum'], ['morning', '☀️ Morning'], ['golden', '🌇 Golden Hour'], ['night', '✨ Cozy Night']];
export const WEATHER_LIST = [['clear', '☁️ Clear'], ['rain', '🌧️ Rain'], ['snow', '❄️ Snow']];

const DAY_MATS = { wall: '#ffe3d1', floor: '#e9c9b2', cabinet: '#9fd8c8', cabinetDark: '#86c6b4', counterEdge: '#f4e6d8', windowFrame: '#fffaf4', shade: '#ffb59a',
  tiles: { tc: [214, 240, 229], grout: '#cfe9df' }, terrazzo: { base: '#fbf3ea', chips: ['#f6b8c4', '#9fd8c8', '#ffd98a', '#b9c8f0', '#e9cdb8', '#ffffff'] } };
const PLUM_MATS = { wall: '#4a3366', floor: '#2e2040', cabinet: '#7a5aa8', cabinetDark: '#5b3f86', counterEdge: '#dccdf0', windowFrame: '#c9b6e4', shade: '#ff9fd0',
  tiles: { tc: [206, 186, 236], grout: '#9d86c4' }, terrazzo: { base: '#f3ecfa', chips: ['#ff8fc8', '#b48cff', '#6b4c9a', '#2a1b3d', '#ffd6ec', '#ffffff'] } };

export const ATMOS = {
  morning: { bg: '#ffe6d5', fogNear: 32, hemi: ['#fff6ec', '#f1c9b4', 0.85], key: ['#fff0dc', 2.3], fill: ['#cfe8ff', 0.55], lamp: ['#ffd9a8', 28], rim: ['#ffd0e0', 0.35],
    exposure: 1.05, env: 0.55, sky: 'day', fairy: 0, candle: 0, bloom: 0.25, threshold: 1.1, vignette: 0.18, grade: '#fff8f0', mats: DAY_MATS },
  golden: { bg: '#ffd2b0', fogNear: 30, hemi: ['#ffe2c4', '#d99a7a', 0.72], key: ['#ffbf7a', 2.5], fill: ['#ffd9b8', 0.4], lamp: ['#ffcf98', 30], rim: ['#ff9f8a', 0.6],
    exposure: 1.02, env: 0.5, sky: 'sunset', fairy: 0.45, candle: 0.6, bloom: 0.45, threshold: 1.0, vignette: 0.28, grade: '#fff0dc', mats: DAY_MATS },
  night: { bg: '#1c2036', fogNear: 26, hemi: ['#8a94c8', '#3a2c3a', 0.5], key: ['#a9b8ff', 0.75], fill: ['#7f9cff', 0.3], lamp: ['#ffc98a', 46], rim: ['#ffb38a', 0.35],
    exposure: 1.12, env: 0.32, sky: 'night', fairy: 1, candle: 1, bloom: 0.75, threshold: 0.95, vignette: 0.4, grade: '#ffeedd', mats: DAY_MATS },
  plum: { bg: '#2a1b3d', fogNear: 26, hemi: ['#d2bdf5', '#4a2d5a', 0.75], key: ['#f2e4ff', 1.75], fill: ['#a07cff', 0.45], lamp: ['#ffc6a0', 36], rim: ['#ff8fc8', 0.7],
    exposure: 1.1, env: 0.5, sky: 'plum', fairy: 1, candle: 1, bloom: 0.7, threshold: 0.95, vignette: 0.38, grade: '#f6eaff', mats: PLUM_MATS },
};

export class Atmos {
  /** lights: {hemi, key, fill, lamp, rim}; kitchen: {sky, shadeMat}; decor: {setFairy, setCandle}; post: {set(params)} | null */
  constructor({ scene, renderer, lights, mats, kitchen, decor, fx }) {
    Object.assign(this, { scene, renderer, lights, mats, kitchen, decor, fx });
    this.cur = null; this.from = null; this.to = null; this.t = 1; this.texCache = {}; this.post = null;
    this.weather = 'clear'; this.wT = 0;
  }
  _tex(p) {
    const k = JSON.stringify(p.mats.tiles) + p.mats.terrazzo.base;
    if (!this.texCache[k]) this.texCache[k] = { tiles: makeTileTex(p.mats.tiles.tc, p.mats.tiles.grout), terrazzo: makeTerrazzoTex(p.mats.terrazzo.base, p.mats.terrazzo.chips) };
    return this.texCache[k];
  }
  _sky(kind) { return (this.skyCache ||= {})[kind] ||= skyTexture(kind); }
  /** A flat snapshot of every value we blend. */
  _snap(p) {
    const c = (x) => new THREE.Color(x);
    return {
      bg: c(p.bg), fogNear: p.fogNear, hemiS: c(p.hemi[0]), hemiG: c(p.hemi[1]), hemiI: p.hemi[2], keyC: c(p.key[0]), keyI: p.key[1], fillC: c(p.fill[0]), fillI: p.fill[1],
      lampC: c(p.lamp[0]), lampI: p.lamp[1], rimC: c(p.rim[0]), rimI: p.rim[1], exposure: p.exposure, env: p.env, fairy: p.fairy, candle: p.candle,
      bloom: p.bloom, threshold: p.threshold, vignette: p.vignette, grade: c(p.grade),
      wall: c(p.mats.wall), floor: c(p.mats.floor), cabinet: c(p.mats.cabinet), cabinetDark: c(p.mats.cabinetDark), counterEdge: c(p.mats.counterEdge), windowFrame: c(p.mats.windowFrame), shade: c(p.mats.shade),
    };
  }
  set(name, instant = false) {
    const p = ATMOS[name] || ATMOS.plum;
    this.name = name; this.preset = p;
    this.to = this._snap(p);
    if (!this.cur || instant) { this.cur = this._snap(p); this.from = null; this.t = 1; this._swapTex(p); this._apply(); return; }
    this.from = this._clone(this.cur); this.t = 0; this._swapped = false;
  }
  _clone(o) { const r = {}; for (const [k, v] of Object.entries(o)) r[k] = v && v.isColor ? v.clone() : v; return r; }
  _swapTex(p) {
    const tx = this._tex(p);
    this.mats.tile.map = tx.tiles; this.mats.counter.map = tx.terrazzo; this.mats.tile.needsUpdate = this.mats.counter.needsUpdate = true;
    if (this.kitchen.sky) this.kitchen.sky.material.map = this._sky(p.sky), this.kitchen.sky.material.needsUpdate = true;
    this._lastPreset = p;
  }
  setWeather(w) { this.weather = w; }
  update(dt) {
    if (this.t < 1 && this.from) {
      this.t = Math.min(1, this.t + dt / 2);
      const k = this.t * this.t * (3 - 2 * this.t);
      for (const [key, v] of Object.entries(this.to)) {
        const a = this.from[key];
        if (v.isColor) this.cur[key].copy(a).lerp(v, k); else this.cur[key] = a + (v - a) * k;
      }
      if (!this._swapped && this.t > 0.5) { this._swapped = true; this._swapTex(this.preset); }
      this._apply();
    }
    // weather behind the window glass
    if (this.weather !== 'clear' && this.fx) {
      this.wT -= dt;
      const rate = this.weather === 'rain' ? 0.012 : 0.05;
      while (this.wT < 0) {
        this.wT += rate;
        const x = -1.2 + (Math.random() - 0.5) * 5.0;
        if (this.weather === 'rain') this.fx.emit('rain', { x, y: 7.3, z: -3.7 }, { spread: 0, floorY: 4.0, vel: { x: -0.6, y: -6, z: 0 } });
        else this.fx.emit('snow', { x, y: 7.3, z: -3.7 }, { spread: 0, floorY: 4.0, vel: { x: 0, y: -0.5, z: 0 } });
      }
    }
  }
  _apply() {
    const c = this.cur, L = this.lights, m = this.mats, s = this.scene;
    s.background.copy(c.bg); s.fog.color.copy(c.bg); s.fog.near = c.fogNear; s.fog.far = c.fogNear + 38;
    L.hemi.color.copy(c.hemiS); L.hemi.groundColor.copy(c.hemiG); L.hemi.intensity = c.hemiI;
    L.key.color.copy(c.keyC); L.key.intensity = c.keyI; L.fill.color.copy(c.fillC); L.fill.intensity = c.fillI;
    L.lamp.color.copy(c.lampC); L.lamp.intensity = c.lampI; L.rim.color.copy(c.rimC); L.rim.intensity = c.rimI;
    this.renderer.toneMappingExposure = c.exposure; s.environmentIntensity = c.env;
    for (const k of ['wall', 'floor', 'cabinet', 'cabinetDark', 'counterEdge', 'windowFrame']) m[k].color.copy(c[k]);
    if (this.kitchen.shadeMat) this.kitchen.shadeMat.color.copy(c.shade);
    if (this.decor) { this.decor.setFairy(c.fairy); this.decor.setCandle(c.candle); }
    if (this.post) this.post.set({ bloom: c.bloom, threshold: c.threshold, vignette: c.vignette, grade: c.grade, exposure: c.exposure });
  }
}

function skyTexture(kind) {
  const W = 512, H = 320, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  const grad = { day: ['#9fd6ff', '#d9f0ff', '#ffe9d6'], sunset: ['#6f78c9', '#ff9e7a', '#ffd59a'], night: ['#0e1430', '#1f2a55', '#3a3a6a'], plum: ['#1a1030', '#3d2463', '#8a4f9e'] }[kind];
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, grad[0]); g.addColorStop(0.65, grad[1]); g.addColorStop(1, grad[2]);
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  const dark = kind === 'night' || kind === 'plum';
  if (dark) {
    // stars, a few of them little 4-point sparkles
    for (let i = 0; i < 140; i++) { const sx = Math.random() * W, sy = Math.random() * H * 0.75, r = Math.random() * 1.4 + 0.3; x.fillStyle = `rgba(255,${kind === 'plum' ? 235 : 250},255,${0.4 + Math.random() * 0.6})`; x.beginPath(); x.arc(sx, sy, r, 0, 7); x.fill(); }
    x.fillStyle = '#fff6ff';
    for (const [sx, sy, s] of [[90, 60, 9], [400, 40, 7], [300, 110, 6]]) { x.beginPath(); x.moveTo(sx, sy - s); x.quadraticCurveTo(sx, sy, sx + s, sy); x.quadraticCurveTo(sx, sy, sx, sy + s); x.quadraticCurveTo(sx, sy, sx - s, sy); x.quadraticCurveTo(sx, sy, sx, sy - s); x.fill(); }
    // big crescent moon with a soft glow
    const mx = 360, my = 105, mr = 46;
    const glow = x.createRadialGradient(mx, my, mr * 0.6, mx, my, mr * 2.6); glow.addColorStop(0, kind === 'plum' ? 'rgba(255,200,240,.45)' : 'rgba(255,245,210,.4)'); glow.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = glow; x.fillRect(0, 0, W, H);
    x.fillStyle = kind === 'plum' ? '#fff0fb' : '#fff8e2'; x.beginPath(); x.arc(mx, my, mr, 0, 7); x.fill();
    x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(mx + 22, my - 12, mr * 0.88, 0, 7); x.fill(); x.globalCompositeOperation = 'source-over';
    // paint the cut-out back with sky
    x.globalCompositeOperation = 'destination-over'; x.fillStyle = g; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-over';
    // tiny bats silhouettes for the plum sky
    if (kind === 'plum') {
      x.fillStyle = '#1a1030';
      for (const [bx, by, s] of [[150, 80, 1], [190, 60, 0.7], [470, 150, 0.8]]) { x.beginPath(); x.moveTo(bx, by); x.quadraticCurveTo(bx - 8 * s, by - 8 * s, bx - 16 * s, by - 2 * s); x.quadraticCurveTo(bx - 10 * s, by, bx - 8 * s, by + 4 * s); x.quadraticCurveTo(bx - 4 * s, by + 1 * s, bx, by + 4 * s); x.quadraticCurveTo(bx + 4 * s, by + 1 * s, bx + 8 * s, by + 4 * s); x.quadraticCurveTo(bx + 10 * s, by, bx + 16 * s, by - 2 * s); x.quadraticCurveTo(bx + 8 * s, by - 8 * s, bx, by); x.fill(); }
    }
  } else {
    if (kind === 'sunset') { const sg = x.createRadialGradient(150, 250, 10, 150, 250, 120); sg.addColorStop(0, 'rgba(255,240,180,1)'); sg.addColorStop(0.25, 'rgba(255,200,120,.8)'); sg.addColorStop(1, 'rgba(255,160,120,0)'); x.fillStyle = sg; x.fillRect(0, 0, W, H); }
    x.fillStyle = kind === 'sunset' ? 'rgba(255,214,200,.9)' : 'rgba(255,255,255,.95)';
    for (const [cx, cy, s] of [[120, 100, 2], [360, 70, 1.6], [280, 190, 1.2]]) for (const [dx, dy, r] of [[0, 0, 18], [18, -6, 14], [-16, 3, 12], [32, 4, 11]]) { x.beginPath(); x.arc(cx + dx * s, cy + dy * s, r * s, 0, 7); x.fill(); }
  }
  // distant hills
  const hills = { day: ['#b9e3b0', '#9fd39a'], sunset: ['#c98a8a', '#a86f7f'], night: ['#26304f', '#1a2240'], plum: ['#3b2358', '#291842'] }[kind];
  x.fillStyle = hills[0]; x.beginPath(); x.moveTo(0, H); for (let i = 0; i <= W; i += 8) x.lineTo(i, H * 0.8 + Math.sin(i * 0.015) * 20); x.lineTo(W, H); x.fill();
  x.fillStyle = hills[1]; x.beginPath(); x.moveTo(0, H); for (let i = 0; i <= W; i += 8) x.lineTo(i, H * 0.89 + Math.sin(i * 0.025 + 2) * 14); x.lineTo(W, H); x.fill();
  if (dark) { // little lit cottage windows on the hills
    for (const [wx, wy] of [[80, H * 0.86], [330, H * 0.9], [450, H * 0.84]]) { x.fillStyle = '#ffd27a'; x.fillRect(wx, wy, 6, 5); }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
