import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { router } from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
