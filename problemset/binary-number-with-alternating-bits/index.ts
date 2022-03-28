/**
 * 模拟
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function hasAlternatingBits(n: number): boolean {
  let prev: 0 | 1 = 0

  while (n !== 0) {
    const cur = (n & 1) as 0 | 1
    if (cur === prev)
      return false

    prev = cur
    n = n >> 1
  }

  return true
}

/**
 * 位运算
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function hasAlternatingBits2(n: number): boolean {
  const a = n ^ (n >> 1)
  return (a & (a + 1)) === 0
}
