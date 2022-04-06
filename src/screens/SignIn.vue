<template>
  <Login
    v-if="!apelido"
    v-model="doc"
    :input-name="$t('CPF')"
    input-type="text"
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
    submitCPF(e) {
      e.preventDefault()
      this.$store
        .dispatch('user/postValidDoc', { doc: this.doc })
        .then(() => {
          sessionStorage.doc = this.doc
        })
        .catch((err) => {
          err.map((err) => messagesFetch('danger', err))

          if (err.includes(this.$t('MESSAGE.DANGER_NOT_REGISTER'))) {
            this.$store.dispatch('auth/postValidDoc', { doc: this.doc })
            this.router.push('/feedback')
            sessionStorage.doc = this.doc
          }
        })
    },
    login(e) {
      e.preventDefault()

      this.$store
        .dispatch('auth/login', {
          doc: this.doc || sessionStorage.doc,
          pwd: this.pwd,
        })
        .then(() => {
          this.router.push({ path: '/' })
        })
        .catch(() => {
          if (this.error) this.router.push('/feedback')
        })
    },
  },
}
</script>
