import { LOCATIONS } from '../data/locations.js'

const CACHE_MS = 5 * 60 * 1000
const MIN_DISPLAY_STARS = 4
const cache = new Map()

const listingQuery = (location) =>
  [location.name, location.city, location.region].filter(Boolean).join(' ')

const asIsoDate = (value) => {
  if (!value) return ''
  if (typeof value === 'number') return new Date(value * 1000).toISOString()
  return String(value)
}

function normalize(payload) {
  return {
    rating: Number(payload.rating) || 0,
    count: Number(payload.count) || 0,
    placeId: payload.placeId || '',
    reviews: (payload.reviews || [])
      .map((r) => ({
        by: r.by,
        date: r.date,
        when: r.when || '',
        stars: r.stars || 5,
        body: r.body,
      }))
      .filter((r) => r.by && r.body && r.stars >= MIN_DISPLAY_STARS),
  }
}

async function readJson(res) {
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    throw new Error(`Google Places returned non-JSON (${res.status})`)
  }
}

async function fetchNewDetails(apiKey, placeId) {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews,googleMapsUri',
      },
    }
  )
  const data = await readJson(res)
  if (data.error) throw new Error(data.error.message || data.error.status || 'Places API (New) failed')
  return {
    rating: data.rating,
    count: data.userRatingCount,
    placeId: data.id || placeId,
    reviews: (data.reviews || []).map((r) => ({
      by: r.authorAttribution?.displayName || 'Google user',
      date: asIsoDate(r.publishTime),
      when: r.relativePublishTimeDescription || '',
      stars: r.rating || 5,
      body: r.text?.text || r.originalText?.text || '',
    })),
  }
}

async function fetchNewSearch(apiKey, query) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
      textQuery: query,
      pageSize: 1,
      languageCode: 'en',
      includePureServiceAreaBusinesses: true,
    }),
  })
  const data = await readJson(res)
  if (data.error) throw new Error(data.error.message || data.error.status || 'Places search failed')
  const place = data.places?.[0]
  if (!place?.id) throw new Error('Places search did not return a listing')
  return fetchNewDetails(apiKey, place.id)
}

async function fetchLegacy(apiKey, query, placeId) {
  let id = placeId
  if (!id) {
    const findRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        query
      )}&inputtype=textquery&fields=place_id,name&key=${encodeURIComponent(apiKey)}`
    )
    const found = await readJson(findRes)
    if (found.status !== 'OK') {
      throw new Error(found.error_message || found.status || 'Find Place failed')
    }
    id = found.candidates?.[0]?.place_id
    if (!id) throw new Error('Find Place did not return a listing')
  }

  const detRes = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      id
    )}&fields=name,rating,user_ratings_total,reviews,url,place_id&reviews_sort=newest&key=${encodeURIComponent(apiKey)}`
  )
  const details = await readJson(detRes)
  if (details.status !== 'OK') {
    throw new Error(details.error_message || details.status || 'Place Details failed')
  }
  const result = details.result || {}
  return {
    rating: result.rating,
    count: result.user_ratings_total,
    placeId: result.place_id || id,
    reviews: (result.reviews || []).map((r) => ({
      by: r.author_name || 'Google user',
      date: asIsoDate(r.time),
      when: r.relative_time_description || '',
      stars: r.rating || 5,
      body: r.text || '',
    })),
  }
}

export async function fetchGooglePlaceReviews({ apiKey, query, placeId }) {
  if (!apiKey) throw new Error('GOOGLE_PLACES_API_KEY is not set')
  try {
    const raw = placeId ? await fetchNewDetails(apiKey, placeId) : await fetchNewSearch(apiKey, query)
    return normalize(raw)
  } catch (first) {
    try {
      return normalize(await fetchLegacy(apiKey, query, placeId))
    } catch (second) {
      throw new Error(first.message || second.message)
    }
  }
}

export async function reviewsForListing(key, apiKey) {
  const location = LOCATIONS[key] || LOCATIONS.main
  const cacheKey = location.key
  const hit = cache.get(cacheKey)
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.data

  const data = await fetchGooglePlaceReviews({
    apiKey,
    query: listingQuery(location),
    placeId: location.placeId || '',
  })
  cache.set(cacheKey, { at: Date.now(), data })
  return data
}

export async function reviewsApiResponse(key, apiKey) {
  if (!apiKey) {
    return { status: 503, body: { error: 'GOOGLE_PLACES_API_KEY is not set' } }
  }
  const allowed = key === 'second' ? 'second' : 'main'
  try {
    const data = await reviewsForListing(allowed, apiKey)
    return { status: 200, body: data }
  } catch (err) {
    console.error('[google-reviews]', err.message)
    return { status: 502, body: { error: err.message || 'Google Places request failed' } }
  }
}
