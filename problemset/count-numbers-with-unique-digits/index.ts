/**
 * 排列组合
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) return 1
  if (n === 1) return 10

  let res = 10
  let cur = 9
  for (let i = 0; i < n - 1; i++) {
    cur *= 9 - i
    res += cur
  }

  return res
}
