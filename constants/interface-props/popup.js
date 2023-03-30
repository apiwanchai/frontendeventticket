export default {
  position: {
    type: String,
    default: 'center', // card position -----> center , left , right
  },
  topPosition: {
    type: String,
    default: '', // card top position -----> 10px , 10rem, 10% ...
  },
  fullScreenMode: {
    type: Number,
    default: 0, // full screen when width < props.fullScreenMode ------> :fullScreenMode="640"
  },
  hidden: {
    type: Number || Boolean,
    default: 0, // display none when width < props.hidden ------> :hidden="640"
  },
  typeSwitch: {
    type: Number,
    default: 0, // switch type when width < props.typeSwitch ------> :typeSwitch="640"
  },
}
