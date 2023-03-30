<script setup>
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'
const { events } = storeToRefs(useEventStore())
const { fetchEvents } = useEventStore()

const bg1 = '_nuxt/assets/images/bg/concert1.jpg'
const bg2 = '_nuxt/assets/images/bg/concert3.jpg'
const state = ref({ data: '' })

const tabsEvents = [
  {
    id: 'AllEvent',
    name: 'งานแสดงทั้งหมด',
    imgkey: '',
    svgkey: '',
  },
  {
    id: 'recently',
    name: 'เร็วๆนี้',
    imgkey: '',
    svgkey: '',
  },
]
const select = [
  { id: 1, name: 'มาใหม่' },
  { id: 2, name: 'กำลังจะมาถึง' },
]
// init
fetchEvents()
</script>
<template>
  <div class="swiper-Events content-lg">
    <page-home-banner-slide id="events-banner" :bg-show="true" class="pt-14" />
  </div>
  <layout-page-layout page-layout="form" :space-top="false" :image-primary="bg1" :image-secondary="bg2">
    <div class="content-md">
      <div class="Events-All py-16 <sm:py-10">
        <!-- <div class="flex justify-between items-center w-full mb-2 <sm:(flex) sm:hidden">
          <base-title subject="งานแสดงทั้งหมด" />
        </div> -->
        <div class="flex justify-between items-center mb-8 <sm:(items-start flex-col)">
          <base-title subject="งานแสดงทั้งหมด" />
          <!-- <base-title subject="งานแสดงทั้งหมด" class="<sm:hidden sm:flex" /> -->
          <base-tabs tabs-id="AllEvents" :items="tabsEvents" active="AllEvent" class="tab-primary <sm:(mx-auto my-2)" />
          <div class="flex justify-center items-center <sm:(w-full ml-auto justify-end)">
            <div>เรียงจาก:</div>
            <div class="mx-2">
              <base-dropdown
                v-model="state.data"
                class="dropdown-secondary mt-0 mb-0"
                :data="select"
                :text-key="['name']"
                value-key="id"
                error="disable"
              />
            </div>
            <div>
              <base-button-icon id="btn-favorite" image="favorite" />
            </div>
          </div>
        </div>
        <div id="AllEvents">
          <div :id="tabsEvents[0].id" class="tabcontent">
            <div
              class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-2 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 lg:(grid-cols-5) xl:(grid-cols-6) 2xl:grid-cols-6"
            >
              <cards-event-card
                v-for="(item, index) in events.value?.data || []"
                :key="index"
                :img-url="item.coverPic"
                :title="item.artistName"
                :date-time="item.openTime"
                :location="item.location"
                :time-out="!index"
                :status-btn="item.btnStatus"
                :type-btn="true"
              />
            </div>
          </div>

          <div :id="tabsEvents[1].id" class="tabcontent">
            <div
              class="grid pr-[5px] gap-x-[4vw] gap-y-[3.07291vw] grid-cols-2 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 lg:(grid-cols-5) xl:(grid-cols-6) 2xl:grid-cols-6"
            >
              <cards-event-card
                v-for="(item, index) in (events.value?.data || []).map((v) => ({ ...v, btnStatus: '2' }))"
                :key="index"
                :img-url="item.coverPic"
                :title="item.artistName"
                :date-time="item.openTime"
                :location="item.location"
                :time-out="[0,1,2].includes(index)"
                :status-btn="item.btnStatus"
                :type-btn="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-page-layout>
</template>
