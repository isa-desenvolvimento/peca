<template>
  <div class="h-screen grid items-center w-full bg-orange ease-in duration-300">
    <div class="grid justify-center mx-auto">
      <div class="">
        <Title
          :title="$t('WELCOME')"
          classe="text-red w-80 text-lg leading-[2.5rem]"
        />
        <Description classe="text-red text-sm  w-72 text-left  font-manrope">
          {{ $t('UHUL') }}
        </Description>
      </div>
      <form
        action="#"
        class="mx-auto grid text-center mt-10 w-[15rem]"
        @submit="submit"
      >
        <label class="mx-auto text-red font-bold text-center font-manrope">{{
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
            class="appearance-none rounded-md uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-2 px-16 text-xs font-manrope text-orange bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'
export default {
  components: { Description, Title },
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
