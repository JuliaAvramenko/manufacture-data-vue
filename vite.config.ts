import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4500,
    open: true,
    cors: true,
    host: '0.0.0.0',
    watch: {
      usePolling: false
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': path.resolve(__dirname, './src'),
      // '@pages': path.resolve(__dirname, './src/pages'), // Алиас для pages
    },
  },
})
