export default {
  imgUrl: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: Array,
    required: true,
  },
  amount: {
    type: [String, Number],
    required: true,
  },
  timeOut: {
    type: String,
    required: true,
  },
  statusBtn: {
    type: [String, Number], // 0 = 'ชำระเงิน' ,1 = 'ชำระเงินแล้ว', 2 ='แสดงตั๋ว'
    required: true,
  },
  btnDetails: {
    type: [String, Number], // 0 = 'ดูรายละเอียด' , 1 ='ดาวน์โหลดใบเสร็จ'
    required: true,
  },
}
