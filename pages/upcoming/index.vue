<script setup>
const bg1 = '_nuxt/assets/images/bg/concert1.jpg'
const bg2 = '_nuxt/assets/images/bg/concert3.jpg'

const icon = new URL('../../assets/icons/3d/clock.png', import.meta.url)
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
</script>
<template>
  <div class="swiper-Events content-lg">
    <page-home-banner-slide id="souvenirs-banner" :bg-show="false" class="pt-14" />
  </div>
  <layout-page-layout page-layout="concert" :space-top="false" :image-primary="bg1" :image-secondary="bg2">
    <div class="content-md">
      <div class="upcoming py-16 <sm:py-10">
        <base-title subject="งานแสดงที่กำลังจะมาถึง" :icon="icon" class="mb-8" />
        <div
          class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-2 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 lg:(grid-cols-5) xl:(grid-cols-6) 2xl:grid-cols-6"
        >
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
      </div>
    </div>
  </layout-page-layout>
</template>
