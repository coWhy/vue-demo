// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'

Vue.config.productionTip = false

// 配置所有Vue的实例都具有$http这个成员
Vue.prototype.$http = axios;

//设置请求baseUrl
axios.defaults.baseURL = 'http://localhost:3000/'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
