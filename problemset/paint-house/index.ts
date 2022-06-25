/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param costs
 * @returns
 */
export function minCost(costs: number[][]): number {
  const len = costs.length
  let dp = [...costs[0]]

  for (let i = 1; i < len; i++) {
    const newDp = [0, 0, 0]
    for (let j = 0; j < 3; j++) {
      newDp[j] = Math.min(
        dp[(j + 1) % 3],
        dp[(j + 2) % 3],
      ) + costs[i][j]
    }
    dp = newDp
  }

  return Math.min(...dp)
}
