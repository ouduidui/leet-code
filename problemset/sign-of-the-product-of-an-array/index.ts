/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function arraySign(nums: number[]): number {
  let sign = 1
  for (const num of nums) {
    if (num === 0)
      return 0

    if (num < 0)
      sign = -sign
  }
  return sign
}
