/**
 * Canonical business structured data.
 *
 * ORGANIZATION_SCHEMA is emitted site-wide (every page, via Seo.jsx).
 * LOCAL_BUSINESS_SCHEMA is emitted on the homepage only.
 *
 * These replace the previous auto-generated HomeAndConstructionBusiness node,
 * which Seo.jsx no longer produces. Kept verbatim as supplied so the JSON-LD
 * on the page matches the intended markup exactly.
 */

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://flooringcontractorstampafl.com/#localbusiness',
  name: 'All About Flooring Tampa Bay Contractors',
  url: 'https://flooringcontractorstampafl.com/',
  telephone: '+18133139466',
  email: 'allaboutflooring.fl@gmail.com',
  description:
    'All About Flooring Tampa Bay Contractors provides professional flooring services in Tampa, Florida. As a local Tampa flooring company, our flooring installers handle a wide range of projects, from flooring installation to hardwood floor refinishing. Our flooring contractor team offers wood floor sanding, refinishing floors in Tampa, and applying floor polyurethane coats to protect and enhance durability. We also provide engineered hardwood installation and reliable wood floor refinishing near me searches. As an experienced flooring contractor in Tampa, we focus on delivering flooring services that include both residential and commercial needs. All About Flooring Tampa Bay – Where Every Step is a Masterpiece.',
  image: 'https://flooringcontractorstampafl.com/img/hero-poster.webp',
  logo: 'https://flooringcontractorstampafl.com/img/logo-white.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2002 N Lincoln Ave',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33607',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.8918945,
    longitude: -82.6262675,
  },
  hasMap: 'https://maps.app.goo.gl/GmZE5mfAh23CPhga9',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 27.8918945,
        longitude: -82.6262675,
      },
      geoRadius: '20 mi',
    },
    { '@type': 'AdministrativeArea', name: 'Odessa, FL' },
    { '@type': 'AdministrativeArea', name: 'Carrollwood, FL' },
    { '@type': 'AdministrativeArea', name: 'Temple Terrace, FL' },
    { '@type': 'AdministrativeArea', name: 'Citrus Park, FL' },
    { '@type': 'AdministrativeArea', name: 'Brandon, FL' },
    { '@type': 'AdministrativeArea', name: 'Palm Harbor, FL' },
    { '@type': 'AdministrativeArea', name: 'Clearwater, FL' },
    { '@type': 'AdministrativeArea', name: 'Dunedin, FL' },
    { '@type': 'AdministrativeArea', name: 'Wesley Chapel, FL' },
    { '@type': 'AdministrativeArea', name: 'Pinellas Park, FL' },
    { '@type': 'AdministrativeArea', name: 'Spring Hill, FL' },
    { '@type': 'AdministrativeArea', name: 'Riverview, FL' },
    { '@type': 'AdministrativeArea', name: 'St. Petersburg, FL' },
    { '@type': 'AdministrativeArea', name: 'Largo, FL' },
    { '@type': 'AdministrativeArea', name: 'Tarpon Springs, FL' },
    { '@type': 'AdministrativeArea', name: 'Safety Harbor, FL' },
    { '@type': 'AdministrativeArea', name: 'New Port Richey, FL' },
    { '@type': 'AdministrativeArea', name: 'Lutz, FL' },
    { '@type': 'AdministrativeArea', name: "Land O' Lakes, FL" },
    { '@type': 'AdministrativeArea', name: 'Apollo Beach, FL' },
    { '@type': 'AdministrativeArea', name: 'Ruskin, FL' },
    { '@type': 'AdministrativeArea', name: 'Valrico, FL' },
    { '@type': 'AdministrativeArea', name: 'Lithia, FL' },
    { '@type': 'AdministrativeArea', name: 'Oldsmar, FL' },
  ],
  knowsAbout: [
    'Flooring installation',
    'Hardwood flooring',
    'Floor refinishing and sanding',
    'Residential and commercial flooring',
    'Tile installation',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Luxury Vinyl Plank (LVP) Flooring Installation',
        description:
          'Professional installation of luxury vinyl plank flooring for durable, attractive, and low-maintenance residential and commercial floors.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Laminate Flooring Installation',
        description:
          'Professional laminate flooring installation providing a durable, stylish, and practical flooring solution for residential and commercial spaces.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Hardwood Flooring Installation',
        description:
          'Expert hardwood flooring installation using quality materials and precise techniques to create durable and timeless wood floors.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Engineered Hardwood Installation',
        description:
          'Professional engineered hardwood installation that combines the natural appearance of wood with a stable and durable flooring construction.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Hardwood Floor Refinishing & Sanding',
        description:
          'Professional hardwood floor sanding and refinishing to restore worn wood surfaces, improve their appearance, and renew their protective finish.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Floor Polyurethane Coat',
        description:
          'Professional polyurethane coating application that protects finished floors while enhancing durability, appearance, and resistance to everyday wear.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tile Installation',
        description:
          'Professional tile installation for residential and commercial spaces, including careful surface preparation, layout, placement, and finishing.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bathroom Tile & Backsplash Installation',
        description:
          'Professional bathroom tile and backsplash installation designed to provide durable, functional, and attractive finished surfaces.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Kitchen Design and Installation',
        description:
          'Kitchen design and installation services focused on creating functional, attractive spaces with coordinated layouts, materials, and finishes.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Cabinet & Countertop Design and Installation',
        description:
          'Professional cabinet and countertop design and installation tailored to improve kitchen storage, functionality, appearance, and overall finish.',
      },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '142',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Alisa' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'I used All About Flooring to refinish 2000 sq ft of herringbone walnut flooring. The result was fantastic as you can see from the pictures. I will use Nir and his team again. They are professional, efficient and respectful of my home. Most important is they are easy to do business with! Thank You!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Dean Robertson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Great experience from start to finish. Nir was very prompt and attentive to all of our needs, and the guys who installed our floors were prompt, professional, and very detail-oriented. I will absolutely call them again for any flooring need that we have in the future. Really glad we chose All About Flooring, and recommend them highly without hesitation.',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61553684777260',
    'https://www.pinterest.com/allaboutflooringfl/',
    'https://www.tiktok.com/@allaboutflooringtampa',
    'https://www.linkedin.com/company/all-about-flooring-tampa-bay-contractors/',
  ],
}

