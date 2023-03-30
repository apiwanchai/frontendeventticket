<template>
  <footer class="footer-wrapper">
    <div class="footer-wrapper__top">
      <div
        class="footer-wrapper__top-inner pt-4 pb-[38px] px-[18px] text-title grid grid-cols-1 sm:grid-cols-2 md:(grid-cols-4 pt-10 pb-[95px] gap-10) lg:grid-cols-5 xl:px-0 <sm:gap-0"
      >
        <div class="flex flex-col justify-center items-start md:(col-span-2 pr-15) lg:pr-30">
          <img src="~/assets/images/logo.png" alt="" srcset="" class="w-[75px] inline-block mb-6 sm:w-[120px]" />
          <span class="text-title">บริษัท อีเอ็กซ์พีเอนเตอร์เทนเมนต์ จำกัด</span>
          <span class="text-title mt-4">71, 39 ถนนบรมราชชนนี แขวงอรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700</span>
          <div class="flex flex-col mt-4">
            <span class="text-title">โทร: 02-324-5477</span>
            <span class="text-title">อีเมล: cs@expentertainment.com</span>
          </div>
          <!-- <theme-switch /> -->
        </div>
        <div class="grid col-span-2 grid-cols-2 gap-6 md:gap-10 mt-[38px] ss">
          <div class="flex flex-col gap-[9px] sm:gap-6">
            <h3 class="font-normal">หน้าหลัก</h3>
            <span class="text-subtitle">งานแสดง</span>
            <span class="text-subtitle">ข่าวสารและโปรโมชั่น</span>
            <span class="text-subtitle">สินค้าที่ระลึก</span>
            <span class="text-subtitle">ติดตามสถานะ</span>
          </div>
          <div class="flex flex-col gap-[9px] sm:gap-6">
            <h3 class="font-normal">ช่วยเหลือ</h3>
            <span class="text-subtitle">ติดต่อเรา</span>
            <span class="text-subtitle">คำถามที่พบบ่อย</span>
            <span class="text-subtitle">วิธีชำระเงิน</span>
            <span class="text-subtitle">ติชม/แจ้งปัญหาการใช้งาน</span>
          </div>
        </div>
        <div class="flex flex-col mt-[38px] <lg:col-span-2">
          <h3 class="font-normal">ติดตามข่าวสาร</h3>
          <!-- Socials -->
          <div class="flex gap-1 mt-[10px] sm:mt-4">
            <img src="~/assets/images/socials/facebook.png" alt="" srcset="" class="h-6" />
            <img src="~/assets/images/socials/twitter.png" alt="" srcset="" class="h-6" />
            <img src="~/assets/images/socials/ig.png" alt="" srcset="" class="h-6" />
            <img src="~/assets/images/socials/youtube.png" alt="" srcset="" class="h-6" />
            <img src="~/assets/images/socials/line.png" alt="" srcset="" class="h-6" />
          </div>
          <div class="mt-6 <lg:(flex gap-[21px])">
            <h3 class="font-normal">โทร.</h3>
            <span class="text-[20px] lg:text-[24px]">02-999-9999</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper__bottom h-[50px] flex justify-center items-center gap-2">
      <small class="text-title text-sm">{{ 'Copyright © 2020 supported by' }}</small>
      <img src="~/assets/images/logo.png" alt="" srcset="" class="h-4" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  &__top {
    background: var(--footer);
  }
  &__top-inner {
    max-width: 1202px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 375px) {
    .ss {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 38px;
    }
  }
  &__bottom {
    background: var(--footer-copyright);
  }
}
</style>
