export default {
  data: {
    type: Array,
    default: null, // data for loop step -----> [{ title: '1', description: 'เลือกที่นั่ง' }] , [{ image: 'https://abc.com/image.png', description: 'เลือกที่นั่ง' }] ,[{ svg: 'svg/arrow-down', description: 'เลือกที่นั่ง' }]
  },
  step: {
    type: Number,
    default: 0, // step active -----> :step="2"
  },
  lineWidth: {
    type: String,
    default: '6.510416666666667vw', // width of step line -----> lineWidth="20px"
  },
}
