export default {
  tabsId: {
    type: String,
    default: '', // sm | md
  },
  items: {
    type: Array,
    required: true,
  },
  active: {
    type: String,
    required: true,
  },
  activeBgColor: {
    type: String,
    required: true,
  },
}
