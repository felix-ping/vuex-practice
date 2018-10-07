const limit = 2
const getters={
  //getters作为统一出口
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  recentHistory: state => {
    const end = state.history.length
    const begin = end - limit >0 ? end - limit : 0
    return state.history.slice(begin,end).toString().replace(/,/g, ', ')
  },
  count : state => state.count
}
export default getters