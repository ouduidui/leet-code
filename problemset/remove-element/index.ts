/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums {number[]}
 * @param val {number}
 * @return {number}
 */
export function removeElement(nums: number[], val: number): number {
  const len: number = nums.length
  if (!len) return len

  let slowPoint = 0
  let fastPoint = 0

  while (fastPoint < len) {
    if (nums[fastPoint] !== val) {
      nums[slowPoint] = nums[fastPoint]
      slowPoint++
    }
    fastPoint++
  }

  while (nums.length > slowPoint)
    nums.pop()

  return nums.length
}
