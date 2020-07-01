import fetch from '../../utils/fetch'

const aModule = {
  //  开启子模块的命名空间
  // 这个 namespaced 一定要开启,否则在组件使用  map...系列的api进行映射时是会报错的。
  namespaced: true,
  
  state: {
    msg: 123,
    list:[]
  },
  getters: {
    msg2(state){
      return state.msg+=2
    }
  },
  mutations: {
    // payload 负载  就是组件带过来的数据
    setter(state,payload) {
      state.msg+= payload
    },
    listSetter(state,payload){
      state.list = payload

    }
  },
  // actions 通常用来做异步修改数据  但是还是通过 mutations来修改的
  actions: {
    asyncUpdateMsg(store,payload) {
      setTimeout(() => {
         // 在atcions中，提交一个mutations方法
        store.commit('setter',payload)
      },1000)
    },

    getShuju(store,payload) {
      fetch({
        url: '/soso/fcgi-bin/client_search_cp',
        method:'GET',
        params:payload
      }).then(res => {
        console.log(res.data.data.song.list)
        store.commit('listSetter' , res.data.data.song.list)
      })
    }
  }
}
export default aModule