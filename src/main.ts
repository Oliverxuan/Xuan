/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 09:50:57
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 15:39:03
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import XUI from '../packages/index';
import router from './router/index'


const app = createApp(App)
app.use(XUI)
app.use(router)
app.mount('#app')

