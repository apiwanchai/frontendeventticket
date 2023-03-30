export const useLoading = () => {
  const loading = ref(false)
  const show = () => {
    loading.value = true
  }
  const hide = () => {
    loading.value = false
  }
  return { show, hide, loading }
}
