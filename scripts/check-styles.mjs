/**
 * Fails the build if a class used in a component has no CSS rule.
 *
 * Written after a stylesheet deduplication silently dropped rules for the
 * commitments list, the gallery hover wash and the entire closing form
 * band. Every one of those shipped looking broken. A class with no rule is
 * almost always a mistake, and it is cheap to check.
 *
 * Classes that legitimately have no styling go in ALLOWED.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ALLOWED = new Set([
  'cls',          // a variable in Header.jsx, not a class
  'ctaS-body',    // bare wrappers - children carry the styling
  'faq', 'tst',
  'undefined',    // `className={cond ? 'x' : undefined}`
  'long',         // PageHero prop inside className expression
  'active',       // RoomTour state inside className expression
  'locpg',        // section hook; children (.locpg-frame) carry the styling
  'abpg-block',   // section hook; children (.abpg-grid) carry the styling
  'onClass', 'marked', 'on', 'menuClass',
  'playing',      // HeroVideo state inside className expression
  'introClass',   // AreaPage intro section class chosen by area.seo

])

const css = readFileSync('src/styles/global.css', 'utf8') +
            readFileSync('src/styles/tokens.css', 'utf8')
const defined = new Set([...css.matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]))

const dirs = ['src/components', 'src/layouts', 'src/pages']
const used = new Map()
for (const dir of dirs) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.jsx'))) {
    const src = readFileSync(join(dir, f), 'utf8')
    for (const m of src.matchAll(/className=["`{]([^"`}]*)/g)) {
      for (const c of m[1].match(/[a-zA-Z][\w-]*/g) || []) {
        if (!used.has(c)) used.set(c, new Set())
        used.get(c).add(f)
      }
    }
  }
}

const missing = [...used.entries()].filter(([c]) => !defined.has(c) && !ALLOWED.has(c))

if (missing.length) {
  console.error(`\n✗ ${missing.length} class(es) used in components have no CSS rule:\n`)
  for (const [c, files] of missing) console.error(`   .${c.padEnd(20)} ${[...files].join(', ')}`)
  console.error('\n  Add the rule, or add the name to ALLOWED in scripts/check-styles.mjs\n')
  process.exit(1)
}
console.log(`[check-styles] ${used.size} classes used, all styled at the base breakpoint`)

/**
 * Declaration invariants.
 *
 * Checking that a class has *some* rule is not enough - an over-wide edit
 * can leave a class present but gut what made it work. Every entry here is
 * a property that shipped missing at least once, each time looking broken
 * on the live page.
 */
const INVARIANTS = [
  ['.wk-tint',        'mix-blend-mode', 'gallery hover wash'],
  ['.wk-lift',        'mix-blend-mode', 'gallery shadow lift'],
  ['.wk-img',         'isolation',      'blend containment'],
  ['.qform-tile',     'background-image','closing band tile field'],
  ['.qform-band',     'background',     'closing band colour'],
  ['.ab-points svg',  'width',          'commitments tick size'],
  ['.wk-img picture', 'position',       'gallery image sizing'],
  ['.svcx-bg',        'opacity',        'service card hover background'],
  ['.hdr.is-solid',   'background',     'opaque header on scroll'],
  ['.sel-list',       'position',       'dropdown anchoring'],
  ['.hero-media video','object-fit',     'hero video sizing'],
]

const failures = []

// The hero is white type. --graphite is a light bone in this theme, so the
// last .hero rule must keep a dark fallback while the LCP <picture> paints.
const heroRules = [...css.matchAll(/(?<![\w.-])\.hero\s*\{([^}]*)\}/g)].map((m) => m[1])
if (heroRules.length && !heroRules[heroRules.length - 1].includes('#1c1a18')) {
  failures.push('the last .hero rule has no dark fallback  (white hero type would be invisible)')
}
for (const [sel, prop, what] of INVARIANTS) {
  const re = new RegExp(sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\{([^}]*)\\}', 'g')
  const bodies = [...css.matchAll(re)].map((m) => m[1])
  if (!bodies.some((b) => b.includes(prop + ':'))) failures.push(`${sel} is missing ${prop}  (${what})`)
}

if (failures.length) {
  console.error(`\n✗ ${failures.length} style invariant(s) broken:\n`)
  for (const f of failures) console.error('   ' + f)
  console.error('')
  process.exit(1)
}
console.log(`[check-styles] ${INVARIANTS.length} invariants hold`)
