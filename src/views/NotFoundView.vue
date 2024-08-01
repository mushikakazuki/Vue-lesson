<script setup>
defineProps({
  all: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <h1>NotFound</h1>
  {{ all }}
</template>
