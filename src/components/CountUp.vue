<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <h2 v-bind="$attrs">CountUp</h2>
  <div>{{ count }}</div>
  <button @click="count++">count++</button>
</template>
