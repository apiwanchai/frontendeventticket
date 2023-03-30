<script setup>
import bannersub from '~~/constants/interface-props/bannersub'
defineProps(bannersub)
</script>
<template>
  <div class="banner-sub relative">
    <img
      :src="imageUrl"
      alt="banner-sub"
      class="rounded-3xl absolute top-0 left-0 w-full h-full object-cover <lg:(rounded-md)"
    />
  </div>
</template>
<style lang="scss" scoped>
.banner-sub {
  padding-top: calc(190 / 1274 * 100%);
}
</style>
