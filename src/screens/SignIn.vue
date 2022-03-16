<template>
  <Login
    v-if="emailShow"
    v-model="email"
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :input-name="$t('EMAIL_ADRESSIVE')"
    input-type="email"
    :btn-name="$t('SIGN_IN')"
    :submit="submitCPF"
  />
  <Login
    v-else
    v-model="password"
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :input-name="$t('PASSWORD')"
    input-type="password"
    :btn-name="$t('SIGN_IN')"
    :submit="login"
  />
</template>

<script>
import Login from '@/template/Login.vue'

export default {
  components: {
    Login,
  },
  data() {
    return {
      emailShow: true,
      email: '',
      password: '',
    }
  },
  methods: {
    submitCPF(e) {
      e.preventDefault()
      this.emailShow = false
      console.log(this.email)
    },
    login(e) {
      e.preventDefault()
      console.log(this.password)
      this.$store.dispatch('auth/login', this.password).then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
