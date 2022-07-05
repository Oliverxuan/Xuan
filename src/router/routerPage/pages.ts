/*
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-01 15:33:38
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-05 14:17:45
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