<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :title="title" />

      <div
        class="overflow-hidden row-span-6 my-8 md:w-6/12 md:mx-auto relative"
      >
        <Carousel
          v-if="hasCarousel"
          :slides="lojas"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => setFilter('id', slide)"
          :type="type"
          color="bg-yellow"
        />

        <hr v-if="hasCarousel" class="col-span-2 text-yellow opacity-20 my-4" />
        <div
          v-for="(list, index) in lists"
          :key="index"
          class="overflow-y-auto max-h-[calc(20vh - 2rem)]"
        >
          <span v-if="lists?.estoque.length" class="text-red text-sm font-bold">
            {{ $t(index.toUpperCase()) }}
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

          <List :lists="list" :onclick="setItem" />
        </div>
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { Carousel, List, Header },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    estoque: { type: String, required: true },
    hasCarousel: { type: Boolean, required: false, default: true },
  },
  setup(props) {
    const route = useRoute()
    const id_loja = route.params.id_loja || null

    const { dispatch } = useStore()

    if (id_loja) {
      dispatch('list/getListEstoque', {
        type: props.type,
        id_loja: id_loja,
        estoque: props.estoque,
      })
    } else {
      dispatch('list/getLojas', props.type)
    }

    return { id_loja, dispatch }
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

    setItem() {
      this.$router.push(`/product/${this.id_loja}`)
    },
  },
}
</script>
