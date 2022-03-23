<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <div class="flex gap-4 row-span-1">
        <div>
          <button
            class="h-12 w-12 p-2 rounded-full max-w-md rounded-md items-center inline-block hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center bg-contain bg-no-repeat bg-center text-white bg-icon-back"
            :class="classe"
            @click="router.back()"
          ></button>
        </div>
        <div>
          <button
            class="h-12 w-12 p-2 rounded-full max-w-md rounded-md items-center inline-block hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center bg-contain bg-no-repeat bg-center text-white bg-icon-home"
            :class="classe"
            @click="router.push('/')"
          ></button>
        </div>
        <div
          class="h-10 ml-auto text-yellow text-md font-bold w-40 text-right leading-6"
        >
          {{ $t('EXTRACT_VENDA') }}
        </div>
      </div>

      <div class="overflow-hidden row-span-7 my-8">
        <Carousel
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => getList(slide)"
        />
        <Balance />
        <Tabe :tabs="tabs" @click="(filter)=> getFilter(filter)" />
        <List :lists="lists"/>
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Balance from '@/components/Balance.vue'
import Tabe from '@/components/Tab.vue'
import List from '@/components/List.vue'

import { useRouter } from 'vue-router'

export default {
  components: { Carousel, Balance, Tabe, List },
  props: {
    type: { type: String, required: true}
  },
  setup() {
    const router = useRouter()

    return { router }
  },
  computed: {
    lojas() {
      return this.$store.state.list.lojas
    },
    lists() {
      return this.$store.state.list.movimentacoes
    },
  },
  methods: {
    getFilter(filter) {
      this.$store.dispatch('list/getList', { type: this.type, filter: filter})
    },
  },
}
</script>
