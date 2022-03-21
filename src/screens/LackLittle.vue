<template>
  <feed-back
    :title="$t('LACK_LITTLE')"
    :description="$t('SEND_TOKEN')"
    background="bg-yellow"
  >
    <template #body>
      <div class="mx-auto text-white mt-20">
        <div class="flex">
          <input
            id="email"
            type="checkbox"
            class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red"
          />
          <label class="flex flex-row items-center cursor-pointer">
            {{ formatEmail }}
          </label>
        </div>
        <div class="flex">
          <input
            id="email"
            type="checkbox"
            class="appearance-none checked:bg-red checked:text-red mr-2 border-none focus:border-red"
          />
          <label class="flex flex-row items-center cursor-pointer">
            {{ formatTel }}
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="appearance-none rounded w-24 bg-white text-red mx-auto group relative leading-normal flex justify-center mt-12 py-1 px-5 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ $t('SEND') }}
      </button>

      <h3 class="mx-auto text-white text-base w-[17rem] text-center mt-6">
        {{ $t('DOES_YOUR_DATA_NOT_MATCH') }}
        <a href="#" class="underline underline-offset-1">
          {{ $t('CLICK_HERE') }}
        </a>
      </h3>
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'
// import { useRoute } from 'vue-router'
// import { mapState } from 'vuex'

export default {
  components: { FeedBack },
  setup() {
    // const route = useRoute()
    // const { email, tel } = route.query

    const email = 'dhahsdausdhk@gmail.com'
    const tel = '(11) 9 9917-1744'
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
  // computed: mapState({
  //   formatEmail: (state) => {
  //     const arrEmail = state.form.fornecedor.email.split('@')
  //     let formatEmail = ''
  //     arrEmail[0].map(() => {
  //       formatEmail = formatEmail + '*'
  //     })
  //   },
  //   formatTel: (state) => {
  //     const arrTel = state.form.fornecedor.tel.split('-')
  //     let formatTel = ''
  //     arrTel[0].map(() => {
  //       formatTel = formatTel + '*'
  //     })
  //   },
  // }),
}
</script>
