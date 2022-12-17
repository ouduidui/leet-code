/**
 * 贪心 + 双指针
 * @desc 时间复杂度 O(N * MAX(G(i))) 空间复杂度 O(1)
 * @param groups
 * @param nums
 * @returns
 */
export function canChoose(groups: number[][], nums: number[]): boolean {
  let i = 0
  for (let k = 0; k < nums.length && i < groups.length;) {
    if (check(groups[i], nums, k)) {
      k += groups[i].length
      i++
    }
    else {
      k++
    }
  }
  return i === groups.length

  function check(g: number[], nums: number[], k: number) {
    if (k + g.length > nums.length)
      return false

    for (let j = 0; j < g.length; j++) {
      if (g[j] !== nums[k + j])
        return false
    }
    return true
  }
}
