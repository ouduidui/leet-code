/**
 * 二分法
 * @desc 时间复杂度 O(MlogMN)  空间复杂度 O(1)
 * @param m
 * @param n
 * @param k
 * @returns
 */
export function findKthNumber(m: number, n: number, k: number): number {
  let left = 1
  let right = m * n
  while (left < right) {
    const x = left + ((right - left) >> 1)
    let count = ((x / n) >> 0) * n
    for (let i = ((x / n) >> 0) + 1; i <= m; ++i)
      count += (x / i) >> 0

    if (count >= k)
      right = x
    else
      left = x + 1
  }
  return left
}
