<template>
  <section class="bg-white text-pallette-darkMain dark:bg-pallette-darkMain dark:text-white sticky top-0 shadow-sm bg-opacity-95 dark:bg-opacity-95 font-medium text-lg">
    <div class="max-w-3xl mx-auto py-5 flex justify-center items-center space-x-8">
      <nuxt-link v-for="index in 4" :key="index" to="/" class="hover:text-pallette-lighter"> Home </nuxt-link>
      <div class="flex space-x-5 pl-7 items-center">
        <span @click="toggleDark">
          <component :is="$store.state.isDark ? 'icons-moon-icon' : 'icons-sun-icon'" class="w-5 h-5 cursor-pointer hover:text-pallette-lighter" />
        </span>
        <translate-select />
        <select v-model="selectedLang" class="bg-gray-500" @change="changeLang">
          <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">{{ locale.code }}</option>
        </select>

        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import TranslateSelect from './components/TranslateSelect.vue';
export default {
  components: { TranslateSelect },
  data() {
    return { links: [{ title: 'Home' }] };
  },
  computed: {
    selectedLang() {
      return this.$i18n.locale;
    },
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  methods: {
    toggleDark() {
      this.$store.dispatch('toggleDarkMode');
    },
    changeLang() {
      // alert(event.target.value);
    },
  },
};
</script>
