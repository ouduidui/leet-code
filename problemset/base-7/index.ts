/**
 * 数学
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function convertToBase7(num: number): string {
  if (num === 0) return '0'

  const isNeg = num < 0
  num = Math.abs(num)
  let res = ''

  while (num > 0) {
    res = (num % 7) + res
    num = Math.floor(num / 7)
  }

  return `${isNeg ? '-' : ''}${res}`
}
