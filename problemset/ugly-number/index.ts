/**
 * 数学
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isUgly(n: number): boolean {
  if (n <= 0) return false

  for (const factor of [2, 3, 5])
    while (n % factor === 0) n /= factor

  return n === 1
}
