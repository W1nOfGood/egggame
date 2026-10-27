// The regulars: each has a portrait, a favourite dish, a few lines of chatter and a heart meter that grows
// with good dishes. Ten hearts unlocks a thank-you note. Progress is saved in settings.hearts.
const pick = (a) => a[(Math.random() * a.length) | 0];

export const HEART_MAX = 10;

export const REGULARS = [
  { id: 'velvet', avatar: '🦇', name: 'Velvet', fav: 'omelette', blurb: 'A sleepy bat who only eats at midnight.',
    hi: ['Is it breakfast or dinner? Both, I hope.', 'Something warm, please… the night is chilly.'],
    happy: ['Batty-good! 🦇💜', 'This is my new favourite midnight snack.'], meh: ['Hmm, close enough for 3 a.m.', 'A little sad, like a cloudy moon.'],
    note: 'Dear chef, your kitchen is the coziest light on my night flights. Thank you for every warm plate. ~ Velvet 🦇' },
  { id: 'boo', avatar: '👻', name: 'Boo', fav: 'scrambled', blurb: 'A shy ghost who loves soft, fluffy things.',
    hi: ['B-boo… may I have something fluffy?', 'Oh! Hello… I didn\'t mean to startle you.'],
    happy: ['So fluffy I could float away! 👻', 'Boo-tiful!'], meh: ['It\'s… a little spooky.', 'I\'ll eat it… quietly.'],
    note: 'I used to be too shy to order. Now this is my favourite place to haunt. Boo-tiful job, chef. ~ Boo 👻' },
  { id: 'bruno', avatar: '🐻', name: 'Bruno', fav: 'baconeggs', blurb: 'Big appetite, bigger hugs.',
    hi: ['Hungry as a bear! Literally.', 'Morning, chef! Something hearty?'],
    happy: ['Now THAT is a breakfast!', 'Bear-y delicious!'], meh: ['I\'ve had better honey.', 'Still hungry…'],
    note: 'Best breakfasts this side of the forest. Save me a seat by the window! ~ Bruno 🐻' },
  { id: 'pip', avatar: '🐰', name: 'Pip', fav: 'hamtoast', blurb: 'Always in a hurry, always polite.',
    hi: ['Quick quick, I\'m late!', 'Hi hi! Something on toast?'],
    happy: ['Hop-tastic!', 'Worth being late for!'], meh: ['Um… it\'ll do!', 'I\'ll eat it on the run.'],
    note: 'I\'m always running late, but I always make time for your food. ~ Pip 🐰' },
  { id: 'miso', avatar: '🐱', name: 'Miso', fav: 'sunny', blurb: 'Particular about runny yolks.',
    hi: ['Mrrp. The yolk must be runny.', 'I have very high standards. Meow.'],
    happy: ['Purr-fect. I approve.', 'A chef worthy of my presence.'], meh: ['I suppose I\'ll nibble it.', 'Hiss… the yolk.'],
    note: 'I have tasted many eggs. Yours are the only ones I purr for. ~ Miso 🐱' },
  { id: 'fern', avatar: '🦊', name: 'Fern', fav: 'friedrice', blurb: 'Clever, curious and loves crispy bits.',
    hi: ['What\'s cooking, clever chef?', 'I smell something crispy…'],
    happy: ['Foxy fine cooking!', 'Crispy perfection!'], meh: ['Clever try!', 'Hmm, not quite crispy.'],
    note: 'You\'ve outfoxed every kitchen in town. Keep the crispy bits coming! ~ Fern 🦊' },
  { id: 'bao', avatar: '🐼', name: 'Bao', fav: 'baconrice', blurb: 'Eats slowly and savours everything.',
    hi: ['Take your time… no rush.', 'Something with rice, please?'],
    happy: ['Mmm… happy panda.', 'I\'m going to nap now. Happily.'], meh: ['It\'s okay. I\'m still sleepy.', 'Bamboo might have been better.'],
    note: 'Your kitchen is calm like a bamboo forest. Thank you for every slow, happy meal. ~ Bao 🐼' },
  { id: 'hoot', avatar: '🦉', name: 'Hoot', fav: 'over', blurb: 'A wise owl who reads cookbooks for fun.',
    hi: ['Who? Me! Hungry, that is.', 'I\'ve read about your eggs. Let\'s see.'],
    happy: ['A textbook egg! Wise work.', 'Hoot hoot hooray!'], meh: ['Page 42 says otherwise…', 'Interesting technique.'],
    note: 'I have read 1,000 cookbooks and none of them taste like your kitchen. ~ Hoot 🦉' },
  { id: 'ribbit', avatar: '🐸', name: 'Ribbit', fav: 'cheesy', blurb: 'Loves rainy days and cheesy eggs.',
    hi: ['What a lovely rainy day!', 'Ribbit! Something cheesy?'],
    happy: ['Toad-ally amazing!', 'Cheesy and dreamy!'], meh: ['A bit soggy, like me.', 'Ribb… it\'s fine.'],
    note: 'Every rainy day I hop over here. Thank you for the cheesiest smiles. ~ Ribbit 🐸' },
  { id: 'truffle', avatar: '🐷', name: 'Truffle', fav: 'fullbreakfast', blurb: 'A food critic in a tiny bow tie.',
    hi: ['I shall review your breakfast.', 'Impress me, chef.'],
    happy: ['Five oinks out of five!', 'I must write about this!'], meh: ['I\'ve seen better plating.', 'Two oinks. Maybe.'],
    note: 'My review: the coziest kitchen in the land. Five oinks, forever. ~ Truffle 🐷' },
];

export const regularById = (id) => REGULARS.find((r) => r.id === id);

/** Pick n customers for a round; regulars who are close to a full heart meter come back a little more often. */
export function pickCustomers(n, hearts = {}) {
  const pool = REGULARS.map((r) => ({ r, w: 1 + Math.min(HEART_MAX, hearts[r.id] || 0) * 0.08 + Math.random() }));
  pool.sort((a, b) => b.w - a.w);
  return pool.slice(0, n).map((p) => p.r);
}

export const greet = (c) => pick(c.hi);
export const reaction = (c, stars) => (stars >= 3 ? pick(c.happy) : stars >= 2 ? pick(['Tasty, thank you!', 'Pretty good, chef!', 'Yum! Almost perfect.', 'Nice! I’ll be back.']) : pick(c.meh));
/** Hearts earned for a dish: 2 for a perfect dish, 1 for a good one, none otherwise (double for their favourite). */
export const heartsFor = (c, stars, dishId) => (stars >= 3 ? 2 : stars >= 2 ? 1 : 0) * (dishId === c.fav ? 2 : 1);
