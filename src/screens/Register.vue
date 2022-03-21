<template>
  <div class="bg-orange h-screen grid items-center">
    <div class="w-full mx-auto" uppercase>
      <h3 class="mx-auto text-red text-base w-[17rem] text-left font-bold">
        {{ $t('YOUR_REGISTER') }}
      </h3>
      <form
        class="mt-8 space-y-6"
        uppercase
        action="#"
        method="POST"
        @submit="submit"
      >
        <div class="w-4/5 mx-auto">
          <div
            class="text-center text-white grid justify-center grid grid-flow-row-dense grid-cols-4"
          >
            <input
              v-model="value.nome"
              name="name"
              type="text"
              required
              class="appearance-none col-span-4 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NAME')"
            />

            <input
              v-model="value.doc"
              v-mask="'###.###.###-##'"
              name="cpf"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CPF')"
            />

            <input
              v-model="value.rg"
              v-mask="'########'"
              name="rg"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('RG')"
            />

            <input
              v-model="value.data_nascimento"
              v-mask="'##/##/####'"
              name="dt_birthday"
              type="text"
              required
              class="appearance-none w-full uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('BIRTHDAY')"
            />
            <input
              v-model="value.tel"
              v-mask="'(##) # ####-####'"
              name="tel"
              type="tel"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('TELEPHONE')"
            />

            <input
              v-model="value.email"
              name="email"
              type="email"
              required
              class="appearance-none col-span-4 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('EMAIL')"
            />
            <input
              v-model="value.cep"
              v-mask="'##.###-###'"
              name="cep"
              type="text"
              required
              class="appearance-none col-span-2 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CEP')"
            />

            <input
              v-model="value.cidade"
              name="city"
              type="text"
              required
              class="appearance-none uppercase col-span-1 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CITY')"
            />

            <input
              v-model="value.uf"
              name="uf"
              type="text"
              maxlength="2"
              required
              class="appearance-none uppercase col-span-1 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('UF')"
            />

            <input
              v-model="value.logradouro"
              name="logradouro"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('PLACE')"
            />

            <input
              v-model="value.complemento"
              name="complement"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('COMPLEMENT')"
            />

            <input
              v-model="value.num"
              name="number"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NUMBER')"
            />

            <input
              v-model="value.bairro"
              name="district"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('DISTRICT')"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-2 px-16 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {
        doc: '',
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
      },
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()

      this.$store
        .dispatch('form/create', {
          value: this.value,
          type: 'fornecedor',
        })
        .then(() => {
          this.$router.push({
            path: '/lack-little',
            query: {
              email: this.email,
              tel: this.tel,
            },
          })
        })
        .catch(() => {
          this.$router.push({
            path: '/lack-little',
            query: {
              email: this.email,
              tel: this.tel,
            },
          })
        })
    },
  },
}
</script>
