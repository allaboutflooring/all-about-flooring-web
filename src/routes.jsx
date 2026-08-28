import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServicePage from './pages/ServicePage'
import LocationsPage from './pages/LocationsPage'
import AreaPage from './pages/AreaPage'
import PortfolioPage from './pages/PortfolioPage'
import SecondLocation from './pages/SecondLocation'
import StPeteInner from './pages/StPeteInner'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'
import { SERVICE_PAGES } from './data/services'
import { AREA_PAGES } from './data/locations'
import { ABOUT_PATH } from './data/site'
import { STPETE_BASE, STPETE_SERVICE_PAGES, STPETE_AREA_PAGES } from './data/stpete'

/**
 * ─────────────────────────────────────────────────────────────
 *  SLUG REGISTRY — the SEO-critical file
 *
 *  Every path defined here is prerendered to a real HTML file at that
 *  exact URL. To preserve an indexed URL from the old site, add it here
 *  with the SAME slug rather than 301-ing it in public/_redirects — a
 *  redirect leaks a little ranking signal on every hop, and keeping the
 *  URL keeps its history intact.
 * ─────────────────────────────────────────────────────────────
 */

export const SECOND_LOCATION_SLUG = STPETE_BASE

const serviceRoutes = Object.entries(SERVICE_PAGES).map(([slug, p]) => ({
  path: p.path,
  element: <ServicePage slug={slug} />,
  entry: 'src/pages/ServicePage.jsx',
}))

const areaRoutes = Object.entries(AREA_PAGES)
  .filter(([, p]) => !p.skipRoute)
  .map(([slug, p]) => ({
    path: p.path,
    element: <AreaPage slug={slug} />,
    entry: 'src/pages/AreaPage.jsx',
  }))

const stPeteServiceRoutes = Object.entries(STPETE_SERVICE_PAGES).map(([slug]) => ({
  path: STPETE_SERVICE_PAGES[slug].path,
  element: <StPeteInner kind="service" slug={slug} />,
  entry: 'src/pages/StPeteInner.jsx',
}))

const stPeteAreaRoutes = Object.entries(STPETE_AREA_PAGES).map(([slug]) => ({
  path: STPETE_AREA_PAGES[slug].path,
  element: <StPeteInner kind="area" slug={slug} />,
  entry: 'src/pages/StPeteInner.jsx',
}))

export const routes = [
  { path: '/', element: <Home />, entry: 'src/pages/Home.jsx' },
  { path: ABOUT_PATH, element: <AboutPage />, entry: 'src/pages/AboutPage.jsx' },
  { path: '/about', element: <AboutPage />, entry: 'src/pages/AboutPage.jsx' },
  { path: '/services', element: <ServicesPage />, entry: 'src/pages/ServicesPage.jsx' },
  ...serviceRoutes,
  { path: '/services/luxury-vinyl-plank', element: <ServicePage slug="lvp" />, entry: 'src/pages/ServicePage.jsx' },
  { path: '/locations', element: <LocationsPage />, entry: 'src/pages/LocationsPage.jsx' },
  ...areaRoutes,
  { path: '/portfolio', element: <PortfolioPage />, entry: 'src/pages/PortfolioPage.jsx' },
  { path: '/contact', element: <ContactPage />, entry: 'src/pages/ContactPage.jsx' },
  { path: '/privacy-policy', element: <LegalPage slug="privacy-policy" />, entry: 'src/pages/LegalPage.jsx' },
  { path: '/terms-and-conditions', element: <LegalPage slug="terms-and-conditions" />, entry: 'src/pages/LegalPage.jsx' },
  { path: '/cookies-policy', element: <LegalPage slug="cookies-policy" />, entry: 'src/pages/LegalPage.jsx' },
  { path: STPETE_BASE, element: <SecondLocation />, entry: 'src/pages/SecondLocation.jsx' },
  { path: `${STPETE_BASE}/services`, element: <StPeteInner kind="services" />, entry: 'src/pages/StPeteInner.jsx' },
  ...stPeteServiceRoutes,
  { path: `${STPETE_BASE}/locations`, element: <StPeteInner kind="locations" />, entry: 'src/pages/StPeteInner.jsx' },
  ...stPeteAreaRoutes,

  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
]

/** Paths to write into sitemap.xml — excludes the 404 wildcard. */
export const indexablePaths = routes
  .filter(
    (r) =>
      r.path !== '*' &&
      r.path !== '/404' &&
      r.path !== '/about' &&
      r.path !== '/services/luxury-vinyl-plank'
  )
  .map((r) => r.path)
