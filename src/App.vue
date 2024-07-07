<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import CountUp from '@/components/CountUp.vue'
import BaseButton from './components/BaseButton.vue'
</script>
<template>
  <h1 class="red">App</h1>
  <CountUp id="baseId" class="blue" />
  <BaseTemplate />
  <BaseButton id="baseId" class="blue" />
</template>
<style scoped>
.red {
  color: red;
}
</style>
