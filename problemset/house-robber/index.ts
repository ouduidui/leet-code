/**
 * 回溯
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function rob(nums: number[]): number {
  let result = 0
  dfs(nums, 0, 0)

  return result

  function dfs(nums: number[], index: number, sum: number): void {
    if (index >= nums.length) return
    dfs(nums, index + 1, sum)
    sum += nums[index]
    result = Math.max(sum, result)
    dfs(nums, index + 2, sum)
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function rob2(nums: number[]): number {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  let [first, second] = [nums[0], Math.max(nums[0], nums[1])]

  for (let i = 2; i < len; i++)
    [first, second] = [second, Math.max(first + nums[i], second)]

  return second
}
