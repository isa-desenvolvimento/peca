<template>
<div class="bg-orange h-screen overflow-hidden p-4">
  <Header :title="$t('CONTRACT')" />

  <h3 class="text-base w-60 mt-8 my-2 text-red text-left">{{ $t('CONTRACT_ON') }}</h3>
  <div class="flex justify-center">
    <div class="rounded-md border border-red w-96 text-red">
      <button-item
        v-for="(item, key) in slides"
        :key="key"
        :name="item.name"
        :icon="item.icon"
      />
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ButtonItem from '@/components/ButtonItem.vue'

export default {
  components: { ButtonItem, Header },
  data() {
    return {
      slides: [
        { name: 'teste1', icon: 'bg-icon-prancheta' },
        { name: 'teste2', icon: 'bg-icon-prancheta' },
        { name: 'teste3', icon: 'bg-icon-prancheta' },
        { name: 'teste4', icon: 'bg-icon-prancheta' },
      ],
    }
  },
}
</script>
