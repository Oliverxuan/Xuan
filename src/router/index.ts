/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 15:31:24
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 15:36:25
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routerPages from './routerPage/pages'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routerPages]
})

export default router