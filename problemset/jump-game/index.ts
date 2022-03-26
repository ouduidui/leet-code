/**
 * 贪心算法
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param nums
 */
export function canJump(nums: number[]): boolean {
  const len = nums.length
  // 移动步数
  let move = 0

  for (let i = 0; i < len; i++) {
    if (i <= move) {
      move = Math.max(move, i + nums[i])
      if (move >= len - 1)
        return true
    }
  }

  return false
}
