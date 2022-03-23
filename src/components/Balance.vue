<template>
  <div class="grid grid-cols-2 grid-rows-1 w-full py-2">
    <hr class="col-span-2 text-yellow opacity-25 my-4" />
    <div class="col-span-1 text-left">
      <h4 class="text-yellow text-base">
        {{ $t('BALANCE_ON') }}
      </h4>
      <div class="grid grid-cols-4 text-left justify-items-start">
        <eye
          @toggle="this.balance_on_visible = !this.balance_on_visible"
          class="ml-[-.7rem]"
        />
        <span
          class="col-span-3 text-left text-yellow"
          v-if="balance_on_visible"
        >
          {{ balance_on }}
        </span>
        <span class="col-span-1 text-left text-yellow" v-else>-</span>
      </div>
    </div>
    <div class="col-span-1 text-right">
      <h4 class="text-left text-yellow text-base col-span-1 text-right">
        {{ $t('BALANCE_OFF') }}
      </h4>
      <div class="grid grid-cols-2 justify-end text-right justify-items-end">
        <eye @toggle="this.balance_off_visible = !this.balance_off_visible" />
        <span
          class="col-span-1 text-left text-yellow"
          v-if="balance_off_visible"
        >
          {{ balance_off }}
        </span>
        <span class="col-span-1 text-left text-yellow" v-else>-</span>
      </div>
    </div>
    <button
      class="inline-block text-left mt-2 px-6 py-2 w-24 border border-yellow text-yellow font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-outr"
      :class="classe"
      @click="onclick"
    >
      {{ $t('SAC') }}
    </button>
    <hr class="col-span-2 text-yellow opacity-25 my-4" />
  </div>
</template>

<script>
import Eye from '@/components/Eye.vue'

export default {
  components: { Eye },
  props: {
    name: { type: String, required: true },
    description: { type: String, required: false },
    classe: { type: String, required: true },
    icon: { type: String, required: true },
    onclick: { type: Function, required: true },
  },
  data() {
    return {
      balance_on: `R$ ${'3500'}`,
      balance_off: `R$ ${'3500'}`,
      balance_on_visible: true,
      balance_off_visible: true,
    }
  },
}
</script>
