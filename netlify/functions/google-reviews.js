import { reviewsApiResponse } from '../../src/lib/fetchGoogleReviews.js'

export async function handler(event) {
  const key = event.queryStringParameters?.l || 'main'
  const { status, body } = await reviewsApiResponse(key, process.env.GOOGLE_PLACES_API_KEY)
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': status === 200 ? 'public, max-age=300' : 'no-store',
    },
    body: JSON.stringify(body),
  }
}
