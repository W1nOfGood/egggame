// The cozy shop: cosmetic-only items bought with tips. equip() restyles the pan, plate, spatula and Noxie.
import * as THREE from 'three';

export const SHOP_CATS = [['pan', '🍳 Pans'], ['plate', '🍽️ Plates'], ['spat', '🥄 Spatulas'], ['hat', '🦇 Noxie outfits'], ['ring', '💗 Egg rings'], ['cushion', '🛋️ Cozy extras']];

export const SHOP = [
  { id: 'pan-mint', cat: 'pan', name: 'Mint enamel pan', icon: '🩵', price: 0, desc: 'The trusty original.' },
  { id: 'pan-plum', cat: 'pan', name: 'Midnight plum pan', icon: '💜', price: 120, desc: 'Purple enamel with a pink skull-bow charm.' },
  { id: 'pan-pastel', cat: 'pan', name: 'Strawberry milk pan', icon: '🩷', price: 80, desc: 'Soft pink and very sweet.' },
  { id: 'pan-copper', cat: 'pan', name: 'Copper pan', icon: '🧡', price: 90, desc: 'Shiny, warm and fancy.' },
  { id: 'pan-iron', cat: 'pan', name: 'Cast-iron pan', icon: '🖤', price: 60, desc: 'Heavy, dark and classic.' },
  { id: 'plate-pink', cat: 'plate', name: 'Pink-band plate', icon: '🍽️', price: 0, desc: 'Cream china with pink rings.' },
  { id: 'plate-lavender', cat: 'plate', name: 'Lavender plate', icon: '💐', price: 40, desc: 'Lilac rings on cream china.' },
  { id: 'plate-night', cat: 'plate', name: 'Starry night plate', icon: '🌌', price: 60, desc: 'Deep plum glaze with a pink rim.' },
  { id: 'plate-gold', cat: 'plate', name: 'Golden rim plate', icon: '✨', price: 70, desc: 'For very important eggs.' },
  { id: 'spat-mint', cat: 'spat', name: 'Mint spatula', icon: '🥄', price: 0, desc: 'Does the job.' },
  { id: 'spat-pink', cat: 'spat', name: 'Bubblegum spatula', icon: '🍬', price: 30, desc: 'Pink and cheerful.' },
  { id: 'spat-bat', cat: 'spat', name: 'Bat-wing spatula', icon: '🦇', price: 50, desc: 'Purple, with tiny bat wings.' },
  { id: 'hat-none', cat: 'hat', name: 'Just Noxie', icon: '🐈‍⬛', price: 0, desc: 'Cute as is.' },
  { id: 'hat-chef', cat: 'hat', name: 'Chef hat', icon: '👨‍🍳', price: 40, desc: 'Noxie, head chef.' },
  { id: 'hat-witch', cat: 'hat', name: 'Witch hat', icon: '🧙', price: 60, desc: 'A pointy plum hat with a pink band.' },
  { id: 'hat-crown', cat: 'hat', name: 'Tiny crown', icon: '👑', price: 80, desc: 'Royalty of the kitchen.' },
  { id: 'ring-none', cat: 'ring', name: 'Round eggs', icon: '🍳', price: 0, desc: 'Eggs spread naturally.' },
  { id: 'ring-heart', cat: 'ring', name: 'Heart egg ring', icon: '💗', price: 100, desc: 'Fried eggs come out heart-shaped.' },
  { id: 'cushion-none', cat: 'cushion', name: 'No cushion', icon: '▫️', price: 0, desc: 'Noxie sits on the counter.' },
  { id: 'cushion-pink', cat: 'cushion', name: 'Noxie\'s cushion', icon: '🛏️', price: 40, desc: 'A puffy pink cushion for naps.' },
];
export const DEFAULT_EQUIP = { pan: 'pan-mint', plate: 'plate-pink', spat: 'spat-mint', hat: 'hat-none', ring: 'ring-none', cushion: 'cushion-none' };
export const itemById = (id) => SHOP.find((i) => i.id === id);

const PAN = {
  'pan-mint': { color: '#86cfc6', metal: 0, rough: 0.32, handle: null },
  'pan-plum': { color: '#5b3f86', metal: 0, rough: 0.28, handle: '#ff8fc8', charm: true },
  'pan-pastel': { color: '#f7b6cf', metal: 0, rough: 0.3, handle: '#fff4e6' },
  'pan-copper': { color: '#d08a5a', metal: 1, rough: 0.28, handle: null },
  'pan-iron': { color: '#2c2c33', metal: 0.5, rough: 0.6, handle: '#3a2a22' },
};
const PLATE = {
  'plate-pink': { body: null, band: '#f6b8c4' },
  'plate-lavender': { body: null, band: '#b48cff' },
  'plate-night': { body: '#3d2463', band: '#ff8fc8' },
  'plate-gold': { body: null, band: '#e8c27a', metal: true },
};
const SPAT = { 'spat-mint': '#7fd1b9', 'spat-pink': '#ff8fc8', 'spat-bat': '#6b4c9a' };

