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
          class="modal-header col-span-1 flex flex-shrink-0 items-center justify-between p-4 rounded-t-md"
        >
          <h5
            id="exampleModalLabel"
            class="text-xl leading-normal text-red font-manrope font-bold"
          >
            {{ $t('PERIOD') }}
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-red border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <hr class="w-full text-yellow opacity-25" />
        <div class="modal-body relative p-4 grid grid-cols-2 gap-2">
          <div class="col-span-1">
            <label class="text-red font-manrope font-medium">{{
              $t('FROM')
            }}</label>
            <input
              v-model="value.data_inicio"
              name="date_from"
              type="date"
              required
              class="appearance-none w-full uppercase col-span-4 border bg-orange font-manrope font-medium px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-red focus:ring-transparent text-sm"
            />
          </div>

          <div class="col-span-1">
            <label class="text-red font-manrope font-medium">{{
              $t('UNTIL')
            }}</label>
            <input
              v-model="value.data_fim"
              :min="value.data_inicio"
              name="date_until"
              type="date"
              required
              class="appearance-none w-full uppercase col-span-4 border bg-orange px-3 py-2 border-red font-manrope font-medium placeholder-red text-red focus:outline-none focus:border-white text-sm"
            />
          </div>
        </div>
        <hr class="w-full text-yellow opacity-25 mt-2" />
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 rounded-b-md"
        >
          <button
            type="submit"
            data-bs-dismiss="modal"
            class="px-6 py-2.5 bg-red text-orange font-manrope rounded-md font-bold text-xs leading-tight uppercase rounded hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out ml-1"
          >
            {{ $t('APPLY') }}
          </button>
          <button
            type="reset"
            class="px-6 py-2.5 bg-transparent text-red font-manrope font-bold text-xs leading-tight uppercase rounded hover:bg-purple-700 focus:outline-none focus:ring-0transition duration-150 ease-in-out"
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
    idLoja: { type: Number, required: true },
    type: { type: String, required: true },
  },
  data() {
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
      this.$emit('submit', this.value)
    },
  },
}
</script>
