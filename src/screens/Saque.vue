<template>
  <translation name="fade">
    <div class="bg-orange h-screen grid grid-rows-7 p-8 relative">
      <Header :title="$t('WITHDRAWAL_REQUEST')" />

      <div
        class="overflow-hidden row-span-6 my-8 md:w-6/12 md:mx-auto relative"
      >
        <section>
          <div
            class="col-span-4 f mt-4 uppercase bg-orange font-manrope py-2 border-red placeholder-red text-red text-left text-md font-bold"
          >
            {{ $t('DATA') }}
          </div>

          <TitleSubtitle :title="$t('STORE')" :subtitle="value.loja" />
          <TitleSubtitle :title="$t('NAME')" :subtitle="value.nome" />
          <TitleSubtitle :title="$t('BANK')" :subtitle="value.banco" />

          <div class="grid grid-cols-4">
            <TitleSubtitle
              :title="$t('TYPE_ACCOUNT')"
              :subtitle="value.tipo_conta"
            />
            <TitleSubtitle
              :title="$t('OPERATION')"
              :subtitle="value.operacao"
            />
            <TitleSubtitle :title="$t('AGENCY')" :subtitle="value.agencia" />
            <TitleSubtitle :title="$t('ACCOUNT')" :subtitle="value.conta" />
          </div>
        </section>
        <hr class="col-span-2 text-yellow opacity-25 my-2" />

        <section class>
          <div
            class="col-span-4 mt-4 uppercase bg-orange font-manrope py-2 border-red placeholder-red text-red text-left text-md font-bold"
          >
            {{ $t('WITHDRAWAL') }}
          </div>

          <div class="grid grid-cols-4">
            <TitleSubtitle
              :title="$t('TRANSFER_RATE')"
              :subtitle="value.tipo_conta"
              class="col-span-2"
            />
            <TitleSubtitle
              :title="$t('BALANCE_ON')"
              :subtitle="value.operacao"
              class="col-span-2"
            />
          </div>

          <form>
            <TitleSubtitle
              :title="$t('AMOUNT_TO_WITHDRAW')"
              subtitle=""
              class="col-span-2"
            />
            <input
              v-model="value.saque"
              v-mask="'R$ ####,##'"
              name="money"
              type="num"
              required
              placeholder="R$ 0,00"
              class="appearance-none uppercase w-full border bg-orange font-manrope mt-[-2rem] px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              @input="value.saque.toFixed(2)"
            />

            <div>
              <button
                type="submit"
                class="appearance-none rounded-md uppercase font-manrope font-bold bg-red mx-auto group relative leading-normal flex justify-center mt-8 py-2 px-10 text-xs text-orange"
              >
                {{ $t('REQUEST_TRANSFER') }}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </translation>
</template>

<script>
import Header from '@/components/Header.vue'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import TitleSubtitle from '@/components/TitleSubtitle.vue'

export default {
  components: { Header, TitleSubtitle },
  props: {
    type: { type: String, required: true },
    title: { type: String, required: true },
    estoque: { type: String, required: true },
    hasCarousel: { type: Boolean, required: false, default: true },
  },
  setup() {
    const route = useRoute()
    const id_loja = route.params.id_loja || null

    const { dispatch } = useStore()

    const value = {
      loja: 'hdkuhsakda',
      nome: 'haukdhakda',
      banco: 'haukdhakda',
      tipo_conta: 'haukdhakda',
      operacao: 'haukdhakda',
      agencia: 'haukdhakda',
      conta: 'haukdhakda',
      saque: 0,
    }

    return { id_loja, dispatch, value }
  },
  computed: {
    lojas() {
      return this.$store.state.list?.lojas
    },
    lists() {
      return this.$store.state.list[this.type]
    },
  },

  methods: {
    setId(id) {
      this.id_loja = id
      this.getFilter()
    },

    getFilter() {
      this.dispatch('list/getListEstoque', {
        type: this.type,
        id_loja: this.id_loja,
        estoque: this.estoque,
      })
    },

    setItem() {
      this.$router.push(`/product/${this.id_loja}`)
    },
  },
}
</script>
