<template>
  <button
    class="p-5 bg-yellow e opacity-90 rounded-md shadow-xl items-center hover:bg-white-100 text-center drop-shadow-2xl disabled:opacity-75 disabled:cursor-not-allowed"
    :class="classe"
    @click="onclick"
  >
    <div
      class="mx-auto h-[1.5rem] w-auto bg-contain bg-no-repeat bg-center text-white"
      :class="icon"
    ></div>

    <div
      class="text-xs text-white font-manrope font-regular text-black uppercase mt-1"
    >
      {{ name }}
    </div>
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
