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
            <div class="px-6 md:px-8 mx-auto max-w-lg min-w-min">
              <Carousel
                icon="bg-icon-marcador-menu"
                :onclick="(slide) => setFilter('id', slide)"
                type="extrato"
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
            type="extrato"
            :balance="lists?.saldoatual"
            :onclick="() => onclickWithDraw(id_loja)"
          />

          <Tabe
            v-if="hasPeriodo"
            :id-loja="id_loja"
            type="extrato"
            @submit="(filter) => setFilter('periodo', filter)"
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

import { useStore, mapState } from 'vuex'

export default {
  components: { Carousel, Balance, Tabe, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    hasBalance: { type: Boolean, required: false, default: false },
    hasPeriodo: { type: Boolean, required: false, default: false },
    onclickWithDraw: { type: Function, required: false },
  },
  setup(props) {
    const { dispatch } = useStore()
    self.props = props

    return { dispatch }
  },
  data() {
    return {
      showmore: false,
      interval: null,
      periodo: { data_inicio: null, data_fim: null },
      id_loja: 0,
    }
  },
  computed: mapState({
    lists: (state) => state.list[self.props.type],
  }),
  mounted() {
    const tab0 = document.getElementById(`button_tap_0`)

    this.interval = setInterval(() => {
      if (tab0) {
        clearInterval(this.interval)

        const _dates = periodoDate(7)
        this.setPeriodo(_dates)
        this.setId(0)

        tab0.click()
      }
    }, 100)
  },

  unmounted() {
    clearInterval(this.interval)
  },
  methods: {
    setFilter(item, value) {
      this.showmore = false

      switch (item) {
        case 'id':
          this.setId(value)
          this.setPeriodo(false)
          break
        default:
          this.setPeriodo(value)
          break
      }
      this.getFilter()
    },
    setId(id) {
      this.id_loja = id
    },
    setPeriodo(periodo) {
      if (periodo.data_inicio && periodo.data_fim) {
        sessionStorage.setItem('periodo', JSON.stringify(periodo))
      } else {
        periodo = JSON.parse(sessionStorage.getItem('periodo'))
      }

      this.periodo = periodo
    },
    getFilter() {
      if (
        this.periodo?.data_inicio &&
        this.periodo?.data_fim &&
        this.id_loja !== undefined
      ) {
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
