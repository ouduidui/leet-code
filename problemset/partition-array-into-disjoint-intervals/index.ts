/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function partitionDisjoint(nums: number[]): number {
  const n = nums.length
  let leftMax = nums[0]
  let leftPos = 0
  let curMax = nums[0]
  for (let i = 1; i < n - 1; i++) {
    curMax = Math.max(curMax, nums[i])
    if (nums[i] < leftMax) {
      leftMax = curMax
      leftPos = i
    }
  }
  return leftPos + 1
}
