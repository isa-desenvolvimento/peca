<template>
  <div class="mb-3">
    <div class="inline-flex justify-between w-full" role="group">
      <ul
        id="tabs-tab3"
        class="nav nav-tabs list-none inline-flex justify-between w-full"
        role="tablist"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="tab"
          class="nav-item text-red font-manrope font-bold focus:bg-yellow-ligth focus:text-red active:text-red"
          role="presentation"
        >
          <a
            :id="`button_tap_${index}`"
            href="#"
            class="nav-link w-full break-normal block text-red font-manrope text-xs leading-snug uppercase font-bold leading-tight uppercase py-3 my-2 px-4"
            data-bs-toggle="pill"
            :data-bs-target="`button_tap_${index}`"
            role="tab"
            :aria-controls="`button_tap_${index}`"
            :aria-selected="index === 0"
            :class="index === 0 ? 'active' : ''"
            @click="() => getPeriodo(tab)"
          >
            {{ tab }} {{ $t('DAY') }}</a
          >
        </li>
        <li
          class="nav-item text-red font-manrope text-xs font-bold focus:bg-yellow-ligth focus:text-red active:text-red"
          role="presentation"
        >
          <a
            id="button_tap"
            href="#"
            class="nav-link w-full break-normal block text-red font-manrope text-xs leading-snug uppercase font-bold leading-tight uppercase py-3 my-2 px-2"
            data-bs-toggle="pill"
            role="tab"
            @click="(e) => getOthers(e)"
          >
            <a data-bs-toggle="modal" data-bs-target="#modalPeriod">
              {{ $t('OTHERS') }}
            </a>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <Modal :id-loja="idLoja" :type="type" />
</template>

<script>
import { periodoDate } from '@/util/date'
import Modal from '@/components/Modal.vue'

export default {
  components: { Modal },
  props: {
    idLoja: { type: String, required: true },
    type: { type: String, required: true },
  },
  setup() {
    return {
      tabs: [7, 15, 30],
    }
  },
  methods: {
    getPeriodo(periodo) {
      this.$emit('click', periodoDate(periodo))
    },
    getOthers(periodo) {
      this.$emit('click', periodo)
    },
  },
}
</script>

<style scoped>
.nav-tabs .nav-link.active {
  color: var(--bg-red);
  border-color: transparent;
  background-color: var(--bg-yellow-ligth);
  font-family: Manrope;
  font-weight: bold;
}

.nav-tabs .nav-link {
  color: var(--bg-red);
  border-color: transparent;
}
</style>
