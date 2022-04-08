/**
 * 暴力计算
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfTwo(n: number): boolean {
  while (n >= 2) n /= 2
  return n === 1
}

/**
 * 二进制表示
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfTwo2(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0
}
