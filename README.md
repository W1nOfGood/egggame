# Crack & Sizzle 🍳

A cozy 3D egg-cooking game for the browser (built for iPad touch first, works with mouse too).
Three.js + plain HTML/CSS/JS. **No build step, no Node required to host. It's a 100% static site.**

## Host it (static)

Upload the whole folder as-is to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, nginx, Apache…):

```
index.html
style.css
js/
vendor/        <- three.js is bundled locally, no CDN needed
```

The only external request is the optional Google Font (Fredoka). It falls back to the system rounded font on iPad.

> It must be served over **http(s)**. Opening `index.html` straight from disk (`file://`) won't work, because browsers block ES modules there.

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
- Shake 🧂 salt and pepper by dragging the shaker and wiggling it (or just tap the tray button), then 🛎️ Serve.
- **Camera**: drag empty space to orbit · pinch / scroll to zoom · two-finger drag to pan · 📷 resets the view.
- **Move anything**: drag the pan (by its handle), plate, egg carton, butter dish, shakers and spatula around the counter. Pull the pan off the burner and it cools down.

## Code map

| File | What it does |
| --- | --- |
| `js/main.js` | renderer, lighting, orbit camera, quality scaling, main loop |
| `js/kitchen.js` | room, counter, cabinets, window, gas cooktop, flames, grate, knobs, decor |
| `js/props.js` | pan, plate, carton, eggs, shell halves, butter dish, shakers, spatula |
| `js/food.js` | egg simulation (white / yolk / browning per side) and procedural egg, yolk and curd visuals |
| `js/game.js` | cooking sim and actions: butter, crack, flip, stir, plate, season, serve; orders |
| `js/interact.js` | mouse and touch picking, 3D dragging, gestures, orbit gating |
| `js/scoring.js` | orders, scoring, cooking guide, hints, tutorial steps |
| `js/ui.js` | HUD, heat dial, tray, menus, results, settings (saved to localStorage) |
| `js/audio.js` | fully synthesized Web Audio SFX and generative music |
