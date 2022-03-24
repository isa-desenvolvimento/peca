<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :type="title" />

      <div class="overflow-hidden row-span-7 my-8">
        <Carousel
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => getList(slide)"
        />
        <Balance />
        <Tabe :tabs="tabs" @click="(filter) => getFilter(filter)" />
        <List :lists="lists" />
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import Balance from '@/components/Balance.vue'
import Tabe from '@/components/Tab.vue'
import List from '@/components/List.vue'

import { useRouter } from 'vue-router'

export default {
  components: { Carousel, Balance, Tabe, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
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
      this.$store.dispatch('list/getList', { type: this.type, filter: filter })
    },
  },
}
</script>
