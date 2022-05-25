/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param p
 * @returns
 */
export function findSubstringInWraproundString(p: string): number {
  const dp = new Array(26).fill(0)
  let k = 0
  for (let i = 0; i < p.length; i++) {
    if (
      i > 0
      && (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1 // 字符之差为 1 或 -25
    )
      k++
    else
      k = 1

    const idx = p[i].charCodeAt(0) - 'a'.charCodeAt(0)
    dp[idx] = Math.max(dp[idx], k)
  }

  return dp.reduce((acc, cur) => acc + cur, 0)
}
