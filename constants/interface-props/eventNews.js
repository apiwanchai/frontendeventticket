export default {
  imgUrl: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  detailsShow: {
    type: Boolean, //  true แสดง details ส่วนของข้างล่าง
    required: true,
    default: true,
  },
  newCardMb: {
    type: String, // mbCard จะแสดงเฉพาะ Mb เท่านั้น
    required: true,
  },
}
