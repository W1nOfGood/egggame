// Procedural Web Audio: every sound is synthesized, so there are no asset files to load.
let ctx = null, master, sfxBus, musicBus, noiseBuf;
let sizzle = null, bubbleTimer = 0, musicTimer = null, musicStep = 0, musicNextTime = 0;
const vol = { music: 0.45, sfx: 0.8 };

function makeNoise() {
  const len = ctx.sampleRate * 2;
  const b = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function env(g, t, a, peak, dcy) {
  g.gain.cancelScheduledValues(t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + dcy);
}

function noiseHit({ freq = 2000, q = 1, type = 'bandpass', peak = 0.5, attack = 0.002, decay = 0.08, when = 0, rate = 1 }) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf; src.playbackRate.value = rate;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  src.connect(f); f.connect(g); g.connect(sfxBus);
  env(g, t, attack, peak, decay);
  src.start(t, Math.random() * 1.5); src.stop(t + attack + decay + 0.05);
}

function tone({ freq = 440, type = 'sine', peak = 0.3, attack = 0.005, decay = 0.3, when = 0, slide = 0, bus = null }) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), t + attack + decay);
  const g = ctx.createGain();
  o.connect(g); g.connect(bus || sfxBus);
  env(g, t, attack, peak, decay);
  o.start(t); o.stop(t + attack + decay + 0.05);
}

export const audio = {
  get ready() { return !!ctx; },
  init() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 1;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    master.connect(comp); comp.connect(ctx.destination);
    sfxBus = ctx.createGain(); sfxBus.gain.value = vol.sfx; sfxBus.connect(master);
    musicBus = ctx.createGain(); musicBus.gain.value = vol.music * 0.5; musicBus.connect(master);
    noiseBuf = makeNoise();
    // Continuous sizzle bed: two filtered noise layers + random crackle.
    const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2500;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 5200; bp.Q.value = 0.6;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(hp); hp.connect(bp); bp.connect(g); g.connect(sfxBus);
    src.start();
    sizzle = { g, bp, level: 0, butter: 0 };
  },
  resume() { if (ctx && ctx.state !== 'running') ctx.resume(); },
  suspend() { if (ctx && ctx.state === 'running') ctx.suspend(); },
  setVolumes(music, sfx) {
    vol.music = music; vol.sfx = sfx;
    if (!ctx) return;
    sfxBus.gain.setTargetAtTime(sfx, ctx.currentTime, 0.05);
    musicBus.gain.setTargetAtTime(music * 0.5, ctx.currentTime, 0.05);
  },

  /** level: 0..1 sizzle intensity (heat x wet food), butter: 0..1 bubbling */
  setSizzle(level, butter, dt) {
    if (!sizzle) return;
    sizzle.level = level; sizzle.butter = butter;
    const t = ctx.currentTime;
    sizzle.g.gain.setTargetAtTime(Math.min(0.32, level * 0.3), t, 0.25);
    sizzle.bp.frequency.setTargetAtTime(3800 + level * 3500, t, 0.3);
    // Pops & crackles scale with heat
    if (level > 0.05 && Math.random() < level * dt * 22) {
      noiseHit({ freq: 3000 + Math.random() * 5000, q: 2, peak: 0.08 + level * 0.25, decay: 0.012 + Math.random() * 0.02 });
    }
    bubbleTimer -= dt;
    if (butter > 0.05 && bubbleTimer <= 0) {
      bubbleTimer = 0.03 + Math.random() * (0.25 / (butter + 0.2));
      tone({ freq: 500 + Math.random() * 700, type: 'sine', peak: 0.04 * butter, attack: 0.002, decay: 0.05, slide: 1.8 });
    }
  },

  crack() {
    noiseHit({ freq: 1800, q: 1.5, peak: 0.9, decay: 0.05 });
    noiseHit({ freq: 3500, q: 3, peak: 0.6, decay: 0.03, when: 0.025 });
    noiseHit({ freq: 900, q: 2, peak: 0.5, decay: 0.07, when: 0.05 });
    tone({ freq: 220, type: 'triangle', peak: 0.25, decay: 0.08, slide: 0.5 });
  },
  shellPull() { noiseHit({ freq: 2400, q: 4, peak: 0.25, decay: 0.12 }); },
  plop() {
    tone({ freq: 380, type: 'sine', peak: 0.45, attack: 0.003, decay: 0.16, slide: 0.45 });
    noiseHit({ freq: 1200, q: 0.8, peak: 0.35, decay: 0.15, when: 0.02 });
    // initial hiss burst into a hot pan
    if (sizzle && sizzle.level > 0.15) noiseHit({ freq: 6000, type: 'highpass', peak: 0.35 * sizzle.level, decay: 0.7, attack: 0.02 });
  },
  butterDrop() { tone({ freq: 260, type: 'sine', peak: 0.3, decay: 0.12, slide: 0.6 }); },
  scrape(intensity) {
    if (Math.random() < 0.5) noiseHit({ freq: 1400 + Math.random() * 1600, q: 6, peak: 0.12 * intensity, decay: 0.05 });
  },
  clink() {
    tone({ freq: 2350, type: 'sine', peak: 0.22, decay: 0.5 });
    tone({ freq: 3510, type: 'sine', peak: 0.12, decay: 0.35 });
    tone({ freq: 5120, type: 'sine', peak: 0.05, decay: 0.2 });
  },
  thud() { tone({ freq: 140, type: 'sine', peak: 0.4, decay: 0.12, slide: 0.6 }); noiseHit({ freq: 500, q: 1, peak: 0.2, decay: 0.05 }); },
  shake() {
    for (let i = 0; i < 4; i++) noiseHit({ freq: 6500 + Math.random() * 2000, q: 1.5, peak: 0.18, decay: 0.03, when: i * 0.018 });
  },
  flipWhoosh() { noiseHit({ freq: 700, q: 0.7, peak: 0.35, attack: 0.08, decay: 0.2, rate: 0.6 }); },
  knob() { noiseHit({ freq: 3000, q: 8, peak: 0.12, decay: 0.015 }); },
  pop() { tone({ freq: 660, type: 'sine', peak: 0.22, decay: 0.09, slide: 1.6 }); },
  pick() { tone({ freq: 520, type: 'triangle', peak: 0.12, decay: 0.07, slide: 1.3 }); },
  ding() {
    [1046.5, 1318.5, 1568].forEach((f, i) => tone({ freq: f, type: 'sine', peak: 0.22, decay: 0.7, when: i * 0.09 }));
  },
  fail() { tone({ freq: 330, type: 'triangle', peak: 0.2, decay: 0.25, slide: 0.7 }); tone({ freq: 247, type: 'triangle', peak: 0.2, decay: 0.35, when: 0.18, slide: 0.7 }); },
  trash() { noiseHit({ freq: 800, q: 0.7, peak: 0.4, decay: 0.25 }); tone({ freq: 160, type: 'sine', peak: 0.3, decay: 0.2, when: 0.1, slide: 0.6 }); },
  tear() { noiseHit({ freq: 1200, q: 3, peak: 0.4, decay: 0.15, rate: 0.7 }); },

  // Gentle generative lo-fi music: pad chords + plucky pentatonic melody.
  startMusic() {
    if (!ctx || musicTimer) return;
    musicStep = 0; musicNextTime = ctx.currentTime + 0.1;
    musicTimer = setInterval(scheduleMusic, 60);
  },
  stopMusic() { clearInterval(musicTimer); musicTimer = null; },
};

