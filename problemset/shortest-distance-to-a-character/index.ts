/**
 * 两次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @param c
 * @returns
 */
export function shortestToChar(s: string, c: string): number[] {
  const len = s.length
  const ans = new Array(len).fill(0)

  for (let i = 0, idx = -len; i < len; ++i) {
    if (s[i] === c) idx = i
    ans[i] = i - idx
  }

  for (let i = len - 1, idx = 2 * len; i >= 0; --i) {
    if (s[i] === c) idx = i
    ans[i] = Math.min(ans[i], idx - i)
  }
  return ans
}
