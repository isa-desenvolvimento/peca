<template>
  <feed-back
    :title="$t('OOPS')"
    :description="$t('NOT_SUPPLIER')"
    background="bg-red"
  >
    <template #body>
      <div class="grid gap-40">
        <Description
          classe="mx-auto col-row-2 text-orange text-base w-60 text-left mt-6 "
        >
          {{ $t('WANT_TO_BECOME_A_SUPPLIER') }}
        </Description>

        <div class="flex justify-between col-row-4">
          <div class="">
            <button
              type="button"
              class="appearance-none bg-orange uppercase font-manrope mx-auto group relative w-32 leading-normal flex justify-end mt-8 py-2 px-5 text-sm font-bold text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="$router.push('/damn-we-are-sad')"
            >
              {{ $t('NOT') }}
            </button>
          </div>
          <div class="">
            <button
              type="button"
              class="appearance-none bg-orange uppercase font-manrope mx-auto group relative w-32 leading-normal flex justify-start mt-8 py-2 px-5 text-sm font-bold text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="$router.push('/register')"
            >
              {{ $t('YES') }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </feed-back>
</template>

<script>
import Description from '@/components/Description.vue'
import FeedBack from '@/template/FeedBack.vue'

export default {
  components: { FeedBack, Description },
}
</script>
