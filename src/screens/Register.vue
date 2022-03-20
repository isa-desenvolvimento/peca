<template>
  <div class="bg-orange h-screen grid items-center">
    <div class="w-full mx-auto" uppercase>
      <h3 class="mx-auto text-red text-base w-[17rem] text-left font-bold">
        {{ $t('YOUR_REGISTER') }}
      </h3>
      <form
        class="mt-8 space-y-6"
        uppercase
        action="#"
        method="POST"
        @submit="submit"
      >
        <div class="w-4/5 mx-auto">
          <div
            class="text-center text-white grid justify-center grid grid-flow-row-dense grid-cols-4"
          >
            <input
              name="name"
              type="text"
              required
              class="appearance-none col-span-4 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NAME')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              v-mask="'###.###.###-##'"
              name="cpf"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CPF')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              v-mask="'##.###.###'"
              name="cpf"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('RG')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              v-mask="'##/##/####'"
              name="dt_birthday"
              type="date"
              required
              class="appearance-none w-full uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('BIRTHDAY')"
              @change="$emit('update:modelValue', $event.target.value)"
            />
            <input
              v-mask="'(##) # ####-####'"
              name="dt_birthday"
              type="tel"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('TELEPHONE')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="dt_birthday"
              type="email"
              required
              class="appearance-none col-span-4 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('EMAIL')"
              @change="$emit('update:modelValue', $event.target.value)"
            />
            <input
              v-mask="'#####-###'"
              name="cep"
              type="text"
              required
              class="appearance-none col-span-2 uppercase border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CEP')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="city"
              type="text"
              required
              class="appearance-none uppercase col-span-1 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('CITY')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="uf"
              type="text"
              maxlength="2"
              required
              class="appearance-none uppercase col-span-1 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('UF')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="uf"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('PLACE')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="complement"
              type="text"
              required
              class="appearance-none uppercase col-span-4 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('COMPLEMENT')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="number"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('NUMBER')"
              @change="$emit('update:modelValue', $event.target.value)"
            />

            <input
              name="district"
              type="text"
              required
              class="appearance-none uppercase col-span-2 border bg-orange px-3 py-2 border-red placeholder-red text-red focus:outline-none focus:border-white text-sm"
              :placeholder="$t('DISTRICT')"
              @change="$emit('update:modelValue', $event.target.value)"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="appearance-none uppercase bg-red mx-auto group relative w-20 leading-normal flex justify-center mt-8 py-2 px-16 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t('CONTINUE') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>
