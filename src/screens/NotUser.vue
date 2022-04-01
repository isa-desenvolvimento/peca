<template>
  <feed-back
    :title="$t('OOPS')"
    :description="$t('NOT_SUPPLIER')"
    background="bg-red"
  >
    <template #body>
      <div class="grid gap-40 lg:gap-10 lg:mx-auto lg:mb-60">
        <Description
          classe="lg:mx-auto  ml-20 col-row-2 text-orange text-base w-60 text-left mt-6 "
        >
          {{ $t('WANT_TO_BECOME_A_SUPPLIER') }}
        </Description>

        <transition name="fade">
          <div class="flex justify-between col-row-4 lg:grid lg:justify-start">
            <div class="w-full">
              <button
                type="button"
                class="appearance-none lg:rounded-md rounded-r-md bg-orange uppercase font-manrope mx-auto group relative ml-0 w-9/12 lg:w-48 leading-normal flex justify-end lg:justify-end py-5 px-5 lg:py-3 text-sm font-bold text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="$router.push('/damn-we-are-sad')"
              >
                {{ $t('NOT') }}
              </button>
            </div>
            <div class="w-full">
              <button
                type="button"
                class="appearance-none lg:rounded-md rounded-l-md bg-orange uppercase font-manrope mx-auto group relative mr-0 w-9/12 lg:w-48 lg:mt-4 leading-normal flex justify-start lg:justify-end py-5 px-5 lg:py-3 text-sm font-bold text-red hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="$router.push('/register')"
              >
                {{ $t('YES') }}
              </button>
            </div>
          </div>
        </transition>
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
