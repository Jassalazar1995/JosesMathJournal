import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({server: {
  proxy: {
    '/auth': 'https://josemathjournalfrontend.onrender.com/',
    '/api': 'https://josemathjournalfrontend.onrender.com/'
    }
  },
  plugins: [react()],
})
