<template>
  <h4 class="text-red text-xs opacity-25 text-left">{{ title }}</h4>
  <hr class="col-span-2 text-yellow opacity-25 my-4" />
  <div
    v-for="(list, index) in lists"
    :key="index"
    class="grid grid-cols-8 my-8"
    :class="`grid-rows-${list.items.length}`"
  >
    <div
      class="col-span-1 text-sm text-yellow text-center uppercase"
      :class="`row-span-${list.items.length}`"
    >
      {{ list.title }}
    </div>
    <div :class="`col-span-7 row-span-${list.items.length}`">
      <TitleSub
        v-for="item in list.items"
        :key="item"
        :title="item.title"
        :description="item.description"
        :icon-plus="item.iconPlus"
      />
    </div>
  </div>

  <svg
    class="animate-bounce m-auto w-9 h-9 bg-yellow rounded-full text-white text-center absolute inset-x-0 bottom-0"
  ></svg>
</template>

<script>
import TitleSub from '@/components/TitleSub.vue'
export default {
  components: { TitleSub },
  props: {
    title: { type: String, required: true },
    lists: { type: String, required: true },
  },
}
</script>
