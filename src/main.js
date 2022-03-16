import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './index.css'

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.use(i18n)
.mount('#app')
