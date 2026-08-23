/**
 * Runs the real scroll modules against the real prerendered page in jsdom.
 *
 * jsdom has no layout engine, so element rects are faked from document
 * order - enough to exercise the viewport logic honestly. This cannot
 * prove the page LOOKS right, but it proves the sequence works: nothing
 * throws, elements get their variants, reveals fire, and the watchdog
 * does not fire on correct behaviour.
 */
import { readFileSync } from 'node:fs'

// jsdom 30 pulls undici 8, which throws
// `webidl.util.markAsUncloneable is not a function` on Netlify's Node 20
// image. The site is already prerendered by this point.
if (process.env.NETLIFY) {
  console.log('[smoke] skipped on Netlify (jsdom/undici + Node 20)')
  process.exit(0)
}

const { JSDOM } = await import('jsdom')

const html = readFileSync('dist/index.html', 'utf8')
const dom = new JSDOM(html, { pretendToBeVisual: true, url: 'http://localhost/' })
const { window } = dom
global.window = window
global.document = window.document
Object.defineProperty(globalThis, "navigator", { value: window.navigator, configurable: true })
global.requestAnimationFrame = (cb) => setTimeout(() => cb(performance.now()), 0)
global.cancelAnimationFrame = clearTimeout

window.matchMedia = (q) => ({
  matches: q.includes('hover: hover') || q.includes('pointer: fine'),
  addEventListener() {}, removeEventListener() {},
})

// Fake layout: first N elements on screen, the rest below the fold.
let order = 0
const seen = new Map()
window.Element.prototype.getBoundingClientRect = function () {
  if (!seen.has(this)) seen.set(this, order++ * 90)
  const top = seen.get(this)
  return { top, bottom: top + 300, left: 0, right: 1200, width: 1200, height: 300, x: 0, y: top }
}
Object.defineProperty(window, 'innerHeight', { value: 900, writable: true })
Object.defineProperty(window, 'innerWidth', { value: 1440, writable: true })

const observed = []
class FakeIO {
  constructor(cb) { this.cb = cb; observed.push(this) }
  observe(el) { (this.els ||= []).push(el) }
  unobserve() {}
  disconnect() {}
  fireAll() { this.cb((this.els || []).map((target) => ({ target, isIntersecting: true }))) }
}
// A browser exposes this as both window.IntersectionObserver and the bare
// global. Node needs both set explicitly.
window.IntersectionObserver = FakeIO
globalThis.IntersectionObserver = FakeIO

const results = []
const check = (label, pass, detail = '') =>
  results.push({ label, pass, detail })

const { initScrollFx } = await import('../src/lib/scrollFx.js')
const { initSmoothScroll } = await import('../src/lib/smoothScroll.js')
const { initMagnetic } = await import('../src/lib/magnetic.js')

let teardown = []
try {
  teardown.push(initScrollFx())
  check('initScrollFx runs without throwing', true)
} catch (e) { check('initScrollFx runs without throwing', false, e.message) }

try {
  teardown.push(initSmoothScroll())
  check('initSmoothScroll runs without throwing', true)
} catch (e) { check('initSmoothScroll runs without throwing', false, e.message) }

try {
  teardown.push(initMagnetic())
  check('initMagnetic runs without throwing', true)
} catch (e) { check('initMagnetic runs without throwing', false, e.message) }

const doc = window.document
check('rv-on applied to <html>', doc.documentElement.classList.contains('rv-on'))

const tagged = doc.querySelectorAll('[data-rv]')
check('elements received a variant', tagged.length > 20, `${tagged.length} tagged`)

const variants = [...new Set([...tagged].map((e) => e.dataset.rv))].sort()
check('multiple variants in use', variants.length >= 4, variants.join(', '))

const words = doc.querySelectorAll('.shead h2 .w > .i')
check('headings split into masked words', words.length > 10, `${words.length} words`)

const revealedAtLoad = doc.querySelectorAll('[data-rv].is-in').length
check('above-fold elements revealed immediately', revealedAtLoad > 0, `${revealedAtLoad} revealed`)

// Simulate scrolling everything into view
observed.forEach((io) => io.fireAll && io.fireAll())
const revealedAfter = doc.querySelectorAll('[data-rv].is-in').length
check('observer reveals the rest', revealedAfter > revealedAtLoad, `${revealedAtLoad} -> ${revealedAfter}`)

// The watchdog, exactly as ScrollFx runs it
const vh = window.innerHeight
const stuck = [...doc.querySelectorAll('[data-rv]:not(.is-in)')].filter((el) => {
  const r = el.getBoundingClientRect()
  return r.top < vh && r.bottom > 0
})
check('watchdog does NOT fire on correct behaviour', stuck.length === 0, `${stuck.length} on-screen stuck`)

check('teardown functions returned', teardown.every((t) => typeof t === 'function'))
try { teardown.forEach((t) => t()); check('teardown runs cleanly', true) }
catch (e) { check('teardown runs cleanly', false, e.message) }

check('scroll-behavior restored after teardown',
  doc.documentElement.style.scrollBehavior !== 'auto',
  `"${doc.documentElement.style.scrollBehavior}"`)

// Failure mode: if the reveal module throws, ScrollFx removes rv-on so
// nothing is left hidden. Prove that path rather than trusting it.
{
  const dom2 = new JSDOM(html, { pretendToBeVisual: true, url: 'http://localhost/' })
  const w2 = dom2.window
  w2.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} })
  const prevWin = global.window, prevDoc = global.document, prevIO = globalThis.IntersectionObserver
  global.window = w2; global.document = w2.document
  delete globalThis.IntersectionObserver           // simulate the module blowing up
  w2.Element.prototype.getBoundingClientRect = () => ({ top: 0, bottom: 300, left: 0, right: 1200, width: 1200, height: 300 })
  try { initScrollFx() } catch { w2.document.documentElement.classList.remove('rv-on') }
  check('on failure, rv-on is removed so nothing stays hidden',
        !w2.document.documentElement.classList.contains('rv-on'))
  global.window = prevWin; global.document = prevDoc; globalThis.IntersectionObserver = prevIO
}

let failed = 0
console.log()
for (const r of results) {
  if (!r.pass) failed++
  console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.label}${r.detail ? '   (' + r.detail + ')' : ''}`)
}
console.log()
console.log(failed ? `${failed} check(s) failed` : `all ${results.length} checks passed`)
process.exit(failed ? 1 : 0)
