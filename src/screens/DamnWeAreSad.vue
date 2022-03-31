<template>
  <feed-back
    :title="$t('POXA')"
    :description="$t('WE_ARE_SAD')"
    background="bg-pink"
  >
    <template #body>
      <Description
        classe="text-orange text-sm w-full text-left mt-6 mb-60 mx-auto"
      >
        <div class="w-[13rem]">
          {{ $t('BUT_IF_YOU_CHANGE_YOUR_IDEA_IS_TO') }}
          <a href="/login" class="underline underline-offset-1">
            {{ $t('CLICK_HERE') }}
          </a>
        </div>
      </Description>
    </template>
  </feed-back>
</template>

<script>
import FeedBack from '@/template/FeedBack.vue'
import Description from '@/components/Description.vue'

export default {
  components: { FeedBack, Description },
}
</script>
