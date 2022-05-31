<template>
  <Message :title="$t('DONATION')" :description="$t('PRODUCT_SEND_DONATION')" />
</template>

<script>
import Message from '@/template/Message.vue'

export default {
  components: { Message },
}
</script>
