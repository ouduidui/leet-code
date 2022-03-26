/**
 * 模拟
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param num
 */
export function addDigits(num: number): number {
  while (num >= 10) {
    let sum = 0
    while (num) {
      sum += num % 10 >> 0
      num /= 10
    }
    num = sum
  }

  return num
}

/**
 * 数学
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param num
 */
export function addDigits2(num: number): number {
  return ((num - 1) % 9) + 1
}
