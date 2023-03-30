<script setup>
import eventCard from '~~/constants/interface-props/eventCard'

const subtract = new URL('../../assets/images/subtract.png', import.meta.url)
// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(eventCard)

const isFavorite = ref(false)
</script>
<template>
  <div class="flex flex-col items-center event-card-wrapper relative">
    <div v-if="timeOut" class="v-rounded-t bg-[var(--danger)] px-3 py-1 text-xs absolute bottom-full right-2 w-max z-1">
      3 วันสุดท้าย!
    </div>
    <div class="absolute top-2 right-2 z-1">
      <base-favorite v-model="isFavorite" />
    </div>
    <base-event-images :img-url="imgUrl" class="card-images" />
    <div v-if="typeBtn" class="flex justify-between flex-col h-full mt-[0.8333333333333334vw]">
      <div class="">
        <div class="font-medium text-base event-card-title <2xl:text-sm">{{ title }}</div>
        <div class="text-base <2xl:text-xs">{{ dateTime }}</div>
        <div class="text-sm <2xl:text-xs">
          <nuxt-icon name="svg/location" class="text-title text-xl icon-location" />{{ location }}
        </div>
      </div>
      <base-button
        class="btn-primary min-w-[137px] mt-2 w-max"
        :class="[
          { 'btn-primary': statusBtn === '0' },
          { 'btn-cancel': statusBtn === '1' },
          { 'btn-tertiary': statusBtn === '2' },
        ]"
        rounded
        size="sm"
      >
        {{ statusBtn === '0' ? 'ซื้อตั๋ว' : statusBtn === '1' ? 'SOLD OUT' : 'เร็วๆนี้' }}
      </base-button>
    </div>
    <div
      v-if="!typeBtn"
      class="flex flex-col img-subtract relative w-full mt-[1.0416666666666665vw] <sm:(mt-[3.0416666666666665vw])"
    >
      <img :src="subtract" alt="icon" class="rounded-xl w-full h-auto" />
      <div class="absolute top-0 left-0 p-4 w-full h-full">
        <div class="font-medium text-base event-card-title">{{ title }}</div>
        <div class="text-base">{{ dateTime }}</div>
        <div class="text-sm">
          <nuxt-icon name="svg/location" class="text-title text-xl icon-location" />{{ location }}
        </div>
        <base-button
          class="btn-primary min-w-[137px] absolute bottom-4 right-3"
          :class="[
            { 'btn-primary': statusBtn === '0' },
            { 'btn-cancel': statusBtn === '1' },
            { 'btn-tertiary': statusBtn === '2' },
          ]"
          rounded
          size="sm"
        >
          {{ statusBtn === '0' ? 'ซื้อตั๋ว' : statusBtn === '1' ? 'SOLD OUT' : 'เร็วๆนี้' }}
        </base-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.event-card-wrapper {
  .card-images {
    filter: drop-shadow(5px 0px 0px var(--btn-primary2));
  }
  .event-card-title {
    background: linear-gradient(93.65deg, var(--btn-primary1) 1.5%, var(--btn-primary2) 99.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>
<style lang="scss">
.nuxt-icon.nuxt-icon--fill.icon-location * {
  fill: url(#location0_linear) !important;
}

#location0_linear {
  --color-svg0: var(--btn-primary1);
  --color-svg1: var(--btn-primary2);
}
</style>
