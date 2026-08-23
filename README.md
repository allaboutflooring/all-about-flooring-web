# All About Flooring — website

Vite + React, prerendered to static HTML. GitHub → Netlify → domain on Hostinger.

Flooring installation, kitchen and bathroom renovation. Two Google Business
Profile listings, one codebase.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/  (real HTML per route + sitemap + 404.html)
npm run preview  # serve dist/ locally, exactly as Netlify will
```

Requires Node 20+.

---

## Why prerendered and not a normal Vite SPA

A default Vite SPA ships one `index.html` and paints the page with JavaScript.
For a business whose traffic comes from local search, that trades away the thing
being protected. `vite-react-ssg` renders each route to its own HTML file at
build time, so every URL returns finished markup with its own `<title>`,
canonical, and `LocalBusiness` schema already in the source.

Verify any time with `npm run build` and reading `dist/`:

```
dist/index.html                    ← homepage, main listing
dist/second-location/index.html    ← second listing landing page
dist/404.html
dist/sitemap.xml
```

`npm run build:spa` exists as an escape hatch. Do not deploy it.

---

## Where things live

```
src/
  data/
    locations.js   ← NAP for BOTH Google listings. Single source of truth.
    site.js        ← brand, tagline, origin (set before launch)
    content.js     ← services, process, gallery, reviews, trust strip
    materials.js   ← flooring samples driving the hero
  routes.jsx       ← SLUG REGISTRY. Read this before migrating any page.
  layouts/
    MainLayout.jsx      ← shell for the primary listing
    LocationLayout.jsx  ← shell for the second listing
  components/      ← shared between both layouts
  lib/paintFloor.js     ← generates the floor patterns
  styles/tokens.css     ← palette + type scale
public/
  _redirects       ← ONLY genuinely retired URLs (see below)
