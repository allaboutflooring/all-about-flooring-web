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
import { MAIN } from '../data/locations'
import { CTA_MID, CTA_LATE } from '../data/cta'
import { WORK } from '../data/content'
import { ABOUT_PATH, SITE } from '../data/site'

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
        title={`All About Flooring Tampa Bay Contractors | Flooring Installation in ${MAIN.city}`}
        description={SITE.description}
      />

      <HeroVideo
        eyebrow="Flooring · Kitchens · Bathrooms"
        headline={
          <>
            Best Flooring Contractors
            <br />
            in <em>Tampa FL</em>
          </>
        }
        sub={
          <>
            All About Flooring installs hardwood, tile and vinyl across <b>{MAIN.city}</b> - and
            renovates the kitchens and bathrooms that sit on top of them. Same crew from measure to
            final walkthrough.
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

      <Work projects={WORK.slice(0, 9)} moreHref="/portfolio" />

      <Cta content={CTA_LATE} location={MAIN} />

      <Faqs />

      <ServiceArea
        primary={MAIN}
        intro="We cover the Tampa Bay area from Spring Hill down to Riverview, and across the bay to Clearwater and Dunedin."
      />
    </MainLayout>
  )
}
