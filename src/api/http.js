import axios from 'axios'
import qs from 'qs'
// import { Loading, Message } from 'element-ui'
import {
  Message
} from 'element-ui'
// vue路由
import router from '../Router'
// 携带请求头
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 默认地址
axios.defaults.baseURL = process.env.API_HOST
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
    // loadinginstace.close()
    if (response.headers.sessionstatus === 'timeout') {
      router.push({
        path: '/login'
      })
      Message.error({
        message: '登录超时!!!'
      })
    } else if (response.headers.sessionstatus === 'lock') {
      router.push({
        path: '/login'
      })
      Message.error({
        message: '账号被锁定!!!'
      })
    } else if (response.headers.sessionstatus === 'loginout') {
      router.push({
        path: '/login'
      })
      Message.error({
        message: '账号在其他地方被登录!!!'
      })
    } else {
      return response.data
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

let prefix =
  process.env.NODE_ENV === 'development' ? '/paperx' : window.basePath

// axios通用接口
export let post = function ({
  url,
  ...rest
}) {
  const options = {
    url: `${prefix}/${url}`,
    //?userInfoId=${
    //   window.sessionStorage.userInfoId ? window.sessionStorage.userInfoId : ''
    // }`,
    method: 'POST',
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'Access-Control-Allow-Origin': 'localhost:8088'
    },
    data: {
      ...rest
    }
  }
  return axios(options)
}

export let getMock = function (url) {
  return axios.get(url)
}
