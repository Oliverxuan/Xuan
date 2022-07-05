/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-05 11:26:54
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import XUI from '../packages/index';
import router from './router/index'
import hljs from 'highlight.js'
import "highlight.js/styles/color-brewer.css"
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'




const app = createApp(App)
app.use(XUI)
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
app.directive("highlight", el => {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    });
})


