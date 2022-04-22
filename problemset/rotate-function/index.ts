/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxRotateFunction(nums: number[]): number {
  if (nums.length <= 1) return 0

  const len = nums.length

  let sum = 0
  let f = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    f += i * nums[i]
  }

  let res = f
  for (let i = 1; i < len; i++) {
    // F(K) = F(K - 1) + SUM - LEN * NUMS[LEN - K]
    f = f + sum - len * nums[len - i]
    res = Math.max(f, res)
  }

  return res
}
