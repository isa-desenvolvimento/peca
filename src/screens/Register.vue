<template>
  <div class="bg-orange h-screen grid items-center w-full">
    <div class="mx-auto" uppercase>
      <h3
        class="text-red text-md font-gotham w-[17rem] text-left font-bold ml-10"
      >
        {{ $t('YOUR_REGISTER') }}
      </h3>
      <form
        class="overflow-y-auto"
        uppercase
        action="#"
        method="POST"
        @submit="submit"
      >
        <div class="w-4/5 mx-auto">
          <div
            class="text-center text-white grid justify-center grid grid-flow-row-dense grid-cols-4"
          >
            <div
              class="appearance-none col-span-4 mt-4 uppercase bg-orange font-manrope py-2 border-red placeholder-red text-red text-left font-bold"
            >
              {{ $t('PERSONAL_DATA') }}
            </div>
            <input
              v-model="value.doc"
              v-mask="'###.###.###-##'"
              name="cpf"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CPF')"
            />

            <input
              v-model="value.nome"
              name="name"
              type="text"
              required
              class="appearance-none col-span-2 uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NAME')"
            />

            <input
              v-model="value.sobrenome"
              name="sobrenome"
              type="text"
              required
              class="appearance-none col-span-2 uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('LAST_NAME')"
            />

            <input
              v-model="value.rg"
              v-mask="'########'"
              name="rg"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('RG')"
            />

            <input
              v-model="data_nascimento"
              v-mask="'##/##/####'"
              name="dt_birthday"
              type="text"
              required
              class="appearance-none w-full uppercase col-span-4 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('BIRTHDAY')"
            />
            <input
              v-model="value.tel"
              v-mask="'(##) ####-####'"
              name="tel"
              type="tel"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('TELEPHONE')"
            />
            <input
              v-model="value.cel"
              v-mask="'(##) ####-####'"
              name="cel"
              type="tel"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CELPHONE')"
            />

            <input
              v-model="value.email"
              name="email"
              type="email"
              required
              class="appearance-none col-span-4 uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('EMAIL')"
            />

            <div
              class="appearance-none col-span-4 uppercase mt-4 bg-orange py-2 border-red font-manrope placeholder-red text-red text-left font-bold"
            >
              {{ $t('ADDRESS') }}
            </div>

            <input
              v-model="value.cep"
              v-mask="'#####-###'"
              name="cep"
              type="text"
              required
              class="appearance-none col-span-2 uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CEP')"
              @change="getAddress"
            />

            <input
              v-model="value.logradouro"
              name="logradouro"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('PLACE')"
            />

            <select
              v-model="value.cidade"
              :placeholder="$t('CITY')"
              class="form-select form-select-sm appearance-none font-manrope col-span-3 block w-full appearance-none uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              aria-label=".form-select-sm example"
            >
              <option v-for="op in dropdownCidade" :key="op.id" :value="op.id">
                {{ op.nome }}
              </option>
            </select>

            <!-- <input
              v-model="value.cidade"
              name="city"
              type="text"
              required
              class="appearance-none uppercase col-span-3 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CITY')"
            /> -->

            <select
              v-model="value.uf"
              :placeholder="$t('UF')"
              class="form-select form-select-sm placeholder-red appearance-none font-manrope col-span-1 block w-full appearance-none uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              aria-label=".form-select-sm example"
              @change="() => getCities(value.uf.id)"
            >
              <option v-for="op in dropdownUF" :key="op.cod" :value="op.id">
                {{ op.cod }}
              </option>
            </select>

            <!-- <input
              v-model="value.uf"
              name="uf"
              type="text"
              maxlength="2"
              required
              class="appearance-none uppercase col-span-1 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('UF')"
            /> -->

            <input
              v-model="value.complemento"
              name="complement"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('COMPLEMENT')"
            />

            <input
              v-model="value.num"
              name="number"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NUMBER')"
            />

            <input
              v-model="value.bairro"
              name="district"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('DISTRICT')"
            />

            <div
              class="appearance-none col-span-4 font-manrope uppercase mt-4 bg-orange py-2 border-red placeholder-red text-red text-left font-bold"
            >
              {{ $t('BANK_DATA') }}
            </div>

            <select
              v-model="value.banco"
              class="form-select form-select-sm appearance-none col-span-4 block w-full font-manrope appearance-none uppercase border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              aria-label=".form-select-sm example"
            >
              <option v-for="op in dropdownBanco" :key="op.id" :value="op.id">
                {{ op.cod }} - {{ op.nome }}
              </option>
            </select>

            <input
              v-model="value.agencia"
              v-mask="'####-#'"
              name="ag"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('AGENCY')"
            />

            <input
              v-model="value.conta"
              v-mask="'######-#'"
              name="conta"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('ACCOUNT')"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none rounded-md uppercase font-manrope font-bold bg-red mx-auto group relative leading-normal flex justify-center mt-8 py-2 px-10 text-xs text-orange bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapState, useStore } from 'vuex'
