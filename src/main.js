import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'
import moshaToast from 'mosha-vue-toastify'
import Popper from 'vue3-popper'
import Markdown from 'vue3-markdown-it'
import money from 'v-money3'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './index.css'

import 'mosha-vue-toastify/dist/style.css'
import 'tw-elements'
import 'highlight.js/styles/monokai.css'

createApp(App)
  .use(router)
  .use(store)
  .use(moshaToast)
  .use(Markdown)
  .use(money)
  .component('Popper', Popper)
  .use(VueTheMask)
  .use(VueAxios, axios)
  .use(i18n)
  .mount('#app')
