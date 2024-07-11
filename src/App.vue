<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <BaseCard>
    <template #header="{ pagecount, foo }">
      <p>{{ pagecount }}</p>
      <p>{{ foo }}</p>
      Vue ヘッダー
    </template>
    Vueコース用です。
    <template #footer> Vue フッター </template>
  </BaseCard>
</template>
<style scoped>
.red {
  color: red;
}
</style>
