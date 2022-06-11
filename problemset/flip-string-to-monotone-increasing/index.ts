/**
 * 前缀和
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function minFlipsMonoIncr(s: string): number {
  const len = s.length
  const p = new Array<number>(len + 1).fill(0)
  // 计算每个位置左边有多少个1
  for (let i = 0; i < len; i++)
    p[i + 1] = p[i] + (s[i] === '1' ? 1 : 0)

  let ans = Number.MAX_VALUE
  for (let i = 0; i <= len; i++)
    ans = Math.min(ans, p[i] + len - i - (p[len] - p[i]))

  return ans
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minFlipsMonoIncr2(s: string): number {
  let dp1 = 0
  let dp2 = 0
  for (const ch of s) {
    dp2 = Math.min(dp1, dp2)
    ch === '1' ? dp1++ : dp2++
  }

  return Math.min(dp1, dp2)
}
