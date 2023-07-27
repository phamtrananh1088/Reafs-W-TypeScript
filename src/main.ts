import './assets/main.css'
// import './assets/main.blue.css'
import './assets/main.green.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/reafs_w'
import store from './store'

createApp(App)
.use(router)
.use(store)
.mount('#app')
