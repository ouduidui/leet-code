/**
 * 枚举每一数位上 1 的个数
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countDigitOne(n: number): number {
  let ans = 0
  for (let m = 1; n >= m; m *= 10)
    ans += ((n / (m * 10)) >> 0) * m + Math.min(Math.max(n % (m * 10) - m + 1, 0), m)

  return ans
}
