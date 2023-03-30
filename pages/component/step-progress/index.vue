<!-- eslint-disable no-unused-vars -->
<script setup>
const data1 = [
  { title: '1', description: 'เลือกที่นั่ง' },
  { title: '2', description: 'สรุปคำสั่งซื้อ' },
  { title: '3', description: 'ชำระเงิน' },
]
const data2 = [
  { svg: 'svg/arrow-down', description: 'เลือกที่นั่ง' },
  { svg: 'svg/arrow-down', description: 'สรุปคำสั่งซื้อ' },
  { svg: 'svg/arrow-down', description: 'ชำระเงิน' },
]
const data3 = [
  { image: 'https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png', description: 'เลือกที่นั่ง' },
  { image: 'https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png', description: 'สรุปคำสั่งซื้อ' },
  { image: 'https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png', description: 'ชำระเงิน' },
]
</script>
<template>
  <layout-page-layout>
    <base-step-progress :data="data1" :step="2" />
  </layout-page-layout>
</template>
