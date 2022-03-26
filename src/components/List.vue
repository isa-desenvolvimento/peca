<template>
  <div v-for="(list, index) in lists" :key="index">
    <h4 class="text-red text-xs opacity-20 text-left uppercase">
      {{ list.grupo }}
    </h4>
    <hr class="col-span-2 text-yellow opacity-25 my-4" />
    <div
      v-for="periodo in list?.periodos"
      :key="periodo"
      class="grid grid-cols-8 my-8"
      :class="`grid-rows-${periodo?.items?.length}`"
    >
      <div
        class="col-span-1 text-sm text-yellow text-center uppercase"
        :class="`row-span-${periodo?.items?.length}`"
      >
        {{ periodo.day }} {{ periodo.month }}
      </div>
      <div :class="`col-span-7 row-span-${periodo?.items?.length}`">
        <TitleSub
          v-for="item in periodo?.items"
          :key="item.id"
          :title="item.valor"
          :description="item.descricao ? item.descricao : ''"
          :icon-plus="item.valor >= 0"
        />
      </div>
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
