<template>
  <transition name="fade">
    <div
      class="bg-orange h-screen p-8 relative overflow-y-auto"
      @scroll="
        () => {
          showmore = true
        }
      "
    >
      <Header :title="title" />

      <div class="grid grid-rows-7 md:mx-auto">
        <div class="row-span-6 my-8 md:w-6/12 mx-auto">
          <div class="relative">
            <div class="px-6 md:px-8 mx-auto">
              <Carousel
                :slides="lojas"
                icon="bg-icon-marcador-menu"
                :onclick="(slide) => setFilter('id', slide)"
                :type="type"
                color="bg-red"
              />
            </div>
          </div>

          <hr
            v-if="!hasBalance"
            class="col-span-2 text-yellow text-manrope text-xs opacity-20 my-4"
          />
          <Balance
            v-if="hasBalance"
            :id="id_loja"
            :type="type"
            :balance="lists?.saldoatual"
            :onclick="() => onclickWithDraw(id_loja)"
          />

          <TitleSub
            v-else
            title="item.valor"
            description="item.descricao ? item.descricao : ''"
            class="my-6"
          />

          <Tabe
            v-if="hasPeriodo"
            :id-loja="id_loja"
            :type="type"
            @click="(filter) => setFilter('periodo', filter)"
          />
          <List v-if="lists?.movimentos?.length" :lists="lists?.movimentos" />

          <span v-else class="text-red text-sm font-regular uppercase">
            {{ $t('NOT_DATA_SELECT') }}
          </span>

          <a v-if="showmore" href="#jump_to_me">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="animate-bounce m-auto w-10 h-10 p-2 bg-yellow rounded-full text-white text-center inset-x-0 bottom-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                class="origin-center"
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </transition>
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
import { useStore, mapState } from 'vuex'

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

    self.props = props

    dispatch('list/getLojas', props.type)
    return { router, id_loja, periodo, dispatch, isFirst }
  },
  data() {
    return { showmore: false, interval: null }
  },
  computed: mapState({
    lojas: (state) => state.list?.lojas,
    lists: (state) => state.list[self.props.type],
  }),
  mounted() {
    if (this.lojas?.length) {
      if (this.type === 'extrato') {
        const _dates = periodoDate(7)
        this.setPeriodo(_dates)
      }

      this.setId(this.lojas[0].id)
    }
  },
  unmounted() {
    clearInterval(this.interval)
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
      // const tab0 = document.getElementById(`button_tap_0`)
      this.showmore = false

      switch (item) {
        case 'id':
          // tab0.focus()
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
