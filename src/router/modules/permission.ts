// 根据模块拆分路由表
import { RouteRecordRaw } from 'vue-router'
// 报错 Initial list of routes that should be added to the router.
const routers: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: () => import('@/views/permission/index.vue'),
  meta: {
    title: '权限'
  },
  children: [
    {
      path: 'role',
      name: 'permission-role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色'
      }
    },
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '权限规则'
      }
    }
  ]
}

export default routers
