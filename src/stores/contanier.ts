import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER } from '@/utils/constant'
interface store {
  isCollapse: boolean
  user: IUserInfo | null
}

export const useContainerStore = defineStore('container', {
  state () :store {
    return { isCollapse: false, user: getItem(USER) }
  },
  actions: {
    setIsCollapse (payload: boolean) {
      this.isCollapse = payload
    },
    setUser (payload: IUserInfo) {
      this.user = payload
      setItem(USER, JSON.stringify(this.user))
    }
  }
})
