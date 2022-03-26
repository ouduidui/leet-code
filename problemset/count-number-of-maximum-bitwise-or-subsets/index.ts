/**
 * 回溯
 * @desc 时间复杂度 O(2^N)   空间复杂度 O(N)
 * @param nums
 */
export function countMaxOrSubsets(nums: number[]): number {
  const len = nums.length
  let max = 0
  let count = 0
  dfs(0, 0)
  return count

  function dfs(pos: number, or: number) {
    if (pos === len) {
      if (or === max) { count++ }
      else if (or > max) {
        count = 1
        max = or
      }
      return
    }

    dfs(pos + 1, or | nums[pos])
    dfs(pos + 1, or)
  }
}

/**
 * 位运算
 * @param nums
 */
export function countMaxOrSubsets2(nums: number[]): number {
  let max = 0
  let count = 0
  const len = nums.length
  // len 长度的数组有 2^len - 1 种非空子集情况
  // 通过二进制来分别每一种情况
  for (let i = 0; i < 1 << len; i++) {
    let or = 0
    for (let j = 0; j < len; j++) {
      // 判断当前的子集中，当前这个元素是否包含在里面
      if (((i >> j) & 1) === 1)
        or |= nums[j]
    }
    if (or > max) {
      max = or
      count = 1
    }
    else if (or === max) {
      count++
    }
  }

  return count
}
