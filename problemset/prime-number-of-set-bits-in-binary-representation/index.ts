/**
 * 数学 + 位运算
 * @desc 时间复杂度 O((R-L)√(logR))  空间复杂度 O(1)
 * @param left
 * @param right
 * @returns
 */
export function countPrimeSetBits(left: number, right: number): number {
  let ans = 0

  for (let x = left; x <= right; x++)
    isPrime(bitCount(x)) && ans++

  return ans

  function isPrime(x: number): boolean {
    if (x < 2) return false

    for (let i = 2; i * i <= x; i++)
      if (x % i === 0) return false

    return true
  }

  function bitCount(x: number): number {
    return x.toString(2).split('0').join('').length
  }
}

/**
 * 判断质数优化
 * @desc 时间复杂度 O((R-L))  空间复杂度 O(1)
 * @param left
 * @param right
 * @returns
 */
export function countPrimeSetBits2(left: number, right: number): number {
  let ans = 0

  for (let x = left; x <= right; x++) {
    // 用一个二进制数 mask=665772=10100010100010101100 来存储这些质数
    if (((1 << bitCount(x)) & 665772) !== 0)
      ++ans
  }

  return ans

  function bitCount(x: number): number {
    return x.toString(2).split('0').join('').length
  }
}
