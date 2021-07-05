<template>
  <button class="btn btn-primary btn-rounded">
    <slot name="icon"></slot>
    <slot>Button</slot>
  </button>
</template>
<script>
export default {}
</script>

<style>
@import '@/components/Action/Buttons.css';
</style>
