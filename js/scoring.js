// Orders, scoring, the cooking guide, contextual hints and tutorial steps (pure logic, no rendering).
import { DONENESS, RECIPE_NAMES } from './config.js';
import { ING } from './ingredients.js';
import { BOOK, bookById } from './recipes.js';
import { pickCustomers, greet } from './customers.js';

const pick = (a) => a[(Math.random() * a.length) | 0];
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

/** Turn a recipe-book entry into an order: picks a doneness and gives the customer some patience. */
export function orderFrom(entry, cust, opts = {}) {
  const level = opts.level || pick(entry.levels);
  const n = entry.extras.length + entry.fill.length;
  return {
    id: entry.id, title: entry.title, icon: entry.icon, recipe: entry.recipe, level, eggs: entry.eggs,
    salt: entry.salt, pepper: entry.pepper, extras: entry.extras.map((e) => ({ ...e })), fill: entry.fill.slice(),
    patience: opts.patience || 140 + n * 30 + (entry.eggs - 1) * 20 + (entry.diff - 1) * 15,
    avatar: cust.avatar || cust[0], name: cust.name || cust[1], custId: cust.id || null, greet: cust.hi ? greet(cust) : '',
  };
}

export function makeRound(hearts = {}) {
  const c = pickCustomers(5, hearts);
  const tier = (d) => shuffle(BOOK.filter((b) => b.diff === d));
  const t1 = tier(1), t2 = tier(2), t3 = tier(3);
  const used = new Set();
  const take = (...pools) => { for (const p of pools) for (const e of p) if (!used.has(e.id)) { used.add(e.id); return e; } return BOOK[0]; };
  const slots = [[1, () => take(t1)], [2, () => take(t1, t2)], [2, () => take(t2)], [2, () => take(t2)], [3, () => take(t3, t2)]];
  return slots.map(([maxDiff, next], i) => {
    // regulars sometimes ask for their favourite dish
    const fav = bookById(c[i].fav);
    if (fav && !used.has(fav.id) && fav.diff <= maxDiff && Math.random() < 0.4) { used.add(fav.id); return orderFrom(fav, c[i]); }
    return orderFrom(next(), c[i]);
  });
}
export const tutorialOrder = () => orderFrom(bookById('sunny'), ['🐣', 'Chick'], { level: 'runny', patience: 9999 });

export const levelLabel = (o) => DONENESS[o.recipe][o.level].label;
export const recipeName = (r) => RECIPE_NAMES[r];
export const sideLabel = (e) => `${ING[e.kind].icon} ${ING[e.kind].levels[e.level].label} ${ING[e.kind].name.toLowerCase()}`;
export const fillLabel = (k, recipe) => `${ING[k].icon} ${ING[k].name} ${recipe === 'omelette' ? 'inside' : recipe === 'scrambled' ? 'stirred in' : 'on top'}`;
export const orderTitle = (o) => o.title || RECIPE_NAMES[o.recipe];

const win = (d) => d.y || d.w || d.c;
export function measure(food, recipe) { return recipe === 'scrambled' || recipe === 'omelette' ? food.w : food.y; }
export function windowFor(recipe, level) { return win(DONENESS[recipe][level]); }
const WHITE_REQ = { sunny: 0.85, over: 0.9, scrambled: 0, omelette: 0 };

export function stars(score) { return score >= 85 ? 3 : score >= 60 ? 2 : score >= 30 ? 1 : 0; }

const gap = (m, [lo, hi]) => (m < lo ? lo - m : m > hi ? m - hi : 0);

// Seasoning & presentation line (10): salt, pepper, butter
function seasonLine(main, o) {
  let s = 0; const sn = [];
  const season = (amt, wanted, pts, name) => {
    if (wanted) { if (amt >= 1 && amt <= 6) { s += pts; sn.push(`${name} ✓`); } else if (amt > 6) { s += pts / 2; sn.push(`too much ${name}`); } else sn.push(`no ${name}`); }
    else if (amt === 0) s += pts; else { s += 1; sn.push(`didn't want ${name}`); }
  };
  season(main.salt, o.salt, 4, 'salt');
  season(main.pepper, o.pepper, 3, 'pepper');
  if (main.buttered) { s += 3; sn.push('buttery'); } else sn.push('no butter');
  return [Math.round(s), sn.join(', ')];
}

