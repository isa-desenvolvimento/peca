<template>
  <CarouselListText
    type="devolucao"
    :title="$t('PENDING_RETURNS')"
    estoque="1"
  />
</template>

<script>
import CarouselListText from '@/template/CarouselListText.vue'

export default {
  components: { CarouselListText },
}
</script>
