/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) return

  let slow = 0
  let fast = 0

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
}
