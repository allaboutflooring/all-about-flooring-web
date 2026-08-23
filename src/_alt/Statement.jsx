/** Brand thesis + the three numbers worth stating plainly. */
export default function Statement({ quote, body, figures }) {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="state">
          <div className="state-side">
            {figures.map((f) => (
              <div className="state-fig" key={f.label}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Who lays your floor</p>
            <p className="state-q" style={{ marginTop: 22 }}>
              {quote}
            </p>
            {body.map((b, i) => (
              <p className="state-body" key={i}>
                {b}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
