/**
 * 模拟
 * @desc 时间复杂度 O(N) s的长度  空间复杂度 O(1)
 * @param s {String}
 * @return {number}
 */
export function romanToInt(s: string): number {
  const romanMap: Map<string, number> = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ])
  let ans = 0
  const n: number = s.length
  for (let i = 0; i < n; ++i) {
    const value: number = romanMap.get(s[i]) || NaN
    const nextValue: number = romanMap.get(s[i + 1]) || NaN

    if (i < n - 1 && value < nextValue)
      ans -= value
    else
      ans += value
  }
  return ans
}
