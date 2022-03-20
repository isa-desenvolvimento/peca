<template>
  <feed-back
    :title="$t('WELCOME')"
    :description="$t('UHUL')"
    background="bg-white"
    color="text-red"
  >
    <template #body>
      <div class="mx-auto text-white mt-20">
        <label class="mx-auto text-red font-bold text-center">{{
          $t('REGISTER_PASSWORD')
        }}</label>
        <div class="flex">
          <input
            id="PASSWORD"
            type="password"
            class="appearance-none border-red text-red placeholder-red text-center text-xs w-full"
            :placeholder="$t('PASSWORD')"
          />
        </div>
        <div class="flex">
          <input
            id="CONFIRME_PASSWORD"
            :placeholder="$t('CONFIRME_PASSWORD')"
            type="password"
            class="appearance-none border-red text-red placeholder-red text-center text-xs w-full"
          />
        </div>
      </div>
      <button
        type="submit"
        class="appearance-none rounded w-24 bg-red text-white mx-auto group relative leading-normal flex justify-center mt-12 py-1 px-5 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default {
  components: { FeedBack },
  data() {
    return {
      email: 'SILVIA****@GMAIL.COM',
      phone: '(61) 9983-**47',
    }
  },
}
</script>
