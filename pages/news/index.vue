<script setup>
const itemNews = [
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
  {
    imgUrl: '_nuxt/assets/images/new.jpg',
    subject: 'เที่ยวคอนเสิร์ตให้สนุกในยุค New Normal',
    details: 'คอนเสิร์ตก็อยากไปดู แต่อีกใจก็กลัวโควิด ต้องทำตัวยังไงถึงจะไปดูคอนเสิร์ตได้อย่างสบายใจได้บ้างเนี่ย...',
  },
]
</script>
<template>
  <div class="swiper-souvenirs content-lg">
    <page-home-banner-slide id="souvenirs-banner" :bg-show="false" class="pt-14" />
  </div>
  <div class="content-md ">
    <div class="flex justify-between items-center <sm:mt-16 mb-8">
      <base-title subject="ข่าวสารทั้งหมด" />
    </div>
    <div class="grid gap-[1vw] grid-cols-1 sm:grid-cols-3">
      <cards-event-news
        v-for="(item, index) in itemNews"
        :key="index"
        :img-url="item.imgUrl"
        :subject="item.subject"
        :details="item.details"
        :details-show="true"
        
      />
    </div>
  </div>
</template>
