<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onOther = () => {
  console.log('onOther')
  router.push({ path: '/other' })
}
</script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ path: '/other', query: { id: 20 }, hash: '#aaa' }">Other</RouterLink>
  <RouterView />

  <button @click="$router.push({ path: '/other' })">other</button>
</template>

<style scoped></style>
