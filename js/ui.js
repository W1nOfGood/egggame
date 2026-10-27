// DOM overlay: menus, HUD, heat dial, tray, hints, guide chip, results. Talks to Game via events.
import * as THREE from 'three';
import { audio } from './audio.js';
import { ATMOS_LIST, WEATHER_LIST } from './atmos.js';
import { RECIPE_NAMES, RECIPE_ICONS } from './config.js';
import { levelLabel, TUTORIAL, sideLabel, fillLabel, orderFrom, orderTitle } from './scoring.js';
import { RecipeBook } from './book.js';
import { BOOK, bookById } from './recipes.js';
import { SHOP, SHOP_CATS, DEFAULT_EQUIP, itemById } from './shop.js';
import { REGULARS, regularById, heartsFor, HEART_MAX } from './customers.js';

/** Today's special: one dish per calendar day, the same for everyone. */
export function dailyId(d = new Date()) {
  let h = d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate();
  h = Math.imul((h >>> 16) ^ h, 0x45d9f3b); h = Math.imul((h >>> 16) ^ h, 0x45d9f3b); h = (h >>> 16) ^ h;
  return BOOK[Math.abs(h) % BOOK.length].id;
}

const $ = (id) => document.getElementById(id);
const STORE = 'cracksizzle.v1';
const _v = new THREE.Vector3();

export function loadSettings() {
  const def = { music: 0.45, sfx: 0.8, guide: true, hints: true, quality: (/iPad/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1)) ? 'high' : 'auto', atmos: 'plum', weather: 'rain', smooth: '120', radio: 0, best: 0, tutorialDone: false,
    coins: 30, owned: [], equip: {}, hearts: {}, notes: [], dishes: {} };
  try { return Object.assign(def, JSON.parse(localStorage.getItem(STORE) || '{}')); } catch { return def; }
}
export function saveSettings(s) { try { localStorage.setItem(STORE, JSON.stringify(s)); } catch { /* private mode */ } }

export class UI {
  constructor({ game, interactor, settings, onResetCamera, onQuality, onAtmos, onWeather, perf, decor, onEquip, onPhoto }) {
    this.onEquip = onEquip; this.onPhoto = onPhoto;
    this.game = game; this.ix = interactor; this.s = settings;
    this.onResetCamera = onResetCamera; this.onQuality = onQuality; this.onAtmos = onAtmos; this.onWeather = onWeather; this.perf = perf; this.decor = decor;
    this.hintT = 0; this.lastHint = '';
    this.screens = ['title', 'pause', 'settings', 'dish', 'results', 'loading', 'nogl', 'shop', 'regulars'];
    this.book = new RecipeBook({ onCook: (id) => this.practice(id), onClose: () => this._afterBook(), progress: () => this.s.dishes, daily: dailyId });
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
    click('btn-cozy', () => this.startMode('cozy'));
    click('btn-shop', () => this.openShop());
    click('btn-res-shop', () => this.openShop());
    click('btn-regulars', () => this.openRegulars());
    click('shop-close', () => this.show(this._backTo || 'title'));
    click('reg-close', () => this.show('title'));
    click('daily', () => this.practice(dailyId()));
    click('btn-photo', () => this.snapPhoto());
    $('shop-list').addEventListener('click', (e) => { const b = e.target.closest('[data-item]'); if (b) this.shopAction(b.dataset.item); });
    click('btn-tutorial', () => this.startMode('tutorial'));
    click('btn-recipes', () => this.openBook());
    click('btn-book', () => this.openBook());
    click('btn-order-book', () => { const o = this.game.order || this.game.freeGoal; this.openBook(o && o.id); });
    click('btn-pause', () => this.pause());
    click('btn-resume', () => this.resume());
    click('btn-restart', () => this.startMode(g.cozy ? 'cozy' : g.mode === 'results' ? 'orders' : g.mode));
    click('btn-menu', () => this.toMenu());
    click('btn-sound', () => { this.pause(true, false); this.show('settings'); this._hzTip(); });
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
    $('opt-radio').innerHTML = [0, 1, 2, 3].map((i) => `<option value="${i}">${audio.stationName(i)}</option>`).join('');
    $('opt-radio').addEventListener('change', (e) => this.setRadio(+e.target.value));
    $('opt-smooth').addEventListener('change', (e) => { this.s.smooth = e.target.value; this.onQuality(this.s.quality); });
    $('opt-atmos').innerHTML = ATMOS_LIST.map(([k, n]) => `<option value="${k}">${n}</option>`).join('');
    $('opt-weather').innerHTML = WEATHER_LIST.map(([k, n]) => `<option value="${k}">${n}</option>`).join('');
    $('opt-atmos').addEventListener('change', (e) => { this.s.atmos = e.target.value; this.onAtmos && this.onAtmos(this.s.atmos); this._applyTheme(); });
    $('opt-weather').addEventListener('change', (e) => { this.s.weather = e.target.value; this.onWeather && this.onWeather(this.s.weather); });
  }
  _applySettings() {
    $('vol-music').value = this.s.music; $('vol-sfx').value = this.s.sfx;
    $('opt-guide').checked = this.s.guide; $('opt-hints').checked = this.s.hints; $('opt-quality').value = this.s.quality;
    $('opt-atmos').value = this.s.atmos; $('opt-weather').value = this.s.weather; $('opt-smooth').value = this.s.smooth; $('opt-radio').value = this.s.radio || 0;
    this._applyTheme();
    audio.setVolumes(this.s.music, this.s.sfx);
    this._updateBest();
  }
  /** Change the kitchen radio station (also from tapping the radio in the kitchen). */
  setRadio(i) {
    audio.init(); audio.resume();
    const name = audio.setStation(i); this.s.radio = audio.station; saveSettings(this.s);
    if (this.decor) this.decor.radio.station = audio.station;
    $('opt-radio').value = audio.station; this.toast(name);
  }
  /** Midnight Plum gets the dark UI theme; the daytime moods use the cream one. */
  _applyTheme() { document.documentElement.dataset.theme = this.s.atmos === 'morning' || this.s.atmos === 'golden' ? 'cream' : 'plum'; }
  /** Safari can hold web pages to 60 fps; on an iPad that is stuck at 60 Hz, explain how to unlock 120. */
  _hzTip() {
    const p = this.perf, el = $('hz-tip'), iPad = /iPad/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    if (!p || !iPad || p.hz > 60) { el.classList.add('hidden'); return; }
    el.innerHTML = '💜 Running at 60 fps. On an iPad Pro you can unlock 120 fps: <b>Settings › Apps › Safari › Advanced › Feature Flags</b> and turn off <b>“Prefer Page Rendering Updates near 60fps”</b>, then reload.';
    el.classList.remove('hidden');
  }
  _updateBest() {
    $('best-score').textContent = this.s.best ? `🏆 Best round: ${this.s.best} / 500` : '';
    const d = bookById(dailyId());
    $('daily').innerHTML = `<span class="d-kicker">✨ Today’s special</span><span class="d-dish">${d.icon} ${d.title}</span><span class="d-bonus">+🪙10 bonus · tap to cook</span>`;
    this._updateCoins();
  }
  _updateCoins() {
    const c = this.s.coins | 0;
    $('coin-val').textContent = c; $('coin-title').textContent = `🪙${c}`; $('shop-coins').textContent = c;
  }

