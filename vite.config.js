import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'

// import svgLoader from 'vite-svg-loader'
// const fs = require('fs')
const pwaOptions = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Peça Rara',
    short_name: 'Peça Rara',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'assets/logo_completa_mobile.1c91bd0a.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [vue(), eslintPlugin(), VitePWA(pwaOptions)],
    define: {
      'process.env': process.env,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: true,
      target: ['es2020'],
      chunkSizeWarningLimit: 15000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
    },
  }
})
