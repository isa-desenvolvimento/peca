<template>
  <div
    v-if="loggedIn || (isPublicPages && !loading)"
    name="fade"
    class="bg-gradient-to-t from-pink3 via-pink2 to-pink4"
  >
    <router-view />
  </div>
  <Loading v-else-if="loading" />
  <div v-else>
    <sign-in />
  </div>
</template>

<script>
import SignIn from '@/screens/SignIn.vue'
import { PUBLIC_PAGES } from '@/router'
import { setupAxiosToken } from '@/api/http.js'

import Loading from '@/components/Loading.vue'

export default {
  components: { SignIn, Loading },
  data() {
    return { isPublicPages: false }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
    loading() {
      return true
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
<style>
::-webkit-calendar-picker-indicator {
  background-image: url('@/assets/calendar.svg');
}
</style>
