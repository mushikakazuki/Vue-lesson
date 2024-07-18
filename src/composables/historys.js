import { ref, watchEffect } from 'vue'

export const useRefhistory = (watch) => {
  const history = ref([])

  watchEffect(() => {
    history.value.push(watch.value)
  })
  const undo = () => {
    if (history.value.length !== 1) {
      history.value.pop()
      watch.value = history.value.pop()
    }
  }
  return { history, undo }
}
