/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function minSubsequence(nums: number[]): number[] {
  const total = nums.reduce((sum, num) => sum + num, 0)
  nums.sort((a, b) => a - b)
  const ans = []
  let curr = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    curr += nums[i]
    ans.push(nums[i])
    if (total - curr < curr) break
  }

  return ans
}
