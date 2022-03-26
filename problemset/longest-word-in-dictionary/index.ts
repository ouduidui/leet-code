/**
 * 哈希集合
 * @param words
 */
export function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    }
    else {
      // 判断a，b在字典中的排序
      return b.localeCompare(a)
    }
  })

  let longest = ''
  const set = new Set<string>()
  set.add('')

  const len = words.length
  for (let i = 0; i < len; i++) {
    const word = words[i]
    if (set.has(word.slice(0, word.length - 1))) {
      set.add(word)
      longest = word
    }
  }

  return longest
}
