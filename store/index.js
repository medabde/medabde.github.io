const MODE_VAR_STORAGE = 'mode';
// const LANG_VAR_STORAGE = 'lang';

export const state = () => ({
  isDark: localStorage.getItem(MODE_VAR_STORAGE) === 'true' || false,
  lang: null,
});
export const actions = {
  toggleDarkMode(context) {
    context.commit('toggleDarkMode');
  },
  changeLang(context, newLang) {
    context.commit('changeLang', newLang);
  },
};
export const mutations = {
  toggleDarkMode(state) {
    //update locale storage
    localStorage.setItem(MODE_VAR_STORAGE, !state.isDark);

    // mutate state
    state.isDark = !state.isDark;
  },
  changeLang(state, newLang) {
    // localStorage.setItem(LANG_VAR_STORAGE, newLang)

    state.lang = newLang;
  },
};
