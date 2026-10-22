// DOM overlay: menus, HUD, heat dial, tray, hints, guide chip, results. Talks to Game via events.
import * as THREE from 'three';
import { audio } from './audio.js';
import { RECIPE_NAMES, RECIPE_ICONS } from './config.js';
import { levelLabel, TUTORIAL, sideLabel, fillLabel } from './scoring.js';

const $ = (id) => document.getElementById(id);
const STORE = 'cracksizzle.v1';
const _v = new THREE.Vector3();

export function loadSettings() {
  const def = { music: 0.45, sfx: 0.8, guide: true, hints: true, quality: 'auto', best: 0, tutorialDone: false };
  try { return Object.assign(def, JSON.parse(localStorage.getItem(STORE) || '{}')); } catch { return def; }
}
export function saveSettings(s) { try { localStorage.setItem(STORE, JSON.stringify(s)); } catch { /* private mode */ } }

export class UI {
  constructor({ game, interactor, settings, onResetCamera, onQuality }) {
    this.game = game; this.ix = interactor; this.s = settings;
    this.onResetCamera = onResetCamera; this.onQuality = onQuality;
    this.hintT = 0; this.lastHint = '';
    this.screens = ['title', 'pause', 'settings', 'dish', 'results', 'loading', 'nogl'];
    this._bindMenus(); this._bindDial(); this._bindTray(); this._bindGame();
    this._applySettings();
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.pause(true); });
    // Block Safari page pinch-zoom / double-tap zoom gestures over the game
    ['gesturestart', 'gesturechange'].forEach((t) => document.addEventListener(t, (e) => e.preventDefault()));
    document.addEventListener('dblclick', (e) => e.preventDefault());
  }

  show(name) { for (const s of this.screens) $('screen-' + s).classList.toggle('hidden', s !== name); }
  hideScreens() { for (const s of this.screens) $('screen-' + s).classList.add('hidden'); }

  // ---------- menus ----------
  _bindMenus() {
    const g = this.game, click = (id, f) => $(id).addEventListener('click', () => { audio.init(); audio.resume(); audio.pop(); f(); });
    click('btn-play', () => this.startMode('orders'));
    click('btn-free', () => this.startMode('free'));
    click('btn-tutorial', () => this.startMode('tutorial'));
    click('btn-pause', () => this.pause());
    click('btn-resume', () => this.resume());
    click('btn-restart', () => this.startMode(g.mode === 'results' ? 'orders' : g.mode));
    click('btn-menu', () => this.toMenu());
    click('btn-sound', () => { this.pause(true, false); this.show('settings'); });
    click('btn-settings-close', () => { saveSettings(this.s); if (this.game.mode === 'menu') this.show('title'); else this.resume(); });
    click('btn-camera', () => this.onResetCamera());
    click('btn-next', () => { this.hideScreens(); this.game.paused = false; this.game.afterServe(); });
    click('btn-again', () => this.startMode('orders'));
    click('btn-res-free', () => this.startMode('free'));
    click('btn-res-menu', () => this.toMenu());
    click('tut-skip', () => this.finishTutorial());
    $('vol-music').addEventListener('input', (e) => { this.s.music = +e.target.value; audio.setVolumes(this.s.music, this.s.sfx); });
    $('vol-sfx').addEventListener('input', (e) => { this.s.sfx = +e.target.value; audio.setVolumes(this.s.music, this.s.sfx); audio.pop(); });
    $('opt-guide').addEventListener('change', (e) => { this.s.guide = e.target.checked; });
    $('opt-hints').addEventListener('change', (e) => { this.s.hints = e.target.checked; });
    $('opt-quality').addEventListener('change', (e) => { this.s.quality = e.target.value; this.onQuality(this.s.quality); });
  }
  _applySettings() {
    $('vol-music').value = this.s.music; $('vol-sfx').value = this.s.sfx;
    $('opt-guide').checked = this.s.guide; $('opt-hints').checked = this.s.hints; $('opt-quality').value = this.s.quality;
    audio.setVolumes(this.s.music, this.s.sfx);
    this._updateBest();
  }
  _updateBest() { $('best-score').textContent = this.s.best ? `🏆 Best round: ${this.s.best} / 500` : ''; }

  startMode(mode) {
    audio.init(); audio.resume(); audio.setVolumes(this.s.music, this.s.sfx); audio.startMusic();
    this.hideScreens();
    $('hud').classList.remove('hidden');
    this.game.start(mode);
    const free = mode === 'free';
    $('order-card').classList.toggle('hidden', free);
    $('score-pill').classList.toggle('hidden', mode !== 'orders');
    $('tutorial-panel').classList.toggle('hidden', mode !== 'tutorial');
    $('score-val').textContent = '0';
    if (mode === 'tutorial') this._renderTutorial();
    if (free) this.toast('Free Cook — experiment with heat & methods! 🍳', 'good');
    else if (mode === 'orders') this.toast('Tip: drag empty space to look around · pinch to zoom', '');
  }
  toMenu() {
    this.game.mode = 'menu'; this.game.paused = false;
    this.game.resetKitchen();
    $('hud').classList.add('hidden');
    this._updateBest();
    this.show('title');
    audio.resume();
  }
  pause(auto = false, showPanel = true) {
    const g = this.game;
    if (g.mode === 'menu' || g.mode === 'results' || g.paused) return;
    g.paused = true;
    if (showPanel) this.show('pause');
    if (auto) audio.suspend();
  }
  resume() { this.hideScreens(); this.game.paused = false; audio.resume(); }
  finishTutorial() {
    this.s.tutorialDone = true; saveSettings(this.s);
    this.toMenu();
    setTimeout(() => this.toast('You\'re ready, chef! Try Order Mode 👩‍🍳', 'good'), 300);
  }

  // ---------- heat dial ----------
  _bindDial() {
    const dial = $('dial');
    const arc = (a0, a1) => {
      const P = (a) => [60 + Math.sin(a) * 50, 60 - Math.cos(a) * 50];
      const [x0, y0] = P(a0), [x1, y1] = P(a1);
      return `M${x0.toFixed(1)} ${y0.toFixed(1)} A50 50 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
    };
    this._arc = arc;
    $('dial-arc-bg').setAttribute('d', arc(-0.75 * Math.PI, 0.75 * Math.PI));
    let active = null;
    const setFrom = (e) => {
      const r = dial.getBoundingClientRect();
      const a = Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2)));
      let deg = (a * 180) / Math.PI; deg = Math.max(-135, Math.min(135, deg));
      // avoid jumping across the bottom gap
      if (Math.abs(deg - (this.game.heat * 27 - 135)) > 200) return;
      this.game.setHeat((deg + 135) / 27);
    };
    dial.addEventListener('pointerdown', (e) => { audio.init(); audio.resume(); active = e.pointerId; dial.setPointerCapture(e.pointerId); setFrom(e); e.preventDefault(); });
    dial.addEventListener('pointermove', (e) => { if (e.pointerId === active) setFrom(e); });
    const end = (e) => { if (e.pointerId === active) active = null; };
    dial.addEventListener('pointerup', end); dial.addEventListener('pointercancel', end);
    dial.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowUp') this.game.setHeat(this.game.heat + 0.5); if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') this.game.setHeat(this.game.heat - 0.5); });
    this._renderDial(0);
  }
  _renderDial(h) {
    const deg = -135 + h * 27;
    $('dial-knob').style.transform = `rotate(${deg}deg)`;
    $('dial-arc').setAttribute('d', h > 0.05 ? this._arc(-0.75 * Math.PI, (deg * Math.PI) / 180) : '');
    $('dial-label').textContent = h < 0.05 ? 'Off' : h < 3.5 ? `Low ${h.toFixed(1)}` : h < 7 ? `Med ${h.toFixed(1)}` : `High ${h.toFixed(1)}`;
    $('dial').setAttribute('aria-valuenow', h.toFixed(1));
  }

  // ---------- tray ----------
  _bindTray() {
    document.querySelectorAll('#tray .tool, #tray2 .tool').forEach((b) => {
      const tool = b.dataset.tool;
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        b.classList.add('active'); setTimeout(() => b.classList.remove('active'), 160);
        if (tool === 'toss') { audio.init(); this.game.toss(); return; }
        this.ix.trayDown(tool, e);
      });
    });
    $('btn-serve').addEventListener('click', () => this.game.serve());
  }

  // ---------- game events ----------
  _bindGame() {
    const g = this.game;
    g.on('heat', (h) => this._renderDial(h));
    g.on('toast', ({ text, kind }) => this.toast(text, kind));
    g.on('order', (o) => this._renderOrder(o));
    g.on('changed', () => { this.hintT = 0; });
    g.on('tutorial', () => this._renderTutorial());
    g.on('tutorialDone', () => this.finishTutorial());
    g.on('served', (d) => { const id = this._serveId = (this._serveId || 0) + 1; setTimeout(() => { if (id === this._serveId && g.foodLoc === 'served') this._showDish(d); }, 650); });
    g.on('roundOver', ({ total, results }) => this._showResults(total, results));
  }
  _renderOrder(o) {
    if (!o) return;
    $('cust-avatar').textContent = o.avatar;
    $('order-num').textContent = this.game.mode === 'tutorial' ? `Tutorial · ${o.name}` : `Order ${this.game.orderIdx + 1} / ${this.game.orders.length} · ${o.name}`;
    $('order-recipe').textContent = `${RECIPE_ICONS[o.recipe]} ${RECIPE_NAMES[o.recipe]}`;
    $('order-doneness').textContent = levelLabel(o);
    this._renderExtras();
    const c = $('order-card'); c.classList.add('pop'); setTimeout(() => c.classList.remove('pop'), 350);
  }
  _renderExtras() {
    const o = this.game.order; if (!o) return;
    const g = this.game, f = g.food || g.ings.find((i) => i.kind === 'rice') || null, chips = [];
    const chip = (txt, done, no) => `<span class="chip${done ? ' done' : ''}${no ? ' no' : ''}">${txt}</span>`;
    chips.push(chip('🧈 Butter', g.butter.amount > 0));
    (o.extras || []).forEach((e) => chips.push(chip(sideLabel(e), g.plateHas(e.kind))));
    (o.fill || []).forEach((k) => chips.push(chip(fillLabel(k, o.recipe), g.plateHas(k))));
    chips.push(o.salt ? chip('🧂 Salt', f && f.salt > 0) : chip('No salt', false, true));
    chips.push(o.pepper ? chip('● Pepper', f && f.pepper > 0) : chip('No pepper', false, true));
    const html = chips.join('');
    if (html !== this._extrasHTML) { $('order-extras').innerHTML = html; this._extrasHTML = html; }
  }
  _renderTutorial() {
    const ol = $('tut-steps'), step = this.game.tutStep;
    ol.innerHTML = TUTORIAL.map((s, i) => `<li class="${i < step ? 'ok' : i === step ? 'cur' : ''}">${s.text}</li>`).join('');
    const cur = ol.children[step]; if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  _showDish(d) {
    const g = this.game;
    g.paused = true;
    if (d.free) {
      $('dish-stars').innerHTML = '🍳';
      $('dish-title').textContent = 'Bon appétit!';
      $('dish-score').textContent = '';
      $('dish-breakdown').innerHTML = '';
      $('dish-quote').textContent = d.text;
      $('btn-next').textContent = 'Cook another';
    } else {
      const r = d.result;
      $('dish-stars').innerHTML = starHTML(r.stars);
      $('dish-title').textContent = ['Oh no…', 'Not bad', 'Delicious!', 'Perfect!'][r.stars];
      $('dish-score').textContent = r.total;
      $('dish-breakdown').innerHTML = r.lines.map((l) => `<li><span>${l.label}<small>${l.note}</small></span><b>${l.pts}${l.max ? ' / ' + l.max : ''}</b></li>`).join('');
      $('dish-quote').textContent = `${d.order.avatar} “${d.quote}”`;
      const last = g.mode === 'orders' && g.orderIdx + 1 >= g.orders.length;
      $('btn-next').textContent = g.mode === 'tutorial' ? 'Finish tutorial' : last ? 'See results' : 'Next order';
      if (g.mode === 'orders') { $('score-val').textContent = g.roundScore; const p = $('score-pill'); p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); }
      if (r.stars >= 2) audio.ding(); else audio.fail();
    }
    this.show('dish');
  }
  _showResults(total, results) {
    const starsSum = results.reduce((a, r) => a + r.result.stars, 0);
    const avg = Math.round(starsSum / results.length);
    $('res-stars').innerHTML = starHTML(avg);
    $('res-total').textContent = `${total} pts`;
    const isBest = total > this.s.best;
    if (isBest) { this.s.best = total; saveSettings(this.s); }
    $('res-best').textContent = isBest ? '🏆 New best score!' : `Best: ${this.s.best} · ⭐ ${starsSum} / 15 stars`;
    $('res-list').innerHTML = results.map(({ order, result }) => `<li><span>${order.avatar} ${RECIPE_NAMES[order.recipe]}<small>${[levelLabel(order)].concat((order.extras || []).map(sideLabel), (order.fill || []).map((k) => fillLabel(k, order.recipe))).join(' · ')}</small></span><b>${'⭐'.repeat(result.stars) || '—'} ${result.total}</b></li>`).join('');
    this.show('results');
    audio.ding();
  }
  toast(text, kind = '') {
    const t = $('toast');
    t.className = 'toast ' + kind; t.textContent = text;
    clearTimeout(this._toastT);
    void t.offsetWidth;
    this._toastT = setTimeout(() => t.classList.add('hidden'), 2200);
  }

  // ---------- per frame ----------
  update(dt, camera) {
    const g = this.game;
    if (g.mode === 'menu') return;
    // hint + tray suggestion (throttled)
    this.hintT -= dt;
    if (this.hintT <= 0) {
      this.hintT = 0.25;
      const h = this.s.hints || g.mode === 'tutorial' ? g.hint() : null;
      const text = h ? h.text : '';
      const el = $('hint');
      if (text !== this.lastHint) { el.textContent = text; el.classList.remove('flash'); void el.offsetWidth; if (text) el.classList.add('flash'); this.lastHint = text; }
      document.querySelectorAll('#tray .tool, #tray2 .tool').forEach((b) => b.classList.toggle('suggest', !!h && h.tool === b.dataset.tool));
      $('btn-serve').disabled = !g.canServe();
      this._renderExtras();
    }
    // patience
    if (g.mode === 'orders' && g.order) {
      const left = Math.max(0, 1 - g.orderTime / g.order.patience);
      const bar = $('patience-bar'); bar.style.width = (left * 100).toFixed(1) + '%'; bar.classList.toggle('low', left < 0.25);
    } else $('patience-bar').style.width = '100%';
    // thermometer
    $('thermo-fill').style.width = Math.min(100, ((g.panTemp - 20) / 230) * 100).toFixed(1) + '%';
    $('temp-readout').textContent = `${Math.round(g.panTemp)}°C pan${g.panOnBurner ? '' : ' (off burner)'}`;
    // one progress chip per item cooking in the pan, each floating above its own item
    $('guide-chip').classList.add('hidden');
    const list = this.s.guide ? g.guideList() : [];
    const host = $('guide-chips'), pool = this._chips || (this._chips = []);
    host.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden';
    while (pool.length < list.length) { const el = document.createElement('div'); el.className = 'mini-chip'; el.style.position = 'absolute'; el.style.pointerEvents = 'none'; el.innerHTML = '<span class="tx"></span><div class="meter"><i></i></div>'; host.appendChild(el); pool.push(el); }
    const W = window.innerWidth, Hh = window.innerHeight, placed = [];
    list.forEach((it, i) => {
      const el = pool[i];
      it.obj.getWorldPosition(_v); _v.y += 0.45; _v.project(camera);
      const x = (_v.x * 0.5 + 0.5) * W; let y = (-_v.y * 0.5 + 0.5) * Hh;
      for (let n = 0; n < 6; n++) { if (placed.some((q) => Math.abs(q.x - x) < 96 && Math.abs(q.y - y) < 27)) y -= 28; else break; }
      placed.push({ x, y });
      el.style.display = '';
      el.className = 'mini-chip ' + it.cls; el.style.transform = 'translate(-50%, -100%)';
      el.firstChild.textContent = it.label;
      el.lastChild.firstChild.style.width = Math.round(it.p * 100) + '%';
      el.style.left = x.toFixed(0) + 'px'; el.style.top = Math.max(64, y).toFixed(0) + 'px';
    });
    for (let i = list.length; i < pool.length; i++) pool[i].style.display = 'none';
    $('btn-flip').classList.toggle('hidden', !g.canFlip());
  }
}

function starHTML(n) { return [0, 1, 2].map((i) => `<span class="${i < n ? '' : 'off'}" style="animation-delay:${i * 0.15}s">⭐</span>`).join(''); }
