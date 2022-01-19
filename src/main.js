import { createApp } from 'vue'
import App from './App.vue'
import AppPlugin from './plugins/api'
import router from './router'

const app = createApp(App).use(router)

app.use(AppPlugin)

app.mount('#app')
