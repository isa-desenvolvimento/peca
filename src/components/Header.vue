<template>
  <div id="jump_to_me" class="flex gap-4 my-4">
    <div>
      <button
        class="h-12 w-12 p-2 rounded-full max-w-md rounded-md items-center inline-block hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center bg-contain bg-no-repeat bg-center text-white bg-icon-back"
        :class="classe"
        @click="$router.back()"
      ></button>
    </div>
    <div>
      <button
        class="h-12 w-12 p-2 rounded-full max-w-md rounded-md items-center inline-block hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center bg-contain bg-no-repeat bg-center text-white bg-icon-home"
        :class="classe"
        @click="$router.push('/')"
      ></button>
    </div>
    <div
      class="h-10 ml-auto text-yellow text-md font-bold w-40 text-right leading-6 uppercase font-manrope"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
  created() {
    console.log(this.title)
  },
}
</script>
