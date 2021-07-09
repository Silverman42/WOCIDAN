<template>
  <div class="mt-7">
    <agile
      :dots="false"
      :autoplay-speed="5000"
      :speed="1000"
      :infinite="true"
      :autoplay="true"
    >
      <div class="pr-3 mb-5 self-start">
        <div class="flex justify-between">
          <div class="max-w-xs">
            <h3 class="text-lg text-gray-900 font-bold">
              Delta State Government, Nigeria
            </h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          Delta State is an oil and agricultural producing State of Nigeria,
          situated in the region known as the South-South geo-political zone
          with a population of 4,098,291. The Delta State Government is in
          collaboration with WOC Infrastructural Development and Natural Gas
          Ltd. to build sustainable and power efficient houses that very
          affordable for Deltans
        </div>
        <a
          href="#"
          target="_blank"
          class="
            mt-4
            w-full
            flex
            text-sm
            justify-end
            text-blue-600
            hover:text-blue-800
            mr-2
            items-center
          "
        >
          <span>Visit company site</span>
          <arrow-right-icon size="1x" />
        </a>
      </div>
      <div class="pr-3 mb-5 self-start">
        <div class="flex justify-between">
          <div class="max-w-xs">
            <h3 class="text-lg text-gray-900 font-bold">
              Delta Trust Mortgage Bank <br />
            </h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          Delta Trust Mortgage Bank Ltd is a Primary Mortgage Bank wholly owned
          by Delta State Government. The Bank was incorporated in 1998 to carry
          out Mortgage and Banking related businesses for the benefit of the
          general public
        </div>
        <a
          href="#"
          class="
            mt-4
            w-full
            flex
            text-sm
            justify-end
            text-blue-600
            hover:text-blue-800
            mr-2
            items-center
          "
        >
          <span target="_blank">Visit company site</span>
          <arrow-right-icon size="1x" />
        </a>
      </div>
      <div class="pr-3 mb-5 self-start">
        <div class="flex justify-between items-center">
          <div class="max-w-xs">
            <h3 class="text-lg text-gray-900 font-bold">
              Federal Mortgage Bank of Nigeria
            </h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          Federal Mortgage Bank of Nigeria (FMBN) was established in 1956, known
          then as the Nigerian Building Society (NBS), a joint venture of the
          Commonwealth Development Corporation and the Federal and Eastern
          Governments of Nigeria
        </div>
        <a
          href="#"
          class="
            mt-4
            w-full
            flex
            text-sm
            justify-end
            text-blue-600
            hover:text-blue-800
            mr-2
            items-center
          "
        >
          <span target="_blank">Visit company site</span>
          <arrow-right-icon size="1x" />
        </a>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: {
    agile: VueAgile,
    ArrowRightIcon,
  },
}
</script>

<style></style>
