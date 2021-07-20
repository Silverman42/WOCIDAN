<template>
  <div class="min-h-screen">
    <hero-features />
    <estate-amenities />
    <apartments />
  </div>
</template>

<script>
import { ObserverModule } from '~/assets/helper'
export default {
  mixins: [ObserverModule],
  layout: 'Main',
  updated() {
    this.TriggerObserver()
  },
  mounted() {
    const vm = this
    window.addEventListener('load', () => {
      vm.TriggerObserver()
    })
    vm.TriggerObserver()
  },
}
</script>

<style></style>
