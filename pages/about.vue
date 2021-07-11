<template>
  <div>
    <hero-about></hero-about>
    <about />
    <smart-city-locations />
    <background />
    <aim-objective />
    <bottom />
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
