/**
 * 将元素交换到对应的位置
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicates(nums: number[]): number[] {
  const swap = (i: number, j: number) =>
    [nums[i], nums[j]] = [nums[j], nums[i]]

  const len = nums.length

  for (let i = 0; i < len; i++) {
    while (nums[i] !== nums[nums[i] - 1])
      swap(i, nums[i] - 1)
  }

  const ans: number[] = []
  for (let i = 0; i < len; i++) {
    if (i !== nums[i] - 1)
      ans.push(nums[i])
  }

  return ans
}

/**
 * 使用正负号作为标记
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function findDuplicates2(nums: number[]): number[] {
  const len = nums.length
  const ans: number[] = []
  for (let i = 0; i < len; ++i) {
    const x = Math.abs(nums[i])
    if (nums[x - 1] > 0)
      nums[x - 1] = -nums[x - 1]
    else
      ans.push(x)
  }
  return ans
}
