<template>
  <CarouselList type="estoque" :title="$t('PRODUCT')" />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
}
</script>
