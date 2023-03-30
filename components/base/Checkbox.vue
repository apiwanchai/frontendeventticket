<script setup>
// Import
import checkbox from '~~/constants/interface-props/checkbox'

// Props
defineProps(checkbox)
// Functions
const emit = defineEmits(['update:modelValue'])
emit('update:modelValue', false)
const updateValue = (e) => {
  emit('update:modelValue', e.target.checked)
}
</script>

<template>
  <div class="base-checkbox-wrapper">
    <input type="checkbox" @change="updateValue" />
    <nuxt-icon class="checkbox-icon w-full h-full flex items-center justify-center p-[2px] pt-[3px]" name="svg/check" />
  </div>
</template>

<style lang="scss" scoped>
.base-checkbox-wrapper {
  width: 20px;
  height: 20px;
  background: rgba(var(--RGB_checkbox-border), 0.1);
  border: 1px solid var(--checkbox-border);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:has(input:checked) {
    background: linear-gradient(93.65deg, var(--checkbox1) 1.5%, var(--checkbox2) 99.19%);
    .checkbox-icon {
      transform: scale(1);
    }
  }

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 1;
  }

  .checkbox-icon {
    transition: all 0.25s;
    transform: scale(0);
  }
}
</style>
