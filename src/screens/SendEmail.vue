<template>
  <transition
    name="slide-fade"
    :duration="{ enter: 500, leave: 800 }"
    class="delay-75"
  >
    <div class="h-screen grid items-center bg-pink pl-12 sm:h-screen sm:w-full">
      <div class="grid lg:justify-center lg:mx-auto">
        <Title :title="$t('SEND_EMAIL')" classe="text-orange lg:ml-8" />
        <Description
          classe="text-orange text-sm  w-full text-left lg:ml-[2.3rem] font-manrope  mt-[-.5rem] "
        >
          {{ $t('VERIFY_SEND_EMAIL') }}
        </Description>
      </div>
    </div>
  </transition>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  components: { Description, Title },
}
</script>
