<template>
  <button
    class="p-10 py-12 max-w-md bg-yellow text-white opacity-90 rounded-md shadow-xl flex items-center space-x-4 hover:bg-white-100"
    :class="classe"
    @click="onclick"
  >
    <div class="text-xl font-medium text-black">{{ name }}</div>
    <p v-if="description" class="text-slate-500">{{ description }}</p>
  </button>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: false },
    classe: { type: String, required: true },
    onclick: { type: Function, required: true },
  },
}
</script>
