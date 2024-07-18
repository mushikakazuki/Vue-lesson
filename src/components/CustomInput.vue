<script setup>
const props = defineProps({
  count: {
    type: String,
    required: true
  }
})
const [model, attrs] = defineModel({
  type: String,
  required: true,
  set(value) {
    if (attrs.upcase) {
      value = value.toLocaleUpperCase()
    }
    return value
  }
})
const titlemodel = defineModel('newTitle', {
  type: String,
  default: 'NG'
})
</script>

<template>
  <h1>CustomInput</h1>
  <input v-model="model" type="text" />
  <p>{{ props.count }}</p>
  <input v-model="titlemodel" type="text" />
</template>
