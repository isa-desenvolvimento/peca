<template>
  <div class="grid grid-rows-2">
    <span class="text-red text-sm font-medium uppercase row-span-1 font-manrope">
      {{ title }}
    </span>
    <span
      v-if="subtitle"
      class="text-red text-xs font-light leading-3 break-words font-manrope"
    >
      {{ subtitle }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
  },
}
</script>
