<script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'

const inputText = ref('')
const textarea = ref('')
const check = ref('OK')
const fruits = ref([])
const radio = ref()
const select = ref('')
const UseInput = ref('')
const title = ref()
</script>
<template>
  <h1>v-model</h1>
  <h2>text</h2>
  <input v-model.lazy.trim="inputText" type="text" />
  <p>{{ typeof inputText }}</p>
  <h2>textarea</h2>
  <textarea v-model.trim="textarea"></textarea>
  <p style="white-space: pre">{{ textarea }}</p>
  <h2>checkbox</h2>
  <input id="check" v-model="check" true-value="OK" false-value="NG" type="checkbox" />
  <label for="check">{{ check }}</label>

  <p>fruits</p>
  <input id="apple" v-model="fruits" value="apple" type="checkbox" />
  <label for="apple">apple</label>
  <input id="banana" v-model="fruits" value="banana" type="checkbox" />
  <label for="banana">banana</label>
  <input id="orange" v-model="fruits" value="orange" type="checkbox" />
  <label for="orange">orange</label>
  {{ fruits }}

  <p>radio</p>
  <input v-model="radio" type="radio" value="1" />1
  <input v-model="radio" type="radio" value="2" />2
  <p>{{ rad }}</p>

  <select v-model="select">
    <option value="" disabled>選択してください。</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>{{ select }}</p>
  <p>----------------</p>
  <CustomInput v-model:new-title="title" v-model.upcase="UseInput" :count="'カウント'" />
  <p>1つめ：{{ UseInput }}</p>
  <p>２つ目：{{ title }}</p>
</template>

<style scoped>
.red {
  color: red;
}
</style>
