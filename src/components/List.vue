<template>
  <div v-for="(list, index) in lists" :key="index" class="mt-8">
    <template v-if="index <= 1">
      <h4 class="text-red text-xs opacity-30 text-left uppercase font-manrope">
        {{ list.grupo }}
      </h4>
      <hr class="col-span-2 text-yellow opacity-20 my-4" />
      <div
        v-for="periodo in list?.periodos"
        :key="periodo"
        class="grid grid-cols-8 my-8"
      >
        <div
          class="col-span-1 text-sm text-yellow text-center uppercase font-manrope"
          :class="`row-span-${periodo?.itens?.length}`"
        >
          {{ periodo.dia }} {{ periodo.mes }}
        </div>
        <div :class="`col-span-7 grid-rows-${periodo?.itens.length}`">
          <div v-for="item in periodo?.itens" :key="item.id" class="relative">
            <TitleSub
              :title="item.valor"
              :subtitle="item.loja"
              :description="item.descricao"
              :icon-plus="item.valor >= 0"
              is-money
            />

            <input
              v-if="hasCheckbox"
              disabled
              type="checkbox"
              class="ml-auto absolute inset-x-0 inset-y-0 form-check-input appearance-none h-4 w-4 border border-red bg-transparent checked:bg-red checked:border-red focus:bg-red focus:border-red focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TitleSub from '@/components/TitleSub.vue'
export default {
  components: { TitleSub },
  props: {
    title: { type: String, required: true },
    lists: { type: String, required: true },
    onclick: { type: Function, required: false },
    hasCheckbox: { type: Boolean, required: false, default: false },
  },
  data() {
    return { limit: 1 }
  },
  methods: {
    showmore() {
      this.limit = this.limit === this.lists.length ? 1 : this.lists.length
    },
  },
}
</script>
