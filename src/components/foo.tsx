import { defineComponent } from 'vue'

interface FooType {
  msg: string
}

const Foo = defineComponent({
  props: {
    msg: { type: String, required: true }
  },
  render (props: FooType) { return <div>Test---{props.msg}</div> }
})
export default Foo

// tsx格式化工具 函数名和小括号之间保留空格
