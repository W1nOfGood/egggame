// Orders, scoring, the cooking guide, contextual hints and tutorial steps (pure logic, no rendering).
import { DONENESS, RECIPE_NAMES } from './config.js';

const CUSTOMERS = [
  ['🐻', 'Bruno'], ['🐰', 'Pip'], ['🐱', 'Miso'], ['🦊', 'Fern'], ['🐼', 'Bao'], ['🐸', 'Ribbit'], ['🐧', 'Waddles'], ['🐨', 'Kiki'], ['🐷', 'Truffle'], ['🦉', 'Hoot'],
];
const pick = (a) => a[(Math.random() * a.length) | 0];
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

function order(recipe, level, salt, pepper, patience, cust) {
  return { recipe, level, salt, pepper, patience, avatar: cust[0], name: cust[1] };
}

export function makeRound() {
  const c = shuffle(CUSTOMERS);
  return [
    order('sunny', 'runny', true, false, 150, c[0]),
    order('scrambled', 'soft', true, true, 150, c[1]),
    order('over', 'easy', true, true, 150, c[2]),
    pick([
      () => order('sunny', 'jammy', false, true, 135, c[3]),
      () => order('scrambled', 'medium', true, false, 135, c[3]),
      () => order('over', 'medium', true, false, 135, c[3]),
    ])(),
    pick([
      () => order('over', 'hard', true, true, 125, c[4]),
      () => order('scrambled', 'well', true, true, 125, c[4]),
      () => order('sunny', 'jammy', true, true, 125, c[4]),
    ])(),
  ];
}
export const tutorialOrder = () => order('sunny', 'runny', true, false, 9999, ['🐣', 'Chick']);

export const levelLabel = (o) => DONENESS[o.recipe][o.level].label;
export const recipeName = (r) => RECIPE_NAMES[r];

export function measure(food, recipe) { return recipe === 'scrambled' ? food.w : food.y; }
export function windowFor(recipe, level) { const d = DONENESS[recipe][level]; return d.y || d.w; }
const WHITE_REQ = { sunny: 0.85, over: 0.9, scrambled: 0 };

export function stars(score) { return score >= 85 ? 3 : score >= 60 ? 2 : score >= 30 ? 1 : 0; }

/** Score a served dish against an order. Returns {total, stars, lines:[{label, pts, max, note}]} */
export function evaluate(food, o, { late = false } = {}) {
  const lines = [];
  // Recipe (30)
  const rightRecipe = food.recipe === o.recipe;
  lines.push({ label: 'Recipe', max: 30, pts: rightRecipe ? 30 : 0, note: rightRecipe ? recipeName(o.recipe) : `Made ${recipeName(food.recipe).toLowerCase()} instead` });

  // Doneness (40)
  const [lo, hi] = windowFor(o.recipe, o.level);
  const m = measure(food, o.recipe);
  const dist = m < lo ? lo - m : m > hi ? m - hi : 0;
  let dPts = 40 * Math.max(0, 1 - dist / 0.3);
  let dNote = dist === 0 ? 'Perfect!' : m < lo ? 'A little underdone' : 'A bit overcooked';
  if (dist > 0.2) dNote = m < lo ? 'Undercooked' : 'Overcooked';
  const req = WHITE_REQ[o.recipe];
  if (!food.scrambled && req && food.w < req) {
    dPts *= Math.max(0, Math.min(1, (food.w - 0.4) / (req - 0.4)));
    dNote = 'Egg white still runny';
  }
  if (!rightRecipe) dPts *= 0.5;
  lines.push({ label: 'Doneness', max: 40, pts: Math.round(dPts), note: dNote });

  // Condition (20)
  let c = 20; const cn = [];
  if (food.yolkBroken && !food.scrambled && o.recipe !== 'scrambled') { c -= 10; cn.push('broken yolk'); }
  if (food.torn) { c -= 6; cn.push('torn'); }
  if (food.maxBrown > 0.75) { c -= 14; cn.push('burnt'); } else if (food.maxBrown > 0.5) { c -= 6; cn.push('very brown'); }
  if (food.stuck) { c -= 4; cn.push('stuck to pan'); }
  if (food.scrambled && food.stirTotal < 3 + food.w * 6) { c -= 6; cn.push('lumpy curds'); }
  c = Math.max(0, c);
  lines.push({ label: 'Condition', max: 20, pts: c, note: cn.length ? cn.join(', ') : 'Beautiful' });

  // Seasoning & presentation (10)
  let s = 0; const sn = [];
  const season = (amt, wanted, pts, name) => {
    if (wanted) { if (amt >= 1 && amt <= 6) { s += pts; sn.push(`${name} ✓`); } else if (amt > 6) { s += pts / 2; sn.push(`too much ${name}`); } else sn.push(`no ${name}`); }
    else if (amt === 0) s += pts; else { s += 1; sn.push(`didn't want ${name}`); }
  };
  season(food.salt, o.salt, 4, 'salt');
  season(food.pepper, o.pepper, 3, 'pepper');
  if (food.buttered) { s += 3; sn.push('buttery'); } else sn.push('no butter');
  lines.push({ label: 'Seasoning', max: 10, pts: Math.round(s), note: sn.join(', ') });

  let total = lines.reduce((a, l) => a + l.pts, 0);
  if (late) { total = Math.max(0, total - 5); lines.push({ label: 'Late', max: 0, pts: -5, note: 'The customer waited too long' }); }
  return { total, stars: stars(total), lines };
}