scripts/postbuild.mjs   ← sitemap.xml, robots.txt origin, 404.html
```

---

## The two listings

One component library, two shells. `MainLayout` and `LocationLayout` differ only
in header treatment, footer, map embed and which NAP record they read. Everything
between them — services, process, gallery, reviews, quote form — is the same
components with different props.

Both read from `src/data/locations.js`. Nothing is hard-coded, so the two profiles
cannot drift out of sync with what Google has.

**Before launch, in `src/data/locations.js`:**

1. Copy each field **exactly** as it appears in the GBP dashboard. `Suite` vs
   `Ste`, punctuation, capitalisation — citation matching is literal.
2. Paste each listing's `mapEmbed` (Google Maps → Share → Embed a map → the
   `src` value only).
3. Fill `geo.lat` / `geo.lng` per location.
4. Set `gbpProfileUrl` and `gbpReviewUrl`.
5. **Keep `serviceAreas` distinct between the two locations.** Overlapping lists
   make the two pages compete for the same queries, and Google picks one.

The quote form tags every submission with `location: main | second`, so the
Netlify Forms dashboard shows which listing is actually earning work.

---

## Migrating the existing site without losing rankings

The rule, and it is the whole point of `src/routes.jsx`:

> **If an old URL has an equivalent new page, keep the slug. Only redirect URLs
> that are genuinely being retired.**

A 301 works, but it leaks a little ranking signal on every hop and adds a
round-trip. Keeping the URL keeps its history intact.

**Process:**

1. Export the current URL list — Search Console → Indexing → Pages → Export, or
   a Screaming Frog crawl. Search Console is better because it also shows which
   URLs earn impressions.
2. For each URL worth keeping, add a route in `src/routes.jsx` at **the same
   path**. It gets prerendered to that exact filename.
3. Only what is left — merged, obsolete, `.html` or `.php` extensions being
   dropped — goes in `public/_redirects` as a 301.
4. Pick one trailing-slash convention and keep it. `dirStyle: 'nested'` in
   `vite.config.js` emits `/path/index.html`, so both forms resolve; canonicals
   in `Seo.jsx` must match whichever you choose.
5. After launch: resubmit the sitemap, and watch Search Console → Pages for two
   to three weeks. A rise in "Not found (404)" means a slug was missed.

Keep the old site reachable until DNS has fully propagated, so there is no
window where Google crawls nothing.

---

## Deploying

### GitHub

```bash
git init
git add -A
git commit -m "Initial build"
git branch -M main
git remote add origin git@github.com:<user>/all-about-flooring.git
git push -u origin main
```

### Netlify

Add new site → Import from GitHub → pick the repo. `netlify.toml` already sets:

- build command `npm run build`
- publish directory `dist`
- Node 20
- long cache on hashed assets, no cache on HTML

Deploy previews run on every pull request, so design changes can be reviewed on
a real URL before they reach the live domain.

Enable **Forms** in the site settings and add a notification email, or quote
requests will collect in the dashboard with nobody watching.

### Hostinger DNS

Keep the domain registered at Hostinger and point it at Netlify. In hPanel →
Domains → DNS Zone:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | `@`  | `75.2.60.5`              |
| CNAME | `www`| `<site>.netlify.app`     |

Then Netlify → Domain management → add the custom domain, and let it issue the
Let's Encrypt certificate. Confirm the current values against Netlify's docs
when you do this — their apex IP has changed before.

**Pick one canonical host — apex or `www` — and make three things agree:** the
redirect in `_redirects`, `SITE.origin` in `src/data/site.js`, and the website
field on both Google Business Profiles. A mismatch there splits your signals.

---

## Before launch

- [ ] `SITE.origin` set to the real domain
- [ ] Both NAP records filled from GBP, verbatim
- [ ] Both `mapEmbed` values pasted; both `geo` coordinates set
- [ ] `serviceAreas` distinct between locations
- [ ] Real project photography in `content.js` (`img` overrides the generated texture)
- [ ] Placeholder reviews replaced with the live GBP feed
- [ ] Every indexed URL either routed or redirected
- [ ] `<BuildNotes />` removed from both layouts
- [ ] Rich Results Test run on both pages
- [ ] Sitemap submitted in Search Console

---

## Design notes

Palette is jobsite rather than showroom: graphite structure, primed-wall
surfaces, oak and walnut for the material itself, chalk-line blue as the only
interactive colour. Archivo set wide for headlines, Public Sans for reading,
JetBrains Mono for anything that is a measurement — including phone numbers and
addresses, which reinforces NAP as data.

Section labels are ruler ticks. The install process is the only numbered
sequence on the site, because it is the only content where order carries
information.

**Signature:** the hero renders an actual floor in perspective, and the swatch
rail swaps material while the spec readout follows. It is the showroom moment —
how people genuinely choose flooring — and it gives visitors a reason to stay.
Patterns are generated in `src/lib/paintFloor.js` with a seeded PRNG, so a given
material always lays out identically. Add materials in `src/data/materials.js`.

The **Build notes** button, bottom right, outlines every block that must not ship
as a placeholder. Delete `BuildNotes` before launch.

---

## Header / navigation

Modelled on the supplied reference: one hairline white bar, no black
announcement strip above it, small letterspaced nav, and an underlined arrow
link instead of a boxed button. A thin clay rule sits at the very top edge.

**Carets only appear where a dropdown genuinely exists.** In
`src/layouts/MainLayout.jsx`, a nav item opts into a dropdown by declaring a
`group`:

```js
{ href: '#services', label: 'Services', group: 'services' },  // caret + panel
{ href: '#work',     label: 'Our work' },                     // plain link
```

The panels themselves are defined in `GROUPS` inside
`src/components/Header.jsx`, and their contents are generated from
`src/data/content.js` and `src/data/materials.js` — add a service or a material
and it appears in the menu automatically.

The reference also carries a search field and a "PRO" trade badge. Both are
omitted: a search box on a nine-section marketing site returns nothing useful,
and a non-functional control costs more trust than it earns. Say the word if
you want either, and a trade-portal badge is easy to add once there is
something behind it.

Dropdowns open on hover with a short close delay, on click for touch, and close
on Escape or an outside click. On mobile they collapse into accordions.

---

## Hero video

Source footage was a 12s HEVC `.MOV` with a CapCut outro and a music bed.
Processed for web as:

| File | Size | Use |
|------|------|-----|
| `public/video/hero-1080.webm` | 0.82 MB | VP9, preferred where supported |
| `public/video/hero-1080.mp4`  | 1.72 MB | H.264, universal fallback |
| `public/video/hero-720.mp4`   | 0.64 MB | phones (≤900px) |
| `public/img/hero-poster.jpg`  | 60 KB   | poster, preloaded |

Three things were changed and are worth knowing before you re-cut it:

1. **HEVC → H.264/VP9.** HEVC plays in Safari and essentially nowhere else.
2. **Trimmed at 9.6s** to drop the CapCut outro.
3. **Crossfade-looped.** The last 0.7s dissolves back into the opening, so the
   loop has no visible seam. Final length 8.9s.

Audio was stripped. On an 8.9s loop a music bed restarts every few seconds, and
CapCut library tracks are not cleanly licensed for commercial web use. The
control is therefore pause/play, not a mute toggle. Supply a licensed track and
the sound toggle goes back in.

`HeroVideo.jsx` sets the source in `useEffect`, never in markup, so the
prerendered HTML ships only the poster and the LCP paint never waits on a video
download. `prefers-reduced-motion: reduce` leaves the poster up and loads
nothing.

To replace the footage, re-run the encode and keep the same filenames:

```bash
ffmpeg -i new.mov -an -c:v libx264 -crf 25 -pix_fmt yuv420p \
  -movflags +faststart public/video/hero-1080.mp4
