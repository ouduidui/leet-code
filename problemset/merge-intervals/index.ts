/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 */
export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals

  // 排序
  intervals.sort((a, b) => a[0] - b[0])

  const ans: number[][] = []

  for (let i = 0; i < intervals.length; i++) {
    if (i === intervals.length - 1 || intervals[i + 1][0] > intervals[i][1]) {
      // 当到了最后一个或者当下一个的左边界大于这个的右边界时
      ans.push(intervals[i])
    }
    else {
      // 合并
      intervals[i + 1] = [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ]
    }
  }

  return ans
}