// ----- one egg dish -----
function evalEgg(food, o) {
  const R = o.recipe, actual = food.recipe, fried = (a) => a === 'sunny' || a === 'over';
  let rec, rn;
  if (actual === R) { rec = 30; rn = RECIPE_NAMES[R]; }
  else if (actual === 'sheet' && R === 'omelette') { rec = 20; rn = 'Forgot to fold the omelette'; }
  else if (fried(actual) && fried(R)) { rec = 10; rn = `Made ${RECIPE_NAMES[actual].toLowerCase()} instead`; }
  else { rec = 0; rn = `Made ${RECIPE_NAMES[actual].toLowerCase()} instead`; }

  const win_ = windowFor(R, o.level), m = measure(food, R), dist = gap(m, win_);
  let dPts = 40 * Math.max(0, 1 - dist / 0.3);
  let dn = dist === 0 ? 'Perfect!' : m < win_[0] ? 'A little underdone' : 'A bit overcooked';
  if (dist > 0.2) dn = m < win_[0] ? 'Undercooked' : 'Overcooked';
  const req = WHITE_REQ[R];
  if (!food.scrambled && !food.mixed && req && food.w < req) { dPts *= Math.max(0, Math.min(1, (food.w - 0.4) / (req - 0.4))); dn = 'Egg white still runny'; }
  if (actual !== R) dPts *= 0.5;

  let c = 20; const cn = [];
  if (food.yolkBroken && fried(actual) && fried(R)) { c -= 10; cn.push('broken yolk'); }
  if (food.torn) { c -= 6; cn.push(food.folded ? 'spilled when folding' : 'torn'); }
  if (food.maxBrown > 0.75) { c -= 14; cn.push('burnt'); } else if (food.maxBrown > 0.5) { c -= 6; cn.push('very brown'); }
  if (food.stuck) { c -= 4; cn.push('stuck to pan'); }
  if (food.scrambled && food.stirTotal < 3 + food.w * 6) { c -= 6; cn.push('lumpy curds'); }
  return { rec: [rec, rn], don: [Math.round(dPts), dn], cond: [Math.max(0, c), cn.length ? cn.join(', ') : 'Beautiful'], sea: seasonLine(food, o) };
}

// ----- egg fried rice -----
function evalRice(rice, o) {
  const rec = rice.egg ? (rice.toss >= Math.PI * 3 ? 30 : 22) : 10;
  const rn = rice.egg ? 'Proper egg fried rice!' : 'Plain rice — no egg tossed in';
  const win_ = windowFor('friedrice', o.level), dist = gap(rice.c[0], win_);
  let dPts = 40 * Math.max(0, 1 - dist / 0.3);
  let dn = dist === 0 ? 'Perfect!' : rice.c[0] < win_[0] ? 'Too soft' : 'A bit over-fried';
  if (rice.egg && rice.eggRaw < 0.9) { dPts *= 0.7; dn += ', egg still raw'; }
  let c = 20; const cn = [];
  if (rice.maxBrown > 0.75) { c -= 14; cn.push('burnt'); } else if (rice.maxBrown > 0.5) { c -= 6; cn.push('very brown'); }
  if (rice.toss < Math.PI * 1.5) { c -= 5; cn.push('not tossed'); }
  return { rec: [rec, rn], don: [Math.round(dPts), dn], cond: [Math.max(0, c), cn.length ? cn.join(', ') : 'Beautiful'], sea: seasonLine(rice, o) };
}

const uniq = (arr) => [...new Set(arr.filter(Boolean))];
/** Score a served plate against an order. foods = eggs on the plate, ings = sides on the plate.
 *  Returns {total, stars, lines:[{label, pts, max, note}]} */
