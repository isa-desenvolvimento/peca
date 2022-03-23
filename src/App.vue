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
import { setupAxiosToken } from '@/api/http.js'

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
    window.$t = this.$t
    this.$watch(
      () => this.$route.params,
      () => {
        this.isPublicPages =
          PUBLIC_PAGES.includes(this.$route.path) &&
          this.$route.path !== '/login'

        if (this.loggedIn) {
          const user = JSON.parse(sessionStorage.getItem('user'))
          setupAxiosToken(user.token)
        }
      }
    )
  },
}
</script>
