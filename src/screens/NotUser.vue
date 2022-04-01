<template>
  <transition name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div class="h-screen grid items-center w-full bg-red">
      <div class="lg:mx-auto">
        <div class="grid gap-2 lg:mx-auto ml-20">
          <Title
            :title="$t('OOPS')"
            classe="lg:mx-auto  leading-[3rem] col-row-2 text-orange text-base text-left mt-6"
          />

          <Description
            classe="lg:mx-auto  col-row-2 text-orange  leading-[1rem] text-base w-80 text-left mt-[-1rem] lg:mt-2"
          >
            {{ $t('NOT_SUPPLIER') }}</Description
          >
        </div>
        <div class="grid gap-40 lg:gap-10 lg:mx-auto">
          <Description
            classe="lg:mx-auto  ml-20 lg:ml-0 col-row-2 leading-[1rem] text-orange text-base w-60 text-left mt-6 "
          >
            {{ $t('WANT_TO_BECOME_A_SUPPLIER') }}
          </Description>

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
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'

export default {
  components: { Title, Description },
}
</script>
