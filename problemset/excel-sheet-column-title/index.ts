/**
 * 数学
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param columnNumber
 */
export function convertToTitle(columnNumber: number): string {
  let str = ''
  while (columnNumber > 0) {
    const a = ((columnNumber - 1) % 26) + 1
    str = String.fromCharCode('A'.charCodeAt(0) + a - 1) + str
    columnNumber = ((columnNumber - a) / 26) >> 0
  }

  return str
}

/**
 * 数学 - 优化
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param columnNumber
 */
export function convertToTitle2(columnNumber: number): string {
  let str = ''
  while (columnNumber > 0) {
    // 1~26  ->  0~25
    columnNumber--
    str = String.fromCharCode('A'.charCodeAt(0) + (columnNumber % 26)) + str
    // 当x区间为[0,25]时， (columnNumber - x) / 26 = (columnNumber - 1) / 26
    columnNumber = (columnNumber / 26) >> 0
  }

  return str
}
