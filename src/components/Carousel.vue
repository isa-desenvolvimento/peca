<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item bg-sky-600" @click="$emit('click', slide)">
        {{ slide.title }}
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    slides: { type: Array, required: true },
    onclick: { type: Function, required: false },
  },
}
</script>

<style>
.carousel__item {
  min-height: 200px !important;
  width: 95% !important;
  font-size: 20px !important;
  border-radius: 8px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  cursor: pointer;
}

.carousel__item:hover {
  transform: scale(1.01);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box !important;
  border: 5px solid white !important;
  margin: 0 1.5rem;
  background-color: #0284c7;
}
.carousel__viewport {
  overflow: hidden;
  margin: 0 1rem !important;
}
</style>
