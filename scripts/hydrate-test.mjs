/**
 * Serves dist/ and loads it in jsdom with scripts EXECUTING, so React
 * actually hydrates. This is what the previous smoke test could not do:
 * it ran my modules directly and never exercised the React tree.
 */
import { createServer } from 'node:http'
import { readFileSync, existsSync } from 'node:fs'
import { extname, join } from 'node:path'
import { JSDOM, VirtualConsole } from 'jsdom'

const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.jpg':'image/jpeg', '.png':'image/png', '.webp':'image/webp', '.svg':'image/svg+xml',
  '.mp4':'video/mp4', '.webm':'video/webm', '.json':'application/json', '.xml':'application/xml' }

const server = createServer((req, res) => {
  let p = join('dist', decodeURIComponent(req.url.split('?')[0]))
  if (p.endsWith('/')) p += 'index.html'
  if (!existsSync(p)) { res.writeHead(404); return res.end('nope') }
  res.writeHead(200, { 'Content-Type': TYPES[extname(p)] || 'application/octet-stream' })
  res.end(readFileSync(p))
})
await new Promise((r) => server.listen(4173, r))

const errors = []
const warnings = []
const vc = new VirtualConsole()
vc.on('jsdomError', (e) => errors.push('jsdomError: ' + (e.detail?.message || e.message)))
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')))
vc.on('warn', (...a) => warnings.push(a.join(' ')))

const dom = await JSDOM.fromURL('http://localhost:4173/', {
  runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
})
const { window } = dom
window.matchMedia = window.matchMedia || ((q) => ({ matches: false, addEventListener(){}, removeEventListener(){} }))
if (!window.IntersectionObserver) {
  window.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} }
}

await new Promise((r) => setTimeout(r, 2500))

const doc = window.document
const root = doc.getElementById('root')
const text = (root?.textContent || '').replace(/\s+/g, ' ').trim()

console.log('HYDRATION')
console.log('  root children      :', root ? root.children.length : 'NO ROOT')
console.log('  rendered text chars:', text.length)
console.log('  sections in DOM    :', doc.querySelectorAll('section').length)
console.log('  hero present       :', !!doc.querySelector('.hero'))
console.log('  rv-on on <html>    :', doc.documentElement.classList.contains('rv-on'))
console.log('  elements tagged    :', doc.querySelectorAll('[data-rv]').length)
console.log('  elements revealed  :', doc.querySelectorAll('[data-rv].is-in').length)
console.log()
console.log('ERRORS  :', errors.length ? '' : 'none')
errors.slice(0, 8).forEach((e) => console.log('   ' + e.slice(0, 220)))
console.log()
console.log('first 160 chars of rendered text:')
console.log('  ' + text.slice(0, 160))

server.close()
process.exit(errors.length || !text.length ? 1 : 0)
