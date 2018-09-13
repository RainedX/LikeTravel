import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: localStorage.city || '苏州'
    },
    mutations: {
        changeCity(state, payload) {
            state.city = payload;
            localStorage.city = payload;
        }
    }
});

export default store