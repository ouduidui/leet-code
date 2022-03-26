/**
 * 进制转换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param columnTitle
 */
export function titleToNumber(columnTitle: string): number {
  let result = 0
  const len = columnTitle.length
  for (let i = len - 1; i >= 0; i--) {
    const letter = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1
    result += letter * 26 ** (len - 1 - i)
  }

  return result
}
