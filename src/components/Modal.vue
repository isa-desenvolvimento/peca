<template>
  <div
    id="modalPeriod"
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
            {{ $t('PERIOD') }}
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body relative p-4 grid grid-cols-2 gap-2">
          <div class="col-span-1">
            <label class="text-red">{{ $t('FROM') }}</label>
            <input
              v-model="value.data_inicio"
              name="date_from"
              type="date"
              required
              class="appearance-none w-full uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
            />
          </div>

          <div class="col-span-1">
            <label class="text-red">{{ $t('UNTIL') }}</label>
            <input
              v-model="value.data_fim"
              :min="value.de"
              name="date_until"
              type="date"
              required
              class="appearance-none w-full uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
            />
          </div>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-white rounded-b-md"
        >
          <button
            type="submit"
            data-bs-dismiss="modal"
            class="px-6 py-2.5 bg-red text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
          >
            {{ $t('APPLY') }}
          </button>
          <button
            type="button"
            class="px-6 py-2.5 bg-transparent text-red font-medium text-xs leading-tight uppercase rounded hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            {{ $t('CLEAR') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id_loja: { type: String, required: true },
    type: { type: String, required: true },
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
    clear() {
      this.value = {
        data_inicio: null,
        data_fim: null,
      }
    },
    apply(e) {
      e.preventDefault()
      this.$store.dispatch('list/getFilter', {
        type: this.type,
        id_loja: this.id_loja,
        ...this.value,
      })
    },
  },
}
</script>
