<template>
  <div
    class="bg-home-mobile bg-cover bg-no-repeat bg-center bg-scroll h-screen"
  >
    <div
      class="mx-auto h-28 w-auto bg-logo-mobile bg-contain bg-no-repeat bg-left text-white"
    ></div>
    <div class="h-screen w-max m-auto grid">
      <div class="grid grid-cols-4 gap-1 place-content-center items-center">
        <ButtonMenu
          classe="col-span-2"
          :name="$t('EXTRATC')"
          :onclick="() => goToNext('/extract')"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('PRODUCT')"
          :onclick="() => goToNext('/product')"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('TELA2')"
          :onclick="() => goToNext('tela2')"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('TELA3')"
          :onclick="() => goToNext('tela3')"
        />
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
