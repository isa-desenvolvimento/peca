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
              :title="`${item.valor}`"
              :subtitle="item.loja"
              :type="type"
              :description="item.descricao"
              :icon-plus="item.valor >= 0"
              is-money
              :arquivo="item.imagem_recibo"
            />

            <input
              v-if="hasCheckbox"
              @change="toggle(item?.id)"
              :checked="checked(item?.id)"
              :disabled="validButton"
              type="checkbox"
              class="ml-auto absolute text-red focus:ring-transparent inset-x-0 inset-y-0 form-check-input appearance-none h-4 w-4 border border-red bg-transparent focus:text-red active:bg-red hover:text-red checked:bg-red checked:border-red focus:bg-red focus:border-red focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
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
    title: { type: String, required: false },
    type: { type: String, required: false },
    lists: { type: Array, required: true },
    onclick: { type: Function, required: false },
    hasCheckbox: { type: Boolean, required: false, default: false },
  },
  data() {
    return { limit: 1, donation: [] }
  },
  computed: {
    validButton() {
      return this.type === 'devolucao' && this.selected.length !== 0
    },
    donationList() {
      const donationState = this.$store.state.list?.donationList
      const list = Array.isArray(donationState) ? donationState : []

      return list
    },
  },
  methods: {
    showmore() {
      this.limit = this.limit === this.lists.length ? 1 : this.lists.length
    },
    checked(id) {
      return this.donationList?.indexOf(id) !== -1
    },
    toggle(id) {
      const index = this.donation.indexOf(id)
      if (index !== -1) {
        this.donation.splice(index, 1)
      } else {
        this.donation.push(id)
      }

      this.$store.dispatch('list/setDonation', this.donation)
    },
  },
}
</script>
