/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-05 15:11:49
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
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/assets/styles/style.scss" as * ;`
            }
        }
    }
})
