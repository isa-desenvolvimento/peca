<template>
  <transition v-if="loggedIn || isPublicPages" name="fade">
    <router-view />
  </transition>
  <transition v-else>
    <sign-in />
  </transition>
</template>

<script>
import SignIn from '@/screens/SignIn.vue'
import { PUBLIC_PAGES } from '@/router'

export default {
  components: { SignIn },
  data() {
    return { isPublicPages: false }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.isPublicPages =
          PUBLIC_PAGES.includes(this.$route.path) &&
          this.$route.path !== '/login'
      }
    )
  },
}
</script>
