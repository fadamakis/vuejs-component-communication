import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREAMENT(state) {
      state.count++
    },
    ADD(state, payload) {
      state.count += payload
    }
  },
  actions: {
    increament({ commit }) {
      commit('INCREAMENT')
    },
    increamentBy({ commit }, payload) {
      commit('ADD', payload)
    }
  }
})

store.dispatch('increament')
store.dispatch('increamentBy', 10)
