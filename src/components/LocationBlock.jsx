import Tick from './Tick'
import NapCard from './NapCard'
import MapPanel from './MapPanel'

/** Map + NAP for a single listing. Used on the second location page. */
export default function LocationBlock({ location, heading, intro }) {
  return (
    <section className="sec sec-dark" id="location">
      <div className="wrap">
        <div className="sec-hd">
          <Tick>Find us</Tick>
          <h2>{heading}</h2>
          {intro && <p>{intro}</p>}
        </div>

        <div className="loc">
          <MapPanel location={location} />
          <div>
            <NapCard location={location} />
            <div className="areas">
              {location.serviceAreas.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
