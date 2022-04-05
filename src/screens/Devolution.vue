<template>
  <CarouselListText
    type="devolucao"
    :title="$t('PENDING_RETURNS')"
    :estoque="null"
  />
</template>

<script>
import CarouselListText from '@/template/CarouselListText.vue'

export default {
  components: { CarouselListText },
  setup() {
    document.title = 'Clube Peça Rara | Devolução'
  },
}
</script>
