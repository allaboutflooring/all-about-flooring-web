import { mapsDirectionsUrl } from '../data/locations'

/**
 * The NAP block, extracted so LocationBlock and ServiceArea render the
 * identical markup from the identical source. Two hand-maintained copies
 * of an address is exactly how a site drifts out of sync with its Google
 * listing - the thing this build exists to prevent.
 */
export default function NapCard({ location, heading }) {
  return (
    <div className="nap">
      <h3>{heading || location.name}</h3>

      <div className="nap-r">
        <div className="nap-k">Address</div>
        <address className="nap-v">
          <a href={mapsDirectionsUrl(location)} target="_blank" rel="noreferrer">
            {location.street}
            <br />
            {location.city}, {location.region} {location.postal}
          </a>
        </address>
      </div>

      <div className="nap-r">
        <div className="nap-k">Phone</div>
        <div className="nap-v">
          <a href={`tel:${location.phoneE164}`}>{location.phone}</a>
        </div>
      </div>

      <div className="nap-r">
        <div className="nap-k">Email</div>
        <div className="nap-v">
          <a href={`mailto:${location.email}`}>{location.email}</a>
        </div>
      </div>

      <div className="nap-r">
        <div className="nap-k">Hours</div>
        <div className="nap-v">
          {location.hours.map((h) => (
            <div key={h.d}>
              {h.d} - {h.h}
            </div>
          ))}
        </div>
      </div>

      <div className="nap-r">
        <div className="nap-k">Category</div>
        <div className="nap-v">{location.primaryCategory}</div>
      </div>
    </div>
  )
}
