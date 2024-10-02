import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      inputValue: '',
      newUrlItemsList: []
    };
  },
  mutations: {
    setInputValue(state, value) {
      state.inputValue = value;
    },
    createNewUrl(state, value) {
      const newUrlItem = { defaultUrl: value.url, shortenedUrl: value.shrtlnk, isCopied: false };

      if (state.inputValue !== '') {
        state.newUrlItemsList.push(newUrlItem);
      }

      state.inputValue = '';
    },
    deleteUrl(state, defaultUrl) {
      state.newUrlItemsList = state.newUrlItemsList.filter(
        (item) => item.defaultUrl !== defaultUrl
      );
    },
    setAsCopied(state, urlItem) {
      state.newUrlItemsList.forEach((item) => {
        if (item.shortenedUrl === urlItem) {
          item.isCopied = true;
        }
      });
    }
  },
  getters: {},
  actions: {
    async getUpdatedUrl({ commit, state }) {
      const url = `https://shrtlnk.dev/api/v2/link`;

      try {
        const { data } = await axios.post(
          url,
          {
            url: state.inputValue
          },
          {
            headers: {
              'api-key': '2xrXZpgtqlMrVUvbLTDFHLhpXLwxHbQmkmfSsPUhEupB0',
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }
        );
        console.log(data);
        commit('createNewUrl', data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
