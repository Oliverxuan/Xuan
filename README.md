<!--
 * @Author: Yinzhuoxuan
 * @Date: 2022-07-06 09:35:28
 * @LastEditors: Yinzhuoxuan
 * @LastEditTime: 2022-07-06 17:02:57
 * @Description:
-->

# Cookie UI 组件库

## 完美支持 Vue3 和 TS 使用 vite 做到更快速度，更小体积。

Cookie UI component library perfectly fits vue3 and typescript for development

## 开始

### 导入依赖 (main)

```js
import xuan from 'cookie-ui-xuan';
import '../node_modules/cookie-ui-xuan/dist/style.css';

const app = createApp(App);
app.use(xuan);
app.mount('#app');
```

### 在项目中引用

```html
<template>
  <x-button type="success">默认按钮</x-button>
</template>
```
