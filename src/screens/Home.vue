<template>
  <div
    class="grid grid-rows-3 item-center bg-home-mobile bg-contain w-full bg-no-repeat bg-center lg:bg-left-center bg-scroll h-screen overflow-y-auto ease-in duration-30"
  >
    <div
      class="mx-auto h-24 lg:h-28 w-[75%] bg-logo-mobile bg-contain bg-no-repeat bg-left text-white mt-2 lg:mt-8 row-span-1"
    >
      <div class="ml-auto w-20" @click="() => goToNext('/profile')">
        <file-avatar
          :value="avatar"
          classe="w-12 h-12 my-6 ml-auto md:w-20 md:h-20 lg:w-12 lg:h-12"
        />
      </div>
    </div>

    <div
      class="w-full m-auto lg:justify-end lg:grid-cols-4 grid place-content-center items-center row-start-2 row-end-8"
    >
      <div
        class="grid grid-cols-4 grid-rows-8 gap-4 justify-between lg:col-start-3 lg:w-[80%]"
      >
        <!-- <div
        class="grid grid-cols-4 h-3/5 grid-rows-8 gap-4 justify-between lg:col-start-3 lg:w-[80%]"
      > -->
        <ButtonMenu
          classe="col-span-2 row-start-1 row-end-4"
          :name="$t('EXTRATC')"
          :onclick="() => goToNext('/extract')"
          icon="bg-icon-extrato"
        />
        <ButtonMenu
          classe="col-span-2 row-start-1 row-end-6"
          :name="$t('PRODUCT')"
          :onclick="() => goToNext('/product')"
          icon="bg-icon-produto"
        />

        <ButtonMenu
          classe="col-span-2 row-start-4 row-end-7"
          :name="$t('DEVOLUTION')"
          icon="bg-icon-devolucao"
          :onclick="() => goToNext('/devolution')"
        />
        <ButtonMenu
          classe="col-span-2 row-span-1 row-start-6 row-end-7 pt-2 pb-4"
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

import { useStore, mapState } from 'vuex'

export default {
  components: {
    ButtonMenu,
    FileAvatar,
  },
  setup() {
    const { dispatch } = useStore()
    document.title = 'Clube Peça Rara | Home'

    dispatch('list/getAuth')

    return { dispatch }
  },

  computed: mapState({
    avatar: (state) => URL + state.list.auth.profile_img,
  }),

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
