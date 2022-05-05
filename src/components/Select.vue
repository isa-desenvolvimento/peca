<template>
  <div class="border border-red block w-full">
    <v-select
      v-model="vmodel"
      class="appearance-none font-manrope appearance-none uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent text-sm"
      :options="options"
      :reduce="reduce"
      :label="title"
      :placeholder="placeholder"
      :change="$emit('input', vmodel)"
    >
      <template #search="{ attributes, events }">
        <input
          class="vs__search"
          :required="!vmodel"
          v-bind="attributes"
          v-on="events"
        />
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    reduce: { type: Function, required: true },
    value: { type: Number, required: true },
    title: { type: String, required: false, default: 'title' },
    placeholder: { type: String, required: false, default: '' },
  },
  data() {
    return {
      vmodel: '',
    }
  },
  created() {
    this.vmodel = this.value
  },
}
</script>
