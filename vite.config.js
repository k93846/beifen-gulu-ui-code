import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'gulu-ui',
      fileName: 'gulu-ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    resolve: {
      dedupe: [
        'vue'
      ]
    },
  }
})
