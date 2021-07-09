<template>
  <div>
    <header>
      <ul class="tab-header">
        <li
          v-for="(tab, index) in tabArray"
          :key="index"
          class="tab-btns"
          :class="{ active: activeTab == tab }"
          @click="setActiveTab(tab)"
        >
          <slot :name="createTabSlotName(tab)">{{ tab }}</slot>
        </li>
      </ul>
    </header>
    <main class="tab-body">
      <slot :name="getTabBodyName"></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    defaultActiveTab: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeTab: this.defaultActiveTab,
      tabArray: this.tabs,
    }
  },
  computed: {
    getTabBodyName() {
      return `tab-body-${this.activeTab.toLowerCase().replace(' ', '-')}`
    },
  },
  methods: {
    generateRandomKeys() {
      return Math.ceil(Math.random() * 500000000)
    },
    createTabSlotName(tab) {
      return `tab-${tab}`
    },
    setActiveTab(tab) {
      this.activeTab = tab
      this.$emit('tabSwitch', tab)
    },
  },
}
</script>

<style scoped>
.tab-header {
  @apply bg-transparent flex items-center list-none overflow-x-auto;
}
.tab-btns {
  @apply py-3 px-4 mr-2 cursor-pointer text-gray-700 inline-block w-auto font-bold text-xs uppercase tracking-widest whitespace-nowrap;
  @apply transition-all duration-200 ease-in;
}
.tab-btns:hover {
  @apply bg-primary-300;
}
.tab-btns.active {
  @apply bg-primary-300;
}
@screen md {
  .tab-header {
    @apply flex-wrap;
  }
}
</style>
