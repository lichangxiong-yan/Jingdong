const fu = {
   // 开启子模块的命名空间
   namespaced : true,
  state: {
    msg: 123
  },
  getters: {
    msg2(state){
      return state.msg++
    }
  },
  mutations: {
    getFushuju (state,payload){
      state.msg = payload
    }
  },
  actions: {
    aaa(store , payload){
      setTimeout(() => {
        store.commit('getFushuju',payload)
      },1000 )
    }

  },
} 
export default fu