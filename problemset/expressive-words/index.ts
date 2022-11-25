/**
 * 双指针
 * @param s
 * @param words
 * @returns
 */
export function expressiveWords(s: string, words: string[]): number {
  let ans = 0
  for (const word of words) {
    if (expand(s, word))
      ++ans
  }
  return ans

  function expand(s: string, t: string) {
    let i = 0; let j = 0
    while (i < s.length && j < t.length) {
      if (s[i] !== t[j])
        return false

      const ch = s[i]
      let cnti = 0
      while (i < s.length && s[i] === ch) {
        ++cnti
        ++i
      }
      let cntj = 0
      while (j < t.length && t[j] === ch) {
        ++cntj
        ++j
      }
      if (cnti < cntj)
        return false

      if (cnti !== cntj && cnti < 3)
        return false
    }
    return i === s.length && j === t.length
  }
}
