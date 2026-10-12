import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from a subpath: https://dexha21.github.io/portfolio/
  // Without this `base`, every built asset request would 404.
  base: '/portfolio/',
})
