<template>
  <div :dir="currentLangIsRtl ? 'rtl' : 'ltr'" :class="isDark ? 'dark' : ''">
    <app-header />
    <Nuxt class="min-h-screen" />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from './components/header/AppHeader.vue';

import AppFooter from './components/footer/AppFooter.vue';
export default {
  components: { AppHeader, AppFooter },

  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    currentLangIsRtl() {
      return this.$i18n.locales.find(locale => this.$i18n.locale === locale.code).isRTL;
    },
  },

  mounted() {
    this.$store.dispatch('changeLang', this.$i18n.locales[0]);
  },
};
</script>
