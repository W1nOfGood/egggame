// The drink bar UI: the pouring panel in the kitchen, the Drink Menu collection screen, and tips for served drinks.
import { audio } from './audio.js';
import { CUPS, DRINKS, DRINK_CATS, EXTRAS, LIQUIDS, drinkById, recipeText } from './drinklist.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TIPS = [0, 2, 5, 8]; // by stars
const FULL_FROM = 75; // the "full cup" zone on the fill bar, in %

export class DrinkBar {
  constructor({ game, settings, show, hideScreens, save, startFree, camera }) {
    Object.assign(this, { game, s: settings, show, hideScreens, save, startFree, camera });
    this.cat = 'all'; this.sel = DRINKS[0].id;
    this._bindPanel(); this._bindMenu();
    game.on('drink', (on) => {
      const hud = $('hud'); hud.classList.toggle('decorating', on); hud.classList.toggle('drinking', on);
      $('drink-panel').classList.toggle('hidden', !on); this.camera(on);
      this._html = null; this.update();
    });
  }
  get wantedId() { const g = this.game; return (g.order && g.order.drink) || g.drinkGoal || null; }

  // ---------- pouring panel ----------
  _bindPanel() {
    const cup = this.game.drink, btn = (data, id, o) => `<button class="art-opt" data-${data}="${id}" title="${o.name}" aria-label="${o.name}"${o.color ? ` style="--c:${o.color}"` : ''}>${o.icon}</button>`;
    $('dk-liquids').innerHTML = Object.entries(LIQUIDS).map(([id, o]) => btn('liquid', id, o)).join('');
    $('dk-extras').innerHTML = Object.entries(EXTRAS).map(([id, o]) => btn('extra', id, o)).join('');
    $('dk-cups').innerHTML = Object.entries(CUPS).map(([id, o]) => btn('cup', id, o)).join('');
    // hold a liquid to pour it
    $('dk-liquids').addEventListener('pointerdown', (e) => {
      const b = e.target.closest('[data-liquid]'); if (!b) return;
      e.preventDefault(); audio.init(); audio.resume();
      this._pointer = e.pointerId; b.classList.add('held'); this._heldBtn = b;
      cup.pour(b.dataset.liquid);
    });
    const stop = (e) => {
      if (e.pointerId !== this._pointer) return;
      this._pointer = null; if (this._heldBtn) this._heldBtn.classList.remove('held');
      cup.stopPour();
    };
    window.addEventListener('pointerup', stop); window.addEventListener('pointercancel', stop);
    $('drink-panel').addEventListener('contextmenu', (e) => e.preventDefault());
    $('drink-panel').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b || b.dataset.liquid) return;
      audio.init(); audio.resume(); audio.pop();
      if (b.dataset.extra) { cup.toggleExtra(b.dataset.extra); const x = EXTRAS[b.dataset.extra]; this.game.toast(`${x.icon} ${x.name} ${cup.extras.includes(b.dataset.extra) ? 'added' : 'removed'}`); }
      else if (b.dataset.cup) cup.setCup(b.dataset.cup);
      else if (b.id === 'dk-stir') cup.stir();
      else if (b.id === 'dk-dump') { cup.clear(); audio.trash(); }
      else if (b.id === 'dk-done') this.game.endDrink();
      else if (b.id === 'dk-menu') this.openMenu();
      this.update();
    });
  }
  /** Keep the panel in step with the cup (cheap: it only touches the page when something changed). */
  update() {
    const g = this.game; if (!g.drinking) return;
    const c = g.drink, want = drinkById(this.wantedId), made = c.made(), r = c.result(this.wantedId);
    const seg = (id, w) => `<i style="width:${w.toFixed(1)}%;background:${LIQUIDS[id].color}"></i>`;
    const now = Object.entries(c.amounts).map(([k, v]) => seg(k, v * 100)).join('');
    const target = want ? Object.entries(want.mix).map(([k, v]) => seg(k, v * 90)).join('') : '';
    const status = c.pouring ? `Pouring ${LIQUIDS[c.pouring].name}…`
      : !c.ready ? 'Press and hold a liquid to pour'
        : want ? (r.stars ? `${'⭐'.repeat(r.stars)} ${esc(r.note)}` : esc(r.note))
          : made ? `${made.icon} That's a ${esc(made.name)}!` : 'A house special, all your own ✨';
    const html = `${want ? `<b>${want.icon} ${esc(want.name)}</b><small>${recipeText(want)}</small>` : '<b>🍹 Drink Bar</b><small>Mix anything. Recipes you match go in the Drink Menu.</small>'}|${now}|${target}|${status}|${c.extras}|${c.cupId}|${c.stirred}|${want && want.id}`;
    if (html === this._html) return;
    this._html = html;
    $('dk-goal').innerHTML = html.split('|')[0];
    $('dk-now').innerHTML = now;
    $('dk-target').innerHTML = target; $('dk-target').classList.toggle('hidden', !want);
    $('dk-status').innerHTML = status;
    document.querySelectorAll('#dk-liquids [data-liquid]').forEach((b) => b.classList.toggle('want', !!want && b.dataset.liquid in want.mix));
    document.querySelectorAll('#dk-extras [data-extra]').forEach((b) => { const id = b.dataset.extra; b.classList.toggle('on', c.extras.includes(id)); b.classList.toggle('want', !!want && want.extras.includes(id)); });
    document.querySelectorAll('#dk-cups [data-cup]').forEach((b) => b.classList.toggle('on', b.dataset.cup === c.cupId));
  }

  // ---------- Drink Menu ----------
  _bindMenu() {
    $('drinks-close').addEventListener('click', () => { audio.pop(); this.closeMenu(); });
    $('drinks-tabs').addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (b) { audio.pop(); this.cat = b.dataset.cat; this.renderMenu(); } });
    $('drinks-grid').addEventListener('click', (e) => { const b = e.target.closest('[data-drink]'); if (b) { audio.pop(); this.sel = b.dataset.drink; this.renderMenu(); $('drinks-detail').scrollIntoView({ block: 'nearest' }); } });
    $('drinks-detail').addEventListener('click', (e) => { if (e.target.closest('#drink-make')) { audio.init(); audio.resume(); audio.pop(); this.make(this.sel); } });
  }
  openMenu() {
    const g = this.game;
    this._from = g.mode === 'menu' ? 'title' : 'game';
    if (this._from === 'game') { this._wasPaused = g.paused; g.paused = true; }
    this.renderMenu(); this.show('drinks');
  }
  closeMenu() {
    if (this._from === 'title') this.show('title');
    else { this.hideScreens(); this.game.paused = this._wasPaused; }
  }
  renderMenu() {
    const got = this.s.drinks, list = DRINKS.filter((d) => this.cat === 'all' || d.cat === this.cat), g = this.game;
    if (!list.some((d) => d.id === this.sel)) this.sel = list[0].id;
    $('drinks-count').textContent = `${Object.keys(got).length} of ${DRINKS.length} made`;
    $('drinks-tabs').innerHTML = DRINK_CATS.map(([k, n]) => `<button class="book-tab${k === this.cat ? ' on' : ''}" data-cat="${k}">${n}</button>`).join('');
    const stars = (id) => (got[id] ? '⭐'.repeat(got[id].best) || '✓' : '');
    $('drinks-grid').innerHTML = list.map((d) => `<button class="drink-card${d.id === this.sel ? ' on' : ''}${got[d.id] ? ' made' : ''}" data-drink="${d.id}"><span class="dc-ico">${d.icon}</span><b>${esc(d.name)}</b><small>${stars(d.id) || '&nbsp;'}</small></button>`).join('');
    const d = drinkById(this.sel), rec = got[d.id], canMake = g.mode === 'menu' || g.mode === 'free';
    $('drinks-detail').innerHTML = `<span class="dd-ico">${d.icon}</span><div class="dd-txt"><h3>${esc(d.name)}</h3><p>${esc(d.blurb)}</p><p class="dd-recipe">${recipeText(d)}</p><small>${CUPS[d.cup].icon} ${CUPS[d.cup].name}${rec ? ` · made ${rec.count}× · best ${'⭐'.repeat(rec.best) || '—'}` : ' · not made yet'}</small></div>${canMake ? '<button id="drink-make" class="big-btn primary">🍹 Make it</button>' : '<small class="dd-later">You can make this after your shift.</small>'}`;
  }
  make(id) {
    const g = this.game;
    if (g.mode === 'menu') this.startFree();
    else { this.hideScreens(); g.paused = this._wasPaused; }
    g.setDrinkGoal(id);
    g.beginDrink();
    this._html = null; this.update();
  }

  // ---------- rewards ----------
  /** Tips and the collection, for a drink that was just served. Returns reward chips for the dish panel. */
  reward(d) {
    const r = d.drink, s = this.s, out = []; if (!r || this.game.mode === 'tutorial') return '';
    let tip = r.drink || !r.wanted ? TIPS[r.stars] || 2 : TIPS[1];
    if (this.game.mode === 'free') tip = Math.ceil(tip / 2); // practice pays half, like dishes
    if (r.drink) {
      const rec = s.drinks[r.drink.id] || { best: 0, count: 0 }, first = !rec.count;
      if (r.drink === r.wanted) rec.best = Math.max(rec.best, r.stars);
      rec.count++; s.drinks[r.drink.id] = rec;
      if (first) {
        const n = Object.keys(s.drinks).length; tip += 5;
        out.push(`<span class="rw sticker">🆕 New drink: ${r.drink.icon} ${esc(r.drink.name)} (${n}/${DRINKS.length})</span>`);
        if (n % 10 === 0) { tip += 20; out.push(`<span class="rw note">🍹 ${n} drinks made! +🪙20</span>`); }
      }
    }
    const label = r.drink && r.drink === r.wanted ? `${r.drink.icon} ${'⭐'.repeat(r.stars)}` : `🍹 ${esc(r.note)}`;
    out.push(`<span class="rw coin">${label} +🪙${tip}</span>`);
    s.coins = (s.coins | 0) + tip;
    this.save();
    return out.join('');
  }
}
