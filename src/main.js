import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import bus from './mitt'

const app=createApp(App)
app.config.globalProperties.$bus = bus
app.use(router)
app.mount('#app')
