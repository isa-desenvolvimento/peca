<template>
  <div
    class="h-screen grid items-center justify-center w-full bg-yellow ease-in duration-300"
  >
    <div>
      <div class="grid mx-auto">
        <Title
          :title="$t('LACK_LITTLE')"
          classe="grid w-full  text-orange  w-64 text-lg leading-[2.5rem]"
        />
        <Description
          classe="lg:mx-auto  col-row-2 text-orange  leading-[1rem] text-sm w-80 text-leftlg:mt-2"
        >
          {{ $t('SEND_TOKEN') }}</Description
        >
      </div>
      <div class="grid justify-center mx-auto">
        <div class="text-orange mt-20">
          <div class="flex">
            <input
              id="email"
              type="checkbox"
              checked
              disabled
              class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red font-manrope"
            />
            <label
              class="flex tracking-[.08em] flex-row items-center cursor-pointer font-manrope text-sm"
            >
              {{ formatEmail }}
            </label>
          </div>
        </div>
        <button
          type="button"
          class="appearance-none rounded w-40 font-manrope uppercase font-bold bg-white text-red mx-auto group relative leading-normal flex justify-center my-8 mt-10 py-2 px-5 text-xs font-medium"
          @click="submit"
        >
          {{ $t('SEND') }}
        </button>

        <h3
          class="mx-auto text-white text-sm w-[15rem] text-center mt-6 font-manrope tracking-[.08em]"
        >
          {{ $t('DOES_YOUR_DATA_NOT_MATCH') }}
          <a
            href="/register"
            class="underline underline-offset-1 font-manrope font-bold tracking-[.08em]"
          >
            {{ $t('CLICK_HERE') }}
          </a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'
// import { useRoute } from 'vue-router'

export default {
  components: { Title, Description },
  setup() {
    // const route = useRoute()
    // const { email, tel } = route.params

    const { email, tel } = JSON.parse(sessionStorage.getItem('fornecedor'))

    // const email = 'dhahsdausdhk@gmail.com'
    // const tel = '(11) 9 9917-1744'
    const arrEmail = email.toUpperCase().split('@')
    let formatEmail = arrEmail[0].slice(0, 3)

    Array.from(arrEmail[0].slice(4)).map(() => {
      formatEmail = formatEmail + '*'
    })

    formatEmail += `@${arrEmail[1]}`

    const arrTel = tel.split('-')
    let formatTel = ''
    Array.from(arrTel[0]).map(() => {
      formatTel = formatTel + '*'
    })

    formatTel += `-${arrTel[1]}`

    return {
      formatEmail,
      formatTel,
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()

      const doc = this.$store.state.user.doc || sessionStorage.getItem('doc')

      this.$store
        .dispatch('form/create', {
          value: { doc, notAdd: true },
          type: 'newpwd',
        })
        .then(() => {
          this.$router.push('/send-email')
        })
    },
  },
}
</script>
