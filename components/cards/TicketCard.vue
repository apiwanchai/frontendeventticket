<script setup>
import ticketCard from '~~/constants/interface-props/ticketCard'
defineProps(ticketCard)

// Computed
const detailsMap = computed(() => {
  return {
    0: 'ดูรายละเอียด',
    1: 'ดาวน์โหลดใบเสร็จ',
  }
})
const statusBtnMap = computed(() => {
  return {
    0: 'ชำระเงิน',
    1: 'ชำระเงินแล้ว',
    2: 'แสดงตั๋ว',
  }
})
</script>
<template>
  <div class="bg-secondary rounded-3xl h-max p-[1.5rem] flex">
    <div class="w-[25%]">
      <base-event-images :img-url="imgUrl" class="card-images" />
    </div>
    <div class="ml-6 flex flex-col justify-between w-full">
      <div>
        <div v-if="orderId" class="text-lg">
          หมายเลขคำสั่งซื้อ <span class="text-link"> {{ orderId }}</span>
        </div>
        <div class="text-link text-base">{{ title }}</div>
        <div class="text-base">{{ dateTime }}</div>
        <div class="text-base">{{ location }}</div>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <div class="text-sm text-subtitle">
            <div class="mb-2">โซนที่นั่ง</div>
            <base-button class="btn-zone text-base rounded-lg cursor-auto" size="sm">
              {{ zone }}
            </base-button>
          </div>
          <div class="text-sm text-subtitle ml-4">
            <div class="mb-2">เลขที่นั่ง</div>
            <div class="flex justify-center items-center">
              <span v-for="(item, index) in seatNumber" :key="index" class="text-lg text-link"> {{ item }}, </span>
            </div>
          </div>
        </div>
        <div>
          <base-button v-if="detailsMap[btnDetails]" class="min-w-[137px] mt-2 w-max btn-secondary" rounded size="lg">
            {{ detailsMap[btnDetails] || '' }}
          </base-button>
          <base-button
            v-if="statusBtnMap[statusBtn]"
            class="btn-primary min-w-[137px] mt-2 w-max ml-4"
            :class="{ 'btn-secondary': statusBtn === 1 }"
            rounded
            size="lg"
          >
            {{ statusBtnMap[statusBtn] }}
          </base-button>
        </div>
      </div>
      <div v-if="timeOut" class="flex justify-end text-sm text-danger">
        กรุณาชำระเงินภายใน {{ timeOut }} ณ ที่จุดบริการ
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn-zone {
  background: #40e6e7;
  color: var(--color);
}
</style>
