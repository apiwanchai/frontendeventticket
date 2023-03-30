<script setup>
// const bg1 = '_nuxt/assets/images/bg/concert1.jpg'
const bg2 = new URL('../../assets/images/bg/concert1.jpg', import.meta.url)
const sub = new URL('../../assets/images/bg/sub.jpg', import.meta.url)
const route = useRoute()
const activeTab = ref(null)
const show = ref(true)
// Function
onMounted(() => {
  activeTab.value = route.params.id
})
function openTabs(e) {
  activeTab.value = e
}
</script>
<template>
  <layout-page-layout page-layout="form" :image-primary="bg2">
    <div class="content-sm py-10">
      <base-banner-sub :image-url="sub" class="mb-[1.5rem] <lg:mb-[1rem]" />
      <div class="w-full flex justify-between">
        <div
          class="rounded-3xl bg-primary min-w-[250px] min-h-[411px] h-max py-8 <md:hidden md:hidden lg:(flex flex-col)"
        >
          <div class="px-8 pb-[2.125rem] cursor-pointer text-base flex items-center">
            <nuxt-icon name="svg/arrow-left" class="text-xl flex justify-center items-center pr-4" />
            กลับสู่หน้าหลัก
          </div>
          <div
            class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center"
            :class="{ active: 'information' === activeTab }"
            @click="openTabs('information')"
          >
            <nuxt-icon name="svg/user" class="text-xl flex justify-center items-center pr-4" />
            ข้อมูลส่วนตัว
          </div>
          <div class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center">
            <nuxt-icon name="svg/favourite" class="text-xl flex justify-center items-center pr-4" />
            งานแสดงโปรด
          </div>
          <div
            class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center"
            :class="{ active: 'order' === activeTab }"
            @click="openTabs('order')"
          >
            <nuxt-icon name="svg/order" class="text-xl flex justify-center items-center pr-4" />
            คำสั่งซื้อ
          </div>
          <div
            class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center"
            :class="{ active: 'myticket' === activeTab }"
            @click="openTabs('myticket')"
          >
            <nuxt-icon name="svg/ticket" class="text-xl flex justify-center items-center pr-4" />
            ตั๋วของฉัน
          </div>
          <div
            class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center"
            :class="{ active: 'changePassword' === activeTab }"
            @click="openTabs('changePassword')"
          >
            <nuxt-icon name="svg/key" class="text-xl flex justify-center items-center pr-4" />
            เปลี่ยนรหัสผ่าน
          </div>
          <div class="px-8 py-[0.625rem] cursor-pointer text-base flex items-center">
            <nuxt-icon name="svg/logout" class="text-xl flex justify-center items-center pr-4" />
            ออกจากระบบ
          </div>
        </div>
        <div class="rounded-3xl bg-primary w-full min-h-[411px] p-10 ml-8 <md:(ml-0 p-4) md:(ml-0 p-4) lg:(p-10 ml-8)">
          <profile-info v-if="'information' === activeTab" />
          <profile-order v-if="'order' === activeTab" />
          <profile-my-ticket v-if="'myticket' === activeTab" />
          <profile-change-password v-if="'changePassword' === activeTab" />
        </div>
      </div>
    </div>
  </layout-page-layout>
  <cards-concert-ticket v-model="show" />
</template>

<style lang="scss" scoped>
.active {
  background: rgba(var(--RGB_light), 0.1);
}
</style>
