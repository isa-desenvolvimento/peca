<template>
  <div class="mb-3">
    <div class="inline-flex justify-between w-full" role="group">
      <div v-for="tab in tabs" :key="tab">
        <button
          type="button"
          class="inline-block px-3 py-2 bg-orange text-red font-medium text-sm leading-snug uppercase focus:bg-yellow-ligth focus:outline-none focus:ring-0 active:bg-yellow-ligth active:text-red transition duration-150 ease-in-out"
          @click="$emit('click', tab)"
        >
          {{ tab }} {{ $t('DAY') }}
        </button>
      </div>
      <div>
        <button
          type="button"
          class="inline-block px-3 py-2 bg-orange text-red font-medium text-sm leading-snug uppercase focus:bg-yellow-ligth focus:outline-none focus:ring-0 active:bg-yellow-ligth active:text-red transition duration-150 ease-in-out"
          @click="$emit('click', 'outros')"
        >
          {{ $t('OTHERS') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      tabs: [7, 15, 30],
    }
  },
}
</script>
