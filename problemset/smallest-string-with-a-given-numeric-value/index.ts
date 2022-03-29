/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param k
 * @returns
 */
export function getSmallestString(n: number, k: number): string {
  const res = new Array(n).fill('a')
  k -= n

  for (let i = n - 1; i >= 0 && k > 0; i--) {
    if (k > 25) {
      k -= 25
      res[i] = 'z'
    }
    else {
      res[i] = String.fromCharCode(97 + k)
      k = 0
    }
  }

  return res.join('')
}