  // ---------- shop ----------
  openShop() {
    this._backTo = this.game.mode === 'results' ? 'results' : 'title';
    this.renderShop(); this.show('shop');
  }
  renderShop() {
    const s = this.s, eq = { ...DEFAULT_EQUIP, ...s.equip };
    $('shop-list').innerHTML = SHOP_CATS.map(([cat, label]) => `
      <section class="shop-cat"><h3>${label}</h3><div class="shop-grid">${SHOP.filter((i) => i.cat === cat).map((i) => {
        const own = i.price === 0 || s.owned.includes(i.id), on = eq[cat] === i.id, afford = s.coins >= i.price;
        const btn = on ? '<span class="sh-on">✓ Using</span>' : own ? '<span class="sh-use">Use</span>' : `<span class="sh-buy${afford ? '' : ' poor'}">🪙 ${i.price}</span>`;
        return `<button class="shop-item${on ? ' on' : ''}${!own && !afford ? ' locked' : ''}" data-item="${i.id}"><span class="sh-ico">${i.icon}</span><b>${i.name}</b><small>${i.desc}</small>${btn}</button>`;
      }).join('')}</div></section>`).join('');
    this._updateCoins();
  }
  shopAction(id) {
    const i = itemById(id), s = this.s; if (!i) return;
    const own = i.price === 0 || s.owned.includes(id);
    if (!own) {
      if (s.coins < i.price) { audio.fail(); this.toast(`Need 🪙${i.price - s.coins} more in tips`, 'bad'); return; }
      s.coins -= i.price; s.owned.push(id); audio.chime(); this.toast(`Bought ${i.icon} ${i.name}!`, 'good');
    } else audio.pop();
    s.equip = { ...DEFAULT_EQUIP, ...s.equip, [i.cat]: id };
    saveSettings(s); this.onEquip && this.onEquip(s.equip); this.renderShop();
  }

