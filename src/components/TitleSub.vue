<template>
  <div class="col-span-6 ml-5">
    <div>
      <span v-if="iconPlus" class="text-green text-xs"> + </span>
      <span v-else class="text-red text-xs"> - </span>
      <span class="text-red text-sm font-bold"> {{ title }} </span>
    </div>
    <span class="text-red text-xs leading-3 break-words">
      {{ description }}
    </span>
    <hr class="col-span-2 text-yellow opacity-25 my-2" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    iconPlus: { type: Boolean, required: false, default: false },
    description: { type: String, required: false },
  },
}
</script>
