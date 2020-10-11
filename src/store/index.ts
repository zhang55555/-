import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hello: 'LGD'
  },
  modules: {
    a: {
      state: {
        howAreYou: 'howAreYou'
      }
    }
  },
  mutations: {
    changeHello (state, a) {
      state.hello = a.name
    },
    changeHello2 (state, a) {
      state.hello = a.xHM.name
    }
  },
  actions: {
    asnyChangeHello ({ commit }, b) {
      commit('changeHello', b)
    }
  },
  getters: {
    getHello (state) {
      return state.hello.substring(2)
    }
  }
})
