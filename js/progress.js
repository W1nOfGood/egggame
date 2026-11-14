// Long-term progress (pure logic, no rendering): chef XP and ranks, recipe unlocks, achievements and seasons.
// All of it lives in the saved settings: s.xp, s.stats (counters) and s.trophies ({id: date earned}).

// ---------- XP, levels and ranks ----------
/** XP needed to go from level L to L + 1. */
const step = (L) => 120 + L * 60;
export function levelOf(xp) {
  let L = 1, need = step(1), left = xp;
  while (left >= need) { left -= need; L++; need = step(L); }
  return { level: L, into: left, need };
}
export const RANKS = [[1, '🥚', 'Egg'], [3, '🥉', 'Bronze'], [6, '🥈', 'Silver'], [10, '🥇', 'Gold'], [15, '💎', 'Platinum'], [21, '👑', 'Master']];
export function rankOf(level) { let r = RANKS[0]; for (const x of RANKS) if (level >= x[0]) r = x; return { icon: r[1], name: r[2] }; }
/** A dish is worth its score, a drink a little, and a perfect one a bonus. */
export const xpFor = ({ total = 0, stars = 0, drinkStars = 0 }) => Math.round(total + (stars >= 3 ? 20 : 0) + drinkStars * 8);
/** Players from before ranks existed start with XP for what they've already cooked. */
export function seedXP(s) {
  if (s.xp != null) return false;
  const cooked = Object.values(s.dishes || {}).reduce((a, d) => a + (d.count || 0) * 60 + (d.best || 0) * 15, 0);
  const drunk = Object.values(s.drinks || {}).reduce((a, d) => a + (d.count || 0) * 12, 0);
  s.xp = cooked + drunk + Math.round((s.best || 0) / 2);
  return true;
}

// ---------- seasons ----------
export const SEASONS = [['spring', '🌸', 'Spring'], ['summer', '🌻', 'Summer'], ['autumn', '🍂', 'Autumn'], ['winter', '❄️', 'Winter']];
/** The season from the calendar (northern hemisphere), or the one picked in Settings. */
export function seasonOf(date = new Date(), pick = 'auto') {
  const m = date.getMonth(), d = date.getDate();
  const id = pick && pick !== 'auto' ? pick : m <= 1 || m === 11 ? 'winter' : m <= 4 ? 'spring' : m <= 7 ? 'summer' : 'autumn';
  const special = pick && pick !== 'auto' ? null : m === 9 && d >= 15 ? 'halloween' : m === 11 ? 'christmas' : null;
  const [, icon, name] = SEASONS.find((x) => x[0] === id);
  return { id, icon, name, special };
}

