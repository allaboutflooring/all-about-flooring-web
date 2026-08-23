import { useEffect, useMemo, useState } from 'react'
import SectionHead from './SectionHead'
import { Arrow } from './Icons'
import { WORK } from '../data/content'

const SIZES = '(max-width: 640px) 92vw, (max-width: 980px) 46vw, 31vw'
const ROWS = 3

/**
 * Portfolio - filtered gallery.
 *
 * Each tile keeps the photograph’s native orientation (`port` or `land`)
 * so a vertical shot is never cropped into a landscape cell, and vice
 * versa. Filters unmount non-matching tiles so the grid reflows; the live
 * region announces the count after each change.
 *
 * The grid opens on the first three rows. Load more adds another three
 * rows at the current column count (3 / 2 / 1).
 */
function Tile({ w }) {
  const Wrapper = w.href ? 'a' : 'div'
  const base = `/img/work/${w.key}`
  const land = w.orient === 'land'

  return (
    <figure className={`wk ${land ? 'is-land' : 'is-port'}`}>
      <Wrapper className="wk-in" {...(w.href ? { href: w.href } : {})}>
        <span className="wk-img">
          <span className="wk-lift" aria-hidden="true" />
          <span className="wk-tint" aria-hidden="true" />
          <picture>
            {w.webp && (
              <source
                type="image/webp"
                srcSet={`${base}-800.webp 800w, ${base}-1200.webp 1200w`}
                sizes={SIZES}
              />
            )}
            <img
              src={`${base}-1200.jpg`}
              srcSet={`${base}-800.jpg 800w, ${base}-1200.jpg 1200w`}
              sizes={SIZES}
              alt={w.alt || w.title}
              width={land ? 1600 : 1200}
              height={land ? 1200 : 1600}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </span>

        <figcaption className="wk-card">
          <span className="wk-rule" aria-hidden="true" />
          <strong>{w.category}</strong>
        </figcaption>
      </Wrapper>
    </figure>
  )
}

function useGalleryCols() {
  const [cols, setCols] = useState(3)

  useEffect(() => {
    const m980 = window.matchMedia('(max-width: 980px)')
    const m640 = window.matchMedia('(max-width: 640px)')
    const read = () => setCols(m640.matches ? 1 : m980.matches ? 2 : 3)
    read()
    m980.addEventListener('change', read)
    m640.addEventListener('change', read)
    return () => {
      m980.removeEventListener('change', read)
      m640.removeEventListener('change', read)
    }
  }, [])

  return cols
}

function takeRows(items, cols, rows) {
  const budget = cols * rows
  const out = []
  let used = 0
  for (const item of items) {
    if (used >= budget) break
    out.push(item)
    used += item.orient === 'land' && cols > 1 ? 2 : 1
  }
  return out
}

export default function Work({
  watermark = 'Works',
  heading = 'Recent',
  accent = 'work',
  projects = WORK,
  moreHref,
  moreLabel = 'See all work',
  paged = false,
}) {
  const tags = useMemo(
    () => ['Show All', ...new Set(projects.map((p) => p.tag).filter(Boolean))],
    [projects]
  )
  const cols = useGalleryCols()
  const [active, setActive] = useState('Show All')
  const [pages, setPages] = useState(1)
  const matched = active === 'Show All' ? projects : projects.filter((p) => p.tag === active)
  const shown = paged ? takeRows(matched, cols, ROWS * pages) : matched
  const hasMore = paged && shown.length < matched.length

  const setFilter = (t) => {
    setActive(t)
    setPages(1)
  }

  return (
    <section className="sec sec-dark wks" id="work">
      <span className="wks-dots" aria-hidden="true" />
      <span className="wks-sq" aria-hidden="true" />

      <div className="wrap">
        <div className="wks-top">
          <SectionHead watermark={watermark} accent={accent}>
            {heading}
          </SectionHead>

          <div className="wks-filters" role="group" aria-label="Filter projects">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                className={`wks-f${active === t ? ' is-on' : ''}`}
                aria-pressed={active === t}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="vh" role="status" aria-live="polite">
          {shown.length} of {matched.length} {matched.length === 1 ? 'project' : 'projects'} shown
          {active !== 'Show All' ? ` in ${active}` : ''}
        </p>

        <div className="wk-grid">
          {shown.map((w) => (
            <Tile key={w.key} w={w} />
          ))}
        </div>

        {hasMore && (
          <div className="wks-more">
            <button
              type="button"
              className="btn btn-ghost-ink"
              onClick={() => setPages((n) => n + 1)}
            >
              Load more <Arrow />
            </button>
          </div>
        )}

        {moreHref && (
          <a className="ab-more" href={moreHref}>
            {moreLabel} <Arrow />
          </a>
        )}
      </div>
    </section>
  )
}
