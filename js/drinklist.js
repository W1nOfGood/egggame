// The drink menu (pure data and logic, no rendering). A drink is a mix of liquids in rough proportions plus exact extras;
// any cup will do, `cup` is only the one it's served in by default. To add a drink, add a line to DRINKS.
export const LIQUIDS = {
  coffee: { name: 'Coffee', icon: '☕', color: '#3a2114', hot: true },
  tea: { name: 'Black tea', icon: '🫖', color: '#9a4f1a', hot: true },
  green: { name: 'Matcha', icon: '🍵', color: '#8fb84a', hot: true },
  pea: { name: 'Butterfly pea tea', icon: '🪻', color: '#3f5fd6', hot: true },
  milk: { name: 'Milk', icon: '🥛', color: '#fff6e6' },
  oat: { name: 'Oat milk', icon: '🌾', color: '#f0dfbd' },
  choc: { name: 'Hot chocolate', icon: '🍫', color: '#4b2815', hot: true },
  taro: { name: 'Taro', icon: '🍠', color: '#b79ad8' },
  strawberry: { name: 'Strawberry', icon: '🍓', color: '#f0608a' },
  orange: { name: 'Orange juice', icon: '🍊', color: '#f79a1e' },
  apple: { name: 'Apple juice', icon: '🍎', color: '#e8c95a' },
  mango: { name: 'Mango', icon: '🥭', color: '#fbb62e' },
  peach: { name: 'Peach', icon: '🍑', color: '#fbbf8f' },
  pineapple: { name: 'Pineapple', icon: '🍍', color: '#f6e27a' },
  coconut: { name: 'Coconut', icon: '🥥', color: '#fdf8ee' },
  lemonade: { name: 'Lemonade', icon: '🍋', color: '#f7ea8a' },
  grenadine: { name: 'Grenadine', icon: '🌺', color: '#c71c3a' },
  cola: { name: 'Cola', icon: '🥤', color: '#2b140e' },
  sparkling: { name: 'Sparkling water', icon: '🫧', color: '#dff2ff', clear: true },
  water: { name: 'Hot water', icon: '💧', color: '#cfe6f2', clear: true, hot: true },
};
export const EXTRAS = {
  ice: { name: 'Ice', icon: '🧊' }, sugar: { name: 'Sugar', icon: '🍬' }, honey: { name: 'Honey', icon: '🍯' }, vanilla: { name: 'Vanilla', icon: '🌼' },
  caramel: { name: 'Caramel', icon: '🍮' }, cinnamon: { name: 'Cinnamon', icon: '🪵' }, foam: { name: 'Milk foam', icon: '☁️' }, whip: { name: 'Whipped cream', icon: '🍦' },
  marshmallow: { name: 'Marshmallows', icon: '🍡' }, boba: { name: 'Boba pearls', icon: '🧋' }, lemon: { name: 'Lemon slice', icon: '🍋' }, mint: { name: 'Mint', icon: '🌿' }, cherry: { name: 'Cherry', icon: '🍒' },
};
export const CUPS = { glass: { name: 'Tall glass', icon: '🥛' }, mug: { name: 'Mug', icon: '☕' }, teacup: { name: 'Teacup', icon: '🍵' }, jar: { name: 'Mason jar', icon: '🫙' }, skull: { name: 'Skull mug', icon: '💀' } };
export const DRINK_CATS = [['all', 'All'], ['coffee', 'Coffee'], ['tea', 'Tea'], ['cozy', 'Cozy'], ['juice', 'Juice'], ['fizz', 'Fizzy'], ['spooky', 'Spooky']];

