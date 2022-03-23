<template>
  <h4 class="text-red text-xs opacity-25 text-left">marco</h4>
  <hr class="col-span-2 text-yellow opacity-25" />
  <div class="grid grid-cols-7">
    <div class="col-span-1 text-sm text-yellow">7 marco</div>
    <div class="col-span-6">
      <div>
        <span class="text-green text-xs"> + </span>
        <span class="text-red text-xs"> - </span>
        <span class="text-red text-sm font-bold"> R$ 556,00 </span>
      </div>
      <span class="text-red text-xs leading-3">
        DFVEST XADREZ/VERMELHO ROSA TRANSPASSADO RICHARDS 42
      </span>
  <hr class="col-span-2 text-yellow opacity-25" />

    </div>
  </div>
  <svg class="animate-bounce m-auto w-9 h-9 bg-yellow rounded-full text-white text-center absolute inset-x-0 bottom-0"> > </svg>

</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: false },
    classe: { type: String, required: true },
    icon: { type: String, required: true },
    onclick: { type: Function, required: true },
  },
}
</script>
