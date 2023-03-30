<script setup>
// imports

const resetPasswordModal = useState('resetPasswordModal')

// State
const loading = ref(false)
const form = reactive({ newPassword: '', confirmPassword: '' })
const errors = reactive({})

// Computed
const loginValidator = computed(() =>
  useValidator(form, errors).rules({
    newPassword: Rules().required(),
    confirmPassword: Rules().required(),
  })
)
const handleResetPassword = () => {
  resetPasswordModal.value = false
}
// Functions
</script>
<template>
  <base-modal-dialog v-model="resetPasswordModal" id-dialog="reset-password-modal">
    <template #body>
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-xl text-center">{{ 'รีเซ็ทรหัสผ่าน' }}</h1>
      </div>
      <div class="modal__content text-sm">
        <form class="flex flex-col" @submit.prevent="handleResetPassword">
          <base-input
            type="password"
            v-model="form.newPassword"
            label="รหัสผ่านใหม่"
            placeholder="รหัสผ่านใหม่"
            :error="errors?.newPassword"
            preset
            @keyup="loginValidator.validate('newPassword')"
            rounded
          />
          <base-input
            type="password"
            v-model="form.confirmPassword"
            label="ยืนยันรหัสผ่านใหม่"
            placeholder="ยืนยันรหัสผ่านใหม่"
            :error="errors?.confirmPassword"
            preset
            @keyup="loginValidator.validate('confirmPassword')"
            rounded
          />
          <div class="mb-2">
            <ul class="list-disc px-6 text-sm font-light text-subtitle">
              <li>{{ 'รหัสผ่านทั้งหมดต้องมีจำนวนขั้นต่ำ 8 ตัว แต่ไม่เกิน 12' }}</li>
              <li>{{ 'ต้องมีตัวอักษรภาษาอังกฤษอย่างน้อย 1 ตัว' }}</li>
              <li>{{ 'ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว' }}</li>
              <li>{{ 'ต้องมีเลขอย่างน้อย 1 ตัว' }}</li>
            </ul>
          </div>
          <base-button
            :disabled="!loginValidator.isFormValid"
            :loading="loading"
            class="btn-primary"
            rounded
            @click="handleResetPassword"
          >
            {{ $t('ยื่นยัน') }}
          </base-button>
        </form>
      </div>
    </template>
  </base-modal-dialog>
</template>

<style lang="scss"></style>
