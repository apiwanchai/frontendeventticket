export default defineNuxtPlugin(async (nuxtApp) => {
  const { checkLogin } = useAuth()
  await checkLogin()
})
