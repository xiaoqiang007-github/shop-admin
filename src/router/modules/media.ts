// 根据模块拆分路由表
import { RouteRecordRaw } from 'vue-router'
// 报错 Initial list of routes that should be added to the router.
const routers: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/index.vue'),
  meta: {
    title: '媒体'
  }
}

export default routers
