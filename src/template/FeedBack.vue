<template>
  <translation name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div
      :class="background"
      class="h-screen flex items-end justify-center w-full"
    >
      <div :class="classe">
        <div class="grid ml-20 gap-2 lg:mx-auto">
          <Title :title="title" :classe="color" />
          <Description :classe="color"> {{ description }}</Description>
        </div>
        <slot name="body"></slot>
      </div>
    </div>
  </translation>
</template>

<script>
import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'
export default {
  components: { Title, Description },
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    background: { type: String, required: false, default: 'bg-white' },
    color: { type: String, required: false, default: 'text-orange' },
    classe: {
      type: String,
      required: false,
      default: 'grid w-full mb-40 lg:mb-0',
    },
  },
}
</script>
