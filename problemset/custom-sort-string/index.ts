/**
 * 自定义排序
 * @desc 时间复杂度 O(NlogN+∣Σ∣) 空间复杂度 O(∣Σ∣)
 * @param order
 * @param s
 * @returns
 */
export function customSortString(order: string, s: string): string {
  const val: number[] = new Array(26).fill(0)
  for (let i = 0; i < order.length; ++i)
    val[order[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i + 1

  const arr = new Array(s.length).fill(0).map((_, i) => s[i])
  arr.sort((c0, c1) =>
    val[c0.charCodeAt(0) - 'a'.charCodeAt(0)]
    - val[c1.charCodeAt(0) - 'a'.charCodeAt(0)],
  )

  return arr.join('')
}

/**
 * 计数排序
 * @desc 时间复杂度 O(N+∣Σ∣) 空间复杂度 O(∣Σ∣)
 * @param order
 * @param s
 * @returns
 */
export function customSortString2(order: string, s: string): string {
  const freq: number[] = new Array(26).fill(0)
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    ++freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  let ans = ''
  for (let i = 0; i < order.length; ++i) {
    const ch = order[i]
    while (freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
      ans += ch
      freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
  }
  for (let i = 0; i < 26; ++i) {
    while (freq[i] > 0) {
      ans += String.fromCharCode(i + 'a'.charCodeAt(0))
      freq[i]--
    }
  }
  return ans
}
