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
  workbox: {
    cleanupOutdatedCaches: true,
    sourcemap: true,
  },
  includeAssets: [
    'favicon.ico',
    'safari-pinned-tab.svg',
    'apple-touch-icon.png',
    'favicons',
    'img',
  ],
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
        purpose: 'any maskable',
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
        purpose: 'any maskable',
      },
      {
        src: '/favicons/apple-icon.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
        density: '1.0',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
        density: '1.2',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        density: '1.5',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
        density: '1.5',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
        density: '2.0',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
        density: '2.3',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        density: '3.5',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
        density: '3.8',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
      {
        src: '/favicons/apple-icon-precomposed.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        density: '0.25',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        density: '0.5',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        density: '2.0',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        density: '3.5',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
      {
        src: '/favicons/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        density: '5.0',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-70x70.png',
        sizes: '70x70',
        type: 'image/png',
        density: '1.5',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-150x150.png',
        sizes: '150x150',
        type: 'image/png',
        density: '3.5',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        density: '3.7',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-310x310.png',
        sizes: '310x310',
        type: 'image/png',
        density: '4.3',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        density: '4.5',
        purpose: 'any',
      },
      {
        src: '/favicons/ms-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        density: '5.0',
        purpose: 'any',
      },
      {
        src: '/favicons/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png',
        density: '3.5',
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
