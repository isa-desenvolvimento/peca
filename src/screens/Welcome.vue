<template>
  <div class="h-screen grid items-center w-full bg-orange ease-in duration-300">
    <div class="grid justify-center mx-auto">
      <div class="">
        <Title
          :title="$t('WELCOME')"
          classe="text-red w-80 text-lg leading-[2.5rem]  lg:text-6xl lg:leading-[3.5rem] lg:w-[30rem]"
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
            v-model="value.pwd"
            type="password"
            class="appearance-none tracking-[.08em] bg-orange font-manrope border-red text-red placeholder-red text-center text-xs w-full"
            :placeholder="$t('PASSWORD')"
          />
        </div>
        <div class="flex">
          <input
            id="CONFIRME_PASSWORD"
            v-model="value.confirm"
            :placeholder="$t('CONFIRME_PASSWORD')"
            type="password"
            class="appearance-none tracking-[.08em] bg-orange font-manrope border-red text-red placeholder-red text-center text-xs w-full"
            @change="validPassword"
          />
        </div>
        <div>
          <button
            type="submit"
            class="appearance-none tracking-[.08em] rounded-md uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-2 px-16 text-xs font-manrope text-orange bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-red focus:ring-offset-2 focus:ring-transparent"
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

import { useRoute } from 'vue-router'

export default {
  components: { Description, Title },
  setup() {
    const route = useRoute()
    const token = route.query.token || null

    // let uri = window.location.search.substring(1);
    // let params = new URLSearchParams(uri);
    // console.log(params.get("token"));

    return { token }
  },
  data() {
    return {
      value: { pwd: '', confirm: '', notAdd: true, token: this.token },
    }
  },
  methods: {
    validPassword() {
      if (this.value.pwd !== this.value.confirm) {
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
        delete this.value.confirm

        this.$store
          .dispatch('form/create', {
            value: this.value,
            type: 'updpwd',
          })
          .then(() => {
            this.$store.dispatch('form/setToast', {
              status: 'success',
              type: 'CREATE',
            })
            this.$router.push('/')
          })
          .catch(() => {
            this.$store.dispatch('form/setToast', {
              status: 'danger',
              type: 'TOKEN_INVALID',
            })
          })
      }
    },
  },
}
</script>
