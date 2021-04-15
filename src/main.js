/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './Router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//百度地图控件
import BaiduMap from 'vue-baidu-map'

// 请求
import store from './store/index'
import axios from 'axios'
import promise from 'es6-promise'
promise.polyfill()

Vue.config.productionTip = false // 阻止启动生产消息，常用作指令。
Vue.use(ElementUI)
Vue.config.devtools = true // 生产版 true

// axios请求 "http://localhost:8088/paperx";
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = store.state.token
Vue.prototype.$axios = axios

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    render: h => h(App)

})

// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
// 判断是否存在token，如果存在将每个页面header都添加token
console.log(store.state.token)
  if (store.state.token) {
    config.headers.common['Authorization'] = store.state.token
  }

  return config
}, error => {
// 对请求错误做些什么
console.log('request')
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
console.log(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token')
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  })
//全局引入百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Top8ObDhu337a2HzAXWrpUqISNlIcNEV'   //自己的ak
})