<script setup>
import eventImages from '~~/constants/interface-props/eventImages'

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(eventImages)
</script>
<template>
  <div class="relative img-event w-full">
    <img :src="imgUrl" alt="icon" class="rounded-xl absolute top-0 left-0 w-full h-full" />
  </div>
</template>
<style lang="scss" scoped>
.img-event {
  padding-top: calc(238.85 / 185 * 100%);
}
</style>
