import { MATERIALS } from '../data/materials'

/* Deterministic PRNG so a given material always renders the same layout -
   the floor must not reshuffle on every repaint. */
function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

const SQRT1_2 = Math.SQRT1_2 // 0.7071 - projection of a 45° board onto an axis

/**
 * Draws a flooring pattern into `el` using absolutely positioned divs.
 * DOM-only - call from useEffect, never during render.
 *
 * Sizing uses offsetWidth/offsetHeight, NOT getBoundingClientRect: the
 * container may carry a 3D transform for the perspective view, and
 * getBoundingClientRect would return the projected box instead of the
 * layout box, leaving most of the surface unpainted.
 *
 * @param {HTMLElement} el   container (position: relative/absolute)
 * @param {string} key       material key from src/data/materials.js
 * @param {number} scale     plank size multiplier
 */
export function paintFloor(el, key, scale = 1) {
  if (!el) return
  const m = MATERIALS[key]
  if (!m) return

  const W = el.offsetWidth || el.getBoundingClientRect().width || 600
  const H = el.offsetHeight || el.getBoundingClientRect().height || 300
  if (!W || !H) return

  const rand = rng(key.length * 7919 + Math.round(scale * 1000))
  const L = m.w * scale // board length
  const T = m.h * scale // board width

  const frag = document.createDocumentFragment()
  const tone = () => m.tones[Math.floor(rand() * m.tones.length)]
  const face = (c) =>
    `background:linear-gradient(97deg,${c},${c}),` +
    `repeating-linear-gradient(88deg,${m.grain} 0 1px,transparent 1px ${(4 + rand() * 7).toFixed(1)}px);` +
    `background-blend-mode:multiply;`
  const add = (css) => {
    const d = document.createElement('div')
    d.className = 'plank'
    d.style.cssText = css
    frag.appendChild(d)
  }
  const board = (x, y, w, h, rot) =>
    add(
      `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;width:${w.toFixed(1)}px;height:${h.toFixed(1)}px;` +
        (rot ? `transform:rotate(${rot}deg);transform-origin:0 0;` : '') +
        face(tone()) +
        `box-shadow:inset 0 0 ${(L / 3).toFixed(1)}px rgba(0,0,0,.18);`
    )

  if (m.type === 'plank' || m.type === 'tile') {
    // Straight lay: each row shifts a third of a board, the way an
    // installer staggers end joints.
    const rows = Math.ceil(H / T) + 2
    for (let r = 0; r < rows; r++) {
      const off = -((r % 3) * L) / 3 - L
      for (let x = off; x < W + L; x += L) board(x, r * T, L - 2, T - 2, 0)
    }
  } else if (m.type === 'chevron') {
    // Chevron: unlike herringbone, the boards are MITRED - their ends are cut
    // so the joint between opposing columns is a straight vertical seam.
    // A plain rotated rectangle gives square ends and a sawtooth seam, so each
    // board is clipped to a parallelogram sheared by its own width.
    const h = T * SQRT1_2 // half the board's vertical thickness at the seam
    const colW = L * SQRT1_2 // horizontal span of one board
    const rowH = T / SQRT1_2 // vertical pitch along the seam
    const box = L + T // clip box is longer than the board to fit the shear

    const clipRight = `polygon(0 0, ${L.toFixed(1)}px 0, ${box.toFixed(1)}px ${T.toFixed(1)}px, ${T.toFixed(1)}px ${T.toFixed(1)}px)`
    const clipLeft = `polygon(${T.toFixed(1)}px 0, ${box.toFixed(1)}px 0, ${L.toFixed(1)}px ${T.toFixed(1)}px, 0 ${T.toFixed(1)}px)`

    const mitre = (x, y, rot) =>
      add(
        `left:${x.toFixed(1)}px;top:${y.toFixed(1)}px;width:${box.toFixed(1)}px;height:${T.toFixed(1)}px;` +
          `transform:rotate(${rot}deg);transform-origin:0 0;` +
          `clip-path:${rot > 0 ? clipRight : clipLeft};` +
          face(tone())
      )

    const cols = Math.ceil(W / colW) + 3
    const rows = Math.ceil((H + colW) / rowH) + 4
    for (let c = -1; c < cols; c++) {
      const x = c * colW
      const down = c % 2 === 0
      for (let r = -3; r < rows; r++) {
        const y = r * rowH
        if (down) mitre(x, y, 45)
        else mitre(x - h, y + h, -45)
      }
    }
  } else {
    // Herringbone: boards at +/-45 in an interlocking lattice.
    // Lattice vectors v1 = (dx, dy), v2 = (-2t, 2t) with two boards per cell;
    // determinant is exactly 2LT, so the plane tiles without gap or overlap.
    const t = T * SQRT1_2
    const dx = (L + T) * SQRT1_2
    const dy = (L - T) * SQRT1_2
    const det = t * (dx + dy)

    // Invert the lattice over the target rect's corners to get exact i/j
    // bounds. Looping over guessed ranges leaves wedges unpainted at the
    // corners, because the lattice is sheared.
    const pad = L + T
    const corners = [
      [-pad, -pad],
      [W + pad, -pad],
      [-pad, H + pad],
      [W + pad, H + pad],
    ]
    let iMin = Infinity, iMax = -Infinity, jMin = Infinity, jMax = -Infinity
    for (const [x, y] of corners) {
      const i = (t * x + t * y) / det
      const j = (-dy * x + dx * y) / det
      iMin = Math.min(iMin, i); iMax = Math.max(iMax, i)
      jMin = Math.min(jMin, j); jMax = Math.max(jMax, j)
    }

    for (let j = Math.floor(jMin) - 1; j <= Math.ceil(jMax) + 1; j++) {
      for (let i = Math.floor(iMin) - 1; i <= Math.ceil(iMax) + 1; i++) {
        const ox = i * dx - j * t
        const oy = i * dy + j * t
        board(ox, oy, L, T, -45)
        board(ox + t, oy + t, L, T, 45)
      }
    }
  }

  el.replaceChildren(frag)
}
