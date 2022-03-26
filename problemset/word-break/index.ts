/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s
 * @param wordDict
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const len = s.length
  const dp = new Array<boolean>(len + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[len]
}
