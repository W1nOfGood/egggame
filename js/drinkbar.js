// The drink UI: the little card shown while making a drink on the 3D shelf, the Drink Menu collection screen, and tips for served drinks.
import { audio } from './audio.js';
import { CUPS, DRINKS, DRINK_CATS, LIQUIDS, aDrink, drinkById, recipeText } from './drinklist.js';

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

  // ---------- what's in the cup (the making itself happens on the 3D shelf) ----------
  _bindPanel() {
    $('dk-done').addEventListener('click', () => { audio.init(); audio.resume(); audio.pop(); this.game.endDrink(); });
    this.game.on('drinkMenu', () => this.openMenu());
  }
  /** Keep the card and the shelf rings in step with the cup (cheap: it only touches anything when something changed). */
  update() {
    const g = this.game; if (!g.drinking) return;
    const c = g.drink, want = drinkById(this.wantedId), made = c.made(), r = c.result(this.wantedId);
    const seg = (id, w) => `<i style="width:${w.toFixed(1)}%;background:${LIQUIDS[id].color}"></i>`;
    const now = Object.entries(c.amounts).map(([k, v]) => seg(k, v * 100)).join('');
    const status = c.pouring ? `Pouring ${LIQUIDS[c.pouring].name}…`
      : !c.ready ? 'Press and hold a bottle on the shelf'
        : want && made !== want ? 'Keep going, follow the chips ✨'
        : want ? (r.stars ? `${'⭐'.repeat(r.stars)} ${esc(r.note)}` : esc(r.note))
          : made ? `${made.icon} That's ${esc(aDrink(made))}!` : 'A house special, all your own ✨';
    const goal = want ? `<b>${want.icon} ${esc(want.name)}</b><small>${recipeText(want)}</small>` : '<b>🍹 Drink Shelf</b><small>Mix anything. Tap the board for the menu.</small>';
    const html = `${goal}|${now}|${status}|${c.extras}|${c.cupId}|${want && want.id}`;
    if (html === this._html) return;
    this._html = html;
    $('dk-goal').innerHTML = goal;
    $('dk-now').innerHTML = now;
    $('dk-status').innerHTML = status;
    g.shelf.mark(want, c);
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
