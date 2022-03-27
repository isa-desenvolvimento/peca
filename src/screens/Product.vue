<template>
  <CarouselListText type="estoque" :title="$t('MY_PRODUCT')" estoque="1" />
</template>

<script>
import CarouselListText from '@/template/CarouselListText.vue'

export default {
  components: { CarouselListText },
}
</script>
