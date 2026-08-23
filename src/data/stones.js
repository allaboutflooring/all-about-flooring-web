/**
 * ─────────────────────────────────────────────────────────────
 *  STONE CATALOGUE
 *
 *  Each entry drives a procedurally generated marble swatch (see
 *  src/components/StoneSwatch.jsx) so the strip reads correctly before
 *  real slab photography exists.
 *
 *  When photos arrive, add `img` (and `alt`) to an entry - the swatch
 *  component uses the photo and skips generation entirely. Nothing else
 *  needs to change.
 *
 *  Tuning a generated stone:
 *    base    2-3 hex tones, lightest first - the body of the slab
 *    vein    colour of the primary veining
 *    vein2   secondary, finer veining (optional)
 *    freq    turbulence baseFrequency "x y". Lower x = longer, lazier
 *            veins. y is usually 2-3× x so veins run diagonally.
 *    table   feFuncA tableValues. The position of the 1 sets where in
 *            the noise range a vein appears; narrower spike = finer vein.
 *    seed    any integer - changes the pattern, not its character.
 * ─────────────────────────────────────────────────────────────
 */

export const STONES = [
  {
    key: 'calacatta-oro',
    name: 'Calacatta Oro',
    finish: 'Polished · 1200×600',
    use: 'Kitchen worktops, feature walls',
    isNew: true,
    base: ['#F4F2ED', '#E9E6DE'],
    vein: '#B9A07C',
    vein2: '#C9BFAE',
    freq: '0.006 0.017',
    table: '0 0 0 0.92 0.1 0 0',
    seed: 12,
  },
  {
    key: 'carrara-bianco',
    name: 'Carrara Bianco',
    finish: 'Honed · 600×600',
    use: 'Bathroom floors and walls',
    isNew: false,
    base: ['#F1F1EF', '#E2E3E1'],
    vein: '#9BA0A2',
    vein2: '#C2C6C7',
    freq: '0.011 0.026',
    table: '0 0 0.05 0.7 0.05 0 0',
    seed: 41,
  },
  {
    key: 'statuario-venato',
    name: 'Statuario Venato',
    finish: 'Polished · 1600×800',
    use: 'Large-format feature floors',
    isNew: true,
    base: ['#F7F6F3', '#EBEAE6'],
    vein: '#6E7276',
    vein2: '#B4B7B8',
    freq: '0.005 0.014',
    table: '0 0 0 0.95 0.08 0 0',
    seed: 73,
  },
  {
    key: 'nero-marquina',
    name: 'Nero Marquina',
    finish: 'Polished · 600×1200',
    use: 'Bathroom accents, splashbacks',
    isNew: true,
    base: ['#26241F', '#141311'],
    vein: '#E8E4D8',
    vein2: '#7C776C',
    freq: '0.007 0.019',
    table: '0 0 0 0.85 0.06 0 0',
    seed: 5,
  },
  {
    key: 'emperador-dark',
    name: 'Emperador Dark',
    finish: 'Honed · 600×600',
    use: 'Hallways, wet rooms',
    isNew: false,
    base: ['#5C4130', '#3D2B1F'],
    vein: '#C7A583',
    vein2: '#8A6B4E',
    freq: '0.012 0.03',
    table: '0 0 0.08 0.75 0.08 0 0',
    seed: 28,
  },
  {
    key: 'crema-marfil',
    name: 'Crema Marfil',
    finish: 'Polished · 800×800',
    use: 'Open-plan living floors',
    isNew: false,
    base: ['#EFE3CE', '#E2D3B9'],
    vein: '#BFA77E',
    vein2: '#D6C6AA',
    freq: '0.009 0.022',
    table: '0 0 0.06 0.6 0.06 0 0',
    seed: 60,
  },
  {
    key: 'travertino-navona',
    name: 'Travertino Navona',
    finish: 'Matt R10 · 600×1200',
    use: 'Bathrooms, outdoor-feel spaces',
    isNew: false,
    base: ['#E8DCC6', '#DCCDB2'],
    vein: '#C4B294',
    vein2: '#D2C3A6',
    freq: '0.02 0.006',
    table: '0 0.1 0.35 0.55 0.35 0.1 0',
    seed: 33,
  },
  {
    key: 'fusion-grey',
    name: 'Fusion Grey',
    finish: 'Polished · 1200×600',
    use: 'Statement kitchen islands',
    isNew: true,
    base: ['#9C948B', '#6E6660'],
    vein: '#8E4A2E',
    vein2: '#D8D2C8',
    freq: '0.006 0.02',
    table: '0 0 0 0.9 0.12 0 0',
    seed: 91,
  },
  {
    key: 'pietra-grey',
    name: 'Pietra Grey',
    finish: 'Honed · 600×600',
    use: 'Utility, entryways, stair treads',
    isNew: false,
    base: ['#4A4E52', '#33363A'],
    vein: '#CFD3D6',
    vein2: '#787D82',
    freq: '0.008 0.021',
    table: '0 0 0 0.8 0.06 0 0',
    seed: 17,
  },
]
