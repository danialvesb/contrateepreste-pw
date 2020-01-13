import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

import services from './modules/services'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        services,
    }
})