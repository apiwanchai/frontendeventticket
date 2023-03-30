<script setup>
const { isDarkMode } = useTheme()
const setDarkMode = (val) => {
  isDarkMode.value = val
}
</script>

<template>
  <div
    class="flex justify-center items-center py-2 px-3 rounded-full bg-gray-800 gap-2 cursor-pointer"
    :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-400'"
  >
    <nuxt-icon
      name="svg/dark"
      class="text-lg"
      :class="isDarkMode ? 'text-warning' : 'text-white'"
      @click="setDarkMode(true)"
    />
    <nuxt-icon
      name="svg/light"
      class="text-lg"
      :class="!isDarkMode ? 'text-warning' : 'text-white'"
      @click="setDarkMode(false)"
    />
  </div>
</template>
