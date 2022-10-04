/**
 * 贪心
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 * @returns
 */
export function minAddToMakeValid(s: string): number {
  let ans = 0
  let leftCount = 0
  const length = s.length
  for (let i = 0; i < length; i++) {
    const c = s[i]
    if (c === '(') {
      leftCount++
    }
    else {
      if (leftCount > 0) leftCount--
      else ans++
    }
  }
  ans += leftCount
  return ans
}