/** Apply every equipped item. world = { mats, props, decor }. */
export function equipAll(world, equip) {
  const e = { ...DEFAULT_EQUIP, ...equip }, { mats, props, decor } = world;
  // ---- pan
  const p = PAN[e.pan] || PAN['pan-mint'];
  mats.panOuter.color.set(p.color); mats.panOuter.metalness = p.metal; mats.panOuter.roughness = p.rough;
  const pan = props.pan;
  if (!pan.userData.grip) pan.traverse((o) => { if (o.isMesh && o.material === mats.wood) pan.userData.grip = o; });
  const grip = pan.userData.grip;
  if (grip) {
    grip.userData.woodMat ||= grip.material;
    grip.material = p.handle ? (pan.userData.handleMat ||= new THREE.MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 1 })) : grip.userData.woodMat;
    if (p.handle) grip.material.color.set(p.handle);
    if (!pan.userData.charm) pan.userData.charm = makeSkullCharm(grip.parent);
    pan.userData.charm.visible = !!p.charm;
  }
  // ---- plate
  const pl = PLATE[e.plate] || PLATE['plate-pink'], plate = props.plate;
  if (!plate.userData.styled) {
    plate.userData.styled = true;
    plate.userData.bandMat = new THREE.MeshPhysicalMaterial({ roughness: 0.25, clearcoat: 1 });
    plate.userData.bodyMat = new THREE.MeshPhysicalMaterial({ roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
    plate.children.forEach((c) => { if (c.isMesh && c.geometry.type === 'TorusGeometry') c.material = plate.userData.bandMat; if (c.isMesh && c.geometry.type === 'LatheGeometry') plate.userData.body = c; });
  }
  plate.userData.bandMat.color.set(pl.band); plate.userData.bandMat.metalness = pl.metal ? 1 : 0; plate.userData.bandMat.roughness = pl.metal ? 0.25 : 0.3;
  if (plate.userData.body) {
    plate.userData.body.material = pl.body ? plate.userData.bodyMat : mats.ceramic;
    if (pl.body) plate.userData.bodyMat.color.set(pl.body);
  }
  // ---- spatula
  mats.spatulaHandle.color.set(SPAT[e.spat] || SPAT['spat-mint']);
  const sp = props.spatula;
  if (!sp.userData.wings) sp.userData.wings = makeSpatWings(sp);
  sp.userData.wings.visible = e.spat === 'spat-bat';
  // ---- Noxie
  if (decor) { decor.setHat(e.hat); decor.setCushion(e.cushion === 'cushion-pink'); }
}

function makeSkullCharm(parent) {
  const g = new THREE.Group(); g.position.set(1.25, 0.33, 0); parent.add(g);
  const bone = new THREE.MeshPhysicalMaterial({ color: '#fff4e6', roughness: 0.4, clearcoat: 0.5 });
  const pink = new THREE.MeshPhysicalMaterial({ color: '#ff8fc8', roughness: 0.35, clearcoat: 0.8 });
  const dark = new THREE.MeshStandardMaterial({ color: '#241a2e' });
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), bone); skull.castShadow = true; g.add(skull);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.045, 0.08), bone); jaw.position.set(0, -0.07, 0); g.add(jaw);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 6), dark); eye.position.set(0.075, 0.0, s * 0.035); g.add(eye);
    const loop = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.08, 10), pink); loop.rotation.x = s * Math.PI / 2; loop.position.set(-0.02, 0.08, s * 0.045); g.add(loop);
  }
  g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), pink), {}).translateY(0.08).translateX(-0.02));
  return g;
}

function makeSpatWings(sp) {
  const g = new THREE.Group(); sp.add(g);
  const sh = new THREE.Shape();
  sh.moveTo(0, 0); sh.quadraticCurveTo(0.12, 0.14, 0.26, 0.15); sh.quadraticCurveTo(0.22, 0.08, 0.26, 0.03);
  sh.quadraticCurveTo(0.18, 0.03, 0.17, -0.03); sh.quadraticCurveTo(0.1, 0, 0.08, -0.05); sh.quadraticCurveTo(0.05, -0.01, 0, 0);
  const geo = new THREE.ShapeGeometry(sh, 8);
  const mat = new THREE.MeshPhysicalMaterial({ color: '#6b4c9a', roughness: 0.4, sheen: 0.6, sheenColor: new THREE.Color('#ff8fc8'), side: THREE.DoubleSide });
  for (const s of [-1, 1]) { const w = new THREE.Mesh(geo, mat); w.scale.set(s * 1.2, 1.2, 1); w.position.set(s * 0.07, 0.62, 1.48); w.rotation.set(-0.42, 0, 0); w.castShadow = true; g.add(w); }
  return g;
}
