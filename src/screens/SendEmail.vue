<template>
  <feed-back title="" description="" background="bg-yellow">
    <template #body>
      <Title :title="$t('SEND_EMAIL')" classe="text-orange w-[17rem] mx-auto" />

      <Description
        classe="text-orange text-sm w-full text-left mt-6 mb-60 mx-auto"
      >
        {{ $t('VERIFY_SEND_EMAIL') }}
      </Description>
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'
import Description from '@/components/Description.vue'
import Title from '@/components/Title.vue'

export default {
  components: { FeedBack, Description, Title },
}
</script>
