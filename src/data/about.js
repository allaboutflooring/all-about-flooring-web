/**
 * ─────────────────────────────────────────────────────────────
 *  ABOUT SECTION CONTENT
 *
 *  Each tab carries its own photograph so History, How we work and
 *  The owner can show a different image without swapping the layout.
 * ─────────────────────────────────────────────────────────────
 */

export const ABOUT = {
  watermark: 'About us',
  eyebrow: 'Who lays your floor',
  headline: '15+ years of',
  headlineAccent: 'flooring expertise',

  tabs: [
    {
      key: 'history',
      label: 'History',
      img: '/img/about/history-tub.png',
      alt: 'Freestanding soaking tub in front of a circular mosaic feature wall and plantation shutters',
      body: [
        'At All About Flooring, we pride ourselves on being the premier flooring company in Tampa Bay for more than 15 years. As a family-owned business, our roots run deep in the community, and our commitment to excellence is a tradition passed down through generations.',
        'Our team is dedicated to providing top-notch flooring solutions that meet and exceed our clients’ expectations. Our journey began with a simple mission: to deliver quality flooring with exceptional service. Today, we stand as a testament to that mission, with countless satisfied customers and a reputation for reliability and craftsmanship.',
      ],
    },
    {
      key: 'approach',
      label: 'Our commitment',
      img: '/img/about/how-we-work.png',
      alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets, marble counters and gold hardware',
      body: [
        'We offer a comprehensive range of flooring solutions tailored to meet your unique needs. Our services include professional installation, repair, and maintenance of various flooring types such as hardwood, laminate, tile, carpet, and vinyl. Each project is handled with the utmost care and precision, ensuring that every detail is perfect. Whether you’re renovating your home, upgrading your office, or tackling a large commercial project, our experienced team is here to deliver exceptional results that stand the test of time.',
      ],
    },
    {
      key: 'owner',
      label: 'The owner',
      heading: 'Meet the Owner: Amanda Neve',
      img: '/img/about/amanda-neve.png?v=2',
      alt: 'Amanda Neve, owner of All About Flooring, in a cream blazer and jeans',
      body: [
        'Hi, I’m Amanda Neve, the face and heart behind our work! With a background in interior design, my passion for transforming spaces started back in 2020 when I began flipping homes in Knoxville, TN. What started as a creative outlet quickly became a full-blown love for construction, craftsmanship, and thoughtful design.',
        'After relocating to Tampa, FL, I realized something important—it’s the construction side of the industry that truly lights me up. Bringing clients’ visions to life, solving design challenges, and creating spaces that feel intentional, functional, and beautiful is what drives me every day.',
        'From concept to completion, I’m here to make the process seamless, inspiring, and exciting. Thank you for following along and trusting me with your homes and projects. The best is yet to come!',
      ],
    },
  ],

  points: [
    'Licensed and fully insured in Florida',
    'Free in-home measure, no obligation',
    'Itemised written price within 48 hours',
    'One crew from demolition to final detail',
  ],
}

/**
 * Dedicated /about page. Longer than the homepage tabs: the story, the
 * owner, and how a job actually runs, then a form. Nav "About" points
 * here rather than scrolling the homepage teaser.
 */
export const ABOUT_PAGE = {
  hero: {
    title: 'About us',
    crumbs: [
      { href: '/', label: 'Home' },
      { label: 'About us' },
    ],
    image: '/img/cta/oakroom-banner',
    alt: 'Oak flooring in a bright living room with a fireplace',
  },

  story: {
    tick: 'Our history',
    heading: 'A family-owned Tampa Bay tradition.',
    img: '/img/about/history-tub.png',
    alt: 'Freestanding soaking tub in front of a circular mosaic feature wall and plantation shutters',
    body: [
      'At All About Flooring, we pride ourselves on being the premier flooring company in Tampa Bay for more than 15 years. As a family-owned business, our roots run deep in the community, and our commitment to excellence is a tradition passed down through generations.',
      'Our team is dedicated to providing top-notch flooring solutions that meet and exceed our clients’ expectations. Our journey began with a simple mission: to deliver quality flooring with exceptional service. Today, we stand as a testament to that mission, with countless satisfied customers and a reputation for reliability and craftsmanship.',
    ],
  },

  commitment: {
    tick: 'Our commitment',
    heading: 'Our commitment to quality flooring services',
    body: [
      'We offer a comprehensive range of flooring solutions tailored to meet your unique needs. Our services include professional installation, repair, and maintenance of various flooring types such as hardwood, laminate, tile, carpet, and vinyl. Each project is handled with the utmost care and precision, ensuring that every detail is perfect. Whether you’re renovating your home, upgrading your office, or tackling a large commercial project, our experienced team is here to deliver exceptional results that stand the test of time.',
    ],
  },
}
