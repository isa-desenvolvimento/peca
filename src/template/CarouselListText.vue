<template>
  <translation name="fade">
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
                v-if="hasCarousel"
                id="jump_to_me"
                icon="bg-icon-marcador-menu"
                :onclick="(slide) => setId(slide)"
                :type="type"
                :color="color"
              />
            </div>
          </div>
          <hr
            v-if="hasCarousel"
            class="col-span-2 text-yellow opacity-20 my-4"
          />
          <div v-for="(list, index) in lists" :key="index">
            <span
              v-if="lists?.movimentos.length"
              class="text-red text-sm font-bold font-manrope"
            >
              {{ $t(index.toUpperCase()) }}
            </span>
            <span v-else class="text-red text-sm font-regular uppercase">
              {{ $t('THERE_ARE_NO_PRODUCTS') }}
            </span>

            <div class="pb-8">
              <List
                v-if="lists?.movimentos.length"
                :lists="list"
                :onclick="setItem"
                :has-checkbox="type == 'devolucao'"
              />

              <div
                v-else
                class="mt-8 cursor-pointer"
                @click="$router.push(`/product/${id_loja}`)"
              ></div>
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
      </div>
      <div v-if="estoque == 1" class="mt-8 cursor-pointer" @click="goToNext">
        <span class="text-red text-sm font-bold">
          {{ $t('SOLD_RETURNED_CANCELED') }}
        </span>
      </div>
      <div
        v-if="type == 'devolucao'"
        class="mt-8 cursor-pointer"
        @click="goToNext"
      >
        <button
          disabled
          type="button"
          class="appearance-none rounded-md uppercase font-manrope font-bold bg-red mx-auto group relative leading-normal flex justify-center py-2 px-4 text-xs text-orange disabled:opacity-50 disabled:cursor-not-allowed"
          @click="send"
        >
          {{ $t('SEND_DONATIVOS') }}
        </button>
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'

import { useRoute } from 'vue-router'
import { useStore, mapState } from 'vuex'

export default {
  components: { Carousel, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    color: { type: String, required: true },
    estoque: { type: String, required: true },
    hasCarousel: { type: Boolean, required: false, default: true },
  },
  setup(props) {
    const route = useRoute()
    const id_loja =
      !route.params.id_loja || route.params.id_loja === 'undefined'
        ? 0
        : route.params.id_loja
    self.props = props
    const { dispatch } = useStore()

    if (route.params.id_loja) {
      dispatch('list/getListEstoque', {
        type: props.type,
        id_loja: id_loja,
        estoque: props.estoque,
      })
    }

    return { id_loja, dispatch }
  },
  data() {
    return { showmore: false }
  },
  computed: {
    ...mapState({
      lists: (state) => state.list[self.props.type],
    }),
  },
  methods: {
    setId(id) {
      this.id_loja = id
      this.getFilter()
      this.showmore = false
    },

    getFilter() {
      this.dispatch('list/getListEstoque', {
        type: this.type,
        id_loja: this.id_loja || 0,
        estoque: this.estoque,
      })
    },

    setItem() {
      this.$router.push(`/product/${this.id_loja}`)
    },
    goToNext() {
      const loja = this.id_loja || 0
      this.$router.push(`/product/${loja}`)
    },

    send() {},
  },
}
</script>
