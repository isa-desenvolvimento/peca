<template>
  <div
    id="modalTaxa"
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <form
        action="#"
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-orange bg-clip-padding rounded-md outline-none text-current"
        @submit="(e) => apply(e)"
      >
        <div
          class="modal-header col-span-1 flex flex-shrink-0 items-center justify-between p-4 border-b border-white rounded-t-md"
        >
          <h5
            id="exampleModalLabel"
            class="text-xl font-medium leading-normal text-red"
          >
            {{ $t('CONFIRMATION') }}
          </h5>
        </div>
        <div class="modal-body relative p-4 text-red font-medium font-manrope">
          Será cobrado uma taxa de {{ taxa }} para realizar o saque.
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-white rounded-b-md"
        >
          <button
            type="submit"
            data-bs-dismiss="modal"
            class="px-6 py-2.5 bg-red text-orange font-manrope rounded-md font-bold text-xs leading-tight uppercase rounded hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out ml-1"
          >
            {{ $t('OK') }}
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            class="px-6 py-2.5 bg-transparent text-red font-manrope font-bold text-xs leading-tight uppercase rounded hover:bg-purple-700 focus:outline-none focus:ring-0transition duration-150 ease-in-out"
          >
            {{ $t('CANCEL') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taxa: { type: String, required: true },
  },
  setup() {
    return {
      value: {
        data_inicio: null,
        data_fim: null,
      },
      min: null,
    }
  },
  methods: {
    apply(e) {
      e.preventDefault()
      this.$emit('withDrawal', e)
    },
  },
}
</script>
