import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [vue()],
  base: './',
//如果想要在dist目录下通过http-server建立服务器，或者在gitPages上建立官网，请注释掉build属性的所有代码。但如果想要打包后向npm发包并让其他使用者使用，请保证build属性相关的代码可用。
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/lib/index.js'),
  //     name: 'SuCai-ui',
  //     fileName: 'SuCai-ui'
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  //   resolve: {
  //     dedupe: [
  //       'vue'
  //     ]
  //   },
  // }
})
