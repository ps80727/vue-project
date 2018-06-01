import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    num: '2',
    price: '30',
    sum: ''
  },
  mutations: {
    changeRuduce (state) {
      if (state.num === 1) {
        state.num = 1
      } else {
        state.num -= 1
      }
      state.sum = state.num * state.price
    },
    changeAdd (state) {
      if (state.num === 5) {
        state.num = 5
      } else {
        state.num += 1
      }
      state.sum = state.num * state.price
    }
  }
})
export default store
