/**
 * 枚举
 * @desc 时间复杂度 O(10^2n)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function largestPalindrome(n: number): number {
  if (n === 1) return 9

  // 上限值
  const upper = 10 ** n - 1
  for (let left = upper; left > upper / 10; left--) {
    const right = String(left).split('').reverse().join('')
    // 得到回文数
    const p = BigInt(String(left) + right)
    let x = BigInt(upper)
    while (x * x >= p) {
      // x 是 p 的因子
      if (p % x === BigInt(0))
        return Number(p % BigInt(1337))
      x--
    }
  }

  return -1
}
