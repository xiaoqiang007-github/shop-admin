import { request, userInfo } from '@/utils/request'
// import qs from 'qs'
import axios, { AxiosError } from 'axios'

interface MyData2 { // 返回接口类型比联合数组数据更好用些
  status: number | string
  msg: string
  data: any
}

export const getInfo = async (): Promise<MyData2> => {
  try {
    const data0 = await request({
      url: userInfo,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log('data0', data0)
    const { status, data, msg } = data0.data
    return {
      status: status !== 1 ? 'error' : '',
      msg,
      data
    }
  } catch (_e) {
    const e = _e as Error | AxiosError
    let msg: string
    if (axios.isAxiosError(e) && e.response) {
      msg = ''
    } else {
      msg = (e as Error).message
    }
    return {
      status: 'error',
      msg,
      data: ''
    }
  }
}
