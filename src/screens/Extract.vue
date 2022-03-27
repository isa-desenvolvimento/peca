<template>
  <CarouselList
    type="extrato"
    :title="$t('EXTRACT_VENDA')"
    has-balance
    has-periodo
  />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
}
</script>
