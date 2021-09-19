<template>
  <div :class="isDark ? 'dark' : ''">
    <app-header />
    <Nuxt class="min-h-screen" />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from './components/header/AppHeader.vue'

import AppFooter from './components/footer/AppFooter.vue'
export default {
  components: { AppHeader, AppFooter },

  computed: {
    isDark() {
      return this.$store.state.isDark
    },
  },
}
</script>
