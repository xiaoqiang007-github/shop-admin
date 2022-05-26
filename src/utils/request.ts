import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
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

export const request = instance

export const userInfo = '/login/info'
