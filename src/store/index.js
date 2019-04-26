import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import misc from './modules/misc'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    misc
  }
})
