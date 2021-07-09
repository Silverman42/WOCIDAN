<template>
  <section class="px-4 pb-28 pt-20 md:pt-32 relative">
    <!-- <img
      src="/img/home_hero_bg.jpg"
      class="absolute top-0 right-0 w-full h-full object-cover object-center"
      style="z-index: 3"
      alt=""
    /> -->
    <div class="foreground"></div>
    <div class="max-w-5xl mx-auto relative" style="z-index: 5">
      <div
        class="flex justify-between lg:items-stretch flex-wrap lg:flex-nowrap"
      >
        <div class="w-full lg:w-5/12 lg:mr-3">
          <h1 class="font-serif text-4xl md:text-6xl mb-6 text-primary-700">
            WOC Energy Efficient Buildings that fit your Budget
          </h1>
          <p class="text-gray-700 mb-8 text-base md:w-9/12">
            WOC Infrastructural Development and Natural Gas Ltd. in
            collaboration with Delta State Government is developing and building
            unit environmentally friendly green energy smart cities in the (3)
            senatorial districts of Delta State
          </p>
          <div class="w-full mb-14 md:w-72">
            <action-i-link :extend="['btn-primary', 'btn-sm']"
              >Register for Mortgage</action-i-link
            >
          </div>
        </div>
        <div class="w-full mb-5 lg:w-6/12 shadow-offset_blue">
          <img
            src="/img/home_hero_bg.jpg"
            class="w-full h-52 lg:h-full object-cover object-center"
            alt="Sustainable mega city"
          />
        </div>
      </div>
      <div class="flex justify-between items-end flex-wrap">
        <div class="w-full md:w-5/12 mb-10 md:mb-0">
          <div class="mb-3">Official Partner</div>
          <a
            href="./document/approval.pdf"
            download
            target="_blank"
            class="flex"
          >
            <img
              src="/img/delta-Logo.png"
              class="w-14 mr-3 filter grayscale"
              alt=""
            />
            <div>
              <p class="text-primary-700 font-bold">
                Delta State Government, Nigeria
              </p>
              <span class="text-sm text-gray-600 hover:text-gray-800"
                >Download approval letter</span
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
              group-hover:bg-primary-700
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
    rgba(255, 255, 255, 0.969625350140056) 50%,
    rgba(255, 255, 255, 0.2578606442577031) 100%
  );
}
</style>
