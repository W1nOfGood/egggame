// Draw-call saver: bakes every static mesh under a group into one mesh per material (in the group's own space).
// Materials stay shared objects, so recolouring (themes, shop items) still works after merging.
import * as THREE from 'three';

const _m = new THREE.Matrix4(), _inv = new THREE.Matrix4();

// Materials that differ only by colour can share one draw call: the colour moves into the vertices.
const signature = (m) => [m.type, m.roughness, m.metalness, m.clearcoat ?? '', m.clearcoatRoughness ?? '', m.sheen ?? '', m.transmission ?? '',
  m.transparent, m.opacity, m.side, m.depthWrite, m.blending, m.map ? m.map.uuid : '', m.emissive ? m.emissive.getHex() : ''].join(',');
const _bakeCache = new Map();

/**
 * Merge static descendant meshes of `group`. `keep(obj)` returning true leaves that object (and its subtree) alone:
 * use it for anything animated, pickable or swapped at runtime. `bake(material)` returning true lets that material's
 * colour be baked into vertex colours (never use it for materials recoloured at runtime).
 */
export function mergeStatic(group, keep = () => false, allowTags = [], bake = () => false) {
  group.updateMatrixWorld(true);
  _inv.copy(group.matrixWorld).invert();
  const buckets = new Map(), victims = [];
  const visit = (o) => {
    if (o !== group && keep(o)) return;
    if (!o.visible) return;
    if (o.isMesh && !o.isInstancedMesh && !o.isSkinnedMesh && !Array.isArray(o.material) && o.material.visible !== false && !o.material.vertexColors && (!o.userData.interact || allowTags.includes(o.userData.interact)) && o.renderOrder === 0) {
      const g = o.geometry;
      if (g.attributes.position && g.attributes.normal && !g.morphAttributes.position) {
        const baked = !o.material.map && bake(o.material);
        const key = `${baked ? 'bake:' + signature(o.material) : o.material.uuid}|${o.castShadow ? 1 : 0}${o.receiveShadow ? 1 : 0}`;
        if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, receive: o.receiveShadow, baked, list: [] });
        buckets.get(key).list.push(o); victims.push(o);
      }
    }
    for (const c of o.children) visit(c);
  };
  visit(group);
  let merged = 0;
  for (const b of buckets.values()) {
    if (b.list.length < 2) continue;
    const parts = b.list.map((o) => {
      let g = o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      if (!g.index) { const n = g.attributes.position.count, idx = new (n > 65535 ? Uint32Array : Uint16Array)(n); for (let i = 0; i < n; i++) idx[i] = i; g.setIndex(new THREE.BufferAttribute(idx, 1)); }
      _m.multiplyMatrices(_inv, o.matrixWorld); g.applyMatrix4(_m);
      if (_m.determinant() < 0) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i]; ix[i] = ix[i + 2]; ix[i + 2] = t; } }
      if (b.baked) g.userData.rgb = o.material.color;
      return g;
    });
    const out = concat(parts, b.baked);
    let mat = b.mat;
    if (b.baked) {
      const k = signature(b.mat);
      if (!_bakeCache.has(k)) { const m = b.mat.clone(); m.vertexColors = true; m.color.set(0xffffff); _bakeCache.set(k, m); }
      mat = _bakeCache.get(k);
    }
    const mesh = new THREE.Mesh(out, mat); mesh.castShadow = b.cast; mesh.receiveShadow = b.receive; mesh.name = 'merged';
    if (group.userData.interact) mesh.userData = { ...group.userData }; // a merged pickable item stays pickable
    group.add(mesh);
    for (const o of b.list) {
      if (!o.parent) continue;
      while (o.children.length) o.parent.attach(o.children[0]); // keep un-merged children where they were
      o.parent.remove(o);
    }
    parts.forEach((p) => p.dispose());
    merged += b.list.length;
  }
  return merged;
}

function concat(parts, withColor = false) {
  let nv = 0, ni = 0;
  for (const p of parts) { nv += p.attributes.position.count; ni += p.index.count; }
  const pos = new Float32Array(nv * 3), nor = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), idx = new (nv > 65535 ? Uint32Array : Uint16Array)(ni);
  const col = withColor ? new Float32Array(nv * 3) : null;
  let v = 0, i = 0;
  for (const p of parts) {
    const P = p.attributes.position, N = p.attributes.normal, U = p.attributes.uv, I = p.index.array;
    for (let k = 0; k < P.count; k++) {
      pos[(v + k) * 3] = P.getX(k); pos[(v + k) * 3 + 1] = P.getY(k); pos[(v + k) * 3 + 2] = P.getZ(k);
      nor[(v + k) * 3] = N.getX(k); nor[(v + k) * 3 + 1] = N.getY(k); nor[(v + k) * 3 + 2] = N.getZ(k);
      uv[(v + k) * 2] = U.getX(k); uv[(v + k) * 2 + 1] = U.getY(k);
    }
    if (col) { const c = p.userData.rgb; for (let k = 0; k < P.count; k++) { col[(v + k) * 3] = c.r; col[(v + k) * 3 + 1] = c.g; col[(v + k) * 3 + 2] = c.b; } }
    for (let k = 0; k < I.length; k++) idx[i + k] = I[k] + v;
    v += P.count; i += I.length;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (col) g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1)); g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}
