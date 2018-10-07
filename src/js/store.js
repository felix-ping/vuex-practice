import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
  count:0
}
const getters={
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  incrementIfEven(state) {
    if(state.count % 2 == 0) {
      state.count++
    }
  }
}
const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}


const store=new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
export default store