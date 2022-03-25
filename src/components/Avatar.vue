<template>
  <div>
    <vue-avatar
      ref="vueavatar"
      :width="400"
      :height="400"
      @vue-avatar-editor:image-ready="onImageReady"
    >
    </vue-avatar>
  </div>
</template>

<script>
import { VueAvatar } from 'vue-avatar-editor-improved'

export default {
  components: {
    VueAvatar,
  },
  props: {
    value: { type: String, required: true }
  },
  methods: {
    created() {
      debugger
      this.$refs.image.src = this.value
    },
    saveClicked() {
      var img = this.$refs.vueavatar.getImageScaled()
      this.$refs.image.src = img.toDataURL()
    },
    onImageReady() {
      this.scale = 1
      this.rotation = 0
    },
  },
}
</script>
