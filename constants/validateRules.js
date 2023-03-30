const defaultErrorMsg = {
  REQUIRED: 'Please input',
  EMAIL: 'Email is invalid format',
  NUMBER: 'Must be number',
}

export default () => ({
  validator: [],

  custom(fn) {
    // if success return '', if error return message
    const custom = () => fn
    this.validator.push(custom)
    return this
  },

  required(errMsg) {
    const requiredValidate = (val) => {
      return val ? '' : errMsg || defaultErrorMsg.REQUIRED
    }
    this.validator.push(requiredValidate)
    return this
  },

  number(errMsg) {
    const numberValidate = (val) => {
      return /\d$/.test(val) && typeof val === 'number' ? '' : errMsg || defaultErrorMsg.NUMBER
    }
    this.validator.push(numberValidate)
    return this
  },

  email(errMsg) {
    const emailValidate = (val) => {
      return /@/.test(val) ? '' : errMsg || defaultErrorMsg.EMAIL
    }
    this.validator.push(emailValidate)
    return this
  },
})
