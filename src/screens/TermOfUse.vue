<template>
  <transition name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div class="h-screen flex bg-orange p-10">
      <div class="grid lg:justify-center lg:mx-auto">
        <div
          class="uppercase bg-orange font-manrope border-red placeholder-red text-red text-center text-md font-bold my-10"
        >
          {{ $t('TERMS_OF_USE') }}
        </div>

        <div
          class="font-manrope border text-red font-light text-sm break-words p-2 overflow-auto"
        >
          <div>
            <Termo />
            <Politica />
          </div>
        </div>
        <div
          class="font-manrope text-red font-light text-center text-sm break-words p-2 overflow-auto mb-20 mt-10"
        >
          {{ $t('TO_BE_CONTINUE') }}
        </div>

        <div class="fixed bottom-10 lef-0 right-0 w-full grid justify-center">
          <button
            type="button"
            class="appearance-none rounded-md uppercase font-manrope font-bold bg-red leading-normal justify-center py-2 px-10 text-xs text-orange"
            @click="submitForm"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { messagesFetch } from '@/util/toast.js'
import Termo from '@/components/Termo.vue'
import Politica from '@/components/Politica.vue'

export default {
  components: { Termo, Politica },
  methods: {
    submitForm() {
      this.$store
        .dispatch('form/create', {
          value: JSON.parse(sessionStorage.getItem('fornecedor')),
          type: 'fornecedor',
        })
        .then(() => {
          messagesFetch('success', window.$t('MESSAGE.SUCCESS_CREATE'))
          this.$router.push('/lack-little')
        })
    },
  },
}
</script>
