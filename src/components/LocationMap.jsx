import MapPanel from './MapPanel'
import SectionHead from './SectionHead'
import { MAIN } from '../data/locations'

/**
 * Greyscale Google embed used on the locations hub and town pages.
 *
 * `tight` drops the section's top padding - used when the map sits directly
 * below another same-colour section (e.g. Service Area on the homepage) so the
 * two do not read as a doubled gap.
 */
export default function LocationMap({ location = MAIN, tight = false }) {
  return (
    <section className={`sec sec-dark locpg${tight ? ' locpg-tight' : ''}`} id="map">
      <div className="wrap">
        <SectionHead watermark="Map" accent="us" as="h3">
          Find
        </SectionHead>
        <p className="svca-intro">
          {location.name}. Open the listing if you want directions or hours.
        </p>
        <div className="locpg-frame">
          <MapPanel location={location} />
        </div>
        {location.mapsShareUrl && (
          <p className="locpg-open">
            <a href={location.mapsShareUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
