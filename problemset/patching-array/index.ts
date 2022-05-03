/**
 * 贪心
 * @desc 时间复杂度 O(M + logN)  空间复杂度 O(1)
 * @param nums
 * @param n
 * @returns
 */
export function minPatches(nums: number[], n: number): number {
  let patches = 0
  let target = 1
  const len = nums.length
  let i = 0
  while (target <= n) {
    // 如果 i 在 nums 下标范围内且 nums[i] 小于等于 target，则将该值加给target，并将 i 加一
    if (i < len && nums[i] <= target) {
      target += nums[i++]
    }
    // 否则，则代表target没有被覆盖，因此需要在数组中补充target，然后将target乘以 2
    else {
      target *= 2
      patches++
    }
  }

  return patches
}
