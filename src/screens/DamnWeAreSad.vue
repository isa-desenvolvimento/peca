<template>
  <translation name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div class="h-screen flex items-center bg-pink pl-12 lg:pl-0">
      <div class="grid lg:justify-center lg:mx-auto">
        <Title
          :title="$t('POXA')"
          classe="text-orange lg:text-center lg:ml-8"
        />
        <Description
          classe="text-orange text-md  w-full text-left lg:mx-auto font-manrope  mt-[-.5rem] "
        >
          {{ $t('WE_ARE_SAD') }}
        </Description>
        <Description
          classe="text-orange text-sm w-full text-left lg:mx-auto font-manrope mt-2"
        >
          <div class="w-[13rem]">
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
  </translation>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  components: { Description, Title },
}
</script>
