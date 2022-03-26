/**
 * 滑动窗口
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param target
 * @param nums
 * @returns
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0
  let sum = 0
  let minLen = Infinity

  while (right < nums.length) {
    sum += nums[right]
    right++

    while (sum >= target) {
      minLen = Math.min(minLen, right - left)
      sum -= nums[left]
      left++
    }
  }

  return minLen === Infinity ? 0 : minLen
}
