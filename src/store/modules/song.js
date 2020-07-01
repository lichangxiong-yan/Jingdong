

const song = {
 // 开启子模块的命名空间
  namespaced : true,
  state: {
    text:'你好'
  },
  getters : {
    getText(state){
      return state.text = 'mingtian'
    }
  },
  mutations: {
    getSong(state,payload) {
      state.text = payload
    }
  },
  actions: {
    abcd(store,payload) {
      setTimeout(() => {
        store.commit('getSong' ,payload)
      },1000)
    }
  }
}
export default song 