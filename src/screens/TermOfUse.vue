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
            <Markdown :source="fileContentTermo" />
            <Markdown :source="fileContentPolitica" />
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
            @click="$router.push('/')"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Markdown from 'vue3-markdown-it'
import Termo from '@/assets/Termo.md'
import Politica from '@/assets/Termo.md'

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      fileContentTermo: '',
      fileContentPolitica: '',
    }
  },
  mounted() {
    this.getMDFile()
  },
  methods: {
    getMDFile() {
      this.fileContentTermo = Termo
      this.fileContentPolitica = Politica
    },
  },
}
</script>
