<template>
  <div class="bg-orange h-screen w-full overflow-y-auto p-6">
    <Header :title="$t('CONTRACT')" />

    <h3 class="text-base w-60 mt-8 my-2 text-red">
      {{ $t('CONTRACT_ON') }}
    </h3>
    <div class="grid grid-cols-3 justify-center mt-10 md:w-6/12 md:mx-auto">
      <button-item
        v-for="(item, key) in list"
        :key="key"
        :title="item.nome_fantasia"
        :arquivo="item.arquivo"
        icon="bg-icon-prancheta"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import { useStore, mapState } from 'vuex'

export default {
  components: { ButtonItem, Header },
  setup() {
    document.title = 'Clube Peça Rara | Contrato'

    const { dispatch } = useStore()
    dispatch('list/getList', 'contrato')
  },
  computed: mapState({
    list: (state) => state.list.contrato,
  }),
}
</script>
