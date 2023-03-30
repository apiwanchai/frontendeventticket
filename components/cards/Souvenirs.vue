<script setup>
import souvenirs from '~~/constants/interface-props/souvenirs'

defineProps(souvenirs)
</script>
<template>
  <div class="Souvenirs">
    <div class="relative cursor-pointer">
      <base-event-images :img-url="imgUrl" class="" />
      <div class="absolute bottom-0 left-0 flex justify-center items-center box text-xl font-semibold py-2 w-full">
        {{ subject }}
      </div>
    </div>
    <div class="flex justify-center items-center text-base font-semibold py-2">{{ title }}</div>
    <div class="flex justify-center items-center text-lg font-semibold py-2 price">{{ price }}</div>
  </div>
</template>

<style lang="scss">
.Souvenirs {
  .box {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(25px);
    border-radius: 0px 0px 10px 10px;
  }
  .price {
    background: linear-gradient(93.65deg, var(--btn-primary1) 1.5%, var(--btn-primary2) 99.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>
