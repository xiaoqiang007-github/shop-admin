import { request, userInfo } from '@/utils/request'
import type { ILogin } from './types/common' // 告诉ts这是类型不是值

export const getInfo = async () => {
  // axios.get 等方法支持泛型
  return request<ILogin>({
    method: 'GET',
    url: userInfo
  })
}
