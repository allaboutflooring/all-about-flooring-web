/**
 * Post-build: writes sitemap.xml from prerendered HTML and promotes the
 * prerendered /404 to dist/404.html, which is the file Netlify serves for
 * unmatched URLs.
 *
 * Runs automatically after `npm run build`.
 */
import { readFile, writeFile, rename, rm, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

const siteSrc = await readFile(resolve(root, 'src/data/site.js'), 'utf8')
const origin = (siteSrc.match(/origin:\s*'([^']+)'/) || [, 'https://www.example.com'])[1]

async function htmlPaths(dir, prefix = '') {
  const out = []
  for (const name of await readdir(dir)) {
    if (name.startsWith('.')) continue
    const full = join(dir, name)
    const info = await stat(full)
    if (info.isDirectory()) {
      out.push(...(await htmlPaths(full, `${prefix}/${name}`)))
    } else if (name === 'index.html') {
      out.push(prefix || '/')
    }
  }
  return out
}

const skip = new Set(['/404', '/about', '/services/luxury-vinyl-plank'])
const paths = (await htmlPaths(dist)).filter((p) => !skip.has(p))

const today = new Date().toISOString().slice(0, 10)
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths
    .map(
      (p) =>
        `  <url>\n    <loc>${origin}${p === '/' ? '/' : p}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <priority>${p === '/' ? '1.0' : p.includes('st-petersburg') ? '0.8' : '0.7'}</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`

await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
console.log(`[postbuild] sitemap.xml — ${paths.length} URLs`)

const robotsPath = resolve(dist, 'robots.txt')
if (existsSync(robotsPath)) {
  const r = await readFile(robotsPath, 'utf8')
  await writeFile(robotsPath, r.replace(/Sitemap: .*/, `Sitemap: ${origin}/sitemap.xml`))
  console.log('[postbuild] robots.txt sitemap URL set')
}

const nested = resolve(dist, '404/index.html')
if (existsSync(nested)) {
  await rename(nested, resolve(dist, '404.html'))
  await rm(resolve(dist, '404'), { recursive: true, force: true })
  console.log('[postbuild] 404.html ready')
}
