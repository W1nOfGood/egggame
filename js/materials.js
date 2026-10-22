// Shared, reusable materials and procedural canvas textures (no image files needed).
import * as THREE from 'three';

function canvasTex(w, h, draw, { repeat = [1, 1], srgb = true } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function rand(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

// Terrazzo countertop: cream base with pastel chips.
function terrazzo(ctx, w, h) {
  const r = rand(7);
  ctx.fillStyle = '#fbf3ea'; ctx.fillRect(0, 0, w, h);
  const cols = ['#f6b8c4', '#9fd8c8', '#ffd98a', '#b9c8f0', '#e9cdb8', '#ffffff'];
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = cols[(r() * cols.length) | 0];
    ctx.globalAlpha = 0.55 + r() * 0.45;
    const x = r() * w, y = r() * h, s = 1.5 + r() * r() * 9;
    ctx.beginPath();
    const n = 5 + ((r() * 3) | 0);
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2, rr = s * (0.6 + r() * 0.5);
      ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// Glazed subway tiles for the backsplash, with a matching bump map.
function tiles(ctx, w, h, bump) {
  const rows = 8, cols = 4, th = h / rows, tw = w / cols;
  ctx.fillStyle = bump ? '#000' : '#cfe9df'; ctx.fillRect(0, 0, w, h);
  const r = rand(3);
  for (let y = 0; y < rows; y++) {
    for (let x = -1; x < cols + 1; x++) {
      const ox = (y % 2) * tw * 0.5;
      const px = x * tw + ox + 3, py = y * th + 3, pw = tw - 6, ph = th - 6;
      if (bump) {
        const g = ctx.createLinearGradient(0, py, 0, py + ph);
        g.addColorStop(0, '#ddd'); g.addColorStop(0.15, '#fff'); g.addColorStop(0.85, '#fff'); g.addColorStop(1, '#bbb');
        ctx.fillStyle = g;
      } else {
        const l = 0.94 + r() * 0.08;
        ctx.fillStyle = `rgb(${(214 * l) | 0},${(240 * l) | 0},${(229 * l) | 0})`;
      }
      roundRect(ctx, px, py, pw, ph, 10); ctx.fill();
      if (!bump) { // glaze highlight
        ctx.fillStyle = 'rgba(255,255,255,.35)';
        roundRect(ctx, px + 8, py + 6, pw * 0.5, 6, 3); ctx.fill();
      }
    }
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function woodGrain(ctx, w, h, base = '#d9a066', dark = '#b97d45') {
  ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
  const r = rand(11);
  for (let i = 0; i < 60; i++) {
    ctx.strokeStyle = dark; ctx.globalAlpha = 0.12 + r() * 0.22; ctx.lineWidth = 0.6 + r() * 2.4;
    ctx.beginPath();
    const y0 = r() * h;
    for (let x = 0; x <= w; x += 8) ctx.lineTo(x, y0 + Math.sin(x * 0.02 + i) * 4 + Math.sin(x * 0.07) * 1.5);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function plateLabel(ctx, w, h) {
  ctx.fillStyle = '#fff6ea'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ff8a7a'; ctx.font = 'bold 54px Fredoka, ui-rounded, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('FARM', w / 2, h * 0.45); ctx.fillStyle = '#7fbfae'; ctx.font = 'bold 40px Fredoka, ui-rounded, sans-serif';
  ctx.fillText('fresh eggs', w / 2, h * 0.8);
  ctx.strokeStyle = '#ffb59a'; ctx.lineWidth = 6; roundRect(ctx, 8, 8, w - 16, h - 16, 18); ctx.stroke();
}

function softDot(ctx, w, h) {
  const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}

function brushedRadial(ctx, w, h) {
  ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, w, h);
  const r = rand(5);
  for (let i = 0; i < 400; i++) {
    const rad = r() * w * 0.5;
    ctx.strokeStyle = r() < 0.5 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(w / 2, h / 2, rad, 0, Math.PI * 2); ctx.stroke();
  }
}

export function createMaterials() {
  const tex = {
    terrazzo: canvasTex(1024, 1024, terrazzo, { repeat: [3, 1.5] }),
    tiles: canvasTex(512, 512, (c, w, h) => tiles(c, w, h, false), { repeat: [6, 3] }),
    tilesBump: canvasTex(512, 512, (c, w, h) => tiles(c, w, h, true), { repeat: [6, 3], srgb: false }),
    wood: canvasTex(512, 256, (c, w, h) => woodGrain(c, w, h)),
    walnut: canvasTex(512, 256, (c, w, h) => woodGrain(c, w, h, '#7a4e36', '#4a2c1c')),
    label: canvasTex(256, 128, plateLabel),
    dot: canvasTex(64, 64, softDot),
    brushed: canvasTex(256, 256, brushedRadial, { srgb: false }),
  };
  const P = (o) => new THREE.MeshPhysicalMaterial(o);
  const S = (o) => new THREE.MeshStandardMaterial(o);
  const mats = {
    tex,
    counter: P({ map: tex.terrazzo, roughness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.25 }),
    counterEdge: S({ color: '#f4e6d8', roughness: 0.5 }),
    cabinet: S({ color: '#9fd8c8', roughness: 0.55 }),
    cabinetDark: S({ color: '#86c6b4', roughness: 0.6 }),
    brass: S({ color: '#e8c27a', metalness: 1, roughness: 0.3 }),
    wall: S({ color: '#ffe3d1', roughness: 0.95 }),
    tile: S({ map: tex.tiles, bumpMap: tex.tilesBump, bumpScale: 1.5, roughness: 0.25, metalness: 0 }),
    floor: S({ color: '#e9c9b2', roughness: 0.8 }),
    cooktop: P({ color: '#3d4256', roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12, metalness: 0.1 }),
    cooktopTrim: S({ color: '#d4d9e2', metalness: 1, roughness: 0.25 }),
    castIron: S({ color: '#26272d', roughness: 0.55, metalness: 0.4 }),
    burnerCap: S({ color: '#1e1f24', roughness: 0.4, metalness: 0.6 }),
    burnerRing: S({ color: '#b9a37b', roughness: 0.35, metalness: 0.9 }),
    knob: P({ color: '#fffaf3', roughness: 0.3, clearcoat: 0.8 }),
    knobMark: S({ color: '#ff8a7a', roughness: 0.4 }),
    steel: S({ color: '#dfe4ea', metalness: 1, roughness: 0.22, roughnessMap: tex.brushed }),
    chrome: S({ color: '#f2f4f7', metalness: 1, roughness: 0.12 }),
    panOuter: P({ color: '#86cfc6', roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.15 }),
    panInner: P({ color: '#3b3d45', roughness: 0.42, metalness: 0.25, clearcoat: 0.5, clearcoatRoughness: 0.35 }),
    panBase: S({ color: '#c6ccd4', metalness: 1, roughness: 0.3, roughnessMap: tex.brushed }),
    wood: S({ map: tex.wood, roughness: 0.55 }),
    walnut: S({ map: tex.walnut, roughness: 0.45 }),
    ceramic: P({ color: '#fffdf8', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 }),
    ceramicPink: P({ color: '#f6b8c4', roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }),
    ceramicBlue: P({ color: '#bfd6f3', roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }),
    ceramicMint: P({ color: '#a9e0cf', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
    terracotta: S({ color: '#e59a7a', roughness: 0.85 }),
    leaf: S({ color: '#7cc28a', roughness: 0.6, side: THREE.DoubleSide }),
    leafDark: S({ color: '#5aa56f', roughness: 0.6, side: THREE.DoubleSide }),
    carton: S({ color: '#ecd6b3', roughness: 0.95 }),
    cartonDark: S({ color: '#d9bf98', roughness: 0.95 }),
    label: S({ map: tex.label, roughness: 0.9 }),
    eggShell: P({ color: '#fff1df', roughness: 0.55, sheen: 0.3, sheenColor: new THREE.Color('#ffffff') }),
    eggShellBrown: P({ color: '#e7b58a', roughness: 0.6, sheen: 0.3, sheenColor: new THREE.Color('#ffe6cc') }),
    eggShellInner: S({ color: '#fbf7ef', roughness: 0.7, side: THREE.BackSide }),
    butter: P({ color: '#ffe08a', roughness: 0.35, clearcoat: 0.4, clearcoatRoughness: 0.3, sheen: 0.4, sheenColor: new THREE.Color('#fff4c4') }),
    glass: P({ color: '#ffffff', roughness: 0.05, transparent: true, opacity: 0.32, clearcoat: 1, depthWrite: false, side: THREE.DoubleSide }),
    salt: S({ color: '#ffffff', roughness: 1 }),
    peppercorns: S({ color: '#3a2c26', roughness: 1 }),
    spatulaHandle: P({ color: '#7fd1b9', roughness: 0.35, clearcoat: 0.7 }),
    shadowBlob: new THREE.MeshBasicMaterial({ color: '#7a4a35', transparent: true, opacity: 0.2, depthWrite: false, map: tex.dot }),
    windowSky: new THREE.MeshBasicMaterial({ color: '#cfeeff' }),
    windowFrame: S({ color: '#fffaf4', roughness: 0.5 }),
    cloud: new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95 }),
    jar: P({ color: '#ffffff', roughness: 0.05, transparent: true, opacity: 0.35, clearcoat: 1, depthWrite: false }),
    lid: S({ color: '#ff8a7a', roughness: 0.5 }),
    pasta: S({ color: '#f6d58a', roughness: 0.8 }),
    beans: S({ color: '#c96b52', roughness: 0.7 }),
  };
  return mats;
}
