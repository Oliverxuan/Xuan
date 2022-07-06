# Cookie UI 组件库

## 完美支持 Vue3 和 TS 使用 vite 做到更快速度，更小体积。

Cookie UI component library perfectly fits vue3 and typescript for development

## 开始

### 安装

```js
yarn add cookie-ui-xuan
```

### 导入 (main)

```js
import ui from 'cookie-ui-xuan'
import '../node_modules/cookie-ui-xuan/dist/style.css'

const app = createApp(App)
app.use(ui)
app.mount('#app')
```

### 在项目中引用

```html
<template>
	<x-button type="success">默认按钮</x-button>
</template>
```

### 启动服务

yarn dev

### 服务地址

http://localhost:3000/#/

### 打包

yarn build
