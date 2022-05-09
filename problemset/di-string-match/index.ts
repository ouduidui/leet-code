/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function diStringMatch(s: string): number[] {
  const len = s.length
  const ans = new Array(len + 1).fill(0)
  let low = 0
  let high = len

  for (let i = 0; i < len; i++)
    ans[i] = s[i] === 'I' ? low++ : high--

  ans[len] = low

  return ans
}
