import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  // State
  const loading = ref(false)
  const error = ref(null)
  const newses = ref({})

  // Actions
  const fetchNewses = async ({ page = 1, pageSize = 10, type } = {}) => {
    loading.value = true
    const { data, error: errorObj } = await useLazyFetchAPI().get('/api/news', {
      page,
      pageSize,
      ...(type && { type }),
    })
    error.value = errorObj
    loading.value = false
    newses.value = data
  }

  // Getters
  const newsActiveList = computed(() => {
    return newses.value.rows.filter((v) => v.status === 'active')
  })

  return {
    error,
    loading,
    newses,
    fetchNewses,
    newsActiveList,
  }
})
