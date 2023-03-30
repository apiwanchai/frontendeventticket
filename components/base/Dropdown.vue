<script setup>
// Import
import { onClickOutside } from '@vueuse/core'
import dropdown from '~~/constants/interface-props/dropdown'
// Props
const props = defineProps(dropdown)
// State
const setDefaultValue = ref(null)
const state = ref({
  selectValue: setDefaultValue,
  activeIndex: props.defaultIndex || null,
  visible: false,
})
const outSideRef = ref(null)

setDefaultValue.value = props.defaultIndex
  ? props.data[props.defaultIndex] || 'not found'
  : props.defaultValue
  ? props.data.find((o, index) => {
      state.value.activeIndex = index
      return o === props.defaultValue
    }) ||
    props.data.find((o, index) =>
      Object.values(o).find((v) => {
        if (v === props.defaultValue) {
          state.value.activeIndex = index
        }
        return v === props.defaultValue
      })
    ) ||
    'not found'
  : null

// Functions
onClickOutside(outSideRef, () => (state.value.visible = false))

const emit = defineEmits(['update:modelValue'])
const updateValue = (value) => {
  emit('update:modelValue', value)
}

const toggleVisible = () => {
  if (props.disabled) {
    return
  }
  state.value.visible = !state.value.visible
}

const setActive = (data, index) => {
  if (props.disabled) {
    return
  }
  updateValue(data?.[props.valueKey] === 0 ? data?.[props.valueKey] : data?.[props.valueKey] || data)
  state.value.selectValue = data
  state.value.activeIndex = index
  toggleVisible()
}

onMounted(() => {
  if ((props.defaultValue || props.defaultIndex) && (state.value.selectValue || state.value.selectValue === 0)) {
    updateValue(props.data[state.value.activeIndex]?.[props.valueKey] || props.data[state.value.activeIndex])
  }
})
</script>

<template>
  <div ref="outSideRef" :class="[`dropdown-${size} base-dropdown-wrapper w-full mb-1`, { disabled: disabled }]">
    <span v-if="label" :class="[`relative`, required && 'required']">{{ label }}</span>
    <div class="wrapper" :class="{ err: error && error != 'disable' }">
      <!-- select -->
      <div class="selected-wrapper gap-[10px]" @click="toggleVisible">
        <div class="selected">
          <!-- image key selected -->
          <img v-if="imgKey && state.selectValue?.[imgKey]" :src="state.selectValue?.[imgKey]" alt="ALT" />
          <!-- svg key icon selected -->
          <nuxt-icon v-if="svgKey && state.selectValue?.[svgKey]" :name="state.selectValue?.[svgKey]" />
          <!-- text key selected -->
          <span v-for="(textItem, index) in textKey" :key="'text-' + index" class="option-text">{{
            state.selectValue?.[textItem]
          }}</span>
          <!-- text array selected and placeholder -->
          <span
            v-if="
              typeof state.selectValue === 'string' ||
              typeof state.selectValue === 'number' ||
              state.selectValue === null
            "
          >
            {{ state.selectValue ? state.selectValue : placeholder }}
          </span>
        </div>
        <!-- dropdown arrow -->
        <nuxt-icon name="svg/arrow-down" class="transform" :class="{ 'rotate-180': state.visible }" />
      </div>
      <!-- option -->
      <div class="option-wrapper scrollbar-wrapper" :class="{ hidden: !state.visible }">
        <!-- placeholder option -->
        <div
          :key="label + 'placeholder'"
          class="option"
          :class="{ active: state.activeIndex === null }"
          @click="setActive(null, null)"
        >
          <span>{{ placeholder }}</span>
        </div>
        <!-- loop option -->
        <div
          v-for="(item, index) in data"
          :key="label + index"
          class="option"
          :class="{ active: state.activeIndex === index }"
          @click="setActive(item, index)"
        >
          <!-- image key option -->
          <img v-if="imgKey && item?.[imgKey]" :src="item?.[imgKey]" alt="ALT" />
          <!-- svg key icon option -->
          <nuxt-icon v-if="svgKey && item?.[svgKey]" :name="item?.[svgKey]" />
          <!-- text key option -->
          <span v-for="(textItem, indexs) in textKey" :key="'text-' + indexs" class="option-text whitespace-nowrap">{{
            item?.[textItem]
          }}</span>
          <!-- text array option -->
          <span v-if="typeof item === 'string' || typeof item === 'number'">{{ item }}</span>
        </div>
      </div>
    </div>
    <div v-if="error !== 'disable'" class="h-[18px]" :class="{ error: error }">
      <p v-if="error" class="text-xs text-[var(--danger)]">{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-dropdown-wrapper {
  &.disabled {
    cursor: not-allowed !important;
    pointer-events: none !important;
    color: var(--text-disabled) !important;
  }
  .required::after {
    content: '*';
    position: absolute;
    top: 0;
    right: -15px;
    color: var(--warning);
  }
  .error {
    border-top: 1px solid var(--danger);
    padding: 0 16px;
  }
  .wrapper {
    position: relative;
    max-height: 44px;
    user-select: none;
    .option-text:empty {
      display: none;
    }
    .selected-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%;
      height: 100%;
      cursor: pointer;
      .selected {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: auto;
          height: 46.83783783783783%;
        }
      }
    }
    .option-wrapper {
      position: absolute;
      left: 0;
      width: 100%;
      min-width: max-content;
      overflow: hidden;
      overflow-y: auto;
      background: var(--dropdown-secondary);
      border-radius: 10px;
      z-index: 10;
      .option {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 16px;
        cursor: pointer;
        &:hover,
        &.active {
          background: rgba(var(--RGB_dropdown-primary), 0.1);
        }
        img {
          width: auto;
          height: 46.83783783783783%;
        }
      }
    }
  }

  /*========================================================
DROPDOWN SIZE
=========================================================*/
  &.dropdown-sm {
    .wrapper {
      font-size: 14px;
      height: 37px;
      .selected-wrapper {
        max-height: 37px;
        .selected {
          height: 37px;
          gap: 8px;
        }
      }
      .option-wrapper {
        max-height: calc(37px * 5);
        .option {
          height: 37px;
          gap: 8px;
        }
      }
    }
  }
  &.dropdown-md {
    .wrapper {
      height: 44px;
      font-size: 14px;
      .selected-wrapper {
        max-height: 44px;
        .selected {
          height: 44px;
          gap: 10px;
        }
      }
      .option-wrapper {
        max-height: calc(44px * 5);
        .option {
          height: 44px;
          gap: 10px;
        }
      }
    }
  }

  /*========================================================
DROPDOWN COLOR
=========================================================*/
  &.dropdown-primary {
    .wrapper {
      background: rgba(var(--RGB_dropdown-primary), 0.1);
      border: 1px solid rgba(var(--RGB_dropdown-primary), 0.5);
      border-radius: 10px;
      .option-wrapper {
        transform: translateY(calc(3px));
      }
      &.err {
        border: 1px solid var(--danger);
      }
    }
    .error {
      border-top: unset;
    }
  }
  &.dropdown-secondary {
    .wrapper {
      background: var(--dropdown-secondary);
      border-radius: 10px;
      .option-wrapper {
        transform: translateY(calc(2px));
      }
      &.err {
        border: 1px solid var(--danger);
      }
    }
    .error {
      border-top: unset;
    }
  }
}
</style>
