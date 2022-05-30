import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  // baseURL: 'https://shop.fed.lagounews.com/api/admin'
  baseURL: import.meta.env.VITE_API_BASEURL
})

instance.interceptors.request.use(
  function (config) {
    // 统一设置用户身份
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // 统一处理接口响应错误， 比如token过期，服务端异常
    if (response.data.status && response.data.status !== 200) {
      ElMessage.error(response.data.msg || '请求失败，请稍后重试')
      // 手动返回一个Promise 异常
      return Promise.reject(response.data)
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

// 封装泛型请求方法
export const request = <T = any>(config: AxiosRequestConfig) => {
  return instance(config).then(res => {
    return (res.data.data || res.data) as T
  })
}

export const userInfo = '/login/info'

export const captchaPro = '/captcha_pro'

export const loginUrl = '/login'
