import { toValue, watchEffect } from 'vue'
import { useRefhistory } from './historys'
export function useRefLimit(item, capacity) {
  const { history, undo } = useRefhistory(item)
  watchEffect(() => {
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
}