const D = (id, name, icon, cat, cup, mix, extras, blurb) => {
  const n = Object.keys(mix).length + extras.length;
  return { id, name, icon, cat, cup, mix, extras, blurb, diff: n <= 2 ? 1 : n <= 3 ? 2 : 3 };
};
export const DRINKS = [
  // ---- coffee
  D('espresso', 'Espresso', '☕', 'coffee', 'teacup', { coffee: 1 }, [], 'Small, dark and straight to the point.'),
  D('americano', 'Americano', '☕', 'coffee', 'mug', { coffee: 0.4, water: 0.6 }, [], 'Espresso stretched out with hot water.'),
  D('flatwhite', 'Flat White', '☕', 'coffee', 'teacup', { coffee: 0.45, milk: 0.55 }, [], 'Strong coffee and silky milk, no foam.'),
  D('cortado', 'Cortado', '☕', 'coffee', 'teacup', { coffee: 0.7, milk: 0.3 }, [], 'Mostly coffee, with just enough milk to soften it.'),
  D('latte', 'Latte', '☕', 'coffee', 'mug', { coffee: 0.3, milk: 0.7 }, ['foam'], 'A big milky hug with a soft foam top.'),
  D('macchiato', 'Macchiato', '☕', 'coffee', 'teacup', { coffee: 0.85, milk: 0.15 }, ['foam'], 'Espresso with a tiny cloud on top.'),
  D('cappuccino', 'Cappuccino', '☕', 'coffee', 'mug', { coffee: 0.45, milk: 0.55 }, ['foam', 'cinnamon'], 'Equal parts coffee and milk, dusted with cinnamon.'),
  D('vanillalatte', 'Vanilla Latte', '🌼', 'coffee', 'mug', { coffee: 0.3, milk: 0.7 }, ['foam', 'vanilla'], 'A latte that smells like baking day.'),
  D('caramellatte', 'Caramel Latte', '🍮', 'coffee', 'mug', { coffee: 0.3, milk: 0.7 }, ['foam', 'caramel'], 'Sweet, buttery and a little bit sticky.'),
  D('icedlatte', 'Iced Latte', '🧊', 'coffee', 'glass', { coffee: 0.3, milk: 0.7 }, ['ice'], 'Pretty layers, cold all the way down.'),
  D('oatlatte', 'Honey Oat Latte', '🌾', 'coffee', 'mug', { coffee: 0.3, oat: 0.7 }, ['honey'], 'Toasty oat milk with a spoonful of honey.'),
  D('mocha', 'Mocha', '🍫', 'coffee', 'mug', { coffee: 0.3, choc: 0.3, milk: 0.4 }, ['whip'], 'Coffee and chocolate, finally together.'),
  D('icedmocha', 'Iced Mocha', '🍫', 'coffee', 'glass', { coffee: 0.3, choc: 0.3, milk: 0.4 }, ['ice', 'whip'], 'A mocha for warm afternoons.'),
  D('coldbrew', 'Cold Brew', '🧊', 'coffee', 'glass', { coffee: 1 }, ['ice'], 'Smooth, strong and very awake.'),
  D('sweetcream', 'Sweet Cream Cold Brew', '🧊', 'coffee', 'glass', { coffee: 0.8, milk: 0.2 }, ['ice', 'vanilla'], 'Cold brew with a swirl of vanilla milk.'),
  D('vietnamese', 'Vietnamese Iced Coffee', '🧊', 'coffee', 'glass', { coffee: 0.6, milk: 0.4 }, ['ice', 'sugar'], 'Bold, sweet and dangerously easy to finish.'),
  D('dolce', 'Cinnamon Dolce', '🪵', 'coffee', 'mug', { coffee: 0.3, milk: 0.7 }, ['cinnamon', 'sugar', 'whip'], 'Like a cinnamon roll in a cup.'),
  D('pumpkinspice', 'Pumpkin Spice Latte', '🎃', 'coffee', 'mug', { coffee: 0.3, milk: 0.7 }, ['cinnamon', 'caramel', 'whip'], 'Autumn, in drink form.'),
  D('espressotonic', 'Espresso Tonic', '🫧', 'coffee', 'glass', { coffee: 0.3, sparkling: 0.7 }, ['ice', 'lemon'], 'Bitter, bubbly and strangely perfect.'),
  // ---- tea
  D('blacktea', 'Black Tea', '🫖', 'tea', 'teacup', { tea: 1 }, [], 'A plain and proper cup.'),
  D('breakfasttea', 'Breakfast Tea', '🫖', 'tea', 'mug', { tea: 0.8, milk: 0.2 }, [], 'Strong tea with a splash of milk.'),
  D('chai', 'Masala Chai', '🪵', 'tea', 'mug', { tea: 0.5, milk: 0.5 }, ['cinnamon', 'sugar'], 'Spiced, milky and warming right to your toes.'),
  D('icedtea', 'Iced Lemon Tea', '🧊', 'tea', 'glass', { tea: 1 }, ['ice', 'lemon'], 'Summer on a porch.'),
  D('honeylemon', 'Honey Lemon Tea', '🍯', 'tea', 'teacup', { tea: 1 }, ['honey', 'lemon'], 'For scratchy throats and rainy days.'),
  D('londonfog', 'London Fog', '🌫️', 'tea', 'mug', { tea: 0.5, milk: 0.5 }, ['foam', 'vanilla'], 'Misty, vanilla-sweet and very calm.'),
  D('palmer', 'Half & Half', '🍋', 'tea', 'glass', { tea: 0.5, lemonade: 0.5 }, ['ice'], 'Half iced tea, half lemonade.'),
  D('peachtea', 'Peach Iced Tea', '🍑', 'tea', 'glass', { tea: 0.6, peach: 0.4 }, ['ice'], 'Soft, fruity and golden.'),
  D('thaitea', 'Thai Iced Tea', '🧊', 'tea', 'glass', { tea: 0.7, milk: 0.3 }, ['ice', 'sugar'], 'Rich tea with creamy clouds sinking through.'),
  D('matcha', 'Matcha', '🍵', 'tea', 'teacup', { green: 1 }, [], 'Whisked, grassy and peaceful.'),
  D('matchalatte', 'Matcha Latte', '🍵', 'tea', 'mug', { green: 0.35, milk: 0.65 }, ['foam'], 'A pale green hug.'),
  D('icedmatcha', 'Iced Matcha Latte', '🍵', 'tea', 'glass', { green: 0.35, milk: 0.65 }, ['ice'], 'Green over white. Too pretty to stir.'),
  D('strawmatcha', 'Strawberry Matcha', '🍓', 'tea', 'glass', { green: 0.3, strawberry: 0.7 }, ['ice'], 'Pink below, green above.'),
  D('mintmatcha', 'Sweet Mint Matcha', '🌿', 'tea', 'teacup', { green: 1 }, ['mint', 'sugar'], 'Fresh, sweet and clean.'),
  D('peatea', 'Butterfly Pea Tea', '🪻', 'tea', 'teacup', { pea: 1 }, ['honey'], 'Impossibly blue, gently sweet.'),
  D('boba', 'Classic Boba', '🧋', 'tea', 'jar', { tea: 0.7, milk: 0.3 }, ['ice', 'boba'], 'Chewy pearls at the bottom of creamy tea.'),
  D('taroboba', 'Taro Boba', '🧋', 'tea', 'jar', { taro: 0.5, milk: 0.5 }, ['ice', 'boba'], 'Lilac, nutty and full of pearls.'),
  D('brownsugar', 'Brown Sugar Boba', '🧋', 'tea', 'jar', { milk: 1 }, ['ice', 'boba', 'caramel'], 'Tiger stripes of caramel down cold milk.'),
  // ---- cozy
  D('warmmilk', 'Warm Milk', '🥛', 'cozy', 'mug', { milk: 1 }, [], 'For when sleep won\'t come.'),
  D('goldenmilk', 'Golden Honey Milk', '🍯', 'cozy', 'mug', { milk: 1 }, ['honey', 'cinnamon'], 'Tucks you in from the inside.'),
  D('steamer', 'Vanilla Steamer', '🌼', 'cozy', 'mug', { milk: 1 }, ['vanilla', 'foam'], 'Fluffy warm vanilla milk, no coffee at all.'),
  D('hotchoc', 'Hot Chocolate', '🍫', 'cozy', 'mug', { choc: 1 }, ['whip'], 'The answer to most problems.'),
  D('smores', 'S\'mores Cocoa', '🍡', 'cozy', 'mug', { choc: 1 }, ['marshmallow', 'caramel'], 'Campfire, but indoors with a blanket.'),
  D('marshcocoa', 'Marshmallow Cocoa', '🍡', 'cozy', 'mug', { choc: 0.7, milk: 0.3 }, ['marshmallow'], 'Little pillows melting on top.'),
  D('mintcocoa', 'Mint Cocoa', '🌿', 'cozy', 'mug', { choc: 0.7, milk: 0.3 }, ['mint', 'whip'], 'Cool and warm at the same time.'),
  D('chocmilk', 'Iced Chocolate Milk', '🧊', 'cozy', 'glass', { choc: 0.3, milk: 0.7 }, ['ice'], 'Tastes like being eight years old.'),
  D('strawmilk', 'Strawberry Milk', '🍓', 'cozy', 'glass', { strawberry: 0.4, milk: 0.6 }, [], 'Pink, sweet and shamelessly cute.'),
  D('taromilk', 'Taro Milk', '🍠', 'cozy', 'mug', { taro: 0.5, milk: 0.5 }, [], 'Soft purple and a little nutty.'),
  D('cider', 'Spiced Apple Cider', '🍎', 'cozy', 'mug', { apple: 1 }, ['cinnamon'], 'Smells like the first cold day.'),
  D('horchata', 'Oat Horchata', '🌾', 'cozy', 'glass', { oat: 1 }, ['ice', 'cinnamon', 'sugar'], 'Creamy, cold and full of cinnamon.'),
  // ---- juice
  D('oj', 'Orange Juice', '🍊', 'juice', 'glass', { orange: 1 }, [], 'Sunshine, freshly squeezed.'),
  D('applejuice', 'Apple Juice', '🍎', 'juice', 'glass', { apple: 1 }, [], 'Crisp and simple.'),
  D('lemonade', 'Lemonade', '🍋', 'juice', 'jar', { lemonade: 1 }, ['ice'], 'Sharp, sweet and ice cold.'),
  D('pinklemonade', 'Pink Lemonade', '🌸', 'juice', 'jar', { lemonade: 0.8, grenadine: 0.2 }, ['ice'], 'Lemonade that got dressed up.'),
  D('mintlemonade', 'Mint Lemonade', '🌿', 'juice', 'jar', { lemonade: 1 }, ['ice', 'mint'], 'The most refreshing thing in the kitchen.'),
  D('mangojuice', 'Iced Mango', '🥭', 'juice', 'glass', { mango: 1 }, ['ice'], 'Thick, golden and tropical.'),
  D('lassi', 'Mango Lassi', '🥭', 'juice', 'glass', { mango: 0.6, milk: 0.4 }, [], 'Creamy mango, silky and sweet.'),
  D('sunrise', 'Sunrise', '🌅', 'juice', 'glass', { orange: 0.8, grenadine: 0.2 }, ['ice', 'cherry'], 'Pour it slowly and watch the sky appear.'),
  D('punch', 'Tropical Punch', '🍹', 'juice', 'glass', { orange: 0.4, mango: 0.3, coconut: 0.3 }, ['ice'], 'A holiday you can drink.'),
  D('colada', 'Virgin Colada', '🍍', 'juice', 'glass', { pineapple: 0.6, coconut: 0.4 }, ['ice', 'cherry'], 'Pineapple and coconut, feet in the sand.'),
  D('strawsmoothie', 'Strawberry Smoothie', '🍓', 'juice', 'jar', { strawberry: 0.7, coconut: 0.3 }, ['ice'], 'Thick enough to need a good straw.'),
  D('peachsmoothie', 'Peach Smoothie', '🍑', 'juice', 'jar', { peach: 0.6, milk: 0.4 }, ['ice'], 'Like biting into a cold peach.'),
  // ---- fizzy
  D('sparklingwater', 'Sparkling Water', '🫧', 'fizz', 'glass', { sparkling: 1 }, [], 'Just bubbles. Sometimes that\'s enough.'),
  D('sparklinglemon', 'Sparkling Lemon', '🍋', 'fizz', 'glass', { sparkling: 1 }, ['ice', 'lemon'], 'Bubbles with a bright edge.'),
  D('cola', 'Cola', '🥤', 'fizz', 'glass', { cola: 1 }, ['ice'], 'Dark, fizzy and classic.'),
  D('cherrycola', 'Cherry Cola', '🍒', 'fizz', 'glass', { cola: 1 }, ['ice', 'cherry'], 'A cherry makes everything better.'),
  D('vanillacola', 'Vanilla Cola', '🌼', 'fizz', 'glass', { cola: 1 }, ['ice', 'vanilla'], 'Tastes like an old diner.'),
  D('float', 'Cola Float', '🍦', 'fizz', 'glass', { cola: 1 }, ['whip', 'cherry'], 'Foamy, silly and delightful.'),
  D('shirley', 'Shirley Temple', '🍒', 'fizz', 'glass', { sparkling: 0.8, grenadine: 0.2 }, ['ice', 'cherry'], 'The fanciest drink for anyone at any age.'),
  D('italiansoda', 'Italian Soda', '🍓', 'fizz', 'glass', { sparkling: 0.7, strawberry: 0.3 }, ['ice'], 'Fizzy strawberry over ice.'),
  D('orangefizz', 'Orange Fizz', '🍊', 'fizz', 'glass', { sparkling: 0.5, orange: 0.5 }, ['ice'], 'Orange juice with the giggles.'),
  D('peachfizz', 'Peach Fizz', '🍑', 'fizz', 'glass', { sparkling: 0.5, peach: 0.5 }, ['ice'], 'Soft fruit and sharp bubbles.'),
  D('nojito', 'Nojito', '🌿', 'fizz', 'jar', { sparkling: 1 }, ['ice', 'mint', 'lemon'], 'All of the mojito, none of the rum.'),
  // ---- spooky
  D('witchbrew', 'Witch\'s Brew', '🧪', 'spooky', 'skull', { green: 0.4, apple: 0.6 }, ['ice'], 'Bubbling green. Do not ask what\'s in it.'),
  D('vampirekiss', 'Vampire\'s Kiss', '🧛', 'spooky', 'skull', { cola: 0.6, grenadine: 0.4 }, ['cherry'], 'Dark, sweet and it leaves a mark.'),
  D('batbite', 'Bat Bite', '🦇', 'spooky', 'skull', { sparkling: 0.5, grenadine: 0.5 }, ['ice'], 'Blood red, fizzy and gone by morning.'),
  D('midnightlatte', 'Midnight Latte', '🌙', 'spooky', 'skull', { coffee: 0.4, taro: 0.6 }, ['foam'], 'Coffee and lilac, for nights that run long.'),
  D('ghostmilk', 'Ghost Milk', '👻', 'spooky', 'skull', { milk: 1 }, ['marshmallow'], 'Pale and pillowy. Boo!'),
  D('moonlight', 'Moonlight', '🌕', 'spooky', 'teacup', { pea: 0.5, coconut: 0.5 }, ['foam'], 'Blue-white and glowing softly.'),
  D('lovepotion', 'Love Potion', '💘', 'spooky', 'teacup', { strawberry: 0.5, grenadine: 0.2, sparkling: 0.3 }, ['cherry'], 'One sip and you\'ll be back tomorrow.'),
  D('noxiespecial', 'Noxie\'s Special', '🐈‍⬛', 'spooky', 'skull', { taro: 0.4, strawberry: 0.3, milk: 0.3 }, ['whip', 'cherry'], 'Noxie invented it by knocking things over.'),
];
export const drinkById = (id) => DRINKS.find((d) => d.id === id);

