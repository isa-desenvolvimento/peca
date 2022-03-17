<template>
  <section class="overflow-hidden my-5">
    <Carousel :slides="slides" @click="(slide) => getList(slide)" />
  </section>
  <section v-show="list" class="overflow-hidden my-5">
    <Card v-bind="list" />
  </section>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'

export default {
  components: { Carousel, Card },
  props: {
    slides: { type: Array, required: true },
    type: { type: String, required: true },
  },
  computed: {
    list() {
      return this.$store.state.list.list ? this.$store.state.list.list[0] : {}
    },
  },
  created() {
    this.$store.dispatch('list/getList', {
      type: this.type,
      value: this.slides[0],
    })
  },
  methods: {
    getList(slide) {
      this.$store.dispatch('list/getList', { type: this.type, value: slide })
    },
  },
}
</script>
