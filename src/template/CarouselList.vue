<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :title="title" />

      <div
        class="overflow-hidden row-span-6 my-8 md:w-6/12 md:mx-auto relative"
      >
        <Carousel
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => setFilter('id', slide)"
          :type="type"
          color="bg-red"
        />

        <hr v-if="!hasBalance" class="col-span-2 text-yellow text-manrope text-xs opacity-20 my-4" />
        <Balance
          v-if="hasBalance"
          :type="type"
          :balance="lists?.saldoatual"
          :onclick="() => onclickWithDraw(this.id_loja)"
        />

        <TitleSub
          v-else
          title="item.valor"
          description="item.descricao ? item.descricao : ''"
          class="my-6"
        />

        <Tabe
          v-if="hasPeriodo"
          :id_loja="id_loja"
          :type="type"
          @click="(filter) => setFilter('periodo', filter)"
        />
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
import TitleSub from '@/components/TitleSub.vue'

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { Carousel, Balance, Tabe, List, Header, TitleSub },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    hasBalance: { type: Boolean, required: false, default: false },
    hasPeriodo: { type: Boolean, required: false, default: false },
    onclickWithDraw: { type: Function, required: false },
  },
  setup(props) {
    const router = useRouter()
    const { dispatch } = useStore()
    const id_loja = null
    const isFirst = true
    const periodo = {}

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

        if (this.type === 'extrato') {
          const _dates = periodoDate(7)
          this.setPeriodo(_dates)
        }

        this.setId(this.lojas[0].id)

        tab0.click()
        tab0.focus()
      }
    }, 100)
  },
  methods: {
    format() {
      switch (this.type) {
        case 'extrato':
          return this.lists?.movimentos
        case 'estoque':
          return this.lists?.estoque
        default:
          break
      }
    },
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
