import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useContainerStore } from '@/stores/contanier'
import { useRouter } from 'vue-router'

const container = useContainerStore()

const instance = axios.create({
  // baseURL: 'https://shop.fed.lagounews.com/api/admin'
  baseURL: import.meta.env.VITE_API_BASEURL
})

const router = useRouter()

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // 统一设置用户身份
    if (container.user && container.token) {
      config.headers =
      {
        ...config.headers,
        Authorization: 'Bearer ' + container.token
      }
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

let isRefreshing = false // 控制刷新token状态
// let requests:any[] = [] // 存储刷新token 期间过来的401请求
// Add a response interceptor
instance.interceptors.response.use(
  response => {
    const { status } = response.data

    // 请求成功
    if (status === 200 || response.config.responseType === 'blob') {
      return response
    }

    // 登录过期
    if (status === 410000) {
      if (isRefreshing) return Promise.reject(response)
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(
        () => {
          // 清除登录状态并跳转到登录页
          container.setUser(null)
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          })
        }
      ).finally(() => {
        isRefreshing = false
      })

      return Promise.reject(response)
    }

    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage({
      type: 'error',
      message: response.data.msg,
      duration: 5 * 1000
    })
    return Promise.reject(response)
  },
  err => {
    ElMessage({
      type: 'error',
      message: err.message,
      duration: 5 * 1000
    })
    return Promise.reject(err)
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

export const loginOutUrl = '/setting/admin/logout'

export const settingAdmin = '/setting/admin'
