/**
 * 进制
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function checkPowersOfThree(n: number): boolean {
  while (n !== 0) {
    if (n % 3 === 2) return false
    n = (n / 3) >> 0
  }
  return true
}
