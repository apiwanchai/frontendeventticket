export const useToken = () => {
  const cookieUser = useCookie('user')
  const token = useState('token', () => ({
    token: cookieUser.value && cookieUser.value.token,
    refreshToken: cookieUser.value && cookieUser.value.refreshToken,
  }))
  const setToken = (data) => {
    token.value = data
  }
  return {
    token,
    setToken,
  }
}
