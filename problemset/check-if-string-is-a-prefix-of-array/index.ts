/**
 * 逐字符比较
 * @desc 时间复杂度 O(min(M,N)) 空间复杂度 O(1)
 * @param s
 * @param words
 * @returns
 */
export function isPrefixString(s: string, words: string[]): boolean {
  while (words.length && s.length) {
    const word = words.shift()!
    const len = word.length
    const prefix = s.substring(0, len)
    if (word !== prefix) return false
    s = s.substring(len)
  }

  return s.length === 0
}