const BPM = 84, STEP = 60 / BPM / 2; // eighth notes
const chords = [
  [261.63, 329.63, 392.0, 493.88], // Cmaj7
  [220.0, 261.63, 329.63, 392.0],  // Am7
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [196.0, 246.94, 293.66, 349.23], // G7
];
const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

function pluck(freq, t, peak) {
  const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = freq;
  const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 2;
  const g = ctx.createGain(); const g2 = ctx.createGain(); g2.gain.value = 0.3;
  o.connect(g); o2.connect(g2); g2.connect(g); g.connect(musicBus);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
  o.start(t); o2.start(t); o.stop(t + 1); o2.stop(t + 1);
}

function pad(freqs, t, dur) {
  for (const f of freqs) {
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f / 2; o.detune.value = (Math.random() - 0.5) * 8;
    const g = ctx.createGain();
    o.connect(g); g.connect(musicBus);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.035, t + 0.6);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.1);
  }
}

function scheduleMusic() {
  while (musicNextTime < ctx.currentTime + 0.25) {
    const t = musicNextTime;
    const bar = Math.floor(musicStep / 8) % 4;
    const s = musicStep % 8;
    if (s === 0) pad(chords[bar], t, STEP * 8 + 0.4);
    if (s === 0 || s === 4) pluck(chords[bar][0] / 2, t, 0.09); // soft bass
    const pattern = (musicStep * 7 + bar * 3) % 11;
    if ((s % 2 === 0 && pattern < 6) || (s % 2 === 1 && pattern < 2)) {
      const note = scale[(musicStep * 5 + bar * 2 + (pattern % 3)) % scale.length];
      pluck(note, t + (s % 2 ? 0.02 : 0), 0.07);
    }
    musicStep++; musicNextTime += STEP;
  }
}
