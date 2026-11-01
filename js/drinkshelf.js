// The drink shelf on the back wall: every liquid, extra and cup you can make drinks with, in 3D.
// Forty-odd objects would be a lot of draw calls, so the display is one merged static mesh with invisible press targets.
import * as THREE from 'three';
import { CUPS, EXTRAS, LIQUIDS } from './drinklist.js';
import { mergeStatic } from './merge.js';

const POS = { x: 4.5, z: -3.47 }, TIERS = [1.2, 1.82, 2.44, 3.06], WIDTH = 4.2;
const CELL = 64, ATLAS_COLS = 8;
const lathe = (pts, mat, smooth = false) => { const m = new THREE.Mesh(new THREE.LatheGeometry(smooth ? new THREE.SplineCurve(pts.map(([x, y]) => new THREE.Vector2(x, y))).getPoints(22) : pts.map(([x, y]) => new THREE.Vector2(x, y)), 22), mat); m.castShadow = true; return m; };
const FILL = { ice: '#dff2ff', sugar: '#ffffff', honey: '#f0a820', vanilla: '#f6e7b0', caramel: '#b5691c', cinnamon: '#8a4f22', foam: '#fff7e8', whip: '#fffdf8', marshmallow: '#ffd9ea', boba: '#2a1710', lemon: '#f7e04a', mint: '#5fb85a', cherry: '#c8102e' };
const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, clearcoat: 0.8, ...o });

const BOTTLE = [[0.001, 0], [0.105, 0.002], [0.13, 0.025], [0.137, 0.09], [0.137, 0.24], [0.115, 0.31], [0.06, 0.37], [0.046, 0.42], [0.046, 0.455], [0.055, 0.465]];
const JAR = [[0.001, 0.002], [0.1, 0.002], [0.122, 0.02], [0.126, 0.1], [0.124, 0.2], [0.104, 0.235], [0.1, 0.25]];
const CUP_SHAPE = { glass: [[0.001, 0], [0.1, 0], [0.135, 0.42], [0.115, 0.42], [0.09, 0.04], [0.001, 0.04]], mug: [[0.001, 0], [0.14, 0], [0.15, 0.3], [0.125, 0.3], [0.12, 0.04], [0.001, 0.04]], teacup: [[0.001, 0], [0.08, 0], [0.17, 0.17], [0.15, 0.17], [0.07, 0.03], [0.001, 0.03]], jar: [[0.001, 0], [0.13, 0], [0.135, 0.34], [0.12, 0.38], [0.11, 0.34], [0.11, 0.04], [0.001, 0.04]], skull: [[0.001, 0], [0.12, 0], [0.17, 0.14], [0.13, 0.3], [0.11, 0.3], [0.1, 0.04], [0.001, 0.04]] };

