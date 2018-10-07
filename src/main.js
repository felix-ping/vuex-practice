import Vue from 'vue'
// import Vuex from 'vuex'
import counter from './counter.vue'
import store from './js/store.js'
Vue.config.productionTip = false
// Vue.use(Vuex)

new Vue({
  store,
  render:h=>h(counter)
}).$mount('#app')
