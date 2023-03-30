export default {
  size: {
    type: String,
    default: 'sm', // sm | md
  },
  label: {
    type: String,
    default: 'enter label',
  },
  placeholder: {
    type: String,
    default: 'enter placeholder',
  },
  error: {
    type: String,
    default: null,
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
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
  valid: {
    type: Boolean,
    default: false,
  },
  preset: {
    type: Boolean,
    default: false,
  },
}
