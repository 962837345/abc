import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'kellen chen',
    count: 0
  },
  mutations: {
    increment(state, count) {
      state.count += count;
    }
  },
  getters: {
    sayHello(state) {
      return hello => {
        return hello + ' ' + state.name
      }
    }
  },
  actions: {
    showMessage(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment',payload.num)
          resolve('改变了count')
        }, 1000)
      })
    }
  },
  modules: {}
})
