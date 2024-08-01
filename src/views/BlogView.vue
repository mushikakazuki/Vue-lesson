<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>

<template>
  <h2>blog</h2>
  <p>{{ $route.params.id }}</p>
</template>
