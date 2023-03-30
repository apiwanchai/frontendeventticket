export default {
  imgUrl: {
    type: String,
    required: true,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  timeOut: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateTime: {
    type: String,
    required: true,
    default: '',
  },
  location: {
    type: String,
    required: true,
    default: '',
  },
  statusBtn: {
    type: String,
    required: true,
    default: '0', // 0 = ซื้อตั๋ว , 1 = SOLD OUT , 2 =  เร็วๆนี้
  },
  typeBtn: {
    type: Boolean,
    required: true,
    default: true,
  },
}
