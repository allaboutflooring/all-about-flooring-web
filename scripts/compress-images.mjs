/**
 * Recompress large JPEGs/WebPs in public/img and write JPEG fallbacks
 * for the sample-fan PNGs. Run as needed: node scripts/compress-images.mjs
 */
import { existsSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const IMG_ROOT = join(root, 'public/img')
const SKIP_NAMES = new Set([
  'hero-poster-960.jpg',
  'hero-poster-960.webp',
  'hero-poster-1600.jpg',
  'hero-poster-1600.webp',
  'hero-poster.jpg',
  'hero-poster.webp',
  'hero-poster-sm.jpg',
  'hero-poster-sm.webp',
  'og.jpg',
  'og.webp',
  'logo.png',
  'logo.webp',
  'logo-white.png',
  'logo-white.webp',
])

async function walk(dir) {
  const out = []
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name)
    if (ent.isDirectory()) out.push(...(await walk(p)))
    else out.push(p)
  }
  return out
}

async function writeIfSmaller(src, buf, label) {
  const before = (await stat(src)).size
  if (buf.length >= before * 0.97) return false
  const { writeFile } = await import('node:fs/promises')
  await writeFile(src, buf)
  console.log(
    `  ${label}  ${src.replace(root + '/', '')}  ${Math.round(before / 1024)}KB → ${Math.round(buf.length / 1024)}KB`
  )
  return true
}

const files = await walk(IMG_ROOT)
let changed = 0

for (const src of files) {
  const name = src.split('/').pop()
  if (SKIP_NAMES.has(name)) continue
  const ext = extname(src).toLowerCase()
  const bytes = (await stat(src)).size

  if (ext === '.jpg' || ext === '.jpeg') {
    if (bytes < 90_000) continue
    const buf = await sharp(src)
      .jpeg({ quality: 72, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' })
      .toBuffer()
    if (await writeIfSmaller(src, buf, 'jpg ')) changed++
  } else if (ext === '.webp') {
    if (bytes < 40_000) continue
    const buf = await sharp(src).webp({ quality: 74, effort: 6 }).toBuffer()
    if (await writeIfSmaller(src, buf, 'webp')) changed++
  }
}

for (const size of ['900', '1400']) {
  const png = join(IMG_ROOT, `sample-fan-${size}.png`)
  const jpg = join(IMG_ROOT, `sample-fan-${size}.jpg`)
  if (!existsSync(png)) continue
  await sharp(png)
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toFile(jpg)
  const [a, b] = await Promise.all([stat(png), stat(jpg)])
  console.log(
    `  fan  sample-fan-${size}.jpg  ${Math.round(b.size / 1024)}KB  (from png ${Math.round(a.size / 1024)}KB)`
  )
}

console.log(`[compress-images] ${changed} files rewritten`)
