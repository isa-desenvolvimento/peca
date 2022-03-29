import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'
import moshaToast from 'mosha-vue-toastify'
import Popper from 'vue3-popper'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './index.css'

import 'mosha-vue-toastify/dist/style.css'
import 'tw-elements'

createApp(App)
  .use(router)
  .use(store)
  .use(moshaToast)
  .component('Popper', Popper)
  .use(VueTheMask)
  .use(VueAxios, axios)
  .use(i18n)
  .mount('#app')
