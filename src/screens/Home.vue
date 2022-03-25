<template>
  <div
    class="bg-home-mobile bg-cover bg-no-repeat bg-center bg-scroll h-screen overflow-hidden"
  >
    <div
      class="mx-auto h-24 w-auto bg-logo-mobile bg-contain bg-no-repeat bg-left text-white"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-full w-20 ml-auto item-center p-2 m-4"
        alt="Avatar"
      />
    </div>

    <div class="h-screen w-max m-auto grid">
      <div
        class="grid grid-cols-4 gap-3 place-content-center items-center mt-[-9rem]"
      >
        <ButtonMenu
          classe="col-span-2"
          :name="$t('EXTRATC')"
          :onclick="() => goToNext('/extract')"
          icon="bg-icon-extrato"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('PRODUCT')"
          :onclick="() => goToNext('/product')"
          icon="bg-icon-produto"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('DEVOLUTION')"
          :onclick="() => goToNext('/devolution')"
          icon="bg-icon-devolucao"
        />
        <ButtonMenu
          classe="col-span-2"
          :name="$t('CONTRACT')"
          :onclick="() => goToNext('/contract')"
          icon="bg-icon-contrato"
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
