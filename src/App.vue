<script setup>
import { onMounted, ref } from 'vue'
import ResetButton from './components/ResetButton.vue'
import ShowCount from './components/ShowCount.vue'

const input = ref('')
onMounted(() => {
  input.value.focus()
})
const totalScore = ref(0)
const resetButton = (event) => {
  totalScore.value = event
}
const isShow = ref(true)
</script>
<template>
  <button @click="isShow = !isShow">show_select</button>
  <template v-if="isShow">
    <ShowCount :total-score="totalScore" />
  </template>
  <button @click="totalScore++">count++</button>
  <div style="margin-bottom: 1rem"></div>
  <ResetButton @reset-button="resetButton" />
  <input ref="input" type="text" />
</template>
<style scoped>
.red {
  color: red;
}
</style>
