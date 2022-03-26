<template>
  <CarouselList type="estoque" :title="$t('MY_PRODUCT')" />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
}
</script>
