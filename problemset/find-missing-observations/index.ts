/**
 * 模拟
 * @desc 时间复杂度 O(M + N)   空间复杂度 O(1)
 * @param rolls
 * @param mean
 * @param n
 */
export function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length
  let sum = (m + n) * mean - rolls.reduce((a, c) => a + c, 0)
  if (sum > n * 6 || sum < n) return []

  const result = new Array(n).fill(1)
  sum -= n

  for (let i = 0; i < n; i++) {
    if (sum > 5) {
      result[i] += 5
      sum -= 5
    }
    else {
      result[i] += sum
      break
    }
  }

  return result
}
