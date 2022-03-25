<template>
  <div>
    <div
      class="rounded-full w-32"
      alt="Avatar"
      :style="{ 'background-image': `url(${previewImage})` }"
    ></div>
    <input ref="fileInput" type="file" class="imageInput" @input="pickFile" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const fileInput = ref([])
    return { fileInput }
  },
  data() {
    return { previewImage: null }
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
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
      }
    },
  },
}
</script>
