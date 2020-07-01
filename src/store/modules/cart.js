import {getCartList} from '../../utils/api'

export default {
  namespaced: true,
  state: {
    list: []
  } ,
  getters: { 
    // 这个是用来计算那个价格
    total: function(state) {
      var t =0 
      state.list.map(item => {
        // 选中的那个才会进行计算
        if(item.checked) {
          t += item.num * item.good.price* 100
        }
      })
      return t
    }
  },
  mutations: {
    updateList(state,payload){
      payload.map((item,index) =>{
        // 自定义一个checked 用于控制 checkbox
        payload[index].checked = true
      })
      state.list = payload
    },
    // 控制选中不选中
    updateListItem(state , payload) {
      console.log('payload' , payload)
      state.list[payload.index].checked = payload.check
    },
  },
  actions: {
    getCartList(store , payload){
      getCartList(payload).then(arr => {
        store.commit('updateList',arr.data.data)
        console.log(arr)
      })
    }
  },

}