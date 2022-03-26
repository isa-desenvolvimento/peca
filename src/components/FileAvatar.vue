<template>
  <div class="container">
    <div
      class="bg-contain bg-cover bg-no-repeat bg-center rounded-full mb-10 cursor-pointer"
      :style="{ 'background-image': `url(${previewImage})` }"
      :class="classe"
      @click="isEditable && selectImage()"
    ></div>
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      @input="isEditable && pickFile()"
    />
    <h3
      v-if="isEditable"
      class="text-yellow text-sm w-full text-center mt-[-2rem]"
      @click="selectImage"
    >
      {{ $t('CHANGE_PHOTO_PROFILE') }}
    </h3>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    value: { type: String, required: false },
    classe: { type: String, required: false, default: 'w-48 h-48 m-auto' },
    isEditable: { type: Boolean, required: false, default: false },
  },
  setup() {
    const fileInput = ref([])
    return { fileInput }
  },
  data() {
    return { previewImage: null }
  },
  mounted() {
    this.previewImage = this.value || null
  },
  methods: {
    selectImage() {
      this.update = false
      this.fileInput.click()
    },
    pickFile() {
      let input = this.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          const user = JSON.parse(sessionStorage.getItem('user'))
          this.previewImage = e.target.result
          user.avatar = e.target.result

          sessionStorage.user = JSON.stringify(user)
          this.$emit('update:modelValue', e.target.result)
        }
        reader.readAsDataURL(file[0])
      }
    },
  },
}
</script>
