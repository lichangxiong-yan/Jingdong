import axios from 'axios'

// cnode 地址
// let baseURL_dev = 'http://localhost:8080'  // 开发环境

// QQ 音乐周杰伦
let baseURL_dev = 'http://localhost:8080'

const fetch = axios.create({
  baseURL: baseURL_dev ,
  timeout: 7000,  // 超时设置
  headers: {   // 配置
     'Content-Type': 'application/json;charset=UTF-8'
}
});


//  封装请求拦截器   Add a request interceptor
fetch.interceptors.request.use(function (config) {
  // Do something before request is sent  
  // 在这里做一些检测或者包装等处理
  console.log('请求拦截' ,config)
   // 鉴权 token添加
   config.headers.Authorization = localStorage.getItem('token') || ''
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//  封装响应拦截器   Add a response interceptor
fetch.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  //  请求成功
  console.log('响应拦截',response )
  // 数据过滤  根据后端标识字符来进行数据
  if (response.data && response.data.err == 0) {
    return response
  }else {
    console.log('网络异步，请稍后再试')
  }
  
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default fetch