<script setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const icon = '_nuxt/assets/icons/3d/clock.png'
const itemTicket = [
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '1',
    timeOut: true,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '2',
    timeOut: true,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
    timeOut: false,
  },
]
</script>
<template>
  <div class="content-md UpComingShow relative">
    <div class="flex justify-between items-center w-full mb-8">
      <base-title subject="งานแสดงที่กำลังจะมาถึง" :icon="icon" />
      <base-button @click="$router.push('/upcoming')"> <span class="text-link">ทั้งหมด</span></base-button>
    </div>
    <div class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-6 <lg:hidden <xl:hidden xl:(grid-cols-6)">
      <cards-event-card
        v-for="(item, index) in itemTicket"
        :key="index"
        :title="item.title"
        :date-time="item.dateTime"
        :location="item.location"
        :status-btn="item.status"
        :img-url="item.imgUrl"
        :time-out="item.timeOut"
      />
    </div>
    <div class="hidden <lg:flex lg:flex <xl:flex xl:hidden 2xl:hidden">
      <swiper
        class="swiper"
        :modules="[Pagination]"
        :space-between="30"
        slides-per-view="5.3"
        :pagination="{ clickable: true }"
        :breakpoints="{
          1024: {
            slidesPerView: 4.5,
          },
          812: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3.5,
          },
          576: {
            slidesPerView: 2.2,
          },
          479: {
            slidesPerView: 2.2,
          },
          375: {
            slidesPerView: 1.8,
          },
          320: {
            slidesPerView: 1.8,
          },
        }"
      >
        <swiper-slide v-for="(item, index) in itemTicket" :key="index" class="slide">
          <cards-event-card
            :title="item.title"
            :date-time="item.dateTime"
            :location="item.location"
            :status-btn="item.status"
            :img-url="item.imgUrl"
            :time-out="item.timeOut"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.UpComingShow {
  z-index: 1 !important;
  .slide {
    margin-bottom: 3.5937499999999996vw;
    @media only screen and (orientation: portrait) and (max-width: 479px) {
      margin-bottom: 10.5937499999999996vw;
    }
  }
}
</style>
