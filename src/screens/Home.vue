<template>
  <div
    class="bg-background-default bg-cover bg-no-repeat bg-center bg-scroll h-screen"
  >
    <div class="grid h-screen justify-evenly">
      <div class="grid grid-cols sm:grid-cols-2 gap-4 place-content-center">
        <ButtonMenu :name="$t('BUTTON')" :onclick="() => {}" />
        <ButtonMenu :name="$t('BUTTON')" :onclick="() => {}" />
        <ButtonMenu :name="$t('BUTTON')" :onclick="() => {}" />
        <ButtonMenu :name="$t('BUTTON')" :onclick="() => {}" />
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
}
</script>
