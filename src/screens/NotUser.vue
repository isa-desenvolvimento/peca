<template>
  <feed-back
    :title="$t('OOPS')"
    :description="$t('NOT_SUPPLIER')"
    background="bg-red"
  >
    <template #body>
      <h3 class="text-white text-sm w-60 mx-auto mt-6">
        {{ $t('WANT_TO_BECOME_A_SUPPLIER') }}
      </h3>
      <div class="flex justify-between">
        <div class="">
          <button
            type="button"
            class="appearance-none bg-white mx-auto group relative w-32 leading-normal flex justify-end mt-8 py-2 px-5 text-sm font-medium text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="$router.push('/damn-we-are-sad')"
          >
            {{ $t('NOT') }}
          </button>
        </div>
        <div class="">
          <button
            type="button"
            class="appearance-none bg-white mx-auto group relative w-32 leading-normal flex justify-start mt-8 py-2 px-5 text-sm font-medium text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="$router.push('/register')"
          >
            {{ $t('YES') }}
          </button>
        </div>
      </div>
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'

export default {
  components: { FeedBack },
}
</script>