export function quoteFor(st) {
  return pick([
    ['Hmm… is this even an egg?', 'I think I\'ll just have toast.', 'Well… I\'m sure you tried!'],
    ['It\'s… edible!', 'Not bad, keep practicing!', 'Close, but not quite.'],
    ['Yum, pretty good!', 'Tasty! Thank you!', 'Nice job, chef!'],
    ['PERFECTION! 🤩', 'Best egg in town!', 'Chef\'s kiss! 💋', 'I could cry, it\'s so good!'],
  ][st]);
}

/** Describe a free-cook dish. */
export function describe(food) {
  const r = food.recipe;
  let base;
  if (r === 'scrambled') base = food.w < 0.5 ? 'Runny scrambled eggs' : food.w < 0.78 ? 'Soft, creamy scrambled eggs' : food.w < 0.92 ? 'Fluffy scrambled eggs' : 'Well-done scrambled eggs';
  else if (r === 'over') base = food.y < 0.4 ? 'An over-easy egg' : food.y < 0.7 ? 'An over-medium egg' : 'An over-hard egg';
  else base = food.y < 0.35 ? 'A sunny-side up egg with a runny yolk' : food.y < 0.7 ? 'A sunny egg with a jammy yolk' : 'A sunny egg with a firm yolk';
  const extras = [];
  if (food.maxBrown > 0.75) extras.push('burnt to a crisp'); else if (food.maxBrown > 0.45) extras.push('crispy brown edges'); else if (food.maxBrown > 0.2) extras.push('golden lacy edges');
  if (!food.scrambled && food.w < 0.8) extras.push('a little runny on top');
  if (food.yolkBroken && !food.scrambled) extras.push('a broken yolk');
  if (food.salt) extras.push('salted'); if (food.pepper) extras.push('peppered');
  return base + (extras.length ? ', ' + extras.join(', ') : '') + '.';
}

/** Cooking guide: Raw / Cooking / Ready / Burning for a target. */
export function guideState(food, target) {
  if (!food) return null;
  const { recipe, level } = target;
  if (food.maxBrown > 0.55) return { cls: 'burning', label: 'Burning!', p: 1 };
  const [lo, hi] = windowFor(recipe, level);
  const m = measure(food, recipe);
  const whiteOk = food.scrambled || food.w >= (WHITE_REQ[recipe] || 0);
  if (food.w < 0.15) return { cls: 'raw', label: 'Raw', p: food.w / 0.15 * 0.15 };
  if (m >= lo && m <= hi && whiteOk) return { cls: 'ready', label: 'Ready!', p: 1 };
  if (m > hi && whiteOk) return { cls: 'burning', label: 'Overdone', p: 1 };
  const prog = Math.min(food.scrambled ? m / Math.max(lo, 0.01) : Math.min(food.w / (WHITE_REQ[recipe] || 1), lo > 0 ? m / lo : 1), 1);
  return { cls: 'cooking', label: 'Cooking', p: Math.max(0.15, prog * 0.95) };
}

export const TUTORIAL = [
  { text: 'Drag the butter 🧈 into the pan (or just tap Butter).', tool: 'butter', done: (g) => g.butter.amount > 0 },
  { text: 'Turn the heat dial up to about 5.', done: (g) => g.heat >= 4 },
  { text: 'Wait for the butter to melt and foam.', done: (g) => g.butter.melt > 0.55 },
  { text: 'Drag an egg 🥚 over the pan.', tool: 'egg', done: (g) => !!g.crack || !!g.food },
  { text: 'Tap the egg to crack the shell.', done: (g) => (g.crack && g.crack.stage !== 'hover') || !!g.food },
  { text: 'Drag the shell halves apart ↔ — gently!', done: (g) => !!g.food },
  { text: 'Cook until the white is opaque. Watch the guide above the pan.', done: (g) => g.food && g.food.w >= 0.85 },
  { text: 'Touch the egg with the spatula and drag it onto the plate 🍽️.', tool: 'spatula', done: (g) => g.foodLoc === 'plate' },
  { text: 'Shake on some salt 🧂 (drag the shaker & wiggle, or tap Salt).', tool: 'salt', done: (g) => g.food && g.food.salt > 0 },
  { text: 'Tap Serve 🛎️!', tool: 'serve', done: (g) => g.servedCount > 0 },
];
