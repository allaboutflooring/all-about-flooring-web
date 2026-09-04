import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import HeroVideo from '../components/HeroVideo'
import HeroBar from '../components/HeroBar'
import ConsultForm from '../components/ConsultForm'
import Cta from '../components/Cta'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import RoomTour from '../components/RoomTour'
import About from '../components/About'
import Work from '../components/Work'
import Faqs from '../components/Faqs'
import ServiceArea from '../components/ServiceArea'
import LocationMap from '../components/LocationMap'
import { ContentSection } from '../components/ServiceSeoContent'
import { MAIN, MAIN_AREA_INTRO } from '../data/locations'
import { CTA_MID, CTA_LATE } from '../data/cta'
import { HOME_WORK } from '../data/content'
import { ABOUT_PATH, SITE } from '../data/site'

// SEO prose + feature sections added to the homepage, rendered with the same
// shared ContentSection component the service/location pages use. Backgrounds
// are chosen to keep the homepage's bone/white rhythm (prose white between the
// two bone sections; feature bone between the CTA banner and the white FAQs).
const HOME_QUALITY_TAMPA = {
  layout: 'prose',
  heading: 'Quality Flooring Installation Services for Homes Throughout Tampa',
  body: [
    'A professionally installed floor can refresh a Tampa home while improving comfort, durability, and everyday functionality. All About Flooring Tampa Bay Contractors provides dependable flooring installation and replacement for kitchens, bedrooms, living rooms, and other residential spaces. As experienced Flooring Contractor in Tampa, we focus on accurate measurements, careful preparation, and clean installation suited to each home’s needs.',
    'From Hyde Park and Seminole Heights to homes near Bayshore Boulevard, flooring can experience heavy foot traffic, humidity, pets, and frequent gatherings. Whether replacing worn surfaces before selling or updating a recently renovated room, we help homeowners achieve a polished result that fits their property.',
  ],
}

const HOME_CUSTOM_TAMPA = {
  layout: 'feature',
  heading: 'Custom Flooring Solutions for Tampa Kitchens, Bedrooms, and Living Spaces',
  intro:
    'From Tampa kitchens and bedrooms to busy living spaces, our flooring solutions are designed around your home’s style, layout, and everyday needs. As a trusted Flooring Contractor in Tampa, we provide carefully planned installation and replacement services that deliver a clean, durable, and polished finish. Whether you are refreshing one room, replacing worn flooring, or completing a larger home renovation, we help you choose practical flooring options and install them with attention to detail. Our goal is to create comfortable, attractive floors that complement Tampa homes and stand up to daily use.',
  items: [
    { h: 'Kitchen Flooring for Tampa Homes', d: 'Create a practical foundation for busy Tampa kitchens with flooring selected for daily cooking, dining, spills, and household traffic. We help homeowners choose options that complement cabinetry, layouts, and interior design preferences.' },
    { h: 'Bedroom Flooring for Comfortable Retreats', d: 'Give Tampa bedrooms a warmer, more finished appearance with flooring suited to the room’s style and use. We consider dimensions, existing finishes, and transitions to create a consistent installation that feels comfortable and refined.' },
    { h: 'Living Room Flooring for Everyday Durability', d: 'Refresh living spaces with flooring that balances visual appeal and dependable performance. Whether updating a home near Tampa Riverwalk or preparing a property for new occupants, we provide careful installation designed around the space.' },
  ],
}

/**
 * HOME
 * Hero → CTA (form) → Testimonials → Services → CTA → About →
 * Portfolio → CTA → FAQs → Service area
 */
export default function Home() {
  return (
    <MainLayout>
      <Seo
        path="/"
        location={MAIN}
        title="Top Flooring Contractor in Tampa - All About Flooring"
        description="All About Flooring Tampa Bay Contractors, Flooring Contractor in Tampa for floor installation, replacement, and residential flooring upgrades. Book Now!"
      />

      {/* Mobile alignment: reuse the shared .svcseo-page scope so the homepage's
          otherwise-centred section heads and intros left-align at <=900px, matching
          the location/service pages. Mobile-only - no base or desktop styling, and
          the hero (.hero, not .pghero) and closing form (in the layout) are untouched. */}
      <div className="svcseo-page">
      <HeroVideo
        eyebrow="Flooring · Kitchens · Bathrooms"
        headline={
          <>
            Best Flooring Contractors{' '}
            <br />
            in <em>Tampa FL</em>
          </>
        }
        sub={
          <>
            All About Flooring is a trusted Flooring Contractor in <b>{MAIN.city}</b>, installing
            hardwood, tile, and vinyl with the same crew from measure to final walkthrough.
          </>
        }
        ctaPrimary={{ label: 'Book a free measure', href: '#consult' }}
        ctaSecondary={{ label: 'See our work', href: '/portfolio' }}
      />

      <HeroBar location={MAIN} />

      <ConsultForm location={MAIN} formName={SITE.leadForm} />

      <Reviews location={MAIN} />

      <Services />

      <RoomTour />

      <Cta content={CTA_MID} location={MAIN} />

      <About moreHref={ABOUT_PATH} />

      <ContentSection section={HOME_QUALITY_TAMPA} />

      <Work projects={HOME_WORK} moreHref="/portfolio" />

      <Cta content={CTA_LATE} location={MAIN} />

      <ContentSection section={HOME_CUSTOM_TAMPA} wall />

      <Faqs />

      <ServiceArea
        primary={MAIN}
        intro={MAIN_AREA_INTRO}
      />

      <LocationMap location={MAIN} tight />
      </div>
    </MainLayout>
  )
}
