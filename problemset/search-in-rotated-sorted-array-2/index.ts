/**
 * 二分法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 * @param target
 */
export function search(nums: number[], target: number): boolean {
  if (target === nums[0]) return true

  // 判断target是在左边的递增序列还是在右边的递增序列
  const isRight = target < nums[0]
  let left = 0
  let right = nums.length - 1

  // 更新指针
  while (nums[left] >= nums[right] && left !== right)
    isRight ? left++ : right--

  // 二分法
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target)
      return true

    if (nums[mid] < target)
      left = mid + 1
    else
      right = mid - 1
  }

  return false
}
