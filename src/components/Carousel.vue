<template>
  <Carousel :items-to-show="3" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div
        class="carousel__item bg-red text-white w-full grid grid-cols-3 place-content-center"
        @click="onclick"
      >
        <div
          class="mx-auto h-10 w-10 bg-contain bg-no-repeat bg-center text-white text-sm col-span-3"
          :class="icon"
        ></div>
        <div class="col-span-3">{{ slide.title }}</div>
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
  props: {
    slides: { type: Array },
    onclick: { type: Function },
    icon: { type: String, required: true, default: 'con-marcador-menu' },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>

<style>
.carousel__item {
  min-height: 8rem;
  /* font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.carousel__slide {
  padding: 10px;
}

.carousel__slide--active > div {
  transform: scale(1.1);
}

.carousel__slide--visible > div:not(.carousel__slide--active > div) {
  /* background-color: #c63f3b; */
  opacity: 20%;
  transition: opacity 0.5s linear;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background: transparent;
  border: none;
  color: #ffa301;
}
</style>
