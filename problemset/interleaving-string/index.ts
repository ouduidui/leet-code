/**
 * 动态规划
 * @desc 时间复杂度 O(MN)   空间复杂度 O(MN)
 * @param s1 {string}
 * @param s2 {string}
 * @param s3 {string}
 * @return {boolean}
 */
export function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1 === '') return s3 === s2
  if (s2 === '') return s3 === s1

  const m = s1.length
  const n = s2.length
  const t = s3.length

  // 如果长度不符合，直接返回false
  if (t !== m + n) return false

  const dp: boolean[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(false))

  dp[0][0] = true

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // 获取对应的字符
      const s = s3.charAt(i + j - 1)

      if (i > 0)
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s === s1.charAt(i - 1))

      if (j > 0)
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s === s2.charAt(j - 1))
    }
  }

  return dp[m][n]
}

/**
 * 动态规划 - 滚动数组
 * @desc 时间复杂度 O(MN)   空间复杂度 O(N)
 * @param s1 {string}
 * @param s2 {string}
 * @param s3 {string}
 * @return {boolean}
 */
export function isInterleave2(s1: string, s2: string, s3: string): boolean {
  if (s1 === '') return s3 === s2
  if (s2 === '') return s3 === s1

  const m = s1.length
  const n = s2.length
  const t = s3.length

  if (t !== m + n) return false

  const dp = new Array(n + 1).fill(false)
  dp[0] = true

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const s = s3[i + j - 1]
      if (i > 0)
        dp[j] = dp[j] && s === s1.charAt(i - 1)

      if (j > 0)
        dp[j] = dp[j] || (dp[j - 1] && s === s2.charAt(j - 1))
    }
  }

  return dp[n]
}
