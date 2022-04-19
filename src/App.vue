<template>
  <div
    v-if="!loading && (isPublicPages || loggedIn)"
    name="fade"
    class="bg-gradient-to-t from-pink3 via-pink2 to-pink4"
  >
    <router-view />
  </div>
  <div v-if="!loading && !isPublicPages && !loggedIn">
    <sign-in />
  </div>
  <Loading v-if="loading" />
  <div class="absolute bottom-0 right-2 text-white font-manrope opacity-25 uppercase text-xs"> versão - {{ version }}</div>
</template>

<script>
import SignIn from '@/screens/SignIn.vue'
import { PUBLIC_PAGES } from '@/router'
import { setupAxiosToken } from '@/api/http.js'

import Loading from '@/components/Loading.vue'
import { mapState } from 'vuex'

export default {
  components: { SignIn, Loading },
  data() {
    return { isPublicPages: false, version: process.env.npm_package_version }
  },
  computed: mapState({
    loggedIn: (state) => state.auth.loggedIn,
    loading: (state) => state.form.loading,
  }),

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
          setupAxiosToken(user?.token)
        }
      }
    )
  },
}
</script>
