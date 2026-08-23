import Header from '../components/Header'
import Footer from '../components/Footer'
import InlineForm from '../components/InlineForm'
import ScrollFx from '../components/ScrollFx'
import ScrollTop from '../components/ScrollTop'
import { MAIN, NAV_AREAS } from '../data/locations'
import { NAV_SERVICES } from '../data/services'
import { ABOUT_PATH, SITE } from '../data/site'

export const MAIN_NAV = [
  { href: '/', label: 'Home' },
  { href: ABOUT_PATH, label: 'About' },
  { href: '/services', label: 'Services', children: NAV_SERVICES },
  { href: '/locations', label: 'Locations', children: NAV_AREAS },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact us' },
]

/** Shell for every page tied to the PRIMARY Google listing. */
export default function MainLayout({ children }) {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header location={MAIN} variant="main" nav={MAIN_NAV} />
      <main>{children}</main>
      <InlineForm location={MAIN} formName={SITE.leadForm} />
      <Footer location={MAIN} variant="main" nav={MAIN_NAV} />
      <ScrollFx />
      <ScrollTop />
    </>
  )
}
