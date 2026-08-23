import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ServiceArea from '../components/ServiceArea'
import Services from '../components/Services'
import Cta from '../components/Cta'
import LocationMap from '../components/LocationMap'
import { MAIN } from '../data/locations'
import { CTA_LATE } from '../data/cta'

const AREA_INTRO =
  'We cover the Tampa Bay area from Spring Hill down to Riverview, and across the bay to Clearwater and Dunedin.'

/**
 * Locations. Towns we cover, the services we take there, then the map.
 */
export default function LocationsPage() {
  return (
    <MainLayout>
      <Seo
        path="/locations"
        location={MAIN}
        title={`Service Areas in ${MAIN.city} | All About Flooring`}
        description={`Flooring installation across Tampa Bay - Odessa, Carrollwood, Brandon, Clearwater, Dunedin, Wesley Chapel and nearby. Free in-home measure.`}
      />

      <PageHero
        title="Locations"
        crumbs={[
          { href: '/', label: 'Home' },
          { label: 'Locations' },
        ]}
      />

      <ServiceArea primary={MAIN} intro={AREA_INTRO} />

      <Services heading="Featured" accent="Services" intro={null} />

      <Cta content={CTA_LATE} location={MAIN} />

      <LocationMap />
    </MainLayout>
  )
}
