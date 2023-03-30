import { defineStore } from 'pinia'

export const usehelpCenterStore = defineStore('helpCenter', () => {
  // State
  const loading = ref(false)
  const error = ref(null)
  const helpCenter = ref({})

  // Actions
  const fetchHelpCenter = async ({ page = 1, pageSize = 10, type } = {}) => {
    loading.value = true
    const { data, error: errorObj } = await useLazyFetchAPI().get('/api/helpCenter', {
      page,
      pageSize,
      ...(type && { type }),
    })
    error.value = errorObj
    loading.value = false
    helpCenter.value = data
  }

  // Getters
  const helpCenterActive = computed(() => {
    return helpCenter.value.rows.filter((v) => v.status === 'active')
  })

  return {
    error,
    loading,
    helpCenter,
    fetchHelpCenter,
    helpCenterActive,
  }
})
