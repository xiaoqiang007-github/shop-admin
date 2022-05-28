import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import path from 'path'
// const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslint()],
  server: {
    port: 3004,
    strictPort: true
  },
  envDir: './env',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
      // '@/': resolve('src/*')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
