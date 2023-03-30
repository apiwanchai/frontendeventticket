<script setup>
const nuxtApp = useNuxtApp()
const loading = useLoading()
nuxtApp.hook('page:start', () => {
  loading.show()
})
nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    loading.hide()
  }, 1000)
})
</script>

<template>
  <div
    v-if="loading.loading.value"
    class="loading-wrapper w-screen h-screen fixed flex items-center justify-center bg-[#000000] bg-opacity-60"
  >
    <img src="https://scrapbook.younglife.org/Images/Loading_squares.gif" alt="loading" />
  </div>
</template>
<style lang="scss" scoped>
.loading-wrapper {
  z-index: 53;
}
</style>
