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
  },
  getters: {
    getDoubleCounter(state) {
      return state.count * 2;
    }
  }
})