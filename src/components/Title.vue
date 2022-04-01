<template>
  <div
    v-if="title === $t('OOPS')"
    class="flex justify-start mb-8 ml-[-1rem] lg:mb-0"
  >
    <h1
      class="text-8xl leading-10 font-gotham font-bold uppercase"
      :class="classe"
    >
      O
    </h1>

    <h1
      class="text-6xl leading-10 font-gotham font-bold uppercase w-full"
      :class="classe"
    >
      {{ title }}

      <div class="flex"><slot /></div>
    </h1>
  </div>
  <div v-else class="w-full">
    <h1
      class="text-6xl leading-[4rem] font-gotham font-bold uppercase w-[30rem]"
      :class="classe"
    >
      {{ title }}

      <div class="flex"><slot /></div>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    classe: { type: String, required: false, default: 'text-orange' },
  },
}
</script>
