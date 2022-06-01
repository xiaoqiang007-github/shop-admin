import { ElForm } from 'element-plus'
// import { FormItemRule } from 'element-plus/packages/form/src/form.type'
import { FormItemRule } from 'element-plus/lib/tokens/form.d'

export type IElForm = InstanceType<(typeof ElForm)>

export type IFormRule = Record<string, FormItemRule[]>
