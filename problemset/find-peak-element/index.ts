/**
 * 找到最大值
 * desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement(nums: number[]): number {
  let idx = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[idx])
      idx = i
  }

  return idx
}

/**
 * 迭代爬坡
 * desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement2(nums: number[]): number {
  const len = nums.length
  let idx = (Math.random() * len) >> 0 // 从随机点出发

  // 如果不是在峰值，进行行走
  while (!(compare(idx - 1, idx) < 0 && compare(idx, idx + 1) > 0)) {
    idx
      = compare(idx, idx + 1) < 0 ? idx + 1 /* 向右走 */ : idx - 1 /* 向左走 */
  }

  return idx

  // 比较两个点大小
  function compare(i: number, j: number): -1 | 0 | 1 {
    const num1 = get(i)
    const num2 = get(j)
    if (num1 === num2) return 0
    return num1 > num2 ? 1 : -1
  }

  // 取值，考虑边缘情况
  function get(i: number): number {
    return i === -1 || i === len ? -Infinity : nums[i]
  }
}

/**
 * 迭代爬坡
 * desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param nums
 */
export function findPeakElement3(nums: number[]): number {
  const len = nums.length
  let left = 0
  let right = len - 1
  let ans = -1

  while (left <= right) {
    const mid = (left + right) >> 1
    if (compare(mid - 1, mid) < 0 && compare(mid, mid + 1) > 0) {
      ans = mid
      break
    }
    if (compare(mid, mid + 1) < 0)
      left = mid + 1
    else
      right = mid - 1
  }

  return ans

  // 比较两个点大小
  function compare(i: number, j: number): -1 | 0 | 1 {
    const num1 = get(i)
    const num2 = get(j)
    if (num1 === num2) return 0
    return num1 > num2 ? 1 : -1
  }

  // 取值，考虑边缘情况
  function get(i: number): number {
    return i === -1 || i === len ? -Infinity : nums[i]
  }
}
