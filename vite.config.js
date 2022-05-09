import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'

// import svgLoader from 'vite-svg-loader'
// const fs = require('fs')
const pwaOptions = {
  mode: 'production',
  base: '/',
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', '.htaccess', 'favicons', 'img'],
  manifest: {
    short_name: 'Clube Peça Rara',
    name: 'Clube Peça Rara',
    description: 'Clube Peça Rara',
    lang: 'pt-br',
    dir: 'ltr',
    theme_color: '#ffffff',
    background_color: '#ffa300',
    id: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'natural',
    related_applications: [],
    prefer_related_applications: false,
    features: ['Cross Platform', 'low-latency inking', 'fast', 'useful AI'],
    icons: [
      {
        src: '/favicons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
        density: '0.75',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
        density: '1.0',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        density: '1.5',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        density: '2.0',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        density: '3.5',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
      {
        src: '/favicons/android-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/img/screenshoot01.png',
        type: 'image/png',
        sizes: '540x720',
      },
      {
        src: '/img/screenshoot02.png',
        type: 'image/jpg',
        sizes: '540x720',
      },
    ],
    shortcuts: [
      {
        name: 'Clube Peça Rara',
        short_name: 'Clube Peça Rara',
        description: 'Sistema de Gestão de Fornecedores',
        url: '/',
        icons: [
          {
            src: '/favicons/android-icon-192x192.png',
            sizes: '192x192',
          },
        ],
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
