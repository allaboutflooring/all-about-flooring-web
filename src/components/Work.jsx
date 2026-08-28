import { useEffect, useMemo, useState } from 'react'
import SectionHead from './SectionHead'
import { Arrow } from './Icons'
import { WORK, WORK_FILTERS } from '../data/content'

const SIZES = '(max-width: 640px) 92vw, (max-width: 980px) 46vw, 31vw'
const ROWS = 3

/**
 * Portfolio - filtered gallery.
 *
 * Portrait tiles only. Horizontal shots stay out of the grid so every
 * cell is a 3:4 photograph. Filters match the portfolio page everywhere
 * this component is used.
 */
function Tile({ w }) {
  const Wrapper = w.href ? 'a' : 'div'
  const base = `/img/work/${w.key}`

  return (
    <figure className="wk is-port">
      <Wrapper className="wk-in" {...(w.href ? { href: w.href } : {})}>
        <span className="wk-img">
          <span className="wk-lift" aria-hidden="true" />
          <span className="wk-tint" aria-hidden="true" />
          <picture>
            <source
              type="image/webp"
              srcSet={`${base}-800.webp 800w, ${base}-1200.webp 1200w`}
              sizes={SIZES}
            />
            <img
              src={`${base}-1200.jpg`}
              srcSet={`${base}-800.jpg 800w, ${base}-1200.jpg 1200w`}
              sizes={SIZES}
              alt={w.alt || w.title}
              width={1200}
              height={1600}
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
  return items.slice(0, cols * rows)
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
  const items = useMemo(
    () => projects.filter((p) => p.orient !== 'land'),
    [projects]
  )
  const tags = useMemo(() => ['Show All', ...WORK_FILTERS], [])
  const cols = useGalleryCols()
  const [active, setActive] = useState('Show All')
  const [pages, setPages] = useState(1)
  const matched = active === 'Show All' ? items : items.filter((p) => p.tag === active)
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
