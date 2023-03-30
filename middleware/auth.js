export default defineNuxtRouteMiddleware((_to, _from) => {
    const user = useAuthUser()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()


    if (!user.value) {
      loginModal.value = true
      return navigateTo({ name: 'index' })
    }
  })
