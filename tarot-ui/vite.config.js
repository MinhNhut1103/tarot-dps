import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cards': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/tarotdeck': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
