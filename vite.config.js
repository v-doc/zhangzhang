const { resolve } = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'ice/index.html')
      }
    }
  },
  base: '/zhangzhang',
  plugins: [react()]
})
