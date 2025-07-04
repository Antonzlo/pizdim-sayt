import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BASE_URL } from './src/config.js'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL,
  build: {
    outDir: 'dist'
  }
})