export class DrinkShelf {
  constructor(game) {
    this.game = game;
    const group = this.group = new THREE.Group(); group.position.set(POS.x, 0, POS.z); game.scene.add(group);
    const wood = game.mats.wood, labels = [], hits = new THREE.MeshBasicMaterial({ visible: false });
    this.spots = {};
    const addItem = (kind, id, obj, x, tier, w, h, icon) => {
      const y = TIERS[tier] + 0.035;
      obj.position.set(x, y, 0); group.add(obj);
      if (icon) labels.push({ icon, x, y: y + (kind === 'liquid' ? 0.165 : kind === 'extra' ? 0.115 : 0.14), z: 0.16, size: kind === 'tool' ? 0.2 : 0.15, wrap: kind === 'liquid' ? 0.139 : kind === 'extra' ? 0.128 : 0, tint: kind === 'liquid' ? LIQUIDS[id].color : kind === 'extra' ? FILL[id] : null });
      const hit = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.5), hits); hit.position.set(x, y + h / 2, 0.05);
      hit.userData.interact = 'drinkItem'; hit.userData.drinkItem = { kind, id }; group.add(hit);
      this.spots[kind + ':' + id] = { x, y, r: kind === 'liquid' ? 0.2 : 0.18 };
      (this.objs ||= {})[kind + ':' + id] = hit;
    };
    // shelves and their sides
    for (const y of TIERS) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(WIDTH, 0.05, 0.44), wood); b.position.set(0, y, 0); b.castShadow = true; b.receiveShadow = true; group.add(b);
    }
    for (const x of [-WIDTH / 2 + 0.03, WIDTH / 2 - 0.03]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, TIERS[3] - TIERS[0] + 0.05, 0.44), wood); s.position.set(x, (TIERS[0] + TIERS[3]) / 2, 0); group.add(s); }
    // liquids on the lower two shelves, where the normal camera can see them
    const capMat = new THREE.MeshStandardMaterial({ color: '#c49a6c', roughness: 0.9 }), ribbon = M('#ff8fc8');
    Object.entries(LIQUIDS).forEach(([id, l], i) => {
      const b = new THREE.Group();
      b.add(lathe(BOTTLE, M(l.color, { roughness: l.clear ? 0.06 : 0.14, clearcoat: 1 }), true));
      const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.047, 0.04, 0.07, 14), capMat); cork.position.y = 0.49; b.add(cork);
      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 8, 18), ribbon); collar.rotation.x = Math.PI / 2; collar.position.y = 0.4; b.add(collar);
      addItem('liquid', id, b, -WIDTH / 2 + 0.3 + (i % 10) * 0.4, i < 10 ? 1 : 0, 0.38, 0.56, l.icon);
    });
    // extras in jars on the next shelf
    const jarMat = new THREE.MeshPhysicalMaterial({ color: '#f2fbff', transparent: true, opacity: 0.32, roughness: 0.05, clearcoat: 1, depthWrite: false }), lidMat = M('#ff8fc8');
    Object.entries(EXTRAS).forEach(([id, e], i) => {
      const j = new THREE.Group(); j.add(lathe(JAR, jarMat, true));
      const fill = new THREE.Mesh(new THREE.CylinderGeometry(0.108, 0.104, 0.15, 18), M(FILL[id], { roughness: 0.55 })); fill.position.y = 0.09; j.add(fill);
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.104, 0.108, 0.045, 20), lidMat); lid.position.y = 0.268; j.add(lid);
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), lidMat); top.position.y = 0.302; j.add(top);
      addItem('extra', id, j, -WIDTH / 2 + 0.24 + i * 0.31, 2, 0.3, 0.4, e.icon);
    });
    // top shelf: the cups, then a spoon to stir, a bucket to dump into, and the menu board
    const cupMats = { glass: M('#dff2ff', { roughness: 0.08 }), mug: M('#b48cff'), teacup: M('#fff4e6'), jar: M('#d6f1ee', { roughness: 0.1 }), skull: M('#f4ead9') };
    Object.keys(CUPS).forEach((id, i) => {
      const c = new THREE.Group(); c.add(lathe(CUP_SHAPE[id], cupMats[id])); c.scale.setScalar(1.05);
      addItem('cup', id, c, -WIDTH / 2 + 0.3 + i * 0.44, 3, 0.42, 0.46, CUPS[id].icon);
    });
    const tx = -WIDTH / 2 + 0.3 + 5 * 0.44;
    const pot = new THREE.Group(); pot.add(lathe([[0.001, 0], [0.09, 0], [0.11, 0.2], [0.09, 0.2], [0.08, 0.02], [0.001, 0.02]], M('#c9b6e4')));
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.36, 8), M('#d9d9e3', { metalness: 0.7, roughness: 0.3 })); handle.position.set(0.02, 0.26, 0); handle.rotation.z = -0.22; pot.add(handle);
    const bowlS = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 8), handle.material); bowlS.scale.set(1, 0.6, 1.3); bowlS.position.set(0.06, 0.44, 0); pot.add(bowlS);
    addItem('tool', 'stir', pot, tx, 3, 0.36, 0.55, '🥄');
    const bucket = new THREE.Group(); bucket.add(lathe([[0.001, 0], [0.12, 0], [0.16, 0.3], [0.135, 0.3], [0.105, 0.03], [0.001, 0.03]], M('#7fd1b9')));
    addItem('tool', 'dump', bucket, tx + 0.44, 3, 0.4, 0.42, '🗑️');
    const board = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5, 0.03), wood); frame.position.y = 0.26; frame.rotation.x = -0.12; board.add(frame);
    addItem('tool', 'menu', board, tx + 1.02, 3, 0.66, 0.55, '📜');
    // front lip and little brackets, so it reads as built furniture
    for (const y of TIERS) {
      const lip = new THREE.Mesh(new THREE.BoxGeometry(WIDTH - 0.08, 0.075, 0.03), wood); lip.position.set(0, y + 0.012, 0.215); group.add(lip);
      for (const x of [-1.45, 1.45]) { const br = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.14, 0.26), wood); br.position.set(x, y - 0.09, -0.08); group.add(br); }
    }
    this._buildLabels(labels);
    mergeStatic(group, () => false, [], () => true);
    // rings under what the recipe wants (gold) and what's already in the cup (pink)
    this.rings = new THREE.InstancedMesh(new THREE.TorusGeometry(1, 0.15, 6, 22).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffffff' }), 40);
    this.rings.count = 0; this.rings.frustumCulled = false; this.rings.setColorAt(0, new THREE.Color('#ffffff')); group.add(this.rings);
    game.kitchen.pickables.push(group);
  }
  /** Emoji labels share one texture, and so one draw call. */
  _buildLabels(list) {
    const rows = Math.ceil(list.length / ATLAS_COLS), cv = document.createElement('canvas'); cv.width = CELL * ATLAS_COLS; cv.height = CELL * rows;
    const c = cv.getContext('2d'); c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `${CELL * 0.62}px system-ui, sans-serif`;
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 });
    list.forEach((l, i) => {
      const cx = i % ATLAS_COLS, cy = (i / ATLAS_COLS) | 0;
      if (l.wrap) { // a paper label with a coloured stripe, wrapped round the bottle
        c.fillStyle = '#fff6e4'; c.fillRect(cx * CELL + 1, cy * CELL + 1, CELL - 2, CELL - 2);
        c.fillStyle = l.tint; c.fillRect(cx * CELL + 1, cy * CELL + 1, CELL - 2, 7); c.fillRect(cx * CELL + 1, (cy + 1) * CELL - 8, CELL - 2, 7);
      } else { c.fillStyle = '#fff8ec'; c.beginPath(); c.arc((cx + 0.5) * CELL, (cy + 0.5) * CELL, CELL * 0.47, 0, 6.3); c.fill(); }
      c.fillStyle = '#000'; c.fillText(l.icon, (cx + 0.5) * CELL, (cy + 0.54) * CELL);
      const geo = l.wrap ? new THREE.CylinderGeometry(l.wrap, l.wrap, l.size, 14, 1, true, -0.62, 1.24) : new THREE.CircleGeometry(l.size / 2, 18), uv = geo.attributes.uv;
      for (let k = 0; k < uv.count; k++) uv.setXY(k, (cx + uv.getX(k)) / ATLAS_COLS, 1 - (cy + 1 - uv.getY(k)) / rows);
      const m = new THREE.Mesh(geo, mat); m.position.set(l.x, l.y, l.wrap ? 0 : l.z); this.group.add(m);
    });
    tex.needsUpdate = true;
  }
  /** Show what the recipe wants and what's in the cup. */
  mark(want, cup) {
    const d = new THREE.Object3D(), col = new THREE.Color(); let n = 0;
    const ring = (key, color) => {
      const s = this.spots[key]; if (!s || n >= 40) return;
      d.position.set(s.x, s.y + 0.005, 0); d.scale.setScalar(s.r); d.updateMatrix();
      this.rings.setMatrixAt(n, d.matrix); this.rings.setColorAt(n, col.set(color)); n++;
    };
    if (want) for (const k of Object.keys(want.mix)) ring('liquid:' + k, '#ffc93c');
    for (const k of Object.keys(EXTRAS)) {
      const on = cup.extras.includes(k), wanted = want && want.extras.includes(k);
      if (on) ring('extra:' + k, '#ff5fb0'); else if (wanted) ring('extra:' + k, '#ffc93c');
    }
    ring('cup:' + cup.cupId, '#ff5fb0');
    this.rings.count = n; this.rings.instanceMatrix.needsUpdate = true; if (this.rings.instanceColor) this.rings.instanceColor.needsUpdate = true;
  }
  clearMarks() { this.rings.count = 0; }
}
