// The recipe book: every dish customers can order, with steps written for the in-game controls.
// recipe = how the egg part is cooked (sunny / over / scrambled / omelette / friedrice)
// extras = sides cooked separately and plated next to it, fill = folded in / stirred in / on top
export const CATS = [['all', 'All'], ['eggs', 'Eggs'], ['omelette', 'Omelettes'], ['rice', 'Rice'], ['breakfast', 'Breakfasts']];

const S = {
  butter: ['Butter', 'Drag a pat of 🧈 butter into the pan (or tap Butter).'],
  heat: (n) => ['Heat', `Turn the heat dial to about ${n} and let the butter melt and foam.`],
  crack: ['Crack', 'Drag an 🥚 egg over the pan, tap to crack it, then pull the shell apart gently ↔.'],
  crackN: (n) => ['Crack', `Crack ${n} eggs into the pan, one after another — each lands in its own spot.`],
  plate: ['Plate', 'Touch the egg with the spatula and drag it onto the plate 🍽️.'],
  season: (salt, pepper) => ['Season', `Shake on ${[salt && '🧂 salt', pepper && 'a little pepper'].filter(Boolean).join(' and ') || 'nothing — keep it plain'}, then tap 🛎️ Serve.`],
};
const side = (kind, label) => {
  const t = {
    bacon: ['Bacon', 'Tap 🥓 Bacon in the fridge. Lift it with the spatula and flick UP to flip once the underside is done.'],
    ham: ['Ham', 'Add 🍖 Ham and sear it on both sides — flip when the chip says “Flip it!”.'],
    sausage: ['Sausage', 'Add 🌭 Sausages early — they take the longest. Turn them once so both sides brown.'],
    bread: ['Toast', 'Add 🍞 Bread to the pan and toast both sides golden (flip it halfway).'],
    tomato: ['Tomato', 'Add 🍅 Tomato halves cut-side down until caramelised, then flip.'],
  }[kind];
  return [t[0], `${t[1]}${label ? ` Aim for ${label}.` : ''}`];
};
const sidePlate = ['Plate sides', 'Lift each side with the spatula and drag it onto the plate next to the eggs.'];

