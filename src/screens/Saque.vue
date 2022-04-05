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

          <TitleSubtitle :title="$t('STORE')" :subtitle="list?.fornecedor?.loja" />
          <TitleSubtitle :title="$t('NAME')" :subtitle="list?.fornecedor?.nome_completo" />
          <TitleSubtitle :title="$t('BANK')" :subtitle="list?.fornecedor?.banco_nome" />

          <div class="grid grid-cols-9 gap-1">
            <TitleSubtitle
              :title="$t('TYPE_ACCOUNT')"
              :subtitle="list?.fornecedor?.banco_tipo_conta_desc"
              class="col-span-2"
            />
            <TitleSubtitle
              :title="$t('OPERATION')"
              :subtitle="list?.fornecedor?.cod_operacao"
              class="col-span-3"
            />
            <TitleSubtitle :title="$t('AGENCY')" :subtitle="list?.fornecedor?.banco_ag"  class="col-span-2"/>
            <TitleSubtitle :title="$t('ACCOUNT')" :subtitle="list?.fornecedor?.banco_cc" class="col-span-2"/>
          </div>
        </section>
        <hr class="col-span-2 text-yellow opacity-25 my-2" />

        <section>
          <div
            class="col-span-4 mt-4 uppercase bg-orange font-manrope py-2 border-red placeholder-red text-red text-left text-md font-bold"
          >
            {{ $t('BALANCE') }}
          </div>

          <div class="grid grid-cols-4">
            <TitleSubtitle
              :title="$t('TRANSFER_RATE')"
              :subtitle="list?.fornecedor?.banco_tipo_conta_desc"
              class="col-span-2"
            />
            <TitleSubtitle
              :title="$t('BALANCE_ON')"
              :subtitle="fornecedor?.saldo_disponivel"
              class="col-span-2"
            />
          </div>

          <form action="#" @submit="withDrawal">
            <TitleSubtitle
              :title="$t('AMOUNT_TO_WITHDRAW')"
              subtitle=""
              class="col-span-2"
            />
            <input
              v-model="saque"
              v-mask="'R$ ####,##'"
              name="money"
              type="num"
              required
              placeholder="R$ 0,00"
              class="appearance-none uppercase w-full border bg-orange font-manrope mt-[-2rem] px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              @input="saque.toFixed(2)"
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
    title: { type: String, required: true },
    hasCarousel: { type: Boolean, required: false, default: true },
  },
  setup() {
    const route = useRoute()
    const loja = route.params.loja || null
    const type = `saque/pontual/${loja}`

    const { dispatch } = useStore()
    dispatch('list/getList', type)

    return { loja, dispatch, type, saque: null }
  },
  computed: {
    list() {
      return this.$store.state.list[this.type] 
    },
  },

  methods: {
    withDrawal(e) {
      e.preventDefault()

      const withDrawalValue =  {
        loja: parseInt(this.loja),
        value: this.saque.split('R$ ')[1],
        notAdd: true
      }

      this.dispatch('form/create', {
        type: `saque/pontual/${this.loja}`,
        value: withDrawalValue,
      })
    }
  },
}
</script>
