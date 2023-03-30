<script setup>
import PageLayout from '~~/constants/interface-props/pageLayout'

// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps(PageLayout)
</script>
<template>
  <div class="layout-wrapper relative w-full relative" :class="pageLayout">
    <div class="" :class="[{ 'pt-[4.375rem] <sm:pt-[3.5rem]': spaceTop }]">
      <slot></slot>
    </div>

    <!-- <div class="group-bg-img absolute top-0 left-0 h-full w-full overflow-hidden">
      <div
        v-if="imagePrimary"
        class="group-bg-img__1 filter blur-[15px]"
        :style="{
          backgroundImage: `url(${imagePrimary})`,
        }"
      ></div>
      <div
        v-if="imageSecondary"
        class="group-bg-img__2 filter blur-[5px]"
        :style="{
          backgroundImage: `url(${imageSecondary})`,
        }"
      ></div>
    </div> -->

    <div class="group-bg-img absolute top-0 left-0 h-full w-full overflow-hidden">
      <div class="group-bg-img__1 w-full h-80 overflow-hidden relative">
        <img
          v-if="imagePrimary"
          class="absolute top-[-20px] left-0 w-full h-auto filter blur-[15px]"
          :src="imagePrimary"
        />
      </div>
      <div class="group-bg-img__2 w-full h-full overflow-hidden relative">
        <img
          v-if="imageSecondary"
          class="absolute top-[-20px] left-0 w-full h-auto filter blur-[15px]"
          :src="imageSecondary"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-wrapper {
  min-height: calc(100vh - 471px);

  @media only screen and (min-width: 0px) and (max-width: 811px) {
    min-height: unset !important;
  }

  .group-bg-img {
    z-index: -1;
    &__2 {
      height: 100%;
    }
    .group-bg-img__1::before,
    .group-bg-img__2::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;

      display: block;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
      width: 100%;
      height: 100%;
    }
  }

  // &.default {
  //   .group-bg-img {
  //     display: none;
  //   }
  // }
  // &.concert {
  //   .group-bg-img {
  //     &__1 {
  //       // รูปที่1
  //       padding-top: calc(450px / 1920px * 100%);

  //       @media only screen and (orientation: portrait) and (max-width: 479px) {
  //         padding-top: calc(746px / 375px * 100%);
  //       }
  //     }
  //   }
  // }
  // &.form {
  //   .group-bg-img {
  //     &__1 {
  //       // รูปที่2
  //       padding-top: calc(677px / 1920px * 100%);

  //       @media only screen and (orientation: portrait) and (max-width: 479px) {
  //         padding-top: calc(746px / 375px * 100%);
  //       }
  //     }
  //     &__2 {
  //       // รูปที่2
  //       display: none;
  //     }
  //   }
  // }

  &.default {
    .group-bg-img {
      display: none;
    }
  }
  &.concert {
    .group-bg-img {
      &__1 {
        // รูปที่1
        padding-top: calc(450px / 1920px * 100%);

        @media only screen and (orientation: portrait) and (max-width: 479px) {
          padding-top: calc(746px / 375px * 100%);
        }
      }
    }
  }
  &.form {
    .group-bg-img {
      &__1 {
        // รูปที่2
        padding-top: calc(677px / 1920px * 100%);

        @media only screen and (orientation: portrait) and (max-width: 479px) {
          padding-top: calc(746px / 375px * 100%);
        }
      }
    }
  }
}
</style>
