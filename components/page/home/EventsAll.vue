<script setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// const icon = '_nuxt/assets/icons/3d/clock.png'
const itemEvents = [
  {
    imgUrl: '_nuxt/assets/images/bg3.jpg',
    title: 'iCreator Meetup #10 man',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
    timeOut: true,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '0',
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
const itemEventsComing = [
  {
    imgUrl: '_nuxt/assets/images/bg3.jpg',
    title: 'iCreator Meetup #10 man',
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
    status: '2',
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
    status: '2',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '2',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '2',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '2',
    timeOut: false,
  },
  {
    imgUrl: '_nuxt/assets/images/bg.jpg',
    title: 'Kid Improve Comedy Workshop',
    dateTime: 'ส, 27/08/2022 - 18:00 น.',
    location: 'Skooldio, กรุงเทพมหานคร',
    status: '2',
    timeOut: false,
  },
]
const tabsEvents = [
  {
    id: 'AllEvent',
    name: 'งานแสดงทั้งหมด',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'recently',
    name: 'เร็วๆนี้',
    imgkey: '',
    svgkey: '',
  },
]
</script>
<template>
  <div class="content-md EventsAll relative">
    <div class="flex justify-between items-center w-full mb-2 <sm:(flex) sm:hidden">
      <base-title subject="งานแสดงทั้งหมด" />
      <base-button @click="$router.push('/events')"> <span class="text-link">ทั้งหมด</span></base-button>
    </div>
    <div class="flex justify-between items-center mb-8 <sm:justify-center">
      <base-title subject="งานแสดงทั้งหมด" class="<sm:hidden sm:flex" />
      <base-tabs tabs-id="AllEvents" :items="tabsEvents" active="AllEvent" class="tab-primary <sm:mb-6" />
      <base-button @click="$router.push('/events')">
        <span class="text-link <sm:hidden sm:flex">ทั้งหมด</span></base-button
      >
    </div>
    <div id="AllEvents">
      <div :id="tabsEvents[0].id" class="tabcontent">
        <div class="w-full flex gap-[3.6458333333333335vw] xl:gap-[3.6458333333333335vw]">
          <div
            class="w-full h-full max-w-[30.388471177945%] grid-index <sm:(flex max-w-[100%] mb-4) <lg:hidden <xl:hidden xl:(max-w-[30.388471177945%]) <2xl:(max-w-[32%])"
          >
            <cards-event-card
              :title="itemEvents[0].title"
              :date-time="itemEvents[0].dateTime"
              :location="itemEvents[0].location"
              :status-btn="itemEvents[0].status"
              :img-url="itemEvents[0].imgUrl"
              :time-out="itemEvents[0].timeOut"
              :type-btn="false"
              class=""
            />
          </div>
          <div class="w-full <lg:hidden <xl:hidden">
            <div class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-4 xl:(grid-cols-4)">
              <cards-event-card
                v-for="(item, index) in itemEvents.slice(1)"
                :key="index"
                :title="item.title"
                :date-time="item.dateTime"
                :location="item.location"
                :status-btn="item.status"
                :img-url="item.imgUrl"
                :time-out="item.timeOut"
              />
            </div>
          </div>
        </div>
        <div class="hidden <lg:flex lg:flex <xl:flex xl:hidden 2xl:hidden">
          <div class="w-full">
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
              <swiper-slide
                v-for="(item, index) in width <= 479 ? itemEvents.slice(1) : itemEvents"
                :key="index"
                class="slide"
              >
                <cards-event-card
                  :title="item.title"
                  :date-time="item.dateTime"
                  :location="item.location"
                  :status-btn="item.status"
                  :img-url="item.imgUrl"
                  :time-out="item.timeOut"
                  :class="{ 'col-start-1 col-end-3 row-start-1 row-end-3': index === 0 }"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>

      <div :id="tabsEvents[1].id" class="tabcontent">
        <div class="grid gap-[4vw] grid-cols-6 <lg:hidden <xl:hidden xl:(gap-[2.5vw] grid-cols-6) 2xl:gap-[90px]">
          <cards-event-card
            v-for="(item, index) in itemEventsComing"
            :key="index"
            :title="item.title"
            :date-time="item.dateTime"
            :location="item.location"
            :status-btn="item.status"
            :img-url="item.imgUrl"
            :time-out="item.timeOut"
          />
        </div>

        <div class="hidden <lg:flex lg:flex xl:hidden 2xl:hidden">
          <swiper
            class="swiper"
            :modules="[Pagination]"
            :space-between="30"
            slides-per-view="5.3"
            :pagination="{ clickable: true }"
            :breakpoints="{
              1024: {
                slidesPerView: 3.5,
              },
              812: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3.2,
              },
              576: {
                slidesPerView: 2.2,
              },
              479: {
                slidesPerView: 2.2,
              },
              375: {
                slidesPerView: 1.3,
              },
              320: {
                slidesPerView: 1.3,
              },
            }"
          >
            <swiper-slide v-for="(item, index) in itemEventsComing" :key="index" class="slide">
              <cards-event-card
                :title="item.title"
                :date-time="item.dateTime"
                :location="item.location"
                :status-btn="item.status"
                :img-url="item.imgUrl"
                :time-out="item.timeOut"
                :class="{ 'col-start-1 col-end-3 row-start-1 row-end-3': index === 0 }"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.EventsAll {
  z-index: 1 !important;
  .slide {
    margin-bottom: 3.5937499999999996vw;
    @media only screen and (orientation: portrait) and (max-width: 479px) {
      margin-bottom: 10.5937499999999996vw;
    }
  }
  .grid-index {
    .card-images {
      padding-top: calc(724 / 485 * 100%);
      // @media only screen and (orientation: portrait) and (max-width: 1536px) {
      //   padding-top: calc(624 / 385 * 100%);
      // }
      img {
        object-fit: cover;
      }
    }
    // .img-event {
    // height: 100%;
    // }
  }
}
</style>
