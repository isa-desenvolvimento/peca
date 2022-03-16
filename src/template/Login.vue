<template>
  <translation name="slide-fade" :duration="{ enter: 500, leave: 800 }">
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" :src="logo" alt="Workflow" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ description }}
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST" @submit="submit">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">{{ inputName }}</label>
              <input
                id="email-address"
                :name="inputType"
                :type="inputType"
                :autocomplete="inputType"
                required=""
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="inputName"
                @change="$emit('update:modelValue', $event.target.value)"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              {{ btnName }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </translation>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'

export default {
  components: {
    LockClosedIcon,
  },
  props: {
    logo: { type: String, required: true },
    description: { type: String, required: true },
    inputName: { type: String, required: true },
    inputType: { type: String, required: true },
    btnName: { type: String, required: true },
    submit: { type: Function, required: true },
  },
  data() {
    return { value: '' }
  },
}
</script>
