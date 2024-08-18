<script setup>
import { useCounterStore } from './store/counter'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>pinia</h1>
  <button @click="counterStore.count++">click</button>
  <p>{{ counterStore.count }}</p>
</template>

<style scoped></style>
