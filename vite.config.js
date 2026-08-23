import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
})