export function evaluate(foods, o, { late = false, ings = [] } = {}) {
  if (!Array.isArray(foods)) foods = foods ? [foods] : [];
  const rice = ings.find((i) => i.kind === 'rice'), want = o.eggs || 1;
  let L;
  if (o.recipe === 'friedrice') L = rice ? evalRice(rice, o) : { rec: [foods.length ? 4 : 0, foods.length ? 'Served eggs instead of fried rice' : 'No fried rice on the plate!'], don: [0, '—'], cond: [0, '—'], sea: [0, '—'] };
  else if (foods.length) {
    const parts = foods.map((f) => evalEgg(f, o));
    const avg = (k) => Math.round(parts.reduce((a, p) => a + p[k][0], 0) / parts.length);
    const note = (k) => uniq(parts.map((p) => p[k][1])).join(' · ');
    const main = { salt: Math.max(...foods.map((f) => f.salt)), pepper: Math.max(...foods.map((f) => f.pepper)), buttered: foods.some((f) => f.buttered) };
    L = { rec: [avg('rec'), note('rec')], don: [avg('don'), note('don')], cond: [avg('cond'), note('cond') || 'Beautiful'], sea: seasonLine(main, o) };
    const got = foods.reduce((a, f) => a + (f.eggs || 1), 0);
    if (got !== want) { L.rec[0] = Math.max(0, L.rec[0] - 9 * Math.abs(got - want)); L.rec[1] += ` · ${got} of ${want} egg${want > 1 ? 's' : ''}`; }
    else if (want > 1) L.rec[1] += ` · all ${want} eggs ✓`;
  } else L = { rec: [0, 'No egg on the plate!'], don: [0, '—'], cond: [0, '—'], sea: [0, '—'] };

  let [rec, rn] = L.rec, [don, dn] = L.don, [cond, cn] = L.cond;
  const ex = o.extras || [], fill = o.fill || [], n = ex.length + fill.length;
  if (n) {
    const has = (k) => ings.some((i) => i.kind === k) || foods.some((f) => f.fills && f.fills.includes(k));
    let present = 0, side = 0, pen = 0; const sn = [];
    for (const e of ex) {
      const i = ings.find((x) => x.kind === e.kind), nm = ING[e.kind].name;
      if (!i) { sn.push(`missing ${nm.toLowerCase()}`); continue; }
      present++;
      const w = ING[e.kind].levels[e.level].w, d = gap(i.done, w);
      side += Math.max(0, 1 - d / 0.3);
      if (i.maxBrown > 0.75) { pen += 6; sn.push(`${nm} burnt`); }
      else sn.push(`${nm} ${d === 0 ? 'just right ✓' : i.done < w[0] ? 'undercooked' : 'overdone'}`);
      if (e.kind !== 'cheese' && Math.abs(i.c[0] - i.c[1]) > 0.55) { pen += 3; sn.push('uneven'); }
    }
    for (const k of fill) { if (has(k)) { present++; sn.push(`${ING[k].name} ✓`); } else sn.push(`missing ${ING[k].name.toLowerCase()}`); }
    rec = Math.round(rec * 20 / 30 + 10 * present / n);
    if (ex.length) don = Math.round(don * 28 / 40 + 12 * side / ex.length);
    cond = Math.max(0, cond - pen);
    dn += ' · ' + sn.join(', ');
  }
  const lines = [
    { label: 'Recipe', max: 30, pts: rec, note: rn },
    { label: 'Doneness', max: 40, pts: don, note: dn },
    { label: 'Condition', max: 20, pts: cond, note: cn },
    { label: 'Seasoning', max: 10, pts: L.sea[0], note: L.sea[1] },
  ];
  let total = lines.reduce((a, l) => a + l.pts, 0);
  if (late) { total = Math.max(0, total - 5); lines.push({ label: 'Late', max: 0, pts: -5, note: 'The customer waited too long' }); }
  return { total, stars: stars(total), lines };
}

export function quoteFor(st) {
  return pick([
    ['Hmm… is this even an egg?', 'I think I\'ll just have toast.', 'Well… I\'m sure you tried!'],
    ['It\'s… edible!', 'Not bad, keep practicing!', 'Close, but not quite.'],
    ['Yum, pretty good!', 'Tasty! Thank you!', 'Nice job, chef!'],
    ['PERFECTION! 🤩', 'Best breakfast in town!', 'Chef\'s kiss! 💋', 'I could cry, it\'s so good!'],
  ][st]);
}

function describeEgg(food) {
  const r = food.recipe, n = food.eggs > 1 ? `${food.eggs}-egg ` : '';
  let base;
  if (r === 'scrambled') base = (food.w < 0.5 ? 'Runny' : food.w < 0.78 ? 'Soft, creamy' : food.w < 0.92 ? 'Fluffy' : 'Well-done') + ` ${n}scrambled eggs` + (food.fills.length ? ` with ${food.fills.map((k) => ING[k].name.toLowerCase()).join(' & ')}` : '');
  else if (r === 'omelette') base = (food.fills.length ? `A ${n}${food.fills.map((k) => ING[k].name.toLowerCase()).join(' & ')} omelette` : `A plain ${n}omelette`) + (food.w < 0.5 ? ', still runny' : food.w < 0.8 ? ', soft inside' : ', cooked through');
  else if (r === 'sheet') base = 'A flat, unfolded omelette';
  else if (r === 'over') base = food.y < 0.4 ? 'An over-easy egg' : food.y < 0.7 ? 'An over-medium egg' : 'An over-hard egg';
  else base = food.y < 0.35 ? 'A sunny-side up egg with a runny yolk' : food.y < 0.7 ? 'A sunny egg with a jammy yolk' : 'A sunny egg with a firm yolk';
  const extras = [];
  if (food.maxBrown > 0.75) extras.push('burnt to a crisp'); else if (food.maxBrown > 0.45) extras.push('crispy brown edges'); else if (food.maxBrown > 0.2) extras.push('golden lacy edges');
  if (r === 'sunny' && food.w < 0.8) extras.push('a little runny on top');
  if (food.yolkBroken && (r === 'sunny' || r === 'over')) extras.push('a broken yolk');
  return base + (extras.length ? ' (' + extras.join(', ') + ')' : '');
}
/** Describe a free-cook plate. */
export function describe(foods, ings = []) {
  if (!Array.isArray(foods)) foods = foods ? [foods] : [];
  const rice = ings.find((i) => i.kind === 'rice'), parts = [];
  if (rice) parts.push(rice.egg ? 'Egg fried rice' : 'Plain rice');
  const counts = new Map();
  for (const f of foods) { const d = describeEgg(f); counts.set(d, (counts.get(d) || 0) + 1); }
  for (const [d, k] of counts) parts.push(k > 1 ? `${k}× ${d}` : d);
  const sides = ings.filter((i) => i.kind !== 'rice').map((i) => `${i.maxBrown > 0.75 ? 'burnt' : i.done > 0.85 ? 'crispy' : i.done > 0.45 ? 'nicely cooked' : 'lightly cooked'} ${i.spec.name.toLowerCase()}`);
  if (sides.length) parts.push('with ' + sides.join(' & '));
  if (foods.some((f) => f.salt) || (rice && rice.salt)) parts.push('— salted');
  return (parts.join(', ').replace(', with', ' with').replace(', —', ' —') || 'An empty plate') + '.';
}

