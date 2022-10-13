import { createApp } from 'vue'
import App from './App.vue'

import DemoVue2 from "../build/demo-vue2"
import "../build/css/demo-vue2.css"

import DemoVue3 from "../build/demo-vue3"
import "../build/css/demo-vue3.css"

const app = createApp(App)
// 注册组件
app.use(DemoVue2)
app.use(DemoVue3)

app.mount('#app')
