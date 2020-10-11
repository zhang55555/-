import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.interceptors.request.use(
  aaa => {
    return aaa
  })
// 请求前拦截,处理各种信息
Vue.prototype.$axios = axios
// 使用create创造出来的家伙，没有批量方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
