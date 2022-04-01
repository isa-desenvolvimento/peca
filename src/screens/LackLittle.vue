<template>
  <translation name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div class="h-screen grid items-center justify-center w-full bg-yellow">
      <div>
        <div class="grid mx-auto">
          <Title
            :title="$t('LACK_LITTLE')"
            classe="grid w-full  text-orange  w-72 "
          />
          <Description classe="grid w-full text-orange w-80">
            {{ $t('SEND_TOKEN') }}</Description
          >
        </div>
        <div class="mx-auto">
          <div class="text-orange mt-20 mb-20">
            <div class="flex">
              <input
                id="email"
                type="checkbox"
                checked
                disabled
                class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red font-manrope"
              />
              <label
                class="flex flex-row items-center cursor-pointer font-manrope text-sm"
              >
                {{ formatEmail }}
              </label>
            </div>
          </div>
          <button
            type="button"
            class="appearance-none rounded w-40 font-manrope uppercase font-bold bg-white text-red mx-auto group relative leading-normal flex justify-center my-8 mt-10 py-2 px-5 text-xs font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="submit"
          >
            {{ $t('SEND') }}
          </button>

          <h3
            class="mx-auto text-white text-sm w-[15rem] text-center mt-6 font-manrope"
          >
            {{ $t('DOES_YOUR_DATA_NOT_MATCH') }}
            <a
              href="/register"
              class="underline underline-offset-1 font-manrope font-bold"
            >
              {{ $t('CLICK_HERE') }}
            </a>
          </h3>
        </div>
      </div>
    </div>
  </translation>
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
