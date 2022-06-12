/**
 * 构建双射
 * @desc 时间复杂度 O(MN)  空间复杂度 O(N)
 * @param words
 * @param pattern
 * @returns
 */
export function findAndReplacePattern(words: string[], pattern: string): string[] {
  const ans: string[] = []
  for (const word of words)
    if (match(word, pattern) && match(pattern, word)) ans.push(word)
  return ans

  function match(word: string, pattern: string) {
    const map = new Map<string, string>()
    for (let i = 0; i < word.length; i++) {
      const x = word[i]
      const y = pattern[i]
      if (!map.has(x))
        map.set(x, y)

      else if (map.get(x) !== y)
        return false
    }

    return true
  }
}
