# Crack & Sizzle 🍳

A cozy 3D egg-cooking game for the browser (built for iPad touch first, works with mouse too).
Three.js + plain HTML/CSS/JS. **No build step, no Node required to host. It's a 100% static site.**

## Run it

**Just double-click `index.html`** (or upload the folder to any static host). The game is pre-bundled into `game.bundle.js`, so it also works straight from disk (`file://`), where browsers block ES modules.

```
index.html
style.css
game.bundle.js   <- all code + three.js in one classic script
```

The only external request is the optional Google Font (Fredoka); it falls back to the system rounded font.

**After editing anything in `js/`, rebuild the bundle:** `node build.mjs` (it also stamps fresh `?v=` versions into `index.html` so browsers never mix an old cached stylesheet with new code) (needs Node + internet once for esbuild). `dev.html` loads the unbundled `js/` modules instead; it must be served over http(s), e.g. `node serve.mjs`. The build regenerates `dev.html` from `index.html`, so only ever edit `index.html`.

### nginx on a VPS (optional)

```nginx
server {
  listen 80;
  server_name eggs.example.com;
  root /var/www/egggame;
  location / { try_files $uri $uri/ =404; }
}
```

## Run locally

Any static server works. The included zero-dependency one needs only Node:

```bash
node serve.mjs
```

It prints a `localhost` URL plus a LAN URL. Open the LAN URL on your iPad (same Wi-Fi) to play. No Node? Use `python -m http.server 5173` instead.

Tip: on iPad, use Share → **Add to Home Screen** for a full-screen, app-like experience.

## How to play

- **Order Mode**: 5 customers, each scored out of 100 (recipe 30 · doneness 40 · condition 20 · seasoning 10).
- **🌙 Cozy Mode**: an order round with no timers and gentler browning.
- **Regulars** (💌 on the title screen): 10 named customers with their own lines and favourite dish. Good dishes fill their heart meter (favourites count double); a full meter unlocks a thank-you note.
- **Tips & 🛍️ Shop**: every dish earns 🪙 tips (half in practice). Spend them on looks only: pans (incl. a midnight-plum pan with a skull-bow charm), plates, spatulas (bat-wing!), Noxie's outfits, a heart-shaped egg ring and a nap cushion.
- **✨ Today's special**: one dish a day (shown on the title screen) earns +🪙10 when served with 2+ stars.
- **Stickers**: the Recipe Book shows your best stars and how often you cooked each dish; a 3-star dish earns a 🏅 sticker.
- **📸 Photo**: after serving, Snap photo frames the plate as a polaroid (on iPad the share sheet can save it to Photos).
- **Noxie** the kitchen imp sits on the counter: tap for purrs and hearts; it cheers great dishes and flops at bad ones.
- **📻 Radio**: tap the radio (or pick in Settings) for Lo-fi Kitchen, Music Box, Rainy Jazz or off.
- **Settings → Kitchen mood**: 🌙 Midnight Plum (default, dark purple UI), ☀️ Morning, 🌇 Golden Hour, ✨ Cozy Night; **Weather**: rain, snow or clear outside the window.
- **Free Cook**: no timer, experiment freely. **How to Play**: an interactive tutorial.
- Drag 🧈 butter into the pan → turn the heat dial → drag an 🥚 over the pan → tap to crack → drag sideways to pull the shell apart.
- **Spatula**: touch the egg to lift it · swipe UP to flip · drag onto the plate. Drag in **circles** in the pan: one slow circle beats the egg (then let go for an omelette); let go and stir again to scramble. A ring at the pan shows 🥚 beaten and 🥣 scramble. For a scrambled-egg order one stir goes straight through.
- **More dishes**: omelette (stir ONE slow circle to beat the egg, let it set, add 🧀/🍖 on top, touch it with the spatula and swipe UP to fold), egg fried rice (add 🍚 rice, crack an egg in, toss both together in circles) and sides: 🥓 bacon, 🍖 ham, 🌭 sausage, 🧀 cheese.
- **Open fridge** on the back counter holds bacon, ham, sausage, cheese and rice in 3D: tap an item to drop it in the pan, or drag it out. The same five are on the shelf above the tool tray.
- **Several eggs at once**: crack up to 3 eggs into the pan; each cooks, flips and plates on its own (they sit side by side on the plate). Stir and they beat together into one bigger omelette or scramble.
- **📖 Recipe Book** (title screen, the 📖 button top-right, or "How to make it" on the order card): 17 dishes with ingredients, step-by-step instructions and a chef's tip. "Practice this in Free Cook" turns any recipe into a scored practice order.
- **Dishes**: Sunny-Side Up, Eggs for Two, Over-Easy, Soft Scrambled, Cheesy Scramble on Toast, Cheese Omelette, Ham & Cheese Omelette (3 eggs), Egg Fried Rice, Bacon Fried Rice, Bacon & Eggs, Ham & Egg on Toast, the Full Breakfast (2 eggs, bacon, sausage, grilled tomato, toast), Tomato & Egg Scramble, Sunny Eggs & Blistered Tomatoes, Midnight Breakfast, Sausage Fried Rice and Cheese Omelette on Toast.
- **Progress chips**: every item cooking in the pan has its own chip (state + progress bar) floating above it; it turns blue and says "Flip it!" when the underside is done. A blue **↻ Flip** button appears in the tool tray and flips whatever is ready; or flick the spatula up over an item, even without lifting it first. Dragging the spatula through bacon/ham/sausage nudges it along, and stirring is measured around the item you are stirring.
- **Ingredient shelf** (above the tool tray): tap an ingredient to drop it in the pan, or drag it in or onto the plate. Lift anything out with the spatula; swipe UP while carrying it to flip. Scoop rice out over the pan rim.
- Orders can ask for sides and fillings ("crispy bacon", "cheese inside"); they are scored in Recipe (presence) and Doneness (how well the side is cooked).
- **🗑️ Toss** empties the whole pan, burnt butter included, so you can start clean.
- Shake 🧂 salt and pepper by dragging the shaker and wiggling it (or just tap the tray button), then 🛎️ Serve.
- **Camera**: drag empty space to orbit · pinch / scroll to zoom · two-finger drag to pan · 📷 resets the view.
- **Move anything**: drag the pan (by its handle), plate, egg carton, butter dish, shakers and spatula around the counter. Pull the pan off the burner and it cools down.

