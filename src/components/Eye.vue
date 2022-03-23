<template>
  <div @click="toggle" class="self-center">
    <div
      class="mx-auto h-3 w-10 bg-icon-easy bg-contain bg-no-repeat bg-center text-white transition-linear duration-100"
      v-if="visible"
    ></div>
    <div
      class="mx-auto h-3 w-10 bg-icon-easy-close bg-contain bg-no-repeat bg-center text-white transition-linear duration-100"
      v-else
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
