<script setup>
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'
const { loading, events } = storeToRefs(useEventStore())
const { fetchEvents } = useEventStore()

// State
const filter = reactive({
  page: 1,
  pageSize: 10,
  q: '',
})

// Watch
watch(filter, (newVal) => {
  fetchEvents({ page: newVal.page })
})

// mounted
onMounted(() => {})

// Methods
const handleLoadMore = () => {
  filter.page++
  console.log('handleLoadMore page:', filter.page)
}

// init
fetchEvents({ page: filter.page })
</script>
<template>
  <div class="w-full flex flex-col py-4">
    <!-- Skeleton -->
    <div v-if="loading && !events.value?.data" class="mt-20 flex flex-wrap gap-3 justify-center">
      <div
        v-for="item in 21"
        :key="item"
        class="flex flex-col justify-center items-center bg-gray-800 rounded-lg shadow w-[200px] h-48 p-4"
      ></div>
    </div>
    <div v-else class="mt-20 flex flex-wrap gap-10 justify-center">
      <cards-event-card
        v-for="(item, index) in events.value?.data || []"
        :key="item.id"
        :img-url="item.coverPic"
        :title="item.artistName"
        :date-time="item.openTime"
        :location="item.location"
        :time-out="!index"
        :status-btn="item.btnStatus"
        :type-btn="true"
      />
    </div>
    <base-button class="btn-primary text-base mt-6 mx-auto" size="md" rounded @click="handleLoadMore"
      >Load More</base-button
    >
  </div>
</template>
