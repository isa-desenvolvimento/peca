<template>
  <div
    class="bg-home-mobile bg-cover bg-no-repeat bg-center bg-scroll h-screen overflow-hidden"
  >
    <div
      class="mx-auto h-24 w-full bg-logo-mobile bg-contain bg-no-repeat bg-left text-white"
    >
      <div @click="() => goToNext('/profile')">
        <file-avatar :value="avatar" classe="w-20 h-20 my-4 ml-auto mr-4" />
      </div>
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
      return URL + this.$store.state.list?.auth.profile_img
    },
  },
  methods: {
    goToNext(screen) {
      this.$router.push(screen)
    },
  },
}
</script>
