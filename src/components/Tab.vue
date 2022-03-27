<template>
  <div class="mb-3">
    <div class="inline-flex justify-between w-full first:active" role="group">
      <div v-for="(tab, index) in tabs" :key="tab" :aria-current="index === 0">
        <button
          :id="`button_tap_${index}`"
          type="button"
          class="inline-block px-3 py-2 bg-orange text-red font-medium text-sm leading-snug uppercase focus:bg-yellow-ligth focus:outline-none focus:ring-0 active:bg-yellow-ligth active:text-red transition duration-150 ease-in-out"
          @click="() => getPeriodo(tab)"
        >
          {{ tab }} {{ $t('DAY') }}
        </button>
      </div>
      <div>
        <button
          type="button"
          class="inline-block px-3 py-2 bg-orange text-red font-medium text-sm leading-snug uppercase focus:bg-yellow-ligth focus:outline-none focus:ring-0 active:bg-yellow-ligth active:text-red transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#modalPeriod"
          @click="(e) => getOthers(e)"
        >
          {{ $t('OTHERS') }}
        </button>
      </div>
    </div>
  </div>
  <Modal :id_loja="id_loja" :type="type" />
</template>

<script>
import { periodoDate } from '@/util/date'
import Modal from '@/components/Modal.vue'

export default {
  components: { Modal },
  props: {
    id_loja: { type: String, required: true },
    type: { type: String, required: true },
  },
  setup() {
    return {
      tabs: [7, 15, 30],
    }
  },
  methods: {
    getPeriodo(periodo) {
      this.$emit('click', periodoDate(periodo))
    },
    getOthers(periodo) {
      this.$emit('click', periodo)
    },
  },
}
</script>
