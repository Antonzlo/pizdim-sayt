import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pizdim-sayt/',
  build: {
    outDir: 'dist'
  }
})
