<template>
  <CarouselListText
    type="estoque"
    :title="$t('MY_PRODUCT')"
    estoque="1"
    color="bg-yellow"
  />
</template>

<script>
import CarouselListText from '@/template/CarouselListText.vue'

export default {
  components: { CarouselListText },
  setup() {
    document.title = 'Clube Peça Rara | Estoque'
  },
  mounted() {
    this.$store.dispatch('form/setLoading')
  },
}
</script>
