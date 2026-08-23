import MainLayout from '../layouts/MainLayout'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Work from '../components/Work'
import Cta from '../components/Cta'
import { MAIN } from '../data/locations'
import { CTA_LATE } from '../data/cta'

/**
 * Portfolio. Homepage keeps a recent-work teaser; this page is every
 * project photograph, filterable by kitchens, bathrooms and floors.
 */
export default function PortfolioPage() {
  return (
    <MainLayout>
      <Seo
        path="/portfolio"
        location={MAIN}
        title={`Our Work | Kitchen, Bathroom & Flooring Projects in ${MAIN.city} | All About Flooring`}
        description={`Kitchen backsplashes, bathroom tile and flooring installs across ${MAIN.city}. Real project photography from All About Flooring. Free in-home measure.`}
      />

      <PageHero
        title="Portfolio"
        crumbs={[
          { href: '/', label: 'Home' },
          { label: 'Portfolio' },
        ]}
        image="/img/cta/herringbone-banner"
        alt="Herringbone wood flooring in a finished interior"
      />

      <Work watermark="Portfolio" heading="All" accent="work" paged />

      <Cta content={CTA_LATE} location={MAIN} />
    </MainLayout>
  )
}
