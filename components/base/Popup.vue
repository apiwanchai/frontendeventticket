<script setup>
// Import
import { useWindowSize, useElementBounding, onClickOutside } from '@vueuse/core'
import popup from '~~/constants/interface-props/popup'

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(popup)

// State
const isOpen = ref(false)
const { width } = useWindowSize()
const el = ref(null)
const { bottom } = useElementBounding(el)

// Function
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}

onClickOutside(el, () => {
  isOpen.value = false
  useSidebar(false)
})
</script>
<template>
  <div ref="el" class="base-popup-wrapper w-max" :class="{ relative: width > fullScreenMode && width > typeSwitch }">
    <div @click="toggleIsOpen">
      <slot></slot>
    </div>
    <!-- arrow -->
    <div
      v-if="width > typeSwitch && width > hidden && hidden !== true"
      class="w-full h-0 relative"
      :class="isOpen ? 'open' : 'close'"
    >
      <div
        class="w-[22px] h-[22px] mt-[-11px] bg-[var(--card-tertiary)] transform rotate-[45deg] absolute left-1/2 transform translate-x-[-50%]"
        :class="{ 'translate-x-[-55%]': width < fullScreenMode }"
        :style="{ top: `calc(${topPosition}${width > fullScreenMode ? ' + 4px' : ' + 5px'})` }"
      ></div>
    </div>
    <!-- overay -->
    <div
      v-if="width > hidden && hidden !== true"
      :class="[
        {
          'fixed top-0 left-0 w-screen h-screen bg-[#000000] bg-opacity-60 z-30': width <= typeSwitch,
        },
        isOpen ? 'open' : 'close',
      ]"
      @click="toggleIsOpen"
    ></div>
    <!-- content wrapper -->
    <div
      v-if="width > hidden && hidden !== true"
      class="absolute w-max rounded-[10px] bg-[var(--card-tertiary)] card-shadow py-4 z-40"
      :style="{
        top:
          width > typeSwitch
            ? width > fullScreenMode
              ? `calc(100% + ${topPosition})`
              : `calc(${bottom}px + ${topPosition})`
            : '50vh',
      }"
      :class="[
        { 'left-1/2 transform translate-x-[-50%]': width <= fullScreenMode || position === 'center' },
        { 'left-[-5px]': width > fullScreenMode && position === 'left' },
        { 'right-[-5px]': width > fullScreenMode && position === 'right' },
        { 'w-[97vw]': width <= fullScreenMode },
        {
          'left-1/2 transform translate-x-[-50%] translate-y-[-50%] fixed': width <= typeSwitch,
        },
        isOpen ? 'open' : 'close',
      ]"
    >
      <!-- content body -->
      <slot name="content" v-bind="{ toggleIsOpen }"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.base-popup-wrapper {
  .open {
    display: block;
  }
  .close {
    display: none;
  }

  .card-shadow {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}
</style>
