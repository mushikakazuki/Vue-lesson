<script setup>
import { ref } from 'vue'

const pagecount = ref(1)
</script>
<template>
  <div>
    <button @click="pagecount = 1">1</button>
    <button @click="pagecount = 2">2</button>
    <button @click="pagecount = 3">3</button>
    <header>
      <slot name="header" :pagecount="pagecount" :foo="'foo'" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  width: 400px;
  text-align: center;
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 16px;
}
</style>
