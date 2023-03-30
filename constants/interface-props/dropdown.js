export default {
  data: {
    type: Array,
    default: [], //  array data for use in dropdown ---> :data="data"
  },
  svgKey: {
    type: String,
    default: '', // key svg in data for use svg ---> svgKey="key" (If you don't use it, it won't show)
  },
  imgKey: {
    type: String,
    default: '', // key img in data for use img ---> imgKey="key" (If you don't use it, it won't show)
  },
  textKey: {
    type: Array,
    default: [], // key text in data ---> :textKey='['key','key']' (If not inserted, only letters and numbers will be used)
  },
  valueKey: {
    type: String,
    default: '', // key value in data ---> valueKey="key" (If not put, all will be returned.)
  },
  label: {
    type: String,
    default: '', // title ---> label="text" (If you don't use it, it won't show)
  },
  placeholder: {
    type: String,
    default: 'เลือก', // placeholder ---> placeholder="text" (If not omitted, the default value will be used.)
  },
  size: {
    type: String,
    default: 'sm', // sm , md (If not omitted, the default value will be used.)
  },
  error: {
    type: String,
    default: null, // error string ---> error="text"
  },
  required: {
    type: Boolean,
    default: false, // required Boolean ---> required or :required="true"
  },
  modelValue: {
    type: String,
    required: true, // v-model for callback ---> v-model="date"
  },
  defaultValue: {
    type: String || Number,
    default: null, // set default select from value in object ---> defaultValue="แมว" , :defaultValue="99"
  },
  defaultIndex: {
    type: Number, // set default select from index ---> :defaultValue="0"
    default: null,
  },
  disabled: {
    type: Boolean, // disable on disabled = true ---> :disabled="true",:disabled="false"
    default: false,
  },
}
