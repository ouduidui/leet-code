/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
}

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function maxProduct2(nums: number[]): number {
  let a = nums[0]; let b = nums[1]
  if (a < b) {
    const temp = a
    a = b
    b = temp
  }
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > a) {
      b = a
      a = nums[i]
    }
    else if (nums[i] > b) {
      b = nums[i]
    }
  }
  return (a - 1) * (b - 1)
}
