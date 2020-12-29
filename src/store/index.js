import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import settings from './modules/settings'
import getters from './getters'
import user from './modules/user'
import screen from './modules/screen'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    screen
  },
  getters
})

export default store
