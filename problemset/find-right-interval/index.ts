/**
 * 二分法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 * @returns
 */
export function findRightInterval(intervals: number[][]): number[] {
  const len = intervals.length
  if (len <= 1) return [-1]

  const startIntervals: [startNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])

  for (let i = 0; i < len; i++) {
    startIntervals[i][0] = intervals[i][0]
    startIntervals[i][1] = i
  }

  startIntervals.sort((a, b) => a[0] - b[0])

  const ans: number[] = []

  for (let i = 0; i < len; i++) {
    let left = 0
    let right = len - 1
    let target = -1

    while (left <= right) {
      const mid = (left + right) >> 1
      if (startIntervals[mid][0] >= intervals[i][1]) {
        target = startIntervals[mid][1]
        right = mid - 1
      }
      else {
        left = mid + 1
      }
    }
    ans[i] = target
  }

  return ans
}

/**
 * 双指针
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param intervals
 * @returns
 */
export function findRightInterval2(intervals: number[][]): number[] {
  const len = intervals.length
  if (len <= 1) return [-1]

  const startIntervals: [startNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])
  const endIntervals: [endNum: number, index: number][]
  = new Array(len).fill([]).map(() => [0, 0])

  for (let i = 0; i < len; i++) {
    startIntervals[i][0] = intervals[i][0]
    startIntervals[i][1] = i
    endIntervals[i][0] = intervals[i][1]
    endIntervals[i][1] = i
  }

  startIntervals.sort((a, b) => a[0] - b[0])
  endIntervals.sort((a, b) => a[0] - b[0])

  const ans: number[] = []

  for (let i = 0, j = 0; i < len; i++) {
    while (j < len && endIntervals[i][0] > startIntervals[j][0]) j++
    ans[endIntervals[i][1]] = j < len ? startIntervals[j][1] : -1
  }

  return ans
}
