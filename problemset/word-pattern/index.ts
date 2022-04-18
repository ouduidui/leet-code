/**
 * 哈希表
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param pattern
 * @param s
 * @returns
 */
export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')
  if (pattern.length !== words.length)
    return false

  const word2ch = new Map<string, string>()
  const ch2word = new Map<string, string>()
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const ch = pattern[i]
    if (
      (word2ch.has(word) && word2ch.get(word) !== ch)
      || (ch2word.has(ch) && ch2word.get(ch) !== word)
    )
      return false

    word2ch.set(word, ch)
    ch2word.set(ch, word)
  }
  return true
}
