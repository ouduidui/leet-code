/**
 * 动态规划
 * @desc 时间复杂度 O(Target*M*N) 空间复杂度 O(Target)
 * @param baseCosts
 * @param toppingCosts
 * @param target
 * @returns
 */
export function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
  const x = Math.min(...baseCosts)
  if (x >= target)
    return x

  const can = new Array(target + 1).fill(0)
  let res = 2 * target - x

  for (const b of baseCosts) {
    if (b <= target) can[b] = true
    else res = Math.min(res, b)
  }

  for (const t of toppingCosts) {
    for (let count = 0; count < 2; ++count) {
      for (let i = target; i > 0; --i) {
        if (can[i] && i + t > target) res = Math.min(res, i + t)
        if (i - t > 0) can[i] = can[i] | can[i - t]
      }
    }
  }

  for (let i = 0; i <= res - target; ++i) {
    if (can[target - i])
      return target - i
  }

  return res
}
