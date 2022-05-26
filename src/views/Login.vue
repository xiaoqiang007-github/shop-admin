<template>
  <div @click="handleFn()">
    login000 ---- {{ counter.count }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { onMounted } from 'vue'
import { getInfo } from '@/api/user'

const counter = useCounterStore()
const handleFn = () => {
  console.log('handleFn')
  counter.count++
  counter.$patch({ count: counter.count + 1 })
  counter.increment()
}

onMounted(async () => {
  console.log('onMounted')
  const { data } = await getInfo()
  console.log('axios data', data)
})
</script>
