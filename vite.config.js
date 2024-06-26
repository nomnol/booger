import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    sourcemap: true
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/scss/_vars.scss";'
      }
    }
  }
})
