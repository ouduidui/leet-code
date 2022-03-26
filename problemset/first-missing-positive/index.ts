/**
 * 原地哈希表
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums {number[]}
 * @return {number}
 */
export function firstMissingPositive(nums: number[]): number {
  const len: number = nums.length
  // 先将小于0的设置为 len + 1
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0)
      nums[i] = len + 1
  }

  /**
   * 做标记
   *  - 当一个len长度整数数组，缺失的第一个正数一定小于等于 len + 1
   *  - 因此获取每个值的绝对值作为下标，当其大于len的时候，直接跳过
   *  - 如果小于等于len时，在 idx - 1 位置设置为-1
   *  - 这就意味着，我们将数组的下标作为一个整数映射，然后存在时val为正数，不存在为负数
   */
  for (let i = 0; i < len; i++) {
    const idx: number = Math.abs(nums[i])
    if (idx <= len)
      nums[idx - 1] = -Math.abs(nums[idx - 1])
  }

  // 最后遍历，找出为整数的下标i，则 i+1 就为缺失的正数
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0)
      return i + 1
  }

  return len + 1
}
