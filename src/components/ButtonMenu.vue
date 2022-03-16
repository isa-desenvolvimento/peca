<template>
  <button
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover:bg-white-100"
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
    onclick: { type: Function, required: true },
  },
}
</script>
