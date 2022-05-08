<template>
  <Login
    v-if="!apelido"
    v-model="doc"
    :input-name="$t('CPF')"
    input-type="tel"
    :btn-name="$t('OK')"
    :submit="submitCPF"
    mask="###.###.###-##"
  />
  <Login
    v-else
    v-model="pwd"
    :input-name="$t('PASSWORD')"
    input-type="password"
    :btn-name="$t('OK')"
    :submit="login"
    :has-logo="false"
    :title="$t('HELLO')"
    :subtitle="` ${apelido}!`"
    :description="$t('YOUR_PASSWORD_ACCESS')"
    :subdescription="$t('YOUR_PASSWORD_ACCESS_NOT')"
    :reset="reset"
  />
</template>

<script>
import Login from '@/template/Login.vue'
import { mapState } from 'vuex'
import { useRouter } from 'vue-router'
import { messagesFetch } from '@/util/toast.js'

export default {
  components: {
    Login,
  },

  setup() {
    const router = useRouter()

    return {
      router,
      doc: '',
      pwd: '',
      contatos: { email: '', tel: '' },
      logoMobile: '/assets/logo_completa_monile.png',
    }
  },
  computed: mapState({
    apelido: (state) => {
      return state.user.apelido || ''
    },
    error: (state) =>
      state.user?.error &&
      state.user.error.includes(this.$t('MESSAGE.DANGER_NOT_REGISTER')),
  }),
  methods: {
    submitCPF() {
      this.$store
        .dispatch('user/postValidDoc', { doc: this.doc })
        .then(() => {
          sessionStorage.doc = this.doc
        })
        .catch(({ data, errors }) => {
          if (data?.contatos) this.contatos = data.contatos

          if (typeof errors[0] === 'object') {
            messagesFetch('danger', this.$t('MESSAGE.DANGER_CPG_INVALID'))
          } else {
            errors.map((err) => {
              messagesFetch('danger', err)
              this.redirect(err)
            })
          }
        })
    },
    redirect(err) {
      switch (err) {
        case this.$t('MESSAGE.DANGER_NOT_REGISTER'):
          this.$store.dispatch('auth/postValidDoc', { doc: this.doc })
          sessionStorage.doc = this.doc
          this.router.push('/feedback')
          break
        case this.$t('MESSAGE.DANGER_NOT_LOGIN'):
          sessionStorage.setItem(
            'fornecedor',
            JSON.stringify({
              email: this.contatos.email,
              tel: this.contatos.celular,
            })
          )
          this.router.push('/send-email')
          break
        default:
          break
      }
    },
    login() {
      if (this.pwd) {
        sessionStorage.pwd = this.pwd
      }

      this.$store
        .dispatch('auth/login', {
          doc: this.doc || sessionStorage.doc,
          pwd: this.pwd || sessionStorage.pwd,
        })
        .then(() => {
          sessionStorage.removeItem('auth')
          this.router.push('/')
          delete sessionStorage.pwd
        })
        .catch(() => {
          messagesFetch('danger', window.$t('MESSAGE.DANGER_PASSWORD_INVALID'))
          delete sessionStorage.pwd
        })
    },
    reset() {
      this.$store
        .dispatch('form/create', {
          type: 'reset',
          value: {
            doc: sessionStorage.doc,
            notAdd: true,
          },
        })
        .then(() => {
          this.router.push('/send-email')
          messagesFetch('success', window.$t('MESSAGE.SUCCESS_PASSWORD'))
        })
    },
  },
}
</script>
