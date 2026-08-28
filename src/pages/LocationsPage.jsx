import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ServiceArea from '../components/ServiceArea'
import Services from '../components/Services'
import Cta from '../components/Cta'
import LocationMap from '../components/LocationMap'
import { MAIN, MAIN_AREA_INTRO } from '../data/locations'
import { CTA_LATE } from '../data/cta'

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
        description={`Flooring installation across Tampa Bay - Odessa, Carrollwood, Brandon, St. Petersburg, Largo, Lutz, Land O' Lakes and nearby. Free in-home measure.`}
      />

      <PageHero
        title="Locations"
        crumbs={[
          { href: '/', label: 'Home' },
          { label: 'Locations' },
        ]}
      />

      <ServiceArea primary={MAIN} intro={MAIN_AREA_INTRO} />

      <Services heading="Featured" accent="Services" intro={null} />

      <Cta content={CTA_LATE} location={MAIN} />

      <LocationMap />
    </MainLayout>
  )
}
