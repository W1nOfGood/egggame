'use strict';
// Procedural WebAudio: all sounds are synthesized, no asset files needed.
const Snd = (() => {
  const A = { ctx: null, music: 0.5, sfx: 0.8, paused: false };
  let mNext = 0, mStep = 0, timer = 0, lastScrape = 0;

  function init() {
    if (A.ctx) { resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { A.ctx = new AC(); } catch (e) { return; }
    const c = A.ctx;
    A.sfxG = c.createGain(); A.sfxG.gain.value = A.sfx; A.sfxG.connect(c.destination);
    A.musG = c.createGain(); A.musG.gain.value = A.music * 0.45; A.musG.connect(c.destination);
    const d = c.createDelay(1); d.delayTime.value = 0.34;
    const fb = c.createGain(); fb.gain.value = 0.35;
    const wet = c.createGain(); wet.gain.value = 0.4;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1600;
    A.musG.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d); lp.connect(wet); wet.connect(c.destination);
    const len = c.sampleRate * 2;
    const b = c.createBuffer(1, len, c.sampleRate), ch = b.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
    A.noise = b;
    // continuous sizzle + butter bubble beds
    const mk = (type, f, q) => {
      const s = c.createBufferSource(); s.buffer = b; s.loop = true;
      const bp = c.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q;
      const g = c.createGain(); g.gain.value = 0;
      s.connect(bp); bp.connect(g); g.connect(A.sfxG); s.start();
      return { g, bp };
    };
    A.siz = mk('bandpass', 4200, 0.6);
    A.bub = mk('bandpass', 900, 2.2);
    const lfo = c.createOscillator(); lfo.type = 'square'; lfo.frequency.value = 11;
    const lg = c.createGain(); lg.gain.value = 0; A.lg = lg; lfo.connect(lg); lg.connect(A.bub.g.gain); lfo.start();
    timer = setInterval(musicTick, 90);
    resume();
  }
  function resume() { if (A.ctx && A.ctx.state !== 'running' && !A.paused) A.ctx.resume(); }
  function setPaused(p) {
    A.paused = p;
    if (!A.ctx) return;
    if (p) A.ctx.suspend(); else A.ctx.resume();
  }
  function setVol(music, sfx) {
    A.music = music; A.sfx = sfx;
    if (A.ctx) { A.musG.gain.value = music * 0.45; A.sfxG.gain.value = sfx; }
  }

  function noise(dur, f, q, vol, type, attack, fEnd) {
    if (!A.ctx) return;
    const c = A.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = A.noise;
    const fl = c.createBiquadFilter(); fl.type = type || 'bandpass';
    fl.frequency.setValueAtTime(f, t);
    if (fEnd) fl.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    fl.Q.value = q;
    const g = c.createGain(); attack = attack || 0.002;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(A.sfxG);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
  }
  function tone(f, dur, type, vol, delay, fEnd, dest) {
    if (!A.ctx) return;
    const c = A.ctx, t = c.currentTime + (delay || 0);
    const o = c.createOscillator(); o.type = type || 'sine';
    o.frequency.setValueAtTime(f, t);
    if (fEnd) o.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || A.sfxG); o.start(t); o.stop(t + dur + 0.05);
  }

  const CH = [[523.25, 659.25, 783.99], [440, 523.25, 659.25], [349.23, 440, 523.25], [392, 493.88, 587.33]];
  const BASS = [130.81, 110, 87.31, 98];
  const PAT = [0, 1, 2, 1, 0, 2, 1, 2];
  function musicTick() {
    const c = A.ctx;
    if (!c || A.paused || A.music < 0.01 || c.state !== 'running') return;
    const spb = 60 / 92 / 2;
    if (mNext < c.currentTime) mNext = c.currentTime + 0.05;
    while (mNext < c.currentTime + 0.35) {
      const bar = Math.floor(mStep / 8) % 4, st = mStep % 8, t = mNext - c.currentTime;
      if (st === 0) mt(BASS[bar], t, 1.6, 0.5, 'triangle');
      if (st === 4) mt(BASS[bar] * 1.5, t, 0.9, 0.3, 'triangle');
      if (Math.random() < 0.82) {
        const o = Math.random() < 0.15 ? 2 : 1;
        mt(CH[bar][PAT[st]] * o, t, 0.9, 0.32, 'sine');
      }
      mNext += spb; mStep++;
    }
  }
  function mt(f, delay, dur, vol, type) { tone(f, dur, type, vol, delay, null, A.musG); }

  return {
    init, resume, setPaused, setVol, A,
    crack() { noise(0.09, 1800, 1.2, 0.7); noise(0.05, 5000, 2, 0.35, 'highpass'); tone(180, 0.07, 'triangle', 0.25, 0, 90); },
    plop() { tone(320, 0.2, 'sine', 0.35, 0, 110); noise(0.18, 700, 1, 0.25); },
    tick() { tone(950, 0.03, 'square', 0.06); },
    scrape() { const n = performance.now(); if (n - lastScrape < 110) return; lastScrape = n; noise(0.13, 2600, 1.5, 0.2); },
    clink() { tone(1800, 0.4, 'sine', 0.2); tone(2700, 0.3, 'sine', 0.1, 0.02); },
    shake() { noise(0.05, 6500, 3, 0.1, 'highpass'); },
    whoosh() { noise(0.35, 500, 0.8, 0.3, 'bandpass', 0.1, 2600); },
    splat() { noise(0.25, 900, 0.8, 0.4, 'lowpass', 0.01, 300); tone(240, 0.15, 'sine', 0.2, 0, 90); },
    pop() { tone(700, 0.06, 'sine', 0.08, 0, 1200); },
    sad() { tone(300, 0.5, 'sawtooth', 0.12, 0, 120); },
    ding(stars) { [523.25, 659.25, 783.99, 1046.5].slice(0, 2 + stars).forEach((f, i) => tone(f, 0.5, 'triangle', 0.22, i * 0.11)); },
    crackle(vol) { noise(0.03, 3000 + Math.random() * 3000, 4, vol, 'bandpass'); },
    // continuous beds: sizzle (0..1), bubbling (0..1), brightness from pan temp
    beds(siz, bub, temp) {
      if (!A.ctx) return;
      const t = A.ctx.currentTime;
      A.siz.g.gain.setTargetAtTime(siz * 0.55, t, 0.12);
      A.siz.bp.frequency.setTargetAtTime(2200 + temp * 11, t, 0.2);
      A.bub.g.gain.setTargetAtTime(bub * 0.2, t, 0.15); A.lg.gain.setTargetAtTime(bub * 0.18, t, 0.15);
    }
  };
})();
