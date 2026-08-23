import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { reviewsApiResponse } from './src/lib/fetchGoogleReviews.js'

function reviewsApiPlugin(apiKey) {
  const handle = async (req, res, next) => {
    const path = req.url?.split('?')[0]
    if (path !== '/api/google-reviews') return next()
    const loc = new URL(req.url, 'http://localhost').searchParams.get('l') || 'main'
    const { status, body } = await reviewsApiResponse(loc, apiKey)
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }
  return {
    name: 'google-reviews-api',
    configureServer(server) {
      server.middlewares.use(handle)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), reviewsApiPlugin(env.GOOGLE_PLACES_API_KEY)],
    build: {
      outDir: 'dist',
      // Long-cache hashed assets; HTML stays uncached so Google always sees fresh markup.
      assetsDir: 'assets',
    },
    ssgOptions: {
      formatting: 'minify',
      // Every route in src/routes.jsx is written to disk as real HTML at its own slug.
      dirStyle: 'nested',
    },
  }
})
