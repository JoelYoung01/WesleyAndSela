import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// GitHub Pages project sites live at /<repo>/; user sites and custom domains use /.
// actions/configure-pages sets BASE_PATH (often without a trailing slash).
function pagesBase(raw: string | undefined): string {
  if (!raw) return '/'
  return raw.endsWith('/') ? raw : `${raw}/`
}

const base = pagesBase(process.env.BASE_PATH)

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
