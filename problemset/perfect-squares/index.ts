/**
 * 动态规划
 * @desc 时间复杂度 O(N√N)  空间复杂度 O(N)
 * @param n
 * @returns
 */
export function numSquares(n: number): number {
  const f = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE
    // 枚举所有小于等于 i 的完全平方数，更新最小步数
    for (let j = 1; j * j <= i; j++)
      min = Math.min(min, f[i - j * j])

    f[i] = min + 1
  }
  return f[n]
}

/**
 * 数学
 * @desc 时间复杂度 O(√N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function numSquares2(n: number): number {
  // 判断是否为完全平方数
  const isPerfectSquare = (x: number): boolean => x === (Math.sqrt(x) >> 0) ** 2

  // 判断是否为 4^k(8m+7)
  const checkAnswerFour = (x: number): boolean => {
    while (x % 4 === 0) x /= 4
    return x % 8 === 7
  }

  if (isPerfectSquare(n)) return 1
  if (checkAnswerFour(n)) return 4

  for (let i = 1; i * i <= n; i++) {
    const j = n - i * i
    if (isPerfectSquare(j)) return 2
  }

  return 3
}
