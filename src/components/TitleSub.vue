<template>
  <div class="col-span-6 ml-5 row-span-1 grid grid-cols-4 items-center">
    <div class="col-span-3">
      <div v-if="isMoney">
        <span v-if="iconPlus" class="text-green text-xs"> + </span>
        <span v-else class="text-red text-xs"> - </span>

        <span class="text-red text-sm font-bold font-manrope">
          {{ `R$ ${Math.abs(title).toFixed(2) || 0}` }}
        </span>
      </div>
      <div
        v-if="subtitle"
        class="text-red text-xs leading-3 break-words font-manrope mt-2"
      >
        {{ subtitle }}
      </div>
      <div
        v-if="description"
        class="text-red text-xs leading-3 break-words font-manrope mt-1"
      >
        {{ description }}
      </div>
    </div>

    <a
      v-if="!iconPlus"
      download="Recibo.pdf"
      target="_blank"
      type="button"
      :href="arquivo"
      class="text-sm font-regular text-red uppercase mt-[-1rem] font-manrope"
    >
      <div
        class="col-span-1 mx-auto h-5 w-5 bg-contain bg-no-repeat bg-center text-white transition-linear duration-100 bg-icon-nota"
      ></div>
    </a>
    <hr class="col-span-6 text-yellow opacity-25 my-2" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    iconPlus: { type: Boolean, required: false, default: false },
    isMoney: { type: Boolean, required: false, default: false },
    subtitle: { type: String, required: false },
    description: { type: String, required: false },
    arquivo: { type: String, required: false },
  },
}
</script>
