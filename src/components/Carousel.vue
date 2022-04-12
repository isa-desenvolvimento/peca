<template>
  <Carousel
    ref="nav"
    :items-to-show="3"
    :wrap-around="true"
    :style="{
      position: 'inherit !important',
    }"
  >
    <Slide v-for="(slide, index) in lojas" :key="slide">
      <div
        class="carousel__item w-full grid grid-cols-3 place-content-center py-2"
        :class="color"
        @click="() => onClickSlide(slide, index)"
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
          class="col-span-3 text-yellow-ligth my-4 opacity-25"
        />
        <div
          v-if="slide.valor_consolidado"
          class="col-span-3 opacity-15 text-orange font-manrope text-xs"
        >
          {{ format(slide.valor_consolidado) }}
        </div>
      </div>
    </Slide>

    <template #addons="{ slidesCount, currentSlide }">
      <Navigation v-if="slidesCount > 1">
        <template #next>
          <button @click="() => onclick(slides[currentSlide + 1].id)">
            {{ '>' }}
          </button>
        </template>
        <template #prev>
          <button @click="() => onclick(slides[currentSlide - 1].id)">
            {{ '<' }}
          </button>
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { inject } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import { useStore, mapState } from 'vuex'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    onclick: { type: Function, required: true },
    type: { type: String, required: true },
    color: { type: String, required: false },
    icon: { type: String, required: true, default: 'con-marcador-menu' },
  },
  setup(props) {
    const { dispatch } = useStore()
    dispatch('list/getLojas', props.type)

    const nav = inject('nav', {})

    return { nav }
  },
  computed: mapState({
    lojas: (state) => state.list?.lojas || [],
  }),
  methods: {
    format(value) {
      switch (this.type) {
        case 'extrato':
          return `R$ ${value}`
        default:
          return `${value} peça(s)`
      }
    },
    onClickSlide(slide, index) {
      this.nav.slideTo(index)
      this.onclick(slide.id)
    },
  },
}
</script>

<style>
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
  background: transparent !important;
  border: none;
  color: #ffa301 !important;
}
</style>
