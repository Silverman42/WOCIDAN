<template>
  <nuxt-link :to="href" class="btn" :class="extend">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    href: {
      type: [String, Object],
      default() {
        return {
          path: '/',
        }
      },
    },
    extend: {
      type: Array,
      default() {
        return ['btn-primary', 'btn-rounded']
      },
    },
  },
}
</script>

<style>
@import '@/components/Action/Buttons.css';
</style>