// ---------- seeded randomness for the Daily Challenge ----------
export function seedOf(key) { let h = 2166136261; for (const c of key) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
/** Run fn with Math.random replaced by a repeatable generator, so everyone gets the same daily orders. */
export function withSeed(seed, fn) {
  const real = Math.random; let a = seed >>> 0;
  Math.random = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  try { return fn(); } finally { Math.random = real; }
}

// ---------- achievements ----------
const st = (s, k) => (s.stats && s.stats[k]) || 0;
const mastered = (s) => Object.values(s.dishes || {}).filter((d) => d.best >= 3).length;
const drinksMade = (s) => Object.keys(s.drinks || {}).length;
export const TROPHIES = [
  { id: 'first', icon: '🍳', tier: 'bronze', name: 'First Plate', desc: 'Serve your first dish', ok: (s) => st(s, 'served') >= 1 },
  { id: 'ten', icon: '🍽️', tier: 'bronze', name: 'Regular Cook', desc: 'Serve 10 dishes', ok: (s) => st(s, 'served') >= 10 },
  { id: 'fifty', icon: '🍽️', tier: 'silver', name: 'Busy Kitchen', desc: 'Serve 50 dishes', ok: (s) => st(s, 'served') >= 50 },
  { id: 'hundred', icon: '🏅', tier: 'gold', name: 'Hundred Plates', desc: 'Serve 100 dishes', ok: (s) => st(s, 'served') >= 100 },
  { id: 'perfect', icon: '⭐', tier: 'bronze', name: 'Perfection', desc: 'Earn 3 stars on a dish', ok: (s) => st(s, 'perfect') >= 1 },
  { id: 'perfect25', icon: '🌟', tier: 'gold', name: 'Star Chef', desc: 'Earn 3 stars 25 times', ok: (s) => st(s, 'perfect') >= 25 },
  { id: 'round500', icon: '👑', tier: 'rainbow', name: 'Flawless Shift', desc: 'Score 500 / 500 in Order Mode', ok: (s) => (s.best || 0) >= 500 },
  { id: 'master5', icon: '🏆', tier: 'silver', name: 'Signature Dishes', desc: 'Master 5 recipes (3 stars)', ok: (s) => mastered(s) >= 5 },
  { id: 'master15', icon: '🏆', tier: 'gold', name: 'Recipe Master', desc: 'Master 15 recipes', ok: (s) => mastered(s) >= 15 },
  { id: 'drinks10', icon: '🍹', tier: 'bronze', name: 'Barista', desc: 'Make 10 different drinks', ok: (s) => drinksMade(s) >= 10 },
  { id: 'drinks40', icon: '🧋', tier: 'silver', name: 'Mixologist', desc: 'Make 40 different drinks', ok: (s) => drinksMade(s) >= 40 },
  { id: 'drinks80', icon: '🍸', tier: 'rainbow', name: 'Every Drink', desc: 'Make all 80 drinks', ok: (s) => drinksMade(s) >= 80 },
  { id: 'artist', icon: '🎨', tier: 'silver', name: 'Plate Artist', desc: 'Decorate 10 plates', ok: (s) => st(s, 'art') >= 10 },
  { id: 'photos', icon: '📸', tier: 'bronze', name: 'Food Photographer', desc: 'Snap 5 photos', ok: (s) => st(s, 'photos') >= 5 },
  { id: 'letters', icon: '💌', tier: 'gold', name: 'Every Letter', desc: 'Read all of the Secret Admirer\'s letters', ok: (s) => (s.lettersRead || []).length >= 5 },
  { id: 'friend', icon: '💗', tier: 'silver', name: 'Best Friends', desc: 'Fill a regular\'s heart meter', ok: (s) => Object.values(s.hearts || {}).some((h) => h >= 10) },
  { id: 'streak7', icon: '🔥', tier: 'silver', name: 'A Week of Cooking', desc: 'Visit 7 days in a row', ok: (s) => st(s, 'bestStreak') >= 7 },
  { id: 'rush10', icon: '⚡', tier: 'silver', name: 'Rush Hour Hero', desc: 'Serve 10 dishes in one Rush Hour', ok: (s) => st(s, 'rushServed') >= 10 },
  { id: 'rush3000', icon: '⚡', tier: 'gold', name: 'Lightning Chef', desc: 'Score 3000 in Rush Hour', ok: (s) => (s.rushBest || 0) >= 3000 },
  { id: 'combo8', icon: '🔗', tier: 'gold', name: 'On a Roll', desc: 'Reach an 8× combo in Rush Hour', ok: (s) => st(s, 'bestCombo') >= 8 },
  { id: 'daily', icon: '📅', tier: 'bronze', name: 'Daily Dish', desc: 'Finish a Daily Challenge', ok: (s) => (s.dailyDays || []).length >= 1 },
  { id: 'daily7', icon: '📆', tier: 'gold', name: 'Every Day', desc: 'Finish 7 Daily Challenges', ok: (s) => (s.dailyDays || []).length >= 7 },
  { id: 'noxfed', icon: '🐟', tier: 'bronze', name: 'Snack Time', desc: 'Give Noxie 10 treats', ok: (s) => ((s.nox && s.nox.fed) || 0) >= 10 },
  { id: 'tricks', icon: '🐈‍⬛', tier: 'gold', name: 'Clever Kitty', desc: 'Teach Noxie every trick', ok: (s) => ((s.nox && s.nox.tricks) || []).length >= 5 },
  { id: 'waffle', icon: '🧇', tier: 'bronze', name: 'Waffle Time', desc: 'Make a waffle', ok: (s) => st(s, 'waffles') >= 1 },
  { id: 'triple', icon: '🤹', tier: 'silver', name: 'Show-off', desc: 'Land a triple flip', ok: (s) => st(s, 'triple') >= 1 },
  { id: 'gold', icon: '🥇', tier: 'gold', name: 'Gold Chef', desc: 'Reach the Gold rank (level 10)', ok: (s) => levelOf(s.xp || 0).level >= 10 },
  { id: 'master', icon: '👑', tier: 'rainbow', name: 'Master Chef', desc: 'Reach the Master rank (level 21)', ok: (s) => levelOf(s.xp || 0).level >= 21 },
];
/** Award anything newly earned. Returns the new trophies. */
export function checkTrophies(s, now = new Date()) {
  s.trophies ||= {};
  const fresh = TROPHIES.filter((t) => !s.trophies[t.id] && t.ok(s));
  for (const t of fresh) s.trophies[t.id] = now.toISOString().slice(0, 10);
  return fresh;
}
export function bump(s, key, by = 1) { (s.stats ||= {})[key] = st(s, key) + by; }
export function best(s, key, v) { (s.stats ||= {})[key] = Math.max(st(s, key), v); }
