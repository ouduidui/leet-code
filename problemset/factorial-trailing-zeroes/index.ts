/**
 * 计算阶乘
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(NlogN)
 * @param n
 */
export function trailingZeroes(n: number): number {
  if (n === 0) return 0

  let factorial = BigInt(1)
  while (n > 0) {
    factorial = factorial * BigInt(n)
    n--
  }

  let result = 0
  const b10 = BigInt(10)
  const b0 = BigInt(0)
  while (factorial % b10 === b0) {
    result++
    factorial /= b10
  }

  return result
}

/**
 * 计算因子5
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(NlogN)
 * @param n
 */
export function trailingZeroes2(n: number): number {
  if (n === 0) return 0

  let result = 0
  // 找出是5的倍数的个数
  for (let i = 5; i <= n; i += 5) {
    let currentFactor = i
    while (currentFactor % 5 === 0) {
      result++
      currentFactor /= 5
    }
  }

  return result
}

/**
 * 高效的计算因子5
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 */
export function trailingZeroes3(n: number): number {
  if (n === 0) return 0

  const n1 = BigInt(n)
  let result = BigInt(0)
  let currentMultiple = BigInt(5)
  while (n1 >= currentMultiple) {
    // n / 5 + n / 25 + n / 125 + n / 625 ...
    result += n1 / currentMultiple
    currentMultiple *= BigInt(5)
  }
  return Number(result)
}
