/**
 * Centred section heading with a ghosted watermark behind it.
 * Shared by About and Work - the watermark, accent split and offset rule
 * are one pattern, so they live in one place.
 *
 * `accent` renders in oak after the main heading text.
 */
export default function SectionHead({ watermark, children, accent, id, as: Tag = 'h2' }) {
  return (
    <header className="shead" id={id}>
      <div className="shead-titles">
        {watermark && (
          <span className="shead-wm" aria-hidden="true">
            {watermark}
          </span>
        )}
        <Tag>
          {children} {accent && <em>{accent}</em>}
        </Tag>
      </div>
      <span className="shead-rule" aria-hidden="true" />
    </header>
  )
}
