<template>
  <div
    v-for="(list, index) in lists"
    :key="index"
    class="overflow-y-auto max-h-96 mt-8"
  >
    <h4 class="text-red text-xs opacity-30 text-left uppercase">
      {{ list.grupo }}
    </h4>
    <hr class="col-span-2 text-yellow opacity-20 my-4" />
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
        {{ periodo.dia }} {{ periodo.mes }}
      </div>
      <div :class="`col-span-7 row-span-${periodo?.items?.length}`">
        <TitleSub
          v-for="item in periodo?.items"
          :key="item.id"
          :title="item.valor"
          :description="item.descricao ? item.descricao : ''"
          :icon-plus="item.valor >= 0"
          is-money
        />
      </div>
    </div>
  </div>

  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    class="animate-bounce m-auto w-10 h-10 mb-2 p-2 bg-yellow rounded-full text-white text-center absolute inset-x-0 bottom-0"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      class="origin-center rotate-180"
      fill="currentColor"
      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
    ></path>
  </svg>
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
