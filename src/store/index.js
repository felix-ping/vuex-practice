import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex);
const state={
  count: 0,
  history: [],
}

const store=new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

if(module.hot){
  module.hot.accept(['./mutations.js', './getters.js', './actions.js'], () => {
    // 加载新模块
    store.hotUpdate({
      mutations: require('./mutations.js').default,
      getters: require('./getters.js').default,
      actions: require('./actions.js').default,
      
    })
  })
}

export default store