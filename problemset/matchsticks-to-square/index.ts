/**
 * 回溯
 * @desc 时间复杂度 O(4^N)  空间复杂度 O(N)
 * @param matchsticks
 * @returns
 */
export function makesquare(matchsticks: number[]): boolean {
  const totalLen = matchsticks.reduce((acc, cur) => acc + cur, 0)
  if (totalLen % 4 !== 0) return false

  matchsticks.sort((a, b) => b - a)
  return dfs (0, matchsticks, [0, 0, 0, 0], totalLen / 4)

  function dfs(
    index: number,
    matchsticks: number[],
    edges: [number, number, number, number],
    len: number,
  ) {
    if (index === matchsticks.length) return true

    for (let i = 0; i < edges.length; i++) {
      edges[i] += matchsticks[index]
      if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) return true
      edges[i] -= matchsticks[index]
    }
    return false
  }
}

/**
 * 状态压缩 + 动态规划
 * @desc 时间复杂度 O(N*2^N)  空间复杂度 O(N)
 * @param matchsticks
 * @returns
 */
export function makesquare2(matchsticks: number[]): boolean {
  const totalLen = matchsticks.reduce((acc, cur) => acc + cur, 0)
  if (totalLen % 4 !== 0) return false

  const len = totalLen / 4
  const n = matchsticks.length
  const dp = new Array(1 << n).fill(-1)
  dp[0] = 0

  for (let s = 1; s < (1 << n); s++) {
    for (let k = 0; k < n; k++) {
      if ((s & (1 << k)) === 0) continue

      const s1 = s & ~(1 << k)
      if (dp[s1] >= 0 && dp[s1] + matchsticks[k] <= len) {
        dp[s] = (dp[s1] + matchsticks[k]) % len
        break
      }
    }
  }
  return dp[(1 << n) - 1] === 0
}
