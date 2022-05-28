<template>
  <div>
    home
    <el-button disabled>
      Default
    </el-button>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(0)
</script>