import { stringFormartUS } from '@/util/date'

export default {
  setup() {
    const value = ref({
      doc: sessionStorage.doc,
      nome: '',
      sobrenome: '',
      rg: '',
      data_nascimento: null,
      tel: '',
      cel: '',
      email: '',
      logradouro: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep: '',
      banco: '',
      agencia: '',
      conta: '',
    })
    // const value = ref({
    //   doc: '046.083.004-80',
    //   nome: 'Andressa',
    //   sobrenome: 'Novaes',
    //   rg: '42409649',
    //   data_nascimento: '11/11/1111',
    //   tel: '(21) 3 4108-933',
    //   cel: '(61) 9 9917-1744',
    //   email: 'izzaandressa@gmail.com',
    //   logradouro: 'Avenida Parque Águas Claras',
    //   num: '45',
    //   complemento: 'Ed. Macaúba',
    //   bairro: 'Aguas claras',
    //   cidade: 'RIO DE JANEIRO',
    //   uf: 'df',
    //   cep: '22.783-116',
    //   banco: '1',
    //   agencia: '1222-2',
    //   conta: '122233-2',
    // })
    const store = useStore()
    store.dispatch('dropdown/getDropdown', 'bancos')
    store.dispatch('dropdown/getDropdown', 'ufs')
    const data_nascimento = null

    return {
      dispatch: store.dispatch,
      value,
      data_nascimento,
    }
  },
  computed: mapState({
    dropdownBanco: (state) => {
      return state.dropdown.bancos || []
    },
    dropdownUF: (state) => {
      return state.dropdown.ufs || []
    },
    dropdownCidade: (state) => {
      return state.dropdown.cidades || []
    },
  }),

  methods: {
    getCities(id, name = '') {
      this.dispatch('dropdown/getCityDropdown', id).then(() => {
        if (this.dropdownCidade.length) {
          const cityIndex = this.dropdownCidade.findIndex(
            (city) => city.nome === name
          )
          this.value.cidade = this.dropdownCidade[cityIndex].id
        }
      })
    },
    getAddress(e) {
      this.dispatch('dropdown/getCep', e.target.value).then(
        async (response) => {
          const ufIndex = this.dropdownUF.findIndex(
            (uf) => uf.cod === response.state
          )
          this.getCities(
            this.dropdownUF[ufIndex].id,
            response.city.toUpperCase()
          )
          this.value.uf = this.dropdownUF[ufIndex].id
          this.value.logradouro = response.address
          this.value.bairro = response.district
        }
      )
    },

    submit(e) {
      e.preventDefault()
      this.value.data_nascimento = stringFormartUS(this.data_nascimento)

      this.dispatch('form/create', {
        value: this.value,
        type: 'fornecedor',
      })
        .then(() => {
          sessionStorage.setItem(
            'fornecedor',
            JSON.stringify({ email: this.value.email, tel: this.value.tel })
          )

          this.$router.push({
            path: '/lack-little',
            params: {
              email: this.email,
              tel: this.tel,
            },
          })
        })
        .catch(() => {
          sessionStorage.setItem(
            'fornecedor',
            JSON.stringify({ email: this.value.email, tel: this.value.tel })
          )

          this.$router.push('/lack-little')
        })
    },
  },
}
</script>
