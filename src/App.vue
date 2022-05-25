<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld
    ref="helloWorld"
    msg="Hello Vue 3 + TypeScript + Vite"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{msg: string}>()

// InstanceType 指定组件实例类型，这样就可以正常访问属性了
const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null)

onMounted(() => {
  console.log(helloWorld.value)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
