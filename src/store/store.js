import { createStore } from 'vuex';
import statistics from './modules/statistics';
import footerLinks from './modules/footerLinks';
import shortenUrl from './modules/shortenUrl';

const store = createStore({
  modules: {
    statistics,
    footerLinks,
    shortenUrl
  }
});

export default store;
