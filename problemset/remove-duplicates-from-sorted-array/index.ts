/**
 * 双指针
 * @desc 时间复杂度 O(n)  空间复杂度 O(1)
 * @param nums {number[]}
 * @return {number}
 */
export function removeDuplicates(nums: number[]): number {
  let slowPoint = 1
  let fastPoint = 1

  while (fastPoint < nums.length) {
    if (nums[fastPoint] !== nums[fastPoint - 1]) {
      nums[slowPoint] = nums[fastPoint]
      slowPoint++
    }
    fastPoint++
  }

  while (slowPoint < nums.length)
    nums.pop()

  return nums.length
}
