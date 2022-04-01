<template>
  <div class="h-screen grid items-center w-full bg-pink ease-in duration-300">
    <div class="grid lg:justify-center lg:mx-auto ml-20">
      <Title
        :title="$t('POXA')"
        classe="text-orange lg:text-center lg:ml-8 text-lg leading-[2.5rem]  lg:text-6xl lg:leading-[3.5rem] lg:w-[30rem]"
      />
      <Description
        classe="text-orange text-md  w-full text-left lg:mx-auto font-manrope  mt-[-.5rem] "
      >
        {{ $t('WE_ARE_SAD') }}
      </Description>
      <Description
        classe="text-orange text-sm w-full text-left lg:mx-auto font-manrope mt-2"
      >
        <div class="w-[15rem]">
          {{ $t('BUT_IF_YOU_CHANGE_YOUR_IDEA_IS_TO') }}
          <a
            href="/login"
            class="underline underline-offset-1 font-manrope font-bold"
          >
            {{ $t('CLICK_HERE') }}
          </a>
        </div>
      </Description>
    </div>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  components: { Description, Title },
}
</script>
