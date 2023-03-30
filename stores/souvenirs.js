import { defineStore } from 'pinia'

export const useSouvenirStore = defineStore('souvenir', () => {
  // State
  const loading = ref(false)
  const error = ref(null)
  const souvenirs = ref({})

  // Actions
  const fetchSouvenirs = async ({ page = 1, pageSize = 10, type } = {}) => {
    loading.value = true
    const { data, error: errorObj } = await useLazyFetchAPI().get('/api/souvenirs', {
      page,
      pageSize,
      ...(type && { type }),
    })
    error.value = errorObj
    loading.value = false
    souvenirs.value = data
  }

  // Getters
  const souvenirActiveList = computed(() => {
    return souvenirs.value.rows.filter((v) => v.status === 'active')
  })

  return {
    error,
    loading,
    souvenirs,
    fetchSouvenirs,
    souvenirActiveList,
  }
})
