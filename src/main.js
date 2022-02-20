import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import obj from '@/components/common/toest'
import bus from './mitt'

import FastClick from 'fastclick'



FastClick.attach(document.body)
const app=createApp(App)
app.config.globalProperties.$bus = bus
app.use(router)
app.use(store)
app.mount('#app')
