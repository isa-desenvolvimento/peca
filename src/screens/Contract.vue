<template>
  <div class="bg-orange h-screen overflow-hidden p-4">
    <Header :title="$t('CONTRACT')" />

    <h3 class="text-base w-60 mt-8 my-2 text-red text-left">
      {{ $t('CONTRACT_ON') }}
    </h3>
    <div class="flex justify-center">
      <div class="rounded-md border border-red w-96 text-red">
        <button-item
          v-for="(item, key) in list"
          :key="key"
          :name="item.nome_fantasia"
          icon="bg-icon-prancheta"
          @click="download(item.arquivo)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import { useStore, mapState } from 'vuex'
import { URL } from '@/api/http.js'

export default {
  components: { ButtonItem, Header },
  setup() {
    const { dispatch } = useStore()
    dispatch('list/getList', 'contrato')
  },
  computed: mapState({
    list: (state) => state.list.contrato,
  }),
  methods: {
    download(pdf) {
      const arquivo = `${URL}/storage/upload/contratos/${pdf}`
      // var blob = new Blob([arquivo], { type: 'application/octetstream' })

      // let blob = new Blob([arquivo], { type: 'text/plain;charset=utf-8;' })
      const link = window.document.createElement('a')
      link.href = arquivo
      link.download = pdf
      window.URL.revokeObjectURL(link.href)
      link.click()
      //window.open(link, '_blank')
    },
  },
}
</script>
