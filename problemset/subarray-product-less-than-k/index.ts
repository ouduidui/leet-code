/**
 * 滑动窗口
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @param k
 * @returns
 */
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const len = nums.length
  let ans = 0
  let prod = 1
  let left = 0
  for (let right = 0; right < len; right++) {
    prod *= nums[right]
    while (left <= right && prod >= k) {
      prod /= nums[left]
      left++
    }
    ans += right - left + 1
  }
  return ans
}
