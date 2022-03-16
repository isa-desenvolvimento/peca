<template>
  <div
    class="bg-background-default bg-cover bg-no-repeat bg-center bg-scroll h-screen"
  >
    <div class="grid h-screen justify-evenly">
      <div class="grid grid-cols sm:grid-cols-2 gap-4 place-content-center">
        <ButtonMenu
          :name="$t('EXTRATC')"
          :onclick="() => goToNext('/extract')"
        />
        <ButtonMenu
          :name="$t('PRODUCT')"
          :onclick="() => goToNext('/product')"
        />
        <ButtonMenu :name="$t('TELA2')" :onclick="() => goToNext('tela2')" />
        <ButtonMenu :name="$t('TELA3')" :onclick="() => goToNext('tela3')" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMenu from '@/components/ButtonMenu.vue'
export default {
  components: {
    ButtonMenu,
  },
  methods: {
    goToNext(screen) {
      this.$router.push(screen)
    },
  },
}
</script>
