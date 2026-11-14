// The long game: chef rank and XP, recipe unlocks, trophies (with a 3D trophy shelf on the wall) and seasonal decorations.
import * as THREE from 'three';
import { audio } from './audio.js';
import { mergeStatic } from './merge.js';
import { BOOK } from './recipes.js';
import { TRICKS } from './noxcare.js';
import { TROPHIES, best, bump, checkTrophies, levelOf, rankOf, seasonOf, seedXP, xpFor } from './progress.js';
import { streakOf } from './scrapbook.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TIER = { bronze: '#d08a5a', silver: '#d9dde6', gold: '#ffcf4a', rainbow: '#ff8fc8' };
const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.7, ...o });
const SPH = new THREE.SphereGeometry(1, 20, 14);
const put = (p, geo, mat, x, y, z, sx = 1, sy = sx, sz = sx) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; p.add(m); return m; };

export class Career {
  constructor({ game, ui, scene }) {
    this.game = game; this.ui = ui; this.scene = scene; const s = this.s = ui.s;
    s.stats ||= {}; s.trophies ||= {};
    seedXP(s);
    best(s, 'bestStreak', streakOf(s.visits || []));
    this.retro = checkTrophies(s).length; // trophies already earned before they existed
    ui.save();
    game.unlockOpts = () => ({ level: this.level, season: this.season.id });
    game.on('stat', (k) => { if (k !== 'check') bump(s, k); this._award(); });
    this._buildShelf(); this._buildSeasons(); this.applySeason();
    $('btn-trophies').addEventListener('click', () => { audio.init(); audio.pop(); this.openTrophies(); });
    $('tro-close').addEventListener('click', () => { audio.pop(); this.closeTrophies(); });
  }
  get level() { return levelOf(this.s.xp || 0).level; }
  get season() { return seasonOf(new Date(), this.s.season || 'auto'); }
  /** Why a recipe can't be ordered yet: { text, block } (block = can't even practise it), or null. */
  lockOf(b) {
    if ((b.unlock || 1) > this.level) return { text: `🔒 Unlocks at chef level ${b.unlock}`, block: true };
    if (b.season && b.season !== this.season.id) { const se = seasonOf(new Date(), b.season); return { text: `${se.icon} Only ordered in ${se.name} (you can still practise it)`, block: false }; }
    return null;
  }
  nextUnlock() { return BOOK.filter((b) => (b.unlock || 1) > this.level).sort((a, b) => a.unlock - b.unlock)[0] || null; }

  // ---------- title screen ----------
  refreshTitle() {
    const { level, into, need } = levelOf(this.s.xp || 0), r = rankOf(level), se = this.season, nx = this.nextUnlock();
    $('rank-line').innerHTML = `<b>${r.icon} ${r.name} Chef</b> · Lv ${level} <span class="xpbar"><i style="width:${Math.round((into / need) * 100)}%"></i></span> <small>${into}/${need} XP</small><br><small>${se.icon} ${se.name} menu${nx ? ` · next: ${nx.icon} ${esc(nx.title)} at Lv ${nx.unlock}` : ' · every recipe unlocked!'}</small>`;
    const got = Object.keys(this.s.trophies).length;
    $('tro-count').textContent = `${got}/${TROPHIES.length}`;
    // trophies earned before they existed get a line of their own, until the Trophies screen is opened
    if (this.retro) $('rank-line').insertAdjacentHTML('beforeend', `<br><b class="retro">🏆 You've already earned ${this.retro} trophies! Tap Trophies to see them</b>`);
  }

