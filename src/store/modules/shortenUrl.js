export default {
  namespaced: true,
  state() {
    return {
      inputValue: '',
      newUrlItemsList: []
    }
  },
  mutations: {
    setInputValue(state, value) {
      state.inputValue = value
    },
    createNewUrl(state) {
      const newUrlItem = { defaultUrl: state.inputValue, shortenedUrl: 'short' }

      if (state.inputValue !== '') {
        state.newUrlItemsList.push(newUrlItem)
      }

      state.inputValue = ''
    },
    deleteUrl(state, defaultUrl) {
      state.newUrlItemsList = state.newUrlItemsList.filter((item) => item.defaultUrl !== defaultUrl)
    }
  },
  actions: {}
}
