<script setup>
import { VueFinalModal } from 'vue-final-modal'
import modalDialog from '~~/constants/interface-props/modalDialog'
const imgUrl = new URL('../../assets/images/bg.jpg', import.meta.url)
const barcode = new URL('../../assets/images/barcode.jpg', import.meta.url)
const seatNumber = ['A1', 'A2', 'A3', 'A4']
// Props
defineProps(modalDialog)

// Functions
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <vue-final-modal
    :id="idDialog"
    class="dialog-concert-ticket"
    content-class="flex justify-center items-center flex-col max-w-xl mx-4 dark:bg-gray-900 border dark:border-gray-700 rounded-3xl space-y-2"
    :lock-scroll="true"
    :click-to-close="false"
    :esc-to-close="false"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <!-- :hide-overlay="true"
    display-directive="show"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade" -->
    <div class="relative flex flex-col">
      <nuxt-icon
        name="svg/cancel"
        class="absolute top-2 right-4 z-10 text-lg cursor-pointer"
        @click="emit('update:modelValue', false)"
      />
      <base-event-images :img-url="imgUrl" />
      <div class="p-4">
        <div class="text-base">Beabadoobee Beatopia Tour 2022 Live in Bangkok</div>
        <div class="mt-2">
          <div class="text-sm text-subtitle">รอบการแสดง</div>
          <div class="text-base">จันทร์, 19/09/2022 - 19:30 น.</div>
        </div>
        <div class="mt-2">
          <div class="text-sm text-subtitle">สถานที่</div>
          <div class="text-base">สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร</div>
        </div>
        <div class="flex mt-2">
          <div class="text-sm text-subtitle">
            <div class="mb-2">โซนที่นั่ง</div>
            <base-button class="btn-zone text-base rounded-lg cursor-auto" size="sm"> A2 </base-button>
          </div>
          <div class="text-sm text-subtitle ml-4">
            <div class="mb-2">เลขที่นั่ง</div>
            <div class="flex justify-center items-center">
              <span v-for="(item, index) in seatNumber" :key="index" class="text-lg text-link"> {{ item }}, </span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative img-concert-ticket w-full">
        <img :src="barcode" alt="icon" class="rounded-xl absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  </vue-final-modal>
</template>

<style lang="scss">
.dialog-concert-ticket {
  .vfm__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .vfm__content {
    // width: 378px;
    width: 20vw;
    min-height: 100px;
    background-color: var(--modal-bg);
    border: 0px solid;
    position: absolute;
    @media only screen and (orientation: landscape) and (max-width: 1366px) {
      width: 28vw;
      top: 50%;
      transform: translateY(-50%);
    }
    @media only screen and (orientation: landscape) and (max-width: 1024px) {
      width: 280px;
      top: 50%;
      transform: translateY(-50%);
    }
    @media only screen and (orientation: portrait) and (max-width: 1024px) {
      width: max-content;
      top: 50%;
      transform: translateY(-50%);
    }

    @media only screen and (orientation: portrait) and (max-width: 768px) {
      width: 387px;
    }

    @media only screen and (orientation: portrait) and (max-width: 479px) {
      width: 340px;
    }
  }
  .img-event {
    img {
      border-radius: 20px 20px 0 0;
    }
  }
  .btn-zone {
    background: #40e6e7;
    color: var(--color);
  }
  .img-concert-ticket {
    padding-top: calc(102 / 387 * 100%);
  }
}
</style>
