/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n
 * @param k
 * @returns
 */
export function kthGrammar(n: number, k: number): number {
  return n === 1 ? 0 : (k & 1) ^ 1 ^ kthGrammar(n - 1, (k + 1) / 2)
}

/**
 * 找规律 + 位运算
 * @desc 时间复杂度 O(logN) 空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function kthGrammar2(n: number, k: number): number {
  k--
  let res = 0
  while (k > 0) {
    k &= k - 1
    res ^= 1
  }
  return res
}
