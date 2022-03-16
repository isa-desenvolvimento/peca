<template>
  <Login 
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :inputName="$t('EMAIL_ADRESSIVE')"
    inputType="email"
    :btnName="$t('SIGN_IN')"
    :submit="submitCPF"
    v-if="emailShow"
    v-model="email"
  />
  <Login 
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :inputName="$t('PASSWORD')"
    inputType="password"
    :btnName="$t('SIGN_IN')"
    :submit="login"
    v-model="password"
    v-else
  />
</template>

<script>
import Login from '@/template/Login.vue'

export default {
  data() {
    return { 
      emailShow: true,
      email: '',
      password: ''
    }
  },
  components: {
    Login
  },
  methods: {
   submitCPF(e) {
     e.preventDefault()
     this.emailShow = false
     console.log(this.email);
   },
   login(e) {
     e.preventDefault()
    console.log(this.password);
     this.$store.dispatch('auth/login', this.password).then(() => {
       this.$router.push('/')
     })
   }
  }
}
</script>