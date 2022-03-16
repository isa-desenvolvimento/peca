<template>
  <transition name="fade" v-if="loggedIn">
    <div>
    </div>
  </transition>
  <transition name="fade" v-else>
    <Login />
  </transition>
</template>


<script>
import Login from "@/screens/Login.vue"

export default {
    setup() {
        return {
            loggedIn: false
        };
    },
    components: { Login }
}
</script>