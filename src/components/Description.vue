<template>
  <h3 class="w-60 font-manrope" :class="classe">
    <slot />
  </h3>
</template>

<script>
export default {
  props: {
    classe: { type: String, required: false },
  },
}
</script>
