/**
 * 直接遍历
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param strs
 * @returns
 */
export function minDeletionSize(strs: string[]): number {
  const m = strs.length
  const n = strs[0].length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const prev = strs[j - 1][i]
      const curr = strs[j][i]
      if (prev.charCodeAt(0) > curr.charCodeAt(0)) {
        ans++
        break
      }
    }
  }

  return ans
}
