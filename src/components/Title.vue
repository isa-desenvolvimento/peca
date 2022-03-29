<template>
  <h1 :class="classe" class="text-lg leading-sm mx-auto font-gotham font-bold">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    classe: { type: String, required: false, default: 'text-white' },
  },
}
</script>
