<script setup>
const { isDarkMode } = useTheme()
watch(isDarkMode, (newVal) => initHead(newVal))
const initHead = (isDarkMode) => {
  useHead({
    htmlAttrs: {
    'data-theme': isDarkMode ? 'dark' : 'light',
    },
  })
}
// init
initHead(isDarkMode.value)
</script>

<template>
  <Loading />
  <base-global-alert />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
