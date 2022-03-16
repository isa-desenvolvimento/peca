<template>
  <Login 
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :inputName="$t('EMAIL_ADRESSIVE')"
    inputType="email"
    :btnName="$t('SIGN_IN')"
    :submit="submitCPF"
    v-if="emailShow"
  />
  <Login 
    logo="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    :description="$t('SIGN_IN_TO_YOUR_ACCOUNT')"
    :inputName="$t('PASSWORD')"
    inputType="password"
    :btnName="$t('SIGN_IN')"
    :submit="submitCPF"
    v-else
  />
</template>

<script>
import Login from '@/template/Login.vue'

export default {
  data() {
    return { 
      emailShow: true,
    }
  },
  components: {
    Login
  },
  methods: {
   submitCPF() {
     this.emailShow = false
   } 
  }
}
</script>