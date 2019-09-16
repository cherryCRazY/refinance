const PERCENT = 0.036

export const findAvarage = (sum, count) =>
  ((sum / 2) * ((2 + PERCENT * (count + 1)) / count)) | 0

export const findSum = (average, count) =>
  ((2 * average * count) / (2 + PERCENT * (count + 1))) | 0

export const moneyFormatToNumber = str => +str.replace(/\s/g, "")

export function debounce(func, wait, immediate) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
