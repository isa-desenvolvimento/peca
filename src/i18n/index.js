import { createI18n } from 'vue-i18n'
import * as PT from './pt-BR.json'

const messages = {
  // en: {
  //   message: {
  //     hello: 'hello world'
  //   }
  // },
  pt: PT
}

const i18n = createI18n({
  locale: 'pt', 
  fallbackLocale: 'pt',
  messages,
})

export default i18n