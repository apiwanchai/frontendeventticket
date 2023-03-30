<script setup>
import buttonIcon from '~~/constants/interface-props/buttonIcon'
defineProps(buttonIcon)
</script>

<template>
  <div
    :id="id"
    class="border-warpper w-[40px] h-[40px] rounded-full border-[1px] cursor-pointer text-center flex justify-center items-center <sm:(w-[32px] h-[32px])"
    :style="`border-color: ${borderColor};`"
  >
    <nuxt-icon
      :name="`svg/${image}`"
      class="w-full h-full text-xl text-center flex justify-center items-center icon-favorite-btn"
      :style="`color: ${borderColor};`"
    />
  </div>
</template>
<style lang="scss" scoped>
.boder-color {
  border-color: var(borderColor);
}
</style>
<style lang="scss">
.icon-favorite-btn svg {
  margin: 0 !important;
  width: 24px;
  height: 19px;

  @media only screen and (orientation: portrait) and (max-width: 479px) {
    width: 19.2px;
    height: 15.2px;
  }
}
</style>
