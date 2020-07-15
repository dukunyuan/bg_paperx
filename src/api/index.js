import axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-ui'
// vue路由
import router from '../Router'
// 携带请求头
axios.defaults.withCredentials = true
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
// var loadinginstace
// axios发送请求拦截器，POST传参序列化
axios.interceptors.request.use(
  config => {
    // element ui Loading 方法
    //  loadinginstace = Loading.service({ fullscreen: true })
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  }
)
// axios响应拦截器，返回data
axios.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      return res
    }
  },
  error => {
    //  loadinginstace.close()
    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
  }
)
