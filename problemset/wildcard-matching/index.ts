/**
 * 动态规划
 * @desc 时间复杂度 O(MN)    空间复杂度 O(MN)
 * @param s {string}
 * @param p {string}
 */
export function isMatch(s: string, p: string): boolean {
  // 获取长度
  const sLen = s.length
  const pLen = p.length

  const dp: boolean[][] = Array(sLen + 1)
  for (let i = 0; i < dp.length; i++)
    dp[i] = Array(pLen + 1).fill(false) // 默认为false

  // 初始值为true
  dp[0][0] = true

  for (let i = 1; i <= pLen; i++) {
    if (p[i - 1] === '*') dp[0][i] = true
    else break
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*')
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      else if (p[j - 1] === '?' || s[i - 1] === p[j - 1])
        dp[i][j] = dp[i - 1][j - 1]
    }
  }

  return dp[sLen][pLen]
}
