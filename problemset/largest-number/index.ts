/**
 * 排序
 * @desc 时间复杂度 O(NlogNlogM)  空间复杂度 O(logN)
 * @param nums
 */
export function largestNumber(nums: number[]): string {
  // [4, 42] -> 442 > 424 -> [4, 24]
  // [4, 45] -> 454 > 445 -> [45, 4]
  nums.sort((x, y) => {
    let sx = 10
    let sy = 10
    while (sx <= x) sx *= 10
    while (sy <= y) sy *= 10
    return sx * y + x - (sy * x + y)
  })

  if (nums[0] === 0) return '0'

  return nums.join('')
}