export const ST_PETE_LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id':
    'https://flooringcontractorstampafl.com/top-flooring-companies-st-petersburg/#localbusiness',
  name: 'ALL ABOUT FLOORING ST. PETERSBURG',
  url: 'https://flooringcontractorstampafl.com/top-flooring-companies-st-petersburg/',
  telephone: '+17277612688',
  email: 'allaboutflooring.fl@gmail.com',
  description:
    'All About Flooring St. Petersburg is a trusted flooring company providing professional flooring services throughout St. Petersburg, FL. Our experienced flooring installers specialize in precise flooring installation for residential and commercial projects. As a licensed flooring contractor, we handle a wide range of materials, including hardwood, vinyl, laminate, and tile. We focus on delivering quality workmanship, durable results, and reliable service from start to finish. Whether you’re upgrading a single room or renovating an entire property, our team ensures each installation meets the highest standards of craftsmanship and care.',
  image: 'https://flooringcontractorstampafl.com/img/hero-poster.webp',
  logo: 'https://flooringcontractorstampafl.com/img/logo-white.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2400 13th Ave S',
    addressLocality: 'St. Petersburg',
    addressRegion: 'FL',
    postalCode: '33712',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.794059,
    longitude: -82.6930676,
  },
  hasMap: 'https://maps.app.goo.gl/q3h9rv71GKRPzKbG8',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 27.794059,
        longitude: -82.6930676,
      },
      geoRadius: '20 mi',
    },
    { '@type': 'AdministrativeArea', name: 'St. Petersburg, FL' },
    { '@type': 'AdministrativeArea', name: 'Treasure Island, FL' },
    { '@type': 'AdministrativeArea', name: 'Seminole, FL' },
    { '@type': 'AdministrativeArea', name: 'Gulfport, FL' },
    { '@type': 'AdministrativeArea', name: 'Largo, FL' },
    { '@type': 'AdministrativeArea', name: 'Pinellas Park, FL' },
    { '@type': 'AdministrativeArea', name: 'Madeira Beach, FL' },
    { '@type': 'AdministrativeArea', name: 'South Pasadena, FL' },
    { '@type': 'AdministrativeArea', name: 'Safety Harbor, FL' },
  ],
  knowsAbout: [
    'Flooring installation',
    'Hardwood flooring',
    'Tile installation',
    'Residential and commercial flooring',
    'Hardwood floor refinishing and sanding',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Luxury Vinyl Plank (LVP) Flooring Installation',
        description:
          'Professional installation of waterproof luxury vinyl plank flooring for durable, low-maintenance, and attractive residential and commercial floors.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Laminate Flooring Installation',
        description:
          'Expert laminate flooring installation delivering a durable, stylish, and cost-effective surface for busy living spaces.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Hardwood Flooring Installation',
        description:
          'Precise hardwood flooring installation using quality materials to create timeless, long-lasting wood floors.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Engineered Hardwood Installation',
        description:
          'Professional engineered hardwood installation combining natural wood beauty with added stability for Florida’s climate.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Hardwood Floor Refinishing',
        description:
          'Hardwood floor refinishing that restores worn surfaces, revives color, and renews the protective finish.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Wood Floor Sanding & Polyurethane',
        description:
          'Complete wood floor sanding and polyurethane coating to smooth, protect, and enhance the durability of existing hardwood.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tile Installation',
        description:
          'Professional tile installation with careful surface preparation, layout, and finishing for lasting, attractive results.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bathroom Tile & Backsplash Installation',
        description:
          'Bathroom tile and backsplash installation designed for durable, water-resistant, and beautifully finished surfaces.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Kitchen Design and Installation',
        description:
          'Kitchen design and installation focused on functional layouts, quality materials, and coordinated finishes.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Cabinet & Countertop Installation',
        description:
          'Cabinet and countertop installation that improves kitchen storage, function, and overall appearance.',
      },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ranielen Carolina' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'All About Flooring St Pete did a fantastic job installing tile in my home. The floors came out beautiful — super clean lines and a perfect finish. Everyone I dealt with was friendly and professional. I’m very happy with the work and I’d definitely use them again!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Kārlis R' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'The crew showed up right on time and explained everything before they started. They worked smoothly and left the place cleaner than they found it. The floors look incredible.',
    },
  ],
  sameAs: [
    'https://x.com/aboutflooringfl',
    'https://www.instagram.com/allaboutflooringstpetersburg/',
    'https://www.pinterest.com/allaboutflooringstpetersburg/',
    'https://www.youtube.com/@allaboutflooringstpetersburg',
  ],
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://flooringcontractorstampafl.com/#organization',
  name: 'All About Flooring Tampa Bay Contractors',
  url: 'https://flooringcontractorstampafl.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://flooringcontractorstampafl.com/img/logo-white.webp',
  },
  image: 'https://flooringcontractorstampafl.com/img/hero-poster.webp',
  telephone: '+18133139466',
  email: 'allaboutflooring.fl@gmail.com',
  description:
    'All About Flooring Tampa Bay Contractors provides professional flooring services in Tampa, Florida. Our flooring services include flooring installation, hardwood floor refinishing and sanding, engineered hardwood installation, floor polyurethane coatings, tile installation, bathroom tile and backsplash installation, kitchen design and installation, and cabinet and countertop design and installation.',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61553684777260',
    'https://www.pinterest.com/allaboutflooringfl/',
    'https://www.tiktok.com/@allaboutflooringtampa',
    'https://www.linkedin.com/company/all-about-flooring-tampa-bay-contractors/',
  ],
}
