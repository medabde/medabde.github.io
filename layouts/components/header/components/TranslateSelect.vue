<template>
  <div v-click-outside="handelClickOutSide" class="relative flex space-x-1 items-center cursor-pointer hover:text-pallette-semiDark" @click="open = !open" @keyup.esc="open = false">
    <icons-translate-icon class="w-5 h-5" />
    <component :is="!open ? 'icons-chevron-down-icon' : 'icons-chevron-up-icon'" class="w-3 h-3" />
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="open" class="absolute top-4 -left-1/2 w-max mt-3 origin-top-right bg-white dark:bg-pallette-semiDark dark:text-white text-gray-400 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1" role="none">
          <span v-for="item in data" :key="item" class="block px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="handelClick(item)">{{ item }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { open: false, data: ['salam', 'labas'] };
  },
  methods: {
    handelClickOutSide() {
      this.open = false;
    },
  },
};
</script>
