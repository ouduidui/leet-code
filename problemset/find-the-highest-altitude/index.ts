/**
 * 前缀和
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param gain
 * @returns
 */
export function largestAltitude(gain: number[]): number {
  let ans = 0; let sum = 0
  for (const x of gain) {
    sum += x
    ans = Math.max(ans, sum)
  }
  return ans
}
