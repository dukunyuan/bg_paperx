/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './Router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//请求
import store from './store/index'
import axios from 'axios'
import promise from 'es6-promise'
promise.polyfill()

Vue.config.productionTip = false  //阻止启动生产消息，常用作指令。
Vue.use(ElementUI)
Vue.config.devtools = true  //生产版 true

//axios请求
// axios.defaults.baseURL= 'http://localhost:8088'
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8"
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = store.state.token
Vue.prototype.$axios = axios


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
//判断是否存在token，如果存在将每个页面header都添加token
  if(store.state.token){
    config.headers.common['Authorization']=store.state.token.token
  }

  return config;
}, error => {
// 对请求错误做些什么
console.log('request')
  return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {
console.log(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });
