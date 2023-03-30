<script setup>
const data = [
  { title: '1', description: 'เลือกที่นั่ง' },
  { title: '2', description: 'สรุปคำสั่งซื้อ' },
  { title: '3', description: 'ชำระเงิน' },
]
</script>
<template>
  <layout-page-layout
    page-layout="concert"
    image-primary="https://res.theconcert.com/w_375,h_499,c_thumb/b73e514b9ffb2909be36e19c00687a905/fb-singto.jpg"
    image-secondary="_nuxt/assets/images/bg.jpg"
  >
    <div class="concert-booking-wrapper content-sm">
      <base-step-progress class="mb-9 mt-20" :data="data" :step="1" />
      <page-booking-detail />
      <page-booking-select />
    </div>
  </layout-page-layout>
</template>
