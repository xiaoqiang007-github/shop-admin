import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER, TOKEN } from '@/utils/constant'
interface IToken {
  token: string
}
interface store {
  isCollapse: boolean
  user: IUserInfo | null,
  token: IToken | null
}
console.log('getItem(TOKEN)', TOKEN, getItem(TOKEN))
export const useContainerStore = defineStore('container', {
  state () :store {
    return { isCollapse: false, user: getItem(USER), token: getItem(TOKEN) }
  },
  actions: {
    setIsCollapse (payload: boolean) {
      this.isCollapse = payload
    },
    setUser (payload: IUserInfo | null) {
      this.user = payload
      setItem(USER, JSON.stringify(this.user))
    },
    setToken (payload: IToken | null) {
      this.token = payload
      setItem(TOKEN, JSON.stringify(this.token))
    }
  }
})
