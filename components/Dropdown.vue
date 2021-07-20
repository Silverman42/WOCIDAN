<template>
  <div class="dropdown">
    <button class="dropdown-header" @click="hideBody">
      <span class="dropdown-header_text">{{ header }}</span>
      <div class="dropdown-header_icon" :class="{ 'rotate-icon': hideStatus }">
        <chevron-up-icon size="1.5x"></chevron-up-icon>
      </div>
    </button>
    <div class="dropdown-body" :class="{ hide: hideStatus }">
      <slot />
    </div>
  </div>
</template>

<script>
import { ChevronUpIcon } from 'vue-feather-icons'
export default {
  components: {
    ChevronUpIcon,
  },
  props: {
    header: {
      type: String,
      default: 'What are the documents required when applying for the loan?',
    },
    checkText: {
      type: String,
      default: 'What are the documents required when applying for the loan?',
    },
  },
  data() {
    return {
      hideStatus: true,
    }
  },
  methods: {
    hideBody() {
      this.hideStatus = !this.hideStatus
      this.$emit('toggleDropdown')
    },
  },
}
</script>

<style scoped>
.dropdown {
  @apply bg-white border border-primary-200 mb-5;
}
.dropdown-body {
  @apply text-blue-700 p-5;
}
.dropdown-body.hide {
  @apply hidden;
}
.dropdown-header {
  @apply p-5 w-full flex justify-between border-b items-center outline-none text-primary-900 hover:text-primary-800;
}
.dropdown-header_text {
  @apply font-bold text-left;
}
.dropdown-header_icon {
  @apply ml-3 block transition-all ease-in duration-300;
}
.dropdown-header_icon.rotate-icon {
  @apply transform rotate-180;
}
</style>
