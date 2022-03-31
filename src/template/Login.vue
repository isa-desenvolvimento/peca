<template>
  <div
    class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-yellow"
  >
    <div class="max-w-md w-full">
      <div class="mx-auto">
        <!-- <img class="mx-auto h-12 w-auto" :src="logo" alt="Workflow" /> -->
        <div
          v-if="hasLogo"
          class="mx-auto h-48 w-auto bg-logo-mobile bg-contain bg-no-repeat bg-center text-white"
        ></div>

        <div v-else class="grid w-full">
          <div class="grid mx-auto">
            <Title :title="title" :classe="color"> {{ subtitle }} </Title>
            <Description :classe="color"> {{ description }}</Description>
          </div>
        </div>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST" @submit="submit">
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

          <input
            v-else
            :id="inputName"
            :name="inputType"
            :type="inputType"
            :autocomplete="inputType"
            required=""
            class="appearance-none border bg-yellow w-60 px-3 py-2 border-white placeholder-white text-white focus:outline-none focus:border-white sm:text-sm"
            @change="$emit('update:modelValue', $event.target.value)"
          />
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none bg-pink mx-auto group relative w-auto leading-normal flex justify-center mt-8 py-1 px-5 text-sm font-manrope font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ btnName }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Description from '@/components/Description.vue'

export default {
  components: { Title, Description },

  props: {
    inputName: { type: String, required: true },
    inputType: { type: String, required: true },
    btnName: { type: String, required: true },
    mask: { type: String, required: false },
    hasLogo: { type: Boolean, required: false, default: true },
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
    description: { type: String, required: false },
    submit: { type: Function, required: true },
  },
  data() {
    return { value: '', color: 'text-white' }
  },
}
</script>
