export const isFunction = val => typeof val === 'function'
export const isArray = Array.isArray
export const isString = val => typeof val === 'string'
export const isSymbol = val => typeof val === 'symbol'
export const isObject = val => val !== null && typeof val === 'object'

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function getYearMonthDay(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  }
}

export function myToFixed(value) {
  value = value + ''
  if (value.includes('.')) {
    let sp = value.split('.')
    return sp[0] + '.' + sp[1].slice(0, 1)
  } else {
    return value + '.0'
  }
}

export function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  } else {
    // 问题: 为什么要相加
    // 因为这两个属性只有一个有用, 另一个肯定是0, 索性直接相加
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    };
  }
}

export function getViewportSize() {
  if (window.innerHeight) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      };
    }
  }
}