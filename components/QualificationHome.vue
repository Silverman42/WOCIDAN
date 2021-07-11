<template>
  <section class="px-4 py-32 relative">
    <div class="max-w-2xl mx-auto relative text-center mb-10">
      <h2
        class="
          font-serif
          text-4xl
          mb-5
          md:text-6xl
          text-primary-700
          hide-slideUp
        "
      >
        How do you qualify to own your home ?
      </h2>
      <p class="text-gray-600 mb-8 hide-slideUp">
        The SMART Cities project design is for civil servants and low income
        earners who contribute 2.5% of their monthly income/salaries to the
        Federal Mortgage Bank of Nigeria (FMBN) under the National Housing Fund
        (NHF) Act No 3 of 1992 to have access to retail mortgage loans to buy
        and own a home to be built by us in collaboration technical and
        financial partners from the U.K and the USA.
      </p>
      <nuxt-link
        to=""
        class="
          flex
          mx-auto
          justify-center
          text-primary-500
          hover:text-primary-700
          items-center
          mb-8
          hide-slideUp
        "
      >
        <span class="mr-3">Learn more</span>
        <arrow-right-icon size="1x"></arrow-right-icon>
      </nuxt-link>
      <div class="grid lg:grid-cols-3 lg:grid-rows-3 h-96 lg:h-screen gap-3">
        <div class="col-start-1 col-end-3 row-start-1 row-end-2 hide-slideUp">
          <img
            src="/img/interior_1.jpeg"
            class="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div
          class="col-start-3 col-end-4 row-start-1 row-end-3 hide-slideInRight"
        >
          <img
            src="/img/interior_2.jpeg"
            class="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div
          class="col-start-1 col-end-2 row-start-2 row-end-4 hide-slideInLeft"
        >
          <img
            src="/img/interior_3.jpeg"
            class="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div class="col-start-2 col-end-4 row-start-3 row-end-4 hide-slideUp">
          <img
            src="/img/interior_4.jpeg"
            class="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="max-w-5xl mx-auto grid grid-cols-1 gap-6 items-end md:grid-cols-4"
    ></div>
  </section>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowRightIcon,
  },
}
</script>

<style scoped></style>
