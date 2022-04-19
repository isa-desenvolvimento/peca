import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTheMask from 'vue-the-mask'
import moshaToast from 'mosha-vue-toastify'
import Popper from 'vue3-popper'
import Markdown from 'vue3-markdown-it'
import money from 'v-money3'
import vSelect from 'vue-select'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './index.css'

import 'mosha-vue-toastify/dist/style.css'
import 'tw-elements'
import 'highlight.js/styles/monokai.css'
import 'vue-select/dist/vue-select.css'

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update()
      }, 60 * 60 * 1000 /* 1 hour: timeout in milliseconds */)
  },
})
updateSW()

createApp(App)
  .use(router)
  .use(store)
  .use(moshaToast)
  .use(Markdown)
  .use(money)
  .component('Popper', Popper)
  .component('v-select', vSelect)
  .use(VueTheMask)
  .use(VueAxios, axios)
  .use(i18n)
  .mount('#app')
