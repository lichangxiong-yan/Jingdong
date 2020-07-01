import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入 nprogress 的核心与他的样式
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import Home from '../view/Home'
import Login from '../view/Login'
import Jingxi from '../view/Jingxi'
import Classification from '../view/Classification'
import Cart  from '../view/Cart'
import Regist from '../view/Regist'
import Detail from '../view/Detail'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/',
      // redirect:'/cart',
      component:Home
    },
    {
      path:'/home',
      component:Home,
      beforeEnter: (to,from,next) => {
        console.log('beforeEnter')
        next()
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/jingxi',
      component:Jingxi
    },
    {
      path:'/classification',
      component:Classification
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/regist',
      component:Regist
    },
    {
      path:'/detail/:id',
      component: Detail
    }
  ]
})
// 配置 nprogress 不需要转圈
nprogress.configure({
  showSpinner: false,
});

// 全局前置
// router.beforeEach((to, from, next) => {
//   // 启动进度条
//   nprogress.start();

//   console.log("beforeEach");
//   console.log("to: ", to);
//   console.log("from: ", from);
//   // var isLogin = true

// //   if(to.path == '/cart') {
// //     if (isLogin) {
// //       next()
// //     }else{
    
// //       next('/login')
// //     }
// //   }else{
// //     next()
// //   }

//  });

// 全局后置
router.afterEach((to, from) => {
  // 完成进度条
  nprogress.done();

  console.log("afterEach");
  console.log("to: ", to);
  console.log("from: ", from);
});
export default router