<template>
  <div @click="handleFn()">
    login000 ---- {{ counter.count }}
  </div>
</template>

<script setup lang="ts">
// 找不到模块“@/api/user”或其相应的类型声明   不影响正常运行
import { getInfo } from '../api/user'
import { ILogin } from '../api/types/common'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref } from 'vue'

const counter = useCounterStore()
const list = ref<ILogin['slide']>([])
const handleFn = () => {
  console.log('handleFn')
  counter.count++
  counter.$patch({ count: counter.count + 1 })
  counter.increment()
}

onMounted(async () => {
  console.log('onMounted')
  const data = await getInfo()
  console.log('axios data', data)
  list.value = data.slide
  console.log(list.value)
})
</script>
