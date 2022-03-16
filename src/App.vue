<template>
  <transition v-if="loggedIn">
    <home />
  </transition>
  <transition v-else>
    <sign-in />
  </transition>
</template>

<script>
import SignIn from '@/screens/SignIn.vue'
import Home from '@/screens/Home.vue'

export default {
  components: { SignIn, Home },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
}
</script>
