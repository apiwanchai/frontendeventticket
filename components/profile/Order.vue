<script setup>
// const images = new URL('../../assets/images/user.png', import.meta.url)
const itemPay = [
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '26/01/23 14:00:00',
    statusBtn: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '26/01/23 14:00:00',
    statusBtn: 0,
  },
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '16/01/23 14:00:00',
    statusBtn: 0,
  },
]

const itemPaid = [
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '26/01/23 14:00:00',
    btnDetails: 1,
  },
  {
    imgUrl: new URL('../../assets/images/bg.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '26/01/23 14:00:00',
    btnDetails: 1,
  },
  {
    imgUrl: new URL('../../assets/images/bg3.jpg', import.meta.url),
    orderId: 'EV#0000010',
    title: 'RBSO 2023 : Esther Yoo plays Barber Violin Concerto',
    dateTime: 'จันทร์, 19/09/2022 - 19:30 น.',
    location: 'สามย่าน มิตรทาวน์ ฮอลล์, กรุงเทพมหานคร',
    zone: 'A2',
    seatNumber: ['A1', 'A2', 'A3', 'A4'],
    amount: '4000',
    timeOut: '16/01/23 14:00:00',
    btnDetails: 1,
  },
]
const activeOrder = ref('pay')
function openTabs(e) {
  activeOrder.value = e
}
</script>
<template>
  <div class="flex justify-between items-center">
    <base-title subject="คำสั่งซื้อ" />
    <div class="flex">
      <div class="cursor-pointer underline" :class="{ 'text-link': 'pay' === activeOrder }" @click="openTabs('pay')">
        ที่ต้องชำระ
      </div>
      <div
        class="cursor-pointer ml-4 underline"
        :class="{ 'text-link': 'paid' === activeOrder }"
        @click="openTabs('paid')"
      >
        ชำระเงินแล้ว
      </div>
    </div>
  </div>
  <div
    v-if="activeOrder === 'pay'"
    class="mt-4"
    :class="{ 'mt-0 flex justify-center items-center h-full': itemPay.length < 1 }"
  >
    <div v-if="itemPay.length > 0">
      <cards-ticket-card
        v-for="(item, index) in itemPay"
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
      <div class="text-xl font-medium">ไม่พบคำสั่งซื้อ</div>
      <div class="text-base">คุณสามารถหางานแสดงที่น่าสนใจได้ที่หน้าหลัก</div>
    </div>
  </div>
  <div
    v-if="activeOrder === 'paid'"
    class="mt-4"
    :class="{ 'mt-0 flex justify-center items-center h-full': itemPaid.length < 1 }"
  >
    <div v-if="itemPaid.length > 0">
      <cards-ticket-card
        v-for="(item, index) in itemPaid"
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
      <div class="text-xl font-medium">ไม่พบคำสั่งซื้อ</div>
      <div class="text-base">คุณสามารถหางานแสดงที่น่าสนใจได้ที่หน้าหลัก</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
