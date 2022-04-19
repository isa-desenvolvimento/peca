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
    short_name: 'PRApp',
    name: 'Peça Rara Fornecedores',
    description: 'Aplicativo para fornecedores Peça Rara',
    lang: 'pt-br',
    dir: 'ltr',
    theme_color: '#ffffff',
    background_color: '#ffa300',
    id: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'natural',
    icons: [
      {
        src: '/assets/favicon/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
        density: '0.75',
      },
      {
        src: '/assets/favicon/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
        density: '1.0',
      },
      {
        src: '/assets/favicon/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        density: '1.5',
      },
      {
        src: '/assets/favicon/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        density: '2.0',
      },
      {
        src: '/assets/favicon/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
      },
      {
        src: '/assets/favicon/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
      },
    ],
    screenshots: [
      {
        src: '/assets/img/screenshot1.png',
        type: 'image/png',
        sizes: '540x720',
      },
      {
        src: '/assets/img/screenshot2.png',
        type: 'image/jpg',
        sizes: '540x720',
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
