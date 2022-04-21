/**
 * 二进制表示中 1 的位置
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAA) === 0
}

/**
 * 取模性质
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfFour2(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1
}
