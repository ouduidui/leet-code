/**
 * 反向遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function lengthOfLastWord(s: string): number {
  let ans = 0
  let i = s.length - 1

  while (s[i] === ' ') i--

  while (i >= 0 && s[i] !== ' ') {
    ans++
    i--
  }

  return ans
}
