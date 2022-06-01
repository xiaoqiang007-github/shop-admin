import { request, userInfo, captchaPro, loginUrl, loginOutUrl } from '@/utils/request'
import type { ILogin, ILoginResponse } from './types/common' // 告诉ts这是类型不是值

export const getInfo = async () => {
  // axios.get 等方法支持泛型
  return request<ILogin>({
    method: 'GET',
    url: userInfo
  })
}

export const getCaptcha = async () => {
  return request<Blob>({
    method: 'GET',
    url: captchaPro,
    params: {
      timestamp: Date.now() // 避免接口请求图片被浏览器缓存
    },
    responseType: 'blob'
  })
}

export const login = async (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: loginUrl,
    data
  })
}

export const loginOut = async () => {
  return request<ILoginResponse>({
    method: 'get',
    url: loginOutUrl
  })
}
