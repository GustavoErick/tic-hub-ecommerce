import './assets/styles/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import { setPrimeVue } from './modules/primevue.modules'
//import router from './router'

const app = createApp(App)
setPrimeVue(app)

//app.use(createPinia())
//app.use(router)

app.mount('#app')
