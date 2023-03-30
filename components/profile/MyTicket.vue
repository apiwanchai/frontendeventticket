<script setup>
// const images = new URL('../../assets/images/user.png', import.meta.url)
const activeOrder = ref('ShowComingSoon')
const itemShowComingSoon = [
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    statusBtn: 2,
    btnDetails: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    statusBtn: 2,
    btnDetails: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    statusBtn: 2,
    btnDetails: 0,
  },
]

const itemPastEvents = [
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    statusBtn: 2,
    btnDetails: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    statusBtn: 2,
    btnDetails: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    statusBtn: 2,
    btnDetails: 0,
  },
]

function openTabs(e) {
  activeOrder.value = e
}
</script>
<template>
  <div class="flex justify-between items-center">
    <base-title subject="ตั๋วของฉัน" />
    <div class="flex">
      <div
        class="cursor-pointer underline"
        :class="{ 'text-link': 'ShowComingSoon' === activeOrder }"
        @click="openTabs('ShowComingSoon')"
      >
        งานแสดงเร็วๆนี้
      </div>
      <div
        class="cursor-pointer ml-4 underline"
        :class="{ 'text-link': 'pastEvents' === activeOrder }"
        @click="openTabs('pastEvents')"
      >
        งานแสดงที่ผ่านมา
      </div>
    </div>
  </div>
  <div
    v-if="activeOrder === 'ShowComingSoon'"
    class="mt-4"
    :class="{ 'mt-0 flex justify-center items-center h-full': itemShowComingSoon.length < 1 }"
  >
    <div v-if="itemShowComingSoon.length > 0">
      <cards-ticket-card
        v-for="(item, index) in itemShowComingSoon"
        :key="index"
        class="mb-4"
        :img-url="item.imgUrl"
        :order-id="item.orderId"
        :title="item.title"
        :date-time="item.dateTime"
        :location="item.location"
        :zone="item.zone"
        :seat-number="item.seatNumber"
        :amount="item.amount"
        :time-out="item.timeOut"
        :status-btn="item.statusBtn"
        :btn-details="item.btnDetails"
      />
    </div>
    <div v-else class="w-full h-full flex flex-col justify-center items-center">
      <div class="text-xl font-medium">ไม่พบตั๋วงานแสดง</div>
      <div class="text-base">คุณสามารถหางานแสดงที่น่าสนใจได้ที่หน้าหลัก</div>
    </div>
  </div>
  <div
    v-if="activeOrder === 'pastEvents'"
    class="mt-4"
    :class="{ 'mt-0 flex justify-center items-center h-full': itemPastEvents.length < 1 }"
  >
    <div v-if="itemPastEvents.length > 0">
      <cards-ticket-card
        v-for="(item, index) in itemPastEvents"
        :key="index"
        class="mb-4"
        :img-url="item.imgUrl"
        :order-id="item.orderId"
        :title="item.title"
        :date-time="item.dateTime"
        :location="item.location"
        :zone="item.zone"
        :seat-number="item.seatNumber"
        :amount="item.amount"
        :time-out="item.timeOut"
        :status-btn="item.statusBtn"
        :btn-details="item.btnDetails"
      />
    </div>
    <div v-else class="w-full h-full flex flex-col justify-center items-center">
      <div class="text-xl font-medium">ไม่พบตั๋วงานแสดง</div>
      <div class="text-base">คุณสามารถหางานแสดงที่น่าสนใจได้ที่หน้าหลัก</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
