/**
 * Scroll choreography.
 *
 * Four layers, all driven from one file:
 *
 *   reveal    elements unveil as they enter view - clip, lift or a
 *             masked wipe, staggered within their group
 *   cascade   section headings (and the hero) assemble word by word
 *   parallax  photographs and watermarks drift against the page
 *   departure the hero scales and the copy recedes as you leave it
 *
 * Safety rules that must not be relaxed:
 *
 * · Attributes are added by JS and gated behind `.rv-on` on <html>. If
 *   this file never runs, nothing is hidden - the page is simply static.
 * · Variants used on photographs never touch opacity. A missed reveal
 *   leaves a zoomed or cropped image, never an invisible one.
 * · Form columns and accordions never use clip-path - it would crop
 *   dropdowns and expanding panels.
 * · A scroll sweep plus a hard 2.5s timer reveal anything left behind.
 */

/** [selector, variant, stagger ms] */
const PLAN = [
  ['.shead', 'rise', 0],
  ['.sec-hd', 'rise', 0],
  ['.svcx-intro', 'unveil', 0],
  ['.hbar-c', 'lift', 110],
  ['.cf-left', 'slide-l', 0],
  ['.cf-right', 'slide-r', 90],
  ['.tst-sum', 'lift', 0],
  ['.tst-c', 'unveil', 140],
  ['.ctaN-in > *', 'unveil', 150],
  ['.ab-body', 'slide-r', 80],
  ['.ab-points li', 'lift', 90],
  ['.abpg-copy', 'slide-r', 80],
  ['.step', 'lift', 90],
  ['.wks-filters', 'fade', 0],
  ['.stone', 'lift', 90],
  ['.svca-areas li', 'lift', 55],
  ['.svca-note', 'fade', 0],
  ['.faq-i', 'slide-up', 70],
  ['.qform-head', 'unveil', 0],
  ['.qform-row', 'slide-up', 0],
  ['.ftr-grid > *', 'unveil', 100],
]

/**
 * Photographs: clip + scale only, never opacity.
 *
 * Applied to the picture/img, not the framed wrapper - .ab-media's
 * offset rule would otherwise get cropped with the photo.
 */
const ZOOM = ['.ab-media picture', '.cf-media img', '.pghero-media img']

/** [selector, strength] - positive drifts slower than the page. */
const PARALLAX = [
  ['.ctaN-bg img', 11],
  ['.pghero-media img', 11],
  ['.qform-tile', 6],
  ['.ab-media picture', 8],
  ['.wks-dots', 20],
  ['.svca-dots', 20],
  ['.wks-sq', -14],
  ['.svcx-num', -8],
]

const SKIP = '.svcx, .fan-scene, .rooms'

/**
 * Wraps each word in a mask with an inner span that starts pushed below.
 *
 * Type rises from behind an invisible edge, as though it were always
 * there and the mask lifted. The outer span carries the overflow clip;
 * padding plus a matching negative margin keeps descenders from being
 * sliced off.
 */
function splitWords(h) {
  if (h.dataset.split) return
  h.dataset.split = '1'
  let i = 0
  const wrap = (node, parent) => {
    const words = node.textContent.split(/(\s+)/)
    const frag = document.createDocumentFragment()
    for (const w of words) {
      if (!w.trim()) { frag.appendChild(document.createTextNode(w)); continue }
      const mask = document.createElement('span')
      mask.className = 'w'
      const inner = document.createElement('span')
      inner.className = 'i'
      inner.style.setProperty('--w', i++)
      inner.textContent = w
      mask.appendChild(inner)
      frag.appendChild(mask)
    }
    parent.replaceChild(frag, node)
  }
  const walk = (el) => {
    for (const node of [...el.childNodes]) {
      if (node.nodeType === 3) wrap(node, el)
      else if (node.nodeType === 1) walk(node)
    }
  }
  walk(h)
}

export function initScrollFx() {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const root = document.documentElement
  root.classList.add('rv-on')
  const cleanups = []

  /* ── assign variants ─────────────────────────────────────── */
  const groups = new Map()
  for (const [sel, variant, step] of PLAN) {
    let nodes
    try { nodes = document.querySelectorAll(sel) } catch { continue }
    for (const el of nodes) {
      if (el.closest(SKIP) || el.dataset.rv) continue
      el.dataset.rv = variant
      if (step) {
        const n = groups.get(el.parentElement) || 0
        groups.set(el.parentElement, n + 1)
        el.style.setProperty('--rv-d', `${Math.min(n, 7) * step}ms`)
      }
    }
  }
  for (const sel of ZOOM) {
    for (const el of document.querySelectorAll(sel)) {
      if (el.closest(SKIP) || el.dataset.rv) continue
      el.dataset.rv = 'zoom'
    }
  }
  document.querySelectorAll('.shead h2, .sec-hd h2, .hero h1, .pghero h1').forEach(splitWords)

  /* ── reveal ──────────────────────────────────────────────── */
  const marked = document.querySelectorAll('[data-rv]')
  const vh = window.innerHeight
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      }
    },
    { threshold: 0, rootMargin: '0px 0px -8% 0px' }
  )
  for (const el of marked) {
    if (el.getBoundingClientRect().top < vh * 0.88) {
      el.classList.add('is-in')
      el.style.setProperty('--rv-d', '0ms')
    } else io.observe(el)
  }
  cleanups.push(() => io.disconnect())

  /* ── backstop: nothing may stay hidden ───────────────────── */
  let sweeping = false
  const sweep = () => {
    sweeping = false
    const h = window.innerHeight
    const left = [...document.querySelectorAll('[data-rv]:not(.is-in)')]
    for (const el of left) {
      const r = el.getBoundingClientRect()
      if (r.top < h && r.bottom > 0) el.classList.add('is-in')
    }
  }
  const onSweep = () => { if (!sweeping) { sweeping = true; requestAnimationFrame(sweep) } }
  window.addEventListener('scroll', onSweep, { passive: true })
  const failsafe = setTimeout(() => {
    document.querySelectorAll('[data-rv]:not(.is-in)').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 1.5) el.classList.add('is-in')
    })
  }, 2500)
  cleanups.push(() => { clearTimeout(failsafe); window.removeEventListener('scroll', onSweep) })

  /* ── parallax + ken burns ────────────────────────────────── */
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const items = []
  if (fine) {
    for (const [sel, strength] of PARALLAX) {
      for (const el of document.querySelectorAll(sel)) items.push({ el, strength })
    }
  }

  const hero = document.querySelector('.hero')
  const heroCopy = hero?.querySelector('.hero-copy')

  let ticking = false
  const update = () => {
    ticking = false
    const h = window.innerHeight

    if (hero && heroCopy) {
      const r = hero.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)))
      heroCopy.style.opacity = Math.max(0, 1 - p * 1.2).toFixed(3)
      heroCopy.style.transform = `translate3d(0, ${(p * 48).toFixed(1)}px, 0)`
      heroCopy.style.pointerEvents = p > 0.72 ? 'none' : ''
    }

    for (const { el, strength } of items) {
      const r = el.getBoundingClientRect()
      if (r.bottom < -240 || r.top > h + 240) continue
      const p = (r.top + r.height / 2 - h / 2) / (h / 2 + r.height / 2)
      el.style.setProperty('--pxy', `${(p * strength).toFixed(2)}%`)
      el.style.setProperty('--pscale', (1.05 + Math.abs(p) * 0.08).toFixed(4))
    }
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  cleanups.push(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return () => cleanups.forEach((fn) => fn())
}
