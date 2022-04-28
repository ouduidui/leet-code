/**
 * 试除法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfThree(n: number): boolean {
  while (n && n % 3 === 0) n /= 3
  return n === 1
}

/**
 * 判断是否为最大 3 的幂的约数
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function isPowerOfThree2(n: number): boolean {
  return n > 0 && Math.pow(3, 19) % n === 0
}
