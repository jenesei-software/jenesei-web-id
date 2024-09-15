import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const VITE_DEFAULT_NAME = env.VITE_DEFAULT_NAME || 'Default App Name'
  const VITE_DEFAULT_SHORTNAME = env.VITE_DEFAULT_SHORTNAME || 'Default Shortname'
  const VITE_DEFAULT_THEME_COLOR = env.VITE_DEFAULT_THEME_COLOR || '#ffffff'
  const VITE_DEFAULT_DESCRIPTION = env.VITE_DEFAULT_DESCRIPTION || 'Default Description'

  return {
    server: {
      host: 'local.dev.jenesei.ru',
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, './src/api'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@core': path.resolve(__dirname, './src/core'),
        '@functions': path.resolve(__dirname, './src/functions'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@providers': path.resolve(__dirname, './src/providers'),
        '@styles': path.resolve(__dirname, './src/styles'),
      },
    },
    plugins: [
      react(),
      basicSsl(),
      VitePWA({
        filename: 'service-worker-vite.js',
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
          type: 'module',
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: ({ url }) => url.origin === self.location.origin,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
                },
              },
            },
          ],
        },
        manifest: {
          display: 'standalone',
          orientation: 'portrait',
          name: VITE_DEFAULT_NAME,
          short_name: VITE_DEFAULT_SHORTNAME,
          theme_color: VITE_DEFAULT_THEME_COLOR,
          background_color: VITE_DEFAULT_THEME_COLOR,
          description: VITE_DEFAULT_DESCRIPTION,
          start_url: '/',
          icons: [
            {
              src: 'icons/icon-64x64.ico',
              sizes: '64x64',
              type: 'image/x-icon',
              purpose: 'any',
            },
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icons/icon-256x256.png',
              sizes: '256x256',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icons/icon-180x180.png',
              sizes: '180x180',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
      }),
    ],
  }
})
