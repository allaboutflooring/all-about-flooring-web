/**
 * Convert every raster to WebP and every MP4 to WebM.
 *
 * Idempotent: a destination is rewritten only when it is missing or older
 * than the source. JPEG/PNG stay as fallbacks; the site prefers WebP/WebM.
 *
 *   npm run media
 */
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const IMG_ROOT = join(root, 'public/img')
const VID_ROOT = join(root, 'public/video')
const IMG_EXTS = new Set(['.jpg', '.jpeg', '.png'])
const FFMPEG_CANDIDATES = [
  'ffmpeg',
  '/opt/homebrew/bin/ffmpeg',
  '/usr/local/bin/ffmpeg',
]

async function walk(dir) {
  if (!existsSync(dir)) return []
  const out = []
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name)
    if (ent.isDirectory()) out.push(...(await walk(p)))
    else out.push(p)
  }
  return out
}

async function stale(src, dest) {
  if (!existsSync(dest)) return true
  const [a, b] = await Promise.all([stat(src), stat(dest)])
  return a.mtimeMs > b.mtimeMs
}

async function convertImages() {
  const files = (await walk(IMG_ROOT)).filter((p) => IMG_EXTS.has(extname(p).toLowerCase()))
  let made = 0
  let skipped = 0
  for (const src of files) {
    const dest = src.replace(/\.(jpe?g|png)$/i, '.webp')
    if (!(await stale(src, dest))) {
      skipped++
      continue
    }
    await sharp(src).webp({ quality: 82, effort: 5 }).toFile(dest)
    const [a, b] = await Promise.all([stat(src), stat(dest)])
    console.log(
      `  webp  ${dest.replace(root + '/', '')}  ${Math.round(b.size / 1024)} KB  (from ${Math.round(a.size / 1024)} KB)`
    )
    made++
  }
  return { made, skipped, total: files.length }
}

function ffmpegBin() {
  for (const bin of FFMPEG_CANDIDATES) {
    if (bin.startsWith('/') && existsSync(bin)) return bin
  }
  return 'ffmpeg'
}

function run(bin, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { stdio: ['ignore', 'pipe', 'pipe'] })
    let err = ''
    child.stderr.on('data', (d) => {
      err += d
    })
    child.on('error', (e) => reject(e))
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(err.trim() || `${bin} exited ${code}`))
    })
  })
}

async function hasFfmpeg(bin) {
  try {
    await run(bin, ['-version'])
    return true
  } catch {
    return false
  }
}

async function convertVideos() {
  const files = (await walk(VID_ROOT)).filter((p) => extname(p).toLowerCase() === '.mp4')
  const bin = ffmpegBin()
  const ok = await hasFfmpeg(bin)
  let made = 0
  let skipped = 0
  let missing = 0

  for (const src of files) {
    const dest = src.replace(/\.mp4$/i, '.webm')
    if (!(await stale(src, dest))) {
      skipped++
      continue
    }
    if (!ok) {
      console.log(`  skip   ${dest.replace(root + '/', '')}  (ffmpeg not installed)`)
      missing++
      continue
    }
    await run(bin, [
      '-y',
      '-i',
      src,
      '-c:v',
      'libvpx-vp9',
      '-b:v',
      '0',
      '-crf',
      '32',
      '-row-mt',
      '1',
      '-an',
      dest,
    ])
    const [a, b] = await Promise.all([stat(src), stat(dest)])
    console.log(
      `  webm  ${dest.replace(root + '/', '')}  ${Math.round(b.size / 1024)} KB  (from ${Math.round(a.size / 1024)} KB)`
    )
    made++
  }
  return { made, skipped, total: files.length, missing }
}

const img = await convertImages()
const vid = await convertVideos()
console.log(
  `\n[media] images ${img.made} written, ${img.skipped} up to date (${img.total} rasters)`
)
console.log(
  `[media] videos ${vid.made} written, ${vid.skipped} up to date (${vid.total} mp4)` +
    (vid.missing ? `, ${vid.missing} need ffmpeg` : '')
)
