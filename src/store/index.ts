import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { //data
    count: 0
  },
  mutations: { //method
    increment(state, n: number) {
      state.count += n;
    }
  }
});

console.log(store.state.count); // 拿数据
store.commit('increment', 10); // 使用method
console.log(store.state.count);


export default store;