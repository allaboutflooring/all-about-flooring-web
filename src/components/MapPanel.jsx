/** Map embed for a location, with a styled placeholder until mapEmbed is set. */
export default function MapPanel({ location }) {
  return (
    <div className="map">
      {location.mapEmbed ? (
        <iframe
          src={location.mapEmbed}
          title={`Map to ${location.name}, ${location.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          <div className="map-grid" />
          <div className="pin">
            <div className="pin-d" />
            <div className="pin-l">{location.name}</div>
          </div>
        </>
      )}
    </div>
  )
}
