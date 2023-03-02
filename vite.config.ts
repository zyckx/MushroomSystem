import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-imports.d.ts',
            resolvers: [
                ElementPlusResolver(),

              ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
            ],
        }),

    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088/api',
                changeOrigin: true,//是否跨域
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})




