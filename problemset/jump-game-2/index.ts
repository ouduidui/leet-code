/**
 * 贪心算法 - 反向查找
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function jump(nums: number[]): number {
  let position = nums.length - 1
  let steps = 0
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        steps++
        break
      }
    }
  }

  return steps
}

/**
 * 贪心算法 - 正向查找
 * @desc 时间复杂度 O(n)   空间复杂度 O(1)
 * @param nums
 */
export function jump2(nums: number[]): number {
  const len = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0

  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      end = maxPosition
      steps++
    }
  }

  return steps
}
