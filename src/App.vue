<script setup>
import { ref } from 'vue'
import ResetButton from './components/ResetButton.vue'
import ShowCount from './components/ShowCount.vue'

const totalScore = ref(0)
const resetButton = (event) => {
  totalScore.value = event
}
</script>
<template>
  <ShowCount :total-score="totalScore" />
  <button @click="totalScore++">count++</button>
  <div style="margin-bottom: 1rem"></div>
  <ResetButton @reset-button="resetButton" />
</template>
<style scoped>
.red {
  color: red;
}
</style>
