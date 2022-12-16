/**
 * 上取整
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @param limit
 * @param goal
 * @returns
 */
export function minElements(nums: number[], limit: number, goal: number): number {
  return Math.abs(((Math.abs(nums.reduce((a, b) => a + b, 0) - goal) + limit - 1) / limit) >> 0)
}
