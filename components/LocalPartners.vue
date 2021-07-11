<template>
  <div class="pt-6">
    <hooper ref="hooper" style="height: auto" :auto-play="true">
      <slide v-for="(partners, index) in localP" :key="index"
        ><div>
          <div class="flex justify-between">
            <div class="max-w-xs">
              <h3 class="text-lg text-gray-900 font-bold">
                {{ partners.name }}
              </h3>
            </div>
            <figure
              class="w-10 ml-2 h-10 rounded-full bg-primary-600 p-3 block"
            ></figure>
          </div>
          <div class="w-full mt-5 text-base text-gray-600">
            {{ partners.description }}
          </div>
          <a
            :href="partners.url"
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
          </a></div
      ></slide>
    </hooper>
    <div class="flex justify-between items-center mt-6">
      <button class="text-gray-600 hover:text-gray-800">
        <arrow-left-icon
          size="1.5x"
          @click="$refs.hooper.slidePrev()"
        ></arrow-left-icon>
      </button>
      <button class="text-gray-600 hover:text-gray-800">
        <arrow-right-icon
          size="1.5x"
          @click="$refs.hooper.slideNext()"
        ></arrow-right-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import { ArrowRightIcon, ArrowLeftIcon } from 'vue-feather-icons'
import localP from '~/assets/js/partners/local'
export default {
  components: {
    Hooper,
    Slide,
    ArrowRightIcon,
    ArrowLeftIcon,
  },
  data() {
    return {
      localP,
    }
  },
}
</script>

<style></style>
