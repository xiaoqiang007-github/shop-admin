import { defineStore } from 'pinia'

export const useContainerStore = defineStore('container', {
  state: () => {
    return { isCollapse: false }
  },
  actions: {
    setIsCollapse (payload: boolean) {
      this.isCollapse = payload
    }
  }
})
