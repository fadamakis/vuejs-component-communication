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
  }
})

store.commit('INCREAMENT')
store.commit('ADD', 10)