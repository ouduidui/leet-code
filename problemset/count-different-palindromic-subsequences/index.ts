/**
 * 动态规划 + 二维数组
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param s
 * @returns
 */
export function countPalindromicSubsequences(s: string): number {
  const MOD = 10 ** 9 + 7
  const len = s.length
  const dp: number[][] = new Array(len).fill([])
    .map(() => new Array(len).fill(0))

  for (let i = 0; i < len; i++)
    dp[i][i] = 1

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i + l <= len; i++) {
      const j = i + l - 1
      if (s[i] === s[j]) {
        let low = i + 1
        let high = j - 1
        while (low <= high && s[low] !== s[i])
          low++

        while (high >= low && s[high] !== s[j])
          high--

        if (low > high)
          dp[i][j] = (2 + dp[i + 1][j - 1] * 2) % MOD

        else if (low === high)
          dp[i][j] = (1 + dp[i + 1][j - 1] * 2) % MOD

        else
          dp[i][j] = (dp[i + 1][j - 1] * 2 % MOD - dp[low + 1][high - 1] + MOD) % MOD
      }
      else {
        dp[i][j] = ((dp[i + 1][j] + dp[i][j - 1]) % MOD - dp[i + 1][j - 1] + MOD) % MOD
      }
    }
  }

  return dp[0][len - 1]
}
