import { createStore } from 'vuex'
import statistics from './modules/statistics'

const store = createStore({
  modules: {
    statistics
  }
})

export default store
