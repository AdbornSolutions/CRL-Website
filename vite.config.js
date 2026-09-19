import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: { proxy: { '/api': { target: loadEnv(mode, '.', '').API_PROXY_TARGET || 'https://api.crl-transport.com', changeOrigin: true } } },
  test: { environment: 'jsdom' },
}))