  // ---------- after each dish / round ----------
  /** XP, unlocks and trophies for a served dish. Returns reward chips for the dish panel. */
  reward(d) {
    const g = this.game, s = this.s, r = d.result, out = [];
    if (g.mode === 'tutorial') return '';
    if (r) { bump(s, 'served'); if (r.stars >= 3) bump(s, 'perfect'); }
    if (!g.art.empty) bump(s, 'art');
    const dStars = d.drink && d.drink.drink ? d.drink.stars : 0;
    let xp = xpFor({ total: r ? (r.rush ? r.rush.points : r.total) : 0, stars: r ? r.stars : 0, drinkStars: dStars });
    if (g.mode === 'free') xp = Math.ceil(xp / 2);
    if (this.ui.nox && this.ui.nox.cheering && r) { s.coins = (s.coins | 0) + 2; out.push('<span class="rw heart">🐈‍⬛ Noxie cheered +🪙2</span>'); }
    const before = this.level; s.xp = (s.xp || 0) + xp; const after = this.level;
    if (xp) out.push(`<span class="rw xp">+${xp} XP</span>`);
    if (after > before) {
      const r1 = rankOf(before), r2 = rankOf(after);
      out.push(`<span class="rw note">🎉 Chef level ${after}!${r2.name !== r1.name ? ` You're now a ${r2.icon} ${r2.name} Chef` : ''}</span>`);
      for (const b of BOOK.filter((x) => (x.unlock || 1) > before && (x.unlock || 1) <= after)) out.push(`<span class="rw sticker">🔓 New recipe: ${b.icon} ${esc(b.title)}</span>`);
      audio.chime();
    }
    out.push(...this._award(true));
    this.ui.save();
    return out.join('');
  }
  roundOver(d) {
    const s = this.s;
    if (d.variant === 'rush') { best(s, 'rushServed', d.results.length); best(s, 'bestCombo', d.maxCombo || 0); }
    const fresh = this._award(true); this.ui.save();
    return fresh.join('');
  }
  /** Check for new trophies; as chips for a panel, or as a toast. */
  _award(asChips = false) {
    const fresh = checkTrophies(this.s); if (!fresh.length) return [];
    this._fillShelf(); this.ui.save();
    if (!asChips) { for (const t of fresh) this.ui.toast(`🏆 Trophy: ${t.icon} ${t.name}!`, 'good'); audio.chime(); }
    return fresh.map((t) => `<span class="rw sticker">🏆 Trophy: ${t.icon} ${esc(t.name)}</span>`);
  }

  // ---------- trophy screen ----------
  openTrophies() {
    this.retro = 0;
    const s = this.s, { level, into, need } = levelOf(s.xp || 0), r = rankOf(level), nox = this.ui.nox;
    this._fromGame = this.game.mode !== 'menu';
    if (this._fromGame) this.game.paused = true;
    const learned = nox ? nox.n.tricks : [];
    $('tro-rank').innerHTML = `
      <div class="tro-card"><span class="tro-big">${r.icon}</span><div><b>${r.name} Chef · level ${level}</b><span class="xpbar wide"><i style="width:${Math.round((into / need) * 100)}%"></i></span><small>${into} / ${need} XP to level ${level + 1} · ${s.xp} XP in total</small></div></div>
      <div class="tro-stats"><span>⚡ Rush best <b>${s.rushBest || 0}</b></span><span>📅 Dailies <b>${(s.dailyDays || []).length}</b></span><span>🍽️ Served <b>${(s.stats.served) || 0}</b></span><span>⭐ Perfect <b>${(s.stats.perfect) || 0}</b></span>
      ${nox ? `<span>${nox.mood()[0]} Noxie <b>${nox.happy}%</b></span><span>🎓 Tricks <b>${learned.length}/${TRICKS.length}</b></span>` : ''}</div>
      ${nox ? `<p class="tro-tricks">${TRICKS.map((t) => `<span class="${learned.includes(t.id) ? 'on' : ''}" title="${esc(t.tip)}">${t.name}${learned.includes(t.id) ? '' : ` <small>${esc(t.tip)}</small>`}</span>`).join('')}</p>` : ''}`;
    $('tro-grid').innerHTML = TROPHIES.map((t) => { const when = s.trophies[t.id]; return `<div class="tro${when ? ' got' : ''}" style="--t:${TIER[t.tier]}"><span class="tro-ico">${when ? t.icon : '🔒'}</span><b>${esc(t.name)}</b><small>${esc(t.desc)}</small>${when ? `<em>${when}</em>` : ''}</div>`; }).join('');
    $('tro-count2').textContent = `${Object.keys(s.trophies).length} of ${TROPHIES.length}`;
    this.ui.show('trophies');
  }
  closeTrophies() { if (this._fromGame) { this.ui.hideScreens(); this.game.paused = false; } else this.ui.show('title'); }

  // ---------- trophy shelf on the wall above the cutting board ----------
  _buildShelf() {
    const g = this.shelf = new THREE.Group(); g.position.set(-6.05, 0.35, -3.6); this.scene.add(g); // above the photo frame, clear of the fridge door
    const wood = this.game.mats.wood;
    for (const y of [2.95, 3.45]) { put(g, new THREE.BoxGeometry(2.05, 0.05, 0.28), wood, 0, y, 0); put(g, new THREE.BoxGeometry(2.05, 0.06, 0.02), wood, 0, y + 0.01, 0.14); }
    for (const x of [-0.9, 0.9]) put(g, new THREE.BoxGeometry(0.04, 0.2, 0.18), wood, x, 2.85, -0.04);
    mergeStatic(g, () => false, [], () => true);
    const pts = [[0.001, 0], [0.06, 0], [0.06, 0.02], [0.018, 0.035], [0.015, 0.09], [0.05, 0.11], [0.075, 0.17], [0.08, 0.2], [0.07, 0.2], [0.06, 0.16], [0.001, 0.12]].map(([x, y]) => new THREE.Vector2(x, y));
    this.cups = new THREE.InstancedMesh(new THREE.LatheGeometry(pts, 20), new THREE.MeshPhysicalMaterial({ color: '#ffffff', metalness: 0.35, roughness: 0.25, clearcoat: 1, emissive: '#3a2a10', emissiveIntensity: 0.25 }), TROPHIES.length);
    this.cups.castShadow = true; this.cups.count = 0; this.cups.setColorAt(0, new THREE.Color()); g.add(this.cups);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.9, 0.4), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 3.25; g.add(hit);
    const toy = { obj: g, drag: false, tap: () => { audio.chime(); this.openTrophies(); } };
    g.traverse((o) => { o.userData.interact = 'toy'; o.userData.toy = toy; });
    this.game.kitchen.pickables.push(g);
    this._fillShelf();
  }
  _fillShelf() {
    const d = new THREE.Object3D(), c = new THREE.Color(), got = TROPHIES.filter((t) => this.s.trophies[t.id]);
    got.forEach((t, i) => {
      const row = i < 14 ? 0 : 1, k = i % 14;
      d.position.set(-0.91 + k * 0.14, row ? 3.475 : 2.975, 0.01); d.rotation.y = (k % 3) * 0.4; d.scale.setScalar(t.tier === 'rainbow' ? 1.25 : t.tier === 'gold' ? 1.1 : 1); d.updateMatrix();
      this.cups.setMatrixAt(i, d.matrix); this.cups.setColorAt(i, c.set(TIER[t.tier]));
    });
    this.cups.count = got.length; this.cups.instanceMatrix.needsUpdate = true; if (this.cups.instanceColor) this.cups.instanceColor.needsUpdate = true;
  }

