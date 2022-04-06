<template>
  <Carousel
    :items-to-show="3"
    :wrap-around="true"
    :style="{
      position: slides?.length > 1 ? 'inherit !important' : 'relative',
    }"
  >
    <Slide v-for="slide in slides" :key="slide">
      <div
        class="carousel__item w-full grid grid-cols-3 place-content-center py-2"
        :class="color"
        @click="() => onclick(slide.id)"
      >
        <div
          class="mx-auto h-10 w-10 bg-contain bg-no-repeat bg-center col-span-3"
          :class="icon"
        ></div>
        <div class="col-span-3 text-orange font-manrope text-xs">
          {{ slide.nome }}
        </div>
        <hr
          v-if="slide.valor_consolidado"
          class="col-span-3 text-yellow opacity-25 my-4 opacity-25"
        />
        <div
          v-if="slide.valor_consolidado"
          class="col-span-3 opacity-25 text-orange font-manrope text-xs"
        >
          {{ format(slide.valor_consolidado) }}
        </div>
      </div>
    </Slide>

    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 1" />
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
    slides: { type: Array },
    onclick: { type: Function },
    type: { type: String },
    color: { type: String },
    icon: { type: String, required: true, default: 'con-marcador-menu' },
  },
  methods: {
    format(value) {
      switch (this.type) {
        case 'extrato':
          return `R$ ${value.toFixed(2)}`
        case 'estoque':
          return `${value} peça(s)`
        default:
          break
      }
    },
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

.carousel__prev {
  top: 25%;
  left: 1rem;
  /* transform: translate(-50%, -50%); */
}

.carousel__next {
  top: 25%;
  right: 1rem;
  /* transform: translate(-50%, -50%); */
}

.carousel__slide--active > div {
  transform: scale(1.1);
}

.carousel__slide > div:not(.carousel__slide--active > div) {
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
