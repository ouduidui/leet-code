/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  let i = 0
  const len = nums.length
  while (i < len) {
    const low = i
    i++
    while (i < len && nums[i] === nums[i - 1] + 1)
      i++

    const high = i - 1

    if (low < high)
      result.push(`${nums[low]}->${nums[high]}`)
    else
      result.push(`${nums[low]}`)
  }

  return result
}
