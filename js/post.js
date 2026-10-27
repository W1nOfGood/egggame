// Small, iPad-friendly post-processing: the scene renders into an HDR (half-float, 4x MSAA) target, a soft
// bloom is built from 3 blurred mip levels at 1/2, 1/4 and 1/8 resolution, and one final pass adds the bloom,
// a warm colour grade and a vignette, then tone-maps to the screen. 8 cheap full-screen passes in total.
import * as THREE from 'three';

const VERT = /* glsl */`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const BRIGHT = /* glsl */`
  uniform sampler2D tex; uniform float threshold; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tex, vUv).rgb;
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float soft = clamp(l - threshold + 0.35, 0.0, 0.7); soft = soft * soft / 2.8;
    float w = max(soft, l - threshold) / max(l, 1e-4);
    gl_FragColor = vec4(min(c * w, vec3(12.0)), 1.0);
  }`;

// 9-tap gaussian folded into 5 bilinear fetches
const BLUR = /* glsl */`
  uniform sampler2D tex; uniform vec2 dir; varying vec2 vUv;
  void main() {
    vec2 o1 = dir * 1.3846153846, o2 = dir * 3.2307692308;
    vec3 c = texture2D(tex, vUv).rgb * 0.2270270270;
    c += texture2D(tex, vUv + o1).rgb * 0.3162162162; c += texture2D(tex, vUv - o1).rgb * 0.3162162162;
    c += texture2D(tex, vUv + o2).rgb * 0.0702702703; c += texture2D(tex, vUv - o2).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`;

const COMPOSITE = /* glsl */`
  uniform sampler2D tScene, tB0, tB1, tB2; uniform float bloom, vignette; uniform vec3 grade; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tScene, vUv).rgb;
    vec3 b = texture2D(tB0, vUv).rgb * 0.55 + texture2D(tB1, vUv).rgb * 0.4 + texture2D(tB2, vUv).rgb * 0.35;
    c = (c + b * bloom) * grade;
    float d = length((vUv - 0.5) * vec2(1.15, 1.0));
    c *= mix(1.0, smoothstep(0.92, 0.28, d), vignette);
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

export class Post {
  constructor(renderer) {
    this.r = renderer;
    const opt = { type: THREE.HalfFloatType, depthBuffer: false };
    this.scene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    this.levels = [0, 1, 2].map(() => [new THREE.WebGLRenderTarget(1, 1, opt), new THREE.WebGLRenderTarget(1, 1, opt)]);
    const sm = (frag, uniforms, toneMapped = false) => new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false, toneMapped });
    this.bright = sm(BRIGHT, { tex: { value: null }, threshold: { value: 1 } });
    this.blur = sm(BLUR, { tex: { value: null }, dir: { value: new THREE.Vector2() } });
    this.comp = sm(COMPOSITE, {
      tScene: { value: this.scene.texture }, tB0: { value: this.levels[0][0].texture }, tB1: { value: this.levels[1][0].texture }, tB2: { value: this.levels[2][0].texture },
      bloom: { value: 0.5 }, vignette: { value: 0.3 }, grade: { value: new THREE.Color(1, 1, 1) },
    }, true);
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
    this.quad = new THREE.Mesh(tri, this.bright); this.quad.frustumCulled = false;
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.size = new THREE.Vector2();
  }
  set({ bloom, threshold, vignette, grade }) {
    const u = this.comp.uniforms;
    if (bloom !== undefined) u.bloom.value = bloom;
    if (vignette !== undefined) u.vignette.value = vignette;
    if (grade) u.grade.value.copy(grade);
    if (threshold !== undefined) this.bright.uniforms.threshold.value = threshold;
  }
  setSize() {
    this.r.getDrawingBufferSize(this.size);
    const w = Math.max(1, this.size.x), h = Math.max(1, this.size.y);
    this.scene.setSize(w, h);
    this.levels.forEach((pair, i) => { const d = 2 << i; pair.forEach((rt) => rt.setSize(Math.max(1, Math.round(w / d)), Math.max(1, Math.round(h / d)))); });
  }
  _pass(mat, target) { this.quad.material = mat; this.r.setRenderTarget(target); this.r.render(this.quad, this.cam); }
  render(scene, camera) {
    const r = this.r;
    r.getDrawingBufferSize(this.size);
    if (this.size.x !== this.scene.width || this.size.y !== this.scene.height) this.setSize();
    r.setRenderTarget(this.scene); r.render(scene, camera);
    // bright pass straight into the half-res level, then blur each level (downsampling as we go)
    this.bright.uniforms.tex.value = this.scene.texture; this._pass(this.bright, this.levels[0][0]);
    let src = this.levels[0][0];
    for (let i = 0; i < 3; i++) {
      const [A, B] = this.levels[i];
      const u = this.blur.uniforms;
      u.tex.value = src.texture; u.dir.value.set(1 / src.width, 0); this._pass(this.blur, B);
      u.tex.value = B.texture; u.dir.value.set(0, 1 / B.height); this._pass(this.blur, A);
      src = A;
    }
    this.quad.material = this.comp; r.setRenderTarget(null); r.render(this.quad, this.cam);
  }
  dispose() { this.scene.dispose(); this.levels.flat().forEach((t) => t.dispose()); }
}