  // ---------- seasonal decorations: on top of the fridge and at the ends of the window sill ----------
  _buildSeasons() {
    const top = (x, z) => { const o = new THREE.Group(); o.position.set(1 + x, 3.32, -2.95 + z); return o; };
    const sill = (x) => { const o = new THREE.Group(); o.position.set(x, 3.77, -3.45); return o; };
    const S = this.seasons = {};
    // autumn: pumpkins and fallen leaves; Halloween adds a candy cauldron and little bats
    {
      const a = new THREE.Group(), pm = M('#ef7d22', { roughness: 0.45 }), stem = M('#5d7a2c');
      const pumpkin = (p, x, z, s) => { for (let i = 0; i < 8; i++) { const t = (i / 8) * Math.PI * 2; put(p, SPH, pm, x + Math.cos(t) * 0.11 * s, 0.17 * s, z + Math.sin(t) * 0.11 * s, 0.13 * s, 0.17 * s, 0.13 * s); } put(p, new THREE.CylinderGeometry(0.02 * s, 0.035 * s, 0.1 * s, 8), stem, x, 0.36 * s, z).rotation.z = -0.3; };
      const t = top(0, 0); pumpkin(t, -0.6, 0.1, 1.5); pumpkin(t, -0.05, 0.25, 1.1); pumpkin(t, 0.55, 0.05, 0.85);
      const leafM = [M('#d9541e'), M('#f2a51b'), M('#a8321d')];
      for (let i = 0; i < 12; i++) { const l = put(t, SPH, leafM[i % 3], -0.9 + i * 0.16, 0.012, 0.35 + Math.sin(i * 2.1) * 0.15, 0.07, 0.008, 0.045); l.rotation.y = i; }
      a.add(t); const s1 = sill(-3.95); pumpkin(s1, 0, 0, 0.7); a.add(s1);
      const h = new THREE.Group(), s2 = sill(1.45); h.add(s2);
      s2.add(new THREE.Mesh(new THREE.LatheGeometry([[0.001, 0], [0.12, 0.01], [0.19, 0.1], [0.19, 0.2], [0.16, 0.24]].map(([x, y]) => new THREE.Vector2(x, y)), 24), M('#2b2233')));
      for (let i = 0; i < 6; i++) put(s2, SPH, [M('#ff8fc8'), M('#7fd1b9'), M('#ffd86b')][i % 3], Math.cos(i) * 0.08, 0.24, Math.sin(i) * 0.08, 0.04);
      const batM = M('#2b2233', { side: THREE.DoubleSide }), wing = new THREE.Shape(); wing.moveTo(0, 0); wing.quadraticCurveTo(0.12, 0.1, 0.22, 0.05); wing.quadraticCurveTo(0.16, 0.02, 0.18, -0.04); wing.quadraticCurveTo(0.1, 0, 0, 0);
      for (const [x, y] of [[-4.4, 6.9], [2.2, 7.0]]) { const b = new THREE.Group(); b.position.set(x, y, -3.6); h.add(b); put(b, SPH, batM, 0, 0, 0, 0.06, 0.07, 0.05); for (const sx of [-1, 1]) { const w = new THREE.Mesh(new THREE.ShapeGeometry(wing), batM); w.scale.set(sx, 1, 1); b.add(w); } }
      S.autumn = a; S.halloween = h;
    }
    // winter: a little tree with baubles and a snowman; Christmas adds presents
    {
      const w = new THREE.Group(), pine = M('#2f7a4a', { roughness: 0.6 }), t = top(0, 0);
      [[0.5, 0.35, 0.0], [0.4, 0.3, 0.28], [0.28, 0.26, 0.52]].forEach(([r, h, y]) => put(t, new THREE.ConeGeometry(r, h * 1.4, 18), pine, 0, y + h * 0.7, 0));
      put(t, new THREE.CylinderGeometry(0.06, 0.07, 0.15, 10), M('#6b4a2e'), 0, 0.06, 0);
      const star = new THREE.Shape(); for (let i = 0; i <= 10; i++) { const ang = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 0.045 : 0.1; i ? star.lineTo(Math.cos(ang) * r, Math.sin(ang) * r) : star.moveTo(Math.cos(ang) * r, Math.sin(ang) * r); }
      put(t, new THREE.ExtrudeGeometry(star, { depth: 0.02, bevelEnabled: false }), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.4, 0.8) }), 0, 1.22, 0);
      const baub = [M('#ff8fc8', { metalness: 0.5 }), M('#ffd86b', { metalness: 0.6 }), M('#8ccdf5', { metalness: 0.5 })];
      for (let i = 0; i < 12; i++) { const ang = i * 2.1, y = 0.25 + (i % 4) * 0.18, r = 0.42 - (i % 4) * 0.09; put(t, SPH, baub[i % 3], Math.cos(ang) * r, y, Math.sin(ang) * r, 0.04); }
      w.add(t);
      const s1 = sill(-3.95), snow = M('#ffffff', { roughness: 0.7, clearcoat: 0.1 });
      put(s1, SPH, snow, 0, 0.11, 0, 0.12); put(s1, SPH, snow, 0, 0.28, 0, 0.085); put(s1, new THREE.ConeGeometry(0.015, 0.06, 6), M('#f28c28'), 0, 0.28, 0.1).rotation.x = Math.PI / 2;
      put(s1, new THREE.TorusGeometry(0.07, 0.018, 6, 16), M('#c8102e'), 0, 0.2, 0).rotation.x = Math.PI / 2;
      w.add(s1);
      const c = new THREE.Group(), t2 = top(0, 0); c.add(t2);
      [[0.6, 0.12, '#ff8fc8', '#ffffff'], [-0.6, 0.18, '#7fd1b9', '#ff5fb0'], [0.75, -0.25, '#b48cff', '#ffd86b']].forEach(([x, z, col, rib]) => { const b = put(t2, new THREE.BoxGeometry(0.22, 0.18, 0.22), M(col), x, 0.09, z); b.rotation.y = x; put(t2, new THREE.BoxGeometry(0.235, 0.19, 0.04), M(rib), x, 0.09, z).rotation.y = x; });
      S.winter = w; S.christmas = c;
    }
    // spring: tulips in a vase and a flower pot
    {
      const sp = new THREE.Group(), t = top(0, 0);
      t.add(new THREE.Mesh(new THREE.LatheGeometry([[0.001, 0], [0.12, 0], [0.18, 0.15], [0.12, 0.32], [0.09, 0.4], [0.1, 0.42]].map(([x, y]) => new THREE.Vector2(x, y)), 24), M('#8ccdf5', { clearcoat: 1 })));
      const stem = M('#4fa84a'), petals = [M('#ff8fc8'), M('#ffd86b'), M('#b48cff'), M('#ff5e5e')];
      for (let i = 0; i < 5; i++) { const ang = i * 1.26, x = Math.cos(ang) * 0.09, z = Math.sin(ang) * 0.09, h = 0.62 + (i % 2) * 0.12; const st = put(t, new THREE.CylinderGeometry(0.01, 0.012, h - 0.3, 6), stem, x, 0.3 + (h - 0.3) / 2, z); st.rotation.z = -x * 0.8; put(t, SPH, petals[i % 4], x * 1.6, h, z * 1.6, 0.055, 0.075, 0.055); }
      sp.add(t);
      const s1 = sill(-3.95); s1.add(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.18, 16), M('#f7b6cf'))); s1.children[0].position.y = 0.09;
      for (let i = 0; i < 5; i++) put(s1, SPH, petals[(i + 1) % 4], Math.cos(i * 1.3) * 0.07, 0.24, Math.sin(i * 1.3) * 0.07, 0.04);
      sp.add(s1); S.spring = sp;
    }
    // summer: a sunflower and a jug of lemonade
    {
      const su = new THREE.Group(), t = top(0, 0);
      t.add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.25, 18), M('#d97a4a'))); t.children[0].position.y = 0.125;
      put(t, new THREE.CylinderGeometry(0.015, 0.018, 0.8, 8), M('#4fa84a'), 0, 0.6, 0);
      const head = new THREE.Group(); head.position.set(0, 1.02, 0.02); head.rotation.x = 0.35; t.add(head);
      put(head, new THREE.CylinderGeometry(0.1, 0.1, 0.04, 20), M('#5b3a1e'), 0, 0, 0).rotation.x = Math.PI / 2;
      for (let i = 0; i < 14; i++) { const ang = (i / 14) * Math.PI * 2; const p = put(head, SPH, M('#ffcf3a'), Math.cos(ang) * 0.16, Math.sin(ang) * 0.16, 0, 0.07, 0.03, 0.01); p.rotation.z = ang; }
      su.add(t);
      const s1 = sill(1.45);
      s1.add(new THREE.Mesh(new THREE.LatheGeometry([[0.001, 0], [0.1, 0], [0.11, 0.25], [0.08, 0.3]].map(([x, y]) => new THREE.Vector2(x, y)), 20), M('#f7ea8a', { transparent: true, opacity: 0.8 })));
      put(s1, SPH, M('#ffe45c'), 0.06, 0.31, 0, 0.05, 0.05, 0.012);
      su.add(s1); S.summer = su;
    }
    for (const [k, grp] of Object.entries(S)) {
      grp.visible = false; this.scene.add(grp); for (const o of grp.children.slice()) if (o.isGroup) mergeStatic(o, () => false, [], () => true);
      const toy = { obj: grp, drag: false, tap: () => { audio.chime(); this.game.toast(`Happy ${this.season.name}! ${this.season.icon}`, 'good'); } };
      grp.traverse((o) => { o.userData.interact = 'toy'; o.userData.toy = toy; });
      this.game.kitchen.pickables.push(grp);
    }
  }
  applySeason() {
    const se = this.season;
    for (const [k, g] of Object.entries(this.seasons)) g.visible = k === se.id || k === se.special;
  }
}
