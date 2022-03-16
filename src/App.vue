<template>
  <transition v-if="loggedIn">
    <div>Login true</div>
  </transition>
  <transition v-else>
    <sign-in />
  </transition>
</template>

<script>
import SignIn from '@/screens/SignIn.vue'

export default {
  components: { SignIn },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
}
</script>
