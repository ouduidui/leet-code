/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums {number[]}
 * @return {number}
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length

  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right < left + 2 ? right++ : nums.splice(right, 1)
    }
    else {
      left = right
      right++
    }
  }
  return nums.length
}
