<template>
  <section class="px-4 pb-32 pt-20 md:pt-44 relative">
    <img
      src="/img/hero_bg.jpeg"
      class="absolute top-0 right-0 w-full h-full object-cover object-center"
      style="z-index: 3"
      alt=""
    />
    <div class="foreground"></div>
    <div class="max-w-5xl mx-auto relative" style="z-index: 5">
      <h1 class="font-serif text-4xl md:text-7xl mb-6 text-primary-900">
        Energy efficient buildings that fit your budget
      </h1>
      <p class="text-gray-800 mb-8 md:text-lg md:w-9/12">
        WOC Infrastructural Development and Natural Gas Ltd. in collaboration
        with Delta State Government is developing and building unit
        environmentally friendly green energy smart cities in the (3) senatorial
        districts of Delta State
      </p>
      <div class="w-full mb-14 md:w-72">
        <action-i-link :extend="['btn-primary', 'btn-sm']"
          >Register for Mortgage</action-i-link
        >
      </div>
      <div class="flex justify-between items-end flex-wrap">
        <div class="w-full md:w-5/12 mb-10 md:mb-0">
          <div class="mb-3">Official Partner</div>
          <a href="https://www.deltastate.gov.ng/" target="_blank" class="flex">
            <img
              src="/img/delta-Logo.png"
              class="w-14 mr-3 filter grayscale"
              alt=""
            />
            <div>
              <p class="text-primary-900 font-bold">
                Delta State Government, Nigeria
              </p>
              <span class="text-sm text-gray-600 hover:text-gray-800"
                >Visit site</span
              >
            </div>
          </a>
        </div>
        <div
          class="
            w-full
            group
            md:w-5/12
            cursor-pointer
            flex
            items-center
            text-base
          "
        >
          <p class="text-gray-800 flex-grow mr-2">
            Watch a video of the proposed energy saving mega housing estate for
            civil servants and low income earners
          </p>
          <button
            class="
              flex
              justify-center
              items-center
              bg-gray-900
              group-hover:bg-primary-900
              text-white
              w-24
              h-14
            "
          >
            <play-icon size="1x"></play-icon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PlayIcon } from 'vue-feather-icons'
export default {
  components: {
    PlayIcon,
  },
}
</script>

<style scoped>
.foreground {
  z-index: 4;
  @apply w-full h-full absolute top-0 right-0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.969625350140056) 23%,
    rgba(255, 255, 255, 0.5578606442577031) 100%
  );
}
</style>
