/**
 * 对称生成
 * @desc 时间复杂度 O(2^n)   空间复杂度 O(1)
 * @param n
 */
export function grayCode(n: number): number[] {
  const ret = [0]
  for (let i = 1; i <= n; i++) {
    const m = ret.length
    // 倒序插入
    for (let j = m - 1; j >= 0; j--) {
      // ret[j] | (1 << (i - 1)) 即在 ret[j] 的二进制前面补 1
      // 假设ret[j]为011，i为4，因此 1 << (i - 1) = 1000，因此 ret[j] | (1 << (i - 1)) = 001 | 1000 = 1001
      ret.push(ret[j] | (1 << (i - 1)))
    }
  }

  return ret
}

/**
 * 二进制数转格雷码
 * @desc 时间复杂度 O(2^n)   空间复杂度 O(1)
 * @param n
 */
export function grayCode2(n: number): number[] {
  const ret = []
  // 1 << n  -> 2 ** n
  for (let i = 0; i < 1 << n; i++) {
    // 假设 i = 6，即二进制为 110，即(i >> 1)为 011，因此 (i >> 1) ^ i 为 011 ^ 110
    ret.push((i >> 1) /* 将 i 右移动一位 */ ^ i)
  }
  return ret
}
