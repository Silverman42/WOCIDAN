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
              The Rosenthal Group LLC USA (TRG) and The Bullion Bank of Africa
              (BBA)
            </h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          Rosenthall Group LLC USA (TRG) and the Bullion Bank of Africa (BBA) is
          Dsigning and Bbuilding Smart Ssustainable New Cities in African
          Ccountries with Iinternational Iindustrial Parks Ccomposed of
          Mmanufacturing, Pprocessing and Aassembly facilities to generate
          wealth and employment.
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
        <div class="flex justify-between">
          <div class="max-w-xs">
            <h3 class="text-lg text-gray-900 font-bold">
              Combustion Associates Incorporation <br />
              (CAI)
            </h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          Combustion Associates Incorporation is (USA) is an American Company
          Based in Califonia esterblished to make America Technologies who shall
          provide the EPICC elimination of routine flared gases and convert to
          large scale electricity generation and transmission of procurement and
          installation of transformers and meters to support the smart cities
          project
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
            <h3 class="text-lg text-gray-900 font-bold">CEKA (Spain)</h3>
          </div>
          <figure
            class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
          ></figure>
        </div>
        <div class="w-full mt-5 text-base text-gray-600">
          CEKA (Spain) shall provide the EPICC development of 5,000 mass
          affordable, housing appartments in each Senatorial Districts of Delta
          State for Civil servants and salary earners who contribute certain
          percentage of their income to Federal Mortgage Bank of Nigeria under
          the national housing fund scheme Act No. 3 of 1992 to own homes built
          by WOC property Development and Energy Limited having collected our
          forms and domicilation of their salaries to WOC Property Development
          and Energy Limited account with Delta Trust Mortgage Bank Limited,
          Asaba, Delta State and the form and letter of domiciliation attached
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
