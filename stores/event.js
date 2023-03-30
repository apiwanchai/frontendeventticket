import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', () => {
  // State
  const loading = ref(false)
  const error = ref(null)
  const events = ref({})

  // Actions
  const fetchEvents = async ({ page = 1, pageSize = 10 } = {}) => {
    loading.value = true
    const { data, error: errorObj } = await useLazyFetchAPI().get('/api/events', { page, pageSize })
    error.value = errorObj
    loading.value = false
    events.value = data
  }

  // Getters

  return {
    error,
    loading,
    events,
    fetchEvents,
  }
})
