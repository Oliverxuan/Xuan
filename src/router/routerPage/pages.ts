/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 15:33:38
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-06 14:21:39
 * @Description: 
 */
export default [
    {
        path: '/',
        redirect: '/index',
        component: () => import('../../views/index.vue'),
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../../views/index.vue'),
    },
    {
        path: '/art',
        name: 'art',
        component: () => import('../../views/art.vue'),
    },
    {
        path: '/home',
        redirect: '/home/button',
        name: 'home',
        component: () => import('../../views/home.vue'),
        children: [
            {
                path: 'button',
                name: 'button',
                description: "按钮",
                component: () => import("../../../packages/button/doc/doc.md")
            },
            {
                path: 'input',
                name: 'input',
                description: "输入框",
                component: () => import("../../../packages/input/doc/doc.md")
            }
        ]
    }
]