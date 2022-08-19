/**
 * 枚举
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const n = startTime.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime)
      ans++
  }
  return ans
}

/**
 * 差分数组
 * @desc 时间复杂度 O(N+queryTime)  空间复杂度 O(max(endTime))
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent2(startTime: number[], endTime: number[], queryTime: number): number {
  const n = startTime.length
  const maxEndTime = Math.max(...endTime)
  if (queryTime > maxEndTime) return 0

  const cnt = new Array(maxEndTime + 2).fill(0)
  for (let i = 0; i < n; i++) {
    cnt[startTime[i]]++
    cnt[endTime[i] + 1]--
  }
  let ans = 0
  for (let i = 0; i <= queryTime; i++)
    ans += cnt[i]

  return ans
}

/**
 * 二分查找
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param startTime
 * @param endTime
 * @param queryTime
 * @returns
 */
export function busyStudent3(startTime: number[], endTime: number[], queryTime: number): number {
  startTime.sort((a, b) => a - b)
  endTime.sort((a, b) => a - b)
  const lessStart = upperbound(startTime, 0, startTime.length - 1, queryTime)
  const lessEnd = lowerbound(endTime, 0, endTime.length - 1, queryTime)
  return lessStart - lessEnd

  function upperbound(arr: number[], l: number, r: number, target: number) {
    let ans = r + 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] > target) {
        ans = mid
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return ans
  }

  function lowerbound(arr: number[], l: number, r: number, target: number) {
    let ans = r + 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] >= target) {
        ans = mid
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return ans
  }
}
