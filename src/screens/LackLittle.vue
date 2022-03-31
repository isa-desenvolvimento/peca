<template>
  <feed-back
    :title="$t('LACK_LITTLE')"
    :description="$t('SEND_TOKEN')"
    background="bg-yellow px-12"
  >
    <template #body>
      <div class="mx-auto text-white mt-20">
        <div class="flex">
          <input
            id="email"
            type="checkbox"
            checked
            disabled
            class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red text-manrope"
          />
          <label
            class="flex flex-row items-center cursor-pointer font-manrope text-sm"
          >
            {{ formatEmail }}
          </label>
        </div>
        <!-- <div class="flex">
          <input
            id="email"
            type="checkbox"
            class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red"
          />
          <label class="flex flex-row items-center cursor-pointer">
            {{ formatTel }}
          </label>
        </div> -->
      </div>
      <button
        type="button"
        class="appearance-none rounded w-32 font-manrope uppercase font-bold bg-white text-red mx-auto group relative leading-normal flex justify-center my-8 mt-10 py-2 px-5 text-xs font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'
// import { useRoute } from 'vue-router'

export default {
  components: { FeedBack },
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
