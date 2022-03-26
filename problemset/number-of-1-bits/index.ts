/**
 * 循环检查二进制位
 * @desc 时间复杂度 O(1)「O(32)」  空间复杂度 O(1)
 * @param n
 */
export function hammingWeight(n: number): number {
  let result = 0

  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) result++
    n >>>= 1
  }

  return result
}

/**
 * 位运算优化
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 */
export function hammingWeight2(n: number): number {
  let result = 0

  while (n) {
    // 01101 -> 01101 & (01101 - 1) -> 01101 & 01100 -> 11
    n &= n - 1
    result++
  }
  return result
}
