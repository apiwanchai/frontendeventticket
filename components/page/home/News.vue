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
]
</script>
<template>
  <div class="content-md">
    <div class="flex justify-between items-center <sm:mt-16 mb-8">
      <base-title subject="ข่าวสาร" />
      <base-button> <span class="text-link">ทั้งหมด</span></base-button>
    </div>
    <div class="grid gap-[1vw] grid-cols-1 sm:grid-cols-3">
      <cards-event-news
        v-for="(item, index) in itemNews"
        :key="index"
        :img-url="item.imgUrl"
        :subject="item.subject"
        :details="item.details"
        :details-show="true"
        :class="{
          'col-start-1 col-end-1 row-start-1 row-end-1 sm:(row-end-3 col-end-3)': index === 0,
        }"
      />
    </div>
  </div>
</template>
