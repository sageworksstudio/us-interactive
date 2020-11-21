import Vue from 'vue'
import Vuex from 'vuex'
import * as usStates from '@/store/modules/us-states'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usStates
  }
})
