<script setup>
const mock2 = [
  { flag: 'svg/dark', description: 'มืด1' },
  { flag: 'svg/dark', description: 'มืด2' },
  { flag: 'svg/dark', description: 'มืด3' },
]
const img = '_nuxt/assets/images/bg.jpg'
</script>
<template>
  <div class="w-full bg-primary rounded-[20px] p-10 flex <sm:(flex-col p-[1.25rem])">
    <div class="w-[30%] h-full">
      <base-event-images :img-url="img" class="" />
    </div>
    <div class="w-[100%] ml-10 <sm:ml-0">
      <div class="text-3xl font-bold <sm:text-xl">Beabadoobee Beatopia Tour 2022 Live in Bangkok</div>
      <div class="flex flex-wrap mt-[1rem]">
        <div class="flex flex-col min-w-[104px] mr-14 mt-4">
          <span class="text-subtitle text-sm">ประเภทงานแสดง</span>
          <span class="text-lg font-medium">ดนตรี, ศิลปิน</span>
        </div>
        <div class="flex flex-col min-w-[104px] mr-14 mt-4">
          <span class="text-subtitle text-sm">วันที่แสดง</span>
          <span class="text-lg font-medium">จันทร์, 19/09/2022</span>
        </div>
        <div class="flex flex-col min-w-[104px] mr-14 mt-4">
          <span class="text-subtitle text-sm">สถานที่</span>
          <span class="text-lg font-medium">สามย่าน มิตรทาวน์ ฮอลล์</span>
        </div>
        <div class="flex flex-col min-w-[104px] mr-14 mt-4">
          <span class="text-subtitle text-sm">ประตูเปิด</span>
          <span class="text-lg font-medium">18:00 น.</span>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-subtitle text-sm">ราคา</span>
        <span class="text-lg font-medium">2,000 / 3,000 / 4,000 / 5,000 / 6,000 / 7,000 / 8,000 / 40,000 บาท</span>
      </div>
      <div class="flex flex-col mt-[1.83rem]">
        <span class="text-sm font-semibold">รอบการแสดง</span>
        <base-dropdown
          class="dropdown-secondary mt-1 w-[25%]"
          :data="mock2"
          svg-key="flag"
          :text-key="['description']"
        />
      </div>
      <div class="text-sm">
        หมายเหตุ: เมื่อทำรายการสำเร็จ ตั๋วออนไลน์จะไปอยู่ใน “ตั๋วของฉัน” และจะได้รับอีเมลยืนยันคำสั่งซื้อภายใน 24 ชม.
      </div>
    </div>
  </div>
</template>
