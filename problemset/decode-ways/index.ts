/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s {string}
 * @return {number}
 */
export function numDecodings(s: string): number {
  if (s[0] === '0') return 0

  const len = s.length
  const dp: number[] = new Array(len + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i < len + 1; i++) {
    if (s[i - 1] !== '0')
      dp[i] += dp[i - 1]

    if (i <= 1) continue

    // 判断相邻两个值是否在[10, 26]区间内
    if (
      s[i - 2] === '1'
      || (s[i - 2] === '2'
        && s[i - 1] !== '7'
        && s[i - 1] !== '8'
        && s[i - 1] !== '9')
    )
      dp[i] += dp[i - 2]
  }

  return dp[len]
}
