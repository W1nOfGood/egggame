// Layout & tuning constants (world units: the pan is ~2.4 wide).
export const BURNER = { x: -0.6, z: 0.1 };
export const COOKTOP = { x0: -3.0, x1: 1.8, z0: -1.6, z1: 1.9, top: 0.045 };
export const GRATE_TOP = 0.24;
export const COUNTER = { x0: -7.6, x1: 7.6, z0: -3.3, z1: 3.4 };
export const KNOB_POS = { x: 1.25, z: 1.45 };

export const HOME = {
  pan: { x: BURNER.x, z: BURNER.z },
  plate: { x: 3.25, z: 0.55 },
  carton: { x: -4.55, z: -0.75 },
  butter: { x: -4.4, z: 1.75 },
  salt: { x: 2.75, z: -2.15 },
  pepper: { x: 3.7, z: -2.2 },
  spatula: { x: 4.55, z: 2.15 },
};

export const PAN = { floorY: 0.06, innerR: 1.0, rimR: 1.24, height: 0.34, snap: 0.8 };
export const PLATE = { r: 1.15, foodY: 0.075 };

export const ROOM_TEMP = 22;
export const MAX_PAN_TEMP = 250;
export const heatToTarget = (heat) => ROOM_TEMP + heat * 22.8; // heat 0..10 -> up to ~250°C

export function surfaceHeight(x, z) {
  if (x > COOKTOP.x0 && x < COOKTOP.x1 && z > COOKTOP.z0 && z < COOKTOP.z1) return COOKTOP.top;
  return 0;
}
export const clampToCounter = (v) => {
  v.x = Math.min(COUNTER.x1 - 0.6, Math.max(COUNTER.x0 + 0.6, v.x));
  v.z = Math.min(COUNTER.z1 - 0.4, Math.max(COUNTER.z0 + 0.5, v.z));
  return v;
};

export const DONENESS = {
  sunny: { runny: { label: 'Runny yolk', y: [0, 0.45] }, jammy: { label: 'Jammy yolk', y: [0.45, 0.75] } },
  over: { easy: { label: 'Over easy', y: [0, 0.45] }, medium: { label: 'Over medium', y: [0.45, 0.75] }, hard: { label: 'Over hard', y: [0.75, 1.01] } },
  scrambled: { soft: { label: 'Soft & creamy', w: [0.5, 0.78] }, medium: { label: 'Medium curds', w: [0.78, 0.92] }, well: { label: 'Well done', w: [0.92, 1.01] } },
};
export const RECIPE_NAMES = { sunny: 'Sunny-side up', over: 'Over-easy (flipped)', scrambled: 'Scrambled eggs' };
export const RECIPE_ICONS = { sunny: '🍳', over: '🥚', scrambled: '🧀' };
