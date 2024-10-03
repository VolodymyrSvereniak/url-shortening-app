import axios from 'axios';


export default {
  namespaced: true,
  state() {
    return {
      inputValue: '',
      isValidatedUrl: false,
      newUrlItemsList: [{ defaultUrl: 'example', shortenedUrl: 'example', isCopied: false }]
    };
  },
  getters: {
    validUrl() {
      const UrlReg = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
      return UrlReg
    }
  },
  mutations: {
    setInputValue(state, value) {
      state.inputValue = value.trim();
    },
    createNewUrl(state, value) {
      const newUrlItem = { defaultUrl: value.url, shortenedUrl: value.shrtlnk, isCopied: false };

      state.newUrlItemsList.push(newUrlItem);

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
  actions: {
    async getUpdatedUrl({ commit, state, getters }) {
      const url = `https://shrtlnk.dev/api/v2/link`;

      try {
        if (getters.validUrl.test(state.inputValue) && state.inputValue !== '') {
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
        } else {
          console.error('Invalid URL');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
