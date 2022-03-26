/**
 * 单指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums {number[]}
 */
export function sortColors(nums: number[]): void {
  const len = nums.length
  let point = 0

  // 将0往前挪
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      const temp = nums[i]
      nums[i] = nums[point]
      nums[point] = temp
      point++
    }
  }

  // 将1往前挪
  for (let i = point; i < len; i++) {
    if (nums[i] === 1) {
      const temp = nums[i]
      nums[i] = nums[point]
      nums[point] = temp
      point++
    }
  }
}

/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums {number[]}
 */
export function sortColors2(nums: number[]): void {
  const len = nums.length
  let left = 0
  let right = len - 1
  for (let i = 0; i <= right; i++) {
    // 先移动 2
    while (i <= right && nums[i] === 2) {
      const temp = nums[i]
      nums[i] = nums[right]
      nums[right] = temp
      right--
    }

    // 再移动 1
    if (nums[i] === 0) {
      const temp = nums[i]
      nums[i] = nums[left]
      nums[left] = temp
      left++
    }
  }
}
