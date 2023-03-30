import { useAuthUser } from './useAuthUser'

export const useAuth = () => {
  const authUser = useAuthUser()
  const cookieUser = useCookie('user')
  // Watch
  watch(authUser, (newData) => {
    newData === null && navigateTo('/')
  })

  const setUser = (user) => {
    authUser.value = user
  }

  const setCookie = (val) => {
    cookieUser.value = val
  }

  const logout = async () => {
    try {
      await useLazyFetchAPI().get('/api/signout')
      setUser(null)
      setCookie(null)
    } catch (error) {}
  }

  const fetchUser = async () => {
    try {
      const { data } = await useLazyFetchAPI().get('/api/userinfo')
      setUser(data.value.userinfo)
    } catch (error) {
      // setCookie(null)
    }
  }

  const checkLogin = async () => {
    if (cookieUser.value) {
      await fetchUser()
    }
    return !!cookieUser
  }

  return {
    setUser,
    setCookie,
    logout,
    fetchUser,
    checkLogin,
  }
}
