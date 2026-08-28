import LocationLayout from '../layouts/LocationLayout'
import Seo from '../components/Seo'
import HeroVideo from '../components/HeroVideo'
import HeroBar from '../components/HeroBar'
import ConsultForm from '../components/ConsultForm'
import Cta from '../components/Cta'
import Services from '../components/Services'
import About from '../components/About'
import Work from '../components/Work'
import Faqs from '../components/Faqs'
import ServiceArea from '../components/ServiceArea'
import { SECOND } from '../data/locations'
import { CTA_MID, CTA_LATE } from '../data/cta'
import { HOME_WORK } from '../data/content'
import {
  STPETE_BASE,
  STPETE_SERVICE_CARDS,
  STPETE_FAQS,
  STPETE_ABOUT,
  STPETE_AREA_INTRO,
  stPeteAreaHref,
} from '../data/stpete'

/**
 * St. Petersburg listing home.
 * Hero → CTA → Services → CTA → About → Portfolio → CTA → FAQs → Service area
 */
export default function SecondLocation() {
  return (
    <LocationLayout>
      <Seo
        path={STPETE_BASE}
        location={SECOND}
        title={`Flooring Installation & Flooring Contractor in St. Petersburg | All About Flooring`}
        description={`Flooring installers and flooring services in St. Petersburg - a local flooring company and flooring contractor for LVP, hardwood, tile and refinishing. Free measure. Call ${SECOND.phone}.`}
      />

      <HeroVideo
        eyebrow="Flooring installation · St. Petersburg"
        headline={
          <>
            All About Flooring
            <br />
            <em>St. Petersburg</em>
          </>
        }
        sub={
          <>
            A St. Petersburg flooring company and flooring contractor for hardwood, tile and vinyl
            installation. Same crew from measure to walkthrough across <b>St. Petersburg</b> and
            nearby Pinellas cities.
          </>
        }
        ctaPrimary={{ label: 'Book a free measure', href: '#consult' }}
        ctaSecondary={{ label: 'See our work', href: '#work' }}
      />

      <HeroBar
        location={SECOND}
        items={[
          { label: 'Call now', href: `tel:${SECOND.phoneE164}` },
          { label: '15+ years of flooring experience' },
          { label: 'St. Petersburg, FL and surrounding areas' },
          {
            label: 'Professional high-end commercial & residential flooring services',
            href: '#services',
          },
        ]}
      />

      <ConsultForm
        location={SECOND}
        formName={SECOND.leadForm}
        heading="Ready to get your St. Petersburg floors done right?"
        intro="Leave your details and one of our estimators will call to arrange a free in-home measure in St. Petersburg, talk through materials, and give you an itemised written price."
      />

      <Services
        items={STPETE_SERVICE_CARDS}
        heading="Flooring services"
        accent="in St. Petersburg"
        intro="From tearing out the old floor to installation and finishing, our St. Petersburg crew handles the job. No handoffs - one team of flooring installers responsible for getting it done right."
      />

      <Cta content={CTA_MID} location={SECOND} />

      <About content={STPETE_ABOUT} />

      <Work projects={HOME_WORK} heading="Recent" accent="work" />

      <Cta content={CTA_LATE} location={SECOND} />

      <Faqs items={STPETE_FAQS} />

      <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={STPETE_AREA_INTRO} />
    </LocationLayout>
  )
}
