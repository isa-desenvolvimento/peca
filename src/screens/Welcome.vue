<template>
  <div class="mx-auto px-12 bg-orange h-screen grid justify-center">
    <feed-back
      :title="$t('WELCOME')"
      :description="$t('UHUL')"
      background="bg-orange"
      color="text-red w-auto"
      classe="grid w-full "
    >
      <template #body>
        <form
          action="#"
          class="mx-auto text-center mt-10 mb-60 w-[15rem]"
          @submit="submit"
        >
          <label class="mx-auto text-red font-bold text-center">{{
            $t('REGISTER_PASSWORD')
          }}</label>
          <div class="flex">
            <input
              id="PASSWORD"
              v-model="value.password"
              type="password"
              class="appearance-none bg-orange font-manrope border-red text-red placeholder-red text-center text-xs w-full"
              :placeholder="$t('PASSWORD')"
            />
          </div>
          <div class="flex">
            <input
              id="CONFIRME_PASSWORD"
              v-model="value.confirm"
              :placeholder="$t('CONFIRME_PASSWORD')"
              type="password"
              class="appearance-none bg-orange font-manrope border-red text-red placeholder-red text-center text-xs w-full"
              @change="validPassword"
            />
          </div>
          <div>
            <button
              type="submit"
              class="appearance-none rounded-md uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-1 px-16 text-sm font-manrope text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t('CONTINUE') }}
            </button>
          </div>
        </form>
      </template>
    </feed-back>
  </div>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'

export default {
  components: { FeedBack },
  data() {
    return {
      value: { password: '', confirm: '' },
    }
  },
  methods: {
    validPassword() {
      if (this.value.password !== this.value.confirm) {
        this.$store.dispatch('form/setToast', {
          status: 'danger',
          type: 'PASSWORD_CONFIRM',
        })

        return false
      }

      return true
    },
    submit(e) {
      e.preventDefault()

      if (this.validPassword()) {
        this.$store
          .dispatch('form/create', {
            value: this.value,
            type: 'updpwd',
          })
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    },
  },
}
</script>
