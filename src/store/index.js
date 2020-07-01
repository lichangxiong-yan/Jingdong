// 这上面是不拆分写法

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   // 用来存数据  相当于数据仓库
//   state: {
//     msg:123
//   },
//   // 这个可以做二次计算  相当于计算属性
//   getters: {
//     msg2(state) {
//       return state.msg += 2
//     }
//   },
//   // 可以这样说这个方法是唯一可以修改数据  修改数据 修改 state里的数据
//   mutations: {
//     setter(state,payload) {
//       state.msg += payload
//     }
//   },
//   // 异步修改数据  也是调用 mutations里面的方法
//   actions: {
//     asyncUpdateMsg(store , payload){
//       setTimeout(() => {
//         store.commit('setter',payload)
//       }, 1000);
//     }
//   }
// })
// export default store 


// ----------------------------------
// 这下面是拆分写法
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 这就是一个 store 子模块
import study from './modules/study'
import song from './modules/song'
import fu from './modules/fu'
import cart from './modules/cart'

const store = new Vuex.Store({
  // modules 这个选项用于把子 module 进行合并 (待命名空间)
  modules:{
    study,
    song,
    fu,
    cart
  }
})


export default store