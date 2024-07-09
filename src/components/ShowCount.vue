<script setup>
import { onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue'
const props = defineProps({
  totalScore: {
    type: Number,
    required: true
  }
})
onMounted(() => {
  console.log('mount')
})
onUnmounted(() => {
  console.log('unmount')
})
onUpdated(() => {
  console.log('update')
})
onBeforeMount(() => {
  console.log('befor Mount')
})
console.log(props.totalScore)
</script>
<template>
  <p>count：{{ totalScore }}</p>
</template>
