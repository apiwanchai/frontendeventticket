<!-- eslint-disable no-unused-vars -->
<script setup>
// import { defineComponent } from 'vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { useBase64 } from '@vueuse/core'

import bannerSlide from '~~/constants/interface-props/bannerSlide'
const props = defineProps(bannerSlide)

const dataImg = [
  {
    img: '_nuxt/assets/images/promote/promote1.jpg',
  },
  {
    img: '_nuxt/assets/images/banners/banner1.png',
  },
  {
    img: '_nuxt/assets/images/promote/promote1.jpg',
  },
  {
    img: '_nuxt/assets/images/banners/banner1.png',
  },
  {
    img: '_nuxt/assets/images/promote/promote1.jpg',
  },
  {
    img: '_nuxt/assets/images/banners/banner1.png',
  },
  {
    img: '_nuxt/assets/images/promote/promote1.jpg',
  },
  {
    img: '_nuxt/assets/images/banners/banner1.png',
  },
  {
    img: '_nuxt/assets/images/promote/promote1.jpg',
  },
  {
    img: '_nuxt/assets/images/banners/banner1.png',
  },
]

function setBackground($image) {
  const rgb = getAverageRGB($image)
  document.getElementById(props.id).style.transition = 'background-color 0.4s ease-out'
  document.getElementById(props.id).style.backgroundColor = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
}

function getAverageRGB(imgEl) {
  // console.log('3 -=-=-=-> ', imgEl)
  const blockSize = 5 // only visit every 5 pixels
  const defaultRGB = { r: 0, g: 0, b: 0 } // for non-supporting envs
  const canvas = document.createElement('canvas')
  const context = canvas.getContext && canvas.getContext('2d')
  let data
  let i = -4
  const rgb = { r: 0, g: 0, b: 0 }
  let count = 0

  if (!context) {
    return defaultRGB
  }

  const height = (canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height)
  const width = (canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width)

  context.drawImage(imgEl, 0, 0)

  try {
    data = context.getImageData(0, 0, width, height)
  } catch (e) {
    return defaultRGB
  }

  const length = data.data.length

  while ((i += blockSize * 4) < length) {
    ++count
    rgb.r += data.data[i]
    rgb.g += data.data[i + 1]
    rgb.b += data.data[i + 2]
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count)
  rgb.g = ~~(rgb.g / count)
  rgb.b = ~~(rgb.b / count)

  return rgb
}

const onSwiperSlide = (e) => {
  if (!props.bgShow) return
  setBackground(
    e.slides.find((o) => {
      return o.className.includes('swiper-slide-active')
    }).children[0].children[0]
  )
}
</script>
<template>
  <div :id="id" class="slide-promote">
    <swiper
      class="swiper"
      :modules="[Pagination]"
      :space-between="30"
      slides-per-view="1.5"
      :pagination="{ clickable: true }"
      :loop="true"
      :centered-slides="true"
      @update="onSwiperSlide"
      @slide-change-transition-end="onSwiperSlide"
    >
      <swiper-slide v-for="(item, index) in dataImg" :key="index" class="slide">
        <div>
          <img :src="item.img" alt="" srcset="" class="object-cover w-full v-rounded" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.slide-promote {
  .swiper::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #131313 100%);
  }
  .slide {
    div {
      position: relative;
      padding-top: calc(370 / 1054 * 100%);
      @media only screen and (orientation: portrait) and (max-width: 479px) {
        padding-top: calc(111 / 317 * 100%);
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    margin: 3.5937499999999996vw 0;
    @media only screen and (orientation: portrait) and (max-width: 479px) {
      margin: 5.5937499999999996vw 0;
    }
  }
}
</style>
