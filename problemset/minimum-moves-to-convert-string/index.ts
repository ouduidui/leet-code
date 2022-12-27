/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minimumMoves(s: string): number {
  let covered = -1
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'X' && i > covered) {
      res++
      covered = i + 2
    }
  }
  return res
}
