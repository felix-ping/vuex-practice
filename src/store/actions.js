const actions = {
  //actions作为统一的入口
  increment ({commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
  incrementIfEven:({commit,state})=> {
    if(state.count % 2 == 0) {
      commit('increment')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
export default actions