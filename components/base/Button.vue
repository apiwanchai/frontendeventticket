<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="base-button-wrapper"
    :class="[`btn-${size}`, rounded && 'rounded-full']"
    @click="$emit('click')"
  >
    <div v-if="!loading">
      <slot></slot>
    </div>
    <div v-else>Loading...</div>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md', // xs | sm | md | lg
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  emits: ['click'],
  computed: {
    isBtnTertiary() {
      return this.$attrs.class.includes('btn-tertiary')
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button-wrapper {
  padding: 0 15px;
  color: var(--text-title);

  /*========================================================
  BUTTON FONT SIZE
=========================================================*/
  &.btn-xs {
    height: 30px;
  }
  &.btn-sm {
    height: 38px;
  }
  &.btn-md {
    height: 44px;
  }
  &.btn-lg {
    height: 48px;
  }
}
/*========================================================
BUTTON COLOR
=========================================================*/
.btn-primary {
  background: linear-gradient(93.65deg, var(--btn-primary1) 1.5%, var(--btn-primary2) 99.19%);
  &:hover {
    background: linear-gradient(93.65deg, var(--hover-primary1) 1.5%, var(--hover-primary2) 99.19%);
  }
  &:disabled {
    cursor: not-allowed;
    background: var(--btn-disabled);
  }
}

.btn-secondary {
  background: rgba(var(--RGB_btn-secondary), 0.1);
  border: 1px solid var(--btn-secondary-stroke);
  color: var(--text-title);

  &:disabled {
    cursor: not-allowed;
    background: var(--btn-disabled);
    border: 1px solid var(--btn-disabled);
  }
}

.btn-tertiary {
  background: rgba(var(--RGB_btn-secondary), 0.1);
  border: 1px solid var(--btn-primary1);
  color: var(--btn-primary1);
  &:hover {
    color: var(--text-title);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--text-title);
    background: var(--btn-disabled);
    border: 1px solid var(--btn-disabled);
  }
}

.btn-quaternary {
  background: linear-gradient(93.65deg, var(--btn-quaternary1) 1.5%, var(--btn-quaternary2) 99.19%);

  &:disabled {
    cursor: not-allowed;
    background: var(--btn-disabled);
  }
}

.btn-cancel {
  background: linear-gradient(93.65deg, var(--btn-disabled) 1.5%, var(--btn-disabled) 99.19%);
  &:hover {
    background: linear-gradient(93.65deg, var(--btn-disabled) 1.5%, var(--btn-disabled) 99.19%);
  }
  &:disabled {
    cursor: not-allowed;
    background: var(--btn-disabled);
  }
}
</style>
