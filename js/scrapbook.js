// The scrapbook: daily visits (streak + Noxie's gift) and an album of dish photos kept in IndexedDB on this device.
export const ALBUM_MAX = 60;
const DB = 'cracksizzle-album', STORE = 'photos', DAY = 86400000;
const MILESTONES = { 3: 10, 7: 25, 14: 40, 30: 100 };

const pad = (n) => String(n).padStart(2, '0');
/** Local calendar day as YYYY-MM-DD (never UTC, so the day turns over at the player's midnight). */
export const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const dayNum = (key) => { const [y, m, d] = key.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / DAY); };

/** Visits in a row ending at the latest one. It's a cozy game: one missed day doesn't break the streak. */
export function streakOf(visits) {
  if (!visits.length) return 0;
  const days = [...new Set(visits.map(dayNum))].sort((a, b) => b - a);
  let n = 1;
  for (let i = 1; i < days.length && days[i - 1] - days[i] <= 2; i++) n++;
  return n;
}

/** Record today's visit. Returns the gift the first time each day ({coins, streak, milestone}), otherwise null. */
export function checkIn(s, now = new Date()) {
  s.visits ||= [];
  const key = dayKey(now);
  if (s.visits.includes(key)) return null;
  s.visits.push(key);
  const streak = streakOf(s.visits), milestone = MILESTONES[streak] || 0, coins = 5 + Math.min(streak, 5) + milestone;
  s.coins = (s.coins | 0) + coins;
  return { coins, streak, milestone };
}

export function calendarHTML(visits, now = new Date()) {
  const y = now.getFullYear(), m = now.getMonth(), blanks = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), set = new Set(visits);
  const cells = Array.from({ length: blanks }, () => '<i></i>');
  for (let d = 1; d <= days; d++) {
    const seen = set.has(`${y}-${pad(m + 1)}-${pad(d)}`), today = d === now.getDate();
    cells.push(`<i class="cal-day${seen ? ' seen' : ''}${today ? ' today' : ''}">${seen ? '🐾' : d}</i>`);
  }
  return `<div class="cal-month">${now.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</div><div class="cal-grid">${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((w) => `<b>${w}</b>`).join('')}${cells.join('')}</div>`;
}

// ---------- album ----------
function open() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
async function tx(mode, f) {
  const db = await open();
  return new Promise((res, rej) => {
    const t = db.transaction(STORE, mode), q = f(t.objectStore(STORE));
    t.oncomplete = () => { db.close(); res(q.result); };
    t.onerror = t.onabort = () => { db.close(); rej(t.error); };
  });
}
export const albumAll = async () => (await tx('readonly', (o) => o.getAll())).reverse();
export const albumPut = (p) => tx('readwrite', (o) => o.put(p));
export const albumDelete = (id) => tx('readwrite', (o) => o.delete(id));
export const albumCount = () => tx('readonly', (o) => o.count());

/** Shrink a photo so the album stays small. */
export function toJpeg(url, width = 900) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = width; c.height = Math.round(img.height * width / img.width);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      res(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = rej; img.src = url;
  });
}
