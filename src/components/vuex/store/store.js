import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        globalStateVariable: 10
    },
    mutations: {
        INCREMENT(state) {
            state.globalStateVariable++;
        }
    }
})