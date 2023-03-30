<script setup>
const images = new URL('../../assets/images/user.png', import.meta.url)
const form = reactive({ fname: '', lname: '', phoneNumber: '', email: '', sex: '', birthday: '' })
const errors = reactive({})
const state = ref({ data: '' })

const select = [
  { id: 1, name: 'มาใหม่' },
  { id: 2, name: 'กำลังจะมาถึง' },
]

function importData() {
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    const files = Array.from(input.files)
    console.log(files)
  }
  input.click()
}

const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    email: Rules().required(t('home')).email(),
    password: Rules().required().custom(validatorPassword),
    phoneNumber: Rules().email(),
  })
)
</script>
<template>
  <div>
    <base-title subject="ข้อมูลส่วนตัว" />
    <div>กรุณาอัปเดทข้อมูลส่วนตัวของคุณให้ครบถ้วนและถูกต้อง เพื่อความสะดวกในการสั่งซื้อบัตรการแสดง</div>
    <div class="profile flex my-[24px]">
      <img :src="images" alt="icon" class="rounded-full w-[6.25rem] h-[6.25rem]" />
      <div class="flex flex-col justify-center ml-4">
        <div class="text-base">กรุณาอัปโหลดรูปโปรไฟล์</div>
        <div class="mt-[1.438rem]">
          <button class="uploaded" @click="importData()">เลือกรูป</button>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="flex <sm:flex-col">
        <base-input
          v-model="form.fname"
          label="ชื่อ"
          type="text"
          size="md"
          required
          :error="errors?.fname"
          class="mr-4"
        />
        <base-input v-model="form.lname" label="ชื่อ" type="text" size="md" required :error="errors?.lname" />
      </div>
      <div class="flex <sm:flex-col">
        <base-input
          v-model="form.phoneNumber"
          label="PhoneNumber"
          type="tel"
          size="md"
          :error="errors?.phoneNumber"
          required
          class="mr-4"
          @change="loginValidator.validate('phoneNumber')"
        />
        <base-input
          v-model="form.email"
          type="text"
          label="Email"
          placeholder="Enter Email"
          required
          size="sm"
          :error="errors?.email"
          @change="loginValidator.validate('email')"
        />
      </div>
      <div class="flex <sm:flex-col">
        <div class="w-1/2 mr-4 <sm:(w-full mr-0 mb-4)">
          <span class="relative">เพศ</span>
          <base-dropdown
            v-model="state.data"
            class="dropdown-primary my-0"
            :data="select"
            :text-key="['name']"
            value-key="id"
            error="disable"
          />
        </div>
        <div class="flex flex-col w-1/2 <sm:(w-full mr-0)">
          <span class="relative">วันเกิด</span>
          <div class="flex">
            <base-dropdown
              v-model="state.data"
              class="dropdown-primary mr-1 my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />

            <base-dropdown
              v-model="state.data"
              class="dropdown-primary mr-1 my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />

            <base-dropdown
              v-model="state.data"
              class="dropdown-primary my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="my-[2.5rem] border"></div>
    <div class="address">
      <div class="text-lg <sm:text-base">ที่อยู่ในการจัดส่ง</div>
      <div class="">
        <div class="my-[1.5rem]">
          <span class="relative">ที่อยู่, บ้านเลขที่, อาคาร, ถนน, ซอย, แขวง</span>
          <base-dropdown
            v-model="state.data"
            class="dropdown-primary my-0"
            :data="select"
            :text-key="['name']"
            value-key="id"
            error="disable"
          />
        </div>
        <div class="flex <sm:flex-col">
          <div class="w-1/2 mr-4 <sm:(w-full mr-0 mb-4)">
            <span class="relative">จังหวัด</span>
            <base-dropdown
              v-model="state.data"
              class="dropdown-primary mr-1 my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />
          </div>
          <div class="w-1/2 <sm:(w-full mr-0)">
            <span class="relative">อำเภอ/เขต</span>
            <base-dropdown
              v-model="state.data"
              class="dropdown-primary mr-1 my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />
          </div>
        </div>
        <div class="flex mt-[1.5rem]">
          <div class="w-1/2 mr-4 <sm:(w-full mr-0 mb-4)">
            <span class="relative">รหัสไปรษณีย์</span>
            <base-dropdown
              v-model="state.data"
              class="dropdown-primary mr-1 my-0"
              :data="select"
              :text-key="['name']"
              value-key="id"
              error="disable"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <base-button
        class="btn-xs btn-primary min-w-[137px] mt-2 w-max"
        :class="[
          { 'btn-primary': statusBtn === '0' },
          { 'btn-cancel': statusBtn === '1' },
          { 'btn-tertiary': statusBtn === '2' },
        ]"
        rounded
        size="sm"
      >
        บันทึกข้อมูล
      </base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uploaded {
  min-width: 160px;
  height: 38px;
  background: rgba(255, 255, 255, 0.1);
  mix-blend-mode: normal;
  border: 1px solid #ff9737;
  border-radius: 100px;
}
</style>