export const BOOK = [
  {
    id: 'sunny', title: 'Sunny-Side Up', icon: '🍳', cat: 'eggs', recipe: 'sunny', levels: ['runny', 'jammy'], eggs: 1, extras: [], fill: [], salt: true, pepper: false, diff: 1, time: '2 min',
    blurb: 'One egg fried gently so the white sets while the yolk stays bright and glossy.',
    steps: [S.butter, S.heat(5), S.crack, ['Wait', 'Cook until the white is fully opaque. Don’t flip it!'], S.plate, S.season(true, false)],
    tip: 'Lower heat gives you more time before the edges brown. Pull it as soon as the guide says Ready.',
  },
  {
    id: 'eggs2', title: 'Eggs for Two', icon: '🍳', cat: 'eggs', recipe: 'sunny', levels: ['runny', 'jammy'], eggs: 2, extras: [], fill: [], salt: true, pepper: true, diff: 2, time: '3 min',
    blurb: 'Two sunny eggs side by side in one pan — keep an eye on both!',
    steps: [S.butter, S.heat(5), S.crackN(2), ['Watch', 'Each egg gets its own progress chip. The first one in will be ready first.'], ['Plate', 'Lift each egg onto the plate with the spatula — they sit side by side.'], S.season(true, true)],
    tip: 'Crack the second egg quickly so both finish together.',
  },
  {
    id: 'over', title: 'Over-Easy', icon: '🥚', cat: 'eggs', recipe: 'over', levels: ['easy', 'medium', 'hard'], eggs: 1, extras: [], fill: [], salt: true, pepper: true, diff: 1, time: '3 min',
    blurb: 'Fried, flipped, and kissed on the other side. The yolk tells you how long.',
    steps: [S.butter, S.heat(5), S.crack, ['Set', 'Wait until the white is set at the edges (chip turns blue: “Flip it!”).'], ['Flip', 'Lift it with the spatula and flick UP — or tap the blue ↻ Flip button.'], ['Finish', 'Over-easy: a few seconds. Medium: a little longer. Hard: until the yolk is firm.'], S.plate, S.season(true, true)],
    tip: 'Flipping before the white is set tears the egg and can break the yolk.',
  },
  {
    id: 'scrambled', title: 'Soft Scrambled Eggs', icon: '🥣', cat: 'eggs', recipe: 'scrambled', levels: ['soft', 'medium', 'well'], eggs: 2, extras: [], fill: [], salt: true, pepper: true, diff: 2, time: '3 min',
    blurb: 'Two eggs stirred slowly into soft, creamy curds.',
    steps: [S.butter, S.heat(4), S.crackN(2), ['Stir', 'Drag the spatula in slow circles without letting go. The eggs beat together, then turn into curds.'], ['Keep moving', 'Keep stirring so nothing catches on the bottom.'], ['Scoop', 'While still glossy, drag the spatula out over the pan rim to scoop them up, then onto the plate.'], S.season(true, true)],
    tip: 'Medium-low heat and constant stirring make the creamiest curds.',
  },
  {
    id: 'cheesy', title: 'Cheesy Scramble on Toast', icon: '🧀', cat: 'breakfast', recipe: 'scrambled', levels: ['soft', 'medium'], eggs: 2, extras: [{ kind: 'bread', level: 'toasted' }], fill: ['cheese'], salt: true, pepper: false, diff: 2, time: '4 min',
    blurb: 'Creamy scrambled eggs with melted cheese stirred through, on golden toast.',
    steps: [side('bread', 'golden'), S.butter, S.crackN(2), ['Stir', 'Stir in circles until the eggs start to curd.'], ['Cheese', 'Add 🧀 Cheese to the pan and keep stirring — it melts right in.'], ['Plate', 'Plate the toast, then scoop the eggs out over the rim onto the plate.'], S.season(true, false)],
    tip: 'Toast the bread first, then lift it out while the eggs cook.',
  },
  {
    id: 'omelette', title: 'Cheese Omelette', icon: '🌙', cat: 'omelette', recipe: 'omelette', levels: ['soft', 'medium'], eggs: 2, extras: [], fill: ['cheese'], salt: true, pepper: false, diff: 2, time: '4 min',
    blurb: 'Two beaten eggs set into a smooth sheet, filled with cheese and folded into a half moon.',
    steps: [S.butter, S.heat(5), S.crackN(2), ['Beat', 'Stir ONE slow circle, then let go — the eggs merge into a smooth yellow sheet. The ring by the pan shows 🥚 when it’s beaten.'], ['Fill', 'While it sets, add 🧀 Cheese on top.'], ['Fold', 'When the chip says “Fold it!”, lift with the spatula and flick UP (or tap ↻ Flip).'], S.plate, S.season(true, false)],
    tip: 'Once it’s beaten, that stroke stops mixing — only a second, separate stir turns it into scrambled eggs.',
  },
  {
    id: 'hamcheese', title: 'Ham & Cheese Omelette', icon: '🌙', cat: 'omelette', recipe: 'omelette', levels: ['soft', 'medium'], eggs: 3, extras: [], fill: ['ham', 'cheese'], salt: true, pepper: true, diff: 3, time: '5 min',
    blurb: 'A generous three-egg omelette folded around seared ham and melted cheese.',
    steps: [S.butter, S.heat(5), S.crackN(3), ['Beat', 'Stir one slow circle, then let go — all three eggs beat into one sheet.'], ['Fill', 'Add 🍖 Ham and 🧀 Cheese on top while it sets.'], ['Fold', 'Lift and flick UP to fold everything inside.'], S.plate, S.season(true, true)],
    tip: 'Add the fillings early so they warm through before you fold.',
  },
  {
    id: 'friedrice', title: 'Egg Fried Rice', icon: '🍚', cat: 'rice', recipe: 'friedrice', levels: ['fluffy', 'crispy'], eggs: 1, extras: [], fill: [], salt: false, pepper: true, diff: 2, time: '4 min',
    blurb: 'Rice tossed hot with an egg until golden — with peas and carrot bits.',
    steps: [S.heat(6), ['Rice', 'Tap 🍚 Rice in the fridge — it drops into the pan.'], S.crack, ['Toss', 'Stir in circles over the rice until the egg disappears into it.'], ['Fry', 'Keep tossing until golden. Fluffy: soon. Crispy: a bit longer.'], ['Scoop', 'Drag the spatula out over the pan rim to scoop the rice, then onto the plate.'], S.season(false, true)],
    tip: 'Rice that sits still catches and burns — keep it moving.',
  },
  {
    id: 'baconrice', title: 'Bacon Fried Rice', icon: '🍚', cat: 'rice', recipe: 'friedrice', levels: ['fluffy', 'crispy'], eggs: 1, extras: [{ kind: 'bacon', level: 'crisp' }], fill: [], salt: false, pepper: true, diff: 3, time: '5 min',
    blurb: 'Egg fried rice served with crispy bacon on the side.',
    steps: [side('bacon', 'crispy'), ['Rice', 'Add 🍚 Rice next to the bacon.'], S.crack, ['Toss', 'Toss the egg into the rice in circles.'], ['Plate', 'Plate the bacon, then scoop the rice over the rim.'], S.season(false, true)],
    tip: 'Start the bacon first: it takes the longest.',
  },
  {
    id: 'baconeggs', title: 'Bacon & Eggs', icon: '🥓', cat: 'breakfast', recipe: 'sunny', levels: ['runny', 'jammy'], eggs: 2, extras: [{ kind: 'bacon', level: 'crisp' }], fill: [], salt: true, pepper: false, diff: 2, time: '4 min',
    blurb: 'The classic: two sunny eggs with crispy bacon.',
    steps: [side('bacon', 'crispy'), S.butter, S.crackN(2), ['Flip bacon', 'Flip the bacon when its chip turns blue.'], ['Plate', 'Plate both eggs and the bacon.'], S.season(true, false)],
    tip: 'Put the bacon in first, then crack the eggs around it.',
  },
  {
    id: 'hamtoast', title: 'Ham & Egg on Toast', icon: '🍞', cat: 'breakfast', recipe: 'sunny', levels: ['runny', 'jammy'], eggs: 1, extras: [{ kind: 'ham', level: 'seared' }, { kind: 'bread', level: 'toasted' }], fill: [], salt: false, pepper: true, diff: 2, time: '4 min',
    blurb: 'Golden toast, seared ham and a sunny egg.',
    steps: [side('bread', 'golden'), side('ham', 'seared'), S.butter, S.crack, ['Plate', 'Plate the toast, ham and egg.'], S.season(false, true)],
    tip: 'Three things in one pan — use the progress chips to know which is ready.',
  },
  {
    id: 'fullbreakfast', title: 'Full Breakfast', icon: '🍽️', cat: 'breakfast', recipe: 'over', levels: ['easy', 'medium'], eggs: 2, extras: [{ kind: 'bacon', level: 'crisp' }, { kind: 'sausage', level: 'browned' }, { kind: 'tomato', level: 'grilled' }, { kind: 'bread', level: 'toasted' }], fill: [], salt: true, pepper: true, diff: 3, time: '7 min',
    blurb: 'Two over-easy eggs with bacon, sausages, grilled tomato and toast. The big one!',
    steps: [side('sausage'), side('bacon'), side('tomato'), ['Plate sides', 'As each side is ready, lift it onto the plate to make room.'], side('bread'), S.crackN(2), ['Flip', 'Flip each egg when its chip says “Flip it!”.'], S.plate, S.season(true, true)],
    tip: 'Sausages first, toast last. The pan is busy: plate things as soon as they are ready.',
  },
  {
    id: 'tomatoscramble', title: 'Tomato & Egg Scramble', icon: '🍅', cat: 'eggs', recipe: 'scrambled', levels: ['soft', 'medium'], eggs: 2, extras: [{ kind: 'tomato', level: 'grilled' }], fill: [], salt: true, pepper: false, diff: 2, time: '4 min',
    blurb: 'Soft scrambled eggs with sweet, caramelised tomato halves on the side.',
    steps: [side('tomato', 'grilled'), S.butter, S.crackN(2), ['Stir', 'Stir slow circles without letting go until the eggs turn into curds.'], ['Plate', 'Plate the tomato, then scoop the eggs out over the rim.'], S.season(true, false)],
    tip: 'Start the tomato first and push it to the edge, so the eggs have room in the middle.',
  },
  {
    id: 'sunnytomato', title: 'Sunny Eggs & Blistered Tomatoes', icon: '🌞', cat: 'eggs', recipe: 'sunny', levels: ['runny', 'jammy'], eggs: 2, extras: [{ kind: 'tomato', level: 'grilled' }], fill: [], salt: true, pepper: true, diff: 2, time: '4 min',
    blurb: 'Two glossy sunny eggs next to jammy, blistered tomatoes. Bright and cheerful.',
    steps: [side('tomato', 'grilled'), S.butter, S.crackN(2), ['Watch', 'Each egg has its own chip — pull each one when it says Ready.'], ['Plate', 'Lift the tomatoes and both eggs onto the plate.'], S.season(true, true)],
    tip: 'Dip toast into the yolk… in your imagination. In the game, just keep the yolks runny!',
  },
  {
    id: 'moonbreakfast', title: 'Midnight Breakfast', icon: '🌙', cat: 'breakfast', recipe: 'over', levels: ['easy', 'medium'], eggs: 1, extras: [{ kind: 'sausage', level: 'browned' }, { kind: 'bread', level: 'toasted' }], fill: [], salt: true, pepper: false, diff: 2, time: '5 min',
    blurb: 'A late-night plate for night owls (and bats): an over-easy egg, a sausage and golden toast.',
    steps: [side('sausage'), side('bread', 'golden'), S.butter, S.crack, ['Flip', 'Flip the egg when its chip says “Flip it!”.'], ['Plate', 'Plate the toast, sausage and egg.'], S.season(true, false)],
    tip: 'Sausages take the longest — start them first, then the toast, then the egg.',
  },
  {
    id: 'sausagerice', title: 'Sausage Fried Rice', icon: '🌭', cat: 'rice', recipe: 'friedrice', levels: ['fluffy', 'crispy'], eggs: 1, extras: [{ kind: 'sausage', level: 'browned' }], fill: [], salt: false, pepper: true, diff: 3, time: '6 min',
    blurb: 'Egg fried rice with a browned sausage on the side. Hearty and toasty.',
    steps: [side('sausage'), ['Rice', 'Add 🍚 Rice next to the sausage.'], S.crack, ['Toss', 'Stir circles over the rice until the egg disappears into it.'], ['Plate', 'Plate the sausage, then scoop the rice out over the rim.'], S.season(false, true)],
    tip: 'Turn the sausage while the rice warms up.',
  },
  {
    id: 'cheesytoastomelette', title: 'Cheese Omelette on Toast', icon: '🧇', cat: 'omelette', recipe: 'omelette', levels: ['soft', 'medium'], eggs: 2, extras: [{ kind: 'bread', level: 'toasted' }], fill: ['cheese'], salt: true, pepper: true, diff: 3, time: '6 min',
    blurb: 'A folded cheese omelette served with golden toast. Cozy weekend food.',
    steps: [side('bread', 'golden'), ['Plate toast', 'Put the toast on the plate as soon as it is golden to free up the pan.'], S.butter, S.crackN(2), ['Beat', 'Stir ONE slow circle, then let go — the eggs become one sheet.'], ['Fill', 'Add 🧀 Cheese on top while it sets.'], ['Fold', 'Lift and flick UP (or tap ↻ Flip) to fold.'], S.plate, S.season(true, true)],
    tip: 'Toast first, omelette second — the omelette needs the whole pan.',
  },
];

export const bookById = (id) => BOOK.find((b) => b.id === id);
