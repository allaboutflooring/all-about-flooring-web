/**
 * St. Petersburg listing - own URLs, nav, copy, and cards.
 *
 * Lives at /top-flooring-companies-st-petersburg (the indexed slug from
 * the old site). Nested under that path so Tampa keeps /locations/*.
 * Copy stays Pinellas-specific so this listing does not compete with
 * the Tampa homepage.
 */

export const STPETE_BASE = '/top-flooring-companies-st-petersburg'

const svc = (path) => `${STPETE_BASE}/services/${path}`
const loc = (path) => `${STPETE_BASE}/locations/${path}`

function service(partial) {
  return {
    inNav: true,
    webp: true,
    ...partial,
    tick: partial.tick || partial.crumb,
    heading: partial.heading || partial.title,
    body: partial.body || (partial.intro ? [partial.intro] : []),
    alt: partial.alt || `${partial.title} in St. Petersburg`,
  }
}

export const STPETE_SERVICE_PAGES = {
  lvp: service({
    key: 'lvp',
    path: svc('luxury-vinyl-plank-installation'),
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    metaTitle: 'LVP Flooring Installation Services in St. Petersburg',
    metaDescription:
      'LVP flooring installation in St. Petersburg from All About Flooring — skilled waterproof plank fitting and custom layouts. Call today!',
    heroTitle: 'LVP Flooring Installation St. Petersburg',
    crumb: 'LVP Flooring',
    navLabel: 'LVP Flooring Installation',
    workKey: 'wood-look-plank-tile',
    alt: 'Empty room with newly installed wood-look luxury vinyl plank flooring, white baseboards and a shaded window',
    tick: 'Luxury vinyl plank',
    heading: 'Waterproof, quiet, and built for the Gulf.',
    description:
      'LVP flooring installation in St. Petersburg. Waterproof luxury vinyl plank for beach condos, kitchens and Florida humidity. Free in-home measure.',
    intro:
      'St. Petersburg homes see sand, sliders and summer humidity. Waterproof LVP is the flooring we install most here - quiet underfoot, pet-friendly, and specified for a Gulf-side slab.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Same structure/flow as the main-site LVP page: sections ordered feature /
    // prose / feature / prose so the shared template interleaves Process.
    seo: {
      whyChoose: {
        heading: 'Why choose us for professional LVP flooring installation',
        intro:
          'We combine careful measurements, practical installation techniques, and attention to finishing details to deliver flooring that looks polished and performs reliably. Our approach keeps your project organized from preparation through final inspection.',
        points: [
          'Precise measurements before installation begins',
          'Careful plank alignment throughout each room',
          'Thoughtful layouts for balanced visual appeal',
          'Detailed preparation for reliable flooring results',
          'Clean workmanship with attention to edges',
          'Clear communication throughout your flooring project',
          'Thorough final inspection before project completion',
        ],
      },
      process: {
        heading: 'Our process for a smooth LVP flooring installation',
        intro:
          'Our streamlined process focuses on accurate planning, careful preparation, precise installation, and detailed finishing for dependable flooring results.',
        steps: [
          {
            title: 'Room assessment',
            body: 'We inspect room dimensions, subfloor conditions, and transitions to plan an accurate installation.',
          },
          {
            title: 'Layout planning',
            body: 'We map plank direction, starting points, and cuts to create a balanced, efficient finished floor layout.',
          },
          {
            title: 'Plank installation',
            body: 'We install each plank carefully, maintaining proper alignment, spacing, and secure connections throughout.',
          },
          {
            title: 'Final inspection',
            body: 'We review edges, transitions, and overall appearance before cleaning the area and completing the project.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Key Installation Features That Support A Clean, Balanced Finished Floor',
          items: [
            { h: 'Accurate room measurements', d: 'Accurate room measurements guide plank placement and help reduce awkward cuts around walls, corners, and transitions.' },
            { h: 'Balanced plank direction', d: 'A balanced plank direction can visually connect rooms while supporting a cohesive, professionally planned appearance.' },
            { h: 'Proper surface preparation', d: 'Proper surface preparation helps create stable support and reduces visible irregularities beneath the finished flooring.' },
            { h: 'Precise feature cuts', d: 'Careful cutting around fixed features helps maintain clean edges and a more refined overall installation appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'How Professional LVP Flooring Installation Improves Comfort And Interior Appeal',
          body: [
            'Professionally installed LVP creates a clean, consistent surface that feels comfortable and suits busy rooms. Careful planning helps the new floor complement your existing interior while thoughtful layout decisions reduce awkward cuts and create a balanced appearance throughout the space.',
            'LVP Flooring Installation St. Petersburg can solve worn flooring, uneven transitions, outdated finishes, or the need for a more practical surface. Precise measurements and careful plank placement support a polished result for everyday use, helping improve visual continuity and making the finished floor easier to enjoy with confidence every day.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Practical Installation Details For Consistent Flooring Results',
          items: [
            { h: 'Consistent joint alignment', d: 'Thoughtful spacing and alignment keep plank joints consistent, supporting a uniform look across larger floor areas.' },
            { h: 'Neat floor transitions', d: 'Well-planned transitions help connect different flooring surfaces while keeping changes neat, practical, and visually balanced.' },
            { h: 'Secure plank placement', d: 'Consistent installation techniques help planks sit securely and maintain a smooth, dependable surface for daily activity.' },
            { h: 'Detailed final checks', d: 'Final checks catch alignment concerns, edge details, and finishing issues before the completed flooring is handed over.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Installation Details That Help Your New LVP Floor Perform Well',
          body: [
            'Successful flooring installation starts with more than placing planks across an open room. Room dimensions, surface conditions, plank direction, transitions, and fixed features all influence how the finished floor looks and functions. Addressing these details before installation helps prevent avoidable issues and creates a more predictable project.',
            'Our installation approach emphasizes careful preparation and consistent workmanship. From establishing a practical starting point to making accurate cuts around challenging areas, each stage receives attention. This helps create clean lines, dependable connections, and a finished floor that fits naturally within the surrounding space.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can LVP be installed when the existing floor has minor imperfections?',
          a: 'Minor imperfections may sometimes be addressed during preparation, but the surface should be evaluated first. Significant unevenness may require additional preparation before LVP installation.',
        },
        {
          q: 'How do you decide which direction LVP planks should run?',
          a: 'Plank direction is usually based on room proportions, natural sightlines, entry points, and how adjoining spaces connect. The goal is a balanced appearance rather than simply following one fixed rule.',
        },
        {
          q: 'What happens around doorways and other fixed features?',
          a: 'Planks are measured and cut carefully around door frames, corners, cabinets, and other fixed features. Proper planning helps maintain clean edges and consistent visual flow.',
        },
        {
          q: 'Can LVP installation work across connected rooms?',
          a: 'Yes, connected rooms can often be planned as part of one cohesive layout. Measurements, plank direction, transitions, and starting points are considered together for a more unified result.',
        },
        {
          q: 'What should be checked before the LVP installation begins?',
          a: 'The installation area should be checked for dimensions, surface condition, moisture-related concerns, transitions, and obstacles. Identifying these details early helps reduce surprises during installation.',
        },
      ],
    },
  }),

  laminate: service({
    key: 'laminate',
    path: svc('laminate-flooring-installation'),
    title: 'Laminate Flooring Installation',
    metaTitle: 'Laminate Flooring Installation in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg offers Laminate Flooring Installation St. Petersburg, floating laminate floors, and precise installation. Start today!',
    heroTitle: 'Laminate Flooring Installation St. Petersburg',
    crumb: 'Laminate',
    navLabel: 'Laminate Flooring Installation',
    description:
      'Laminate flooring installation in St. Petersburg. Click-lock over a levelled base with expansion set for Pinellas humidity. Free in-home measure.',
    intro:
      'Laminate is the hardest-wearing surface per dollar in St. Petersburg ranches and condos. We level the slab, set the underlayment, and leave the expansion the manufacturer wrote so joints do not peak in July.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us For Reliable Laminate Flooring Installation',
        intro:
          'All About Flooring St. Petersburg combines careful preparation, accurate installation, and dependable workmanship to create laminate floors that look polished, feel stable, and perform well through everyday household use.',
        points: [
          'Detailed preparation before every installation',
          'Accurate cuts around rooms and fixtures',
          'Clean, organized installation process',
          'Quality-focused workmanship from start to finish',
          'Practical flooring solutions for busy homes',
          'Attention to alignment and finishing details',
          'Clear communication throughout your project',
        ],
      },
      process: {
        heading: 'Our Laminate Flooring Installation Process',
        intro:
          'We follow a careful installation process that prepares your space properly and delivers a clean, stable, professional-looking laminate floor.',
        steps: [
          {
            title: 'Floor Assessment',
            body: 'We inspect the existing surface, identify preparation needs, and confirm the best installation approach for your room.',
          },
          {
            title: 'Surface Preparation',
            body: 'We prepare the subfloor by addressing uneven areas and creating a clean, suitable base for installation.',
          },
          {
            title: 'Laminate Installation',
            body: 'We carefully position and secure each plank, maintaining consistent alignment, spacing, and a professional overall appearance.',
          },
          {
            title: 'Final Inspection',
            body: 'We review the completed floor, check finishing details, and ensure the installation meets our quality expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Key Installation Features That Support A Professional Finish',
          items: [
            { h: 'Careful Surface Preparation', d: 'We prepare the installation surface carefully to support stable plank placement and help create a smoother finished floor.' },
            { h: 'Precise Plank Placement', d: 'Each plank is positioned with attention to alignment and spacing, helping the completed floor maintain a consistent appearance.' },
            { h: 'Clean Edge Finishing', d: 'Accurate cuts around walls, corners, and fixed features create cleaner edges and a more polished overall installation.' },
            { h: 'Consistent Floor Alignment', d: 'We maintain orderly plank alignment throughout the space to create visual continuity and reduce distracting installation inconsistencies.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'How Proper Laminate Flooring Installation Improves Everyday Comfort',
          body: [
            'Professional laminate installation helps create a level, stable walking surface while giving rooms a refreshed appearance that works with different interior styles. Proper preparation also helps reduce movement, visible gaps, and premature wear caused by installation mistakes.',
            'Laminate is a practical choice for customers who want an attractive floor that is easier to maintain and suited to active living spaces. Careful plank placement, accurate cuts, and attention to transitions help produce a finished floor that looks cohesive rather than pieced together.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Laminate Installation Details That Help Protect Your Flooring Investment',
          items: [
            { h: 'Room-Specific Planning', d: 'We consider room layout, traffic patterns, transitions, and installation conditions before placing laminate for a practical result.' },
            { h: 'Professional Finishing Touches', d: 'Careful attention to edges, transitions, and final details helps the finished flooring look complete and professionally installed.' },
            { h: 'Stable Installation Methods', d: 'Proper preparation and placement help minimize unwanted movement while supporting a comfortable, dependable walking surface.' },
            { h: 'Thoughtful Layout Execution', d: 'We plan plank positioning to create balanced lines and an attractive appearance across the available floor space.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Practical Laminate Flooring Solutions For Different Home Needs',
          body: [
            'A successful flooring project starts with understanding how the room will be used, where installation challenges may occur, and what finish will complement the space. Experienced installation helps account for these factors before work begins.',
            'Whether updating one room or coordinating flooring throughout connected spaces, the installation should maintain consistent alignment and clean transitions. Professional workmanship helps turn your selected laminate into a finished surface that feels intentional, durable, and comfortable for everyday use.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can laminate flooring be installed over an existing floor?',
          a: 'In some situations, laminate can be installed over an existing hard surface when the base is clean, stable, dry, and sufficiently level. We assess the existing floor before recommending the installation approach.',
        },
        {
          q: 'How do you handle uneven areas before laminate installation?',
          a: 'We inspect the subfloor for dips, raised areas, or other conditions that could affect the finished floor. Necessary preparation helps provide a more stable and consistent surface for laminate installation.',
        },
        {
          q: 'Can laminate flooring be installed around existing room features?',
          a: 'Yes. Laminate can be carefully measured and cut around fixed features, corners, and other obstacles. Accurate measurements and finishing help maintain a clean appearance throughout the room.',
        },
        {
          q: 'Is floating laminate flooring suitable for busy household areas?',
          a: 'Floating laminate flooring can be a practical option for active spaces when the underlying surface is properly prepared and the installation follows the flooring manufacturer’s requirements.',
        },
        {
          q: 'How long does a laminate flooring installation take?',
          a: 'Project time depends on room size, layout, surface preparation, and installation conditions. After assessing your space, we can provide a clearer estimate based on the specific project.',
        },
      ],
    },
  }),

  hardwood: service({
    key: 'hardwood',
    path: svc('hardwood-flooring-installation'),
    title: 'Hardwood Flooring Installation',
    metaTitle: 'Hardwood Flooring Installation in St. Petersburg',
    metaDescription:
      'Hardwood flooring installation in St. Petersburg from All About Flooring — custom layouts and precise, careful board fitting. Call today!',
    heroTitle: 'Hardwood Flooring Installation St. Petersburg',
    crumb: 'Hardwood',
    navLabel: 'Hardwood Flooring Installation',
    workKey: 'character-hickory-floor',
    alt: 'Character hickory hardwood flooring in a finished room',
    tick: 'Solid hardwood',
    heading: 'Nail-down and glue-down, specified for the room.',
    description:
      'Hardwood flooring installation in St. Petersburg. Nail-down and glue-down oak, maple and hickory, acclimatised on site. Free in-home measure.',
    intro:
      'Solid hardwood still belongs in St. Petersburg rooms that can take it. Boards acclimatise on site, the subfloor is moisture-tested, and we specify nail-down or glue-down for the room - not from habit.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // One prose + two feature sections (each feature carries an intro line);
    // ordered feature / prose / feature so the shared template interleaves
    // Process and keeps the LVP alternating flow.
    seo: {
      whyChoose: {
        heading: 'Why choose us for dependable hardwood flooring installation services',
        intro:
          'We combine careful preparation, precise installation, and practical flooring knowledge to create hardwood floors that look refined and perform reliably. Every project receives thoughtful attention from planning through final inspection.',
        points: [
          'Experienced flooring installation craftsmanship',
          'Careful measurements and layout planning',
          'Precise cuts and secure installation',
          'Attention to subfloor preparation details',
          'Clean, organized project workmanship',
          'Flooring solutions tailored to your space',
        ],
      },
      process: {
        heading: 'Our process for seamless hardwood flooring installation',
        intro:
          'We follow a structured installation process that keeps your project organized, accurate, and focused on lasting flooring performance.',
        steps: [
          {
            title: 'Site Assessment',
            body: 'We evaluate the existing surface, room conditions, measurements, and installation requirements before planning the hardwood flooring project.',
          },
          {
            title: 'Preparation Planning',
            body: 'We prepare the work area, address surface concerns, and establish an installation layout designed for a clean finished appearance.',
          },
          {
            title: 'Precision Installation',
            body: 'Our team carefully positions and secures each flooring section, maintaining consistent alignment, spacing, and transitions throughout the room.',
          },
          {
            title: 'Final Quality Check',
            body: 'We inspect the completed floor for alignment, secure placement, clean transitions, and overall finish before considering the project complete.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: "Plan your hardwood flooring project around your home's needs",
          intro:
            'Choosing the right installation approach starts with understanding how the room will be used, how the flooring should flow, and what the existing surface requires.',
          items: [
            { h: 'Room-Specific Layout Planning', d: 'We plan flooring direction and placement around room dimensions to create balanced lines, attractive transitions, and a cohesive finished appearance.' },
            { h: 'Detailed Surface Preparation', d: 'A properly prepared installation surface supports better flooring placement and helps minimize uneven areas, movement, and avoidable installation complications.' },
            { h: 'Accurate Measurements And Cutting', d: 'Careful measurements allow each section to be planned accurately, reducing unnecessary waste while supporting cleaner edges, joints, and overall alignment.' },
            { h: 'Refined Finishing And Transitions', d: 'We pay close attention to finishing details around room boundaries and transitions, helping the completed floor look intentional and professionally installed.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create a more comfortable home with expertly installed hardwood floors',
          body: [
            'Hardwood flooring can bring warmth, character, and lasting visual appeal to living spaces while providing a durable surface for everyday activity. A professionally installed floor also helps create consistent alignment and cleaner transitions between rooms. Whether replacing worn flooring or completing a renovation, careful installation makes a noticeable difference in the finished result.',
            'With Hardwood Flooring Installation St. Petersburg, homeowners can choose an approach suited to their room layout, design preferences, and practical needs. Proper measurements and surface preparation help reduce installation complications, while precise placement supports a polished appearance. The result is a floor designed to complement the space and remain dependable through regular use.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Get hardwood floors installed with greater confidence and precision',
          intro:
            'A quality hardwood installation is about more than placing boards across a room. It requires thoughtful planning, accurate measurements, appropriate preparation, and consistent workmanship from beginning to end.',
          items: [
            { h: 'Durable Results For Everyday Living', d: 'Professionally installed hardwood flooring provides a dependable surface designed to handle everyday household activity while maintaining its attractive appearance with proper care.' },
            { h: 'A Cleaner, More Finished Appearance', d: 'Consistent alignment and carefully planned transitions help create a polished look that makes the flooring feel integrated naturally throughout the finished space.' },
            { h: 'Better Use Of Available Space', d: 'Strategic layout planning can help flooring lines follow the room naturally, creating visual continuity and making connected areas feel more cohesive.' },
            { h: 'Greater Confidence In Your Investment', d: 'Professional installation reduces avoidable mistakes and gives homeowners greater confidence that their flooring project has been completed with careful attention to detail.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can hardwood flooring be installed over my existing floor?',
          a: 'It depends on the existing material, surface condition, moisture levels, and installation requirements. The surface should be assessed before work begins.',
        },
        {
          q: 'How do you determine the best hardwood flooring layout?',
          a: 'We consider room dimensions, natural sightlines, adjoining spaces, transitions, and the desired visual flow before establishing the installation direction.',
        },
        {
          q: 'What happens if the subfloor is uneven before installation?',
          a: 'Surface irregularities may need to be addressed before installation. Proper preparation helps create a more stable foundation and improves the finished appearance.',
        },
        {
          q: 'How do you handle hardwood flooring around doorways and transitions?',
          a: 'We carefully measure transition points and doorway areas so the flooring connects cleanly with adjacent spaces while maintaining consistent alignment.',
        },
        {
          q: 'Can hardwood installation work for rooms with unusual shapes?',
          a: 'Yes. Irregular rooms can be planned with detailed measurements and careful cutting so the flooring follows the available space while maintaining a balanced appearance.',
        },
      ],
    },
  }),

  engineered: service({
    key: 'engineered',
    path: svc('engineered-hardwood-installation'),
    title: 'Engineered Hardwood Flooring Installation',
    metaTitle: 'Engineered Hardwood Installation in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg | Engineered Hardwood Flooring Installation St. Petersburg | engineered hardwood installation, custom fitting. Call now!',
    heroTitle: 'Engineered Hardwood Flooring Installation St. Petersburg',
    crumb: 'Engineered Hardwood',
    navLabel: 'Engineered Hardwood Installation',
    description:
      'Engineered hardwood installation in St. Petersburg. Real timber wear layer on a stable core - the right hardwood over concrete slab. Free in-home measure.',
    intro:
      'Engineered hardwood is the wood we will lay over a St. Petersburg slab and in rooms that sit against a bath or a slider. Glue-down, float or nail, specified from the moisture reading.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us For Engineered Hardwood Flooring Installation',
        intro:
          'Choosing the right flooring installer means more than placing boards. All About Flooring St. Petersburg combines careful preparation, accurate installation, and thoughtful finishing to help engineered hardwood look polished, perform reliably, and complement your home.',
        points: [
          'Careful subfloor preparation',
          'Accurate board alignment',
          'Thoughtful room layout planning',
          'Clean, detail-focused installation',
          'Smooth transitions between flooring',
          'Consistent attention to finishing',
          'Professional approach from start to finish',
        ],
      },
      process: {
        heading: 'Our Engineered Hardwood Flooring Installation Process',
        intro:
          'Our installation process keeps every stage organized, from evaluating the surface to completing final details with careful attention and precision.',
        steps: [
          {
            title: 'Surface Check',
            body: 'We inspect the subfloor, moisture conditions, and room details before preparing a dependable base for installation.',
          },
          {
            title: 'Layout Planning',
            body: 'We plan board direction, starting points, and transitions to create balanced lines and a clean finished look.',
          },
          {
            title: 'Precision Install',
            body: 'Boards are installed with careful alignment and spacing to support stability, fit, and visual continuity.',
          },
          {
            title: 'Final Review',
            body: 'We inspect the completed floor, check transitions and edges, and address final details before completion.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Installation Features That Support A Stable, Attractive Finished Floor',
          items: [
            { h: 'Subfloor Preparation', d: 'We address surface conditions before installation to help create a level, dependable foundation for engineered hardwood flooring.' },
            { h: 'Board Alignment', d: 'Consistent placement and spacing help maintain clean lines and a cohesive appearance across the finished floor.' },
            { h: 'Room Transitions', d: 'We plan adjoining floor areas carefully for smoother transitions and a more unified appearance throughout the space.' },
            { h: 'Finish Detailing', d: 'We review edges, thresholds, and final details closely to deliver a clean installation ready for everyday use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Why Engineered Hardwood Works Well For Modern Home Interiors',
          body: [
            'Engineered hardwood combines the visual warmth of genuine wood with a layered construction designed for dependable performance. It can bring a refined, natural character to living spaces while offering practical flexibility for everyday household use.',
            'Engineered hardwood flooring installation St. Petersburg can be a smart choice when you want an updated wood look without sacrificing everyday practicality. Proper installation helps create a secure surface with clean lines, balanced proportions, and a polished appearance that works across different interior styles.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Practical Engineered Hardwood Installation Solutions For Different Room Needs',
          items: [
            { h: 'Moisture Awareness', d: 'We consider moisture conditions and site requirements to support a stable installation and reduce avoidable issues.' },
            { h: 'Room Layout Fit', d: 'We adapt the layout to room proportions, focal points, and traffic patterns for a balanced finished floor.' },
            { h: 'Consistent Installation', d: 'Careful placement and alignment help create a secure, uniform surface that looks cohesive across the entire room.' },
            { h: 'Project Cleanliness', d: 'We keep the work area organized and complete final cleanup so the newly installed floor is ready to enjoy.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'How Proper Installation Improves Engineered Hardwood Floor Performance And Appearance',
          body: [
            'Professional installation starts with the conditions beneath the flooring. A carefully prepared surface helps boards sit correctly, while thoughtful planning accounts for room dimensions, transitions, and installation direction before work begins.',
            'Attention to these details can make a noticeable difference in the finished result. Consistent alignment helps the floor look cohesive, while accurate fitting around edges and transitions supports a cleaner appearance. The goal is a floor that feels intentional from the first board to the final detail.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can engineered hardwood be installed over my existing subfloor?',
          a: 'It may be possible, depending on the subfloor condition, levelness, moisture conditions, and the flooring installation requirements. We evaluate these factors before installation.',
        },
        {
          q: 'How do you decide which direction to install the boards?',
          a: 'We consider room proportions, natural sightlines, entrances, focal points, and adjoining flooring to determine a layout that creates balanced visual flow.',
        },
        {
          q: 'What happens if the subfloor is uneven before installation?',
          a: 'Uneven areas can affect the finished floor, so we identify surface concerns during preparation and determine the appropriate steps before placing the engineered hardwood.',
        },
        {
          q: 'How do you handle transitions between engineered hardwood and other floors?',
          a: 'We plan transition locations and installation details based on the adjoining surfaces, helping create a cleaner connection between different flooring areas.',
        },
        {
          q: 'How long does engineered hardwood installation take?',
          a: 'Project duration varies with room size, layout complexity, preparation requirements, and site conditions. We can provide a more accurate timeframe after evaluating the project.',
        },
      ],
    },
  }),

  refinishing: service({
    key: 'refinishing',
    path: svc('refinishing-floors-tampa'),
    title: 'Hardwood Floor Refinishing',
    metaTitle: 'Hardwood Floor Refinishing Services in St. Petersburg',
    metaDescription:
      'Hardwood floor refinishing in St. Petersburg from All About Flooring — sanding, restoration and refinishing for tired floors. Call today!',
    heroTitle: 'Hardwood Floor Refinishing St. Petersburg',
    crumb: 'Refinishing',
    navLabel: 'Hardwood Floor Refinishing',
    description:
      'Hardwood floor refinishing in St. Petersburg - dustless sanding, stain and polyurethane. Usually a third of the cost of replacement. Free in-home measure.',
    intro:
      'Bring back a floor you already own in St. Petersburg. We sand, stain if you want a new colour, and build polyurethane in coats. Engineered floors with enough wear layer can be refinished the same way.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us For Professional Hardwood Floor Refinishing',
        intro:
          'Our refinishing service restores worn hardwood floors with careful preparation, consistent sanding, and a durable finish. We focus on improving appearance, extending floor life, and delivering results that complement your home’s existing character.',
        points: [
          'Detailed preparation before every refinishing project',
          'Careful sanding for a smooth surface',
          'Durable finishes selected for lasting performance',
          'Attention to existing wood character',
          'Clear communication throughout the project',
          'Clean, organized work from start to finish',
        ],
      },
      process: {
        heading: 'Our Hardwood Floor Refinishing Process',
        intro:
          'We follow a structured refinishing process that prepares your floors properly and delivers an even, refreshed finish.',
        steps: [
          {
            title: 'Floor Assessment',
            body: 'We inspect the wood, finish condition, wear patterns, and surface damage to determine the right refinishing approach.',
          },
          {
            title: 'Surface Preparation',
            body: 'We prepare the floor carefully, addressing imperfections and creating a clean, even surface ready for refinishing.',
          },
          {
            title: 'Precision Sanding',
            body: 'We sand away worn finish and surface imperfections while preserving the wood’s character and creating a smooth foundation.',
          },
          {
            title: 'Finish Application',
            body: 'We apply the selected finish evenly and allow proper curing time for a durable, refreshed hardwood surface.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Professional Sanding Creates A Better Foundation For Refinishing',
          items: [
            { h: 'Thorough Surface Evaluation', d: 'We assess wear, scratches, finish condition, and wood integrity before determining how the floor should be prepared.' },
            { h: 'Controlled Sanding Technique', d: 'Careful sanding removes worn finish and surface imperfections while maintaining an even foundation for the new finish.' },
            { h: 'Consistent Surface Preparation', d: 'Proper preparation helps create a smooth, uniform surface so the new finish can adhere evenly across the floor.' },
            { h: 'Detail-Focused Refinishing Work', d: 'We pay close attention to edges, transitions, and visible floor areas for a consistent finished appearance throughout.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Restore Worn Hardwood Floors With A Smooth, Refreshed Finish',
          body: [
            'Hardwood floors can lose their original appeal after years of foot traffic, scratches, fading, and everyday wear. Refinishing renews the existing wood without requiring a complete floor replacement.',
            'Hardwood Floor Refinishing St. Petersburg can improve the floor’s appearance while addressing dull finishes and visible surface imperfections. Professional sanding removes worn layers and prepares the wood for a fresh protective finish, helping your floors look cleaner, brighter, and more consistent throughout the space.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Protective Finishes Help Preserve Your Hardwood Floor Investment',
          items: [
            { h: 'Even Finish Coverage', d: 'A carefully applied finish creates consistent coverage while enhancing the renewed appearance of properly prepared hardwood.' },
            { h: 'Refreshed Wood Appearance', d: 'Refinishing brings back visual depth and clarity, helping older hardwood look cleaner, brighter, and more finished.' },
            { h: 'Improved Surface Protection', d: 'A fresh protective layer helps shield properly refinished hardwood from routine household wear and everyday surface contact.' },
            { h: 'Longer-Lasting Floor Appeal', d: 'Professional refinishing can refresh aging hardwood and help maintain its appearance for years with appropriate care.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Address Scratches, Dullness, And Everyday Hardwood Floor Wear',
          body: [
            'Heavy foot traffic can gradually leave hardwood looking tired, uneven, or less vibrant than it once did. Refinishing provides a practical way to refresh these surfaces when the underlying wood remains suitable for restoration.',
            'The process can help improve the appearance of surface scratches, worn finish areas, minor discoloration, and general dullness. Instead of covering up aging floors, refinishing renews the existing wood surface and gives it a cleaner, more polished appearance.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can refinishing improve hardwood floors with visible scratches?',
          a: 'Yes. Refinishing can address many surface-level scratches and worn finish areas by removing the damaged finish layer and preparing the wood for a fresh protective coating.',
        },
        {
          q: 'How do you determine whether my hardwood floor can be refinished?',
          a: 'We evaluate the wood’s condition, surface wear, existing finish, and overall integrity before recommending refinishing. This helps determine whether restoration is appropriate for the floor.',
        },
        {
          q: 'Will refinishing change the appearance of my existing hardwood?',
          a: 'Refinishing can significantly refresh the floor’s appearance. The final result depends on the existing wood, preparation, finish selected, and condition of the flooring before work begins.',
        },
        {
          q: 'What happens if different areas of the hardwood have uneven wear?',
          a: 'Areas with heavier wear receive careful attention during preparation. The refinishing process is designed to create a more consistent overall appearance across the treated floor.',
        },
        {
          q: 'How long should I avoid normal use after refinishing?',
          a: 'The appropriate waiting period depends on the finish used and its curing requirements. We provide specific guidance so the newly refinished surface can cure properly.',
        },
      ],
    },
  }),

  sanding: service({
    key: 'sanding',
    path: svc('wood-floor-sanding'),
    title: 'Wood Floor Sanding & Polyurethane Coating',
    metaTitle: 'Wood Floor Sanding Services in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg provides Wood Floor Sanding St. Petersburg for worn hardwood, scratch removal, and floor resurfacing. Get a quote today.',
    heroTitle: 'Wood Floor Sanding St. Petersburg',
    crumb: 'Wood Floor Sanding',
    navLabel: 'Wood Floor Sanding',
    description:
      'Wood floor sanding in St. Petersburg plus polyurethane coating. Dustless sanding through the grits, walkable in a day. Free in-home measure.',
    intro:
      'Wood floor sanding and the polyurethane coat that protects it, run as one sequence in St. Petersburg homes. Dustless sanding through the grits, then oil or water-based polyurethane built in coats.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us for wood floor sanding',
        intro:
          'All About Flooring St. Petersburg approaches every sanding project with careful surface preparation, consistent technique, and attention to existing wood conditions. Our goal is to create an even, clean foundation that helps your floors look refreshed and ready for finishing.',
        points: [
          'Careful assessment of existing floor condition',
          'Consistent sanding across hardwood surfaces',
          'Attention to worn and scratched areas',
          'Clean preparation before the next finish',
          'Experienced approach to wood floor restoration',
          'Clear communication throughout your project',
        ],
      },
      process: {
        heading: 'Our wood floor sanding process',
        intro:
          'We use a methodical sanding process to smooth worn surfaces, remove old finish, and prepare hardwood for its refreshed appearance.',
        steps: [
          {
            title: 'Surface assessment',
            body: 'We inspect the wood, identify wear patterns, and determine the appropriate sanding approach for the floor.',
          },
          {
            title: 'Initial sanding',
            body: 'The surface is carefully sanded to remove worn finish, scratches, and uneven areas without unnecessary wood removal.',
          },
          {
            title: 'Progressive smoothing',
            body: 'Finer sanding passes gradually smooth the boards, improving consistency and preparing the surface for finishing.',
          },
          {
            title: 'Final preparation',
            body: 'We inspect the completed sanding, address remaining imperfections, and leave the floor properly prepared for its next finish.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Prepare hardwood floors for a smoother and renewed finish',
          items: [
            { h: 'Smooth surface', d: 'We smooth worn boards carefully to reduce visible irregularities and create a clean foundation for the next finish.' },
            { h: 'Residue removal', d: 'Old finish residue is sanded away evenly, helping the wood surface look cleaner and more consistent before refinishing.' },
            { h: 'Scratch reduction', d: 'Targeted sanding minimizes surface scratches and traffic marks while preserving as much usable hardwood as possible.' },
            { h: 'Finish readiness', d: 'Final sanding creates an even, refined surface that is properly prepared for staining, sealing, or a fresh finish.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Restore worn hardwood surfaces with professional sanding',
          body: [
            'Wood Floor Sanding St. Petersburg helps refresh hardwood floors affected by scratches, dull finishes, surface wear, and years of everyday traffic. Proper sanding removes damaged surface layers while preserving the character of the existing boards.',
            'A carefully prepared floor also provides a smoother foundation for finishing. Whether the wood has become tired-looking or needs preparation after an older finish has deteriorated, professional sanding can create a cleaner, more consistent surface without replacing the entire floor.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Refresh aging hardwood floors without replacing structurally sound flooring',
          items: [
            { h: 'Surface renewal', d: 'Sanding removes the tired upper layer of wood, helping structurally sound floors regain a cleaner, refreshed appearance.' },
            { h: 'Wear correction', d: 'We address faded areas, scuffs, and uneven wear so the existing hardwood looks more balanced across the entire room.' },
            { h: 'Wood preservation', d: 'Controlled sanding renews the visible wood surface while helping preserve hardwood that remains structurally sound.' },
            { h: 'Practical restoration', d: 'Restoring existing hardwood improves its appearance while preserving flooring that still has useful service life.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Professional sanding for scratches, wear, and uneven finishes',
          body: [
            'Deep scratches, traffic marks, and patchy old finishes can make otherwise solid hardwood look neglected. Sanding addresses these surface imperfections by gradually removing the worn layer and smoothing transitions between affected areas.',
            'The right sanding technique matters because hardwood cannot be treated like a disposable surface. Excessive removal can shorten the floor’s useful life, while insufficient sanding may leave visible defects. Our approach focuses on controlled preparation suited to the floor’s condition.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can sanding improve hardwood floors with years of foot traffic?',
          a: 'Yes. Sanding can remove many surface-level signs of prolonged traffic, including dull finish, scuffing, and accumulated wear, when the underlying boards remain suitable for sanding.',
        },
        {
          q: 'How do you handle hardwood floors with noticeable scratches?',
          a: 'The sanding process gradually removes the worn surface layer and reduces visible scratches. The required sanding depth depends on how deep the damage extends into the wood.',
        },
        {
          q: 'Is sanding suitable when an old finish looks patchy?',
          a: 'Often, yes. Existing finish can wear unevenly over time. Sanding helps remove deteriorated surface layers and creates a more consistent foundation for the next finish.',
        },
        {
          q: 'Can every hardwood floor be sanded?',
          a: 'No. Floor condition, remaining wood thickness, previous sanding, and the type of flooring all matter. An assessment is important before deciding whether sanding is appropriate.',
        },
        {
          q: 'How do I know if my floor needs sanding instead of replacement?',
          a: 'If the boards are structurally sound but have surface wear, scratches, or a deteriorated finish, sanding may be a practical renewal option. A professional inspection can help determine suitability.',
        },
      ],
    },
  }),

  tile: service({
    key: 'tile',
    path: svc('tile-installation'),
    title: 'Tile Installation',
    metaTitle: 'Tile Installation | All About Flooring St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg offers Tile Installation St. Petersburg, custom tile layouts, precise tile fitting for any room. Call today!',
    heroTitle: 'Tile Installation St. Petersburg',
    crumb: 'Tile',
    navLabel: 'Tile Installation',
    workKey: 'checkerboard-open-plan',
    alt: 'Diagonal checkerboard porcelain tile meeting wood-look plank at a kitchen',
    tick: 'Porcelain and stone',
    heading: 'Level the substrate first. Then the tile.',
    description:
      'Tile installation in St. Petersburg - porcelain and natural stone, large format included. Substrate levelled first. Free in-home measure.',
    intro:
      'Porcelain and stone for St. Petersburg floors, walls and kitchens. We check flatness, patch where it needs it, and set with the right mortar so a large-format tile does not lip on a Gulf-side slab.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // One prose + three feature sections; ordered feature / prose / feature /
    // feature so the shared template interleaves Process and the prose breaks
    // the feature run. Backgrounds alternate bone/white across all sections.
    seo: {
      whyChoose: {
        heading: 'Why Choose Our Tile Installation Team For Your Project',
        intro:
          'Our team combines careful planning, accurate installation, and attention to finishing details to create tile surfaces that look polished and perform reliably. We focus on practical solutions, clear communication, and workmanship built around your project’s needs.',
        points: [
          'Careful planning from start to finish',
          'Precise tile placement and alignment',
          'Consistent spacing across finished surfaces',
          'Attention to detailed finishing work',
          'Clean and organized installation process',
          'Solutions tailored to your space',
        ],
      },
      process: {
        heading: 'Our Tile Installation Process For A Smooth, Professional Finish',
        intro:
          'We use a structured installation process to support accurate placement, consistent results, and a clean finished surface.',
        steps: [
          {
            title: 'Site Assessment',
            body: 'We inspect the space, discuss your goals, and identify preparation needs before planning the tile work.',
          },
          {
            title: 'Layout Planning',
            body: 'We map tile placement carefully to balance lines, limit awkward cuts, and create a clean finished look.',
          },
          {
            title: 'Expert Installation',
            body: 'We place and align each tile with care, maintaining consistent spacing and a secure, professional finish.',
          },
          {
            title: 'Final Inspection',
            body: 'We review the completed surface, check details, clean the area, and confirm the finish meets expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Practical Tile Solutions For Kitchens, Bathrooms, And Other Busy Areas',
          items: [
            { h: 'Durable Surface Results', d: 'We focus on proper placement and secure installation to help tile withstand traffic, moisture, and routine use.' },
            { h: 'Precise Layout Execution', d: 'Careful measurements and balanced spacing create straighter lines, cleaner transitions, and a polished finished look.' },
            { h: 'Easy-Care Finished Spaces', d: 'Well-installed tile creates an easy-to-clean surface that supports the room’s appearance, function, and daily use.' },
            { h: 'Clean, Cohesive Appearance', d: 'From layout to final checks, we keep details consistent so the finished surface feels polished, balanced, and complete.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Tile Installation Designed For Durable, Attractive Everyday Living Spaces',
          body: [
            'Tile Installation St. Petersburg gives homeowners a practical way to refresh busy rooms with durable, easy-to-clean surfaces. Careful layout, level preparation, and precise placement help create a polished finish that feels balanced and intentional. Quality installation also helps reduce visible spacing issues and supports dependable performance through everyday use.',
            'Whether updating a dated room, improving a high-traffic area, or completing a new design, professional installation can solve uneven lines, awkward transitions, inconsistent spacing, and mismatched finishes. We focus on accurate planning and clean execution so your new tile looks cohesive, performs reliably, and adds lasting value to the finished space.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Installation Details That Support Cleaner Lines And Lasting Performance',
          items: [
            { h: 'Kitchen Applications', d: 'Tile can refresh kitchen floors and walls with a durable finish suited to spills, cleaning, and daily activity.' },
            { h: 'Bathroom Applications', d: 'Careful planning creates balanced bathroom surfaces while accounting for moisture, room size, and everyday movement.' },
            { h: 'Open Area Layouts', d: 'Connected areas benefit from consistent layout planning that keeps tile lines aligned across the most visible spaces.' },
            { h: 'Design-Focused Installation', d: 'We coordinate tile direction, spacing, and placement so the finished design complements the room without feeling busy.' },
          ],
        },
        {
          layout: 'feature',
          heading: 'Tile Design And Placement Choices That Fit Your Space And Needs',
          items: [
            { h: 'Pattern And Alignment', d: 'Thoughtful pattern planning helps maintain visual balance while keeping tile lines consistent throughout the installation area.' },
            { h: 'Edge And Transition Work', d: 'Careful attention to edges and transitions helps create smoother connections between tiled surfaces and surrounding areas.' },
            { h: 'Surface Preparation', d: 'Proper preparation creates a more stable foundation for tile placement and helps support consistent alignment during installation.' },
            { h: 'Final Detail Checks', d: 'We review spacing, alignment, edges, and overall appearance to catch finishing details before completing the project.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can tile be installed over an existing finished surface?',
          a: 'It depends on the existing surface, its condition, stability, and suitability for tile. We assess the area first to determine the appropriate installation approach.',
        },
        {
          q: 'How do you handle uneven areas before tile installation?',
          a: 'We identify low or uneven areas during preparation and address the surface as needed before placing tile, helping create a more consistent finished result.',
        },
        {
          q: 'How do you keep tile lines straight across larger rooms?',
          a: 'We establish reference lines and carefully plan the layout before installation, helping maintain consistent alignment and spacing across the visible area.',
        },
        {
          q: 'Can you help with tile layout when the room has an unusual shape?',
          a: 'Yes. We can plan the placement around room dimensions, corners, transitions, and focal areas to create a balanced layout with fewer awkward cuts.',
        },
        {
          q: 'What should I expect during the final stage of tile installation?',
          a: 'We check alignment, spacing, edges, and overall appearance, then clean the work area and review the completed installation for finishing details.',
        },
      ],
    },
  }),

  bathroom: service({
    key: 'bathroom',
    path: svc('tile-installers-for-floors-and-backsplashes'),
    title: 'Bathroom Tile & Backsplash Installation',
    metaTitle: 'Bath & Backsplash Tile Services in St. Petersburg',
    metaDescription:
      'Bath & backsplash tile in St. Petersburg from All About Flooring — bath tile, backsplash layouts and custom tile patterns. Call today!',
    heroTitle: 'Bath & Backsplash Tile St. Petersburg',
    crumb: 'Bath & Backsplash',
    navLabel: 'Bathroom Tile & Backsplash',
    workKey: 'star-pebble-shower',
    webp: false,
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and marble-look tile',
    tick: 'Showers, baths, kitchens',
    heading: 'Waterproof first. Tile second.',
    description:
      'Bathroom tile and kitchen backsplash installation in St. Petersburg. Waterproof membrane, shower walls, niches and backsplash tile. Free in-home measure.',
    intro:
      'Tile installers for St. Petersburg showers, bathroom floors and kitchen backsplashes. Waterproof membrane before any tile, niches cut to the module, outlets and the range planned into the layout.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose us',
        intro:
          'Our flooring team combines practical tile knowledge, careful preparation, precise installation, and attentive finishing. We focus on dependable workmanship and clear communication so your updated bath or backsplash feels thoughtfully planned and professionally completed from start to finish.',
        points: [
          'Careful measurements before tile placement',
          'Clean, consistent tile spacing',
          'Thoughtful layouts for your space',
          'Detailed surface preparation',
          'Neat corners and finished edges',
          'Clear project communication',
          'Focused final quality checks',
        ],
      },
      process: {
        heading: 'Our process',
        intro:
          'We plan each project carefully, prepare surfaces properly, install with precision, and check finishing details before completion for a smooth, coordinated result.',
        steps: [
          {
            title: 'Plan and measure',
            body: 'We confirm measurements, discuss tile goals, and plan placement carefully before installation begins.',
          },
          {
            title: 'Prepare surfaces',
            body: 'We prepare surfaces carefully, addressing uneven areas and residue so the tile installation has a dependable foundation.',
          },
          {
            title: 'Install tile',
            body: 'We install tiles with controlled spacing and alignment, focusing on corners, transitions, patterns, and finished edges.',
          },
          {
            title: 'Finish details',
            body: 'We complete grout and edge details, inspect the work, and clean the area so your updated space feels complete.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Tile design options that fit your space and everyday style',
          items: [
            { h: 'Bath tile patterns', d: 'Use balanced tile patterns to make bathroom walls feel cohesive while complementing fixtures and room proportions.' },
            { h: 'Accent wall planning', d: 'Plan an accent wall that adds character without overwhelming the room, using scale and placement for visual balance.' },
            { h: 'Shower surround style', d: 'Create a coordinated shower surround with aligned tile, clean transitions, and a finish suited to everyday bathroom use.' },
            { h: 'Grout and edges', d: 'Finish tile areas with consistent grout lines and neat edges that keep the installation polished and clean overall.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create a more polished bathroom with carefully planned tile',
          body: [
            'Bath & Backsplash Tile St. Petersburg can give a bathroom or kitchen a cleaner, more finished appearance without changing the entire space. Carefully selected tile layouts can add visual interest while protecting key surfaces from everyday moisture and splashes, while making everyday cleaning simpler and easier.',
            'Our tile work is suited to homeowners updating dated finishes, improving an awkward layout, or creating a more cohesive look. We focus on accurate measurements, dependable surface preparation, consistent spacing, and clean finishing details so the completed installation looks intentional, performs well, and complements the surrounding room for busy households and daily routines.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Detailed installation practices for a clean, lasting finish',
          items: [
            { h: 'Backsplash layouts', d: 'Build a backsplash layout around your space, keeping patterns, spacing, and visual flow consistent throughout.' },
            { h: 'Countertop transitions', d: 'Coordinate tile near countertops and adjoining surfaces so transitions look deliberate rather than abrupt or uneven.' },
            { h: 'Pattern and scale', d: 'Choose tile scale and pattern carefully to balance the room, especially where wall dimensions limit available space.' },
            { h: 'Final design details', d: 'Refine corners, transitions, grout, and alignment so finishing details create a cohesive, professional appearance with final checks.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Upgrade kitchen backsplashes with clean, balanced tile layouts',
          body: [
            'A thoughtfully installed backsplash can bring the kitchen together while helping protect wall surfaces from everyday cooking splashes. We plan tile placement around cabinets, countertops, outlets, corners, and other existing features to create a balanced appearance.',
            'Our approach focuses on accurate measurements, consistent spacing, clean alignment, and carefully finished edges. Whether the goal is to refresh a dated kitchen or add a more distinctive design element, proper planning helps the backsplash look intentional rather than simply added onto the wall.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you help plan tile placement around existing bathroom features?',
          a: 'Yes. We can consider fixtures, wall dimensions, corners, and surrounding finishes when planning tile placement so the layout feels balanced and practical.',
        },
        {
          q: 'What if my existing bath or backsplash surface is uneven?',
          a: 'We assess the surface before installation and address preparation needs so tiles have a more stable foundation and finished areas look consistent.',
        },
        {
          q: 'Can backsplash tile be arranged in a custom pattern?',
          a: 'Yes. Tile can be planned in different layouts and patterns to create a more distinctive appearance while keeping spacing and alignment consistent.',
        },
        {
          q: 'How do you keep tile lines looking straight across the installation?',
          a: 'Careful measurements, planned placement, consistent spacing, and alignment checks help keep tile lines controlled and visually uniform throughout the finished area.',
        },
        {
          q: 'How do you handle corners and transitions where tile meets another surface?',
          a: 'We pay close attention to corners, edges, and transitions during installation so these areas look intentional and connect smoothly with surrounding finishes.',
        },
      ],
    },
  }),

  kitchen: service({
    key: 'kitchen',
    path: svc('kitchen-design-and-installation'),
    title: 'Kitchen Design and Installation',
    metaTitle: 'Kitchen Design & Installation in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg: Kitchen Design and Installation St. Petersburg, custom kitchen layouts and full kitchen installation. Call today now.',
    heroTitle: 'Kitchen Design and Installation St. Petersburg',
    crumb: 'Kitchen Design',
    navLabel: 'Kitchen Design and Installation',
    workKey: 'white-shaker-kitchen',
    webp: true,
    alt: 'White Shaker kitchen with marble mosaic backsplash, black hardware and stainless appliances',
    tick: 'Kitchens, start to finish',
    heading: 'The whole kitchen, sequenced so you are not waiting on three trades.',
    description:
      'Kitchen design and installation in St. Petersburg. Cabinets, countertops, backsplash and flooring sequenced by one crew. Free in-home measure.',
    intro:
      'Cabinets, countertops, backsplash and the floor that runs through a St. Petersburg kitchen. We design the layout, write one itemised price, and install in an order that keeps the room down for days, not months.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // One prose + two feature sections; the "Upgrade Dated Kitchens" feature
    // carries a two-paragraph intro (its 4 cards followed those paragraphs with
    // no separate heading in the source). Ordered prose / feature / feature so
    // the shared template interleaves Process and no two grids sit adjacent.
    seo: {
      whyChoose: {
        heading: 'Why Choose Us For Kitchen Design And Installation',
        intro:
          'We combine practical planning, careful measurements, and quality installation to create kitchens that work beautifully every day. Our approach considers your layout, storage needs, style preferences, and budget from the beginning.',
        points: [
          'Thoughtful layouts built around daily routines',
          'Precise measurements before installation begins',
          'Practical storage solutions for busy kitchens',
          'Design choices matched to your space',
          'Careful workmanship from planning through completion',
          'Clear communication throughout your project',
        ],
      },
      process: {
        heading: 'Our Kitchen Design And Installation Process',
        intro:
          'We make each project straightforward by moving from space planning and design decisions to precise installation and final quality checks.',
        steps: [
          {
            title: 'Space Planning',
            body: 'We evaluate your kitchen layout, measurements, workflow, and storage needs to create a practical foundation.',
          },
          {
            title: 'Design Development',
            body: 'We refine the layout, finishes, and visual details around your preferences, budget, and everyday cooking habits.',
          },
          {
            title: 'Professional Installation',
            body: 'Our team brings the approved design together with careful installation, accurate placement, and attention to finishing details.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review the completed kitchen with you, address details, and make sure the finished space meets expectations.',
          },
        ],
      },
      sections: [
        {
          layout: 'prose',
          heading: 'Create A Kitchen Layout That Makes Everyday Cooking Easier',
          body: [
            'Kitchen planning should balance storage, movement, style, and everyday routines. A thoughtful layout can make cooking easier while creating a more welcoming space for family meals, entertaining, and daily use.',
            'Professional installation brings the design together with careful measurements, coordinated placement, and a practical finish. From awkward layouts to dated spaces, the right approach helps homeowners gain useful storage and a kitchen that feels intentionally designed.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Upgrade Dated Kitchens With Practical Design And Lasting Functionality',
          intro: [
            'A dated kitchen can feel cramped, inefficient, or disconnected from how your household actually uses the space. Thoughtful redesign can improve traffic flow, storage capacity, workspace, and overall comfort without sacrificing the look you want.',
            'We focus on solutions that make sense for the room rather than forcing a standard layout. Whether the existing kitchen needs better organization or a complete transformation, careful planning helps create a more functional and inviting environment.',
          ],
          items: [
            { h: 'Better Kitchen Flow', d: 'Improve movement between key areas with a layout planned around cooking, cleaning, storage, and everyday household routines.' },
            { h: 'Smarter Storage', d: 'Make better use of available space through organized storage planning that keeps frequently used items accessible and counters less crowded.' },
            { h: 'Comfortable Work Zones', d: 'Create practical areas for food preparation, cooking, serving, and cleanup while maintaining comfortable movement throughout the kitchen.' },
            { h: 'Balanced Design', d: 'Coordinate the kitchen’s layout and visual details so the finished space feels cohesive, functional, comfortable, and suited to your lifestyle.' },
          ],
        },
        {
          layout: 'feature',
          heading: 'Tailor Kitchen Design Decisions To Your Space And Lifestyle',
          items: [
            { h: 'Personalized Layout Planning', d: 'We develop layouts around your room dimensions, household routines, cooking habits, storage priorities, and preferred way of using the kitchen.' },
            { h: 'Style Coordination', d: 'Design choices are coordinated to create a cohesive kitchen appearance while keeping practical needs, comfort, and long-term usability in focus.' },
            { h: 'Space Optimization', d: 'We identify opportunities to improve usable space and workflow, especially where existing layouts create congestion, wasted areas, or limited workspace.' },
            { h: 'Installation Precision', d: 'Careful installation helps translate the approved design into a finished kitchen with accurate placement, clean transitions, and consistent workmanship.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you redesign a kitchen with an awkward existing layout?',
          a: 'Yes. We can plan around challenging room dimensions, inefficient traffic patterns, limited workspace, and storage concerns to create a more practical layout.',
        },
        {
          q: 'How do you determine the right kitchen layout?',
          a: 'We consider room measurements, entrances, movement, work zones, storage needs, cooking habits, and how your household uses the space before finalizing the design.',
        },
        {
          q: 'Can the design accommodate specific storage needs?',
          a: 'Yes. Kitchen planning can prioritize the storage areas you need most while making better use of available space and keeping everyday items easy to access.',
        },
        {
          q: 'Do you handle installation after the kitchen design is approved?',
          a: 'Yes. The process can continue from the approved design into professional installation, helping ensure the finished kitchen reflects the planned layout and details.',
        },
        {
          q: 'What should I consider before starting a kitchen design project?',
          a: 'Consider how you use the kitchen, where movement feels restricted, what storage is lacking, your preferred style, and which improvements would make the space easier to use.',
        },
      ],
    },
  }),

  cabinets: service({
    key: 'cabinets',
    path: svc('cabinet-and-countertop-design-and-installation'),
    title: 'Cabinet & Countertop Design and Installation',
    metaTitle: 'Cabinet & Countertop Installation in St. Petersburg',
    metaDescription:
      'Cabinet & countertop installation in St. Petersburg from All About Flooring — kitchen cabinet fitting and layout installation. Call today!',
    heroTitle: 'Cabinet & Countertop Installation St. Petersburg',
    crumb: 'Cabinets & Countertops',
    navLabel: 'Cabinet & Countertop Design',
    workKey: 'oak-double-vanity-cabinets',
    webp: true,
    alt: 'Bathroom double vanity in light oak Shaker cabinets with a white quartz top and black oval mirrors',
    tick: 'Cabinets and tops',
    heading: 'Cabinets and countertops measured, set, and finished by the same people.',
    description:
      'Cabinet and countertop design and installation in St. Petersburg. Kitchens, baths, laundry and bars - Shaker cabinets and quartz tops, one crew. Free in-home measure.',
    intro:
      'Kitchens, bathroom vanities, laundry rooms and built-in bars in St. Petersburg. We design the cabinet layout, install the boxes and doors, and template the tops so the stone fits the run you signed for.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // One prose + two feature sections, ordered feature / prose / feature so the
    // shared template interleaves Process and no two grids sit adjacent.
    seo: {
      whyChoose: {
        heading: 'Why choose us for cabinet and countertop installation',
        intro:
          'We combine careful measurements, practical installation methods, and attention to finish details to create functional, polished kitchen upgrades. Our approach focuses on fit, alignment, durability, and a clean final appearance from start to completion.',
        points: [
          'Precise measurements for dependable installation',
          'Careful alignment across cabinets and surfaces',
          'Clean workmanship with attention to details',
          'Practical solutions for different kitchen layouts',
          'Durable installation built for everyday use',
          'Clear communication throughout your project',
        ],
      },
      process: {
        heading: 'Our process for cabinet and countertop installation',
        intro:
          'From initial measurements to final adjustments, we follow a structured process designed to keep your installation accurate, efficient, and clean.',
        steps: [
          {
            title: 'Measure space',
            body: 'We assess dimensions, wall conditions, and layout details to establish accurate installation requirements.',
          },
          {
            title: 'Plan layout',
            body: 'We organize cabinet and countertop placement for balanced spacing, practical access, and a cohesive finished appearance.',
          },
          {
            title: 'Install components',
            body: 'Our team carefully positions, secures, and aligns each element to create a stable, consistent installation.',
          },
          {
            title: 'Check finish',
            body: 'We inspect alignment, spacing, edges, and final details before completing the project to ensure everything looks properly finished.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Create a cohesive kitchen layout with accurate cabinet and countertop fitting',
          items: [
            { h: 'Balanced cabinet placement', d: 'We position cabinets carefully to maintain consistent spacing, alignment, and practical access throughout your kitchen.' },
            { h: 'Secure countertop fitting', d: 'Countertops are fitted with attention to stability, positioning, and clean transitions across the installation area.' },
            { h: 'Functional workspace planning', d: 'We help coordinate placement so preparation areas remain practical, accessible, and comfortable for everyday kitchen routines.' },
            { h: 'Refined finished appearance', d: 'Consistent lines and carefully handled transitions help give the completed kitchen a polished, unified appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve kitchen function with professionally installed cabinetry and surfaces',
          body: [
            'A well-planned kitchen should make everyday tasks easier while using available space efficiently. Professional installation helps create consistent spacing, dependable alignment, and a finished appearance that feels intentional rather than pieced together.',
            'Cabinet & Countertop Installation St. Petersburg can help homeowners address outdated layouts, uneven placement, and worn-looking surfaces without overlooking practical details. Careful fitting supports smoother use, better visual balance, and a more cohesive kitchen. Whether updating one area or coordinating a broader renovation, experienced installation helps ensure each element works together properly.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Address challenging layouts with careful installation and practical adjustments',
          items: [
            { h: 'Uneven wall conditions', d: 'We account for existing wall variations and adjust installation details for a more consistent final fit.' },
            { h: 'Tight kitchen spaces', d: 'Thoughtful placement helps make the most of compact areas without sacrificing usability or visual balance.' },
            { h: 'Misaligned existing features', d: 'We work around existing conditions while maintaining cleaner lines and better coordination between installed elements.' },
            { h: 'Complex layout transitions', d: 'Careful planning helps connect different kitchen sections while keeping spacing and alignment visually consistent.' },
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you install cabinets and countertops as part of the same project?',
          a: 'Yes. Coordinating both installations can help maintain consistent measurements, alignment, spacing, and overall kitchen flow from one stage to the next.',
        },
        {
          q: 'What happens if my kitchen walls are not perfectly straight?',
          a: 'Existing walls can vary in level or alignment. We assess those conditions during planning and make practical installation adjustments for a cleaner finished fit.',
        },
        {
          q: 'Can installation work with an existing kitchen layout?',
          a: 'Yes. If the current layout is suitable, installation can be planned around the existing configuration while addressing fitting, alignment, and usability concerns.',
        },
        {
          q: 'How do you handle countertop fitting around an existing cabinet layout?',
          a: 'We evaluate the cabinet positioning and available dimensions before fitting the countertop, helping ensure proper placement and smoother transitions across the workspace.',
        },
        {
          q: 'What should I expect before installation begins?',
          a: 'The project starts with reviewing the space, measurements, layout requirements, and installation conditions so the work can be organized accurately before fitting begins.',
        },
      ],
    },
  }),

  tileCompany: service({
    inNav: false,
    key: 'tile',
    path: svc('tile-company'),
    title: 'Tile Company in St. Petersburg',
    metaTitle: 'Top-Rated Tile Company in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg offers Tile Company St. Petersburg services for tile installation, layout planning and precision placement. Get started.',
    heroTitle: 'Tile Company St. Petersburg',
    crumb: 'Tile Company',
    description:
      'St. Petersburg tile company for floors, showers and backsplashes. One crew from waterproofing to grout. Free in-home measure.',
    intro:
      'A St. Petersburg tile company that still sends the people who priced the job. Floors, showers, kitchen backsplashes - one crew, written price, no rotating sub.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose our tile company for your flooring project',
        intro:
          'All About Flooring St. Petersburg provides thoughtful tile solutions built around your space, design preferences, and everyday needs. We focus on careful preparation, balanced layouts, clean installation, and dependable results that look finished.',
        points: [
          'Careful planning for every tile project',
          'Clean, balanced layouts and precise placement',
          'Quality-focused installation from start to finish',
          'Practical recommendations for your space',
          'Attention to edges, transitions, and alignment',
          'Clear communication throughout the project',
        ],
      },
      process: {
        heading: 'Our tile installation process',
        intro:
          'We use a structured approach to prepare your space, plan the layout, install tile carefully, and complete the finishing details.',
        steps: [
          {
            title: 'Assess space',
            body: 'We review the installation area, existing conditions, and project goals to determine the right preparation approach.',
          },
          {
            title: 'Plan layout',
            body: 'We map tile placement, transitions, and visual balance before installation begins for a cleaner finished appearance.',
          },
          {
            title: 'Install tile',
            body: 'We place each tile carefully while maintaining consistent alignment, spacing, and an even overall surface.',
          },
          {
            title: 'Finish details',
            body: 'We complete edges, transitions, and final checks to ensure the installation looks polished and ready for everyday use.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Choose tile layouts that bring balance and lasting appeal',
          items: [
            { h: 'Balanced tile layouts', d: 'We plan tile placement around room proportions, helping lines flow naturally and keeping the finished design visually balanced.' },
            { h: 'Precise tile placement', d: 'Careful positioning keeps joints consistent and creates a cleaner appearance across the completed tile surface.' },
            { h: 'Practical material planning', d: 'We consider room use and installation conditions to help create a tile solution suited to everyday demands.' },
            { h: 'Clean finishing details', d: 'Attention to edges, transitions, and final alignment helps deliver a polished appearance throughout the completed installation.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create durable tile surfaces with thoughtful design and installation',
          body: [
            'A well-installed tile surface can bring structure, durability, and visual character to rooms that see frequent daily activity. Tile Company St. Petersburg services help homeowners address worn surfaces, outdated finishes, and spaces that need a more practical flooring solution.',
            'From planning the layout to completing the final details, careful installation helps reduce uneven lines, awkward cuts, and distracting transitions. The result is a tile surface that feels intentional and works naturally with the surrounding room, whether you are refreshing one area or updating a larger portion of your home.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Get a tile installation that fits your space and style',
          items: [
            { h: 'Room-specific planning', d: 'We adapt installation planning to your room dimensions, layout challenges, and preferred finished appearance.' },
            { h: 'Consistent spacing', d: 'Accurate spacing helps maintain visual continuity and gives the completed surface a more professional, orderly look.' },
            { h: 'Detail-focused installation', d: 'We pay close attention to alignment, cuts, edges, and transitions where small mistakes can affect the finished result.' },
            { h: 'Finished appearance', d: 'A thorough final review helps ensure the tile surface looks cohesive, clean, and ready for everyday use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve everyday spaces with tile solutions built around your needs',
          body: [
            'Tile can be a practical choice when you want a surface that feels finished while standing up to regular household activity. Customers often need help creating a cohesive appearance when existing flooring feels dated, difficult to coordinate, or no longer suits how the room is used.',
            'Our approach considers the room dimensions, desired look, traffic patterns, and installation conditions before work begins. Thoughtful preparation and accurate placement help create consistent rows, clean transitions, and a finished surface that complements the space without making the design feel overly complicated.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you plan a tile layout for an uneven or awkward room?',
          a: 'We assess the room dimensions, focal points, edges, and transitions before establishing a layout that minimizes awkward cuts and keeps the overall pattern visually balanced.',
        },
        {
          q: 'Can tile installation work around existing room features?',
          a: 'Yes. The layout can be planned around permanent features, openings, transitions, and other fixed elements so the finished installation looks intentional rather than forced.',
        },
        {
          q: 'What happens if the existing surface is not suitable for tile?',
          a: 'We evaluate the surface before installation and identify preparation needs that may affect the final result. Proper preparation helps provide a more stable and consistent foundation.',
        },
        {
          q: 'How do you keep tile lines looking consistent across a larger space?',
          a: 'Careful layout planning, measured placement, and consistent spacing help maintain alignment as the installation moves across the room and around transitions.',
        },
        {
          q: 'Can you help determine the best tile approach for a specific room?',
          a: 'Yes. We consider the room’s use, dimensions, desired appearance, and installation conditions when helping you choose an approach that fits the space.',
        },
      ],
    },
  }),

  contractor: service({
    inNav: false,
    key: 'hardwood',
    path: svc('flooring-contractor'),
    title: 'Flooring Contractor in St. Petersburg',
    metaTitle: 'Flooring Contractor Services in St. Petersburg',
    metaDescription:
      'All About Flooring St. Petersburg provides Flooring Contractor St. Petersburg services for flooring installation, replacement, and upgrades. Call today!',
    heroTitle: 'Flooring Contractor St. Petersburg',
    crumb: 'Flooring Contractor',
    description:
      'Flooring contractor in St. Petersburg for hardwood, LVP, laminate and tile. One crew from demolition to walkthrough. Free in-home measure.',
    intro:
      'All About Flooring is the flooring contractor in St. Petersburg that measures, writes the price, and installs the floor. Hardwood, luxury vinyl, laminate, tile and refinishing - licensed, insured, and local to Pinellas.',
    // Finalised SEO content, appended below the existing St. Petersburg intro.
    // Two prose + two feature sections, ordered feature / prose / feature /
    // prose so the shared template interleaves Process between them.
    seo: {
      whyChoose: {
        heading: 'Why choose all about flooring St. Petersburg',
        intro:
          'All About Flooring St. Petersburg combines practical flooring knowledge, careful workmanship, and customer-focused service to help homeowners achieve durable, attractive results. We focus on proper preparation, precise installation, and solutions suited to each property’s needs.',
        points: [
          'Experienced flooring workmanship and guidance',
          'Careful preparation before flooring work',
          'Attention to clean, precise installation',
          'Solutions matched to your flooring needs',
          'Quality-focused approach from start to finish',
          'Clear communication throughout your project',
          'Respectful service for every property',
        ],
      },
      process: {
        heading: 'Our flooring process',
        intro:
          'We make flooring projects easier with a clear process focused on planning, preparation, installation, and a finished result you can enjoy.',
        steps: [
          {
            title: 'Project assessment',
            body: 'We inspect the space, discuss your goals, and identify flooring requirements before recommending the right approach.',
          },
          {
            title: 'Surface preparation',
            body: 'We prepare the work area carefully, addressing uneven surfaces and existing concerns that could affect the finished flooring.',
          },
          {
            title: 'Professional installation',
            body: 'Our team installs the selected flooring with careful measurements, consistent alignment, and attention to details that shape the final appearance.',
          },
          {
            title: 'Final walkthrough',
            body: 'We review the completed work, check finishing details, and make sure the flooring meets expectations before wrapping up.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Professional planning for better flooring results',
          items: [
            { h: 'Room-specific recommendations', d: 'We consider room use, traffic patterns, and existing conditions to help determine a practical flooring approach for the space.' },
            { h: 'Detailed installation preparation', d: 'Careful measurements and surface preparation help create consistent flooring results while reducing issues that can affect the finished appearance.' },
            { h: 'Clean and accurate workmanship', d: 'Precise installation techniques support aligned layouts, clean transitions, and a polished result throughout the completed flooring project.' },
            { h: 'Solutions built around your needs', d: 'We focus on your property’s requirements and project goals, helping create flooring results that fit both function and appearance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Improve worn flooring with practical installation solutions',
          body: [
            'Flooring can change how a room looks, feels, and functions every day. When existing floors become outdated, damaged, or difficult to live with, professional replacement can create a cleaner and more comfortable environment without unnecessary complications. Flooring Contractor St. Petersburg services help address everyday concerns such as worn surfaces, dated appearances, and flooring that no longer suits the room. Careful preparation and accurate installation also help create a more consistent finished appearance. Whether updating one room or improving several connected spaces, the right approach can make the project feel more manageable while supporting lasting performance.',
          ],
        },
        {
          layout: 'feature',
          heading: 'Flooring expertise for dependable project execution',
          items: [
            { h: 'Thorough surface evaluation', d: 'We assess existing conditions before work begins, helping identify concerns that could interfere with proper flooring installation.' },
            { h: 'Attention to flooring alignment', d: 'Consistent spacing and alignment help produce a balanced appearance while giving the finished floor a more professional look.' },
            { h: 'Careful finishing details', d: 'We pay close attention to edges, transitions, and other finishing areas that can influence how complete the finished project appears.' },
            { h: 'Practical guidance throughout the project', d: 'Clear communication helps you understand the work involved, the recommended approach, and what to expect as the project progresses.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Create a more comfortable and functional home interior',
          body: [
            'Choosing new flooring involves more than selecting an attractive surface. The material, installation method, room conditions, and expected daily use all influence how well the finished floor performs. A professional approach helps bring these factors together before work begins. Proper installation can improve visual consistency, provide a more comfortable walking surface, and help the finished flooring handle everyday activity. It can also give dated interiors a refreshed appearance while making spaces easier to maintain. By considering how each room is actually used, homeowners can move toward flooring solutions that balance appearance, durability, and practical day-to-day performance.',
          ],
        },
      ],
      faqs: [
        {
          q: 'How do you determine the right flooring approach for my space?',
          a: 'We consider the room’s purpose, existing floor condition, expected traffic, and your appearance preferences before recommending an appropriate installation approach.',
        },
        {
          q: 'What happens if the existing floor is uneven?',
          a: 'We evaluate the surface and identify preparation needs before installation. Addressing uneven areas can help the new flooring sit more consistently and reduce visible imperfections.',
        },
        {
          q: 'Can you help when flooring looks worn but the underlying surface is still usable?',
          a: 'Yes. We assess the existing condition and discuss practical options based on the floor’s current state, project goals, and the result you want to achieve.',
        },
        {
          q: 'How can professional installation affect the finished appearance?',
          a: 'Accurate measurements, proper preparation, consistent alignment, and careful finishing can make a noticeable difference in how uniform and polished the completed flooring looks.',
        },
        {
          q: 'What should I expect during a flooring project?',
          a: 'We begin by assessing the space and planning the work, then prepare the surface, complete the installation, and review the finished project for final details.',
        },
      ],
    },
  }),
}

export const STPETE_NAV_SERVICES = Object.values(STPETE_SERVICE_PAGES)
  .filter((p) => p.inNav)
  .map((p) => ({ href: p.path, label: p.navLabel || p.crumb }))

export const STPETE_SERVICE_CARDS = [
  {
    key: 'lvp',
    title: 'Luxury Vinyl Plank (LVP) Flooring Installation',
    body: 'Waterproof, quiet underfoot and built for sand, sliders and a St. Petersburg summer. Our first recommendation for kitchens, condos and homes with dogs.',
    href: STPETE_SERVICE_PAGES.lvp.path,
  },
  {
    key: 'laminate',
    title: 'Laminate Flooring Installation',
    body: 'The hardest-wearing surface per dollar. Click-lock over a levelled Pinellas slab, with expansion set so it never peaks in July.',
    href: STPETE_SERVICE_PAGES.laminate.path,
  },
  {
    key: 'hardwood',
    title: 'Hardwood Flooring Installation',
    body: 'Solid oak, maple and hickory, nailed or glued to spec. Acclimatised on site before a single board goes down.',
    href: STPETE_SERVICE_PAGES.hardwood.path,
  },
  {
    key: 'engineered',
    title: 'Engineered Hardwood Flooring Installation',
    body: 'Real timber wear layer on a stable core - the hardwood we will lay over concrete and next to a bath or a slider.',
    href: STPETE_SERVICE_PAGES.engineered.path,
  },
  {
    key: 'refinishing',
    title: 'Hardwood Floor Refinishing',
    body: 'Sand, stain and reseal a floor you already own. Usually a third of the cost of replacement, with none of the demolition.',
    href: STPETE_SERVICE_PAGES.refinishing.path,
  },
  {
    key: 'sanding',
    title: 'Wood Floor Sanding',
    body: 'Dustless sanding through the grits, then polyurethane built in coats. Walkable in a day, furniture back within the week.',
    href: STPETE_SERVICE_PAGES.sanding.path,
  },
  {
    key: 'tile',
    title: 'Tile Installation',
    body: 'Porcelain and natural stone, large format included. We level the substrate first - lippage is what happens when nobody does.',
    href: STPETE_SERVICE_PAGES.tile.path,
  },
  {
    key: 'bathroom',
    title: 'Bathroom Tile & Backsplash Installation',
    body: 'Waterproof membrane before any tile. Showers, niches and kitchen backsplashes by the same crew that does the floor.',
    href: STPETE_SERVICE_PAGES.bathroom.path,
  },
  {
    key: 'kitchen',
    title: 'Kitchen Design and Installation',
    body: 'Cabinets, countertops, backsplash and flooring sequenced as one St. Petersburg job. Full gut or a targeted refresh, same crew as the floor.',
    href: STPETE_SERVICE_PAGES.kitchen.path,
  },
  {
    key: 'cabinets',
    title: 'Cabinet & Countertop Design and Installation',
    body: 'Kitchen, bath, laundry and bar cabinets with quartz or granite tops. Templated after the boxes are set, hardware and cut-outs in the written price.',
    href: STPETE_SERVICE_PAGES.cabinets.path,
  },
]

const AREA_PHOTOS = [
  {
    workKey: 'star-pebble-shower',
    alt: 'Walk-in shower with star mosaic feature wall, pebble floor and oak plank bathroom flooring',
    webp: false,
  },
  {
    workKey: 'farmhouse-range-kitchen',
    alt: 'White farmhouse kitchen with stone mosaic backsplash, wood range hood and wide-plank flooring',
    webp: false,
  },
  {
    workKey: 'wood-look-plank-tile',
    alt: 'Newly installed wood-look luxury vinyl plank in an empty room with white baseboards',
    webp: true,
  },
  {
    workKey: 'checkerboard-open-plan',
    alt: 'Open-plan room with checkerboard porcelain tile meeting wood-look plank flooring',
    webp: true,
  },
  {
    workKey: 'navy-backsplash-kitchen',
    alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets and oak flooring',
    webp: false,
  },
  {
    workKey: 'dark-kitchen-bronze-glass',
    alt: 'Charcoal kitchen with bronze glass subway backsplash and wood-look plank flooring',
    webp: true,
  },
]

const AREA_CLOSE =
  'One St. Petersburg crew from the first measure to the last baseboard. Written itemised price, a date we keep, and a floor built for Gulf humidity - not just a photograph. Licensed, insured, and local to Pinellas.'

function makeArea({ key, city, slug, blurb, photo = 0 }) {
  const shot = AREA_PHOTOS[photo % AREA_PHOTOS.length]
  return {
    key,
    city,
    path: loc(slug),
    heroTitle: `Expert Flooring Company in ${city}`,
    crumb: city,
    description: `Flooring installation in ${city}, FL - luxury vinyl, tile and hardwood by a St. Petersburg crew that measures, prices and installs the job themselves.`,
    tick: `${city}, Florida`,
    heading: `Flooring for ${city} homes, installed by the people who priced it.`,
    intro: blurb,
    workKey: shot.workKey,
    alt: shot.alt,
    webp: shot.webp,
    body: [blurb, AREA_CLOSE],
    pointsTick: `Working in ${city}`,
    pointsHeading: 'The same crew that measures the job installs it.',
    pointsBody: [
      `We are not a franchise sending a different installer each week. The people who walk your ${city} rooms are the people who cut, set, and walk it with you at the end.`,
    ],
    points: [
      `Free in-home measure in ${city}, no obligation`,
      'Itemised written price within 48 hours',
      'Luxury vinyl, tile, and hardwood, one crew',
      'Fifteen-plus years across Tampa Bay homes',
    ],
    close: AREA_CLOSE,
  }
}

export const STPETE_AREA_PAGES = {
  'st-pete-beach': {
    ...makeArea({
      key: 'st-pete-beach',
      city: 'St. Pete Beach',
      slug: 'st-pete-beach-fl',
      photo: 0,
      blurb:
        'St. Pete Beach condos and Gulf-front houses take sand, salt air and sliders. We install waterproof LVP, porcelain tile and hardwood specified for a barrier-island climate, and we work around building rules when the job is in a stacked unit.',
    }),
    // Optimised St. Pete Beach location page — first St. Petersburg location
    // page on the shared location-page system (StPeteInner `area.seo` flow),
    // modelled on the completed Odessa main-site template but wired to the
    // St. Petersburg (SECOND) listing: St. Pete reviews, St. Pete service
    // cards, St. Pete service areas, St. Pete map and shell. Authored Why
    // Choose Us + Our Process; feature/prose copy and FAQs are the supplied
    // content verbatim. Supplied H1 ("Expert Flooring Company in St. Pete
    // Beach") matches the makeArea heroTitle default.
    metaTitle: 'Flooring Company in St. Pete Beach - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in St. Pete Beach from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in St. Pete Beach',
        intro:
          'St. Pete Beach condos and Gulf-front houses take sand, salt air, and sliders. As a Flooring Company in St. Pete Beach, we specify materials for a barrier-island climate, prep and level before we install, and work around building rules when the job is in a stacked unit — one St. Petersburg crew from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for sand, salt air, and sliders',
          'Subfloor moisture testing and levelling before installation',
          'Work scheduled around condo building rules and elevator windows',
          'Even seams and clean transitions across connected rooms',
          'One St. Petersburg crew from measure to walkthrough',
          'Local knowledge of Pass-a-Grille, Upham Beach, and Corey Avenue homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for St. Pete Beach Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your St. Pete Beach home or condo.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your St. Pete Beach home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a coastal, barrier-island climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Surface Prep & Installation',
            body: 'We moisture-test and level the surface, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for St. Pete Beach Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring for Coastal Homes', d: 'Choose flooring that supports busy kitchens, from everyday cooking to entertaining guests after a day at the beach. We focus on accurate installation around cabinets, appliances, and adjoining areas for a clean, finished appearance.' },
            { h: 'Comfortable Flooring for Bedrooms', d: 'Create inviting bedrooms with flooring suited to your preferred style and comfort. We carefully handle measurements, layouts, and transitions to help produce a smooth installation that complements bedrooms in homes throughout St. Pete Beach.' },
            { h: 'Durable Living Room Flooring', d: 'Refresh living spaces with flooring designed around regular household activity and coastal lifestyles. Whether updating a condo near Upham Beach or renovating a family room, we provide installation focused on consistency, fit, and lasting everyday use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout St. Pete Beach',
          body: [
            'An Expert Flooring Company in St. Pete Beach helps homeowners create durable, attractive interiors suited to coastal living. We provide precise installation with careful surface preparation, measurements, transitions, and finishing details. Homes near Pass-a-Grille and Gulf Way can benefit from flooring selected for everyday comfort and practical maintenance.',
            'Whether you are refreshing a beach property, replacing worn floors after years of foot traffic, or updating a family home near Corey Avenue, we provide dependable installation solutions. Our work is planned around each room’s purpose, helping create a cohesive finished floor that complements your St. Pete Beach home and lifestyle.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout St. Pete Beach',
          body: [
            'Our flooring contractors provide detail-focused installation for St. Pete Beach homes, condos, and properties with distinctive coastal layouts. From Pass-a-Grille residences to homes near Upham Beach, we consider existing surfaces, room dimensions, transitions, and intended use before installation. Careful preparation helps support a level, consistent finished floor.',
            'Homeowners may need flooring after renovating a kitchen, updating a vacation property, or replacing surfaces worn by frequent household and beach traffic. As a Flooring Company in St. Pete Beach, we provide practical installation solutions tailored to each project, with workmanship focused on clean details and a finished result that suits the property.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – St. Pete Beach',
          body: [
            'Homeowners in St. Pete Beach can rely on All About Flooring St. Petersburg for professional flooring installation, replacement, and remodeling services. We help customers select flooring that fits their home, lifestyle, and design goals while providing dependable workmanship and attention to detail for lasting results.',
            'We serve St. Pete Beach and nearby communities including Treasure Island, South Pasadena, and Gulfport. Our service area covers neighborhoods near Gulf Boulevard and Blind Pass Road, including properties close to Pass-a-Grille Beach, Upham Beach Park, and Corey Avenue’s local shops and restaurants.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring considerations are important for homes near the St. Pete Beach shoreline?',
          a: 'Coastal homes can experience frequent foot traffic, sand, and moisture brought indoors. We can help homeowners choose flooring suited to the room while planning installation details that support practical maintenance and everyday durability.',
        },
        {
          q: 'Can you install new flooring in St. Pete Beach vacation or rental properties?',
          a: "Yes. We provide residential flooring installation for properties throughout St. Pete Beach. We can work around the property's existing layout and help create an updated, durable finish suitable for frequent guest use.",
        },
        {
          q: 'Do you replace flooring in condos near Upham Beach?',
          a: 'Yes. We serve St. Pete Beach residential properties, including condos near Upham Beach. Flooring installation is planned around the individual unit, existing surface, room dimensions, and any necessary transitions between spaces.',
        },
        {
          q: 'Can you update flooring in an older Pass-a-Grille home?',
          a: "Yes. Older homes may have unique room layouts or existing flooring conditions that require careful preparation. We assess the installation area and plan the new flooring around the property's existing features and intended use.",
        },
        {
          q: 'Do you install flooring for homes near Corey Avenue?',
          a: 'Yes. We provide flooring installation throughout St. Pete Beach, including residential properties near Corey Avenue. Contact All About Flooring Tampa Bay Contractors to discuss your rooms, flooring needs, and preferred project goals.',
        },
      ],
    },
  },
  'treasure-island': {
    ...makeArea({
      key: 'treasure-island',
      city: 'Treasure Island',
      slug: 'treasure-island-fl',
      photo: 1,
      blurb:
        'Treasure Island sits on a thin barrier strip where humidity and beach traffic punish the wrong floor. Luxury vinyl and tile are the usual call; hardwood goes down where the room can take it, after a moisture reading, not before.',
    }),
    // Optimised Treasure Island location page — St. Petersburg location on the
    // shared StPeteInner `area.seo` flow, following the completed St. Pete
    // Beach template. Authored Why Choose Us + Our Process; feature/prose copy
    // and FAQs are the supplied content verbatim. Supplied H1 ("Expert
    // Flooring Company in Treasure Island") matches the makeArea heroTitle.
    metaTitle: 'Flooring Company in Treasure Island | All About',
    metaDescription:
      'Flooring installation, replacement & upgrades in Treasure Island from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Treasure Island',
        intro:
          'Treasure Island sits on a thin barrier strip where humidity and beach traffic punish the wrong floor. As a Flooring Company in Treasure Island, luxury vinyl and tile are the usual call; we take a moisture reading before hardwood goes down, prep and level properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for humidity and beach traffic',
          'Moisture readings taken before hardwood goes down',
          'Subfloor levelling and prep before installation',
          'Even seams and clean transitions across connected rooms',
          'One St. Petersburg crew from measure to walkthrough',
          'Local knowledge of Sunset Beach, Gulf Boulevard, and John’s Pass homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Treasure Island Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Treasure Island home or vacation property.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Treasure Island home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a barrier-island climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Surface Prep & Installation',
            body: 'We moisture-test and level the surface, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Treasure Island Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring for Coastal Homes', d: 'Choose flooring that fits kitchens used for everyday meals, entertaining, and gatherings after time at the beach. We focus on precise installation around cabinets, appliances, and adjoining rooms for a clean, coordinated result.' },
            { h: 'Comfortable Flooring for Bedrooms', d: 'Refresh bedrooms with flooring that creates a welcoming atmosphere while matching your preferred style. We carefully manage measurements, layouts, and transitions to help deliver a smooth installation throughout homes and vacation properties.' },
            { h: 'Durable Flooring for Living Spaces', d: 'Update living rooms and family areas with flooring suited to regular activity and coastal lifestyles. Properties near Treasure Island Beach can benefit from thoughtfully planned installation that emphasizes proper fit, consistent details, and everyday usability.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Treasure Island',
          body: [
            'An experienced Flooring Company in Treasure Island helps homeowners create attractive, durable interiors suited to coastal living. We provide careful installation with attention to subfloor preparation, accurate measurements, room layouts, transitions, and finishing details. Homes near Sunset Beach and Treasure Island Beach can benefit from flooring selected around daily use and practical maintenance needs.',
            'Whether you are refreshing a vacation property, replacing worn flooring from frequent foot traffic, or remodeling a home near Gulf Boulevard, we provide dependable installation solutions. Our work is planned around each room, helping create a comfortable, cohesive floor that complements your Treasure Island property and lifestyle.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Treasure Island',
          body: [
            'Our flooring contractors provide detail-focused installation for Treasure Island homes, condos, and vacation properties. From residences near Sunset Beach to properties along Gulf Boulevard, we consider existing flooring, room dimensions, surface conditions, and intended use before installation. Proper preparation and careful layout planning help support a level, consistent finished floor.',
            'Homeowners may need flooring after a renovation, when updating a rental property, or when existing surfaces show years of wear from household and beach traffic. As a Flooring Company in Treasure Island, we provide practical installation solutions tailored to each space, with workmanship focused on clean transitions, accurate fitting, and a polished final appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Treasure Island',
          body: [
            'All About Flooring St. Petersburg provides Treasure Island homeowners with reliable flooring solutions for renovations, replacements, and interior upgrades. From refreshing outdated floors to completing larger remodeling projects, our team focuses on quality materials, careful installation, and flooring choices suited to everyday residential use.',
            'We serve Treasure Island and surrounding areas including Madeira Beach, St. Pete Beach, and Gulfport. Our local service area includes neighborhoods along Gulf Boulevard and Gulf Boulevard Beach Access, with properties near Treasure Island Beach, John’s Pass, and the nearby waterfront communities.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring considerations matter for Treasure Island homes near the beach?',
          a: 'Beachside properties can experience frequent foot traffic, sand, and moisture brought indoors. We help homeowners select flooring appropriate for each room while planning installation details that support practical maintenance and everyday durability.',
        },
        {
          q: 'Can you install flooring in Treasure Island vacation rentals?',
          a: 'Yes. We provide residential flooring installation for vacation properties throughout Treasure Island. We can work with the existing layout and help create an updated, durable finish suited to regular guest use.',
        },
        {
          q: 'Do you replace flooring in condos along Gulf Boulevard?',
          a: "Yes. We serve residential properties throughout Treasure Island, including condos along Gulf Boulevard. Each installation is planned around the unit's layout, existing surface, flooring selection, and transitions between rooms.",
        },
        {
          q: 'Can you update flooring in an older Treasure Island property?',
          a: "Yes. Older properties may have distinctive layouts or existing flooring conditions that require additional preparation. We assess the installation area and plan the new flooring around the property's structure and intended use.",
        },
        {
          q: 'Do you install flooring in homes near Sunset Beach?',
          a: 'Yes. Our flooring services are available throughout Treasure Island, including homes and properties near Sunset Beach. Contact All About Flooring St. Petersburg to discuss your flooring needs and project goals.',
        },
      ],
    },
  },
  seminole: {
    ...makeArea({
      key: 'seminole',
      city: 'Seminole',
      slug: 'seminole-fl',
      photo: 2,
      blurb:
        'Seminole is mid-Pinellas - ranch homes, additions and full-house re-floors a short drive from our St. Petersburg crew. We pull the old floor, prep the slab, and install LVP, hardwood or tile with one team from demolition to baseboards.',
    }),
    // Optimised Seminole location page — St. Petersburg location on the shared
    // StPeteInner `area.seo` flow, following the completed St. Pete Beach
    // template. Authored Why Choose Us + Our Process; feature/prose copy and
    // FAQs are the supplied content verbatim. Supplied H1 ("Expert Flooring
    // Company in Seminole") matches the makeArea heroTitle default.
    metaTitle: 'Flooring Company in Seminole - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Seminole from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Seminole',
        intro:
          'Seminole is mid-Pinellas — ranch homes, additions, and full-house re-floors a short drive from our St. Petersburg crew. As a Flooring Company in Seminole, we pull the old floor, prep the slab, and install with one team from demolition to baseboards, keeping the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Old-floor removal and slab prep handled in-house',
          'Subfloor moisture testing and levelling before installation',
          'Even seams and clean transitions across additions and re-floors',
          'One St. Petersburg team from demolition through baseboards',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Lake Seminole, Seminole City Park, and Park Boulevard homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Seminole Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Seminole home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Seminole home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Removal, Prep & Installation',
            body: 'We pull the old floor, prep and level the slab, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Seminole Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring for Seminole Homes', d: 'Choose flooring that works well in kitchens used for cooking, dining, and family gatherings. We focus on precise installation around cabinets, appliances, and adjoining areas to create a clean, coordinated finish.' },
            { h: 'Comfortable Flooring for Bedrooms', d: 'Refresh bedrooms with flooring that supports a welcoming, comfortable atmosphere. We carefully handle measurements, layouts, and transitions to help deliver a smooth installation that complements the room’s existing design.' },
            { h: 'Durable Flooring for Living Spaces', d: 'Update living rooms and family areas with flooring suited to regular household activity. Homes near Lake Seminole can benefit from thoughtfully planned installation focused on proper fit, consistent details, and dependable everyday performance.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Seminole',
          body: [
            'An experienced Flooring Company in Seminole helps homeowners create durable, attractive interiors suited to everyday Florida living. We provide careful installation with attention to surface preparation, accurate measurements, room layouts, transitions, and finishing details. Homes near Lake Seminole and Seminole City Park can benefit from flooring selected around household traffic, comfort, and maintenance needs.',
            'Whether you are replacing worn flooring, remodeling a kitchen, or refreshing a home near Park Boulevard, we provide dependable installation solutions. Our work is planned around each room’s purpose, helping create a cohesive finished floor that complements your Seminole home while supporting the demands of daily family life.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Seminole',
          body: [
            'Our flooring contractors provide detail-focused installation for Seminole homes, from established properties near Seminole City Park to residences around Lake Seminole. We consider existing flooring, surface conditions, room dimensions, and intended use before installation. Careful preparation and layout planning help create a level, consistent finished floor with clean transitions between spaces.',
            'Homeowners may need new flooring after years of family traffic, during a kitchen renovation, or when preparing a property for sale. As a Flooring Company in Seminole, we provide practical installation solutions tailored to each project, with workmanship focused on accurate fitting, quality details, and a polished final appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Seminole',
          body: [
            'Seminole residents can count on All About Flooring St. Petersburg for professional flooring installation and replacement services. We help homeowners improve their interiors with practical flooring options selected for appearance, durability, maintenance needs, and the specific requirements of each room or renovation project.',
            'We serve Seminole and nearby communities including Largo, Pinellas Park, and Madeira Beach. Our service area includes neighborhoods near Park Boulevard, Seminole Boulevard, and 113th Street, with properties close to Lake Seminole Park, Seminole City Park, and local shopping areas.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring considerations are important for busy Seminole family homes?',
          a: 'Flooring should suit the household’s traffic, maintenance preferences, room use, and existing surfaces. We can help Seminole homeowners compare practical options for kitchens, living areas, bedrooms, and other frequently used spaces.',
        },
        {
          q: 'Can you install flooring in homes near Lake Seminole?',
          a: 'Yes. We provide residential flooring installation throughout Seminole, including properties near Lake Seminole. Each project is planned around the home’s layout, existing conditions, selected flooring, and intended use.',
        },
        {
          q: 'Do you replace flooring during kitchen renovations in Seminole?',
          a: 'Yes. We can install replacement flooring as part of a kitchen renovation. Proper measurements, preparation, and transitions are especially important where new flooring meets cabinets, appliances, or adjoining rooms.',
        },
        {
          q: 'Can you update flooring in a Seminole home before selling?',
          a: 'Yes. Replacing visibly worn flooring can give interior spaces a cleaner, more updated appearance before listing. We can discuss practical options based on the condition of the existing floor and the desired finished look.',
        },
        {
          q: 'Do you serve homes around Park Boulevard and Seminole City Park?',
          a: 'Yes. Our flooring services are available throughout Seminole, including residential areas near Park Boulevard and Seminole City Park. Contact All About Flooring St. Petersburg to discuss your flooring project and installation needs.',
        },
      ],
    },
  },
  gulfport: {
    ...makeArea({
      key: 'gulfport',
      city: 'Gulfport',
      slug: 'gulfport-fl',
      photo: 3,
      blurb:
        'Gulfport bungalows and waterfront cottages sit minutes from our St. Petersburg listing. We install luxury vinyl, tile and hardwood that look right in an older house and still live through a Florida summer.',
    }),
    // Optimised Gulfport location page — St. Petersburg location on the shared
    // StPeteInner `area.seo` flow, following the completed St. Pete Beach
    // template. Authored Why Choose Us + Our Process; feature/prose copy and
    // FAQs are the supplied content verbatim. Supplied H1 here is "Flooring
    // Company in Gulfport" (no "Expert" prefix), so heroTitle is overridden.
    heroTitle: 'Flooring Company in Gulfport',
    metaTitle: 'Flooring Company in Gulfport - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Gulfport from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Gulfport',
        intro:
          'Gulfport bungalows and waterfront cottages sit minutes from our St. Petersburg listing. As a Flooring Company in Gulfport, we install flooring that looks right in an older house and still lives through a Florida summer — prepping and levelling properly and keeping the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Flooring matched to Gulfport bungalows and older homes',
          'Waterproof-ready options for waterfront and coastal properties',
          'Subfloor moisture testing and levelling before installation',
          'Even seams and clean transitions across connected rooms',
          'One St. Petersburg crew from measure to walkthrough',
          'Local knowledge of Gulfport Beach, Pasadena, and the arts district',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Gulfport Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Gulfport home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Gulfport home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring that suits an older or waterfront home and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Surface Prep & Installation',
            body: 'We moisture-test and level the surface, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Gulfport Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring Designed for Daily Use', d: 'Gulfport kitchens need flooring that can handle cooking, spills, foot traffic, and regular cleaning. We help homeowners select practical surfaces that complement cabinets, counters, and the overall character of the home while providing a dependable foundation for everyday use.' },
            { h: 'Comfortable Flooring for Bedrooms', d: 'New bedroom flooring can change the feel of a space without requiring a complete renovation. We install flooring with attention to smooth transitions, clean edges, and consistent placement, creating a comfortable finish that works with Gulfport homes ranging from established properties to updated interiors.' },
            { h: 'Durable Living Room Flooring', d: 'Living rooms often experience the most activity in a home, especially when entertaining guests or accommodating pets and family members. We provide flooring solutions that balance appearance with durability, helping homeowners create an attractive space that is ready for everyday Gulfport living.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Gulfport',
          body: [
            'Choosing the right flooring can make a Gulfport home more comfortable, practical, and inviting. As a trusted Flooring Company in Gulfport, All About Flooring St. Petersburg provides installation and replacement solutions suited to everyday living. We help homeowners achieve clean, durable results with careful preparation and precise installation.',
            'Whether you are updating a beachside property near Gulfport Beach, refreshing a home around Pasadena, or replacing worn flooring before listing a property near Gulfport Marina, we focus on details that matter. Our team helps manage projects for remodeled kitchens, busy living areas, and bedrooms needing a fresh, finished appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Gulfport',
          body: [
            'A successful flooring project starts with accurate preparation and a clear understanding of the existing surface. As an experienced Flooring Company in Gulfport, we inspect the installation area, address preparation needs, and work carefully around features that can affect the finished result.',
            'From homes near Gulfport Beach to properties around Pasadena and the Gulfport Marina area, homeowners may need flooring after remodeling, before selling, or when older surfaces have become worn. We provide dependable installation focused on proper alignment, secure placement, and a polished final appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Gulfport',
          body: [
            'Homeowners in Gulfport can turn to All About Flooring St. Petersburg for dependable flooring services supporting renovations, replacements, and interior improvements. Our team provides professional installation while helping customers choose flooring that complements their property and delivers practical performance for everyday living.',
            'We serve Gulfport and surrounding communities including St. Pete Beach, South Pasadena, and St. Petersburg. Our service area includes neighborhoods near Gulfport Boulevard and Beach Boulevard, with properties close to Gulfport Beach, Clam Bayou Nature Preserve, and the waterfront arts district.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for Gulfport homes near the water?',
          a: 'We can help compare flooring options based on moisture exposure, household traffic, maintenance needs, and the specific room. This is especially useful for Gulfport properties where coastal conditions may influence flooring decisions.',
        },
        {
          q: 'Can you replace flooring in an older Gulfport home without remodeling the entire room?',
          a: 'Yes. Flooring replacement can refresh a room without changing cabinets, walls, or other major features. We can evaluate the existing space and recommend an installation approach that works with its current layout.',
        },
        {
          q: 'Do you install flooring in homes around Pasadena and Gulfport Beach?',
          a: 'Yes. Our flooring services are available to homeowners throughout Gulfport, including properties around Pasadena and the Gulfport Beach area.',
        },
        {
          q: 'Can you install new flooring when I am preparing a Gulfport property for sale?',
          a: "Yes. Replacing visibly worn or outdated flooring can help create a cleaner, more updated presentation for prospective buyers. We can help you choose a practical option suited to the property's use and overall design.",
        },
        {
          q: 'Can you help choose flooring for a Gulfport home that gets frequent guests?',
          a: 'Absolutely. We can discuss flooring based on expected foot traffic, room function, cleaning requirements, and the appearance you want. This helps narrow the choices to options that fit an active household or frequently used property.',
        },
      ],
    },
  },
  largo: {
    ...makeArea({
      key: 'largo',
      city: 'Largo',
      slug: 'largo-fl',
      photo: 4,
      blurb:
        'Largo is one of the larger cities we cover from St. Petersburg - family homes, open plans and plenty of LVP. Same measure, same written price, same crew. We do not treat it as a distant add-on.',
    }),
    // Optimised Largo (St. Petersburg listing) location page — St. Petersburg
    // location on the shared StPeteInner `area.seo` flow, following the
    // completed St. Pete Beach template. Authored Why Choose Us + Our Process;
    // feature/prose copy and FAQs are the supplied content verbatim. Supplied
    // H1 is "Flooring Company in Largo" (no "Expert"), so heroTitle overridden.
    heroTitle: 'Flooring Company in Largo',
    metaTitle: 'Largo Flooring Company | St. Petersburg Area',
    metaDescription:
      'Flooring installation, replacement & upgrades in Largo from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Largo',
        intro:
          'Largo is one of the larger cities we cover from St. Petersburg — family homes, open plans, and plenty of LVP. As a Flooring Company in Largo, you get the same measure, the same written price, and the same crew; we prep and level the subfloor properly and never treat Largo as a distant add-on.',
        points: [
          'The same measure, written price, and crew we bring to every job',
          'Subfloor moisture testing and levelling before installation',
          'Whole-house luxury vinyl, hardwood, and tile handled in one pass',
          'Even seams and clean transitions across open-plan rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Largo Central Park, Ridgecrest, and East Bay Drive homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Largo Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Largo home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Largo home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Largo Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Busy Largo Homes', d: 'Kitchen floors need to handle spills, cooking activity, frequent cleaning, and regular foot traffic. We help Largo homeowners select practical flooring that complements their cabinetry and layout while providing a dependable surface for everyday meals, gatherings, and household routines.' },
            { h: 'Bedroom Flooring for Comfortable Spaces', d: 'Refreshing bedroom flooring can make an older Largo home feel noticeably cleaner and more inviting. We pay attention to smooth transitions, precise cuts, and consistent installation so the finished surface works naturally with existing doors, walls, furniture, and adjoining rooms.' },
            { h: 'Living Room Flooring for Everyday Durability', d: 'Living areas often become gathering spaces for families, guests, and pets. We provide flooring solutions that balance appearance, comfort, and durability, helping homeowners create attractive spaces that can handle regular use without sacrificing a polished residential finish.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Largo',
          body: [
            'A quality floor can improve how a Largo home looks, feels, and functions. As a trusted Flooring Company in Largo, All About Flooring St. Petersburg provides carefully planned installation and replacement services for kitchens, bedrooms, living areas, and other residential spaces. We focus on proper preparation, accurate measurements, clean installation, and durable results.',
            'Whether you are updating a home near Largo Central Park, refreshing a property in Ridgecrest, or replacing worn flooring around East Bay Drive, we tailor each project to the space. Our team helps homeowners address outdated surfaces, remodeling needs, and everyday wear while creating a finished look that complements the home.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Largo',
          body: [
            "Effective flooring installation begins before the first plank or tile is placed. As an experienced Flooring Company in Largo, we assess the existing surface, identify preparation requirements, and plan the installation around the room's layout, transitions, and other details that influence the final result.",
            'We serve homeowners throughout Largo, including areas near Largo Central Park, Ridgecrest, and Indian Rocks Road. Whether flooring is being replaced after years of wear, installed during a home renovation, or updated before putting a property on the market, we focus on dependable workmanship and a clean, finished appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Largo',
          body: [
            'All About Flooring St. Petersburg offers Largo homeowners professional flooring installation, replacement, and remodeling services. Whether upgrading a single room or renovating multiple areas, we provide carefully planned flooring solutions designed to improve comfort, appearance, functionality, and long-term value.',
            'We serve Largo and nearby communities including Seminole, Pinellas Park, and Clearwater. Our service area covers neighborhoods around East Bay Drive, Ulmerton Road, and U.S. Highway 19, including properties near Largo Central Park, Largo Mall, and local residential communities.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring is a good choice for homes in Largo that experience heavy daily traffic?',
          a: 'We can compare flooring options based on household activity, room function, cleaning needs, and expected wear. This helps Largo homeowners choose a surface that fits how their home is actually used.',
        },
        {
          q: 'Can you replace outdated flooring in an older Largo home without changing the rest of the room?',
          a: 'Yes. Flooring replacement can give a room a refreshed appearance without requiring a full renovation. We can work with the existing layout and surrounding finishes when planning the installation.',
        },
        {
          q: 'Do you provide flooring services throughout Largo neighborhoods?',
          a: 'Yes. We serve residential properties throughout Largo, including homes near Largo Central Park, Ridgecrest, Indian Rocks Road, and surrounding areas.',
        },
        {
          q: 'Is new flooring useful when preparing a Largo home for sale?',
          a: "Replacing visibly worn or dated flooring can help create a cleaner, more updated presentation. We can help you select a practical flooring option that complements the property's existing interior.",
        },
        {
          q: 'Can you help choose flooring for a Largo kitchen that is used frequently?',
          a: 'Yes. We consider factors such as foot traffic, spills, cleaning routines, room layout, and the desired appearance when helping homeowners narrow down suitable kitchen flooring options.',
        },
      ],
    },
  },
  'pinellas-park': {
    ...makeArea({
      key: 'pinellas-park',
      city: 'Pinellas Park',
      slug: 'pinellas-park-fl',
      photo: 5,
      blurb:
        'Pinellas Park is central Pinellas, a short hop north of St. Petersburg. Ranch homes and additions get luxury vinyl, hardwood and tile from the same St. Petersburg crew that priced the rooms.',
    }),
    // Optimised Pinellas Park (St. Petersburg listing) location page — on the
    // shared StPeteInner `area.seo` flow, following the completed St. Pete
    // Beach template. Authored Why Choose Us + Our Process; feature/prose copy
    // and FAQs are the supplied content verbatim. Supplied H1 is "Flooring
    // Company in Pinellas Park" (no "Expert"), so heroTitle is overridden.
    heroTitle: 'Flooring Company in Pinellas Park',
    metaTitle: 'Pinellas Park Flooring | St. Petersburg Area',
    metaDescription:
      'Flooring installation, replacement & upgrades in Pinellas Park from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Pinellas Park',
        intro:
          'Pinellas Park is central Pinellas, a short hop north of St. Petersburg. As a Flooring Company in Pinellas Park, ranch homes and additions get luxury vinyl, hardwood, and tile from the same St. Petersburg crew that priced the rooms — prepped and levelled properly, with the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'The same St. Petersburg crew that priced the rooms installs them',
          'Subfloor moisture testing and levelling before installation',
          'Experience across ranch homes, additions, and re-floors',
          'Even seams and clean transitions across connected rooms',
          'A fixed, itemised written quote before any work begins',
          'Local knowledge of Freedom Lake Park, Mainlands, and Park Boulevard homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Pinellas Park Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Pinellas Park home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Pinellas Park home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Subfloor Prep & Installation',
            body: 'We moisture-test and level the subfloor, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Pinellas Park Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Practical Kitchen Flooring for Pinellas Park Homes', d: "Kitchen flooring needs to withstand spills, frequent cleaning, cooking activity, and steady foot traffic. We help homeowners choose flooring that fits the room's layout and complements existing cabinets and finishes while providing a practical surface for everyday household routines." },
            { h: 'Comfortable Bedroom Flooring for Updated Interiors', d: 'New bedroom flooring can give an older or recently renovated Pinellas Park home a cleaner, more comfortable feel. We focus on precise cuts, smooth transitions, and consistent installation so the finished floor works naturally with doors, walls, furniture, and nearby rooms.' },
            { h: 'Durable Living Room Flooring for Daily Use', d: 'Living rooms often experience frequent activity from family members, guests, and pets. We install flooring solutions that balance appearance and durability, helping Pinellas Park homeowners create welcoming spaces that remain practical through regular use and changing household needs.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Pinellas Park',
          body: [
            'A well-installed floor can refresh a Pinellas Park home while improving comfort and everyday functionality. As a trusted Flooring Company in Pinellas Park, All About Flooring St. Petersburg provides residential flooring installation and replacement with careful preparation, accurate fitting, and attention to finishing details.',
            'Whether you are updating a home near Freedom Lake Park, replacing worn flooring around Park Boulevard, or renovating a property near Mainlands of Tamarac, we adapt the installation to the space. Our team helps homeowners handle dated surfaces, remodeling projects, and high-traffic areas with flooring solutions designed for lasting residential use.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Pinellas Park',
          body: [
            'Reliable flooring installation starts with preparing the surface correctly. As an experienced Flooring Company in Pinellas Park, we assess the existing floor, identify preparation needs, and plan around room dimensions, transitions, doorways, and other details that can affect the finished installation.',
            'We serve homeowners throughout Pinellas Park, including properties near Freedom Lake Park, Park Boulevard, and Mainlands of Tamarac. Whether you are replacing flooring after years of wear, updating rooms during a renovation, or improving a property before selling, we focus on careful workmanship and a clean, finished result.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Pinellas Park',
          body: [
            'Pinellas Park homeowners can rely on All About Flooring St. Petersburg for quality flooring installation and replacement services. We work with customers to select suitable flooring for their homes and deliver professional installation focused on attractive finishes, dependable performance, and practical everyday maintenance.',
            'We serve Pinellas Park and nearby communities including Seminole, Largo, and St. Petersburg. Our service area includes neighborhoods around Park Boulevard, 66th Street North, and U.S. Highway 19, with properties near England Brothers Park, Helen Howarth Community Park, and Park Place.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring is suitable for busy Pinellas Park households?',
          a: 'We can compare flooring options according to foot traffic, room function, cleaning routines, pets, and household activity. This helps homeowners select a surface that fits the way their Pinellas Park home is actually used.',
        },
        {
          q: 'Can you replace flooring in an older Pinellas Park home without a full renovation?',
          a: "Yes. Replacing the flooring alone can significantly refresh a room while allowing existing walls, cabinets, and other features to remain. We can plan the installation around the home's current layout and finishes.",
        },
        {
          q: 'Do you install flooring near Freedom Lake Park and Park Boulevard?',
          a: 'Yes. We provide residential flooring services throughout Pinellas Park, including homes and properties located near Freedom Lake Park, Park Boulevard, and surrounding residential areas.',
        },
        {
          q: 'Can new flooring help update a Pinellas Park property before selling?',
          a: "Yes. Replacing visibly worn or dated flooring can give interior spaces a cleaner, more current appearance. We can help you consider practical flooring choices that complement the property's existing design.",
        },
        {
          q: 'Can you help choose flooring for a frequently used Pinellas Park kitchen?',
          a: "Yes. We consider the kitchen's traffic level, spill exposure, cleaning habits, layout, and desired appearance when helping homeowners determine which flooring options are appropriate for the space.",
        },
      ],
    },
  },
  'madeira-beach': {
    ...makeArea({
      key: 'madeira-beach',
      city: 'Madeira Beach',
      slug: 'madeira-beach-fl',
      photo: 0,
      blurb:
        'Madeira Beach condos and cottages see the same sand and salt as the rest of the barrier islands. Waterproof LVP and porcelain are our first recommendations; we sequence the job around building access and elevator windows.',
    }),
    // Optimised Madeira Beach location page — St. Petersburg location on the
    // shared StPeteInner `area.seo` flow, following the completed St. Pete
    // Beach template. Authored Why Choose Us + Our Process; feature/prose copy
    // and FAQs are the supplied content verbatim. Supplied H1 is "Flooring
    // Company in Madeira Beach" (no "Expert"), so heroTitle is overridden.
    heroTitle: 'Flooring Company in Madeira Beach',
    metaTitle: 'Flooring Company in Madeira Beach - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in Madeira Beach from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Madeira Beach',
        intro:
          'Madeira Beach condos and cottages see the same sand and salt as the rest of the barrier islands. As a Flooring Company in Madeira Beach, waterproof LVP and porcelain are our first recommendations; we sequence the job around building access and elevator windows, prep and level properly, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-first material advice for sand and salt air',
          'Subfloor moisture testing and levelling before installation',
          'Work scheduled around condo access and elevator windows',
          'Even seams and clean transitions across connected rooms',
          'One St. Petersburg crew from measure to walkthrough',
          'Local knowledge of John’s Pass, Gulf Boulevard, and beach-area homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Madeira Beach Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Madeira Beach home or vacation property.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Madeira Beach home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a barrier-island climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Surface Prep & Installation',
            body: 'We moisture-test and level the surface, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Madeira Beach Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Coastal Homes', d: "Madeira Beach kitchens often see frequent cooking, entertaining, spills, and cleaning. We help homeowners select flooring that suits the room's activity while complementing cabinets, countertops, and existing finishes. Careful installation creates a clean, practical surface for everyday coastal living." },
            { h: 'Bedroom Flooring for Comfortable Retreats', d: 'A bedroom flooring update can give a Madeira Beach home a noticeably fresher appearance. We focus on accurate measurements, clean edges, and smooth transitions so the finished floor works naturally with doors, furniture, adjoining rooms, and the overall interior design.' },
            { h: 'Living Room Flooring for Active Spaces', d: 'Living rooms in beach-area homes may accommodate family gatherings, visiting guests, and sandy-foot traffic. We provide flooring solutions that balance appearance, comfort, and everyday durability, helping homeowners create inviting spaces that remain practical through regular use.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Madeira Beach',
          body: [
            'A well-installed floor can make a Madeira Beach home feel cleaner, more comfortable, and better suited to everyday coastal living. As a trusted Flooring Company in Madeira Beach, All About Flooring St. Petersburg provides residential installation and replacement with careful preparation, accurate fitting, and attention to finishing details.',
            'Whether you are refreshing a beach property near John’s Pass, replacing worn flooring along Gulf Boulevard, or updating a home near Madeira Beach Recreation Center, we tailor the installation to your space. Our team helps homeowners address remodeling projects, aging floors, and busy living areas with practical flooring solutions built for everyday use.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Madeira Beach',
          body: [
            'Quality flooring installation requires more than placing new material over an existing surface. As an experienced Flooring Company in Madeira Beach, we evaluate the area, identify preparation needs, and account for room dimensions, transitions, doorways, and other details that influence the final result.',
            'We serve homeowners throughout Madeira Beach, including properties near John’s Pass, Gulf Boulevard, and Madeira Beach Recreation Center. Whether you are replacing worn flooring in a vacation property, remodeling a permanent residence, or preparing a home for sale, we focus on precise workmanship and a polished finished appearance.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Madeira Beach',
          body: [
            'All About Flooring St. Petersburg helps Madeira Beach homeowners improve their properties with professional flooring installation, replacement, and remodeling services. We offer flooring solutions suited to different interior styles and practical needs, with careful workmanship designed to create attractive and durable finished spaces.',
            'We serve Madeira Beach and surrounding areas including Treasure Island, Seminole, and Redington Beach. Our service area follows communities near Gulf Boulevard and Tom Stuart Causeway, including properties close to Madeira Beach Access, John’s Pass Village, and the area’s coastal neighborhoods.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for a Madeira Beach vacation home?',
          a: "We can compare options based on guest traffic, cleaning requirements, room use, and the home's interior conditions. This helps vacation-property owners choose flooring that fits frequent use while maintaining an attractive appearance.",
        },
        {
          q: 'Can you replace flooring in a Madeira Beach beachside property?',
          a: "Yes. We provide residential flooring installation and replacement throughout Madeira Beach. We can assess the existing surface and plan the installation around the property's layout and specific flooring requirements.",
        },
        {
          q: 'Do you provide flooring services near John’s Pass and Gulf Boulevard?',
          a: 'Yes. Our flooring services are available throughout Madeira Beach, including homes and properties near John’s Pass, Gulf Boulevard, and surrounding residential areas.',
        },
        {
          q: 'Is replacing flooring worthwhile before selling a Madeira Beach home?',
          a: "It can help improve the property's interior presentation when existing floors look worn or dated. We can help you consider flooring options that provide a refreshed appearance while fitting the home's existing design.",
        },
        {
          q: 'Can you help choose flooring for a Madeira Beach home with frequent guests?',
          a: 'Yes. We consider expected foot traffic, cleaning needs, room function, pets, and the desired style when helping homeowners select suitable flooring for frequently used spaces.',
        },
      ],
    },
  },
  'south-pasadena': {
    ...makeArea({
      key: 'south-pasadena',
      city: 'South Pasadena',
      slug: 'south-pasadena-fl',
      photo: 1,
      blurb:
        'South Pasadena sits between St. Petersburg and the beaches - condos, villas and single-family homes that need a floor that holds up to Gulf humidity. We moisture-test the slab and install LVP, tile or hardwood with one crew.',
    }),
    // Optimised South Pasadena location page — St. Petersburg location on the
    // shared StPeteInner `area.seo` flow, following the completed St. Pete
    // Beach template. Authored Why Choose Us + Our Process; feature/prose copy
    // and FAQs are the supplied content verbatim. Supplied H1 ("Expert
    // Flooring Company in South Pasadena") matches the makeArea heroTitle.
    metaTitle: 'Flooring Company in South Pasadena - All About Flooring',
    metaDescription:
      'Flooring installation, replacement & upgrades in South Pasadena from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in South Pasadena',
        intro:
          'South Pasadena sits between St. Petersburg and the beaches — condos, villas, and single-family homes that need a floor to hold up to Gulf humidity. As a Flooring Company in South Pasadena, we moisture-test the slab, install with one crew, and keep the plan and price clear from the first measure to the final walkthrough.',
        points: [
          'Waterproof-ready material advice for Gulf humidity',
          'Slab moisture testing and levelling before installation',
          'Experience across condos, villas, and single-family homes',
          'Even seams and clean transitions across connected rooms',
          'One St. Petersburg crew from measure to walkthrough',
          'Local knowledge of Bayway Isles, Pinellas Bayway, and Pasadena homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for South Pasadena Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your South Pasadena home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your South Pasadena home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to a Gulf-side climate and your budget, then confirm it in an itemised written price.',
          },
          {
            title: 'Slab Prep & Installation',
            body: 'We moisture-test and level the slab, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for South Pasadena Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Everyday Living', d: 'Choose practical flooring that handles cooking, dining, spills, and daily foot traffic while complementing the style of your South Pasadena kitchen. We help create a clean, cohesive foundation for busy household spaces.' },
            { h: 'Bedroom Flooring for Added Comfort', d: 'Refresh bedrooms with flooring that supports a comfortable, inviting atmosphere. We consider room layout, existing finishes, and your preferred look to create a polished surface that works naturally with the rest of your home.' },
            { h: 'Living Room Flooring for Lasting Appeal', d: 'Give living areas a fresh foundation with flooring selected for durability and appearance. Whether you are updating an older home or preparing a property near Boyd Hill Nature Preserve for a new chapter, we deliver carefully fitted results.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout South Pasadena',
          body: [
            'A flooring upgrade can make South Pasadena homes feel brighter, cleaner, and more comfortable while adding practical durability for everyday living. As a trusted Flooring Company in South Pasadena, All About Flooring St. Petersburg provides carefully planned installation and replacement services for kitchens, bedrooms, and common areas. We help homeowners choose flooring suited to their space, lifestyle, and design preferences.',
            'From homes near Gulfport Beach to properties around Pasadena Yacht & Country Club and the Pinellas Bayway, we understand the needs of local homeowners. Whether replacing worn flooring before selling or refreshing a high-traffic room, we focus on precise installation and a finished appearance built to last.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout South Pasadena',
          body: [
            'All About Flooring St. Petersburg brings practical installation experience to flooring projects throughout South Pasadena. We account for room dimensions, transitions, existing surfaces, and the demands of everyday use so your new floor has a clean, consistent finish. Homeowners in areas near Gulfport, Bayway Isles, and the Pinellas Bayway can rely on attentive workmanship from planning through installation.',
            'If aging floors are showing scratches, worn finishes, or outdated styling, we can help determine an appropriate replacement approach. From a single bedroom refresh to a broader home update, our team keeps the process organized and focused on durable, attractive results that suit your property.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – South Pasadena',
          body: [
            "Residents of South Pasadena can rely on All About Flooring St. Petersburg for dependable flooring services during home renovations, replacements, and interior upgrades. Our team provides professional installation and practical flooring recommendations designed around each property's layout, style preferences, and everyday use.",
            'We serve South Pasadena and nearby communities including Gulfport, St. Pete Beach, and Treasure Island. Our service area includes neighborhoods near Pasadena Avenue and Gulf Boulevard, with properties close to Pasadena Marina, Boca Ciega Bay, and nearby waterfront residential communities.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring works well for South Pasadena homes near the coast?',
          a: 'Flooring should be selected based on the room, moisture exposure, traffic, and maintenance preferences. We can help South Pasadena homeowners compare suitable options for their specific spaces.',
        },
        {
          q: 'Can you replace flooring in just one room of my South Pasadena home?',
          a: 'Yes. We can handle focused projects such as updating a kitchen, bedroom, or living room without requiring a whole-home flooring replacement.',
        },
        {
          q: 'Do you install flooring in homes around Gulfport and Bayway Isles?',
          a: 'Yes. We serve homeowners throughout South Pasadena and nearby communities, including areas around Gulfport and Bayway Isles.',
        },
        {
          q: 'Can you help with flooring for a home being prepared for sale in South Pasadena?',
          a: 'Yes. Replacing visibly worn or outdated flooring can help create a cleaner, more updated presentation. We can discuss practical options based on the property and project goals.',
        },
        {
          q: 'What should I consider before replacing flooring in an older South Pasadena home?',
          a: 'Existing floor conditions, room layout, transitions, moisture considerations, and the desired finished appearance should all be reviewed before installation. We can assess these factors as part of the project planning.',
        },
      ],
    },
  },
  'safety-harbor': {
    ...makeArea({
      key: 'safety-harbor',
      city: 'Safety Harbor',
      slug: 'safety-harbor-fl',
      photo: 2,
      blurb:
        'Safety Harbor is the north edge of the area we cover from St. Petersburg - downtown bungalows and waterfront houses. Same itemised price, same crew, no franchise handoff.',
    }),
    // Optimised Safety Harbor (St. Petersburg listing) location page — on the
    // shared StPeteInner `area.seo` flow, following the completed St. Pete
    // Beach template. Authored Why Choose Us + Our Process; feature/prose copy
    // and FAQs are the supplied content verbatim. Supplied H1 ("Expert
    // Flooring Company in Safety Harbor") matches the makeArea heroTitle.
    metaTitle: 'Safety Harbor Flooring | St. Petersburg Area',
    metaDescription:
      'Flooring installation, replacement & upgrades in Safety Harbor from All About Flooring St. Petersburg. Free in-home measure — call today!',
    seo: {
      whyChoose: {
        heading: 'Why Homeowners Choose Us for Flooring in Safety Harbor',
        intro:
          'Safety Harbor is the north edge of the area we cover from St. Petersburg — downtown bungalows and waterfront houses. As a Flooring Company in Safety Harbor, you get the same itemised price and the same crew with no franchise handoff; we prep and level properly and keep the plan clear from the first measure to the final walkthrough.',
        points: [
          'Flooring specified to look right in older, downtown plans',
          'Subfloor moisture testing and levelling before installation',
          'Waterproof-ready options for north-bay and waterfront homes',
          'Even seams and clean transitions across connected rooms',
          'The same crew and itemised price, no franchise handoff',
          'Local knowledge of Harbor Heights, Philippe Park, and Main Street homes',
        ],
      },
      process: {
        heading: 'Our Flooring Process for Safety Harbor Homes',
        intro:
          'A clear path from the first visit to the finished floor, planned around your Safety Harbor home.',
        steps: [
          {
            title: 'Home Consultation',
            body: 'We visit your Safety Harbor home, measure every room, and review conditions, traffic, and goals before recommending an approach.',
          },
          {
            title: 'Material Selection & Quote',
            body: 'We help you choose flooring suited to your home and budget, then confirm it in an itemised written price before work starts.',
          },
          {
            title: 'Surface Prep & Installation',
            body: 'We moisture-test and level the surface, then install with consistent spacing, clean cuts, and tidy transitions between rooms.',
          },
          {
            title: 'Final Walkthrough',
            body: 'We review alignment, edges, and finish with you and leave the home clean before the project is signed off.',
          },
        ],
      },
      sections: [
        {
          layout: 'feature',
          heading: 'Custom Flooring Solutions for Safety Harbor Kitchens, Bedrooms, and Living Spaces',
          items: [
            { h: 'Kitchen Flooring for Busy Homes', d: 'Create a durable, attractive foundation for Safety Harbor kitchens where meals, gatherings, and daily activity can put floors through constant use. We help homeowners choose practical flooring that fits their space and design.' },
            { h: 'Bedroom Flooring for Comfortable Spaces', d: 'Refresh bedrooms with flooring that creates a warm, polished atmosphere. We consider room dimensions, existing finishes, and your preferred style to deliver a cohesive installation that makes the space feel more inviting.' },
            { h: 'Living Room Flooring for Everyday Enjoyment', d: 'Update living areas with flooring designed to balance appearance and regular household traffic. Whether refreshing a longtime home or updating a property near Safety Harbor Marina, we provide careful installation for a clean, finished result.' },
          ],
        },
        {
          layout: 'prose',
          heading: 'Quality Flooring Installation Services for Homes Throughout Safety Harbor',
          body: [
            'A well-installed floor can give a Safety Harbor home a cleaner appearance, better comfort, and dependable performance for everyday living. All About Flooring St. Petersburg provides professional installation and replacement solutions for kitchens, bedrooms, living areas, and other residential spaces. As an experienced Flooring Company in Safety Harbor, we focus on careful preparation, accurate fitting, and a finished surface that complements the home.',
            'From homes near Downtown Safety Harbor to properties around Philippe Park and Bayshore Boulevard, local homeowners may need flooring updates after years of foot traffic, remodeling, or preparing a property for sale. We tailor each project to the space and its practical demands.',
          ],
        },
        {
          layout: 'prose',
          heading: 'Expert Flooring Contractors Serving Homeowners Throughout Safety Harbor',
          body: [
            "All About Flooring St. Petersburg provides detail-focused flooring installation for homeowners throughout Safety Harbor. We consider the condition of the existing surface, room transitions, measurements, and intended use before installation. Homeowners around Harbor Heights, Philippe Park, and Main Street can receive flooring solutions planned around their property's layout and everyday needs.",
            'Whether a family is replacing worn flooring after years of use or updating several rooms during a renovation, we keep the project organized from preparation through completion. Our goal is to provide attractive, properly fitted flooring that supports the way your Safety Harbor home is used while creating a noticeably refreshed interior.',
          ],
        },
        {
          layout: 'prose',
          heading: 'All About Flooring St. Petersburg – Safety Harbor',
          body: [
            'Homeowners in Safety Harbor can choose All About Flooring St. Petersburg for professional flooring installation, replacement, and remodeling services. We help customers update their interiors with flooring options selected for durability, appearance, comfort, and maintenance, backed by careful preparation and quality-focused installation.',
            'We serve Safety Harbor and surrounding communities including Clearwater, Largo, and Palm Harbor. Our service area includes neighborhoods near Main Street, McMullen-Booth Road, and Enterprise Road, with properties close to Philippe Park, downtown Safety Harbor, and the scenic Tampa Bay waterfront.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What flooring considerations are important for homes in Safety Harbor?',
          a: "We consider the room's use, moisture exposure, existing surface, traffic levels, and desired appearance when helping homeowners select an appropriate flooring solution.",
        },
        {
          q: 'Can you update flooring in an older Safety Harbor home without remodeling the entire house?',
          a: 'Yes. Flooring can be replaced room by room, making it practical to refresh areas such as a kitchen, bedroom, or living room without completing a whole-home renovation.',
        },
        {
          q: 'Do you provide flooring installation near Philippe Park and Downtown Safety Harbor?',
          a: 'Yes. We serve homeowners throughout Safety Harbor, including residential areas near Downtown Safety Harbor, Philippe Park, and surrounding neighborhoods.',
        },
        {
          q: 'Is new flooring a good option when preparing a Safety Harbor home for sale?',
          a: "Replacing visibly worn or outdated flooring can give interior spaces a cleaner, more updated appearance. We can help identify practical options based on the property's condition and goals.",
        },
        {
          q: 'Can you replace flooring after a Safety Harbor home renovation?',
          a: 'Yes. New flooring can help complete a renovation by creating a consistent finished surface that works with updated cabinets, walls, furnishings, and other interior features.',
        },
      ],
    },
  },
}

export const STPETE_NAV_AREAS = Object.values(STPETE_AREA_PAGES).map((a) => ({
  href: a.path,
  label: a.city,
}))

export const stPeteAreaHref = (city) =>
  Object.values(STPETE_AREA_PAGES).find((a) => a.city.toLowerCase() === city.toLowerCase())
    ?.path ?? null

export const STPETE_NAV = [
  { href: STPETE_BASE, label: 'Home' },
  { href: `${STPETE_BASE}/services`, label: 'Services', children: STPETE_NAV_SERVICES },
  { href: `${STPETE_BASE}/locations`, label: 'Locations', children: STPETE_NAV_AREAS },
]

export const STPETE_AREA_INTRO =
  'Our St. Petersburg crew covers the city and the Pinellas towns around it - St. Pete Beach, Treasure Island, Seminole, Gulfport, Largo, Pinellas Park, Madeira Beach, South Pasadena and Safety Harbor.'

export const STPETE_FAQS = [
  {
    q: 'What flooring services do you offer in St. Petersburg?',
    a: 'Flooring installation for luxury vinyl plank, laminate, hardwood, engineered hardwood and tile, plus wood floor sanding, refinishing and bathroom or kitchen backsplash tile. One St. Petersburg crew handles the job from measure to walkthrough.',
  },
  {
    q: 'Do you work as flooring installers for condos as well as houses?',
    a: 'Yes. A lot of St. Petersburg and beach-town work is stacked units. We work around building rules, elevator reservations and quiet hours, and we specify waterproof products where sand and sliders would punish a solid hardwood.',
  },
  {
    q: 'How long will my rooms be out of use?',
    a: 'A single room is usually one to two days. A whole floor is three to six. A full bathroom is around nine days because waterproofing and tile each have to cure. We give you dated stages before we book.',
  },
  {
    q: 'Do I need to move the furniture myself?',
    a: 'No. We move furniture, lift the old floor and take it away. We ask you to clear personal items, anything fragile and the contents of kitchen units before we start.',
  },
  {
    q: 'Can you lay new flooring over the existing floor?',
    a: 'Sometimes, and we will tell you honestly when it is a bad idea. It works over sound tile or a flat slab. It does not work over anything hollow, damp or uneven - covering a failing subfloor buys a year and then costs you the whole job twice.',
  },
  {
    q: 'What happens if the price changes once you start?',
    a: 'It should not. The written quote is fixed. If we missed something at the measure, that is our cost to carry. The only variations we ever raise are things you ask us to add, and those are priced and agreed in writing before we do them.',
  },
  {
    q: 'Are you a licensed flooring company and flooring contractor?',
    a: 'Yes. All About Flooring is a licensed and insured flooring company serving St. Petersburg and nearby Pinellas cities. We are happy to send insurance certificates before you commit to anything.',
  },
  {
    q: 'Which areas do you cover from St. Petersburg?',
    a: 'St. Petersburg itself, plus St. Pete Beach, Treasure Island, Seminole, Gulfport, Largo, Pinellas Park, Madeira Beach, South Pasadena and Safety Harbor. If you are just outside, call (727) 761-2688 and ask - we often can.',
  },
]

export const STPETE_ABOUT = {
  watermark: 'About us',
  eyebrow: 'Who lays your floor',
  headline: 'St. Petersburg floors,',
  headlineAccent: 'installed locally',
  tabs: [
    {
      key: 'history',
      label: 'History',
      img: '/img/about/history-tub.png',
      alt: 'Freestanding soaking tub in front of a circular mosaic feature wall and plantation shutters',
      body: [
        'All About Flooring St. Petersburg is the Pinellas crew of a family-owned flooring company that has been installing floors across Tampa Bay for more than 15 years. This listing is the St. Petersburg shop - a local number, a local measure, and the same standards we built the business on.',
        'We exist for homeowners who want a flooring company, not a showroom that books a third-party installer. The people who walk your St. Petersburg rooms are the people who cut, set, and walk it with you at the end.',
      ],
    },
    {
      key: 'approach',
      label: 'Our commitment',
      img: '/img/about/how-we-work.png',
      alt: 'Kitchen with a navy subway-tile backsplash, white Shaker cabinets, marble counters and gold hardware',
      body: [
        'Flooring installation, refinishing, and tile for showers and backsplashes - specified for Gulf humidity, sand, and the concrete slabs under most Pinellas homes. We moisture-test, write an itemised price, and stay on the job until the snag list is closed. No franchise handoff, no rotating sub.',
      ],
    },
    {
      key: 'owner',
      label: 'The owner',
      heading: 'Meet the Owner: Amanda Neve',
      img: '/img/about/amanda-neve.png?v=2',
      alt: 'Amanda Neve, owner of All About Flooring, in a cream blazer and jeans',
      body: [
        'Hi, I’m Amanda Neve, the face and heart behind our work. Interior design led me into flipping homes, then into the construction side of the trade - the part that still lights me up.',
        'From St. Petersburg houses to beach-town condos, I care that the process is clear, the price is written, and the floor is one you can live on, not just photograph. Thank you for trusting this crew with your rooms.',
      ],
    },
  ],
  points: [
    'Licensed and fully insured in Florida',
    'Free in-home measure in St. Petersburg, no obligation',
    'Itemised written price within 48 hours',
    'One crew from demolition to final detail',
  ],
}
