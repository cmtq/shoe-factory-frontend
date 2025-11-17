import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://shoe-factory-backend-zjnvqw-e52790-185-230-64-201.traefik.me',
        changeOrigin: true,
      },
    },
  },
})
