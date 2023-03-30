export default {
  Id: {
    type: String,
    default: '', // sm | md
  },
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
}
