<script setup>
// Import
import { useWindowSize } from '@vueuse/core'
// State
const { width } = useWindowSize()
</script>

<template>
  <div
    v-if="width < 640"
    class="sidebar-wrapper fixed top-0 transform translate-x-[-100%] transition duration-500 w-screen h-screen bg-[var(--card-tertiary)]"
    :class="{ 'translate-x-[0%]': isSidebar }"
  >
    <div class="sidebar-header w-full h-[3.5rem] flex items-center justify-between px-4">
      <img src="~/assets/images/logo.png" alt="" srcset="" class="h-10 w-auto" />
      <nuxt-icon name="svg/cancel" class="text-title text-[20px] cursor-pointer" @click="useSidebar(false)" />
    </div>
    <div class="sidebar-profile w-full px-4">
      <div class="py-[19px]">
        <p class="text-lg">มาลี หอมหวญ</p>
        <div class="flex justify-between items-end">
          <span class="text-sm">วอลเล็ท</span>
          <span class="text-lg">฿10,000.00</span>
        </div>
      </div>
    </div>
    <div class="sidebar-content">
      <router-link to="/component/input" @click="useSidebar(false)"
        ><nuxt-icon name="svg/profile" class="text-title text-xl" />
        ข้อมูลส่วนตัว
      </router-link>
      <router-link to="/component/checkbox" @click="useSidebar(false)"
        ><nuxt-icon name="svg/order" class="text-title text-xl" />
        คำสั่งซื้อ
      </router-link>
      <router-link to="/component/input" @click="useSidebar(false)">
        <nuxt-icon name="svg/ticket" class="text-title text-xl" />
        ตั๋วของฉัน
      </router-link>
      <router-link to="/component/checkbox" @click="useSidebar(false)"
        ><nuxt-icon name="svg/password" class="text-title text-xl" />
        เปลี่ยนรหัสผ่าน
      </router-link>
      <router-link to="/component/input" @click="useSidebar(false)"
        ><nuxt-icon name="svg/sign-out" class="text-title text-xl" />
        ออกจากระบบ
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  z-index: 999;
  .sidebar-profile {
    div:first-child {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  .sidebar-content {
    a {
      width: 100%;
      height: 44px;
      padding: 0 16px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 18px;
    }
    a:hover {
      background: rgba(var(--RGB_popup-hover), 0.1);
    }
  }
}
</style>
