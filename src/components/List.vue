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
        <div
          :class="`col-span-7 grid-rows-${periodo?.itens.length}`"
          @click="onclick"
        >
          <TitleSub
            v-for="item in periodo?.itens"
            :key="item.id"
            :title="item.valor"
            :description="formtDescription(item.descricao, item.loja)"
            :icon-plus="item.valor >= 0"
            is-money
          />
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
  },
  data() {
    return { limit: 1 }
  },
  // computed: {
  //   computedObj() {
  //     return this.limit ? this.lists.slice(0, this.limit) : this.lists
  //   },
  // },
  methods: {
    formtDescription(description, store) {
      return `${store} - ${description}`
    },
    showmore() {
      this.limit = this.limit === this.lists.length ? 1 : this.lists.length
    },
  },
}
</script>