  // ---------- regulars ----------
  openRegulars() {
    const s = this.s;
    $('reg-list').innerHTML = REGULARS.map((r) => {
      const h = Math.min(HEART_MAX, s.hearts[r.id] || 0), fav = bookById(r.fav);
      const note = s.notes.includes(r.id) ? `<p class="reg-note">💌 ${r.note}</p>` : '';
      return `<li class="reg"><span class="reg-ava">${r.avatar}</span><div><b>${r.name}</b><small>${r.blurb} Favourite: ${fav ? fav.icon + ' ' + fav.title : '—'}</small>
        <div class="hearts">${Array.from({ length: HEART_MAX }, (_, k) => `<i>${k < h ? '💗' : '🤍'}</i>`).join('')}</div>${note}</div></li>`;
    }).join('');
    this.show('regulars');
  }

  // ---------- rewards after each dish ----------
  _reward(d) {
    const s = this.s, g = this.game, r = d.result, o = d.order, out = [];
    if (!r || !o || g.mode === 'tutorial') return '';
    let tip = r.stars * 5 + (r.stars >= 3 ? 5 : 0);
    if (g.mode === 'free') tip = Math.ceil(tip / 2);
    const special = o.id === dailyId() && r.stars >= 2;
    if (special) tip += 10;
    if (tip) { s.coins = (s.coins | 0) + tip; out.push(`<span class="rw coin">+🪙${tip}${special ? ' <small>special!</small>' : ''}</span>`); }
    // recipe collection: best stars, times cooked, and a sticker for the first 3-star dish
    if (o.id) {
      const rec = s.dishes[o.id] || { best: 0, count: 0 }, first3 = r.stars >= 3 && rec.best < 3;
      rec.best = Math.max(rec.best, r.stars); rec.count++; s.dishes[o.id] = rec;
      if (first3) out.push('<span class="rw sticker">🏅 New sticker in the Recipe Book!</span>');
    }
    // regulars' heart meters
    const c = o.custId && regularById(o.custId);
    if (c) {
      const add = heartsFor(c, r.stars, o.id), now = Math.min(HEART_MAX, (s.hearts[c.id] || 0) + add);
      s.hearts[c.id] = now;
      if (add) out.push(`<span class="rw heart">${c.avatar} +${'💗'.repeat(add)} <small>${now}/${HEART_MAX}</small></span>`);
      if (now >= HEART_MAX && !s.notes.includes(c.id)) { s.notes.push(c.id); out.push(`<span class="rw note">💌 ${c.name} left you a thank-you note! (Regulars)</span>`); }
    }
    saveSettings(s); this._updateCoins();
    return out.join('');
  }
  /** Frame the plate, take a picture, and offer it to save or share (the iPad share sheet can save to Photos). */
  async snapPhoto() {
    if (!this.onPhoto) return;
    audio.pop();
    const url = this.onPhoto(this._lastDish || {});
    const img = $('dish-photo'); img.src = url; img.classList.remove('hidden');
    try {
      const blob = await (await fetch(url)).blob(), file = new File([blob], 'crack-and-sizzle.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'My dish' }); return; }
    } catch { /* share cancelled or unsupported: fall back to a download */ }
    const a = document.createElement('a'); a.href = url; a.download = 'crack-and-sizzle.png'; document.body.appendChild(a); a.click(); a.remove();
  }

  /** Open the recipe book; pauses the kitchen while it is open. */
  openBook(id) {
    const g = this.game;
    this._bookFrom = g.mode === 'menu' ? 'title' : 'game';
    this._bookWasPaused = g.paused;
    if (this._bookFrom === 'game') g.paused = true;
    if (this._bookFrom === 'title') $('screen-title').classList.add('hidden');
    const o = g.order || g.freeGoal;
    this.book.open(id || (o && o.id), { canCook: g.mode !== 'orders' && g.mode !== 'tutorial' });
  }
  _afterBook() {
    if (this._bookFrom === 'title' && this.game.mode === 'menu') this.show('title');
    else if (this._bookFrom === 'game' && !this._bookWasPaused) this.game.paused = false;
  }
  /** Free Cook with a recipe from the book as the goal: hints, guide chips and scoring follow it. */
  practice(id) {
    const entry = bookById(id); if (!entry) return;
    this.startMode('free');
    this.game.freeGoal = orderFrom(entry, ['👩‍🍳', 'Practice'], { level: entry.levels[0], patience: 9999 });
    $('order-card').classList.remove('hidden');
    this._renderOrder(this.game.freeGoal);
    this.toast(`Practice: ${entry.title} ${entry.icon}`, 'good');
  }
  startMode(mode) {
    audio.init(); audio.resume(); audio.setVolumes(this.s.music, this.s.sfx); audio.startMusic(); audio.setStation(this.s.radio || 0); if (this.decor) this.decor.radio.station = audio.station;
    this.hideScreens();
    $('hud').classList.remove('hidden');
    this.game.start(mode);
    const free = mode === 'free';
    $('order-card').classList.toggle('hidden', free);
    $('score-pill').classList.toggle('hidden', mode !== 'orders' || this.game.cozy);
    $('tutorial-panel').classList.toggle('hidden', mode !== 'tutorial');
    $('score-val').textContent = '0';
    if (mode === 'tutorial') this._renderTutorial();
    if (free) this.toast('Free Cook — experiment with heat & methods! 🍳', 'good');
    else if (mode === 'cozy') this.toast('Cozy Mode — no timers, no rush 🌙', 'good');
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
    const m = this.game.mode;
    $('order-num').textContent = m === 'tutorial' ? `Tutorial · ${o.name}` : m === 'free' ? 'Practice · Free Cook' : `${this.game.cozy ? '🌙 ' : ''}Order ${this.game.orderIdx + 1} / ${this.game.orders.length} · ${o.name}`;
    const gr = $('order-greet'); gr.textContent = o.greet ? `“${o.greet}”` : ''; gr.classList.toggle('hidden', !o.greet);
    $('order-card').classList.toggle('special', o.id === dailyId());
    $('order-recipe').textContent = `${o.icon || RECIPE_ICONS[o.recipe]} ${orderTitle(o)}`;
    $('order-doneness').textContent = levelLabel(o) + ((o.eggs || 1) > 1 ? ` · 🥚×${o.eggs}` : '');
    this._renderExtras();
    const c = $('order-card'); c.classList.add('pop'); setTimeout(() => c.classList.remove('pop'), 350);
  }
  _renderExtras() {
    const o = this.game.order || this.game.freeGoal; if (!o) return;
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
    this._lastDish = { title: d.free ? 'Free Cook' : orderTitle(d.order), stars: d.free ? 0 : d.result.stars };
    $('dish-photo').classList.add('hidden'); $('dish-rewards').innerHTML = '';
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
      $('dish-rewards').innerHTML = this._reward(d);
      const last = g.mode === 'orders' && g.orderIdx + 1 >= g.orders.length;
      $('btn-next').textContent = g.mode === 'tutorial' ? 'Finish tutorial' : g.mode === 'free' ? 'Cook it again' : last ? 'See results' : 'Next order';
      if (g.mode === 'orders') { $('score-val').textContent = g.roundScore; const p = $('score-pill'); p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); }
      if (r.stars >= 3) audio.chime(); else if (r.stars >= 2) audio.ding(); else audio.fail();
      for (let i = 0; i < r.stars; i++) setTimeout(() => audio.stamp(), 260 + i * 150);
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
    $('res-list').innerHTML = results.map(({ order, result }) => `<li><span>${order.avatar} ${orderTitle(order)}<small>${[levelLabel(order)].concat((order.extras || []).map(sideLabel), (order.fill || []).map((k) => fillLabel(k, order.recipe))).join(' · ')}</small></span><b>${'⭐'.repeat(result.stars) || '—'} ${result.total}</b></li>`).join('');
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
    if (g.mode === 'orders' && g.order && !g.cozy) {
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
    // stir ring: fills while you stir, with a 🥚 "beaten" notch half-way and a 🥣 "scramble" notch at the top
    let ring = this._ring;
    if (!ring) {
      ring = this._ring = document.createElement('div'); ring.className = 'stir-ring';
      ring.innerHTML = '<div class="sr-track"></div><span class="sr-notch beat">🥚</span><span class="sr-notch scr">🥣</span><span class="sr-txt"></span>';
      host.appendChild(ring);
    }
    const si = g.stirInfo;
    if (si && g.time - si.t < 0.9 && !g.paused) {
      si.obj.getWorldPosition(_v); _v.project(camera);
      ring.style.left = ((_v.x * 0.5 + 0.5) * W).toFixed(0) + 'px'; ring.style.top = ((-_v.y * 0.5 + 0.5) * Hh).toFixed(0) + 'px';
      ring.style.setProperty('--p', (si.p * 360).toFixed(1) + 'deg');
      ring.classList.toggle('lock', si.lock); ring.classList.toggle('beaten', si.p >= 0.5); ring.classList.toggle('show', true);
      ring.classList.toggle('pulse', si.pulse != null && g.time - si.pulse < 0.35);
      ring.lastChild.textContent = si.lock ? 'Beaten! Let go' : si.p >= 0.5 ? 'Scrambling…' : 'Beating…';
    } else ring.classList.remove('show');
    $('btn-flip').classList.toggle('hidden', !g.canFlip());
  }
}

function starHTML(n) { return [0, 1, 2].map((i) => `<span class="${i < n ? '' : 'off'}" style="animation-delay:${i * 0.15}s">⭐</span>`).join(''); }
