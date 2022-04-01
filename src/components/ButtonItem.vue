<template>
  <button
    aria-current="true"
    type="button"
    class="inline-block leading-tight hover:bg-opacity-5 text-center px-6 py-2 w-full rounded-t-lg bg-blue-600 cursor-pointer grid items-center hover:bg-yellow-light focus:bg-yellow-light"
  >
    <div
      class="h-24 w-auto bg-contain bg-no-repeat bg-center text-red mb-12"
      :class="icon"
    ></div>

    <div class="text-sm font-regular text-red uppercase mt-[-3rem]">
      {{ title }}
    </div>

    <div class="text-xs font-regular text-white bg-red uppercase p-2">
      {{ $t('DOWNLOAD') }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
}
</script>
