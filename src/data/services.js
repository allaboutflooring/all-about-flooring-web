/**
 * Service hub copy plus every individual service page.
 *
 * `inNav: true` pages appear in the Services menu and the card grid.
 * Hidden pages keep indexed URLs without competing in those lists.
 * `key` is the background photo / icon in public/img/services/bg.
 */
export const SERVICES_PAGE = {
  hero: {
    title: 'Services',
    crumbs: [
      { href: '/', label: 'Home' },
      { label: 'Services' },
    ],
    image: '/img/cta/oakroom-banner',
    alt: 'Oak flooring in a bright living room with a fireplace',
  },
}

const SHARED_POINTS = {
  measure: 'Free in-home measure, no obligation',
  price: 'Itemised written price within 48 hours',
  crew: 'One crew from prep to walkthrough',
  licensed: 'Licensed and insured in Florida',
}

function page(partial) {
  return {
    inNav: true,
    webp: true,
    pointsTick: 'What you get',
    pointsHeading: 'A proper install, not a drop-and-go.',
    pointsBody: [
      'The product is only half the floor. Prep, the right adhesive or underlayment, and clean work at the walls are what keep it looking right in a Tampa summer.',
    ],
    ...partial,
  }
}

export const SERVICE_PAGES = {
  lvp: page({
    key: 'lvp',
    path: '/services/best-lvp-flooring-tampa',
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    metaTitle: 'LVP Flooring Installation - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors installs LVP flooring — waterproof planks, custom layouts and clean transitions. Free measure, call today!',
    heroTitle: 'LVP Flooring Installation',
    crumb: 'LVP Flooring',
    navLabel: 'LVP Flooring Installation',
    workKey: 'wood-look-plank-tile',
    alt: 'Empty room with newly installed wood-look luxury vinyl plank flooring, white baseboards and a shaded window',
    description:
      'Best LVP flooring installation in Tampa. Waterproof luxury vinyl plank, quiet underfoot and built for Florida humidity. Free in-home measure.',
    tick: 'Luxury vinyl plank',
    heading: 'Waterproof, quiet, and built for Florida.',
    body: [
      'Waterproof, quiet underfoot and forgiving on a less-than-perfect subfloor. LVP is our first recommendation for kitchens, basements and homes with dogs - and anywhere a Tampa summer would punish a solid hardwood.',
      'We moisture-test the slab, level where it needs it, and set expansion the way the manufacturer wrote it. Click-lock or glue-down, depending on the room. You get an itemised price before a single plank goes down.',
    ],
    pointsTick: 'Why LVP',
    pointsHeading: 'What you get with a proper install.',
    pointsBody: [
      'The product is only half the floor. Subfloor prep, the right adhesive or underlayment, and clean cuts at the walls are what keep LVP flat in August.',
    ],
    points: [
      'Waterproof wear layer - kitchens, baths, laundry, sliders',
      'Quiet underfoot with the right underlayment',
      'Forgiving over a less-than-perfect concrete slab',
      'Pet- and kid-friendly, no seasonal gapping',
      'Click-lock or glue-down, specified per room',
      SHARED_POINTS.price,
    ],
    // Finalised SEO content, appended below the existing LVP copy.
    // Rendered by ServicePage.jsx when `seo` is present; other service
    // pages omit this key and render unchanged.
    seo: {
      whyChoose: {
        heading: 'Why choose All About Flooring Tampa Bay Contractors',
        intro:
          'Our team combines careful preparation, accurate installation, and quality workmanship to create attractive floors built around your space. We focus on clean details, dependable results, and a smooth experience from planning through completion.',
        points: [
          'Experienced flooring installation professionals',
          'Careful preparation before installation begins',
          'Accurate plank placement and alignment',
          'Clean edges and transition details',
          'Quality-focused workmanship throughout every project',
          'Practical solutions for everyday spaces',
          'Clear communication from start to finish',
        ],
      },
      process: {
        heading: 'Our process for a smooth and professional flooring installation',
        intro:
          'We follow a structured process to prepare your space, plan the layout, install each plank carefully, and inspect the completed flooring.',
        steps: [
          {
            title: 'Surface inspection',
            body: 'We inspect the installation area for uneven surfaces and other concerns before preparing it for the flooring.',
          },
          {
            title: 'Layout planning',
            body: 'We plan plank direction, spacing, room transitions, and placement to create a balanced finished appearance.',
          },
          {
            title: 'Plank installation',
            body: 'We install each plank with careful alignment and spacing for a secure, consistent, and professional finish.',
          },
          {
            title: 'Final inspection',
            body: 'We inspect the completed flooring and finishing details to ensure the project meets our quality standards.',
          },
        ],
      },
      // Ordered for the reflowed layout: feature grid, centred prose,
      // (process interleaved between these two by ServicePage), feature grid,
      // centred prose. `prose` bodies are the supplied copy verbatim; `feature`
      // items (h3 + short description) are newly authored per request.
      sections: [
        {
          layout: 'feature',
          heading: 'Transform outdated interiors with durable and stylish flooring',
          items: [
            { h: 'Refresh a worn floor', d: 'Replace scratched, faded, or dated flooring without a full remodel.' },
            { h: 'Wood-look that fits', d: 'Plank styles chosen to sit naturally with your existing finishes.' },
            { h: 'Planned before we lay it', d: 'Room dimensions, plank direction, and transitions set up front.' },
            { h: 'A consistent finish', d: 'Careful prep and layout for a polished, even result.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Achieve clean plank layouts through precise professional installation',
          body: [
            'A well-installed floor depends on careful planning as much as accurate workmanship. Room dimensions, plank direction, transitions, and surface conditions can all affect how the finished flooring looks once installation is complete.',
            'Our team evaluates these factors before beginning the installation. We establish an appropriate layout, maintain consistent plank alignment, and pay close attention to edges and transitions. This approach helps create clean lines and a balanced appearance while addressing potential installation concerns before they become visible problems. The result is a flooring upgrade designed around both appearance and practical everyday use.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Create comfortable living spaces with practical flooring upgrades',
          items: [
            { h: 'Upgrade, not gut', d: 'A noticeable change without a complete room renovation.' },
            { h: 'Built for daily traffic', d: 'A versatile surface for the rooms you use the most.' },
            { h: 'More than laying planks', d: 'Measurements, surface prep, and layout decisions all matter.' },
            { h: 'Finished properly', d: 'Detailed finishing ties the new floor into the room.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Upgrade high-use areas with attractive and easy-care flooring',
          body: [
            'Frequently used rooms benefit from flooring that combines visual appeal with practical performance. LVP can provide a modern surface that works well with different interior styles while helping homeowners create a more refreshed appearance.',
            'Professional installation makes a difference in areas where flooring receives regular daily use. Careful measurements, accurate plank placement, and detailed finishing help create a uniform appearance throughout the space. Whether you are refreshing one room or updating several connected areas, thoughtful installation can give your interior a more cohesive look while providing a practical surface suited to everyday household needs.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What should be checked before LVP flooring installation begins?',
          a: 'The floor should be evaluated for uneven areas, damage, moisture concerns, and other conditions that could affect installation. Proper preparation provides a better foundation for the finished flooring.',
        },
        {
          q: 'Can LVP be installed over an existing floor?',
          a: 'Depending on the existing flooring and its condition, LVP may be installed over a suitable surface. The existing floor should first be evaluated to determine whether preparation or removal is necessary.',
        },
        {
          q: 'How do you determine the best direction for LVP planks?',
          a: 'Plank direction is selected based on room dimensions, sightlines, connected spaces, and transitions. Careful planning helps create a balanced layout that looks consistent throughout the installation area.',
        },
        {
          q: 'How do you maintain consistent flooring between connected rooms?',
          a: 'We plan the plank direction, starting points, spacing, and transitions before installation. This helps connected areas flow together instead of appearing visually disconnected.',
        },
        {
          q: 'Why is surface preparation important for LVP installation?',
          a: 'Proper preparation helps address uneven areas and unsuitable conditions before the planks are installed. A suitable surface supports better alignment and contributes to a cleaner finished appearance.',
        },
      ],
    },
  }),

  laminate: page({
    key: 'laminate',
    path: '/services/laminate-flooring-installation',
    title: 'Laminate Flooring Installation',
    metaTitle: 'Laminate Flooring Installation - All About Flooring',
    metaDescription:
      'Laminate Flooring Installation by All About Flooring Tampa Bay Contractors, including plank layout, floor fitting, and replacement installs. Call today!',
    heroTitle: 'Laminate Flooring Installation',
    crumb: 'Laminate',
    navLabel: 'Laminate Flooring Installation',
    alt: 'Laminate plank flooring installed in a finished interior',
    description:
      'Laminate flooring installation in Tampa. Click-lock over a levelled base, expansion set for Florida humidity. Free in-home measure.',
    tick: 'Laminate',
    heading: 'The hardest-wearing surface per dollar.',
    body: [
      'Laminate is a photographic wear layer over a dense core. It is not vinyl and it is not hardwood - and installing it like either is how it peaks at the joints in July. We treat it as its own product.',
      'The slab has to be flat. We level, set the underlayment, and leave the expansion the manufacturer wrote. Stairs, reducers, and vent cuts are part of the price, not extras on the last day.',
    ],
    points: [
      'Click-lock over a levelled, moisture-checked base',
      'Expansion gaps set for Tampa humidity',
      'Stairs, reducers and vents in the written price',
      SHARED_POINTS.crew,
      SHARED_POINTS.measure,
    ],
    // Finalised SEO content, appended below the existing laminate copy. This
    // page has one prose + two feature sections, so they are ordered
    // feature / prose / feature; ServicePage interleaves Process between them,
    // keeping the LVP alternating flow with no two feature grids adjacent.
    seo: {
      whyChoose: {
        heading: 'Why choose All About Flooring Tampa Bay Contractors for laminate installation',
        intro:
          'Our experienced team focuses on accurate measurements, careful preparation, clean installation, and dependable finishing. We create attractive laminate floors that feel solid underfoot, fit the room properly, and perform reliably through everyday use.',
        points: [
          'Accurate measurements and thoughtful layout planning',
          'Careful preparation before installation begins',
          'Consistent plank alignment and spacing',
          'Clean edges and professional transitions',
          'Attention to detail throughout installation',
          'Durable results for everyday living',
        ],
      },
      process: {
        heading: 'Our laminate flooring installation process from preparation to final inspection',
        intro:
          'We use a proven process to prepare the space, fit each plank accurately, manage transitions, and complete a clean final inspection.',
        steps: [
          {
            title: 'Room Assessment',
            body: 'We inspect the space, check floor conditions, and measure carefully to plan an accurate laminate layout.',
          },
          {
            title: 'Surface Preparation',
            body: 'We address uneven areas and prepare the base so laminate planks can sit securely and finish evenly properly.',
          },
          {
            title: 'Precise Installation',
            body: 'We install planks with planned spacing and alignment, creating consistent rows and clean transitions.',
          },
          {
            title: 'Final Inspection',
            body: 'We review the floor, check details and transitions, and make sure the installation meets our standards.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Get a cleaner, more consistent finish with expert installation',
          items: [
            { h: 'Layout Planning', d: 'We plan plank direction, starting points, and transitions carefully to create a balanced appearance across the room.' },
            { h: 'Material Preparation', d: 'We allow materials to adjust as appropriate and confirm quantities before installation begins, helping avoid delays.' },
            { h: 'Plank Alignment', d: 'We maintain consistent spacing and alignment throughout installation for clean rows and a polished appearance.' },
            { h: 'Transition Finishing', d: 'We carefully finish edges and transitions where flooring meets adjoining surfaces, creating a neat, cohesive result.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Transform dated rooms with durable laminate flooring solutions',
          body: [
            'Professional laminate flooring installation creates durable, attractive floors with a clean finish and dependable fit. We prepare surfaces carefully, plan plank layouts, and account for room dimensions so the finished floor looks balanced rather than pieced together. Proper preparation helps reduce movement, gaps, and uneven results.',
            'Whether updating a dated room or replacing worn flooring, we provide a practical approach that suits the space and daily demands. Laminate offers a convincing wood-look appearance while remaining easy to care for in many living areas. We focus on neat edges, consistent alignment, and an intentional finished result.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Built for comfortable everyday use and lasting visual appeal',
          items: [
            { h: 'Floor Layout Accuracy', d: 'Careful layout planning helps maintain balanced plank patterns, reducing awkward cuts and creating a more cohesive appearance throughout the room.' },
            { h: 'Surface Fit And Stability', d: 'Proper preparation supports a secure installation by addressing surface conditions that could otherwise contribute to movement, gaps, or uneven flooring.' },
            { h: 'Clean Installation Details', d: 'Precise cuts, consistent spacing, and carefully finished edges help create a polished floor that looks professionally installed from every angle.' },
            { h: 'Practical Long-Term Value', d: 'A properly installed laminate floor provides an attractive, easy-care surface that can complement changing interiors while handling regular household activity.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you prepare a floor before laminate installation?',
          a: 'We inspect the existing surface, identify uneven areas or installation concerns, and prepare the base so the laminate can be installed securely and evenly.',
        },
        {
          q: 'How do you plan the direction of laminate planks?',
          a: 'We consider the room shape, natural sightlines, entry points, and adjoining areas to determine a layout that creates a balanced and visually consistent result.',
        },
        {
          q: 'Can laminate flooring be installed around existing room transitions?',
          a: 'Yes. We plan cuts and transition points carefully so the new flooring connects neatly with adjoining surfaces while maintaining a clean overall appearance.',
        },
        {
          q: 'What helps prevent gaps between laminate planks?',
          a: 'Accurate measurements, suitable surface preparation, proper installation techniques, and careful plank alignment all help create tight, consistent joints throughout the floor.',
        },
        {
          q: 'How do you handle laminate installation in rooms with unusual layouts?',
          a: 'We measure the space carefully and plan starting points, cuts, plank direction, and transitions around the room’s unique shape to maintain a cohesive finished layout.',
        },
      ],
    },
  }),

  hardwood: page({
    key: 'hardwood',
    path: '/services/hardwood-flooring-installation',
    title: 'Hardwood Flooring Installation',
    metaTitle: 'Hardwood Flooring Installation - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors offers Hardwood Flooring Installation, custom layouts, plank fitting, and wood floor installation. Call today!',
    heroTitle: 'Hardwood Flooring Installation',
    crumb: 'Hardwood',
    navLabel: 'Hardwood Flooring Installation',
    workKey: 'character-hickory-floor',
    webp: true,
    alt: 'Character hickory hardwood flooring in a finished room',
    description:
      'Solid hardwood flooring installation in Tampa. Nail-down and glue-down oak, maple and hickory, acclimatised on site. Free in-home measure.',
    tick: 'Solid hardwood',
    heading: 'Nail-down and glue-down, specified for the room.',
    body: [
      'Solid oak, maple and hickory, nailed or glued to spec. Boards acclimatise on site before a single one goes down, because Tampa humidity moves wood and a floor that skipped that step will show it by September.',
      'We check subfloor moisture, pick the fastener and adhesive for the species and the room, and finish or site-finish as the job needs. This page is installation. Refinishing of a floor you already own lives on its own page.',
    ],
    points: [
      'Solid oak, maple and hickory',
      'Nail-down or glue-down, specified per room',
      'Acclimatised on site before install',
      'Moisture-tested subfloor',
      SHARED_POINTS.price,
    ],
    // Finalised SEO content, appended below the existing hardwood copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Choose Experienced Professionals For Precise Hardwood Flooring Installation Results',
        intro:
          'All About Flooring Tampa Bay Contractors combines careful planning, skilled workmanship, and attention to detail to deliver flooring that looks polished and performs reliably. We focus on accurate layouts, proper preparation, and clean finishing details.',
        points: [
          'Experienced installation with careful planning',
          'Precise layouts for balanced plank placement',
          'Careful preparation before installation begins',
          'Clean transitions between connected flooring areas',
          'Practical guidance for your flooring needs',
          'Attention to lasting workmanship and finish',
        ],
      },
      process: {
        heading: 'Our Hardwood Flooring Installation Process From Planning To Completion',
        intro:
          'We follow a structured installation process that addresses preparation, layout, placement, and final quality checks from start to finish.',
        steps: [
          {
            title: 'Room Assessment',
            body: 'We evaluate the room, subfloor, and conditions carefully before recommending the right installation approach.',
          },
          {
            title: 'Layout Planning',
            body: 'We plan plank direction, spacing, transitions, and layout details for a balanced finished appearance.',
          },
          {
            title: 'Expert Installation',
            body: 'We install each plank carefully, maintaining proper alignment and secure placement throughout the project.',
          },
          {
            title: 'Final Inspection',
            body: 'We inspect the completed floor for alignment, fit, transitions, and finish before wrapping up the work.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Installation Details That Improve Hardwood Floor Performance And Appearance',
          items: [
            { h: 'Balanced Plank Layout', d: 'Proper hardwood installation creates a stable floor that complements furniture, lighting, and everyday movement.' },
            { h: 'Clean Room Transitions', d: 'Careful layout planning helps maintain balanced plank lines while creating clean transitions between connected areas.' },
            { h: 'Reliable Surface Preparation', d: 'Thorough preparation addresses subfloor concerns before installation, helping reduce movement, gaps, and uneven areas.' },
            { h: 'Consistent Plank Placement', d: 'Skilled placement supports consistent spacing and alignment, giving the floor a refined, professional appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Transform Your Interior With Beautifully Installed Hardwood Flooring',
          body: [
            'Hardwood Flooring Installation can transform a room with natural warmth, lasting character, and a clean architectural feel. Professional installation helps ensure planks follow a balanced layout while fitting the room’s dimensions and traffic patterns. We consider the subfloor, plank direction, transitions, and installation requirements before work begins, helping create a finished floor that feels intentional rather than pieced together. The right preparation also supports stability and a more consistent appearance, especially across larger or connected spaces where small layout errors can become noticeable over time. This attention to detail makes the finished space easier to enjoy.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Smart Flooring Planning For Consistent Results Across Every Room',
          items: [
            { h: 'Warm Interior Character', d: 'Hardwood brings warmth and character to living spaces while providing a durable surface for everyday household use.' },
            { h: 'Thoughtful Space Planning', d: 'A thoughtful installation plan accounts for room dimensions, traffic patterns, and visual flow for a cohesive result.' },
            { h: 'Secure Flooring Fit', d: 'Professional fitting helps hardwood sit securely and evenly, supporting performance and preserving its intended design.' },
            { h: 'Refined Finishing Details', d: 'Attention to transitions and finishing details gives connected rooms a smoother and more unified flooring appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Solve Common Flooring Concerns With A Carefully Planned Installation',
          body: [
            'Homeowners often choose hardwood when worn flooring, dated finishes, or inconsistent surfaces no longer suit the space. A carefully planned installation can refresh the room while improving visual continuity and everyday usability. We focus on accurate measurements, suitable placement, secure fitting, and clean transitions so the finished floor looks cohesive from one area to the next. By addressing preparation details before installation, we help reduce avoidable issues such as uneven results, awkward plank patterns, or visible gaps that can detract from the finished appearance. It also gives the new surface a polished, dependable foundation.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you determine the best hardwood plank layout for a room?',
          a: 'We consider room dimensions, natural sightlines, entrances, connected areas, and plank direction to create a balanced and visually consistent layout.',
        },
        {
          q: 'Why is subfloor preparation important before installing hardwood?',
          a: 'A properly prepared subfloor provides a more stable foundation and helps reduce problems such as uneven placement, movement, gaps, and inconsistent results.',
        },
        {
          q: 'Can hardwood flooring be installed across connected rooms?',
          a: 'Yes. The installation can be planned around room transitions, plank direction, and visual flow to create a more cohesive appearance between connected spaces.',
        },
        {
          q: 'How do you prevent awkward plank patterns during installation?',
          a: 'Careful measurements and layout planning help distribute plank lengths and joints naturally, avoiding repetitive patterns and creating a more balanced finished floor.',
        },
        {
          q: 'What details are checked after the hardwood installation is complete?',
          a: 'We review plank alignment, spacing, transitions, secure placement, and overall finish to ensure the completed flooring meets quality and appearance expectations.',
        },
      ],
    },
  }),

  engineered: page({
    key: 'engineered',
    path: '/services/engineered-hardwood-installation',
    title: 'Engineered Hardwood Installation',
    metaTitle: 'Engineered Hardwood Installation - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors provides Engineered Hardwood Installation, hardwood floor fitting, plank layout, and precision fitting. Call now!',
    heroTitle: 'Engineered Hardwood Installation',
    crumb: 'Engineered Hardwood',
    navLabel: 'Engineered Hardwood Installation',
    alt: 'Engineered hardwood flooring with a real timber wear layer',
    description:
      'Engineered hardwood installation in Tampa. Real timber wear layer on a stable core - the right hardwood over concrete slab. Free in-home measure.',
    tick: 'Engineered hardwood',
    heading: 'Real wood, stable enough for a Florida slab.',
    body: [
      'Engineered hardwood is a real timber wear layer on a plywood or HDF core. It is the hardwood we will lay over concrete, and the one we recommend in rooms that sit against a bath or a slider.',
      'Glue-down, float, or nail - we specify it from the manufacturer and the moisture reading, not from habit. A thick wear layer can be refinished later. A thin one cannot. We tell you which you are buying before you sign.',
    ],
    points: [
      'Real timber wear layer, stable core',
      'The right hardwood over concrete slab',
      'Glue-down, float or nail, specified per job',
      'Wear-layer thickness explained before you buy',
      SHARED_POINTS.crew,
    ],
    // Finalised SEO content, appended below the existing engineered copy. This
    // page has three prose + one feature section; supplied content order is
    // preserved. ServicePage interleaves Process between them and alternates
    // bone/white backgrounds so adjacent prose stays visually separated.
    seo: {
      whyChoose: {
        heading: 'Why choose us for engineered hardwood installation',
        intro:
          'All About Flooring Tampa Bay Contractors delivers careful planning, precise installation, and dependable craftsmanship. We focus on proper floor preparation, balanced layouts, clean transitions, and a finished floor designed for lasting everyday performance.',
        points: [
          'Experienced flooring installation craftsmanship',
          'Careful subfloor preparation and inspection',
          'Precise plank placement and alignment',
          'Clean, consistent installation throughout rooms',
          'Thoughtful layouts for balanced appearance',
          'Attention to transitions and finishing details',
          'Professional service from start to finish',
        ],
      },
      process: {
        heading: 'Our process for engineered hardwood installation',
        intro:
          'We follow a careful installation process that prepares the surface, plans the layout, installs each plank, and completes final details.',
        steps: [
          {
            title: 'Surface Preparation',
            body: 'We inspect and prepare the installation surface, addressing uneven areas before placing engineered hardwood planks.',
          },
          {
            title: 'Layout Planning',
            body: 'We plan plank direction, spacing, and placement carefully to create a balanced appearance with natural visual flow.',
          },
          {
            title: 'Precision Installation',
            body: 'Each plank is positioned with consistent alignment and spacing to produce a stable, clean, professional-looking floor.',
          },
          {
            title: 'Final Inspection',
            body: 'We review the completed installation, check transitions and details, and ensure the finished flooring meets quality expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'prose',
          heading: 'Upgrade your home with durable engineered hardwood flooring',
          body: [
            'Engineered hardwood can give rooms the warmth and character of real wood while offering a practical construction for everyday living. It works well for homeowners updating dated interiors, replacing worn flooring, or creating a more polished look across connected spaces.',
            'A successful installation depends on more than placing planks over the existing surface. Proper preparation, thoughtful layout planning, suitable installation methods, and accurate cuts help reduce visible inconsistencies and create a floor that looks intentional from room to room.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Create a balanced floor layout that complements your space',
          body: [
            'Every room has different dimensions, sightlines, doorways, and architectural features that can affect how flooring should be positioned. A carefully planned layout helps avoid awkward plank placement and keeps the finished installation visually balanced.',
            'Our installation approach considers room proportions, plank direction, starting points, and transitions before work begins. This attention to detail helps create a cohesive appearance while accommodating practical areas such as hallways, open floor plans, and adjoining rooms.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Built for attractive results and dependable everyday performance',
          body: [
            'Durability and appearance both matter when selecting engineered hardwood for an active household. A properly installed floor provides a refined wood appearance while giving homeowners a practical surface for daily foot traffic and changing interior needs.',
            'Professional installation helps address common concerns such as uneven surfaces, inconsistent spacing, poorly planned transitions, and noticeable layout irregularities. Careful workmanship makes the finished floor feel like a deliberate part of the room rather than simply a new material placed underfoot.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Precision matters when installing engineered hardwood across connected rooms',
          items: [
            { h: 'Balanced Plank Alignment', d: 'Careful alignment keeps plank rows visually consistent and helps create a polished appearance throughout connected spaces.' },
            { h: 'Thoughtful Room Transitions', d: 'Well-planned transitions help different rooms connect naturally while maintaining a clean and cohesive flooring appearance.' },
            { h: 'Accurate Cutting And Fitting', d: 'Precise cuts around walls and architectural features create tighter fits and reduce distracting gaps or uneven edges.' },
            { h: 'Consistent Installation Quality', d: 'A methodical installation approach supports uniform spacing, stable placement, and a finished floor that looks professionally completed.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can engineered hardwood be installed across an open floor plan?',
          a: 'Yes. A coordinated layout can carry plank direction and visual flow between connected rooms while accounting for transitions and room dimensions.',
        },
        {
          q: 'How do you handle uneven surfaces before installation?',
          a: 'The installation area is assessed first so uneven sections and surface concerns can be identified and addressed before flooring is installed.',
        },
        {
          q: 'How is the plank layout determined for each room?',
          a: 'Layout decisions consider room dimensions, sightlines, entry points, plank direction, and transitions to create a balanced finished appearance.',
        },
        {
          q: 'Can engineered hardwood work well in high-traffic areas?',
          a: 'It can be a practical choice for busy areas when the flooring is properly selected, installed over a suitable surface, and cared for according to its requirements.',
        },
        {
          q: 'What makes professional installation different from simply placing the planks?',
          a: 'Professional installation involves surface preparation, layout planning, accurate fitting, consistent spacing, transition planning, and final quality checks.',
        },
      ],
    },
  }),

  refinishing: page({
    key: 'refinishing',
    path: '/services/hardwood-floor-refinishing',
    title: 'Hardwood Floor Refinishing & Sanding',
    metaTitle: 'Hardwood Floor Refinishing - All About Flooring',
    metaDescription:
      'Hardwood Floor Refinishing - All About Flooring Tampa Bay Contractors for scratch refinishing, dull finish renewal, worn floor restoration. Call us today!',
    heroTitle: 'Hardwood Floor Refinishing',
    crumb: 'Refinishing',
    navLabel: 'Hardwood Floor Refinishing',
    alt: 'Hardwood floor being sanded and prepared for a new finish',
    description:
      'Hardwood floor refinishing in Tampa - dustless sanding, stain, and polyurethane coating. Usually a third of the cost of replacement. Free in-home measure.',
    tick: 'Sanding, stain, polyurethane',
    heading: 'Bring back a floor you already own.',
    body: [
      'Sand, stain and reseal existing hardwood, or replace the boards a leak took out. For most Tampa homes this is a third of the cost of a full replacement and none of the demolition.',
      'We sand through the grits, stain if you want a new colour, and build polyurethane - oil or water-based - in coats. Walkable in a day, furniture back within the week. Engineered floors with enough wear layer can be refinished the same way; we check that before we quote.',
    ],
    pointsTick: 'What this covers',
    pointsHeading: 'Sanding, refinishing, and the coat that protects it.',
    pointsBody: [
      'Wood floor sanding, hardwood floor refinishing, engineered refinishing, and floor polyurethane coating live on this page so the job is specified as one sequence, not three trades.',
    ],
    points: [
      'Dustless sanding through the grits',
      'Stain matching or a new colour',
      'Oil or water-based polyurethane, built in coats',
      'Board replacement where a leak took them out',
      'Engineered hardwood refinished when the wear layer allows',
      SHARED_POINTS.price,
    ],
    // Finalised SEO content, appended below the existing refinishing copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose All About Flooring Tampa Bay Contractors for refinishing?',
        intro:
          'Our experienced team focuses on careful preparation, consistent finishing, and dependable workmanship. We assess each floor’s condition before beginning, helping protect existing hardwood while delivering a refreshed, polished appearance that fits the space.',
        points: [
          'Experienced hardwood refinishing workmanship',
          'Careful preparation before finishing',
          'Attention to surface imperfections',
          'Consistent finish across floorboards',
          'Quality-focused project completion',
          'Respectful care for your property',
        ],
      },
      process: {
        heading: 'Our hardwood floor refinishing process delivers a smooth, lasting finish',
        intro:
          'We follow a detailed process that prepares, renews, and inspects your hardwood for dependable results.',
        steps: [
          {
            title: 'Surface Assessment',
            body: 'We inspect board condition, existing finish, and wear patterns to determine the most suitable refinishing approach.',
          },
          {
            title: 'Deep Scratch Preparation',
            body: 'Damaged areas are prepared carefully so scratches and minor surface flaws do not undermine the renewed finish.',
          },
          {
            title: 'Even Finish Application',
            body: 'Finish is applied evenly across prepared boards to create consistent coverage, sheen, and a polished appearance.',
          },
          {
            title: 'Final Quality Inspection',
            body: 'Every refinished area is checked for uniformity, coverage, smoothness, and details before the project is completed.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Practical Refinishing Solutions For Scratched And Dull Hardwood Surfaces',
          items: [
            { h: 'Reviving Worn Appearance', d: 'Refinishing helps tired boards regain a cleaner, richer appearance while preserving the character of the existing wood.' },
            { h: 'Improving Surface Protection', d: 'A renewed finish creates a protective surface that helps hardwood better withstand everyday traffic, spills, and wear.' },
            { h: 'Restoring Natural Character', d: 'Careful preparation and finishing can highlight natural grain while giving older floors a refreshed visual appeal.' },
            { h: 'Refreshing High-Traffic Floors', d: 'High-use rooms benefit from renewed surfaces that look cleaner and provide added protection against everyday wear.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Restore Worn Hardwood Floors Without Full Replacement Disruption',
          body: [
            'Refinishing can restore worn hardwood surfaces without the disruption of a full floor replacement. It is a practical choice when scratches, dull finishes, fading, or everyday wear have reduced the floor’s appearance and protection.',
            'Our team prepares the existing surface, addresses imperfections, and applies a fresh finish suited to its condition. The result is a cleaner, more consistent appearance with renewed protection against daily use, helping extend quality hardwood’s useful life while improving the room’s presentation. This approach also preserves the character of existing boards, making it useful when flooring remains structurally sound but no longer looks its best.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Professional Techniques That Help Extend Hardwood Floor Lifespan',
          items: [
            { h: 'Careful Surface Assessment', d: 'We inspect the floor before work begins, identifying wear patterns and surface conditions that can affect refinishing results.' },
            { h: 'Controlled Surface Preparation', d: 'Thorough preparation creates a cleaner foundation for finishing, helping minimize visible imperfections and improve overall consistency.' },
            { h: 'Consistent Finish Coverage', d: 'Even application helps produce a uniform appearance across boards while maintaining the floor’s natural visual character.' },
            { h: 'Detailed Completion Review', d: 'A final inspection checks the refinished surface for consistency, smoothness, coverage, and overall workmanship before completion.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve Floor Appearance While Preserving Existing Hardwood Character',
          body: [
            'Hardwood Floor Refinishing offers a practical way to refresh flooring that has lost its original appeal through years of regular use. It can help reduce the visible impact of scratches, scuffs, dull areas, and worn finishes.',
            'Rather than replacing boards that remain structurally sound, refinishing focuses on renewing the existing surface. Proper preparation and finishing can bring greater consistency to the floor while highlighting its natural grain and character. This makes the process especially valuable for homeowners who want a noticeable visual improvement while keeping the established hardwood throughout their space.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What condition should hardwood floors be in before refinishing?',
          a: 'The boards should generally be structurally sound, without widespread movement or severe damage. We assess their condition first to determine whether refinishing is appropriate.',
        },
        {
          q: 'Can refinishing improve hardwood floors with visible scratches?',
          a: 'Yes. Surface scratches and signs of wear can often be addressed during preparation before the new finish is applied, depending on their depth and severity.',
        },
        {
          q: 'How do you handle floors with a dull or uneven finish?',
          a: 'The existing finish is evaluated and properly prepared before refinishing. This helps create a more consistent surface and improves the appearance of dull or uneven areas.',
        },
        {
          q: 'Is refinishing suitable for older hardwood flooring?',
          a: 'Older hardwood can often be refinished when the boards remain stable and have enough usable wood for the process. An assessment helps determine the appropriate approach.',
        },
        {
          q: 'How can I tell if refinishing is better than replacing my hardwood?',
          a: 'If the boards are structurally sound but mainly affected by scratches, fading, dullness, or surface wear, refinishing may provide the desired improvement without replacing the existing flooring.',
        },
      ],
    },
  }),

  poly: page({
    key: 'sanding',
    path: '/services/floor-polyurethane-coat',
    title: 'Floor Polyurethane Coat in Tampa',
    metaTitle: 'Floor Polyurethane Coat - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors offers Floor Polyurethane Coat services for worn floors, protective recoating, and durable finishes. Call today.',
    heroTitle: 'Floor Polyurethane Coat',
    crumb: 'Polyurethane',
    navLabel: 'Floor Polyurethane Coat',
    alt: 'Hardwood floor with a fresh polyurethane coat',
    description:
      'Floor polyurethane coat in Tampa. Oil or water-based polyurethane over a dustless sand, built in coats. Walkable in a day.',
    tick: 'Protective floor coating',
    heading: 'The coat that actually protects the floor.',
    body: [
      'A polyurethane coat is not a wipe-on refresh. We sand to a surface the finish can bond to, then build oil or water-based polyurethane in coats. Recoats on a sound floor are possible; failed finish has to come off.',
      'This work also lives on our hardwood floor refinishing page, because sanding and coating are one sequence. This URL stays live for people searching the coating itself.',
    ],
    points: [
      'Oil or water-based polyurethane',
      'Dustless sand before the first coat',
      'Walkable in a day, furniture within the week',
      'Recoat or full refinish, specified on site',
    ],
    // Finalised SEO content, appended below the existing polyurethane copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us for dependable floor polyurethane coating results',
        intro:
          'All About Flooring Tampa Bay Contractors focuses on careful surface preparation, consistent application, and finishes suited to everyday floor use. Our approach helps improve durability, appearance, and protection while addressing existing wear with practical, professional workmanship.',
        points: [
          'Careful preparation before every coating',
          'Even application for consistent coverage',
          'Durable protection against everyday wear',
          'Professional attention to floor condition',
          'Clean, polished finish with lasting appeal',
          'Solutions tailored to floor requirements',
        ],
      },
      process: {
        heading: 'Our process for a smooth and durable floor finish',
        intro:
          'We follow a structured coating process that prepares the floor properly and supports reliable adhesion, coverage, and long-term performance.',
        steps: [
          {
            title: 'Surface inspection',
            body: 'We assess floor condition, identify surface concerns, and determine preparation requirements before coating begins.',
          },
          {
            title: 'Floor preparation',
            body: 'We clean and prepare the surface carefully, creating a suitable foundation for strong coating adhesion.',
          },
          {
            title: 'Coating application',
            body: 'We apply the polyurethane evenly and consistently, helping create a smooth protective layer across the floor.',
          },
          {
            title: 'Final inspection',
            body: 'We review the finished surface for consistent coverage, appearance, and coating quality before completing the project.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Key coating features that support long-lasting floor performance',
          items: [
            { h: 'Wear resistance', d: 'Designed to help floors withstand everyday foot traffic, scuffs, and surface friction while maintaining a consistent finish.' },
            { h: 'Surface protection', d: 'Creates a protective barrier that helps shield suitable flooring surfaces from routine wear and moisture exposure.' },
            { h: 'Smooth appearance', d: 'Provides a clean, even finish that can improve the overall presentation of an aging or worn floor.' },
            { h: 'Easier upkeep', d: 'A properly finished surface can make routine cleaning simpler while helping preserve the floor’s finished appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'How polyurethane coating improves floor durability and appearance',
          body: [
            'Polyurethane coating creates a durable protective surface that helps floors handle daily traffic, scuffs, moisture, and routine wear. It is a practical choice when an existing floor needs stronger surface protection without sacrificing a clean, finished appearance.',
            'A properly applied Floor Polyurethane Coat can also refresh the visual character of a floor while making routine care easier. Professional preparation and even application help the coating bond securely, reduce premature peeling, and produce a consistent finish suited to the floor’s condition and intended use.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Floor coating considerations for different flooring conditions',
          items: [
            { h: 'Worn surface renewal', d: 'A professional coating can improve the appearance of suitable floors showing dullness, light wear, or surface scuffing.' },
            { h: 'High-traffic areas', d: 'Coating provides an added protective layer for spaces where repeated foot traffic can gradually affect floor surfaces.' },
            { h: 'Finish consistency', d: 'Proper preparation and application help create uniform coverage, reducing noticeable differences across the completed floor.' },
            { h: 'Existing floor assessment', d: 'Evaluating the substrate first helps determine whether coating is appropriate and what preparation the surface requires.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'When professional floor coating solves common surface problems',
          body: [
            'Floors can gradually lose their clean appearance as regular traffic creates scratches, dull areas, scuffs, and surface wear. Professional coating provides a protective layer designed to help address these concerns while giving the floor a more uniform finished look.',
            'It can be especially useful when the existing surface remains serviceable but needs added protection and renewed presentation. Rather than overlooking gradual deterioration, property owners can use a professionally applied coating to improve everyday resilience and help extend the useful appearance of the floor.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can polyurethane coating be applied over a worn existing floor?',
          a: 'In many cases, yes, provided the existing floor is suitable and properly prepared. Surface condition, adhesion, and existing coatings should be evaluated first.',
        },
        {
          q: 'What floor problems can a polyurethane coating help address?',
          a: 'It can help improve protection against routine scuffs, surface wear, dullness, and everyday traffic while giving suitable floors a more consistent finished appearance.',
        },
        {
          q: 'Why is surface preparation important before applying polyurethane?',
          a: 'Proper preparation removes contaminants and addresses surface conditions that could interfere with adhesion. This helps reduce issues such as uneven coverage, peeling, or premature coating failure.',
        },
        {
          q: 'Can the coating change the appearance of an existing floor?',
          a: 'Yes. Depending on the selected finish and floor condition, polyurethane can enhance the surface with a cleaner, more uniform appearance while adding protective performance.',
        },
        {
          q: 'How do I know whether my floor is suitable for polyurethane coating?',
          a: 'A professional assessment is the best way to determine suitability. The floor type, current finish, surface condition, moisture exposure, and intended use should all be considered before application.',
        },
      ],
    },
  }),

  tile: page({
    key: 'tile',
    path: '/services/tile-installation',
    title: 'Tile Installation',
    metaTitle: 'Tile Installation - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors offers Tile Installation, custom layouts, residential tile installation, and tile floor installation. Call today!',
    heroTitle: 'Tile Installation',
    crumb: 'Tile',
    navLabel: 'Tile Installation',
    workKey: 'checkerboard-open-plan',
    alt: 'Diagonal checkerboard porcelain tile meeting wood-look plank at a kitchen',
    description:
      'Tile installation in Tampa - porcelain and natural stone, large format included. Substrate levelled first so the floor stays flat. Free in-home measure.',
    tick: 'Porcelain and stone',
    heading: 'Level the substrate first. Then the tile.',
    body: [
      'Porcelain and natural stone, large format included. Lippage on a 1200mm tile is what happens when nobody levels the floor. We check flatness, pour or patch where it needs it, and set with the right mortar for the body of the tile.',
      'Floors, walls, kitchens, and wet areas. Layout is drawn before a tile is cut so grout lines land on the room, not on a sliver at the bathtub. This page is general tile. Showers and kitchen backsplashes have their own page.',
    ],
    points: [
      'Porcelain and natural stone',
      'Large-format floors, levelled first',
      'Mortar and movement joints specified per tile',
      'Layout drawn before the first cut',
      SHARED_POINTS.crew,
    ],
    // Finalised SEO content, appended below the existing tile copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us For Reliable Tile Installation And Lasting Results',
        intro:
          'All About Flooring Tampa Bay Contractors combines careful preparation, precise placement, and practical design considerations to deliver tile surfaces that look polished and perform reliably. We focus on details that support lasting results.',
        points: [
          'Experienced installation with careful attention',
          'Precise layouts and consistent tile spacing',
          'Thorough surface preparation before installation',
          'Clean edges and smooth transitions',
          'Practical solutions for everyday spaces',
          'Quality-focused workmanship from start to finish',
          'Designs tailored to your room',
        ],
      },
      process: {
        heading: 'Our Process For A Smooth And Precise Tile Installation',
        intro:
          'We follow a careful installation process that keeps preparation, layout, placement, and finishing details organized for dependable results.',
        steps: [
          {
            title: 'Surface Preparation',
            body: 'We prepare the installation surface carefully to support stable tile placement and a cleaner finished result.',
          },
          {
            title: 'Layout Planning',
            body: 'We plan tile placement around room dimensions, focal points, edges, and transitions for balanced results.',
          },
          {
            title: 'Precise Installation',
            body: 'Each tile is positioned with consistent spacing and alignment to create a neat, professional-looking surface.',
          },
          {
            title: 'Final Inspection',
            body: 'We review alignment, spacing, transitions, and visible details to confirm the finished installation meets our standards.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Get Cleaner Tile Results Through Careful Surface Preparation And Planning',
          items: [
            { h: 'Surface Assessment', d: 'We evaluate the installation surface to identify conditions that could affect tile placement, alignment, or long-term performance.' },
            { h: 'Layout Coordination', d: 'We organize tile placement around room dimensions and visual focal points to create a balanced, cohesive finished surface.' },
            { h: 'Spacing Control', d: 'Consistent spacing supports clean lines and a professional appearance while helping the overall tile pattern feel intentional.' },
            { h: 'Edge Planning', d: 'We carefully consider exposed edges and transition points so the completed installation connects naturally with surrounding areas.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create Durable, Attractive Floors With Expert Tile Installation Techniques',
          body: [
            'A thoughtfully installed tile surface can refresh a room while adding durability and visual structure. Tile works well for spaces that see regular foot traffic, moisture, or daily activity, giving homeowners a practical finish that can complement many interior styles.',
            'Our Tile Installation approach focuses on more than placing tiles. We consider surface condition, layout, spacing, alignment, and transitions to create a consistent result. Careful preparation helps reduce uneven areas and supports a finished surface that feels intentional, comfortable, and built for everyday use. The result combines practical performance with a cleaner, more finished appearance.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Choose Practical Tile Designs For Comfortable Everyday Living Spaces',
          items: [
            { h: 'Style Flexibility', d: 'Choose layouts that complement your room while balancing visual appeal, practical use, and lasting performance.' },
            { h: 'Durable Results', d: 'Durable installation helps tiled surfaces handle daily activity while preserving a polished, attractive appearance.' },
            { h: 'Clean Transitions', d: 'A well-planned tile surface connects areas naturally, with clean edges and smooth transitions that feel intentional.' },
            { h: 'Easy Upkeep', d: 'Properly installed tile offers a practical finish that is easy to clean and maintain through everyday household use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve Room Style And Function With Carefully Planned Tile Layouts',
          body: [
            'Choosing the right tile layout can make a room feel more balanced, open, and cohesive. A well-planned installation helps address worn finishes, dated appearances, awkward transitions, and surfaces that no longer match the way the space is used.',
            'Tile Installation can also provide a practical foundation for updating kitchens, bathrooms, entryways, living areas, and other high-use spaces. We work around room dimensions and design preferences while paying attention to details such as tile alignment, edge placement, and consistent spacing for a polished finish. Thoughtful planning helps the finished surface complement the room rather than overwhelm it.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you prepare a surface before tile installation?',
          a: 'We assess the surface condition, address installation concerns, and prepare the area so tiles can be placed on a stable, suitable base.',
        },
        {
          q: 'Can you create a tile layout around an existing room design?',
          a: 'Yes. We consider room dimensions, focal points, edges, and surrounding finishes to develop a layout that works naturally with the existing space.',
        },
        {
          q: 'How do you keep tile spacing and alignment consistent?',
          a: 'Careful layout planning and precise placement help maintain consistent spacing, straight lines, and balanced positioning throughout the installation.',
        },
        {
          q: 'What happens if the existing surface is uneven?',
          a: 'We evaluate the condition before installation and determine the appropriate preparation needed to create a more suitable surface for tile placement.',
        },
        {
          q: 'Can tile installation update an outdated-looking room?',
          a: 'Yes. A thoughtfully planned tile layout can refresh dated spaces while improving visual cohesion, durability, and everyday practicality.',
        },
      ],
    },
  }),

  bathroom: page({
    key: 'bathroom',
    path: '/services/bathroom-tile-backsplash-installation',
    title: 'Bathroom Tile & Backsplash Installation',
    metaTitle: 'Bathroom Tile & Backsplash - All About Flooring',
    metaDescription:
      'Bathroom tile & backsplash installation in Tampa by All About Flooring — shower walls, floors, niches and kitchen backsplashes. Call today!',
    heroTitle: 'Bathroom Tile & Backsplash Installation',
    crumb: 'Bath & Backsplash',
    navLabel: 'Bathroom Tile & Backsplash',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    description:
      'Bathroom tile and kitchen backsplash installation in Tampa. Waterproof membrane, shower walls, niches, and backsplash tile. Free in-home measure.',
    tick: 'Showers, baths, kitchens',
    heading: 'Waterproof first. Tile second.',
    body: [
      'Shower walls, bathroom floors, niches, and kitchen backsplashes. The waterproof membrane goes on to spec before a single tile, because grout is not waterproof and a pretty shower that leaks is a rebuild in five years.',
      'Niches are cut to the tile module so nothing lands on a sliver. Backsplashes are laid out around outlets, windows, and the range. Same crew that does the floor tile, so the grout colour and the joint width match through the house.',
    ],
    points: [
      'Waterproof membrane before any tile',
      'Shower walls, floors and curbs',
      'Niches cut to the tile module',
      'Kitchen backsplash, outlets and range planned in',
      SHARED_POINTS.measure,
    ],
    // Finalised SEO content, appended below the existing bath/backsplash copy.
    // This page has one prose + two feature sections (the supplied orphan
    // heading "Improve Bathroom Style..." had no body and was dropped per
    // direction). Ordered feature / prose / feature so ServicePage interleaves
    // Process between them and no two feature grids sit adjacent.
    seo: {
      whyChoose: {
        heading: 'Why Choose Our Bathroom Tile And Backsplash Installation Services',
        intro:
          'All About Flooring Tampa Bay Contractors combines careful preparation, precise installation, and design-focused workmanship to create bathroom surfaces that look polished, perform reliably, and complement your space for years.',
        points: [
          'Precise layouts for balanced visual appeal',
          'Careful surface preparation before installation',
          'Clean, consistent tile placement throughout',
          'Detailed work around fixtures and edges',
          'Practical solutions for uneven surfaces',
          'Quality-focused workmanship from start to finish',
        ],
      },
      process: {
        heading: 'Our Process For Professional Bathroom Tile Installation',
        intro:
          'We follow a structured installation process that keeps your project organized, precise, and focused on lasting results.',
        steps: [
          {
            title: 'Plan Layout',
            body: 'We review measurements, patterns, focal points, and transitions to establish a balanced installation plan.',
          },
          {
            title: 'Prepare Surface',
            body: 'We prepare the installation area carefully, addressing surface conditions before placing any tile.',
          },
          {
            title: 'Install Tile',
            body: 'We position each tile with consistent spacing and alignment for a clean, professional appearance.',
          },
          {
            title: 'Finish Details',
            body: 'We complete edges, transitions, and final details carefully, leaving the finished surface ready for use.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Handle Challenging Bathroom Layouts With Precise Installation Techniques',
          items: [
            { h: 'Custom Layout Planning', d: 'Thoughtful planning creates balanced patterns that work naturally with bathroom dimensions, fixtures, and focal areas.' },
            { h: 'Accurate Tile Placement', d: 'Careful positioning keeps grout lines consistent and creates a clean, professional finish across the installation.' },
            { h: 'Fixture Area Detailing', d: 'Precise cuts around fixtures help maintain a polished appearance while reducing awkward gaps and uneven edges.' },
            { h: 'Edge And Transition Work', d: 'Neat transitions and finished edges provide a cohesive look where tiled surfaces meet surrounding materials.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create A More Functional And Visually Appealing Bathroom Space',
          body: [
            'A well-designed bathroom surface can make the entire room feel cleaner, brighter, and more cohesive. Bathroom Tile & Backsplash Installation provides a practical way to refresh dated areas while introducing a polished design that suits your preferences. From subtle patterns to statement-making layouts, the right tile arrangement can help define walls, shower areas, and other important surfaces.',
            'Professional installation also helps address everyday concerns such as inconsistent spacing, uneven placement, and poorly finished edges. Careful planning ensures the tile works naturally around fixtures and room dimensions. The result is a finished bathroom that combines attractive details with dependable workmanship and easier long-term upkeep.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Choose Durable Finishes That Complement Your Bathroom Design',
          items: [
            { h: 'Style Coordination', d: 'Tile patterns and layouts can be selected to complement existing colors, fixtures, and overall bathroom design.' },
            { h: 'Surface Preparation', d: 'Proper preparation provides a stable foundation that supports accurate placement and a more consistent finished appearance.' },
            { h: 'Pattern Consistency', d: 'Consistent spacing and alignment help repeating patterns flow smoothly across walls and other tiled surfaces.' },
            { h: 'Long-Term Appeal', d: 'Professional installation delivers a finished surface designed to maintain its appearance through everyday bathroom use.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you install tile around existing bathroom fixtures?',
          a: 'Yes. Tile can be carefully planned and cut around fixtures to create clean edges while maintaining the intended layout and spacing.',
        },
        {
          q: 'Can you create a backsplash that matches my bathroom design?',
          a: 'Yes. The backsplash layout can be coordinated with your existing finishes, room proportions, and preferred visual style for a cohesive result.',
        },
        {
          q: 'What happens if the bathroom surface is uneven?',
          a: 'The installation area is assessed during preparation, and appropriate surface corrections can be addressed before tile placement to support a more consistent finish.',
        },
        {
          q: 'Can you install a specific tile pattern in a small bathroom?',
          a: 'Yes. Patterns can be planned around the room dimensions so the design remains visually balanced without making the space feel unnecessarily crowded.',
        },
        {
          q: 'How do you keep grout lines and tile placement consistent?',
          a: 'Careful measurements, layout planning, spacing techniques, and ongoing alignment checks help maintain consistent joints and a professional overall appearance.',
        },
      ],
    },
  }),

  kitchen: page({
    key: 'kitchen',
    path: '/services/kitchen-design-and-installation',
    title: 'Kitchen Design and Installation',
    metaTitle: 'Kitchen Design and Installation - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors: Kitchen Design and Installation, custom kitchen planning, layout design, and tailored installation. Call today!',
    heroTitle: 'Kitchen Design and Installation',
    crumb: 'Kitchen Design',
    navLabel: 'Kitchen Design and Installation',
    workKey: 'white-shaker-kitchen',
    webp: true,
    alt: 'White Shaker kitchen with marble mosaic backsplash, black hardware and stainless appliances',
    description:
      'Kitchen design and installation in Tampa. Cabinets, countertops, backsplash and flooring sequenced by one crew. Free in-home measure.',
    tick: 'Kitchens, start to finish',
    heading: 'The whole kitchen, sequenced so you are not waiting on three trades.',
    body: [
      'Cabinets, countertops, backsplash and the floor that runs through the room. We design the layout, write one itemised price, and install in an order that keeps the kitchen down for days, not months.',
      'Full gut or a targeted refresh. Hardware, appliances and lighting are planned with the cabinets so nothing is left as a leftover for a second company. Same crew that does the floor - so the plank, the grout and the toe-kick actually meet.',
    ],
    pointsTick: 'What you get',
    pointsHeading: 'A kitchen install that is one job, not a pile of quotes.',
    pointsBody: [
      'The cabinets are only half the room. Tops, splash, flooring and the gaps between them are where a kitchen either lands or looks like three different contractors passed through.',
    ],
    points: [
      'Cabinet design and installation',
      'Quartz, granite and solid-surface tops',
      'Backsplash tile laid out around outlets and the range',
      'Flooring sequenced with the cabinets',
      SHARED_POINTS.crew,
      SHARED_POINTS.price,
    ],
    // Finalised SEO content, appended below the existing kitchen copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose our kitchen design and installation services',
        intro:
          'We combine practical planning, thoughtful design, and skilled installation to create kitchens that look polished and work efficiently. Every project is shaped around your space, preferences, storage needs, and everyday routines.',
        points: [
          'Designs tailored to your kitchen space',
          'Practical layouts for everyday cooking',
          'Careful planning before installation begins',
          'Skilled installation with precise finishing',
          'Clear communication throughout your project',
          'Attention to details and transitions',
          'Solutions built around your needs',
        ],
      },
      process: {
        heading: 'Our kitchen design and installation process',
        intro:
          'We make each project straightforward by combining detailed planning, coordinated installation, and careful finishing from the initial consultation onward.',
        steps: [
          {
            title: 'Plan Your Space',
            body: 'We assess your kitchen layout, priorities, and available space to develop a practical design that fits daily routines.',
          },
          {
            title: 'Create The Design',
            body: 'We refine the layout, style, storage, and functional details into a cohesive plan ready for installation.',
          },
          {
            title: 'Install With Care',
            body: 'Our team follows the approved design carefully, maintaining accurate placement and clean workmanship throughout installation.',
          },
          {
            title: 'Complete The Project',
            body: 'We inspect the finished kitchen, address final details, and ensure the completed space meets your expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Kitchen planning solutions designed around your space',
          items: [
            { h: 'Space Efficient Planning', d: 'We develop practical layouts that improve movement and make better use of available kitchen space without feeling crowded.' },
            { h: 'Functional Workflow Design', d: 'Kitchen layouts are planned around cooking, preparation, storage, and movement to make everyday routines feel more convenient.' },
            { h: 'Style And Layout Coordination', d: 'We coordinate design choices with the planned layout, creating a cohesive kitchen where appearance and function work together.' },
            { h: 'Personalized Design Details', d: 'Your preferences and household needs guide the design, helping create a kitchen that feels purposeful and comfortable.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create a kitchen layout that balances style, storage, and everyday function',
          body: [
            'A well-designed kitchen should make daily tasks feel easier rather than forcing you to work around an awkward layout. We plan spaces around movement, available room, storage requirements, and the way your household uses the kitchen. Thoughtful placement helps create a smoother workflow while making the room feel organized and inviting.',
            'Our Kitchen Design and Installation service brings design decisions and installation planning together for a more cohesive result. Whether your current kitchen feels cramped, outdated, or poorly arranged, we develop practical solutions that make better use of the space. From initial concepts through final installation, each detail is considered to create a comfortable kitchen built for everyday use.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Installation focused on accuracy, consistency, and a polished finish',
          items: [
            { h: 'Detailed Installation Planning', d: 'Before installation begins, we review the approved design and organize the work so each stage follows the planned layout.' },
            { h: 'Precise Layout Execution', d: 'Our installation approach follows established measurements and placement details to maintain consistency throughout the kitchen.' },
            { h: 'Clean Finishing Work', d: 'We pay close attention to visible details and transitions, helping the completed kitchen look cohesive and professionally finished.' },
            { h: 'Final Quality Review', d: 'After installation, we review the finished space and resolve remaining details so the project is ready for everyday use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Transform an outdated kitchen into a more practical living space',
          body: [
            'An aging kitchen can have inefficient layouts, limited storage, or design choices that no longer suit your household. A carefully planned renovation can improve how the entire room functions without sacrificing the character you want to maintain. We focus on creating solutions that make cooking, organizing, and moving through the space more convenient.',
            'Our approach considers both appearance and long-term usability. Instead of choosing elements independently, we coordinate the overall design so the finished kitchen feels balanced and intentional. Clear planning also helps reduce surprises during installation by establishing expectations before work begins. The result is a refreshed kitchen designed around your priorities, available space, and preferred style.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you design a kitchen around an unusual room layout?',
          a: 'Yes. We can plan around challenging dimensions, awkward corners, limited space, and existing layout constraints to create a more functional kitchen.',
        },
        {
          q: 'Can the kitchen design focus on improving workflow?',
          a: 'Absolutely. We consider how you prepare food, cook, store items, and move through the room when developing the layout and installation plan.',
        },
        {
          q: 'How do you make a small kitchen feel more practical?',
          a: 'We focus on efficient space planning, logical movement, and purposeful storage placement to help the kitchen feel organized without overcrowding the room.',
        },
        {
          q: 'Can you help when my existing kitchen layout feels inefficient?',
          a: 'Yes. We can evaluate the current arrangement and develop a more practical design that addresses poor flow, unused space, and everyday usability concerns.',
        },
        {
          q: 'What happens before the kitchen installation begins?',
          a: 'We review your needs, assess the available space, develop the design, confirm the planned details, and prepare the project for an organized installation.',
        },
      ],
    },
  }),

  cabinets: page({
    key: 'cabinets',
    path: '/services/cabinet-and-countertop-design-and-installation',
    title: 'Cabinet & Countertop Design and Installation',
    metaTitle: 'Cabinet & Countertop - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors provides Cabinet & Countertop, cabinet renovations, countertop upgrades, and layout improvements. Contact us.',
    heroTitle: 'Cabinet & Countertop',
    crumb: 'Cabinets & Countertops',
    navLabel: 'Cabinet & Countertop Design',
    workKey: 'oak-double-vanity-cabinets',
    webp: true,
    alt: 'Bathroom double vanity in light oak Shaker cabinets with a white quartz top and black oval mirrors',
    description:
      'Cabinet and countertop design and installation in Tampa. Kitchens, baths, laundry and bars - Shaker cabinets and quartz tops, one crew. Free in-home measure.',
    tick: 'Cabinets and tops',
    heading: 'Cabinets and countertops measured, set, and finished by the same people.',
    body: [
      'Kitchens, bathroom vanities, laundry rooms and built-in bars. We design the cabinet layout, install the boxes and doors, and template the tops so the stone actually fits the run you signed for.',
      'Shaker, slab and custom paint or stain. Quartz, granite and marble-look surfaces. Hardware, sinks and cut-outs are in the written price - not extras the week the tops arrive.',
    ],
    pointsTick: 'What you get',
    pointsHeading: 'Boxes, doors and tops that belong to one job.',
    pointsBody: [
      'A cabinet install fails at the scribe, the filler and the top. We own those details so you are not coordinating a cabinet shop and a fabricator yourself.',
    ],
    points: [
      'Kitchen, bath, laundry and bar cabinets',
      'Quartz, granite and solid-surface countertops',
      'Hardware, sinks and cut-outs in the written price',
      'Templated tops after the cabinets are set',
      SHARED_POINTS.crew,
      SHARED_POINTS.measure,
    ],
    // Finalised SEO content, appended below the existing cabinet copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us for practical cabinet and countertop improvements',
        intro:
          'We combine practical design guidance, precise installation, quality-focused workmanship, and clear communication to create cabinetry and countertop updates built around your space, style, budget, and everyday needs, while keeping each stage organized from planning through completion.',
        points: [
          'Practical design guidance',
          'Precise measurements and fitting',
          'Quality-focused installation',
          'Clear project communication',
          'Functional layout solutions',
          'Attention to finishing details',
        ],
      },
      process: {
        heading: 'Our process for a smooth cabinet and countertop project',
        intro:
          'We follow a structured process that keeps planning, installation, and final details organized for a dependable finished result.',
        steps: [
          {
            title: 'Needs assessment',
            body: 'We review your space, priorities, existing layout, and preferred look to establish a practical project direction.',
          },
          {
            title: 'Design planning',
            body: 'We refine measurements, layout details, finish choices, and functional goals before moving forward with the work.',
          },
          {
            title: 'Careful installation',
            body: 'Experienced installers align cabinetry and counters precisely, ensuring placement, clean edges, and consistent fit.',
          },
          {
            title: 'Final walkthrough',
            body: 'We inspect the completed work with you, address details, and confirm the finished space meets your expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Cabinet And Countertop Features Designed Around Everyday Living Needs',
          items: [
            { h: 'Smart storage planning', d: 'Smart storage planning organizes frequently used items while keeping the room open, accessible, and easier to maintain.' },
            { h: 'Coordinated surfaces', d: 'Coordinated surfaces create visual continuity, helping cabinetry and counters feel intentional, balanced, and unified.' },
            { h: 'Durable finish choices', d: 'Durable finishes suit everyday use, supporting busy routines while keeping cleaning and regular upkeep straightforward.' },
            { h: 'Accurate measurements', d: 'Accurate measurements help reduce fit issues, improve alignment, and create cleaner transitions between surfaces.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create More Functional Spaces With Better Storage And Surface Planning',
          body: [
            'Cabinet & Countertop projects can transform a room when storage, work areas, and visual balance no longer suit your routine. Thoughtful planning helps make better use of available space while creating a cohesive finished appearance.',
            'Whether you are updating an aging kitchen, improving a busy workspace, or correcting an inefficient arrangement, the right approach focuses on practical function as well as style. We consider measurements, traffic flow, storage needs, surface use, and finish coordination to help create an update that feels natural to use. The result is a cleaner, more organized space designed for everyday demands.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Practical Installation Details That Support A Lasting Finished Result',
          items: [
            { h: 'Improved room flow', d: 'Layout improvements can make movement easier, reduce awkward reaches, and give key work areas a natural arrangement.' },
            { h: 'Functional placement', d: 'Thoughtful placement keeps storage and preparation zones practical, helping you complete daily tasks with less effort.' },
            { h: 'Clean installation details', d: 'Consistent installation details support a polished appearance through attention to spacing, alignment, edges, and fit.' },
            { h: 'Organized project coordination', d: 'Clear project coordination keeps decisions organized and helps finished work reflect the intended design and function.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Refresh Worn Interiors With Coordinated Cabinetry And Countertop Improvements',
          body: [
            'Cabinet & Countertop upgrades are a practical way to improve how a space looks, feels, and functions without treating design and usability as separate concerns. A well-planned update can address limited storage, dated finishes, awkward work zones, and mismatched surfaces.',
            'The process begins with understanding what is not working and what you want the finished room to accomplish. From layout considerations to material coordination, every decision should support easier routines and a polished appearance. Careful installation also helps maintain alignment, consistent spacing, and a professional finish that holds up through regular use.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you improve an existing cabinet and countertop layout?',
          a: 'Yes. We can assess the current arrangement and identify practical ways to improve storage, workflow, spacing, and overall usability.',
        },
        {
          q: 'How do you handle cabinet and countertop projects with awkward spaces?',
          a: 'We review available dimensions, surrounding features, traffic flow, and functional requirements to develop an approach that works with the space rather than against it.',
        },
        {
          q: 'Can the cabinetry and countertop design be coordinated together?',
          a: 'Yes. Coordinating finishes, proportions, placement, and visual details helps create a more balanced appearance instead of making each element feel separate.',
        },
        {
          q: 'What should I consider before starting a cabinet and countertop project?',
          a: 'Consider how you use the space, where storage is lacking, which areas feel inconvenient, and what appearance you want to achieve. These details help guide planning.',
        },
        {
          q: 'How do you help ensure the finished installation looks professional?',
          a: 'Careful measurements, proper alignment, consistent spacing, clean edges, and a detailed final inspection all contribute to a polished finished result.',
        },
      ],
    },
  }),

  installation: page({
    inNav: false,
    key: 'hardwood',
    path: '/services/flooring-installation-contractors-tampa',
    title: 'Flooring Installation Contractors in Tampa',
    metaTitle: 'Flooring Installation Contractors - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors: Flooring Installation Contractors for new floor installation and residential flooring. Get started with us today!',
    heroTitle: 'Flooring Installation Contractors',
    crumb: 'Flooring Installation',
    alt: 'Newly installed wood flooring in a Tampa home',
    description:
      'Flooring installation contractors in Tampa. Hardwood, LVP, laminate, engineered wood and tile - one crew from subfloor prep to walkthrough. Free in-home measure.',
    tick: 'Tampa flooring contractors',
    heading: 'Every floor we lay starts with the substrate.',
    body: [
      'This is the parent page for how we install floors in Tampa: hardwood, luxury vinyl plank, laminate, engineered wood, and tile. The product pages go deeper. This one is the job as a whole - measure, prep, install, walkthrough.',
      'Most failed floors fail in the substrate. We moisture-test, level, and choose the fastener or adhesive for the product and the room. One crew owns that sequence so you are not coordinating three trades yourself.',
    ],
    points: [
      'Hardwood, LVP, laminate, engineered, tile',
      'Subfloor moisture testing and levelling',
      SHARED_POINTS.crew,
      SHARED_POINTS.price,
      SHARED_POINTS.licensed,
    ],
    // Finalised SEO content, appended below the existing copy. This page has
    // one prose + two feature sections (the supplied orphan heading "Smart
    // Flooring Installation Choices..." had no body and was dropped per
    // direction; the FAQ block uses the standard "FAQs" heading). Ordered
    // feature / prose / feature so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us for professional flooring installation services',
        intro:
          'At All About Flooring Tampa Bay Contractors, we combine skilled installation, careful preparation, and dependable communication to create floors that look polished and perform reliably. We focus on practical recommendations, precise workmanship, and results built around your space.',
        points: [
          'Skilled workmanship with careful attention',
          'Clear recommendations for every project',
          'Precise measurements and installation planning',
          'Quality-focused preparation before installation',
          'Clean, organized work from start',
          'Reliable communication throughout your project',
        ],
      },
      process: {
        heading: 'Our flooring installation process',
        intro:
          'We make installation straightforward by planning carefully, preparing the space, and completing each flooring detail with consistent attention, while communicating clearly throughout the project.',
        steps: [
          {
            title: 'Site Review',
            body: 'We inspect your space, discuss your flooring goals, and identify preparation needs before installation begins.',
          },
          {
            title: 'Material Planning',
            body: 'We help match flooring choices to room use, design preferences, traffic levels, and practical performance needs.',
          },
          {
            title: 'Careful Installation',
            body: 'Our installers measure precisely, prepare surfaces properly, and fit flooring with attention to clean, consistent details.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review the completed installation with you, address finishing details, and make sure the space is ready to enjoy.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'How Expert Floor Installation Supports Busy And Active Everyday Spaces',
          items: [
            { h: 'Residential Updates', d: 'We tailor installation planning to everyday living, helping updated rooms feel cohesive, comfortable, and practical.' },
            { h: 'High-Traffic Areas', d: 'We consider frequent foot traffic when planning installation details for dependable performance and easier daily use.' },
            { h: 'Design Coordination', d: 'We align layout and installation details with your room design for a balanced, intentional, finished appearance.' },
            { h: 'Project Flexibility', d: 'We adapt installation planning to different room sizes, layouts, schedules, and project priorities without losing quality.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Professional Flooring Installation Solutions For Lasting Comfort And Style',
          body: [
            'Our Flooring Installation Contractors help homeowners and property managers create comfortable, attractive spaces with properly planned flooring installations. We assess the room, consider traffic patterns, and recommend practical installation approaches that support lasting performance. Whether updating one room or multiple spaces, we prioritize a process and a finish that feels right.',
            'From worn surfaces to outdated rooms, our team provides dependable solutions designed around your goals, budget, and everyday use. Careful preparation, accurate fitting, and clean finishing help reduce installation issues while giving your space a cohesive, professionally completed appearance.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Flooring Installation Details That Improve Durability And Appearance Over Time',
          items: [
            { h: 'Room Assessment', d: 'We evaluate room conditions, measurements, traffic demands, and layout details to create a practical installation plan.' },
            { h: 'Floor Preparation', d: 'We address surface readiness and installation requirements so your new flooring has a stable, properly prepared base.' },
            { h: 'Precision Fitting', d: 'We carefully position and secure flooring for clean transitions, consistent alignment, and a polished finished appearance.' },
            { h: 'Quality Review', d: 'We inspect the completed work, check finishing details, and confirm the installation meets our workmanship standards.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'What should be considered before starting a flooring installation?',
          a: 'Room dimensions, existing surface conditions, traffic levels, layout, design goals, and installation requirements should all be reviewed before work begins.',
        },
        {
          q: 'How can flooring installation be planned for high-traffic rooms?',
          a: 'Installation should account for frequent foot traffic, room usage, transitions, and practical durability requirements so the finished floor performs well during everyday activity.',
        },
        {
          q: 'Can flooring installation work with unusual room layouts?',
          a: 'Yes. Careful measurements and layout planning can accommodate irregular spaces, multiple rooms, transitions, and other features that require more detailed installation preparation.',
        },
        {
          q: 'Why is surface preparation important for flooring installation?',
          a: 'A properly prepared surface provides a stable foundation for the flooring. Addressing uneven or unsuitable conditions can help support cleaner installation and better long-term results.',
        },
        {
          q: 'How long does a flooring installation project take?',
          a: 'The timeframe depends on room size, flooring requirements, preparation needs, layout complexity, and the overall project scope. A project assessment provides a more accurate estimate.',
        },
      ],
    },
  }),

  demolition: page({
    inNav: false,
    key: 'sanding',
    path: '/services/flooring-demolition-services-tampa',
    title: 'Flooring Demolition Services in Tampa',
    metaTitle: 'Flooring Demolition - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors handles Flooring Demolition, old floor removal, flooring tear-outs, and controlled removal with care. Call today!',
    heroTitle: 'Flooring Demolition',
    crumb: 'Demolition',
    alt: 'Old flooring removed and the subfloor prepared for a new install',
    description:
      'Flooring demolition in Tampa. We pull the old floor, haul it, and prep the substrate for the new install - part of the same crew, not a separate contractor.',
    tick: 'Tear-out and prep',
    heading: 'The old floor comes out with the people who put the new one in.',
    body: [
      'We still offer flooring demolition as part of an install. Pulling carpet, vinyl, tile, or a failed hardwood is not a separate company - it is day one of the same job, so the substrate we leave is the one we are willing to install over.',
      'Debris leaves the house each evening. We protect paths, check for asbestos-era materials when the floor is old enough to warrant it, and we do not start the new floor until the slab or subfloor is ready.',
    ],
    points: [
      'Carpet, vinyl, tile and hardwood tear-out',
      'Daily debris removal',
      'Substrate left ready for the new floor',
      'Same crew as the install',
      SHARED_POINTS.measure,
    ],
    // Finalised SEO content, appended below the existing demolition copy.
    // Same structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose All About Flooring Tampa Bay Contractors for Flooring Demolition',
        intro:
          'All About Flooring Tampa Bay Contractors approaches every demolition project with careful planning, controlled removal, and respect for your property. Our team focuses on efficient tear-outs, cleaner work areas, and dependable preparation for your renovation.',
        points: [
          'Careful removal around surrounding surfaces',
          'Efficient handling of existing flooring',
          'Organized debris collection throughout projects',
          'Attention to property protection',
          'Practical solutions for difficult tear-outs',
          'Clear communication from start to finish',
        ],
      },
      process: {
        heading: 'Our process for safe and efficient flooring demolition',
        intro:
          'Our structured approach keeps removal organized, protects surrounding areas, and prepares your space for the next stage.',
        steps: [
          {
            title: 'Protect The Space',
            body: 'Furniture and nearby surfaces are covered first to reduce dust, scratches, and accidental damage indoors.',
          },
          {
            title: 'Remove Existing Flooring',
            body: 'Crews remove existing flooring methodically, working carefully around walls, transitions, and fixtures.',
          },
          {
            title: 'Clear And Sort',
            body: 'Removed materials are gathered efficiently, keeping the work area organized and ready for the next phase.',
          },
          {
            title: 'Check The Surface',
            body: 'After demolition, the surface is carefully checked for leftover material, creating a cleaner starting point.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Practical flooring demolition solutions for different renovation needs',
          items: [
            { h: 'Worn Flooring Removal', d: 'Remove outdated floor materials efficiently when their condition, appearance, or performance no longer suits your space.' },
            { h: 'Layered Floor Tear-Out', d: 'Handle multiple flooring layers carefully to clear accumulated materials without creating unnecessary disruption.' },
            { h: 'Damaged Floor Demolition', d: 'Clear severely damaged flooring so renovation work can move forward with a cleaner, more accessible surface.' },
            { h: 'Large Area Removal', d: 'Coordinate broader tear-outs with an organized approach that keeps debris controlled and work areas manageable.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Professional flooring demolition makes renovation projects cleaner and easier',
          body: [
            'Flooring Demolition provides a practical way to remove worn, damaged, outdated, or unwanted flooring before a new finish is installed. Careful tear-out helps limit unnecessary damage to the underlying surface while making the area safer and easier to manage.',
            'Professional removal can save time when materials are firmly bonded, layered, or difficult to lift. A controlled sequence keeps debris manageable and leaves the space more prepared for the next phase. Whether updating one room or clearing a larger area, organized demolition helps keep disruption under control and the renovation moving forward.',
          ],
        },
        {
          layout: 'feature',
          heading: 'What customers can expect from a well-planned flooring tear-out',
          items: [
            { h: 'Controlled Work Areas', d: 'A structured demolition approach helps contain debris, reduce disruption, and keep surrounding spaces more orderly.' },
            { h: 'Efficient Material Removal', d: 'Experienced handling helps remove difficult flooring more efficiently while reducing delays during the renovation process.' },
            { h: 'Property Protection', d: 'Careful preparation and removal techniques help protect walls, fixtures, furnishings, and nearby finished surfaces.' },
            { h: 'Renovation Readiness', d: 'A thoroughly cleared area provides a cleaner starting point for inspections, preparation, and subsequent flooring work.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Careful removal helps address stubborn flooring and messy tear-outs',
          body: [
            'When flooring reaches the end of its useful life, removing it properly can make a major difference to the rest of a renovation. Flooring Demolition addresses stubborn materials, damaged sections, layered floors, and messy tear-outs that can turn a simple project into a frustrating task.',
            'A careful removal process protects surrounding areas while exposing the surface beneath. This makes it easier to identify leftover material, uneven areas, or other conditions that may affect the next installation. From a single-room refresh to a broader property update, organized demolition creates a cleaner, more workable starting point.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you remove flooring that has several layers?',
          a: 'Yes. Multiple flooring layers can be removed systematically, with attention given to each layer and the surfaces beneath it.',
        },
        {
          q: 'Is demolition suitable for damaged flooring that is difficult to lift?',
          a: 'Yes. Controlled removal techniques can help address damaged, broken, firmly attached, or otherwise difficult flooring materials.',
        },
        {
          q: 'How do you protect nearby areas during demolition?',
          a: 'The work area is prepared before removal begins, with nearby surfaces and furnishings protected as much as practical.',
        },
        {
          q: 'What happens to the flooring debris after removal?',
          a: 'Removed materials are gathered and organized during the project to keep the work area cleaner and make debris handling more efficient.',
        },
        {
          q: 'Can demolition be done for only one room?',
          a: 'Yes. Flooring demolition can be planned for a single room, selected sections, or larger areas depending on your renovation needs.',
        },
      ],
    },
  }),

  demolitionRoot: page({
    inNav: false,
    key: 'sanding',
    path: '/flooring-demolition-services-tampa',
    title: 'Flooring Demolition Services Tampa',
    metaTitle: 'Flooring Demolition in Tampa | All About Flooring',
    heroTitle: 'Flooring Demolition',
    crumb: 'Demolition',
    alt: 'Subfloor after flooring demolition, ready for a new install',
    description:
      'Flooring demolition services in Tampa Bay. Old carpet, vinyl, tile or hardwood pulled, hauled, and the substrate prepped for the new floor.',
    tick: 'Tampa Bay tear-out',
    heading: 'Demolition that is part of the install, not a side hustle.',
    body: [
      'This URL still ranks for flooring demolition in Tampa. The work is the same as our install demolition: we remove what is down, protect the house, and leave a substrate we will put a new floor on.',
      'If you only need tear-out, say so on the measure. Most clients book demolition as the first day of a replacement, which is how we prefer to run it - one crew, one price, one walkthrough.',
    ],
    points: [
      'Full-house or single-room tear-out',
      'Haul-away included in the written price',
      'Prep for LVP, hardwood or tile',
      SHARED_POINTS.crew,
    ],
  }),

  company: page({
    inNav: false,
    key: 'lvp',
    path: '/services/flooring-company',
    title: 'Flooring Company in Tampa',
    metaTitle: 'Flooring Company - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors is your Flooring Company for flooring installation, upgrades and reliable flooring solutions. Contact us today!',
    heroTitle: 'Flooring Company',
    crumb: 'Flooring Company',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    description:
      'All About Flooring is a Tampa flooring company for LVP, hardwood, tile and refinishing. Family-owned, one crew, free in-home measure.',
    tick: 'Tampa Bay flooring company',
    heading: 'A flooring company that still sends the people who priced it.',
    body: [
      'Search "flooring company" and you get showrooms, franchises, and crews that change by the week. We are a Tampa flooring company that measures, writes the price, and installs the floor with the same people.',
      'Luxury vinyl, hardwood, engineered wood, laminate, tile, and refinishing. Kitchens and bathrooms when the tile and the floor have to land together. Licensed, insured, and local.',
    ],
    points: [
      'Family-owned Tampa flooring company',
      'LVP, hardwood, tile, refinishing',
      SHARED_POINTS.crew,
      SHARED_POINTS.licensed,
    ],
    // Finalised SEO content, appended below the existing copy. Same structure/
    // flow as the LVP page: sections ordered feature / prose / feature / prose
    // so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Trust Our Flooring Company For Quality Results',
        intro:
          'All About Flooring Tampa Bay Contractors delivers thoughtful flooring solutions built around your space, lifestyle, and budget. Our experienced team focuses on precise workmanship, dependable communication, and durable results from planning through project completion.',
        points: [
          'Experienced professionals with careful workmanship',
          'Flooring solutions tailored to your space',
          'Clear communication throughout every project',
          'Quality-focused installation and finishing standards',
          'Attention to layout and fine details',
          'Practical recommendations for lasting performance',
        ],
      },
      process: {
        heading: 'Our Flooring Process Keeps Every Project Simple And Organized',
        intro:
          'We make flooring projects straightforward by combining careful planning, skilled installation, detailed inspections, and clear communication at every stage.',
        steps: [
          {
            title: 'Initial Assessment',
            body: 'Measure existing floors, review your goals, and recommend practical options suited to the room and daily use needs.',
          },
          {
            title: 'Project Planning',
            body: 'Prepare the surface carefully, confirm layouts, and plan installation details before materials are carefully placed.',
          },
          {
            title: 'Expert Installation',
            body: 'Install with careful alignment, secure transitions, and attention to the details that create a clean finished floor.',
          },
          {
            title: 'Final Inspection',
            body: 'Inspect the completed work, address final details, and explain care steps to help your new flooring perform well.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Key Flooring Features That Improve Comfort Durability And Appearance',
          items: [
            { h: 'Room-Specific Recommendations', d: 'We consider traffic, room function, style preferences, and practical needs when developing a flooring solution for your space.' },
            { h: 'Careful Surface Preparation', d: 'Proper preparation creates a stable foundation, helping the finished flooring sit correctly and deliver a cleaner appearance.' },
            { h: 'Precise Installation Techniques', d: 'Accurate measurements, consistent alignment, and detailed finishing help produce flooring that looks professional throughout the room.' },
            { h: 'Durable Finished Results', d: 'Quality workmanship helps your flooring handle everyday activity while maintaining its appearance and function for years to come.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Professional Flooring Solutions Designed Around Your Home And Lifestyle',
          body: [
            'Choosing a Flooring Company should mean more than selecting materials and scheduling installation. The right approach starts with understanding how each room is used, from busy family spaces to quieter areas that need a polished appearance. We help customers evaluate practical flooring considerations such as durability, comfort, appearance, and long-term maintenance. Our team works carefully around existing layouts and project requirements to create results that feel intentional rather than rushed. Whether updating one room or improving several areas, thoughtful planning can make the finished space more comfortable, functional, and visually consistent.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Common Flooring Challenges We Solve With Practical Professional Solutions',
          items: [
            { h: 'Worn And Outdated Floors', d: 'Refresh tired spaces with carefully planned flooring improvements that create a cleaner, more current appearance.' },
            { h: 'Uneven Surface Concerns', d: 'Address flooring conditions that can affect appearance and performance through proper assessment and preparation before installation.' },
            { h: 'Inconsistent Room Appearance', d: 'Create better visual continuity by coordinating flooring choices and installation details across connected areas of your home.' },
            { h: 'High-Traffic Wear Issues', d: 'Choose practical flooring solutions designed around active rooms, frequent use, and the everyday demands of your household.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Upgrade Worn Spaces With Flooring That Combines Beauty And Function',
          body: [
            'Old, damaged, uneven, or outdated floors can make an otherwise attractive space feel unfinished. Professional flooring work provides an opportunity to improve both appearance and everyday usability while addressing concerns before they become more disruptive. We focus on dependable preparation, accurate measurements, proper installation techniques, and clean finishing details. Customers can choose solutions based on the demands of their rooms, household routines, and desired aesthetic. A well-planned floor should feel natural underfoot, complement the surrounding design, and stand up to regular activity. Our goal is to deliver a finished surface that looks refined and performs reliably.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you determine the right flooring for a room?',
          a: 'We consider the room’s traffic level, intended use, existing conditions, appearance goals, and practical maintenance expectations before recommending an appropriate flooring approach.',
        },
        {
          q: 'What should be checked before new flooring is installed?',
          a: 'The existing surface should be evaluated for uneven areas, damage, moisture concerns, structural issues, and other conditions that could affect installation quality or finished performance.',
        },
        {
          q: 'Can flooring work improve the appearance of connected rooms?',
          a: 'Yes. Coordinated flooring choices and consistent installation details can create better visual flow between rooms while giving the overall interior a more cohesive appearance.',
        },
        {
          q: 'How can I prepare my home before flooring work begins?',
          a: 'Clear furniture and personal belongings from the work area when possible. Discuss access, existing flooring conditions, and project expectations with the contractor before installation starts.',
        },
        {
          q: 'What makes professional flooring installation worthwhile?',
          a: 'Professional installation combines accurate measurements, appropriate preparation, careful placement, and detailed finishing. These steps help create a cleaner appearance and support reliable long-term performance.',
        },
      ],
    },
  }),

  contractors: page({
    inNav: false,
    key: 'hardwood',
    path: '/services/flooring-contractors',
    title: 'Flooring Contractors in Tampa',
    metaTitle: 'Flooring Contractors - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors: Flooring Contractors for floor installation, floor replacement, and flooring project planning. Call us today!',
    heroTitle: 'Flooring Contractors',
    crumb: 'Flooring Contractors',
    alt: 'Hardwood flooring installed by Tampa flooring contractors',
    description:
      'Flooring contractors in Tampa for hardwood, LVP, laminate and tile. One crew from demolition to walkthrough. Free in-home measure.',
    tick: 'Flooring contractors',
    heading: 'Contractors, not a showroom with a referral list.',
    body: [
      'Flooring contractors who still do the work. We are not a retail floor that books a third-party installer. The estimate you sign is the crew that shows up.',
      'That matters on a Florida slab: moisture numbers, levelling, and expansion are the contractor\'s job, not the product\'s. We take that job, write it into the price, and stand behind the floor.',
    ],
    points: [
      'In-house install crew',
      'Moisture testing and subfloor prep',
      'Hardwood, LVP, laminate, tile',
      SHARED_POINTS.price,
    ],
    // Finalised SEO content, appended below the existing copy. Same structure/
    // flow as the LVP page: sections ordered feature / prose / feature / prose
    // so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us for dependable flooring workmanship and project support',
        intro:
          'Choose a team focused on careful planning, skilled workmanship, clear communication, and dependable project support from the first consultation through the final walkthrough, with attention to your space, priorities, desired finish, and long-term performance.',
        points: [
          'Experienced approach to flooring projects',
          'Careful planning before work begins',
          'Clear communication throughout every project',
          'Attention to layout and finishing',
          'Practical solutions for different spaces',
          'Detail-focused installation and project care',
          'Reliable support from start to finish',
        ],
      },
      process: {
        heading: 'Our process for organized flooring projects from start to finish',
        intro:
          'A straightforward workflow keeps your project organized, from initial assessment and planning through preparation, installation, and final inspection for a smooth experience.',
        steps: [
          {
            title: 'Project planning',
            body: 'We tailor the project approach carefully to room use, traffic levels, layout, and the finish you want for every room.',
          },
          {
            title: 'Surface preparation',
            body: 'We prepare the existing surface carefully, correcting uneven areas and conditions that could affect the finished floor.',
          },
          {
            title: 'Skilled installation',
            body: 'Our team uses proper installation methods for accurate placement, clean transitions, and a durable finished appearance.',
          },
          {
            title: 'Final walkthrough',
            body: 'We inspect the completed work with you, review key details, and confirm the project meets agreed expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Flooring project features that support durability, comfort, and lasting appeal',
          items: [
            { h: 'Room-specific planning', d: 'We tailor the project approach carefully to room use, traffic levels, layout, and the finish you want for every room.' },
            { h: 'Consistent layout', d: 'Thoughtful layout planning helps align flooring visually and creates cleaner transitions between connected areas.' },
            { h: 'Detail-focused work', d: 'Careful attention to edges, transitions, and finishing details helps produce a polished, cohesive result.' },
            { h: 'Project communication', d: 'Regular updates keep you informed about progress, timing, and important decisions throughout the flooring work.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'How professional flooring planning improves your space and project outcome',
          body: [
            'Flooring Contractors can help turn an outdated or uncomfortable space into a cleaner, more functional environment. We begin by understanding how each room is used, what concerns you have, and what you want the finished result to accomplish.',
            'Our approach balances appearance with practical performance, helping you make informed decisions without unnecessary disruption to your daily routine. Careful measurements, proper preparation, and attention to transitions can help create a more cohesive finished surface. We keep the work organized and communicate clearly so you know what to expect throughout the project.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Expert flooring workmanship that helps create consistent, finished results',
          items: [
            { h: 'Durable finish', d: 'Proper preparation supports a finished floor designed to handle regular daily activity with dependable performance.' },
            { h: 'Comfort and function', d: 'We consider each space’s use to help create flooring that feels practical, comfortable, and suitable for daily routines.' },
            { h: 'Clean project standards', d: 'Organized work practices help protect surrounding areas and keep the project process orderly from start to finish.' },
            { h: 'Reliable final results', d: 'A detailed final review helps confirm alignment, finishing quality, and the overall appearance of the completed project.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Practical flooring solutions built around your space and everyday needs',
          body: [
            'When floors show wear, feel uneven, or no longer suit the way a space is used, Flooring Contractors provide a practical path forward. We evaluate the project conditions and help determine an approach that supports comfort, appearance, and everyday durability.',
            'Whether you are refreshing one area or coordinating several rooms, our team focuses on dependable workmanship and a clean finished look. We pay attention to preparation, layout, edges, and transitions because small details can strongly influence the final result. Clear planning also helps keep the project efficient and easier to manage.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you help determine the right flooring approach for each room?',
          a: 'Yes. We consider room usage, traffic, existing conditions, layout, and your priorities to help develop a practical approach for each space.',
        },
        {
          q: 'What should be checked before a flooring project begins?',
          a: 'The existing surface, moisture concerns, uneven areas, room dimensions, transitions, and surrounding conditions should be reviewed before installation work starts.',
        },
        {
          q: 'Can flooring work be planned for multiple rooms at once?',
          a: 'Yes. A coordinated project plan can help maintain consistent layouts, transitions, scheduling, and finishing details across several connected areas.',
        },
        {
          q: 'Why does surface preparation matter so much?',
          a: 'Proper preparation creates a more suitable foundation for the finished flooring and can help reduce problems caused by uneven or unsuitable existing surfaces.',
        },
        {
          q: 'How do you help ensure the finished flooring looks consistent?',
          a: 'We pay attention to measurements, layout, transitions, edges, installation methods, and final details so the completed flooring has a cohesive appearance.',
        },
      ],
    },
  }),

  remodel: page({
    inNav: false,
    key: 'bathroom',
    path: '/services/bathroom-and-kitchen-remodeling',
    title: 'Bathroom and Kitchen Remodeling in Tampa',
    metaTitle: 'Bathroom and Kitchen Remodeling - All About Flooring',
    metaDescription:
      'All About Flooring Tampa Bay Contractors offers Bathroom and Kitchen Remodeling, full renovations, layout redesigns, and tailored space updates. Call now!',
    heroTitle: 'Bathroom and Kitchen Remodeling',
    crumb: 'Remodeling',
    workKey: 'farmhouse-range-kitchen',
    webp: false,
    alt: 'Farmhouse kitchen with stone backsplash, wood hood and plank flooring',
    description:
      'Bathroom and kitchen remodeling in Tampa with the flooring and tile crew - backsplashes, shower walls, and the floors that run through both rooms.',
    tick: 'Kitchens and baths',
    heading: 'The rooms on top of the floor, finished by the same crew.',
    body: [
      'We remodel kitchens and bathrooms as they sit on the floors we install: backsplash tile, shower walls, waterproofing, and the plank or porcelain that runs into the room. Cabinets and counters are sequenced with the floor so you are not waiting on a second company.',
      'This page keeps the old remodeling URL. The dedicated tile and backsplash page is the deeper spec; this one is the whole room.',
    ],
    points: [
      'Kitchen backsplash and flooring together',
      'Bathroom tile, waterproofing and floors',
      'Sequenced so the room is down for days, not months',
      SHARED_POINTS.crew,
    ],
    // Finalised SEO content, appended below the existing remodel copy. Same
    // structure/flow as the LVP page: sections ordered feature / prose /
    // feature / prose so ServicePage interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us for Bathroom and Kitchen Remodeling Services',
        intro:
          'At All About Flooring Tampa Bay Contractors, we combine practical planning, attentive workmanship, and design-focused thinking to create remodeled spaces that feel comfortable, function efficiently, and reflect how your household actually lives, with thoughtful attention to every detail.',
        points: [
          'Experienced remodeling guidance from start',
          'Plans shaped around your daily needs',
          'Careful attention to finishing details',
          'Practical solutions for better functionality',
          'Clear communication throughout your project',
          'Quality workmanship with lasting value',
          'Design choices balanced with everyday use',
        ],
      },
      process: {
        heading: 'Our Bathroom and Kitchen Remodeling Process From Start to Finish',
        intro:
          'We guide each project through thoughtful planning, coordinated remodeling, and final review to keep your goals and practical needs aligned.',
        steps: [
          {
            title: 'Needs assessment',
            body: 'We discuss your goals, priorities, and space needs to establish a practical direction that fits your home.',
          },
          {
            title: 'Design planning',
            body: 'We refine layout ideas, finishes, and functional details into a cohesive plan for your everyday needs.',
          },
          {
            title: 'Remodeling work',
            body: 'We complete the planned improvements with careful coordination, skilled workmanship, and attention to detail.',
          },
          {
            title: 'Final walkthrough',
            body: 'We review the completed work with you and address finishing details before considering the project complete.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Remodeling Features Designed Around Your Daily Routines',
          items: [
            { h: 'Better space planning', d: 'Smart layout improvements can make movement easier, improve storage, and help each area work more comfortably.' },
            { h: 'Updated everyday function', d: 'Remodeling can solve awkward arrangements and outdated features while making cooking, bathing, and routines easier.' },
            { h: 'Cohesive design direction', d: 'Coordinated materials and design details can create a balanced look while connecting practical improvements with style.' },
            { h: 'Built around your priorities', d: 'Each project can focus on the improvements that matter most, from usability concerns to the overall feel you want.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve Everyday Comfort With Thoughtful Remodeling Solutions',
          body: [
            'A well-planned remodel can make busy mornings easier, improve movement, and give your home a more comfortable, cohesive feel. We consider how you use each space before shaping practical improvements around your priorities. Our recommendations focus on function, visual balance, and lasting everyday value.',
            'Bathroom and Kitchen Remodeling can address dated layouts, limited storage, worn finishes, and inefficient use of available space. Our approach balances visual appeal with practical performance, helping create rooms that feel organized, inviting, durable, and thoughtfully designed for daily living. We prioritize sensible solutions that fit the existing home.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Practical Upgrades That Bring Style And Function Together',
          items: [
            { h: 'Improved room flow', d: 'Thoughtful changes can create smoother movement between work areas while making the remodeled space easier to navigate.' },
            { h: 'More useful storage', d: 'Strategic planning can help maximize available space and provide convenient storage that keeps everyday essentials organized.' },
            { h: 'Refreshed visual appeal', d: 'Updated design choices can give dated spaces a cleaner, more welcoming appearance without overlooking practical performance.' },
            { h: 'Long-term everyday value', d: 'Quality-focused remodeling can improve comfort and usability while creating spaces that continue serving your household effectively.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create More Functional Spaces With A Tailored Renovation Plan',
          body: [
            'Every successful renovation starts with understanding what is not working and what you want to improve. We help turn those priorities into a clear remodeling direction that supports your lifestyle and the character of your home. Thoughtful planning also helps keep design choices connected to practical needs.',
            'Bathroom and Kitchen Remodeling can refresh an aging room or rework an awkward layout while preserving the comfort you value. Careful coordination, dependable workmanship, and attention to finishing details help produce a result that looks refined, functions efficiently, and remains practical for everyday routines.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you remodel both my bathroom and kitchen as one project?',
          a: 'Yes. A coordinated remodeling project can address both spaces with consistent planning, design direction, and workmanship.',
        },
        {
          q: 'Can remodeling change an awkward kitchen or bathroom layout?',
          a: 'Yes. Layout improvements can help address poor movement, limited working space, inconvenient placement, and inefficient use of the available area.',
        },
        {
          q: 'Is remodeling possible if I want to keep some existing features?',
          a: 'In many cases, yes. A remodel can focus on the areas that need improvement while retaining selected features that still suit your needs.',
        },
        {
          q: 'How do you make a remodeling plan fit my daily routine?',
          a: 'We consider how you cook, bathe, move through the space, organize essentials, and use the room before developing practical improvements.',
        },
        {
          q: 'Can you help update an outdated bathroom or kitchen without making it feel completely different?',
          a: 'Yes. Remodeling can refresh the appearance and functionality while maintaining elements of the existing character you want to preserve.',
        },
      ],
    },
  }),

  refinishNearMe: page({
    inNav: false,
    key: 'refinishing',
    path: '/wood-floor-refinishing-near-me',
    title: 'Wood Floor Refinishing Near Me in Tampa',
    metaTitle: 'Wood Floor Refinishing Near Me in Tampa | All About',
    heroTitle: 'Wood Floor Refinishing',
    crumb: 'Refinishing Near You',
    alt: 'Wood floor refinished in a Tampa Bay home',
    description:
      'Wood floor refinishing near you in Tampa Bay. Dustless sanding, stain, and polyurethane. We cover Odessa to Riverview and across the bay.',
    tick: 'Near you, Tampa Bay',
    heading: 'Wood floor refinishing across Tampa Bay, not a far-flung add-on.',
    body: [
      'If you searched "wood floor refinishing near me", we are the Tampa Bay crew that sands, stains, and coats hardwood - Odessa, Carrollwood, Brandon, Clearwater, Wesley Chapel, and the towns between.',
      'The full spec lives on our hardwood floor refinishing page. This URL stays so the old search listing still lands on a real page, not a redirect.',
    ],
    points: [
      'Dustless sanding and polyurethane',
      'Service across Tampa Bay towns',
      'Usually a third of replacement cost',
      SHARED_POINTS.measure,
    ],
  }),
}

export const NAV_SERVICES = Object.values(SERVICE_PAGES)
  .filter((p) => p.inNav)
  .map((p) => ({ href: p.path, label: p.navLabel || p.crumb }))

export const servicePageList = Object.values(SERVICE_PAGES)
