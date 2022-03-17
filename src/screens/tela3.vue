<template>
  <carousel-list :slides="slides" type="tela3" />
</template>

<script>
import CarouselList from '@/template/CarouselList.vue'

export default {
  components: { CarouselList },
  data() {
    return {
      slides: [
        { title: 'teste1' },
        { title: 'teste2' },
        { title: 'teste3' },
        { title: 'teste4' },
      ],
    }
  },
}
</script>
