import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      inputValue: '',
      newUrlItemsList: [{ defaultUrl: 'example', shortenedUrl: 'example', isCopied: false }]
    };
  },
  getters: {
    validUrl() {
      const UrlReg =
        /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
      return UrlReg;
    }
  },
  mutations: {
    setInputValue(state, value) {
      state.inputValue = value.trim();
    },
    createNewUrl(state, value) {
      const newUrlItem = {
        defaultUrl: state.inputValue,
        shortenedUrl: value.short_url,
        isCopied: false
      };

      state.newUrlItemsList.push(newUrlItem);

      state.inputValue = '';
    },
    setUrlItemsFromLS(state, value) {
      if (value) {
        state.newUrlItemsList = value;
      }
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
    },
    resetCopied(state) {
      state.newUrlItemsList.forEach((item) => {
        item.isCopied = false;
      });
    }
  },
  actions: {
    async getUpdatedUrl({ commit, state, getters }) {
      const url = `https://spoo.me/`;

      try {
        if (getters.validUrl.test(state.inputValue)) {
          const { data } = await axios.post(
            url,
            {
              url: state.inputValue
            },
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
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
