<template>
  <div class="flex justify-center">
    <div class="block rounded-lg shadow-lg bg-white w-full mx-4 text-center">
      <div class="py-3 px-6 border-b border-gray-300">{{ header }}</div>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">
          {{ title }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          {{ description }}
        </p>
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {{ btnTitle }}
        </button>
      </div>
      <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
        {{ footer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    btnTitle: { type: String, required: true },
    footer: { type: String, required: true },
  },
}
</script>
