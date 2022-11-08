/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param allowed
 * @param words
 * @returns
 */
export function countConsistentStrings(allowed: string, words: string[]): number {
  let mask = 0
  for (let i = 0; i < allowed.length; i++) {
    const c = allowed[i]
    mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
  }
  let res = 0
  for (const word of words) {
    let mask1 = 0
    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      mask1 |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    if ((mask1 | mask) === mask)
      res++
  }
  return res
}
