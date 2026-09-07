import Home from './pages/Home'
import {
  SERVICE_ROUTES,
  AREA_ROUTES,
  STPETE_SERVICE_ROUTES,
  STPETE_AREA_ROUTES,
  STPETE_BASE,
} from './data/routeIndex'
import { ABOUT_PATH } from './data/site'

/**
 * ─────────────────────────────────────────────────────────────
 *  SLUG REGISTRY — the SEO-critical file
 *
 *  Every path defined here is prerendered to a real HTML file at that
 *  exact URL. To preserve an indexed URL from the old site, add it here
 *  with the SAME slug rather than 301-ing it in public/_redirects — a
 *  redirect leaks a little ranking signal on every hop, and keeping the
 *  URL keeps its history intact.
 *
 *  Non-home pages are lazy so the homepage JS does not download every
 *  service/location page's SEO copy. Paths come from routeIndex.js
 *  (generated from the page data files).
 * ─────────────────────────────────────────────────────────────
 */

export const SECOND_LOCATION_SLUG = STPETE_BASE

const lazyPage = (loader, entry) => ({
  lazy: async () => {
    const mod = await loader()
    return { Component: mod.default }
  },
  entry,
})

const lazyWithProps = (loader, entry, props) => ({
  lazy: async () => {
    const { default: Page } = await loader()
    return { Component: () => <Page {...props} /> }
  },
  entry,
})

const serviceRoutes = SERVICE_ROUTES.map(({ slug, path }) => ({
  path,
  ...lazyWithProps(() => import('./pages/ServicePage'), 'src/pages/ServicePage.jsx', { slug }),
}))

const areaRoutes = AREA_ROUTES.filter((p) => !p.skipRoute).map(({ slug, path }) => ({
  path,
  ...lazyWithProps(() => import('./pages/AreaPage'), 'src/pages/AreaPage.jsx', { slug }),
}))

const stPeteServiceRoutes = STPETE_SERVICE_ROUTES.map(({ slug, path }) => ({
  path,
  ...lazyWithProps(
    () => import('./pages/StPeteInner'),
    'src/pages/StPeteInner.jsx',
    { kind: 'service', slug }
  ),
}))

const stPeteAreaRoutes = STPETE_AREA_ROUTES.map(({ slug, path }) => ({
  path,
  ...lazyWithProps(
    () => import('./pages/StPeteInner'),
    'src/pages/StPeteInner.jsx',
    { kind: 'area', slug }
  ),
}))

export const routes = [
  { path: '/', element: <Home />, entry: 'src/pages/Home.jsx' },
  { path: ABOUT_PATH, ...lazyPage(() => import('./pages/AboutPage'), 'src/pages/AboutPage.jsx') },
  { path: '/about', ...lazyPage(() => import('./pages/AboutPage'), 'src/pages/AboutPage.jsx') },
  { path: '/services', ...lazyPage(() => import('./pages/ServicesPage'), 'src/pages/ServicesPage.jsx') },
  ...serviceRoutes,
  {
    path: '/services/luxury-vinyl-plank',
    ...lazyWithProps(() => import('./pages/ServicePage'), 'src/pages/ServicePage.jsx', { slug: 'lvp' }),
  },
  { path: '/locations', ...lazyPage(() => import('./pages/LocationsPage'), 'src/pages/LocationsPage.jsx') },
  ...areaRoutes,
  { path: '/portfolio', ...lazyPage(() => import('./pages/PortfolioPage'), 'src/pages/PortfolioPage.jsx') },
  { path: '/contact', ...lazyPage(() => import('./pages/ContactPage'), 'src/pages/ContactPage.jsx') },
  {
    path: '/privacy-policy',
    ...lazyWithProps(() => import('./pages/LegalPage'), 'src/pages/LegalPage.jsx', { slug: 'privacy-policy' }),
  },
  {
    path: '/terms-and-conditions',
    ...lazyWithProps(() => import('./pages/LegalPage'), 'src/pages/LegalPage.jsx', { slug: 'terms-and-conditions' }),
  },
  {
    path: '/cookies-policy',
    ...lazyWithProps(() => import('./pages/LegalPage'), 'src/pages/LegalPage.jsx', { slug: 'cookies-policy' }),
  },
  { path: STPETE_BASE, ...lazyPage(() => import('./pages/SecondLocation'), 'src/pages/SecondLocation.jsx') },
  {
    path: `${STPETE_BASE}/services`,
    ...lazyWithProps(() => import('./pages/StPeteInner'), 'src/pages/StPeteInner.jsx', { kind: 'services' }),
  },
  ...stPeteServiceRoutes,
  {
    path: `${STPETE_BASE}/locations`,
    ...lazyWithProps(() => import('./pages/StPeteInner'), 'src/pages/StPeteInner.jsx', { kind: 'locations' }),
  },
  ...stPeteAreaRoutes,

  { path: '/404', ...lazyPage(() => import('./pages/NotFound'), 'src/pages/NotFound.jsx') },
  { path: '*', ...lazyPage(() => import('./pages/NotFound'), 'src/pages/NotFound.jsx') },
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
