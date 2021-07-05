<template>
  <div class="font-sans">
    <header class="navbar md:sticky top-0 left-0 z-20">
      <div
        class="
          px-4
          md:px-0
          max-w-5xl
          mx-auto
          border-b-2
          md:border-0
          flex
          items-center
          justify-between
          py-3
        "
      >
        <div class="w-20 font-bold">S U N</div>
        <nav class="flex items-center">
          <ul class="md:flex items-center mr-4 hidden">
            <li class="mr-5">
              <a href="#trading" class="hover:text-blue-500">Trading</a>
            </li>
            <li class="mr-5">
              <a href="#services" class="hover:text-blue-500">Services</a>
            </li>
            <li class="mr-5">
              <a href="#contact" class="hover:text-blue-500">Contact</a>
            </li>
            <li class="mr-5">
              <a href="#about" class="hover:text-blue-500">About</a>
            </li>
          </ul>
          <a
            href="mailto:snkeze@gmail.com"
            class="
              py-2
              px-4
              inline-block
              rounded-lg
              bg-black
              text-white
              hover:bg-blue-700
            "
          >
            Reach me
          </a>
        </nav>
      </div>
    </header>
    <aside class="md:hidden block navbar sticky top-0 left-0 z-20">
      <ul
        class="
          max-w-5xl
          px-4
          md:px-0
          mx-auto
          md:hidden
          items-center
          py-4
          border-b-1
          justify-center
          flex
          overflow-x-auto
        "
      >
        <li class="mr-5">
          <a href="#trading" class="hover:text-blue-500">Trading</a>
        </li>
        <li class="mr-5">
          <a href="#services" class="hover:text-blue-500">Services</a>
        </li>
        <li class="mr-5">
          <a href="#contact" class="hover:text-blue-500">Contact</a>
        </li>
        <li class="mr-5">
          <a href="#about" class="hover:text-blue-500">About</a>
        </li>
      </ul>
    </aside>
    <nuxt-child />
    <footer></footer>
  </div>
</template>
<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
