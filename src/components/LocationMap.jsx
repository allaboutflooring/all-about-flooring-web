import MapPanel from './MapPanel'
import SectionHead from './SectionHead'
import { MAIN } from '../data/locations'

/** Greyscale Google embed used on the locations hub and town pages. */
export default function LocationMap({ location = MAIN }) {
  return (
    <section className="sec sec-dark locpg" id="map">
      <div className="wrap">
        <SectionHead watermark="Map" accent="us">
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
