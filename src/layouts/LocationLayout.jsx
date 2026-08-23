import Header from '../components/Header'
import Footer from '../components/Footer'
import InlineForm from '../components/InlineForm'
import ScrollFx from '../components/ScrollFx'
import ScrollTop from '../components/ScrollTop'
import { SECOND } from '../data/locations'
import { STPETE_BASE, STPETE_NAV, STPETE_NAV_SERVICES, STPETE_NAV_AREAS } from '../data/stpete'

/**
 * Shell for the St. Petersburg Google listing.
 * Own header, footer, NAP, services, locations, and lead form.
 */
export default function LocationLayout({ children }) {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header
        location={SECOND}
        variant="second"
        nav={STPETE_NAV}
        homeHref={STPETE_BASE}
      />
      <main>{children}</main>
      <InlineForm
        location={SECOND}
        formName={SECOND.leadForm}
        heading="Get started with"
        accent="All About Flooring"
        body="Free in-home measure across St. Petersburg and nearby Pinellas cities. Written price within 48 hours."
      />
      <Footer
        location={SECOND}
        variant="second"
        nav={STPETE_NAV}
        homeHref={STPETE_BASE}
        serviceLinks={STPETE_NAV_SERVICES}
        areaLinks={STPETE_NAV_AREAS}
      />
      <ScrollFx />
      <ScrollTop />
    </>
  )
}
