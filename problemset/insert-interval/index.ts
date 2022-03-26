/**
 * 模拟
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param intervals
 * @param newInterval
 */
export function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  if (!intervals.length) return [newInterval]

  const ans: number[][] = []

  let i = 0
  let isInsert = false // 判断是否已经插入

  while (i < intervals.length) {
    if (intervals[i][1] < newInterval[0]) {
      // 当小于 newInterval 区间的直接插入，无需已经合并对比
      ans.push(intervals[i])
    }
    else {
      // 将 newInterval 插入到 intervals
      if (!isInsert) {
        // 判断插入位置
        const spliceIndex = newInterval[0] < intervals[i][0] ? i : i + 1
        intervals.splice(spliceIndex, 0, newInterval)
        isInsert = true
      }

      // 对比合并
      const cur = intervals[i]
      const next = intervals[i + 1]
      if (next && cur[1] >= next[0])
        intervals[i + 1] = [cur[0], Math.max(cur[1], next[1])]
      else
        ans.push(intervals[i])
    }

    i++
  }

  // 如果遍历完还未插入，则将 newInterval 放置最后即可
  if (!isInsert) ans.push(newInterval)

  return ans
}
