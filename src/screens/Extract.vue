<template>
  <CarouselList
    type="extrato"
    :title="$t('EXTRACT_VENDA')"
    has-balance
    has-periodo
    :onclick-with-draw="(loja) => $router.push(`/saque/${loja}`)"
  />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
  setup() {
    document.title = 'Clube Peça Rara | Extrato'
  },
  mounted() {
    this.$store.dispatch('form/setLoading')
  },
}
</script>
