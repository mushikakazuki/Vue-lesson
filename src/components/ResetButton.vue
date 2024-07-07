<script setup>
defineEmits(['resetButton'])
</script>
<template>
  <button @click="$emit('resetButton', 200)">リセット</button>
</template>
