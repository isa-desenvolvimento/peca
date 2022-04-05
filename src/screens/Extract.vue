<template>
  <CarouselList
    type="extrato"
    :title="$t('EXTRACT_VENDA')"
    has-balance
    has-periodo
    :onclickWithDraw="(loja)=> $router.push(`/saque/${loja}`)"
  />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
}
</script>
