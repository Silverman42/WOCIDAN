<template>
  <section class="px-4 py-32 relative bg-blue-100">
    <div class="max-w-5xl flex-wrap flex justify-between mx-auto">
      <div class="md:w-5/12 w-full md:mr-2">
        <p class="text-sm tracking-widest uppercase">PARTNERS</p>
        <h2 class="font-serif text-4xl md:text-7xl mb-6 text-primary-700">
          Collaborating with the best in the industry
        </h2>
      </div>
      <div class="md:w-5/12 w-full">
        <tabs :tabs="tabs" default-active-tab="Foreign Partners">
          <template #tab-body-foreign-partners>
            <foreign-partners />
          </template>
          <template #tab-body-local-partners>
            <local-partners />
          </template>
        </tabs>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Foreign Partners', 'Local Partners'],
    }
  },
}
</script>

<style></style>
