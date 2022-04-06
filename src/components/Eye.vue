<template>
  <div class="self-center" @click="toggle">
    <div
      v-if="!visible"
      class="mx-auto h-3 w-10 bg-icon-easy bg-contain bg-no-repeat bg-center text-white transition-linear duration-100"
    ></div>
    <div
      v-else
      class="mx-auto h-3 w-10 bg-icon-easy-close bg-contain bg-no-repeat bg-center text-white transition-linear duration-100"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return { visible: true }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
      this.$emit('toggle')
    },
  },
}
</script>
