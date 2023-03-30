export default defineNuxtPlugin((nuxtApp) => {
  // way 1
  nuxtApp.provide('test', () => 'my injected function')

  // way 2
  return {
    provide: {
      test2: () => 'my injected function 2',
    },
  }
})
