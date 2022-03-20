<template>
  <feed-back
    :title="$t('LACK_LITTLE')"
    :description="$t('SEND_TOKEN')"
    background="bg-yellow"
  >
    <template #body>
      <div class="mx-auto text-white mt-20">
        <div class="flex">
          <input id="email" type="checkbox" class="mr-2 border-none" />
          <label class="flex flex-row items-center cursor-pointer">
            {{ email }}
          </label>
        </div>
        <div class="flex">
          <input id="email" type="checkbox" class="mr-2 border-none" />
          <label class="flex flex-row items-center cursor-pointer">
            {{ phone }}
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