## Performance (iPad)

- Starts at full quality and **adjusts itself automatically**: if frames drop it steps down through 8 tiers, lowering resolution first, then shadow refresh rate, bloom, reflections and the lamp light; shadows go only on very weak hardware. When frames are smooth again it steps back up (a tier that failed twice isn't retried). "Sharpest detail" in Settings never drops effects, only resolution.
- The Claude desktop app's browser pane uses Windows' software renderer (no GPU), so it runs far slower than Chrome, Safari or the iPad. Judge speed in a real browser.
- Measures the display's refresh rate and targets **120 fps on ProMotion iPads** (60 elsewhere). Safari may hold pages at 60 fps: Settings › Apps › Safari › Advanced › Feature Flags → turn off "Prefer Page Rendering Updates near 60fps". The in-game Settings shows this tip on an iPad stuck at 60 Hz.
- **Smoothness** setting: "Smoothest" lets resolution drop further to hold the frame rate, "Sharpest detail" keeps it at least 1.5×.
- Open `index.html?fps` for an on-screen meter (fps · Hz · quality tier · resolution · bloom/env).
- Static meshes are merged per material (and colour-baked where safe) at load, and all particles draw in three batches.

## Code map

| File | What it does |
| --- | --- |
| `js/main.js` | renderer, lighting, orbit camera, quality scaling, main loop |
| `js/kitchen.js` | room, counter, cabinets, window, gas cooktop, flames, grate, knobs, decor |
| `js/props.js` | pan, plate, carton, eggs, shell halves, butter dish, shakers, spatula |
| `js/recipes.js` | the recipe book data: every dish, its ingredients, steps and tips (orders are drawn from it) |
| `js/book.js` | the recipe book overlay UI |
| `js/ingredients.js` | bacon, ham, sausage, cheese, rice, toast and tomato: simulation (per-side cooking, browning, tossing) and procedural visuals |
| `js/food.js` | egg simulation (white / yolk / browning per side) and procedural egg, yolk and curd visuals |
| `js/game.js` | cooking sim and actions: butter, crack, flip, stir, plate, season, serve; orders |
| `js/interact.js` | mouse and touch picking, 3D dragging, gestures, orbit gating |
| `js/scoring.js` | orders, scoring, cooking guide, hints, tutorial steps |
| `js/ui.js` | HUD, heat dial, tray, menus, results, settings (saved to localStorage) |
| `js/audio.js` | fully synthesized Web Audio SFX, generative music and the radio stations |
| `js/atmos.js` | kitchen moods (lights, sky, wall/tile colours, fairy lights, bloom) and weather |
| `js/post.js` | HDR render target, 3-level bloom, warm grade and vignette |
| `js/decor.js` | Noxie, fairy lights, mug, radio, star clock, cookie jar, teapot, candle |
| `js/fx.js` | pooled particles (steam, wisps, hearts, sparkles, rain, snow) in three draw calls |
| `js/merge.js` | merges static meshes at load to cut draw calls |
| `js/customers.js` | the regulars: lines, favourites, heart meters |
| `js/shop.js` | the cosmetic shop catalogue and how each item restyles the kitchen |
