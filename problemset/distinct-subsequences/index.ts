/**
 * 记忆化搜索 + 回溯
 * @desc 时间复杂度 O(M!)  空间复杂度 O(M)
 * @param s
 * @param t
 */
export function numDistinct(s: string, t: string): number {
  const m = s.length
  const n = t.length
  const map = new Map<string, number>()
  return dfs(0, '')

  function dfs(i: number, temp: string): number {
    const j = temp.length

    if (j === n && temp === t)
      return 1

    if (j === n || i === m || n - j > m - i)
      return 0

    // 记忆化
    const hash = `${i}-${j}`
    if (map.has(hash))
      return map.get(hash)!

    let val = 0
    while (i < m) {
      if (s[i] === t[j])
        val += dfs(i + 1, temp + s[i])

      i++
    }

    map.set(hash, val)
    return val
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(NM)  空间复杂度 O(NM)
 * @param s
 * @param t
 */
export function numDistinct2(s: string, t: string): number {
  const m = s.length
  const n = t.length
  if (m < n)
    return 0

  const dp: number[][] = new Array(m + 1)
    .fill([])
    .map(() => new Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++)
    dp[i][0] = 1

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] === t[j - 1])
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
      else
        dp[i][j] = dp[i - 1][j]
    }
  }

  return dp[m][n]
}
