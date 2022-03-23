<template>
  <div class="flex items-center justify-between mb-3">
    <div class="inline-flex" role="group">
      <div v-for="tab in tabs" :key="tab">
        <button
          type="button"
          class="inline-block px-3 py-2 bg-orange rounded-sm text-red font-medium text-sm leading-snug uppercase focus:bg-yellow-ligth focus:outline-none focus:ring-0 active:bg-yellow-ligth active:text-red transition duration-150 ease-in-out"
          @click="$emit('click', $event)"
        >
          {{ tab }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: { type: Array, required: true },
  },
}
</script>
