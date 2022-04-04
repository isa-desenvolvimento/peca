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
          class="font-manrope border text-red font-light text-sm break-words p-2 overflow-auto mb-20"
        >
          <div>
            <Markdown :source="termo" />
          </div>
        </div>

        <div class="fixed bottom-10 lef-0 right-0 w-full grid justify-center">
          <button
            type="button"
            class="appearance-none rounded-md uppercase font-manrope font-bold bg-red leading-normal justify-center py-2 px-10 text-xs text-orange hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('CONFIRME') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Markdown from 'vue3-markdown-it'
import { useStore } from 'vuex'

export default {
  components: {
    Markdown,
  },
  setup() {
    const { dispatch } = useStore()

    dispatch('list/getList', 'termo')
  },
  computed: {
    termo() {
      return this.$store.state.list?.termo
    },
  },
}
</script>
