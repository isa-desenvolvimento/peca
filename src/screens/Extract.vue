<template>
  <translation name="fade">
    <CarouselList type="extrato" />
  </translation>
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'
import { useStore } from 'vuex'

export default {
  components: { CarouselList },
  setup() {
    const { dispatch } = useStore()
    dispatch('list/getList', 'extrato')
  },
}
</script>
