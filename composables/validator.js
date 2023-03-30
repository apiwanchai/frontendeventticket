export { default as Rules } from '../constants/validateRules'
export const useValidator = (form, errors) => ({
  form,
  ruleObj: {},
  errors,
  isFormValid: false,

  rules(rules) {
    this.ruleObj = rules
    return this
  },

  async validate(field = '', showAllErrors = false) {
    let errors = []
    const setError = (errorObj, field, errors) => {
      errors = errors.filter((v) => v)
      errorObj[field] = errors.length ? (showAllErrors ? errors : errors[0]) : ''
    }
    const checkError = async (formObj, field, fn) => {
      try {
        let errMsg = ''
        if (fn.name === 'requiredValidate') errMsg = fn(formObj[field])
        else if (formObj[field]) errMsg = fn.name === 'custom' ? await fn()(formObj[field]) : fn(formObj[field])
        return errMsg
      } catch (error) {}
    }
    if (field) {
      try {
        for (const fn of this.ruleObj[field].validator) {
          errors.push(await checkError(this.form, field, fn))
        }
      } catch (error) {
        console.log(`Error: field ${field} not found.`)
      }
      setError(this.errors, field, errors)
    } else {
      for (const field in this.ruleObj) {
        errors = []
        for (const fn of this.ruleObj[field].validator) {
          errors.push(await checkError(this.form, field, fn))
        }
        setError(this.errors, field, errors)
      }
    }
    this.isFormValid = this.validateRequiredField() && Object.keys(this.errors).every((v) => !this.errors[v])
    return this
  },

  validateRequiredField() {
    const checkErrors = { ...this.errors }
    for (const key in this.ruleObj) {
      checkErrors[key] = ''
      for (const fn of this.ruleObj[key].validator) {
        if (fn.name === 'requiredValidate' && fn(this.form[key])) {
          checkErrors[key] = 'required'
        }
      }
    }
    return Object.keys(checkErrors).every((v) => !checkErrors[v])
  },
})
