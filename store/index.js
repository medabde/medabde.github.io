export const state = () => ({
  isDark: false,
})
export const actions = {
  toggleDarkMode(context) {
    context.commit('toggleDarkMode')
  },
}
export const mutations = {
  toggleDarkMode(state) {
    // mutate state
    state.isDark = !state.isDark
  },
}
