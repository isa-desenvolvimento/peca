<template>
  <button
    class="py-7 p-5 max-w-md bg-yellow text-white opacity-90 rounded-md shadow-xl items-center hover:bg-white-100 text-center drop-shadow-2xl"
    :class="classe"
    @click="onclick"
  >
    <div
      class="mx-auto h-10 w-auto bg-contain bg-no-repeat bg-center text-white"
      :class="icon"
    ></div>

    <div class="text-xs font-regular text-black uppercase mt-1">{{ name }}</div>
    <p v-if="description" class="text-slate-500">{{ description }}</p>
  </button>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: false },
    classe: { type: String, required: true },
    icon: { type: String, required: true },
    onclick: { type: Function, required: true },
  },
}
</script>
