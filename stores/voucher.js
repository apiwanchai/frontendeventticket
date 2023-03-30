import { defineStore } from 'pinia'

export const useVoucherStore = defineStore('voucher', () => {
  // State
  const loading = ref(false)
  const error = ref(null)
  const vouchers = ref({})

  // Actions
  const fetchVouchers = async ({ page = 1, pageSize = 10, type } = {}) => {
    loading.value = true
    const { data, error: errorObj } = await useLazyFetchAPI().get('/api/vouchers', {
      page,
      pageSize,
      ...(type && { type }),
    })
    error.value = errorObj
    loading.value = false
    vouchers.value = data
  }

  // Getters
  const voucherActiveList = computed(() => {
    return vouchers.value.rows.filter((v) => v.status === 'active')
  })

  return {
    error,
    loading,
    vouchers,
    fetchVouchers,
    voucherActiveList,
  }
})
