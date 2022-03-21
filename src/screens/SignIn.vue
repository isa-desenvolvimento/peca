<template>
  <Login
    v-if="apelido"
    v-model="cpf"
    :input-name="$t('CPF')"
    input-type="text"
    :btn-name="$t('OK')"
    :submit="submitCPF"
    mask="###.###.###-##"
  />
  <Login
    v-else
    v-model="password"
    :input-name="$t('PASSWORD')"
    input-type="password"
    :btn-name="$t('SIGN_IN')"
    :submit="login"
    mask=""
  />
</template>

<script>
import Login from '@/template/Login.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Login,
  },

  setup() {
    return {
      cpf: '',
      password: '',
      logoMobile: '/assets/logo_completa_monile.png',
    }
  },
  computed: mapState({
    apelido: (state) => state.user.apelido || true,
    error: (state) =>
      state.user.error.includes(this.$t('MESSAGE.DANGER_NOT_REGISTER')),
  }),
  methods: {
    submitCPF(e) {
      e.preventDefault()
      this.$store
        .dispatch('user/postValidDoc', { doc: this.cpf })
        .catch((err) => {
          if (err.includes(this.$t('MESSAGE.DANGER_NOT_REGISTER')))
            this.$store.dispatch('auth/postValidDoc', { doc: this.cpf })

          this.$router.push('/feedback')
        })
    },
    login(e) {
      e.preventDefault()
      console.log(this.password)
      this.$store.dispatch('auth/login', this.password).catch(() => {
        if (this.error) this.$router.push('/feedback')
      })
    },
  },
}
</script>
