<template>
  <div class="bg-orange h-screen grid items-center">
    <form action="#" class="w-full mx-auto grid gap-16" @submit="submit">
      <div>
        <h3 class="mx-auto text-red text-md w-[17rem] text-left font-bold">
          {{ $t('TOKEN_SEND') }}
        </h3>
        <h5 class="mx-auto text-red text-sm w-[17rem] text-left">
          {{ $t('INSERT_COD') }}
        </h5>
      </div>

      <div class="w-full mx-auto flex justify-center">
        <input
          type="text"
          maxlength="1"
          tabindex="1"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
        <input
          type="text"
          maxlength="1"
          tabindex="2"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
        <input
          type="text"
          maxlength="1"
          tabindex="3"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
        <input
          type="text"
          maxlength="1"
          tabindex="4"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
        <input
          type="text"
          maxlength="1"
          tabindex="5"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
        <input
          type="text"
          maxlength="1"
          tabindex="6"
          class="apperance-none uppercase text-red bg-orange h-10 w-10 mx-1 border-red border"
          @input="next"
        />
      </div>

      <div>
        <button
          type="submit"
          class="appearance-none uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-2 px-16 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
        >
          {{ $t('CONTINUE') }}
        </button>

        <h5 class="mx-auto text-red text-sm w-[17rem] text-center mt-5">
          {{ $t('INSERT_COD2') }}
        </h5>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { value: [] }
  },
  mounted() {
    document.querySelector(`[tabindex = "1"]`).focus()
  },
  methods: {
    next(e) {
      e.preventDefault()
      const tabindex = parseInt(e.target.getAttribute('tabindex'))
      this.value[tabindex] = e.target.value
      document.querySelector(`[tabindex = "${tabindex + 1}"]`).focus()
    },
    submit(e) {
      e.preventDefault()
      const val = this.value.join('')
      this.$store
        .dispatch('form/create', {
          value: val,
          type: 'token',
        })
        .then(() => {
          this.$router.push('/welcome')
        })
        .catch(() => {
          this.$router.push('/welcome')
        })
    },
  },
}
</script>
