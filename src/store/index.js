import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'kellen chen',
    count: 0,
    cartList: []
  },
  mutations: {
    increment(state, count) {
      state.count += count;
    },
    addCart(state, payload) {
      //  1.查找之前数组是否有该商品
      let product = state.cartList.find(item => item.iid === payload.iid);
      //  2.判断product
      if (product) {
        product.count += 1;
      } else {
        payload.count = 1;
        payload.checked = true;
        state.cartList.push(payload);
      }
    },
    checkSelect(state,iid) {
      state.cartList.forEach(item => {
        if(item.iid === iid){
          item.checked = !item.checked;
        }
      })
    },
    selectAll(state,bool){
      state.cartList.forEach(item => {
        item.checked = bool
      })
    }
  },
  getters: {
    sayHello(state) {
      return hello => {
        return hello + ' ' + state.name
      }
    },
    cartList(state) {
      return state.cartList
    },
  },
  actions: {
    showMessage(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload.num)
          resolve('改变了count')
        }, 1000)
      })
    }
  },
  modules: {}
})
