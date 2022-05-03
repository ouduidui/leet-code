/**
 * Brian Kernighan算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countBits(n: number): number[] {
  const bits: number[] = []
  for (let i = 0; i <= n; i++)
    bits.push(countOnes(i))

  return bits

  function countOnes(x: number): number {
    let ones = 0
    while (x > 0) {
      // Brian Kernighan算法
      // x = x & (x - 1)，该运算将x的二进制表示的最后一个1变为0
      x &= (x - 1)
      ones++
    }

    return ones
  }
}

/**
 * 动态规划——最高有效位
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countBits2(n: number): number[] {
  const bits = new Array(n + 1).fill(0)
  let highBit = 0
  for (let i = 1; i <= n; i++) {
    // 更新最高有效位
    if ((i & i - 1) === 0)
      highBit = i

    bits[i] = bits[i - highBit] + 1
  }

  return bits
}

/**
 * 动态规划——最低有效位
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countBits3(n: number): number[] {
  const bits = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++)
    bits[i] = bits[i >> 1] + (i & 1)

  return bits
}

/**
 * 动态规划——最低设置位
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param n
 * @returns
 */
export function countBits4(n: number): number[] {
  const bits = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++)
    bits[i] = bits[i & (i - 1)] + 1

  return bits
}