ffmpeg -i new.mov -an -c:v libvpx-vp9 -crf 36 -b:v 0 public/video/hero-1080.webm
ffmpeg -i new.mov -frames:v 1 -q:v 4 public/img/hero-poster.jpg
```

---

## Services section

Split layout from the reference: tinted copy panel on the left, image bleeding
to the viewport edge on the right, rows divided by hairlines with the caret
opposite the title. On mobile the two stack, image below the accordion.

The image tracks the open row. Opening "Bathroom renovation" shows the bathroom
photo, so the panel is never decoration sitting beside unrelated text. The
first row opens by default, otherwise the image has no subject.

Service photos live in `public/img/services/<slug>.jpg` and are wired up in
`src/data/content.js`:

```js
{
  slug: 'kitchen-renovation',
  img: '/img/services/kitchen-renovation.jpg',
  alt: 'A honed stone kitchen worktop',
  tex: 'porcelain',   // fallback pattern if img is removed
  ...
}
```

**These four stills are pulled from the hero footage, not stock.** They carry
the right materials but none of them shows an actual kitchen or bathroom
renovation, so they are a stand-in only. Drop real project photos in at the
same paths — around 1600×900, landscape — and update each `alt`. Remove `img`
entirely and the component falls back to a generated texture.

---

## Reviews section

Structure taken from the supplied reference: a ghosted watermark word sitting
behind a centred heading, a short two-dash rule, then three thin-framed cards
with the content panel inset inside the frame.

As in the reference, the accent word in the heading is the same word as the
watermark ("Unedited **Reviews**" over `REVIEWS`). Change one in
`src/components/Reviews.jsx` and change the other to match, or the device stops
reading as deliberate.

Two departures, both intentional:

- **The reference is a team section with headshots.** Reviews have no
  portraits, so the inset panel carries the quote. Same structure, content that
  is actually true.
- **Set in this site's own typefaces**, not the reference's geometric sans.
  Importing a third family for one section would read as a second brand.

The ambient geometry (dotted grid, outlined square) is deliberately faint — it
should register as texture, not decoration — and is hidden below 760px where it
would only crowd the cards.

Review copy in `src/data/content.js` is placeholder. Replace it with the live
Google feed rather than hand-writing testimonials, and never attribute invented
quotes to named people.
