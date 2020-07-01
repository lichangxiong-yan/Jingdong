import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import './assets/styles/base.css'
import store from './store'
Vue.config.productionTip = false

// 把所有api接口方法，都挂载在Vue的原型上，在组件中就可以使用 this.$http 来访问所有的接口方法
import http from '@/utils/api'
Vue.prototype.$http = http

Vue.use(ElementUI)
import router from './routes'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
