/**
 * 基于比较的排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param heights
 * @returns
 */
export function heightChecker(heights: number[]): number {
  const sorted = [...heights].sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < heights.length; i++)
    if (sorted[i] !== heights[i]) ans++

  return ans
}

/**
 * 计数排序
 * @desc 时间复杂度 O(N+C)  空间复杂度 O(C)
 * @param heights
 * @returns
 */
export function heightChecker2(heights: number[]): number {
  const max = Math.max(...heights)
  const cnt = new Array(max + 1).fill(0)
  for (const h of heights)
    cnt[h]++

  let idx = 0
  let ans = 0
  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= cnt[i]; j++) {
      if (heights[idx] !== i)
        ans++

      idx++
    }
  }
  return ans
}
