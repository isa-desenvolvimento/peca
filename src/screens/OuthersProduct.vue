<template>
  <CarouselListText
    type="estoque"
    :title="$t('MY_PRODUCT')"
    estoque="0"
    :has-carousel="false"
  />
</template>

<script>
import CarouselListText from '@/template/CarouselListText.vue'

export default {
  components: { CarouselListText },
  setup() {
    document.title = 'Clube Peça Rara | Estoque'
  },
}
</script>
