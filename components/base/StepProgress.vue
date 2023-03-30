<script setup>
import stepProgress from '~/constants/interface-props/stepProgress'
defineProps(stepProgress)
</script>

<template>
  <div class="step-progress-wrapper w-max h-max max-w-full flex gap-5 mx-auto">
    <div
      v-for="(item, index) in data"
      :key="item.description + index"
      class="flex items-center justify-center gap-5 mb-[2.625rem]"
    >
      <div
        class="step w-[3.125rem] h-[3.125rem] relative flex items-center justify-center rounded-full bg-[#ffffff] bg-opacity-30 <sm:(w-[1.75rem] h-[1.75rem])"
        :class="{ 'bg-gd-primary': index + 1 <= step }"
      >
        <span
          v-if="item?.title"
          class="text-2xl font-light text-[var(--text-subtitle)] <sm:text-lg"
          :class="{ 'font-bold text-[var(--text-title)]': index + 1 <= step }"
          >{{ item?.title }}</span
        >
        <nuxt-icon v-if="item?.svg" :name="item?.svg" />
        <img v-if="item?.image" :src="item?.image" class="w-[65%]" />
        <span
          v-if="item?.description"
          class="description text-xl font-semibold text-[var(--text-subtitle)] <sm:text-sm"
          :class="{ 'font-bold text-[var(--text-title)]': index + 1 <= step }"
          >{{ item?.description }}</span
        >
      </div>
      <div v-if="data[index + 1]">
        <div class="dash-line max-w-[125px]" :style="{ width: lineWidth }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step-progress-wrapper {
  .dash-line {
    display: inline-block;
    padding: 0 20px;
    border: 1px solid;
    border-image: url('~/assets/images/step-progress-line.png') 2 round;
    @media only screen and (max-width: 640px) {
      border-image: url('~/assets/images/step-progress-line.png') 40 round;
    }
  }
  .step {
    .description {
      width: max-content;
      position: absolute;
      top: calc(100% + 1rem);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
