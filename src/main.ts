import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@unocss/reset/tailwind-compat.css'
import '@/styles/common.scss'

import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import router from './router'
import pinia from './store'
import App from './App.vue'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const instance = createApp(App)
instance.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  instance.component(key, component)
}

instance.use(router)
instance.use(pinia)
instance.mount('#app')
