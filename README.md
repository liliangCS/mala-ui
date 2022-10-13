# mala-ui组件库

### 快速开始

##### 1、安装组件库
```bash
# 使用npm安装
npm i mala-ui
# 使用yarn安装
yarn add mala-ui
# 使用pnpm安装
pnpm add mala-ui
```

##### 2、引用组件库（全部引入）
```javascript
// vue项目入口文件
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库及样式
import mala from "mala-ui"
import "mala-ui/build/css/index.css"

// 注册
createApp(App).use(mala).mount('#app')
```

##### 3、引用组件库（按需引入）
```javascript
// vue项目入口文件
import { createApp } from 'vue'
import App from './App.vue'

// 按续引入组件及样式
import DemoVue2 from "mala-ui/build/demo-vue2.js"
import "mala-ui/build/css/demo-vue2.css"

// 注册
createApp(App).use(DemoVue2).mount('#app')
```

##### 4、使用组件
```vue
<template>
  <div class="app">
    <mala-demo-vue2></mala-demo-vue2>
  </div>
</template>

<script>
</script>

<style>
</style>
```