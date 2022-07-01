/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 16:01:40
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        include: [/\.md$/, /\.vue$/],
    }), Markdown()],
    build: {
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        },
        lib: {
            entry: './packages/index.ts',
            name: 'Xuan-UI'
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
