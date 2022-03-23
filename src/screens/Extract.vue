<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <div class="flex gap-4 row-span-1">
        <div>
          <button
            class="btn bg-gray opacity-20 h-12 w-12 p-2 rounded-full bg-cover bg-no-repeat bg-center bg-icon-extrato"
          ></button>
        </div>
        <div>
          <button
            class="btn bg-gray opacity-20 h-12 w-12 p-2 rounded-full bg-cover bg-no-repeat bg-center bg-icon-extrato"
          ></button>
        </div>
        <div
          class="h-10 ml-auto text-yellow text-md font-bold w-40 text-right leading-6"
        >
          {{ $t('EXTRACT_VENDA') }}
        </div>
      </div>

      <div class="overflow-hidden row-span-7 my-8">
        <Carousel
          :slides="slides"
          icon="bg-icon-marcador-menu"
          :onclick="(slide) => getList(slide)"
        />
        <Balance />
        <Tabe :tabs="tabs" @click="getFilter" />
        <List v-for="lists in extracts" :key="lists" :lists="lists.lists"  :title="lists.title"/>
      </div>
    </div>
  </translation>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Balance from '@/components/Balance.vue'
import Tabe from '@/components/Tab.vue'
import List from '@/components/List.vue'

export default {
  components: { Carousel, Balance, Tabe, List },
  data() {
    return {
      tabs: [
        `7 ${this.$t('DAY')}`,
        `15 ${this.$t('DAY')}`,
        `30 ${this.$t('DAY')}`,
        this.$t('OTHERS'),
      ],
      slides: [
        { title: 'teste1' },
        { title: 'teste2' },
        { title: 'teste3' },
        { title: 'teste4' },
      ],
      extracts: [{
        title: 'MARÇO 2022',
        lists: [
          {
            title: '7 MAR',
            items: [
              {
                title: 'R$ 556,00',
                description:
                  'DFVEST XADREZ/VERMELHO ROSA TRANSPASSADO RICHARDS 42',
                iconPlus: true,
              },
              {
                title: 'R$ 46.00',
                description:
                  'DFVEST XADREZ/VERMELHO ROSA TRANSPASSADO RICHARDS 42',
                iconPlus: true,
              },
              {
                title: 'R$ 46.00',
                description:
                  'DFVEST XADREZ/VERMELHO ROSA TRANSPASSADO RICHARDS 42',
                iconPlus: false,
              },
            ],
          },
        ],
      }],
    }
  },
  methods: {
    getFilter(e) {
      console.log(e)
    },
  },
}
</script>
