export const ValidationRule = {
  REQUIRED: 'REQUIRED',
  DATEOFBIRTH: 'DATEOFBIRTH',
}

export const ValidationError = {
  REQUIRED: () => 'กรุณาระบุข้อมูล',
  DATEOFBIRTH: () => `กรุณาระบุเลขวันเกิดให้ถูกต้องทั้งหมด 8 ตัว`,
}

export const Rule = {
  [ValidationRule.REQUIRED]: (data) => data !== null && (data !== '') & (data !== undefined),
  [ValidationRule.DATEOFBIRTH]: (data) => {
    if (!data) return true
    const re = /(\d{2})[/](\d{2})[/](\d{4})/
    return re.test(String(data).toLowerCase())
  },
}

export const validate = (data, validationRules) => {
  const keyValue = Object.keys(data) || []
  let error = null
  if (keyValue.length) {
    for (const validateKey of keyValue) {
      if (validationRules[validateKey]) {
        for (const validateRule of validationRules[validateKey]) {
          if (!Rule[validateRule?.rule](data[validateKey], validateRule?.param)) {
            error = { ...error, [validateKey]: ValidationError[validateRule?.rule](validateRule?.field) }
          }
        }
      }
    }
  }
  return error
}
