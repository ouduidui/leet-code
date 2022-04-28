/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function sortArrayByParity(nums: number[]): number[] {
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0)
      res.unshift(nums[i])
    else
      res.push(nums[i])
  }

  return res
}

/**
 * 原地交换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function sortArrayByParity2(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    while (left < right && nums[left] % 2 === 0)
      left++

    while (left < right && nums[right] % 2 === 1)
      right--

    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return nums
}
