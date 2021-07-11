<template>
  <section
    class="px-4 py-32 bg-primary-600 relative"
    style="clip-path: polygon(0 0, 51% 5%, 100% 0, 100% 96%, 50% 100%, 0 96%)"
  >
    <div class="max-w-5xl mx-auto grid grid-cols-1 gap-14 md:grid-cols-2">
      <div class="hide-slideInLeft">
        <div class="h-full shadow-offset_light">
          <img
            src="/img/amenities.jpg"
            class="object-center h-auto object-cover"
            alt="Amenties woc buildings"
          />
        </div>
      </div>
      <div class="">
        <p
          class="
            text-sm
            tracking-widest
            text-primary-200
            uppercase
            hide-slideInRight
          "
        >
          AMENITIES
        </p>
        <h2
          class="
            font-serif
            text-4xl
            md:text-6xl
            mb-8
            text-white
            hide-slideInRight
          "
        >
          All apartments are fitted with ultra modern amenties for maximum
          comfort
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Perimeter fence </span>
          </div>
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Gatehouse </span>
          </div>
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Road networks and drainage </span>
          </div>
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Electrification </span>
          </div>
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Street Light</span>
          </div>
          <div class="flex items-center text-primary-50 hide-slideInRight">
            <span class="icon-check">
              <check-icon size="1x" />
            </span>
            <span class="ml-3"> Water scheme</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CheckIcon } from 'vue-feather-icons'
export default {
  components: {
    CheckIcon,
  },
}
</script>

<style scoped>
.icon-check {
  @apply w-6 h-6 rounded-full bg-primary-300 text-white flex justify-center items-center;
}
</style>
