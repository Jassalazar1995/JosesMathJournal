import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({server: {
  proxy: {
    '/auth': 'https://josemathjournal.onrender.com',
    '/api': 'https://josemathjournal.onrender.com'
    }
  },
  plugins: [react()],
})
