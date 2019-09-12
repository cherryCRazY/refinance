// sum=((2*average*count)/(2+percent*(count+1)))

const PERCENT = 0.036

export const findAvarage = (sum, count) =>
  ((sum / 2) * ((2 + PERCENT * (count + 1)) / count)) | 0

export const findSum = (average, count) =>
  ((2 * average * count) / (2 + PERCENT * (count + 1))) | 0

export const moneyFormatToNumber = str => +str.replace(/,/g, "")
