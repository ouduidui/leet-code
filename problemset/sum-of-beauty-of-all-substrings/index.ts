/**
 * 双层循环
 * @desc 时间复杂度 O(CN²) 空间复杂度 O(C)
 * @param s
 * @returns
 */
export function beautySum(s: string): number {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0)
    let maxFreq = 0
    for (let j = i; j < s.length; j++) {
      cnt[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++
      maxFreq = Math.max(maxFreq, cnt[s[j].charCodeAt(0) - 'a'.charCodeAt(0)])
      let minFreq = s.length
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0)
          minFreq = Math.min(minFreq, cnt[k])
      }
      res += maxFreq - minFreq
    }
  }
  return res
}