const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
/** Biggest difference between what's in the cup (shares of 1) and a recipe. */
const ratioGap = (shares, mix) => Math.max(...Object.keys(mix).map((k) => Math.abs((shares[k] || 0) - mix[k])));

/** shares: {liquid: share of the total}, ignoring tiny accidental drips. */
export function sharesOf(amounts) {
  const on = Object.entries(amounts).filter(([, v]) => v > 0), total = on.reduce((a, [, v]) => a + v, 0), out = {};
  for (const [k, v] of on) if (v / total >= 0.04) out[k] = v / total;
  return out;
}
/** Which drink is this? Liquids and extras must match exactly; proportions pick between close cousins. */
export function identify(amounts, extras) {
  const shares = sharesOf(amounts), names = Object.keys(shares);
  if (!names.length) return null;
  let best = null, bestGap = 0.3;
  for (const d of DRINKS) {
    if (!sameSet(Object.keys(d.mix), names) || !sameSet(d.extras, extras)) continue;
    const g = ratioGap(shares, d.mix);
    if (g < bestGap) { bestGap = g; best = d; }
  }
  return best;
}
/** Score a drink against a wanted one (or whatever it turned out to be): {drink, wanted, stars, note}. */
export function rateDrink({ amounts, extras, fill, spilled }, wantedId = null) {
  if (!Object.keys(sharesOf(amounts)).length) return null;
  const made = identify(amounts, extras), wanted = wantedId ? drinkById(wantedId) : made;
  if (!wanted) return { drink: null, wanted: null, stars: 0, note: 'A house special, all your own' };
  if (made !== wanted) return { drink: made, wanted, stars: 1, note: made ? `Made a ${made.name} instead` : `Not quite a ${wanted.name}` };
  const g = ratioGap(sharesOf(amounts), wanted.mix), notes = [];
  let stars = 3;
  if (g > 0.2) { stars = 1; notes.push('proportions way off'); } else if (g > 0.1) { stars = 2; notes.push('proportions a little off'); }
  if (fill < 0.75) { stars--; notes.push('cup not full'); }
  if (spilled) { stars--; notes.push('spilled a bit'); }
  return { drink: made, wanted, stars: Math.max(1, stars), note: notes.join(', ') || 'Just right' };
}
export function recipeText(d) {
  const mix = Object.entries(d.mix), parts = mix.map(([k, v]) => `${LIQUIDS[k].icon} ${LIQUIDS[k].name}${mix.length > 1 ? ` ${Math.round(v * 100)}%` : ''}`);
  return parts.concat(d.extras.map((k) => `${EXTRAS[k].icon} ${EXTRAS[k].name}`)).join(' · ');
}
/** A drink to go with an order: usually what this regular likes, otherwise anything no harder than the dish. */
export function drinkFor(favId, maxDiff) {
  if (favId && Math.random() < 0.5) return favId;
  const pool = DRINKS.filter((d) => d.diff <= maxDiff);
  return pool[(Math.random() * pool.length) | 0].id;
}
