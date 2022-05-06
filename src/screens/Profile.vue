<template>
  <div class="bg-orange h-screen grid p-8 overflow-y-auto">
    <Header :title="$t('PROFILE')" />
    <div class="mx-auto" uppercase>
      <form
        class="overflow-y-auto"
        uppercase
        action="#"
        method="POST"
        @submit="submit"
      >
        <div class="mx-auto">
          <file-avatar
            v-model="user.profile_img"
            :value="user?.profile_img"
            is-editable
          />
          <h3
            class="text-red text-md w-full text-center font-bold my-8 font-manrope leading-[1.3rem]"
          >
            {{ user?.nome_fornecedor }}
          </h3>

          <div
            class="text-center text-white grid justify-center grid grid-flow-row-dense grid-cols-4"
          >
            <div
              class="appearance-none col-span-4 uppercase bg-orange py-2 font-manrope border-red placeholder-red text-red text-left font-bold"
            >
              {{ $t('ADDRESS') }}
            </div>

            <input
              v-model="user.dados_fornecedor.endereco.end_cep"
              v-mask="'#####-###'"
              name="cep"
              type="text"
              required
              class="appearance-none col-span-2 uppercase bg-orange px-3 py-2 font-manrope border-red border border-b-0 border-r-0 placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('CEP')"
              @change="getAddress"
            />

            <input
              v-model="user.dados_fornecedor.endereco.end_logradouro"
              name="logradouro"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border border-b-0 bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('PLACE')"
            />

            <select
              v-model="user.dados_fornecedor.endereco.end_uf_cidade_id"
              :placeholder="$t('CITY')"
              class="form-select form-select-sm appearance-none font-manrope col-span-3 block w-full appearance-none uppercase border border-b-0 border-r-0 bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent text-sm"
              aria-label=".form-select-sm example"
            >
              <option value="" disabled selected>{{ $t('CITY') }}</option>

              <option v-for="op in dropdownCidade" :key="op.id" :value="op.id">
                {{ op.nome }}
              </option>
            </select>

            <select
              v-model="user.dados_fornecedor.endereco.end_uf_id"
              :placeholder="$t('UF')"
              class="form-select form-select-sm placeholder-red appearance-none font-manrope col-span-1 block w-full appearance-none uppercase border border-b-0 bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent text-sm"
              aria-label=".form-select-sm example"
              @change="() => getCities()"
            >
              <option value="" disabled selected>{{ $t('UF') }}</option>

              <option v-for="op in dropdownUF" :key="op.cod" :value="op.id">
                {{ op.cod }}
              </option>
            </select>

            <input
              v-model="user.dados_fornecedor.endereco.end_complemento"
              name="complement"
              type="text"
              class="appearance-none uppercase col-span-4 border border-b-0 bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('COMPLEMENT')"
            />

            <input
              v-model="user.dados_fornecedor.endereco.end_nr"
              name="number"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border border-r-0 bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('NUMBER')"
            />

            <input
              v-model="user.dados_fornecedor.endereco.end_bairro"
              name="district"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('DISTRICT')"
            />

            <div
              class="appearance-none col-span-4 uppercase bg-orange py-2 font-manrope border-red placeholder-red text-red text-left font-bold"
            >
              {{ $t('BANK_DATA') }}
            </div>

            <div class="col-span-4">
              <Select
                :value="user.dados_fornecedor.dados_bancarios.banco_id"
                :options="dropdownBanco"
                :reduce="(option) => option.id"
                label="title"
                :placeholder="$t('BANK')"
                @input="
                  (val) =>
                    (user.dados_fornecedor.dados_bancarios.banco_id = val)
                "
              />
            </div>

            <input
              v-model="user.dados_fornecedor.dados_bancarios.banco_ag"
              v-mask="'####-#'"
              name="ag"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border border-t-0 border-b-0 border-r-0 bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('AGENCY')"
            />

            <input
              v-model="user.dados_fornecedor.dados_bancarios.banco_cc"
              v-mask="'######-#'"
              name="conta"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border border-t-0 border-b-0 bg-orange px-3 py-2 font-manrope border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent focus:border-red text-sm"
              :placeholder="$t('ACCOUNT')"
            />

            <input
              v-model="user.dados_fornecedor.dados_bancarios.chave_pix"
              name="pix"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange font-manrope px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent text-sm"
              :placeholder="$t('PIX')"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none rounded-md uppercase font-manrope font-bold bg-red mx-auto group relative leading-normal flex justify-center mt-8 py-2 px-10 text-xs text-orange focus:outline-none"
          >
            {{ $t('UPDATE') }}
          </button>
          <button
            type="button"
            class="appearance-none rounded-md uppercase font-manrope font-bold bg-red mx-auto group relative leading-normal flex justify-center mt-8 py-2 px-10 text-xs text-orange focus:outline-none"
            @click="logout"
          >
            {{ $t('LOGOFF') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import FileAvatar from '@/components/FileAvatar.vue'
import Header from '@/components/Header.vue'
import Select from '@/components/Select.vue'

// import { base64Regex } from '@/util/util.js'

export default {
  components: { FileAvatar, Header, Select },

  setup() {
    document.title = 'Clube Peça Rara | Perfil'

    const { dispatch } = useStore()
    dispatch('list/getAuth').then((res) => {
      dispatch(
        'dropdown/getCityDropdown',
        res.dados_fornecedor.endereco.end_uf_id
      )
    })
    dispatch('dropdown/getDropdown', 'bancos')
    dispatch('dropdown/getDropdown', 'ufs')

    return {
      dispatch,
    }
  },
  computed: mapState({
    dropdownBanco: (state) => {
      if (!state.dropdown?.bancos) return []

      const bancos = state.dropdown?.bancos?.map((item) => {
        return {
          title: `${item.cod} - ${item.nome}`,
          id: item.id,
        }
      })
      return bancos
    },
    dropdownUF: (state) => {
      return state.dropdown.ufs || []
    },
    dropdownCidade: (state) => {
      return state.dropdown.cidades || []
    },
    user: (state) => state.list.auth,
  }),

  methods: {
    getCities(id = this.value.uf, name = '') {
      this.dispatch('dropdown/getCityDropdown', id).then(() => {
        if (this.dropdownCidade.length && name !== '') {
          const cityIndex = this.dropdownCidade.findIndex(
            (city) => city.nome === name
          )
          this.user.dados_fornecedor.endereco.end_uf_cidade_id =
            this.dropdownCidade[cityIndex].id
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
          this.user.dados_fornecedor.endereco.end_uf_id =
            this.dropdownUF[ufIndex].id
          this.user.dados_fornecedor.endereco.end_logradouro = response.address
          this.user.dados_fornecedor.endereco.end_bairro = response.district
        }
      )
    },
    logout(e) {
      e.preventDefault()

      this.dispatch('auth/logout')
      this.$router.push('/login')
    },

    submit(e) {
      e.preventDefault()

      const data = {
        dados_fornecedor: this.user.dados_fornecedor,
      }

      if (this.isBase64(this.user.profile_img)) {
        data.profile_img = this.user.profile_img
      }

      this.dispatch('form/update', {
        value: data,
      }).then(() => {
        this.dispatch('list/getAuth')
      })
    },
    isBase64(str) {
      // const databse = str.include(0, 'data:image/png;base64,')
      // return base64Regex.test(str);

      return (
        str.includes(0, 'data:image/png;base64,') ||
        str.includes('data:image/jpeg;base64,')
      )
    },
  },
}
</script>

<style scoped>
/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: solid 1px var(--bg-red);
  -webkit-text-fill-color: var(--bg-red);
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: background-color 5000s ease-in-out 0s;
  color: var(--bg-red);
}
</style>
