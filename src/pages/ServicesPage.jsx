import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import ServiceArea from '../components/ServiceArea'
import Cta from '../components/Cta'
import { SERVICES_PAGE } from '../data/services'
import { MAIN } from '../data/locations'
import { CTA_LATE } from '../data/cta'

/**
 * Services hub. Cards, towns we cover, then a measure CTA.
 */
export default function ServicesPage() {
  const { hero } = SERVICES_PAGE

  return (
    <MainLayout>
      <Seo
        path="/services"
        location={MAIN}
        title={`Flooring Services in ${MAIN.city} | All About Flooring`}
        description={`Hardwood, LVP, laminate, tile, refinishing, kitchens and bathrooms in ${MAIN.city}. One crew from subfloor prep to final walkthrough. Free in-home measure.`}
      />

      <PageHero
        title={hero.title}
        crumbs={hero.crumbs}
        image={hero.image}
        alt={hero.alt}
      />

      <Services heading="Featured" accent="Services" intro={null} />

      <ServiceArea
        primary={MAIN}
        intro="We cover the Tampa Bay area from Spring Hill down to Riverview, and across the bay to Clearwater and Dunedin."
      />

      <Cta content={CTA_LATE} location={MAIN} />
    </MainLayout>
  )
}