/** Cooking guide: Raw / Cooking / Ready / Burning for a target. */
export function guideState(food, target) {
  if (!food) return null;
  const { recipe, level } = target;
  if (food.maxBrown > 0.55) return { cls: 'burning', label: 'Burning!', p: 1 };
  if (recipe === 'friedrice') return { cls: food.w < 0.15 ? 'raw' : 'cooking', label: food.w < 0.15 ? 'Raw' : 'Toss it into the rice', p: Math.max(0.15, food.w) };
  const [lo, hi] = windowFor(recipe, level);
  const m = measure(food, recipe);
  const mixedRecipe = recipe === 'scrambled' || recipe === 'omelette';
  const whiteOk = food.scrambled || food.mixed || food.w >= (WHITE_REQ[recipe] || 0);
  if (food.w < 0.15) return { cls: 'raw', label: 'Raw', p: food.w / 0.15 * 0.15 };
  if (m >= lo && m <= hi && whiteOk) return { cls: 'ready', label: 'Ready!', p: 1 };
  if (m > hi && whiteOk) return { cls: 'burning', label: 'Overdone', p: 1 };
  const prog = Math.min(mixedRecipe ? m / Math.max(lo, 0.01) : Math.min(food.w / (WHITE_REQ[recipe] || 1), lo > 0 ? m / lo : 1), 1);
  return { cls: 'cooking', label: 'Cooking', p: Math.max(0.15, prog * 0.95) };
}

/** Guide for an ingredient in the pan. */
export function ingGuide(ing, level) {
  if (ing.maxBrown > 0.55) return { cls: 'burning', label: `${ING[ing.kind].icon} Burning!`, p: 1 };
  const d = ing.done, spec = ING[ing.kind];
  const w = level && spec.levels[level] ? spec.levels[level].w : ing.kind === 'rice' ? [0.45, 0.8] : Object.values(spec.levels)[0].w;
  if (d < 0.1) return { cls: 'raw', label: `${spec.icon} Raw`, p: 0.1 };
  if (d >= w[0] && d <= w[1]) return { cls: 'ready', label: `${spec.icon} Ready!`, p: 1 };
  if (d > w[1]) return { cls: 'burning', label: `${spec.icon} Overdone`, p: 1 };
  return { cls: 'cooking', label: `${spec.icon} Cooking`, p: Math.max(0.12, (d / w[0]) * 0.95) };
}

export const TUTORIAL = [
  { text: 'Drag the butter 🧈 into the pan (or just tap Butter).', tool: 'butter', done: (g) => g.butter.amount > 0 },
  { text: 'Turn the heat dial up to about 5.', done: (g) => g.heat >= 4 },
  { text: 'Wait for the butter to melt and foam.', done: (g) => g.butter.melt > 0.55 },
  { text: 'Drag an egg 🥚 over the pan.', tool: 'egg', done: (g) => !!g.crack || g.foods.length > 0 },
  { text: 'Tap the egg to crack the shell.', done: (g) => (g.crack && g.crack.stage !== 'hover') || g.foods.length > 0 },
  { text: 'Drag the shell halves apart ↔ — gently!', done: (g) => g.foods.length > 0 },
  { text: 'Cook until the white is opaque. Watch the guide above the egg.', done: (g) => g.foods.some((f) => f.w >= 0.85) },
  { text: 'Touch the egg with the spatula and drag it onto the plate 🍽️.', tool: 'spatula', done: (g) => g.foodsAt('plate').length > 0 },
  { text: 'Shake on some salt 🧂 (drag the shaker & wiggle, or tap Salt).', tool: 'salt', done: (g) => g.foodsAt('plate').some((f) => f.salt > 0) },
  { text: 'Tap Serve 🛎️!', tool: 'serve', done: (g) => g.servedCount > 0 },
];
