import { createStore } from 'vuex'
import statistics from './modules/statistics'
import footerLinks from './modules/footerLinks'

const store = createStore({
  modules: {
    statistics,
    footerLinks
  }
})

export default store
