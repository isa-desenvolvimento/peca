<template>
  <div
    class="grid item-center bg-home-mobile bg-contain w-full bg-no-repeat bg-center lg:bg-left-center bg-scroll h-screen overflow-hidden ease-in duration-30"
  >
    <div
      class="mx-auto h-24 w-full bg-logo-mobile bg-contain bg-no-repeat bg-left text-white"
    >
      <div @click="() => goToNext('/profile')">
        <file-avatar :value="avatar" classe="w-10 h-10 my-4 ml-auto mr-4" />
      </div>
    </div>

    <div
      class="h-screen w-full m-auto lg:justify-end lg:grid-cols-4 grid place-content-center items-center"
    >
      <div
        class="grid grid-cols-4 h-4/5 grid-rows-6 gap-4 justify-between lg:col-start-3"
      >
        <ButtonMenu
          classe="col-span-2 row-start-1 row-end-3"
          :name="$t('EXTRATC')"
          :onclick="() => goToNext('/extract')"
          icon="bg-icon-extrato"
        />
        <ButtonMenu
          classe="col-span-2 row-start-1 row-end-4"
          :name="$t('PRODUCT')"
          :onclick="() => goToNext('/product')"
          icon="bg-icon-produto"
        />

        <ButtonMenu
          classe="col-span-2 row-start-3 row-end-5 "
          :name="$t('DEVOLUTION')"
          icon="bg-icon-devolucao"
          :onclick="() => goToNext('/devolution')"
          disabled
        />
        <ButtonMenu
          classe="col-span-2 row-start-4 row-end-5 pt-2 pb-4"
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
import { URL } from '@/api/http.js'
import FileAvatar from '@/components/FileAvatar.vue'

import { useStore } from 'vuex'

export default {
  components: {
    ButtonMenu,
    FileAvatar,
  },
  setup() {
    const { dispatch } = useStore()

    dispatch('list/getList', 'auth')
  },
  computed: {
    avatar() {
      return URL + this.$store.state.list.auth.profile_img
    },
  },
  methods: {
    goToNext(screen) {
      this.$router.push(screen)
    },
  },
}
</script>

<style scoped>
:deep(.popper) {
  background: var(--bg-orange);
  padding: 20px;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: Manrope;
}

:deep(.popper #arrow::before) {
  background: var(--bg-orange);
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
  background: var(--bg-orange);
}
</style>
