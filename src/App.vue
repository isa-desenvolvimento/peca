<template>
  <transition v-if="loggedIn" name="fade">
    <router-view />
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
