export function removeHTML(input) {
  return input;
}


export function formatDate(input) {
  return input;
}

export function getUrlParameter(url) {
  return url;
}

// 删除数组中的某一项
export const deleteOneofArray = function(value, array) {
  array.forEach((o, i, array) => {
    if (o === value) {
      array.splice(i, 1)
    }
  })
}

export const clones = function(obj) {
  if (obj === null || typeof obj !== 'object') return obj

  // Handle Array
  if (obj instanceof Array) {
    let copy = []
    for (let i = 0, len = obj.length; i < len; ++i) {
      copy[i] = clones(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    let copy = {}
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clones(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}

export const oneOf = function(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}