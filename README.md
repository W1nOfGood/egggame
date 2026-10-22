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

**After editing anything in `js/`, rebuild the bundle:** `node build.mjs` (it also stamps fresh `?v=` versions into `index.html` so browsers never mix an old cached stylesheet with new code) (needs Node + internet once for esbuild). `dev.html` loads the unbundled `js/` modules instead; it must be served over http(s), e.g. `node serve.mjs`.

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
- **Free Cook**: no timer, experiment freely. **How to Play**: an interactive tutorial.
- Drag 🧈 butter into the pan → turn the heat dial → drag an 🥚 over the pan → tap to crack → drag sideways to pull the shell apart.
- **Spatula**: touch the egg to lift it · swipe UP to flip · drag onto the plate. Drag in **circles** in the pan to scramble.
- **More dishes**: omelette (stir ONE slow circle to beat the egg, let it set, add 🧀/🍖 on top, touch it with the spatula and swipe UP to fold), egg fried rice (add 🍚 rice, crack an egg in, toss both together in circles) and sides: 🥓 bacon, 🍖 ham, 🌭 sausage, 🧀 cheese.
- **Open fridge** on the back counter holds bacon, ham, sausage, cheese and rice in 3D: tap an item to drop it in the pan, or drag it out. The same five are on the shelf above the tool tray.
- **Progress chips**: every item cooking in the pan has its own chip (state + progress bar) floating above it; it turns blue and says "Flip it!" when the underside is done. A blue **↻ Flip** button appears in the tool tray and flips whatever is ready; or flick the spatula up over an item, even without lifting it first. Dragging the spatula through bacon/ham/sausage nudges it along, and stirring is measured around the item you are stirring.
- **Ingredient shelf** (above the tool tray): tap an ingredient to drop it in the pan, or drag it in or onto the plate. Lift anything out with the spatula; swipe UP while carrying it to flip. Scoop rice out over the pan rim.
- Orders can ask for sides and fillings ("crispy bacon", "cheese inside"); they are scored in Recipe (presence) and Doneness (how well the side is cooked).
- **🗑️ Toss** empties the whole pan, burnt butter included, so you can start clean.
- Shake 🧂 salt and pepper by dragging the shaker and wiggling it (or just tap the tray button), then 🛎️ Serve.
- **Camera**: drag empty space to orbit · pinch / scroll to zoom · two-finger drag to pan · 📷 resets the view.
- **Move anything**: drag the pan (by its handle), plate, egg carton, butter dish, shakers and spatula around the counter. Pull the pan off the burner and it cools down.

## Code map

| File | What it does |
| --- | --- |
| `js/main.js` | renderer, lighting, orbit camera, quality scaling, main loop |
| `js/kitchen.js` | room, counter, cabinets, window, gas cooktop, flames, grate, knobs, decor |
| `js/props.js` | pan, plate, carton, eggs, shell halves, butter dish, shakers, spatula |
| `js/ingredients.js` | bacon, ham, sausage, cheese and rice: simulation (per-side cooking, browning, tossing) and procedural visuals |
| `js/food.js` | egg simulation (white / yolk / browning per side) and procedural egg, yolk and curd visuals |
| `js/game.js` | cooking sim and actions: butter, crack, flip, stir, plate, season, serve; orders |
| `js/interact.js` | mouse and touch picking, 3D dragging, gestures, orbit gating |
| `js/scoring.js` | orders, scoring, cooking guide, hints, tutorial steps |
| `js/ui.js` | HUD, heat dial, tray, menus, results, settings (saved to localStorage) |
| `js/audio.js` | fully synthesized Web Audio SFX and generative music |
