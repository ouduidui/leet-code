/**
 * 分情况讨论
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)/O(logN)
 * @param s
 * @param k
 * @returns
 */
export function orderlyQueue(s: string, k: number): string {
  if (k === 1) {
    let ans = s
    for (let i = 0; i < s.length - 1; i++) {
      const len = s.length
      s = s.substring(1, len) + s[0]
      ans = ans < s ? ans : s
    }

    return ans
  }

  return [...s].sort().join('')
}
