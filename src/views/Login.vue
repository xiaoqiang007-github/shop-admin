<template>
  <div @click="handleFn()">
    login000 ---- {{ counter.count }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
const handleFn = () => {
  console.log('handleFn')
  counter.count++
  counter.$patch({ count: counter.count + 1 })
  counter.increment()
}
</script>
