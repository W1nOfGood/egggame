// The recipe book overlay: category tabs, a list of dishes, and a readable recipe page for each one.
import { BOOK, CATS, bookById } from './recipes.js';
import { DONENESS } from './config.js';
import { ING } from './ingredients.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CAT_NAME = Object.fromEntries(CATS);
const dots = (n) => `<span class="diff" aria-label="Difficulty ${n} of 3">${[1, 2, 3].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span>`;
const DIFF = ['', 'Easy', 'Medium', 'Chef'];

export class RecipeBook {
  /** onCook(id) starts a practice round for that dish; onClose() is called after the book hides. */
  constructor({ onCook, onClose, progress = () => ({}), daily = () => null }) {
    this.onCook = onCook; this.onClose = onClose; this.progress = progress; this.daily = daily;
    this.cat = 'all'; this.sel = 'sunny'; this.canCook = true;
    $('book-close').addEventListener('click', () => this.close());
    $('screen-book').addEventListener('click', (e) => { if (e.target.id === 'screen-book') this.close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && this.isOpen) this.close(); });
    $('book-tabs').addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (b) { this.cat = b.dataset.cat; this.render(); } });
    $('book-list').addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (b) { this.sel = b.dataset.id; this.render(); $('book-page').scrollTop = 0; } });
    $('book-page').addEventListener('click', (e) => { if (e.target.closest('#bp-cook')) { const id = this.sel; this.close(); this.onCook(id); } });
  }
  get isOpen() { return !$('screen-book').classList.contains('hidden'); }
  open(id, { canCook = true } = {}) {
    if (id && bookById(id)) { this.sel = id; this.cat = 'all'; }
    this.canCook = canCook;
    $('screen-book').classList.remove('hidden');
    this.render();
    $('book-page').scrollTop = 0;
  }
  close() { if (!this.isOpen) return; $('screen-book').classList.add('hidden'); this.onClose && this.onClose(); }

  render() {
    $('book-tabs').innerHTML = CATS.map(([k, n]) => `<button class="book-tab${k === this.cat ? ' on' : ''}" data-cat="${k}">${n}<small>${k === 'all' ? BOOK.length : BOOK.filter((b) => b.cat === k).length}</small></button>`).join('');
    const list = BOOK.filter((b) => this.cat === 'all' || b.cat === this.cat);
    if (!list.some((b) => b.id === this.sel)) this.sel = list[0].id;
    $('book-list').innerHTML = list.map((b) => `
      <li class="book-item${b.id === this.sel ? ' on' : ''}" data-id="${b.id}" role="button" tabindex="0">
        <span class="bi-ico">${b.icon}</span>
        <span class="bi-txt"><b>${esc(b.title)}${b.id === this.daily() ? ' <em class="bi-special">✨ special</em>' : ''}</b><small>${CAT_NAME[b.cat]} · ${b.eggs} egg${b.eggs > 1 ? 's' : ''} · ${b.time}${this._best(b.id) ? ' · ' + '⭐'.repeat(this._best(b.id)) : ''}</small></span>${this._best(b.id) >= 3 ? '<span class="bi-sticker" title="Mastered">🏅</span>' : ''}
        ${dots(b.diff)}
      </li>`).join('');
    const sel = $('book-list').querySelector('.on'); if (sel) sel.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    $('book-page').innerHTML = this.page(bookById(this.sel));
  }

  _best(id) { const p = this.progress()[id]; return p ? p.best : 0; }
  page(b) {
    const prog = this.progress()[b.id] || { best: 0, count: 0 };
    const needs = [];
    if (b.recipe !== 'friedrice') needs.push(['🧈', 'Butter']);
    needs.push(['🥚', `${b.eggs} egg${b.eggs > 1 ? 's' : ''}`]);
    if (b.recipe === 'friedrice') needs.push(['🍚', 'Rice']);
    for (const e of b.extras) needs.push([ING[e.kind].icon, `${ING[e.kind].name} <em>${ING[e.kind].levels[e.level].label}</em>`]);
    for (const k of b.fill) needs.push([ING[k].icon, `${ING[k].name} <em>${b.recipe === 'omelette' ? 'inside' : b.recipe === 'scrambled' ? 'stirred in' : 'on top'}</em>`]);
    if (b.salt) needs.push(['🧂', 'Salt']);
    if (b.pepper) needs.push(['⚫', 'Pepper']);
    const levels = b.levels.map((l) => DONENESS[b.recipe][l].label);
    return `
      <div class="bp-hero">
        <div class="bp-icon">${b.icon}${prog.best >= 3 ? '<span class="bp-sticker">🏅<small>Mastered</small></span>' : ''}</div>
        <div class="bp-head">
          <div class="bp-cat">${CAT_NAME[b.cat]}</div>
          <h3>${esc(b.title)}</h3>
          <p class="bp-blurb">${esc(b.blurb)}</p>
        </div>
      </div>
      <div class="bp-facts">
        <div class="fact"><span>Difficulty</span><b>${dots(b.diff)} ${DIFF[b.diff]}</b></div>
        <div class="fact"><span>Time</span><b>⏱ ${b.time}</b></div>
        <div class="fact"><span>Eggs</span><b>${'🥚'.repeat(b.eggs)}</b></div>
        <div class="fact"><span>Ordered as</span><b>${levels.join(' · ')}</b></div>
        <div class="fact"><span>Your best</span><b>${prog.count ? '⭐'.repeat(prog.best) || '—' : 'Not cooked yet'}${prog.count ? ` <small>· cooked ${prog.count}×</small>` : ''}</b></div>
      </div>
      <h4>You’ll need</h4>
      <div class="bp-needs">${needs.map(([i, t]) => `<span class="need"><i>${i}</i>${t}</span>`).join('')}</div>
      <h4>How to make it</h4>
      <ol class="bp-steps">${b.steps.map(([h, t], n) => `<li><span class="num">${n + 1}</span><div><b>${esc(h)}</b><p>${esc(t)}</p></div></li>`).join('')}</ol>
      <div class="bp-tip"><span>💡</span><div><b>Chef’s tip</b><p>${esc(b.tip)}</p></div></div>
      ${this.canCook ? `<button id="bp-cook" class="big-btn primary bp-cook">🍳 Practice this in Free Cook</button>` : ''}
    `;
  }
}
