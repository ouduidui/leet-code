/**
 * 动态规划
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N^2)
 * @param s
 */
export function minCut(s: string): number {
  const len = s.length
  const dp: boolean[][] = new Array(len)
    .fill([])
    .map(() => new Array(len).fill(true))

  /**
   * s = 'aab'
   * dp = [
   *    [true{a1} , true{a1a2}, false{a1a2b}],
   *    [ -  , true{a2}, false{a2b}],
   *    [ -  ,  -  , true{b}]
   *  ]
   */
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++)
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
  }

  /**
   * s = 'aab'
   * dp = [
   *    [0 , 0, pass],
   *    [ -  , pass, pass],
   *    [ -  ,  -  , dp[0][1]+1]
   *  ]
   */
  const f = new Array(len).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i < len; i++) {
    if (dp[0][i]) {
      f[i] = 0
    }
    else {
      for (let j = 0; j < i; j++) {
        if (dp[j + 1][i])
          f[i] = Math.min(f[i], f[j] + 1)
      }
    }
  }

  return f[len - 1]
}
