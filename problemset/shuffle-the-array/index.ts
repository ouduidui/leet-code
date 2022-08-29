/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param n
 * @returns
 */
export function shuffle(nums: number[], n: number): number[] {
  const ans = new Array(2 * n).fill(0)
  for (let i = 0; i < n; i++) {
    ans[2 * i] = nums[i]
    ans[2 * i + 1] = nums[i + n]
  }
  return ans
}
