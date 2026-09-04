import LocationLayout from '../layouts/LocationLayout'
import Seo from '../components/Seo'
import HeroVideo from '../components/HeroVideo'
import HeroBar from '../components/HeroBar'
import ConsultForm from '../components/ConsultForm'
import Cta from '../components/Cta'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import About from '../components/About'
import Work from '../components/Work'
import Faqs from '../components/Faqs'
import ServiceArea from '../components/ServiceArea'
import LocationMap from '../components/LocationMap'
import { ContentSection } from '../components/ServiceSeoContent'
import { SECOND } from '../data/locations'
import { CTA_MID, CTA_LATE } from '../data/cta'
import { HOME_WORK } from '../data/content'
import { GOOGLE_REVIEWS_STPETE } from '../data/reviews'
import {
  STPETE_BASE,
  STPETE_SERVICE_CARDS,
  STPETE_FAQS,
  STPETE_ABOUT,
  STPETE_AREA_INTRO,
  stPeteAreaHref,
} from '../data/stpete'

// SEO prose + feature sections added to the St. Petersburg landing page,
// rendered with the shared ContentSection component (same as the homepage and
// the location pages). Backgrounds keep the bone/white rhythm: prose white
// between the two bone sections (About / Work); feature bone between the CTA
// banner and the white FAQs.
const STPETE_QUALITY = {
  layout: 'prose',
  heading: 'Quality Flooring Installation Services for Homes Throughout St. Petersburg',
  body: [
    'All About Flooring St. Petersburg provides dependable flooring installation for homeowners seeking durable, attractive surfaces that complement their homes. As experienced Flooring Contractor in St. Petersburg, we install flooring with attention to measurements, preparation, transitions, and finishing details. Our approach helps create floors that look consistent and perform well under everyday use.',
    'From Historic Kenwood to Crescent Lake and homes near Central Avenue, local properties have different layouts and renovation needs. Whether replacing worn flooring after years of family traffic or updating a room before listing, we provide practical solutions designed around each home’s style and function.',
  ],
}

const STPETE_CUSTOM = {
  layout: 'feature',
  heading: 'Custom Flooring Solutions for St. Petersburg Kitchens, Bedrooms, and Living Spaces',
  intro:
    'Our Flooring Contractor in St. Petersburg create practical flooring solutions for kitchens, bedrooms, and living spaces, combining durable installation with finishes suited to your home.',
  items: [
    { h: 'Kitchen Flooring for St. Petersburg Homes', d: 'Choose flooring that handles everyday cooking, spills, meals, and household activity while complementing your kitchen’s cabinets, layout, and overall design.' },
    { h: 'Bedroom Flooring for Added Comfort', d: 'Refresh bedrooms with flooring selected for comfort, appearance, and daily use. We create clean installations that coordinate naturally with existing finishes and furnishings.' },
    { h: 'Living Room Flooring for Everyday Life', d: 'Upgrade living areas with flooring that balances durability and style. Our careful installation helps create a polished surface suited to family gatherings, guests, and regular foot traffic.' },
  ],
}

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
        title="Flooring Contractor | All About Flooring St. Petersburg"
        description="All About Flooring St. Petersburg, Flooring Contractor in St. Petersburg for floor installation, replacement, and residential flooring upgrades. Book Now!"
      />

      {/* Mobile alignment: reuse the shared .svcseo-page scope so the otherwise-
          centred section heads and intros left-align at <=900px, matching the
          homepage and the location pages. Mobile-only - no base or desktop
          styling; the hero and the closing form (in the layout) are untouched. */}
      <div className="svcseo-page">
      <HeroVideo
        eyebrow="Flooring installation · St. Petersburg"
        headline={
          <>
            Best Flooring Contractors{' '}
            <br />
            in <em>St. Petersburg</em>
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

      <Reviews location={SECOND} items={GOOGLE_REVIEWS_STPETE} />

      <Services
        items={STPETE_SERVICE_CARDS}
        heading="Flooring services"
        accent="in St. Petersburg"
        intro="From tearing out the old floor to installation and finishing, our St. Petersburg crew handles the job. No handoffs - one team of flooring installers responsible for getting it done right."
      />

      <Cta content={CTA_MID} location={SECOND} />

      <About content={STPETE_ABOUT} />

      <ContentSection section={STPETE_QUALITY} />

      <Work projects={HOME_WORK} heading="Recent" accent="work" />

      <Cta content={CTA_LATE} location={SECOND} />

      <ContentSection section={STPETE_CUSTOM} wall />

      <Faqs items={STPETE_FAQS} />

      <ServiceArea primary={SECOND} areaHref={stPeteAreaHref} intro={STPETE_AREA_INTRO} />

      <LocationMap location={SECOND} tight />
      </div>
    </LocationLayout>
  )
}
