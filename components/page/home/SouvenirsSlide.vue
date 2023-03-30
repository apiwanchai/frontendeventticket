<script setup>
// import { defineComponent } from 'vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const tabsSouvenirs = [
  {
    id: 'productNew',
    name: 'สินค้ามาใหม่',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'bestSeller',
    name: 'สินค้าขายดี',
    imgkey: '',
    svgkey: '',
  },
]
const itemSouvenirs = [
  {
    imgUrl: '_nuxt/assets/images/bg3.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg3.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
]
</script>
<template>
  <div class="SouvenirsSlide content-md">
    <div class="flex justify-between items-center w-full mb-2 <sm:(flex) sm:hidden">
      <base-title subject="สินค้าที่ระลึก" />
      <base-button @click="$router.push('/souvenirs')"> <span class="text-link">ทั้งหมด</span></base-button>
    </div>
    <div class="flex justify-between items-center mb-8 <sm:justify-center">
      <base-title subject="สินค้าที่ระลึก" class="<sm:hidden sm:flex" />
      <base-tabs tabs-id="souvenirs" :items="tabsSouvenirs" active="productNew" class="tab-primary <sm:mb-6" />
      <base-button @click="$router.push('/souvenirs')">
        <span class="text-link <sm:hidden sm:flex">ทั้งหมด</span></base-button
      >
    </div>
    <div id="souvenirs">
      <div :id="tabsSouvenirs[0].id" class="tabcontent">
        <swiper
          class="swiper"
          :modules="[Pagination]"
          :space-between="30"
          slides-per-view="5.3"
          :pagination="{ clickable: true }"
          :breakpoints="{
            2000: {
              slidesPerView: 5.3,
            },
            1366: {
              slidesPerView: 5.3,
            },
            1024: {
              slidesPerView: 4.5,
            },
            768: {
              slidesPerView: 3.3,
            },
            812: {
              slidesPerView: 4.2,
            },
            576: {
              slidesPerView: 2.2,
            },
            375: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1.2,
            },
          }"
        >
          <swiper-slide v-for="(item, index) in itemSouvenirs" :key="index" class="slide">
            <cards-souvenirs
              :id="item.title"
              :img-url="item.imgUrl"
              :title="item.title"
              :subject="item.subject"
              :price="item.price"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div :id="tabsSouvenirs[1].id" class="tabcontent">
        <swiper
          class="swiper"
          :modules="[Pagination]"
          :space-between="30"
          slides-per-view="5"
          :pagination="{ clickable: true }"
          :breakpoints="{
            2000: {
              slidesPerView: 5.3,
            },
            1366: {
              slidesPerView: 5.3,
            },
            1024: {
              slidesPerView: 4.5,
            },
            768: {
              slidesPerView: 3.3,
            },
            812: {
              slidesPerView: 4.2,
            },
            576: {
              slidesPerView: 2.2,
            },
            375: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1.2,
            },
          }"
        >
          <swiper-slide v-for="(item, index) in itemSouvenirs" :key="index" class="slide">
            <cards-souvenirs :id="item.title" :img-url="item.imgUrl" :title="item.title" :price="item.price" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SouvenirsSlide {
  .slide {
    margin-bottom: 3.5937499999999996vw;
    @media only screen and (orientation: portrait) and (max-width: 479px) {
      margin-bottom: 10.5937499999999996vw;
    }
  }
}
</style>
