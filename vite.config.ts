import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/global.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, './node_modules'),
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@state': path.resolve(__dirname, './src/state'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  plugins: [svelte()]
})
