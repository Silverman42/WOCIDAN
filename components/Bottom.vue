<template>
  <section class="px-4 pb-10 relative">
    <div class="max-w-5xl mx-auto">
      <div
        class="
          p-6
          grid grid-cols-1
          bg-primary-800
          md:grid-cols-4
          gap-7
          shadow-offset_light
        "
      >
        <div class="hide-slideInRight">
          <p class="text-xs text-primary-200 tracking-widest uppercase mb-2">
            LAGOS ADDRESS
          </p>
          <address class="text-white not-italic">
            No 1, Engineering Close, 2nd Floor, Victoria Island <br />
            Lagos Island
          </address>
        </div>
        <div class="hide-slideInRight">
          <p class="text-xs text-primary-200 tracking-widest uppercase mb-2">
            UK ADDRESS
          </p>
          <address class="text-white not-italic">
            20 Dunville Meadow, Athlumney, Navan, County Meath. Ireland
          </address>
        </div>
        <div class="hide-slideInRight">
          <p class="text-xs text-primary-200 tracking-widest uppercase mb-2">
            PHONE NUMBER
          </p>
          <figure class="text-white not-italic">
            <a href="tel:+2347039134015">+234-70-391-340-15</a>
          </figure>
        </div>
        <div class="hide-slideInRight">
          <p class="text-xs text-primary-200 tracking-widest uppercase mb-2">
            Social
          </p>
          <figure class="grid w-full grid-cols-4">
            <a href="#" class="text-white hover:text-primary-100">
              <facebook-icon size="1.5x" />
            </a>
            <a href="#" class="text-white hover:text-primary-100">
              <linkedin-icon size="1.5x" />
            </a>
            <a href="#" class="text-white hover:text-primary-100">
              <twitter-icon size="1.5x" />
            </a>
          </figure>
        </div>
        <div class="hide-slideInRight">
          <p class="text-xs text-primary-200 tracking-widest uppercase mb-2">
            Email
          </p>
          <figure class="text-white not-italic">
            <a href="mailto:support@wocidan.com.ng">support@wocidan.com.ng</a>
          </figure>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-8">
        <div class="mb-8 md:mb-0">
          <span class="font-bold">WOC</span>
          © {{ getCurrentYear() }}
        </div>
        <div class="md:text-right">
          <span class="text-gray-500 text-sm">Developed by</span> <br />
          <a
            target="_blank"
            class="text-gray-800 hover:text-primary-700"
            href="http://jdtechnologies.com.ng"
            >JD Computer Technologies</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'vue-feather-icons'
export default {
  components: {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
