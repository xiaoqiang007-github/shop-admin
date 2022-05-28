import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export const ElementPlusInstall = (app: App) => {
  app.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
}
