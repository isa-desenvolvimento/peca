<template>
  <div class="grid grid-cols-2 grid-rows-1 w-full py-2">
    <hr class="col-span-2 text-yellow opacity-25 my-4" />
    <div class="col-span-1 text-left">
      <h4 class="text-yellow text-base font-manrope">
        {{ $t('BALANCE_ON') }}
      </h4>
      <div class="grid grid-cols-8 text-left justify-items-start">
        <eye
          class="ml-[-.7rem] lg:ml-0 col-span-1 lg:col-start-1"
          @toggle="balance_on_visible = !balance_on_visible"
        />
        <span
          v-if="balance_on_visible"
          class="col-span-4 col-start-3 lg:col-start-2 text-left text-yellow font-manrope"
        >
          {{ formatMoney(balance?.disponivel || 0) }}
        </span>
        <span v-else class="col-span-1 text-left text-yellow">-</span>
      </div>
    </div>
    <div class="col-span-1 text-right">
      <h4
        class="text-left text-yellow text-base col-span-1 text-right font-manrope"
      >
        {{ $t('BALANCE_OFF') }}
      </h4>
      <div class="grid grid-cols-8 justify-end text-right justify-items-end">
        <eye
          class="col-span-1 col-start-3 lg:col-start-6"
          @toggle="balance_off_visible = !balance_off_visible"
        />
        <span
          v-if="balance_off_visible"
          class="col-span-4 col-start-4 lg:col-start-7 text-left text-yellow font-manrope"
        >
          {{ formatMoney(balance?.bloqueado || 0) }}
        </span>
        <span v-else class="col-span-1 text-left text-yellow">-</span>
      </div>
    </div>
    <button
      v-if="id !== 0 && id !== undefined && balance?.disponivel > 0"
      class="inline-block text-left mt-2 px-6 py-2 w-24 border border-yellow text-yellow font-manrope font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-outr"
      :class="classe"
      @click="onclick"
    >
      {{ $t('WITHDRAWAL') }}
    </button>
    <hr class="col-span-2 text-yellow opacity-25 my-4" />
  </div>
</template>

<script>
import Eye from '@/components/Eye.vue'
import { formatMoney } from '@/util/util'

export default {
  components: { Eye },
  props: {
    description: { type: String, required: false },
    classe: { type: String, required: false },
    icon: { type: String, required: false },
    id: { type: Number, required: false },
    balance: { type: Object, required: false },
    onclick: { type: Function, required: false },
  },
  data() {
    return {
      balance_on_visible: false,
      balance_off_visible: false,
      formatMoney,
    }
  },
}
</script>
