<script setup>
import { ref } from 'vue'
import { useRefLimit } from './composables/refLimit'
const count = ref(0)
const { history, undo } = useRefLimit(count, ref(4))
</script>
<template>
  <p>count:{{ count }}</p>
  <button @click="count++">+1</button>
  <p>history:{{ history }}</p>
  <button @click="undo">undo</button>
</template>

<style scoped>
.red {
  color: red;
}
</style>
