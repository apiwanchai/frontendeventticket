<script setup>
import titles from '~~/constants/interface-props/title'

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(titles)
</script>
<template>
  <div :id="`subject-${id}`" class="subject-wrapper flex items-center">
    <img v-if="icon" :src="icon" alt="icon" class="mr-2" />
    <div class="text-2xl font-semibold <sm:text-xl">{{ subject }}</div>
  </div>
</template>

<style lang="scss">
.subject-wrapper {
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
