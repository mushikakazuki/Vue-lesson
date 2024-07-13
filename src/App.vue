<script setup>
import { defineAsyncComponent, ref } from 'vue'
import BaseLoader from './components/BaseLoader.vue'
// import BaseCard from './components/BaseCard.vue'

const BaseCard = defineAsyncComponent({
  loader: () => import('./components/BaseCard.vue'),
  loadingComponent: BaseLoader
})
const isshow = ref(false)
</script>
<template>
  <KeepAlive include="BaseCard">
    <component :is="BaseCard"> デフォルト2 </component>
  </KeepAlive>
  <BaseCard>
    <template #header="{ pagecount }">
      <h3>pagecount: {{ pagecount }}</h3>
    </template>
    デフォルト
  </BaseCard>
  <button @click="isshow = !isshow">open Modal</button>
  <Teleport to="body" :disabled="false">
    <dialog v-if="isshow" open>this is a Modal</dialog>
  </Teleport>
</template>

<style scoped>
.red {
  color: red;
}
</style>
