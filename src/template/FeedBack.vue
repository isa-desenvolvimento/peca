<template>
  <translation name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div
      :class="background"
      class="h-screen flex items-center justify-center w-full"
    >
      <div class="grid w-full">
        <div class="grid mx-auto">
          <h1 :class="color" class="text-lg leading-sm mx-auto">{{ title }}</h1>
          <h3 :class="color" class="text-sm w-60 mx-auto">{{ description }}</h3>
        </div>

        <slot name="body"></slot>
      </div>
    </div>
  </translation>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    background: { type: String, required: false, default: 'bg-white' },
    color: { type: String, required: false, default: 'text-white' },
  },
}
</script>
