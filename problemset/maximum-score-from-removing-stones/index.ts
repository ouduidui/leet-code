/**
 * 贪心
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param a
 * @param b
 * @param c
 * @returns
 */
export function maximumScore(a: number, b: number, c: number): number {
  const sum = a + b + c
  const maxVal = Math.max(a, b, c)
  return Math.min(sum - maxVal, (sum / 2) >> 0)
}
