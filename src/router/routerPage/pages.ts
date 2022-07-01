/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 15:33:38
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-01 16:15:14
 * @Description: 
 */
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../../views/home.vue'),
        children: [
            {
                path: '',
                name: 'button',
                component: () => import("../../../packages/button/doc/doc.md")
            },
            {
                path: 'input',
                name: 'input',
                component: () => import("../../../packages/input/doc/doc.md")
            }
        ]
    }
]