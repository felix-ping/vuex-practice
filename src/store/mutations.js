const mutations = {
  //mutations中只保留最原始的操作
  increment (state) {
    state.count++
    state.history.push('increment')
  },
  decrement (state) { 
    state.count--
    state.history.push('decrement')
  },
  
}
export default mutations