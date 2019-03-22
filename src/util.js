export function isFunction(obj) {
  return typeof obj == 'function'
}

export function isNumber(obj) {
  return typeof obj == 'number'
}

export function isString(obj) {
  return typeof obj == 'string'
}

export function toMillisecond(obj) {
  if (isNumber(obj)) {
    return obj
  } else if (isString(obj)) {
    if (/\d+m?s$/.test(obj)) {
      if (/ms/.test(obj)) {
        return 1 * obj.replace('ms', '')
      }
      return 1000 * obj.replace('s', '')
    } else if (/^\d+$/.test(obj)) {
      return +obj
    }
  }
  return -1
}
