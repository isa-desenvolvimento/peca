<template>
  <feed-back
    :title="$t('POXA')"
    :description="$t('WE_ARE_SAD')"
    background="bg-white"
  >
    <template #body>
      <h3 class="mx-auto text-white text-base w-[17rem] text-left mt-6">
        {{ $t('BUT_IF_YOU_CHANGE_YOUR_IDEA_IS_TO') }}
        <a href="#" class="underline underline-offset-1">
          {{ $t('CLICK_HERE') }}
        </a>
      </h3>
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'

export default {
  components: { FeedBack },
}
</script>
