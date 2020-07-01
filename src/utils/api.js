import fetch from './fetch'

// 注册接口
export function regist(data){
  return fetch({
    url:'/user/regist',
    method: 'POST',
    data
  })
}

// 登录接口
export function login(data) {
  return fetch({
    url: '/user/login',
    method: 'POST',
    data
  })
}


// 获取首页为你推荐的商品列表
export function getHotGoodList(params) {
  return fetch({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

// 获取首页为你推荐的商品列表
export function getGoodDetail(params) {
  return fetch({
    url: '/jd/getGoodDetail',
    method: 'GET',
    params
  })
}

// 获取购物车的数据
export function getCartList(params) {
  return fetch({
    url: '/jd/getCartList',
    method: 'GET',
    params
  })
}

// 添加到购物车
export function addToCart(data) {
  return fetch({
    url: '/jd/addToCart',
    method: 'POST',
    data
  })
}

// 删除购物车中的商品
export function deleteToCart(params) {
  return fetch({
    url: '/jd/deleteToCart',
    method: 'GET',
    params
  })
}

// 修改购物车中的商品数量
export function updateCartNum(data
  ) {
  return fetch({
    url: '/jd/updateCartNum',
    method: 'POST',
    data
  })
}

// 把所有接口方法同一抛出
export default {
  regist,
  login,
  getHotGoodList,
  getGoodDetail,
  getCartList,
  addToCart,
  deleteToCart,
  updateCartNum
}