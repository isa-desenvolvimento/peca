<template>
  <div
    class="h-screen flex items-center bg-pink pl-12 lg:pl-0 ease-in duration-300 overflow-y-auto"
  >
    <div class="grid lg:justify-center lg:mx-auto">
      <Title
        :title="title"
        classe="text-orange lg:ml-8  w-64 text-lg leading-[2.5rem]"
      />
      <Description
        classe="text-orange text-sm  w-full text-left lg:ml-[2.3rem] font-manrope  mt-2 leading-[1rem]"
      >
        {{ description }}
      </Description>
    </div>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  components: { Description, Title },
}
</script>
