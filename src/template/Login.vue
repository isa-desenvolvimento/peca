<template>
  <div class="h-screen grid items-center w-full bg-yellow ease-in duration-300">
    <div class="max-w-md w-full mx-auto">
      <div class="mx-auto">
        <!-- <img class="mx-auto h-12 w-auto" :src="logo" alt="Workflow" /> -->
        <div
          v-if="hasLogo"
          class="mx-auto h-48 w-auto bg-logo-mobile bg-contain bg-no-repeat bg-center text-white"
        ></div>

        <div v-else class="grid w-full">
          <div class="grid mx-auto">
            <Title
              :title="title"
              classe="text-orange   text-lg leading-[2.5rem]  lg:text-6xl lg:leading-[3.5rem] w-full "
            >
              <div class="break-word w-20">{{ subtitle }}</div>
            </Title>
            <Description
              classe="text-orange text-sm w-full text-left lg:mx-auto font-manrope mt-2"
            >
              {{ description }}</Description
            >
          </div>
        </div>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST"
        @submit="(e) => submit(e)"
        @keyup.enter="() => submit()"
      >
        <div
          class="font-manrope font-bold text-center text-white grid justify-center"
        >
          <label for="email-address">{{ inputName }}</label>
          <input
            v-if="mask"
            :id="inputName"
            v-mask="mask"
            :name="inputType"
            :type="inputType"
            :autocomplete="inputType"
            required=""
            class="appearance-none border bg-yellow w-60 px-3 py-2 border-white placeholder-white text-center text-white focus:outline-none focus:border-white sm:text-sm"
            @change="$emit('update:modelValue', $event.target.value)"
          />

          <div v-else class="bg-white w-60 grid grid-cols-8">
            <input
              :id="inputName"
              :name="inputType"
              :type="inputType2"
              :autocomplete="inputType"
              required=""
              class="appearance-none border bg-yellow col-span-6 px-3 py-2 border-white placeholder-white text-white focus:outline-none focus:border-white sm:text-sm"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <eye
              v-if="inputType === 'password'"
              class="bg-white col-span-2"
              @toggle="toggle"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none rounded-md bg-pink mx-auto group relative w-auto leading-normal flex justify-center mt-8 py-1 px-5 text-sm font-manrope font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            {{ btnName }}
          </button>
          <Description
            v-if="inputType === 'password'"
            classe="text-orange text-xs w-full text-center mx-auto font-manrope mt-10 font-bold cursor:pointer"
          >
            <a href="#" @click="reset"> {{ subdescription }} </a></Description
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'
import Eye from '@/components/Eye.vue'

export default {
  components: { Title, Description, Eye },

  props: {
    inputName: { type: String, required: true },
    inputType: { type: String, required: true },
    btnName: { type: String, required: true },
    mask: { type: String, required: false },
    hasLogo: { type: Boolean, required: false, default: true },
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
    description: { type: String, required: false },
    subdescription: { type: String, required: false },
    submit: { type: Function, required: true },
    reset: { type: Function, required: true },
  },
  data() {
    return { value: '', color: 'text-white', inputType2: '' }
  },
  created() {
    this.inputType2 = this.inputType
  },
  methods: {
    toggle() {
      this.inputType2 = this.inputType2 === 'password' ? 'text' : 'password'
    },
  },
}
</script>
