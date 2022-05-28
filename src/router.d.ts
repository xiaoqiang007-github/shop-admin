import 'vue-router'

// 识别meta中的字段 title
declare module 'vue-router' {
  // eslint-disable-next-line
  interface RouteMeta {
    title: string
  }
}
