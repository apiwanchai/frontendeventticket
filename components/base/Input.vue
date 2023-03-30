<script setup>
// Import
import input from '~~/constants/interface-props/input'
import country from '~~/constants/country'

// Props
const props = defineProps(input)

// State
const state = ref({ eye: false, phoneNumber: '' })
const countryCode = ref('')

// Functions
const emit = defineEmits(['update:modelValue', 'change'])

const onDropdown = () => {
  if (props.disabled) {
    return
  }
  if (countryCode.value) {
    emit('update:modelValue', `(${countryCode.value})${state.value.phoneNumber}`)
  } else if (state.value.phoneNumber) {
    emit('update:modelValue', `${state.value.phoneNumber}`)
  } else {
    emit('update:modelValue')
  }
}

const updateValue = (e) => {
  if (props.disabled) {
    return
  }
  state.value.phoneNumber = e.target.value
  if (props.type === 'tel') {
    onDropdown()
  } else {
    emit('update:modelValue', e.target.value)
    emit('change', e.target.value)
  }
}
</script>

<template>
  <div
    :class="[
      `input-${size} base-input-wrapper w-full mb-1`,
      preset ? 'input-secondary' : 'input-primary',
      { disabled: disabled },
    ]"
  >
    <span :class="[`relative`, required && 'required']">{{ label }}</span>
    <div :class="[`main-input w-full rounded-[10px] flex items-center`, error === '' && 'success', error && 'error']">
      <div v-if="type === 'tel'">
        <base-dropdown
          v-model="countryCode"
          class="w-max h-max mb-0 set-dropdown"
          :data="country"
          img-key="image"
          :text-key="['phoneCodeUse']"
          value-key="phoneCodeUse"
          error="disable"
          :on-dropdown-change="onDropdown"
        />
      </div>
      <input
        class="w-full h-full text-base outline-none placeholder-[var(--input-placeholder)]"
        :type="type === 'password' ? (state.eye ? 'text' : 'password') : type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="'off'"
        @input="updateValue"
      />
      <nuxt-icon
        v-if="type === 'password'"
        class="text-xl text-[var(--input-password-icon)] cursor-pointer"
        :name="state.eye ? `svg/open-eye` : `svg/close-eye`"
        @click="state.eye = !state.eye"
      />
    </div>
    <div class="h-[18px]">
      <p v-if="error" class="text-xs text-[var(--danger)]">{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-input-wrapper {
  &.input-sm {
    span {
      font-size: 16px;
      & + div {
        height: 44px;
        padding: 0 16px;
      }
    }
  }
  &.input-md {
    span {
      font-size: 18px;
      & + div {
        height: 48px;
        padding: 0 24px;
      }
    }
  }
  input {
    caret-color: var(--text-title);
    background: transparent;
  }
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  &.input-primary {
    .main-input {
      background: var(--input-bg1);
      border: 1px solid var(--input-border1);
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px var(--input-bg1) inset !important;
        -webkit-text-fill-color: var(--text-title) !important;
      }
    }
    &.disabled {
      .main-input {
        cursor: not-allowed;
        pointer-events: none;
        color: var(--text-disabled);
        background: var(--input-disabled1);
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px var(--input-disabled1) inset !important;
          -webkit-text-fill-color: var(--text-disabled) !important;
        }
      }
    }
  }
  &.input-secondary {
    .main-input {
      background: var(--input-bg2);
      border: 1px solid var(--input-border2);
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px var(--input-bg2) inset !important;
        -webkit-text-fill-color: var(--text-title) !important;
      }
    }
    &.disabled {
      .main-input {
        cursor: not-allowed;
        pointer-events: none;
        color: var(--text-disabled);
        background: var(--input-disabled2);
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px var(--input-disabled2) inset !important;
          -webkit-text-fill-color: var(--text-disabled) !important;
        }
      }
    }
  }
  .error {
    border: 1px solid var(--danger);
  }
  .success {
    border: 1px solid var(--success);
  }
  .required::after {
    content: '*';
    position: absolute;
    top: 0;
    right: -15px;
    color: var(--warning);
  }
}
</style>
<style lang="scss">
.base-input-wrapper {
  .set-dropdown {
    margin-right: 24px;

    .wrapper {
      .selected-wrapper {
        padding: 0;
      }
    }
  }
  /* .bg-base-input {
    background: rgba(255, 255, 255, 0.1);
  } */
}
</style>
