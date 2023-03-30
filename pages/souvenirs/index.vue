<script setup>
const bg1 = '_nuxt/assets/images/bg/concert1.jpg'
const bg2 = '_nuxt/assets/images/bg/concert3.jpg'

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
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    subject: 'New',
    title: 'ผ้าคลุมดวงตาโมรอน',
    price: '1,000',
  },
]
</script>
<template>
  <div class="swiper-souvenirs content-lg">
    <page-home-banner-slide id="souvenirs-banner" :bg-show="false" class="pt-14" />
  </div>
  <layout-page-layout page-layout="form" :space-top="false" :image-primary="bg1" :image-secondary="bg2">
    <div class="content-md">
      <div class="souvenirs-All py-16 <sm:py-10">
        <div class="flex justify-between items-center mb-8 <sm:justify-center">
          <base-title subject="สินค้าที่ระลึก" class="<sm:hidden sm:flex" />
          <base-tabs tabs-id="souvenirs" :items="tabsSouvenirs" active="productNew" class="tab-primary <sm:mb-6" />
        </div>
        <div id="souvenirs">
          <div :id="tabsSouvenirs[0].id" class="tabcontent">
            <div
              class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-2 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 lg:(grid-cols-5) xl:(grid-cols-6) 2xl:grid-cols-6"
            >
              <cards-souvenirs
                v-for="(item, index) in itemSouvenirs"
                :id="item.title"
                :key="index"
                :img-url="item.imgUrl"
                :title="item.title"
                :subject="item.subject"
                :price="item.price"
              />
            </div>
          </div>

          <div :id="tabsSouvenirs[1].id" class="tabcontent">
            <div
              class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-2 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 lg:(grid-cols-5) xl:(grid-cols-6) 2xl:grid-cols-6"
            >
              <cards-souvenirs
                v-for="(item, index) in itemSouvenirs"
                :id="item.title"
                :key="index"
                :img-url="item.imgUrl"
                :title="item.title"
                :subject="item.subject"
                :price="item.price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-page-layout>
</template>
