<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
const URL = 'https://vuejs.org'
const vueId = 'v-id'
const input = ref('aaa')
const count = ref(0)
const chekc = ref(false)

const countW = ref(0)
const isRed = ref(true)
// watchEffect(() => {
//   console.log(countW.value)
//   setTimeout(() => {
//     console.log('afer Effect')
//   }, 2000)
// })

const cssChange = () => {
  isRed.value = !isRed.value
}

watch(countW, () => {
  console.log('count')
})

const event = 'keyup'

const counts = computed(() => {
  return count.value < 3 ? 'bad' : 'OK'
})

const lists = ref(['red', 'blue', 'green'])

const count2 = ref(0)
const add = function (event) {
  console.log(event)
  count.value += 1
}
</script>
<template>
  <div @click="add">
    <a v-bind="{ id: vueId, href: URL }" @click.stop>vue.js</a>
    <div>{{ count }}</div>
    <div>{{ counts }}</div>
    <button @click.prevent.stop="add">button</button>
  </div>
  <div>{{ count2 }}</div>
  <input type="text" @[event].space="count2++" /><br />

  <input :id="input" v-model="input" type="text" />
  <div>{{ input }}</div>

  <div>{{ countW }}</div>
  <button @click="countW++">+1</button>

  <div :class="{ red: !isRed }">文字色変更</div>
  <button @click="cssChange">文字色変更</button>

  <div :style="{ color: 'red', backgroundColor: 'blue' }">text2</div>

  <p v-if="chekc">OK</p>
  <p v-else-if="!chekc">NG</p>
  <button @click="chekc = !chekc">toggle</button>

  <p v-show="chekc">OK</p>

  <template v-if="chekc">
    <p>OK</p>
    <p>hello</p>
  </template>

  <div v-for="list in lists" :key="list">・{{ list }}</div>

  <div v-if="chekc">OK</div>
  <div v-else>NG</div>
</template>
<style>
h2 {
  color: red;
}

.red {
  color: red;
}
</style>
