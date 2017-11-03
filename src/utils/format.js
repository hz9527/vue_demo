function isEmptyObj (obj) {
  return Object.keys(obj).length === 0
}
function isEmptyArray (arr) { // length or item is null
  if (arr.length === 0) {
    return true
  } else {
    return arr.every(item => item === null)
  }
}

// deepclone
function deepClone (obj) {
  if (obj !== null && typeof obj === 'object') {
    if (obj.constructor === Array) {
      return obj.map(item => deepClone(item))
    } else {
      return Object.assign(...Object.entries(obj).map(item => {
        return {[item[0]]: deepClone(item[1])}
      }))
    }
  } else if (typeof obj === 'function') {
    return obj.toString()
  } else {
    return obj
  }
}
function formatObj (obj) { // 去掉所有空数组或空对象的属性
  let newObj = {}
  Object.keys(obj).forEach(key => {
    if (obj[key] !== null && typeof obj[key] === 'object') {
      if (obj[key].constructor === Array) {
        !isEmptyArray(obj[key]) && (newObj[key] = obj[key])
      } else {
        !isEmptyObj(obj[key]) && (newObj[key] = obj[key])
      }
    } else {
      newObj[key] = obj[key]
    }
  })
  return deepClone(newObj)
}

export {formatObj}
