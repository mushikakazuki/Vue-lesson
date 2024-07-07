<script setup>
const props = defineProps({
  totalScore: {
    type: Number,
    required: true
  }
})
console.log(props.totalScore)
</script>
<template>
  <p>count：{{ totalScore }}</p>
</template>
