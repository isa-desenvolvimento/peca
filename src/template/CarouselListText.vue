<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :title="title" />

      <div class="overflow-hidden row-span-6 my-8">
        <Carousel
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => setFilter('id', slide)"
          :type="type"
        />

        <hr class="col-span-2 text-yellow opacity-20 my-4" />
        <span v-if="lists?.estoque.length" class="text-red text-sm font-bold">
          {{ $t('IN_STOCK') }}
        </span>
        <span v-else class="text-red text-sm font-regular">
          {{ $t('THERE_ARE_NO_PRODUCTS') }}
        </span>
        <div
          v-if="!lists?.estoque.length"
          @click="$router.push('products-outhers')"
        >
          <span class="text-red text-sm font-bold">
            {{ $t('SOLD_RETURNED_CANCELED') }}
          </span>
        </div>

        <List :lists="lists?.estoque" />
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { Carousel, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    estoque: { type: String, required: true },
  },
  setup(props) {
    const router = useRouter()
    const { dispatch } = useStore()
    const id_loja = null

    dispatch('list/getLojas', props.type)
    return { router, id_loja, dispatch }
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
    const interval = setInterval(() => {
      if (this.lojas?.length) {
        clearInterval(interval)
        this.setId(this.lojas[0].id)
      }
    }, 100)
  },
  methods: {
    setId(id) {
      this.id_loja = id
      this.getFilter()
    },

    getFilter() {
      this.dispatch('list/getListEstoque', {
        type: this.type,
        id_loja: this.id_loja,
        estoque: this.estoque,
      })
    },
  },
}
</script>
