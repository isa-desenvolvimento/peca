<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :title="title" />

      <div class="overflow-hidden row-span-6 my-8">
        <Carousel
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => setFilter('id', slide)"
        />
        <Balance :type="type" :balance="lists?.saldoatual" />
        <Tabe @click="(filter) => setFilter('periodo', filter)" />
        <List :lists="lists?.movimentos" />
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
import { periodoDate } from '@/util/date'

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { Carousel, Balance, Tabe, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter()
    const { dispatch } = useStore()
    const id_loja = null
    const periodo = periodoDate(7)
    const isFirst = true

    dispatch('list/getLojas', props.type)
    return { router, id_loja, periodo, dispatch, isFirst }
  },
  computed: {
    lojas() {
      return this.$store.state.list?.lojas
    },
    lists() {
      return this.$store.state.list[this.type]
    },
  },
  mounted() {
    const tab0 = document.getElementById(`button_tap_0`)

    const interval = setInterval(() => {
      if (tab0 && this.lojas?.length) {
        clearInterval(interval)

        this.setPeriodo(this.periodo)
        this.setId(this.lojas[0].id)

        tab0.click()
        tab0.focus()
      }
    }, 100)
  },
  methods: {
    setFilter(item, value) {
      switch (item) {
        case 'id':
          this.isFirst = true
          this.setId(value)
          break
        default:
          this.isFirst = true
          this.setPeriodo(value)
          break
      }
      this.getFilter()
    },
    setId(id) {
      this.id_loja = id
    },
    setPeriodo(periodo) {
      this.periodo = periodo
    },
    getFilter() {
      if (this.isFirst && this.periodo.data_inicio && this.periodo.data_fim) {
        this.isFirst = false
        this.dispatch('list/getFilter', {
          type: this.type,
          id_loja: this.id_loja,
          ...this.periodo,
        })
      }
    },
  },
}
</script>
