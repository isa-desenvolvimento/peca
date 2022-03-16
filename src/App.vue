<template>
  <transition name="fade" v-if="loggedIn">
    <div>
      Login true
    </div>
  </transition>
  <transition name="fade" v-else>
    <Login />
  </transition>
</template>


<script>
import Login from "@/screens/Login.vue"

export default {
  components: { Login },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
}
</script>