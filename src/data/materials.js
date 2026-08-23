/**
 * Material library driving the hero floor render + swatch rail.
 * `spec` is what shows in the readout - real trade specs, because
 * that is what a customer choosing a floor actually compares.
 */
export const MATERIALS = {
  oak: {
    label: 'White Oak',
    sub: '5″ plank',
    type: 'plank',
    w: 172,
    h: 34,
    tones: ['#C79A62', '#BE9058', '#CFA36B', '#B98A53', '#C5945C'],
    grain: 'rgba(90,58,25,.30)',
    spec: {
      material: 'White oak, rift & quartered',
      format: '5″ plank · straight lay',
      finish: 'Matte hardwax oil',
      best: 'Living, halls, bedrooms',
    },
  },
  walnut: {
    label: 'Walnut',
    sub: 'Herringbone',
    type: 'herring',
    w: 112,
    h: 30,
    tones: ['#6B462E', '#5E3C26', '#775034', '#644128', '#704A30'],
    grain: 'rgba(30,16,6,.36)',
    spec: {
      material: 'American black walnut',
      format: '3″ × 12″ · 45° herringbone',
      finish: 'Satin polyurethane',
      best: 'Feature rooms, entryways',
    },
  },
  smoked: {
    label: 'Smoked Oak',
    sub: 'Chevron',
    type: 'chevron',
    w: 120,
    h: 32,
    tones: ['#8A6136', '#7C5730', '#96693C', '#835B33', '#8F6438'],
    grain: 'rgba(48,30,10,.32)',
    spec: {
      material: 'Smoked European oak',
      format: 'Chevron · 45° mitre',
      finish: 'Brushed & UV oiled',
      best: 'Long halls, open plan',
    },
  },
  porcelain: {
    label: 'Porcelain',
    sub: '1200×600',
    type: 'tile',
    w: 216,
    h: 108,
    tones: ['#D5D2CB', '#CFCCC4', '#D9D6CF', '#CAC7BF', '#D2CFC7'],
    grain: 'rgba(90,88,82,.18)',
    spec: {
      material: 'Rectified porcelain',
      format: '1200 × 600 · 1/3 offset',
      finish: 'Honed, R10 slip rating',
      best: 'Kitchens, bathrooms, utility',
    },
  },
}

export const MATERIAL_ORDER = ['oak', 'walnut', 'smoked', 'porcelain']
