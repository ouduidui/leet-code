/**
 * 时间复杂度 => O(log∣x∣)    空间复杂度 => O(1)
 * @param x {number}
 * @return {number}
 */
export function reverse(x: number): number {
  let res = 0

  while (x !== 0) {
    // 余数
    const digit: number = x % 10
    // 去掉最后一位
    x = ~~(x / 10)
    res = res * 10 + digit
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1)
      return 0
  }

  return res
}
