<template>
  <div v-if="title === $t('OOPS')" class="flex justify-start">
    <h1
      class="text-6xl leading-10 font-gotham font-bold uppercase"
      :class="classe"
    >
      O
    </h1>

    <h1
      class="text-lg leading-10 font-gotham font-bold uppercase w-full"
      :class="classe"
    >
      {{ title }}

      <div class="flex"><slot /></div>
    </h1>
  </div>

  <h1
    v-else
    class="text-lg leading-10 font-gotham font-bold uppercase w-full"
    :class="classe"
  >
    {{ title }}

    <div class="flex"><slot /></div>
  </h1>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    classe: { type: String, required: false, default: 'text-white' },
  },
}
</script>
